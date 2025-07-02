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
    programs: string;
    maximumTotalCostsLabel: string;
    platformAdvantages: string;
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
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-blue-700 border-collapse">
          <thead>
            <tr>
              <th className="text-left py-2 px-2 font-semibold">&nbsp;</th>
              <th className="text-center py-2 px-2 font-semibold">Shopee</th>
              <th className="text-center py-2 px-2 font-semibold">Lazada</th>
              <th className="text-center py-2 px-2 font-semibold">TikTok</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 px-2 font-medium">{t.baseCosts.split(':')[0]}</td>
              <td className="text-center" colSpan={3}>{t.baseCosts.split(':')[1]}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-2 font-medium">{t.programs}</td>
              <td className="text-center">{t.shopeePrograms}</td>
              <td className="text-center">{t.lazadaPrograms}</td>
              <td className="text-center">{t.tiktokPrograms}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-2 font-medium">Mall vs Non-Mall</td>
              <td className="text-center" colSpan={3}>{t.mallVsNonMall}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-2 font-medium">{t.maximumTotalCostsLabel}</td>
              <td className="text-center" colSpan={3}>{t.maximumTotalCosts.split(':')[1]}</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 px-2 font-medium">{t.platformAdvantages}</td>
              <td className={`text-center${bestPlatform.platform === 'shopee' ? ' font-bold bg-green-100' : ''}`}>{t.shopeeAdvantage}</td>
              <td className={`text-center${bestPlatform.platform === 'lazada' ? ' font-bold bg-green-100' : ''}`}>{t.lazadaAdvantage}</td>
              <td className={`text-center${bestPlatform.platform === 'tiktok' ? ' font-bold bg-green-100' : ''}`}>{t.tiktokAdvantage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeyInsights; 