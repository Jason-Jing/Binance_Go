package controllers

import (
	"go_binance_futures/feature/api/binance"
	"math"
	"strconv"

	"github.com/adshao/go-binance/v2/futures"
	"github.com/beego/beego/v2/server/web"
)

type AccountController struct {
	web.Controller
}

func (ctrl *AccountController) GetBinanceFuturesAccount() {
	account, err := binance.GetFuturesAccount()
	
	if err != nil {
		ctrl.Ctx.Resp(map[string]interface{} {
			"code": 400,
			"msg": err.Error(),
		})
	}
	
	var assets = make([]*futures.AccountAsset, len(account.Assets))
	for _, asset := range account.Assets {
		walletBalance, _ := strconv.ParseFloat(asset.WalletBalance, 64)
		if walletBalance < 0.0000001 {
			continue
		}
		assets = append(assets, asset)
	}
	
	var positions = make([]*futures.AccountPosition, len(account.Positions))
	for _, position := range account.Positions {
		positionAmt, _ := strconv.ParseFloat(position.PositionAmt, 64)
		positionAmtFloatAbs := math.Abs(positionAmt) // 空单为负数,纠正为绝对值
		if positionAmtFloatAbs < 0.0000001 {
			continue
		}
		positions = append(positions, position)
	}
	
	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": map[string]interface{} {
			"assets": assets,
			"positions": positions,
		},
		"msg": "success",
	})
}

func (ctrl *AccountController) GetBinanceFuturesPositions() {
	allPositions, err := binance.GetPosition(binance.PositionParams{})
	if err != nil {
		ctrl.Ctx.Resp(map[string]interface{} {
			"code": 400,
			"msg": err.Error(),
		})
	}
	
	var positions []*futures.PositionRisk
	for _, position := range allPositions {
		positionAmt, _ := strconv.ParseFloat(position.PositionAmt, 64)
		positionAmtFloatAbs := math.Abs(positionAmt) // 空单为负数,纠正为绝对值
		if positionAmtFloatAbs < 0.0000001 {
			continue
		}
		positions = append(positions, position)
	}

	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": map[string]interface{} {
			"positions": positions,
		},
		"msg": "success",
	})
}

func (ctrl *AccountController) GetBinanceFuturesOpenOrders() {
	allOpenOrders, err := binance.GetOpenOrder()
	
	if err != nil {
		ctrl.Ctx.Resp(map[string]interface{} {
			"code": 400,
			"msg": err.Error(),
		})
	}

	ctrl.Ctx.Resp(map[string]interface{} {
		"code": 200,
		"data": map[string]interface{} {
			"openOrders": allOpenOrders,
		},
		"msg": "success",
	})
}
