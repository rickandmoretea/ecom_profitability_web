'use client'

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import {
  ShopeeOptions,
  LazadaOptions,
  TikTokOptions,
  BusinessExpenses,
  calculateShopeeFees,
  calculateLazadaFees,
  calculateTikTokFees,
  ProductDetailsForm,
  BusinessExpensesForm,
  AdvancedOptions,
  BestPlatformHighlight,
  BusinessIntelligence,
  PlatformComparisonCards,
  DetailedBreakdownTable,
  KeyInsights
} from './calculator';
import { Language, useTranslation } from './calculator/i18n';
import LanguageSwitcher from './calculator/LanguageSwitcher';

const EcomProfitabilityCalculator = () => {
  const [language, setLanguage] = useState<Language>('th'); // Thai as default
  const t = useTranslation(language);
  
  const [productPrice, setProductPrice] = useState(1000);
  const [productCost, setProductCost] = useState(500);
  const [selectedCategory, setSelectedCategory] = useState('electronics');
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  // Business expenses
  const [businessExpenses, setBusinessExpenses] = useState<BusinessExpenses>({
    shippingCost: 50,
    marketingCost: 30,
    packagingCost: 20,
    returnsRate: 2,
    targetProfitMargin: 25,
    vatPercent: 7,
    customCommissionPercent: 0
  });
  
  // Advanced options
  const [shopeeOptions, setShopeeOptions] = useState<ShopeeOptions>({
    useProgram: false,
    useCouponProgram: false,
    useFreeShippingAndCoupon: false,
    commissionRange: 'min',
    activeProgram: 'none'
  });
  
  const [lazadaOptions, setLazadaOptions] = useState<LazadaOptions>({
    useProgram: false,
    useCouponProgram: false
  });
  
  const [tiktokOptions, setTiktokOptions] = useState<TikTokOptions>({
    useProgram: false,
    useLiveSpecials: false,
    useFlashSaleAndBrands: false,
    isMall: false
  });

  // Calculate results for all platforms
  const results = {
    shopee: calculateShopeeFees(productPrice, productCost, selectedCategory, shopeeOptions, businessExpenses),
    lazada: calculateLazadaFees(productPrice, productCost, selectedCategory, lazadaOptions, businessExpenses),
    tiktok: calculateTikTokFees(productPrice, productCost, selectedCategory, tiktokOptions, businessExpenses)
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{t.title}</h1>
              <p className="text-gray-600 mt-1">{t.subtitle}</p>
            </div>
          </div>
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={setLanguage}
            t={{ language: t.language, thai: t.thai, english: t.english }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <ProductDetailsForm
              productPrice={productPrice}
              productCost={productCost}
              selectedCategory={selectedCategory}
              onProductPriceChange={setProductPrice}
              onProductCostChange={setProductCost}
              onCategoryChange={setSelectedCategory}
              t={{
                productDetails: t.productDetails,
                sellingPrice: t.sellingPrice,
                productCost: t.productCost,
                category: t.category,
                categories: t.categories
              }}
            />

            <BusinessExpensesForm
              expenses={businessExpenses}
              onExpensesChange={setBusinessExpenses}
              t={{
                businessExpenses: t.businessExpenses,
                shippingCost: t.shippingCost,
                marketingCost: t.marketingCost,
                packagingCost: t.packagingCost,
                returnsRate: t.returnsRate,
                targetProfitMargin: t.targetProfitMargin,
                shippingCostPlaceholder: t.shippingCostPlaceholder,
                marketingCostPlaceholder: t.marketingCostPlaceholder,
                packagingCostPlaceholder: t.packagingCostPlaceholder,
                returnsRatePlaceholder: t.returnsRatePlaceholder,
                targetMarginPlaceholder: t.targetMarginPlaceholder,
                returnsRateHelp: t.returnsRateHelp,
                targetMarginHelp: t.targetMarginHelp
              }}
            />

            <AdvancedOptions
              showAdvanced={showAdvanced}
              shopeeOptions={shopeeOptions}
              lazadaOptions={lazadaOptions}
              tiktokOptions={tiktokOptions}
              onToggleAdvanced={() => setShowAdvanced(!showAdvanced)}
              onShopeeOptionsChange={setShopeeOptions}
              onLazadaOptionsChange={setLazadaOptions}
              onTikTokOptionsChange={setTiktokOptions}
              t={{
                advancedOptions: t.advancedOptions,
                shopeeOptions: t.shopeeOptions,
                lazadaOptions: t.lazadaOptions,
                tiktokOptions: t.tiktokOptions,
                activeProgram: t.activeProgram,
                commissionRange: t.commissionRange,
                mallSeller: t.mallSeller,
                programNote: t.programNote,
                eventBasedNote: t.eventBasedNote,
                noProgram: t.noProgram,
                freeShippingProgram: t.freeShippingProgram,
                couponProgram: t.couponProgram,
                combinedProgram: t.combinedProgram,
                minimumRate: t.minimumRate,
                maximumRate: t.maximumRate,
                higherCommission: t.higherCommission,
                freeShippingAndCoupon: t.freeShippingAndCoupon,
                liveSpecials: t.liveSpecials,
                flashSaleAndBrands: t.flashSaleAndBrands
              }}
            />
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            <BestPlatformHighlight results={results} language={language} />
            <BusinessIntelligence 
              results={results}
              businessExpenses={businessExpenses}
              productPrice={productPrice}
              productCost={productCost}
              t={{
                businessIntelligence: t.businessIntelligence,
                breakEvenAnalysis: t.breakEvenAnalysis,
                targetPrice: t.targetPrice,
                profitabilityStatus: t.profitabilityStatus,
                platformDifference: t.platformDifference,
                totalCosts: t.totalCosts,
                recommendations: t.recommendations,
                bestPlatformBreakEven: t.bestPlatformBreakEven,
                minimumPriceToCover: t.minimumPriceToCover,
                forTargetMargin: t.forTargetMargin,
                recommendedSellingPrice: t.recommendedSellingPrice,
                profitable: t.profitable,
                notProfitable: t.notProfitable,
                bestPlatform: t.bestPlatform,
                considerIncreasingPrice: t.considerIncreasingPrice,
                bestVsWorst: t.bestVsWorst,
                productCostLabel: t.productCostLabel,
                shippingLabel: t.shippingLabel,
                marketingLabel: t.marketingLabel,
                packagingLabel: t.packagingLabel,
                returnsLabel: t.returnsLabel,
                increaseSellingPrice: t.increaseSellingPrice,
                focusOnPlatform: t.focusOnPlatform,
                improveProductQuality: t.improveProductQuality,
                reviewMarketingCosts: t.reviewMarketingCosts,
                increasePriceForMargin: t.increasePriceForMargin
              }}
            />
            <PlatformComparisonCards results={results} language={language} />
            <DetailedBreakdownTable results={results} language={language} />
            <KeyInsights 
              results={results}
              t={{
                keyInsights: t.keyInsights,
                baseCosts: t.baseCosts,
                shopeePrograms: t.shopeePrograms,
                lazadaPrograms: t.lazadaPrograms,
                tiktokPrograms: t.tiktokPrograms,
                mallVsNonMall: t.mallVsNonMall,
                maximumTotalCosts: t.maximumTotalCosts,
                shopeeAdvantage: t.shopeeAdvantage,
                lazadaAdvantage: t.lazadaAdvantage,
                tiktokAdvantage: t.tiktokAdvantage,
                programs: t.programs,
                maximumTotalCostsLabel: t.maximumTotalCostsLabel,
                platformAdvantages: t.platformAdvantages
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcomProfitabilityCalculator; 