'use client'

import React from 'react';
import { Settings, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';
import { ShopeeOptions, LazadaOptions, TikTokOptions } from './types';

interface AdvancedOptionsProps {
  showAdvanced: boolean;
  shopeeOptions: ShopeeOptions;
  lazadaOptions: LazadaOptions;
  tiktokOptions: TikTokOptions;
  onToggleAdvanced: () => void;
  onShopeeOptionsChange: (options: ShopeeOptions) => void;
  onLazadaOptionsChange: (options: LazadaOptions) => void;
  onTikTokOptionsChange: (options: TikTokOptions) => void;
  t: {
    advancedOptions: string;
    shopeeOptions: string;
    lazadaOptions: string;
    tiktokOptions: string;
    activeProgram: string;
    commissionRange: string;
    mallSeller: string;
    programNote: string;
    eventBasedNote: string;
    noProgram: string;
    freeShippingProgram: string;
    couponProgram: string;
    combinedProgram: string;
    minimumRate: string;
    maximumRate: string;
    higherCommission: string;
    freeShippingAndCoupon: string;
    liveSpecials: string;
    flashSaleAndBrands: string;
  };
}

const AdvancedOptions: React.FC<AdvancedOptionsProps> = ({
  showAdvanced,
  shopeeOptions,
  lazadaOptions,
  tiktokOptions,
  onToggleAdvanced,
  onShopeeOptionsChange,
  onLazadaOptionsChange,
  onTikTokOptionsChange,
  t
}) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <button
        onClick={onToggleAdvanced}
        className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 mb-4"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          {t.advancedOptions}
        </div>
        {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      
      {showAdvanced && (
        <div className="space-y-6">
          {/* Shopee Options */}
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-orange-700 mb-3">{t.shopeeOptions}</h3>
            <div className="mb-3 p-2 bg-orange-50 rounded-lg">
              <div className="flex items-center gap-2 text-orange-700 text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-medium">หมายเหตุ:</span> {t.programNote}
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t.activeProgram}</label>
                <select
                  value={shopeeOptions.activeProgram}
                  onChange={(e) => onShopeeOptionsChange({...shopeeOptions, activeProgram: e.target.value as any})}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
                >
                  <option value="none">{t.noProgram}</option>
                  <option value="freeShipping">{t.freeShippingProgram}</option>
                  <option value="coupon">{t.couponProgram}</option>
                  <option value="combined">{t.combinedProgram}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.commissionRange}</label>
                <select
                  value={shopeeOptions.commissionRange}
                  onChange={(e) => onShopeeOptionsChange({...shopeeOptions, commissionRange: e.target.value as 'min' | 'max'})}
                  className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="min">{t.minimumRate}</option>
                  <option value="max">{t.maximumRate}</option>
                </select>
              </div>
            </div>
          </div>

          {/* Lazada Options */}
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="font-semibold text-blue-700 mb-3">{t.lazadaOptions}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lazada-program"
                  checked={lazadaOptions.useProgram}
                  onChange={(e) => onLazadaOptionsChange({...lazadaOptions, useProgram: e.target.checked})}
                  className="mr-2 w-4 h-4 text-blue-600"
                />
                <label htmlFor="lazada-program" className="text-sm">{t.freeShippingProgram}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="lazada-coupon"
                  checked={lazadaOptions.useCouponProgram}
                  onChange={(e) => onLazadaOptionsChange({...lazadaOptions, useCouponProgram: e.target.checked})}
                  className="mr-2 w-4 h-4 text-blue-600"
                />
                <label htmlFor="lazada-coupon" className="text-sm">{t.freeShippingAndCoupon}</label>
              </div>
            </div>
          </div>

          {/* TikTok Options */}
          <div className="border-l-4 border-gray-800 pl-4">
            <h3 className="font-semibold text-gray-800 mb-3">{t.tiktokOptions}</h3>
            <div className="mb-3 p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 text-gray-700 text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-medium">หมายเหตุ:</span> {t.eventBasedNote}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tiktok-mall"
                  checked={tiktokOptions.isMall}
                  onChange={(e) => onTikTokOptionsChange({...tiktokOptions, isMall: e.target.checked})}
                  className="mr-2 w-4 h-4 text-gray-600"
                />
                <label htmlFor="tiktok-mall" className="text-sm">{t.mallSeller}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tiktok-program"
                  checked={tiktokOptions.useProgram}
                  onChange={(e) => onTikTokOptionsChange({...tiktokOptions, useProgram: e.target.checked})}
                  className="mr-2 w-4 h-4 text-gray-600"
                />
                <label htmlFor="tiktok-program" className="text-sm">XTRA Free Shipping (+5.35%, max 199฿)</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tiktok-live"
                  checked={tiktokOptions.useLiveSpecials}
                  onChange={(e) => onTikTokOptionsChange({...tiktokOptions, useLiveSpecials: e.target.checked})}
                  className="mr-2 w-4 h-4 text-gray-600"
                />
                <label htmlFor="tiktok-live" className="text-sm">{t.liveSpecials}</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="tiktok-flash-sale"
                  checked={tiktokOptions.useFlashSaleAndBrands}
                  onChange={(e) => onTikTokOptionsChange({...tiktokOptions, useFlashSaleAndBrands: e.target.checked})}
                  className="mr-2 w-4 h-4 text-gray-600"
                />
                <label htmlFor="tiktok-flash-sale" className="text-sm">{t.flashSaleAndBrands}</label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedOptions; 