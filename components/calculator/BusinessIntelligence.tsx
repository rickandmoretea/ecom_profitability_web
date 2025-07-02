'use client'

import React from 'react';
import { TrendingUp, Target, AlertCircle, Calculator, DollarSign } from 'lucide-react';
import { CalculationResult, BusinessExpenses } from './types';

interface BusinessIntelligenceProps {
  results: {
    shopee: CalculationResult;
    lazada: CalculationResult;
    tiktok: CalculationResult;
  };
  businessExpenses: BusinessExpenses;
  productPrice: number;
  productCost: number;
  orderQuantity: number;
  language: 'th' | 'en';
  t: {
    businessIntelligence: string;
    breakEvenAnalysis: string;
    targetPrice: string;
    profitabilityStatus: string;
    platformDifference: string;
    totalCosts: string;
    recommendations: string;
    bestPlatformBreakEven: string;
    minimumPriceToCover: string;
    forTargetMargin: string;
    recommendedSellingPrice: string;
    profitable: string;
    notProfitable: string;
    bestPlatform: string;
    considerIncreasingPrice: string;
    bestVsWorst: string;
    productCostLabel: string;
    shippingLabel: string;
    marketingLabel: string;
    packagingLabel: string;
    returnsLabel: string;
    increaseSellingPrice: string;
    focusOnPlatform: string;
    improveProductQuality: string;
    reviewMarketingCosts: string;
    increasePriceForMargin: string;
    netRevenue: string;
    grossProfit: string;
  };
}

const BusinessIntelligence: React.FC<BusinessIntelligenceProps> = ({
  results,
  businessExpenses,
  productPrice,
  productCost,
  orderQuantity,
  language,
  t
}) => {
  const bestPlatform = Object.entries(results).reduce((best, [platform, result]) => 
    result.grossProfit > best.profit ? { platform, profit: result.grossProfit } : best
  , { platform: 'shopee', profit: results.shopee.grossProfit });

  const worstPlatform = Object.entries(results).reduce((worst, [platform, result]) => 
    result.grossProfit < worst.profit ? { platform, profit: result.grossProfit } : worst
  , { platform: 'shopee', profit: results.shopee.grossProfit });

  const profitDifference = bestPlatform.profit - worstPlatform.profit;
  const isProfitable = bestPlatform.profit > 0;
  const isAtTargetMargin = Object.values(results).some(result => 
    result.profitMargin >= businessExpenses.targetProfitMargin
  );

  const bestResult = results[bestPlatform.platform as keyof typeof results];

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 mb-6 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        {t.businessIntelligence}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Break-even Analysis */}
        <div className="bg-blue-50 rounded-lg p-4 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-blue-800">{t.breakEvenAnalysis}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>{t.bestPlatformBreakEven}</strong></p>
            <p className="text-lg font-bold text-blue-700">
              ฿{results[bestPlatform.platform as keyof typeof results].breakEvenPrice.toFixed(0)}
            </p>
            <p className="text-xs text-gray-600">
              {t.minimumPriceToCover} {bestPlatform.platform}
            </p>
          </div>
        </div>

        {/* Target Margin Analysis */}
        <div className="bg-green-50 rounded-lg p-4 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-green-800">{t.targetPrice}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>{t.forTargetMargin.replace('{margin}', businessExpenses.targetProfitMargin.toString())}:</strong></p>
            <p className="text-lg font-bold text-green-700">
              ฿{results[bestPlatform.platform as keyof typeof results].targetPriceForMargin?.toFixed(0)}
            </p>
            <p className="text-xs text-gray-600">
              {t.recommendedSellingPrice}
            </p>
          </div>
        </div>

        {/* Profitability Alert */}
        <div className={`rounded-lg p-4 w-full max-w-screen-sm mx-auto ${isProfitable ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className={`w-5 h-5 ${isProfitable ? 'text-green-600' : 'text-red-600'}`} />
            <h3 className={`font-semibold ${isProfitable ? 'text-green-800' : 'text-red-800'}`}>
              {t.profitabilityStatus}
            </h3>
          </div>
          <div className="space-y-2 text-sm">
            {isProfitable ? (
              <>
                <p className="text-green-700 font-medium">{t.profitable}</p>
                <p className="text-xs text-gray-600">
                  {t.bestPlatform} {bestPlatform.platform} (฿{bestPlatform.profit.toFixed(0)})
                </p>
              </>
            ) : (
              <>
                <p className="text-red-700 font-medium">{t.notProfitable}</p>
                <p className="text-xs text-gray-600">
                  {t.considerIncreasingPrice}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Platform Comparison */}
        <div className="bg-purple-50 rounded-lg p-4 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-purple-800">{t.platformDifference}</h3>
          </div>
          <div className="space-y-2 text-sm">
            <p><strong>{t.bestVsWorst}:</strong></p>
            <p className="text-lg font-bold text-purple-700">
              ฿{profitDifference.toFixed(0)}
            </p>
            <p className="text-xs text-gray-600">
              {bestPlatform.platform} vs {worstPlatform.platform}
            </p>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-orange-50 rounded-lg p-4 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-orange-800">{t.totalCosts}</h3>
          </div>
          <div className="space-y-1 text-sm">
            <p><strong>{t.productCostLabel}</strong> ฿{productCost}</p>
            <p><strong>{t.shippingLabel}</strong> ฿{businessExpenses.shippingCost}</p>
            <p><strong>{t.marketingLabel}</strong> ฿{businessExpenses.marketingCost}</p>
            <p><strong>{t.packagingLabel}</strong> ฿{businessExpenses.packagingCost}</p>
            <p><strong>{t.returnsLabel}</strong> ฿{((productPrice * businessExpenses.returnsRate) / 100).toFixed(0)}</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-indigo-50 rounded-lg p-4 w-full max-w-screen-sm mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-indigo-600" />
            <h3 className="font-semibold text-indigo-800">{t.recommendations}</h3>
          </div>
          <div className="space-y-2 text-sm text-indigo-700">
            {!isProfitable && (
              <p>{t.increaseSellingPrice}</p>
            )}
            {profitDifference > 100 && (
              <p>{t.focusOnPlatform.replace('{platform}', bestPlatform.platform)}</p>
            )}
            {businessExpenses.returnsRate > 5 && (
              <p>{t.improveProductQuality}</p>
            )}
            {businessExpenses.marketingCost > productCost * 0.1 && (
              <p>{t.reviewMarketingCosts}</p>
            )}
            {!isAtTargetMargin && (
              <p>{t.increasePriceForMargin}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Per-order summary */}
        <div className="bg-green-50 rounded-xl p-6 w-full max-w-screen-sm mx-auto">
          <h3 className="font-semibold text-green-800 mb-2">{t.profitabilityStatus}</h3>
          <div className="text-green-700 text-lg">
            <div>{t.netRevenue}: <span className="font-bold">฿{bestResult.netRevenue.toLocaleString()}</span></div>
            <div>{t.grossProfit}: <span className="font-bold">฿{bestResult.grossProfit.toLocaleString()}</span></div>
          </div>
        </div>
        {/* Total summary */}
        <div className="bg-blue-50 rounded-xl p-6 w-full max-w-screen-sm mx-auto">
          <h3 className="font-semibold text-blue-800 mb-2">{orderQuantity > 1 ? (t.profitabilityStatus + (language === 'th' ? ' (รวม)' : ' (Total)')) : t.profitabilityStatus}</h3>
          <div className="text-blue-700 text-lg">
            <div>{t.netRevenue}: <span className="font-bold">฿{(bestResult.netRevenue * orderQuantity).toLocaleString()}</span></div>
            <div>{t.grossProfit}: <span className="font-bold">฿{(bestResult.grossProfit * orderQuantity).toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligence; 