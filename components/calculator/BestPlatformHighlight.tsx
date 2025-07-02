'use client'

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { CalculationResult } from './types';
import { platformFees } from './constants';
import { useTranslation, Language } from './i18n';

interface BestPlatformHighlightProps {
  results: {
    shopee: CalculationResult;
    lazada: CalculationResult;
    tiktok: CalculationResult;
  };
  language?: Language;
}

const BestPlatformHighlight: React.FC<BestPlatformHighlightProps> = ({ results, language = 'th' }) => {
  const t = useTranslation(language);
  const bestPlatform = Object.entries(results).reduce((best, [platform, result]) => 
    result.grossProfit > best.profit ? { platform, profit: result.grossProfit } : best
  , { platform: 'shopee', profit: results.shopee.grossProfit });

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 mb-6">
      <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        {t.bestPlatformHighlight}
      </h2>
      <p className="text-green-700">
        <span className="font-bold capitalize">
          {platformFees[bestPlatform.platform as keyof typeof platformFees].name}
        </span> {language === 'th' ? 'ให้กำไรสูงสุด:' : 'offers the highest profit:'}
        <span className="font-bold text-xl ml-2">฿{bestPlatform.profit.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default BestPlatformHighlight; 