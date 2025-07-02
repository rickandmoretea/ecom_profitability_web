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
    customCommission: string;
  };
}

const BusinessExpensesForm: React.FC<BusinessExpensesFormProps> = ({
  expenses,
  onExpensesChange,
  t
}) => {
  const handleNumberInput = (field: keyof BusinessExpenses) => (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/^0+(?!$)/, ''); // Remove leading zeros
    if (!/^\d*(\.\d*)?$/.test(value)) return; // Only allow numbers and decimals
    onExpensesChange({ ...expenses, [field]: value === '' ? 0 : Number(value) });
  };

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
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.shippingCost === 0 ? '' : expenses.shippingCost}
            onChange={handleNumberInput('shippingCost')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.marketingCost}
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.marketingCost === 0 ? '' : expenses.marketingCost}
            onChange={handleNumberInput('marketingCost')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.packagingCost}
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.packagingCost === 0 ? '' : expenses.packagingCost}
            onChange={handleNumberInput('packagingCost')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
            
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.returnsRate}
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.returnsRate === 0 ? '' : expenses.returnsRate}
            onChange={handleNumberInput('returnsRate')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
          <p className="text-xs text-gray-500 mt-1">{t.returnsRateHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.targetProfitMargin}
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.targetProfitMargin === 0 ? '' : expenses.targetProfitMargin}
            onChange={handleNumberInput('targetProfitMargin')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
          <p className="text-xs text-gray-500 mt-1">{t.targetMarginHelp}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            VAT (%)
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.vatPercent === 0 ? '' : expenses.vatPercent}
            onChange={handleNumberInput('vatPercent')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.customCommission}
          </label>
          <input
            type="text"
            inputMode="decimal"
            pattern="[0-9]*"
            value={expenses.customCommissionPercent === 0 ? '' : expenses.customCommissionPercent}
            onChange={handleNumberInput('customCommissionPercent')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessExpensesForm; 