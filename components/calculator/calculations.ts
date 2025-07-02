import { CalculationResult, Breakdown, ShopeeOptions, LazadaOptions, TikTokOptions, BusinessExpenses } from './types';
import { platformFees } from './constants';

export const calculateShopeeFees = (
  productPrice: number,
  productCost: number,
  selectedCategory: string,
  shopeeOptions: ShopeeOptions,
  businessExpenses: BusinessExpenses
): CalculationResult => {
  const platform = platformFees.shopee;
  const commissionRate = shopeeOptions.commissionRange === 'max' 
    ? platform.commission[selectedCategory as keyof typeof platform.commission]?.max || platform.commission.electronics.max
    : platform.commission[selectedCategory as keyof typeof platform.commission]?.min || platform.commission.electronics.min;
  
  let totalFeeRate = commissionRate + platform.transactionFee;
  let breakdown: Breakdown = {
    commission: (productPrice * commissionRate) / 100,
    transaction: (productPrice * platform.transactionFee) / 100,
    program: 0,
    couponProgram: 0,
    freeShippingAndCoupon: 0,
    shippingCost: businessExpenses.shippingCost,
    marketingCost: businessExpenses.marketingCost,
    otherCosts: businessExpenses.packagingCost,
    vat: (productPrice * (businessExpenses.vatPercent || 0) / 100),
    customCommission: (productPrice * (businessExpenses.customCommissionPercent || 0) / 100)
  };
  
  // Only one program can be active at a time
  if (shopeeOptions.activeProgram === 'freeShipping') {
    const programFee = Math.min((productPrice * platform.programFee) / 100, 300);
    totalFeeRate += (programFee / productPrice) * 100;
    breakdown.program = programFee;
  } else if (shopeeOptions.activeProgram === 'coupon') {
    const couponFee = Math.min((productPrice * platform.couponProgram) / 100, 300);
    totalFeeRate += (couponFee / productPrice) * 100;
    breakdown.couponProgram = couponFee;
  } else if (shopeeOptions.activeProgram === 'combined') {
    const freeShippingAndCouponFee = Math.min((productPrice * platform.freeShippingAndCoupon) / 100, 300);
    totalFeeRate += (freeShippingAndCouponFee / productPrice) * 100;
    breakdown.freeShippingAndCoupon = freeShippingAndCouponFee;
  }
  
  const totalFees = breakdown.commission + breakdown.transaction + breakdown.program + 
    (breakdown.couponProgram || 0) + (breakdown.freeShippingAndCoupon || 0);
  
  // Calculate returns impact
  const returnsCost = (productPrice * businessExpenses.returnsRate) / 100;
  
  // Calculate break-even price
  const totalCosts = productCost + totalFees + businessExpenses.shippingCost + 
    businessExpenses.marketingCost + businessExpenses.packagingCost + returnsCost;
  const breakEvenPrice = totalCosts / (1 - (businessExpenses.returnsRate / 100));
  
  // Calculate target price for desired margin
  const targetPriceForMargin = totalCosts / (1 - (businessExpenses.targetProfitMargin / 100));
  
  return {
    totalFeeRate,
    totalFees,
    breakdown,
    netRevenue: productPrice - totalFees - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    grossProfit: productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    profitMargin: ((productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0)) / productPrice) * 100,
    breakEvenPrice,
    targetPriceForMargin
  };
};

export const calculateLazadaFees = (
  productPrice: number,
  productCost: number,
  selectedCategory: string,
  lazadaOptions: LazadaOptions,
  businessExpenses: BusinessExpenses
): CalculationResult => {
  const platform = platformFees.lazada;
  const commissionRate = platform.commission[selectedCategory as keyof typeof platform.commission]?.min || platform.commission.electronics.min;
  
  let totalFeeRate = commissionRate + platform.transactionFee;
  let breakdown: Breakdown = {
    commission: (productPrice * commissionRate) / 100,
    transaction: (productPrice * platform.transactionFee) / 100,
    program: 0,
    couponProgram: 0,
    shippingCost: businessExpenses.shippingCost,
    marketingCost: businessExpenses.marketingCost,
    otherCosts: businessExpenses.packagingCost,
    vat: (productPrice * (businessExpenses.vatPercent || 0) / 100),
    customCommission: (productPrice * (businessExpenses.customCommissionPercent || 0) / 100)
  };
  
  if (lazadaOptions.useProgram) {
    const programFee = Math.min((productPrice * platform.programFee) / 100, 299);
    totalFeeRate += (programFee / productPrice) * 100;
    breakdown.program = programFee;
  }
  
  if (lazadaOptions.useCouponProgram) {
    const couponFee = (productPrice * platform.couponProgram) / 100;
    totalFeeRate += platform.couponProgram;
    breakdown.couponProgram = couponFee;
  }
  
  const totalFees = breakdown.commission + breakdown.transaction + breakdown.program + (breakdown.couponProgram || 0);
  
  // Calculate returns impact
  const returnsCost = (productPrice * businessExpenses.returnsRate) / 100;
  
  // Calculate break-even price
  const totalCosts = productCost + totalFees + businessExpenses.shippingCost + 
    businessExpenses.marketingCost + businessExpenses.packagingCost + returnsCost;
  const breakEvenPrice = totalCosts / (1 - (businessExpenses.returnsRate / 100));
  
  // Calculate target price for desired margin
  const targetPriceForMargin = totalCosts / (1 - (businessExpenses.targetProfitMargin / 100));
  
  return {
    totalFeeRate,
    totalFees,
    breakdown,
    netRevenue: productPrice - totalFees - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    grossProfit: productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    profitMargin: ((productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0)) / productPrice) * 100,
    breakEvenPrice,
    targetPriceForMargin
  };
};

export const calculateTikTokFees = (
  productPrice: number,
  productCost: number,
  selectedCategory: string,
  tiktokOptions: TikTokOptions,
  businessExpenses: BusinessExpenses
): CalculationResult => {
  const platform = platformFees.tiktok;
  let commissionRate: number;
  
  // Handle TikTok's different category structure and Mall vs Non-Mall
  if (selectedCategory === 'fmcg') {
    commissionRate = tiktokOptions.isMall ? platform.commission.fmcg.mall : platform.commission.fmcg.nonMall;
  } else if (selectedCategory === 'lifestyle') {
    commissionRate = tiktokOptions.isMall ? platform.commission.lifestyle.mall : platform.commission.lifestyle.nonMall;
  } else if (selectedCategory === 'fashion') {
    commissionRate = tiktokOptions.isMall ? platform.commission.fashion.mall : platform.commission.fashion.nonMall;
  } else {
    // Default to electronics
    commissionRate = tiktokOptions.isMall ? platform.commission.electronics.mall : platform.commission.electronics.nonMall;
  }
  
  let totalFeeRate = commissionRate + platform.transactionFee;
  let breakdown: Breakdown = {
    commission: (productPrice * commissionRate) / 100,
    transaction: (productPrice * platform.transactionFee) / 100,
    program: 0,
    liveSpecials: 0,
    flashSaleAndBrands: 0,
    shippingCost: businessExpenses.shippingCost,
    marketingCost: businessExpenses.marketingCost,
    otherCosts: businessExpenses.packagingCost,
    vat: (productPrice * (businessExpenses.vatPercent || 0) / 100),
    customCommission: (productPrice * (businessExpenses.customCommissionPercent || 0) / 100)
  };
  
  if (tiktokOptions.useProgram) {
    const programFee = Math.min((productPrice * platform.programFee) / 100, 199);
    totalFeeRate += (programFee / productPrice) * 100;
    breakdown.program = programFee;
  }
  
  if (tiktokOptions.useLiveSpecials) {
    const liveRate = tiktokOptions.isMall ? platform.liveSpecials.mall : platform.liveSpecials.nonMall;
    totalFeeRate += liveRate;
    breakdown.liveSpecials = (productPrice * liveRate) / 100;
  }
  
  if (tiktokOptions.useFlashSaleAndBrands) {
    const flashSaleRate = tiktokOptions.isMall ? platform.flashSaleAndBrands.mall : platform.flashSaleAndBrands.nonMall;
    totalFeeRate += flashSaleRate;
    breakdown.flashSaleAndBrands = (productPrice * flashSaleRate) / 100;
  }
  
  const totalFees = breakdown.commission + breakdown.transaction + breakdown.program + 
    (breakdown.liveSpecials || 0) + (breakdown.flashSaleAndBrands || 0);
  
  // Calculate returns impact
  const returnsCost = (productPrice * businessExpenses.returnsRate) / 100;
  
  // Calculate break-even price
  const totalCosts = productCost + totalFees + businessExpenses.shippingCost + 
    businessExpenses.marketingCost + businessExpenses.packagingCost + returnsCost;
  const breakEvenPrice = totalCosts / (1 - (businessExpenses.returnsRate / 100));
  
  // Calculate target price for desired margin
  const targetPriceForMargin = totalCosts / (1 - (businessExpenses.targetProfitMargin / 100));
  
  return {
    totalFeeRate,
    totalFees,
    breakdown,
    netRevenue: productPrice - totalFees - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    grossProfit: productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0),
    profitMargin: ((productPrice - totalFees - productCost - businessExpenses.shippingCost - 
      businessExpenses.marketingCost - businessExpenses.packagingCost - returnsCost - (breakdown.vat || 0) - (breakdown.customCommission || 0)) / productPrice) * 100,
    breakEvenPrice,
    targetPriceForMargin
  };
}; 