'use client'

import React from 'react';
import { Breakdown } from './types';
import { useTranslation } from './i18n';

interface DetailedBreakdownTableProps {
  results: {
    shopee: { breakdown: Breakdown; totalFees: number; profitMargin: number };
    lazada: { breakdown: Breakdown; totalFees: number; profitMargin: number };
    tiktok: { breakdown: Breakdown; totalFees: number; profitMargin: number };
  };
  language: 'th' | 'en';
}

const DetailedBreakdownTable: React.FC<DetailedBreakdownTableProps> = ({ results, language }) => {
  const t = useTranslation(language);
  
  const platforms = [
    { name: 'Shopee', color: 'orange', data: results.shopee },
    { name: 'Lazada', color: 'blue', data: results.lazada },
    { name: 'TikTok Shop', color: 'gray', data: results.tiktok }
  ];

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">{t.detailedBreakdown}</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-3 px-2 font-semibold">{t.feeType}</th>
              {platforms.map((platform) => (
                <th key={platform.name} className={`text-center py-3 px-2 font-semibold text-${platform.color}-600`}>
                  {platform.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Platform Fees */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="py-2 px-2 font-medium text-gray-700">{t.platformFees}</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.commission}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{platform.data.breakdown.commission.toFixed(0)}
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.transactionFee}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{platform.data.breakdown.transaction.toFixed(0)}
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.programFee}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{platform.data.breakdown.program.toFixed(0)}
                </td>
              ))}
            </tr>
            
            {platforms.some(p => p.data.breakdown.couponProgram) && (
              <tr>
                <td className="py-2 px-2 pl-6 text-gray-600">{t.freeShippingAndCouponFee}</td>
                {platforms.map((platform) => (
                  <td key={platform.name} className="py-2 px-2 text-center">
                    ฿{(platform.data.breakdown.couponProgram || 0).toFixed(0)}
                  </td>
                ))}
              </tr>
            )}
            
            {platforms.some(p => p.data.breakdown.freeShippingAndCoupon) && (
              <tr>
                <td className="py-2 px-2 pl-6 text-gray-600">{t.freeShippingAndCouponFee}</td>
                {platforms.map((platform) => (
                  <td key={platform.name} className="py-2 px-2 text-center">
                    ฿{(platform.data.breakdown.freeShippingAndCoupon || 0).toFixed(0)}
                  </td>
                ))}
              </tr>
            )}
            
            {platforms.some(p => p.data.breakdown.liveSpecials) && (
              <tr>
                <td className="py-2 px-2 pl-6 text-gray-600">{t.liveSpecialsFee}</td>
                {platforms.map((platform) => (
                  <td key={platform.name} className="py-2 px-2 text-center">
                    ฿{(platform.data.breakdown.liveSpecials || 0).toFixed(0)}
                  </td>
                ))}
              </tr>
            )}
            
            {platforms.some(p => p.data.breakdown.flashSaleAndBrands) && (
              <tr>
                <td className="py-2 px-2 pl-6 text-gray-600">{t.flashSaleAndBrandsFee}</td>
                {platforms.map((platform) => (
                  <td key={platform.name} className="py-2 px-2 text-center">
                    ฿{(platform.data.breakdown.flashSaleAndBrands || 0).toFixed(0)}
                  </td>
                ))}
              </tr>
            )}
            
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 px-2 font-medium text-gray-700">{t.totalPlatformFees}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className={`py-2 px-2 text-center font-semibold text-${platform.color}-600`}>
                  ฿{platform.data.totalFees.toFixed(0)}
                </td>
              ))}
            </tr>

            {/* Business Expenses */}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="py-2 px-2 font-medium text-gray-700">{t.businessExpenses}</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
              <td className="py-2 px-2 text-center text-gray-600">-</td>
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.shippingCost}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{(platform.data.breakdown.shippingCost || 0).toFixed(0)}
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.marketingCost}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{(platform.data.breakdown.marketingCost || 0).toFixed(0)}
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.packagingCost}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{(platform.data.breakdown.otherCosts || 0).toFixed(0)}
                </td>
              ))}
            </tr>
            
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 px-2 font-medium text-gray-700">{t.totalBusinessExpenses}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center font-semibold text-gray-600">
                  ฿{((platform.data.breakdown.shippingCost || 0) + (platform.data.breakdown.marketingCost || 0) + (platform.data.breakdown.otherCosts || 0)).toFixed(0)}
                </td>
              ))}
            </tr>

            {/* Profit Margin */}
            <tr className="bg-green-50">
              <td className="py-3 px-2 font-semibold text-green-700">{t.profitMargin}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className={`py-3 px-2 text-center font-bold text-${platform.color}-600`}>
                  {platform.data.profitMargin.toFixed(1)}%
                </td>
              ))}
            </tr>

            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.vat}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{(platform.data.breakdown.vat || 0).toFixed(0)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2 px-2 pl-6 text-gray-600">{t.customCommission}</td>
              {platforms.map((platform) => (
                <td key={platform.name} className="py-2 px-2 text-center">
                  ฿{(platform.data.breakdown.customCommission || 0).toFixed(0)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedBreakdownTable; 