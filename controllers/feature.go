package controllers

import (
	"sort"
	"strconv"

	"go_binance_futures/feature"
	"go_binance_futures/feature/api/binance"
	"go_binance_futures/models"
	"go_binance_futures/utils"

	"github.com/adshao/go-binance/v2/futures"
	"github.com/beego/beego/v2/client/orm"
	"github.com/beego/beego/v2/server/web"
)

type FeatureController struct {
	web.Controller
}

func (ctrl *FeatureController) Get() {
	paramsSort := ctrl.GetString("sort")
	
	o := orm.NewOrm()
	var symbols []models.Symbols
	_, err := o.QueryTable("symbols").OrderBy("ID").All(&symbols)
	if err != nil {
		ctrl.Ctx.Resp(utils.ResJson(400, nil, "error"))
	}
	
	sort.SliceStable(symbols, func(i, j int) bool {
		if paramsSort == "+" {
			return symbols[i].PercentChange >= symbols[j].PercentChange // 涨幅从大到小排序
		} else if paramsSort == "-" {
			return symbols[i].PercentChange < symbols[j].PercentChange // 涨幅从小到大排序
		} else {
			return true
		}
	})

	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": symbols,
		"msg": "success",
	})
}

func (ctrl *FeatureController) Edit() {
	id := ctrl.Ctx.Input.Param(":id")
	symbols := new(models.Symbols)
	ctrl.BindJSON(&symbols)
	intId, _ := strconv.ParseInt(id, 10, 64)
	symbols.ID = intId
	
	marginType := futures.MarginTypeIsolated
	if symbols.MarginType == "CROSSED" {
		marginType = futures.MarginTypeCrossed
	}
	
	go func() {
		binance.SetLeverage(symbols.Symbol, int(symbols.Leverage))  // 修改合约倍数
		binance.SetMarginType(symbols.Symbol, marginType) // 修改仓位模式
		feature.UpdateSymbolsTradePrecision() // 更新合约交易精度
	}()
	
	o := orm.NewOrm()
	_, err := o.Update(symbols) // _ 是受影响的条数
    if err != nil {
        // 处理错误
		ctrl.Ctx.Resp(utils.ResJson(400, nil, "修改失败"))
		return
    }
	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": symbols,
		"msg": "success",
	})
}

func (ctrl *FeatureController) Delete() {
	id := ctrl.Ctx.Input.Param(":id")
	symbols := new(models.Symbols)
	intId, _ := strconv.ParseInt(id, 10, 64)
	symbols.ID = intId
	o := orm.NewOrm()
	
	_, err := o.Delete(symbols)
    if err != nil {
        // 处理错误
		ctrl.Ctx.Resp(utils.ResJson(400, nil, "删除错误"))
		return
    }
	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"msg": "success",
	})
}

func (ctrl *FeatureController) Post() {
	symbols := new(models.Symbols)
	ctrl.BindJSON(&symbols)
	symbols.PercentChange = 0
	symbols.Close = "0"
	symbols.Open = "0"
	symbols.Low = "0"
	
	symbols.Leverage = 10
	symbols.MarginType = "ISOLATED"
	symbols.StepSize = "0.1"
	symbols.TickSize = "0.1"
	symbols.Usdt = "10"
	
	o := orm.NewOrm()
	id, err := o.Insert(symbols)
	
	go func() {
		feature.UpdateSymbolsTradePrecision() // 更新合约交易精度
	}()
	
    if err != nil {
        // 处理错误
		ctrl.Ctx.Resp(utils.ResJson(400, nil, "新增失败"))
		return
    }
	symbols.ID = id
	
	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": symbols,
		"msg": "success",
	})
}

func (ctrl *FeatureController) UpdateEnable() {
	flag := ctrl.Ctx.Input.Param(":flag")
	
	o := orm.NewOrm()
	_, err := o.Raw("UPDATE symbols SET enable = ?", flag).Exec()
	if err != nil {
		// 处理错误
		ctrl.Ctx.Resp(utils.ResJson(400, nil, "更新错误"))
		return
	}
	ctrl.Ctx.Resp(utils.ResJson(200, nil))
}