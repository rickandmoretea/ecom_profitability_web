export interface Breakdown {
    commission: number;
    transaction: number;
    program: number;
    couponProgram?: number;
    freeShippingAndCoupon?: number;
    liveSpecials?: number;
    flashSaleAndBrands?: number;
    shippingCost?: number;
    marketingCost?: number;
    otherCosts?: number;
    vat?: number;
    customCommission?: number;
  }
  
  export interface CalculationResult {
    totalFeeRate: number;
    totalFees: number;
    breakdown: Breakdown;
    netRevenue: number;
    grossProfit: number;
    profitMargin: number;
    breakEvenPrice: number;
    targetPriceForMargin?: number;
  }
  
  export interface ShopeeOptions {
    useProgram: boolean;
    useCouponProgram: boolean;
    useFreeShippingAndCoupon: boolean;
    commissionRange: 'min' | 'max';
    activeProgram: 'none' | 'freeShipping' | 'coupon' | 'combined';
  }
  
  export interface LazadaOptions {
    useProgram: boolean;
    useCouponProgram: boolean;
  }
  
  export interface TikTokOptions {
    useProgram: boolean;
    useLiveSpecials: boolean;
    useFlashSaleAndBrands: boolean;
    isMall: boolean;
  }
  
  export interface BusinessExpenses {
    shippingCost: number;
    marketingCost: number;
    packagingCost: number;
    returnsRate: number;
    targetProfitMargin: number;
    vatPercent: number;
    customCommissionPercent: number;
  }
  
  export interface VolumeDiscounts {
    shopee: {
      [volume: string]: {
        commissionDiscount: number;
        programDiscount: number;
      };
    };
    lazada: {
      [volume: string]: {
        commissionDiscount: number;
        programDiscount: number;
      };
    };
    tiktok: {
      [volume: string]: {
        commissionDiscount: number;
        programDiscount: number;
      };
    };
  }
  
  export interface PlatformFees {
    shopee: {
      name: string;
      color: string;
      commission: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        others: { min: number; max: number };
      };
      transactionFee: number;
      programFee: number;
      couponProgram: number;
      freeShippingAndCoupon: number;
      maxTotalCost: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        others: { min: number; max: number };
      };
    };
    lazada: {
      name: string;
      color: string;
      commission: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        others: { min: number; max: number };
      };
      transactionFee: number;
      programFee: number;
      couponProgram: number;
      maxTotalCost: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        others: { min: number; max: number };
      };
    };
    tiktok: {
      name: string;
      color: string;
      commission: {
        electronics: { nonMall: number; mall: number };
        fashion: { nonMall: number; mall: number };
        fmcg: { nonMall: number; mall: number };
        lifestyle: { nonMall: number; mall: number };
      };
      transactionFee: number;
      programFee: number;
      liveSpecials: {
        nonMall: number;
        mall: number;
      };
      flashSaleAndBrands: {
        nonMall: number;
        mall: number;
      };
      maxTotalCost: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        fmcg: { min: number; max: number };
        lifestyle: { min: number; max: number };
      };
      maxTotalCostMall: {
        electronics: { min: number; max: number };
        fashion: { min: number; max: number };
        fmcg: { min: number; max: number };
        lifestyle: { min: number; max: number };
      };
    };
  }