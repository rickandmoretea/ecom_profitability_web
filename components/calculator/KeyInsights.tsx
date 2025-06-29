'use client'

import React from 'react';
import { Info } from 'lucide-react';
import { CalculationResult } from './types';

interface KeyInsightsProps {
  results: {
    shopee: CalculationResult;
    lazada: CalculationResult;
    tiktok: CalculationResult;
  };
  t: {
    keyInsights: string;
    baseCosts: string;
    shopeePrograms: string;
    lazadaPrograms: string;
    tiktokPrograms: string;
    mallVsNonMall: string;
    maximumTotalCosts: string;
    shopeeAdvantage: string;
    lazadaAdvantage: string;
    tiktokAdvantage: string;
  };
}

const KeyInsights: React.FC<KeyInsightsProps> = ({ results, t }) => {
  const bestPlatform = Object.entries(results).reduce((best, [platform, result]) => 
    result.grossProfit > best.profit ? { platform, profit: result.grossProfit } : best
  , { platform: 'shopee', profit: results.shopee.grossProfit });

  return (
    <div className="mt-6 bg-blue-50 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Info className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-blue-800">{t.keyInsights}</h3>
      </div>
      <div className="text-sm text-blue-700 space-y-2">
        <p>• <strong>{t.baseCosts}</strong></p>
        <p>• <strong>{t.shopeePrograms}</strong></p>
        <p>• <strong>{t.lazadaPrograms}</strong></p>
        <p>• <strong>{t.tiktokPrograms}</strong></p>
        <p>• <strong>{t.mallVsNonMall}</strong></p>
        <p>• <strong>{t.maximumTotalCosts}</strong></p>
        {bestPlatform.platform === 'shopee' && <p>• <strong>{t.shopeeAdvantage}</strong></p>}
        {bestPlatform.platform === 'lazada' && <p>• <strong>{t.lazadaAdvantage}</strong></p>}
        {bestPlatform.platform === 'tiktok' && <p>• <strong>{t.tiktokAdvantage}</strong></p>}
      </div>
    </div>
  );
};

export default KeyInsights; 