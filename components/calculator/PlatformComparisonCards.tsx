'use client'

import React from 'react';
import { CalculationResult } from './types';
import { platformFees } from './constants';
import { useTranslation } from './i18n';

interface PlatformComparisonCardsProps {
  results: {
    shopee: CalculationResult;
    lazada: CalculationResult;
    tiktok: CalculationResult;
  };
  language: 'th' | 'en';
  orderQuantity: number;
}

const PlatformComparisonCards: React.FC<PlatformComparisonCardsProps> = ({ results, language, orderQuantity }) => {
  const t = useTranslation(language);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {Object.entries(results).map(([platform, result]) => (
        <div key={platform} className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-4 h-4 rounded-full ${platformFees[platform as keyof typeof platformFees].color}`}></div>
            <h3 className="font-bold text-lg">{platformFees[platform as keyof typeof platformFees].name}</h3>
          </div>
          
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-600 font-medium">{t.grossProfit}</p>
              <p className="text-xl font-bold text-green-700">
                ฿{result.grossProfit.toLocaleString()}
              </p>
              {orderQuantity > 1 && (
                <p className="text-xs text-green-700 mt-1">{language === 'th' ? 'กำไรรวม' : 'Total'}: <span className="font-bold">฿{(result.grossProfit * orderQuantity).toLocaleString()}</span></p>
              )}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-blue-600 font-medium">{t.profitMargin}</p>
              <p className="text-xl font-bold text-blue-700">
                {result.profitMargin.toFixed(1)}%
              </p>
              {orderQuantity > 1 && (
                <p className="text-xs text-blue-700 mt-1">{language === 'th' ? 'ออเดอร์รวม' : 'Total orders'}: <span className="font-bold">{orderQuantity}</span></p>
              )}
            </div>
            
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-sm text-red-600 font-medium">{t.totalFeeRate}</p>
              <p className="text-lg font-bold text-red-700">
                {result.totalFeeRate.toFixed(2)}%
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformComparisonCards;