import { PlatformFees } from './types';

export const platformFees: PlatformFees = {
  shopee: {
    name: 'Shopee (Non-Mall)',
    color: 'bg-orange-500',
    commission: {
      electronics: { min: 5.35, max: 5.89 },
      fashion: { min: 9.63, max: 9.63 },
      others: { min: 8.56, max: 8.56 }
    },
    transactionFee: 3.21,
    programFee: 5.35, // Free Shipping Program (max 300 THB/item)
    couponProgram: 4.28, // Coupon Program (max 300 THB/item)
    freeShippingAndCoupon: 6.42, // Free Shipping + Coupon Campaign (max 300 THB/item)
    maxTotalCost: {
      electronics: { min: 16.05, max: 16.59 },
      fashion: { min: 20.33, max: 20.33 },
      others: { min: 19.26, max: 19.26 }
    }
  },
  lazada: {
    name: 'Lazada (Non-Mall)',
    color: 'bg-blue-600',
    commission: {
      electronics: { min: 5.35, max: 5.35 },
      fashion: { min: 8.56, max: 8.56 },
      others: { min: 7.49, max: 7.49 }
    },
    transactionFee: 3.21,
    programFee: 5.35, // Free Shipping Program (max 299 THB/item)
    couponProgram: 5.35, // Lazada Coupon Program
    maxTotalCost: {
      electronics: { min: 14.98, max: 14.98 },
      fashion: { min: 17.12, max: 17.12 },
      others: { min: 16.05, max: 16.05 }
    }
  },
  tiktok: {
    name: 'TikTok Shop',
    color: 'bg-gray-800',
    commission: {
      electronics: { nonMall: 5.35, mall: 6.42 },
      fashion: { nonMall: 6.42, mall: 8.56 },
      fmcg: { nonMall: 5.35, mall: 5.35 },
      lifestyle: { nonMall: 8.56, mall: 8.56 }
    },
    transactionFee: 3.21,
    programFee: 5.35, // XTRA Free Shipping (max 199 THB/item)
    liveSpecials: {
      nonMall: 3.21,
      mall: 4.28
    },
    flashSaleAndBrands: {
      nonMall: 3.21,
      mall: 4.28
    },
    maxTotalCost: {
      electronics: { min: 20.33, max: 20.33 },
      fashion: { min: 21.4, max: 21.4 },
      fmcg: { min: 20.33, max: 20.33 },
      lifestyle: { min: 20.33, max: 20.33 }
    },
    maxTotalCostMall: {
      electronics: { min: 23.54, max: 23.54 },
      fashion: { min: 25.68, max: 25.68 },
      fmcg: { min: 25.68, max: 25.68 },
      lifestyle: { min: 25.68, max: 25.68 }
    }
  }
}; 