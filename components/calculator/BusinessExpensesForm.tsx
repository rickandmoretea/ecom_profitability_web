'use client'

import React from 'react';
import { DollarSign, Package, TrendingUp, RefreshCw, Target } from 'lucide-react';
import { BusinessExpenses } from './types';

interface BusinessExpensesFormProps {
  expenses: BusinessExpenses;
  onExpensesChange: (expenses: BusinessExpenses) => void;
  t: {
    businessExpenses: string;
    shippingCost: string;
    marketingCost: string;
    packagingCost: string;
    returnsRate: string;
    targetProfitMargin: string;
    shippingCostPlaceholder: string;
    marketingCostPlaceholder: string;
    packagingCostPlaceholder: string;
    returnsRatePlaceholder: string;
    targetMarginPlaceholder: string;
    returnsRateHelp: string;
    targetMarginHelp: string;
  };
}

const BusinessExpensesForm: React.FC<BusinessExpensesFormProps> = ({
  expenses,
  onExpensesChange,
  t
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <DollarSign className="w-5 h-5" />
        {t.businessExpenses}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.shippingCost}
          </label>
          <input
            type="number"
            value={expenses.shippingCost}
            onChange={(e) => onExpensesChange({...expenses, shippingCost: Number(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            placeholder={t.shippingCostPlaceholder}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.marketingCost}
          </label>
          <input
            type="number"
            value={expenses.marketingCost}
            onChange={(e) => onExpensesChange({...expenses, marketingCost: Number(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            placeholder={t.marketingCostPlaceholder}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.packagingCost}
          </label>
          <input
            type="number"
            value={expenses.packagingCost}
            onChange={(e) => onExpensesChange({...expenses, packagingCost: Number(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            placeholder={t.packagingCostPlaceholder}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.returnsRate}
          </label>
          <input
            type="number"
            value={expenses.returnsRate}
            onChange={(e) => onExpensesChange({...expenses, returnsRate: Number(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            max="100"
            step="0.1"
            placeholder={t.returnsRatePlaceholder}
          />
          <p className="text-xs text-gray-500 mt-1">{t.returnsRateHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.targetProfitMargin}
          </label>
          <input
            type="number"
            value={expenses.targetProfitMargin}
            onChange={(e) => onExpensesChange({...expenses, targetProfitMargin: Number(e.target.value)})}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min="0"
            max="100"
            step="0.1"
            placeholder={t.targetMarginPlaceholder}
          />
          <p className="text-xs text-gray-500 mt-1">{t.targetMarginHelp}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessExpensesForm; 