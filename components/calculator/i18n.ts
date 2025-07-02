export type Language = 'th' | 'en';

export interface Translations {
  // Main calculator
  title: string;
  subtitle: string;
  
  // Product details
  productDetails: string;
  sellingPrice: string;
  productCost: string;
  category: string;
  orderQuantity: string;
  categories: {
    electronics: string;
    fashion: string;
    fmcg: string;
    lifestyle: string;
    others: string;
  };
  
  // Business expenses
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
  vat: string;
  customCommission: string;
  
  // Advanced options
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
  
  // Business intelligence
  businessIntelligence: string;
  breakEvenAnalysis: string;
  targetPrice: string;
  profitabilityStatus: string;
  platformDifference: string;
  totalCosts: string;
  recommendations: string;
  bestPlatformBreakEven: string;
  minimumPriceToCover: string;
  forTargetMargin: string;
  recommendedSellingPrice: string;
  profitable: string;
  notProfitable: string;
  bestPlatform: string;
  considerIncreasingPrice: string;
  bestVsWorst: string;
  productCostLabel: string;
  shippingLabel: string;
  marketingLabel: string;
  packagingLabel: string;
  returnsLabel: string;
  increaseSellingPrice: string;
  focusOnPlatform: string;
  improveProductQuality: string;
  reviewMarketingCosts: string;
  increasePriceForMargin: string;
  
  // Results
  bestPlatformHighlight: string;
  totalFeeRate: string;
  totalFees: string;
  netRevenue: string;
  grossProfit: string;
  profitMargin: string;
  detailedBreakdown: string;
  keyInsights: string;
  platformComparison: string;
  
  // Fee types
  feeType: string;
  platformFees: string;
  commission: string;
  transactionFee: string;
  programFee: string;
  freeShippingAndCouponFee: string;
  liveSpecialsFee: string;
  flashSaleAndBrandsFee: string;
  totalPlatformFees: string;
  totalBusinessExpenses: string;
  
  // Key insights
  baseCosts: string;
  shopeePrograms: string;
  lazadaPrograms: string;
  tiktokPrograms: string;
  mallVsNonMall: string;
  maximumTotalCosts: string;
  shopeeAdvantage: string;
  lazadaAdvantage: string;
  tiktokAdvantage: string;
  
  // Language switcher
  language: string;
  thai: string;
  english: string;
  
  // Key insights table labels
  programs: string;
  maximumTotalCostsLabel: string;
  platformAdvantages: string;
}

export const translations: Record<Language, Translations> = {
  th: {
    // Main calculator
    title: 'เครื่องคำนวณความสามารถในการทำกำไรของอีคอมเมิร์ซ',
    subtitle: 'คำนวณค่าธรรมเนียมและกำไรสำหรับ Shopee, Lazada และ TikTok Shop',
    
    // Product details
    productDetails: 'รายละเอียดสินค้า',
    sellingPrice: 'ราคาขาย (บาท)',
    productCost: 'ต้นทุนสินค้า (บาท)',
    category: 'หมวดหมู่สินค้า',
    orderQuantity: 'จำนวนออเดอร์',
    categories: {
      electronics: 'อิเล็กทรอนิกส์',
      fashion: 'แฟชั่น',
      fmcg: 'สินค้าอุปโภคบริโภค',
      lifestyle: 'ไลฟ์สไตล์',
      others: 'อื่นๆ'
    },
    
    // Business expenses
    businessExpenses: 'ค่าใช้จ่ายทางธุรกิจ',
    shippingCost: 'ค่าจัดส่ง (บาท)',
    marketingCost: 'ค่าโฆษณา/การตลาด (บาท)',
    packagingCost: 'ค่าบรรจุภัณฑ์ (บาท)',
    returnsRate: 'อัตราการคืนสินค้า (%)',
    targetProfitMargin: 'เป้าหมายกำไร (%)',
    shippingCostPlaceholder: 'ค่าใช้จ่ายการจัดส่งเฉลี่ยต่อชิ้น',
    marketingCostPlaceholder: 'ค่าใช้จ่ายการตลาดต่อชิ้น',
    packagingCostPlaceholder: 'ค่าใช้จ่ายวัสดุบรรจุภัณฑ์',
    returnsRatePlaceholder: 'อัตราการคืนสินค้าที่คาดหวัง',
    targetMarginPlaceholder: 'เป้าหมายกำไรที่ต้องการ',
    returnsRateHelp: 'เปอร์เซ็นต์ของสินค้าที่จะถูกคืน',
    targetMarginHelp: 'ใช้สำหรับคำนวณราคาขายที่แนะนำ',
    vat: 'VAT (%)',
    customCommission: 'ค่านายหน้าเพิ่มเติม (%)',
    
    // Advanced options
    advancedOptions: 'ตัวเลือกขั้นสูง',
    shopeeOptions: 'ตัวเลือก Shopee',
    lazadaOptions: 'ตัวเลือก Lazada',
    tiktokOptions: 'ตัวเลือก TikTok Shop',
    activeProgram: 'โปรแกรมที่ใช้งาน',
    commissionRange: 'ช่วงค่าคอมมิชชัน',
    mallSeller: 'ร้านค้า Mall (ค่าคอมมิชชันสูงกว่า)',
    programNote: 'หมายเหตุ: สามารถใช้โปรแกรมได้เพียงโปรแกรมเดียวในแต่ละครั้ง',
    eventBasedNote: 'หมายเหตุ: LIVE Specials และ Flash Sale เป็นโปรแกรมเฉพาะช่วงเวลา',
    noProgram: 'ไม่มีโปรแกรม',
    freeShippingProgram: 'โปรแกรมจัดส่งฟรี (+5.35%, สูงสุด 300฿)',
    couponProgram: 'โปรแกรมคูปอง (+4.28%, สูงสุด 300฿)',
    combinedProgram: 'จัดส่งฟรี + คูปอง (+6.42%, สูงสุด 300฿)',
    minimumRate: 'อัตราขั้นต่ำ',
    maximumRate: 'อัตราสูงสุด',
    higherCommission: 'ค่าคอมมิชชันสูงกว่า',
    freeShippingAndCoupon: 'จัดส่งฟรี + คูปอง (+5.35%)',
    liveSpecials: 'LIVE Specials (3.21% Non-Mall / 4.28% Mall)',
    flashSaleAndBrands: 'Flash Sale & Brands Crazy Deals (3.21% Non-Mall / 4.28% Mall)',
    
    // Business intelligence
    businessIntelligence: 'ข้อมูลเชิงธุรกิจ',
    breakEvenAnalysis: 'การวิเคราะห์จุดคุ้มทุน',
    targetPrice: 'ราคาเป้าหมาย',
    profitabilityStatus: 'สถานะความสามารถในการทำกำไร',
    platformDifference: 'ความแตกต่างของแพลตฟอร์ม',
    totalCosts: 'ค่าใช้จ่ายทั้งหมด',
    recommendations: 'คำแนะนำ',
    bestPlatformBreakEven: 'จุดคุ้มทุนแพลตฟอร์มที่ดีที่สุด:',
    minimumPriceToCover: 'ราคาขั้นต่ำเพื่อครอบคลุมค่าใช้จ่ายทั้งหมดใน',
    forTargetMargin: 'สำหรับกำไร {margin}%:',
    recommendedSellingPrice: 'ราคาขายที่แนะนำ',
    profitable: '✅ มีกำไร',
    notProfitable: '❌ ไม่มีกำไร',
    bestPlatform: 'แพลตฟอร์มที่ดีที่สุด:',
    considerIncreasingPrice: 'พิจารณาเพิ่มราคาหรือลดค่าใช้จ่าย',
    bestVsWorst: 'ดีที่สุด vs แย่ที่สุด:',
    productCostLabel: 'ต้นทุนสินค้า:',
    shippingLabel: 'ค่าจัดส่ง:',
    marketingLabel: 'ค่าโฆษณา:',
    packagingLabel: 'ค่าบรรจุภัณฑ์:',
    returnsLabel: 'การคืนสินค้า:',
    increaseSellingPrice: '• เพิ่มราคาขายหรือลดค่าใช้จ่าย',
    focusOnPlatform: '• เน้นที่ {platform} เพื่อกำไรที่ดีกว่า',
    improveProductQuality: '• พิจารณาปรับปรุงคุณภาพสินค้าเพื่อลดการคืนสินค้า',
    reviewMarketingCosts: '• ตรวจสอบค่าใช้จ่ายการตลาด - ดูเหมือนสูง',
    increasePriceForMargin: '• เพิ่มราคาเพื่อให้ถึงเป้าหมายกำไร',
    
    // Results
    bestPlatformHighlight: 'แพลตฟอร์มที่ดีที่สุด',
    totalFeeRate: 'อัตราค่าธรรมเนียมรวม',
    totalFees: 'ค่าธรรมเนียมรวม',
    netRevenue: 'รายได้สุทธิ',
    grossProfit: 'กำไรขั้นต้น',
    profitMargin: 'อัตรากำไร',
    detailedBreakdown: 'รายละเอียดการแบ่งค่าใช้จ่าย',
    keyInsights: 'ข้อมูลเชิงลึกสำคัญ',
    platformComparison: 'การเปรียบเทียบแพลตฟอร์ม',
    
    // Fee types
    feeType: 'ประเภทค่าธรรมเนียม',
    platformFees: 'ค่าธรรมเนียมแพลตฟอร์ม',
    commission: 'ค่าคอมมิชชัน',
    transactionFee: 'ค่าธรรมเนียมธุรกรรม',
    programFee: 'ค่าธรรมเนียมโปรแกรม',
    freeShippingAndCouponFee: 'จัดส่งฟรี + คูปอง',
    liveSpecialsFee: 'LIVE Specials',
    flashSaleAndBrandsFee: 'Flash Sale & Brands',
    totalPlatformFees: 'ค่าธรรมเนียมแพลตฟอร์มรวม',
    totalBusinessExpenses: 'ค่าใช้จ่ายทางธุรกิจรวม',
    
    // Key insights
    baseCosts: 'ต้นทุนพื้นฐาน: แพลตฟอร์มทั้งหมดเรียกเก็บค่าคอมมิชชัน + ค่าธรรมเนียมธุรกรรม 3.21%',
    shopeePrograms: 'โปรแกรม Shopee: จัดส่งฟรี (5.35%), คูปอง (4.28%), หรือรวมกัน (6.42%) - ทั้งหมดจำกัดที่ 300฿',
    lazadaPrograms: 'โปรแกรม Lazada: จัดส่งฟรี (5.35%, สูงสุด 299฿) และโปรแกรมคูปอง (5.35%)',
    tiktokPrograms: 'โปรแกรม TikTok: XTRA จัดส่งฟรี (5.35%, สูงสุด 199฿), LIVE Specials และโปรแกรม Flash Sale',
    mallVsNonMall: 'Mall vs Non-Mall: ร้านค้า Mall ของ TikTok จ่ายค่าคอมมิชชันสูงกว่า',
    maximumTotalCosts: 'ค่าใช้จ่ายรวมสูงสุด: สามารถสูงถึง 16-26% ขึ้นอยู่กับแพลตฟอร์มและโปรแกรมที่ใช้',
    shopeeAdvantage: 'ข้อดีของ Shopee: ช่วงค่าคอมมิชชันที่ยืดหยุ่นและตัวเลือกโปรแกรมหลายแบบที่มีการจำกัด',
    lazadaAdvantage: 'ข้อดีของ Lazada: อัตราที่สม่ำเสมอและค่าธรรมเนียมโปรแกรมที่คาดเดาได้',
    tiktokAdvantage: 'ข้อดีของ TikTok: เหมาะที่สุดสำหรับการขายสดและกลยุทธ์ Flash Sale',
    
    // Language switcher
    language: 'ภาษา',
    thai: 'ไทย',
    english: 'English',
    
    // Key insights table labels
    programs: 'โปรแกรม',
    maximumTotalCostsLabel: 'ค่าใช้จ่ายรวมสูงสุด',
    platformAdvantages: 'ข้อดีแต่ละแพลตฟอร์ม'
  },
  en: {
    // Main calculator
    title: 'E-commerce Profitability Calculator',
    subtitle: 'Calculate fees and profits for Shopee, Lazada and TikTok Shop',
    
    // Product details
    productDetails: 'Product Details',
    sellingPrice: 'Selling Price (THB)',
    productCost: 'Product Cost (THB)',
    category: 'Product Category',
    orderQuantity: 'Order Quantity',
    categories: {
      electronics: 'Electronics',
      fashion: 'Fashion',
      fmcg: 'FMCG',
      lifestyle: 'Lifestyle',
      others: 'Others'
    },
    
    // Business expenses
    businessExpenses: 'Business Expenses',
    shippingCost: 'Shipping Cost (THB)',
    marketingCost: 'Marketing/Advertising Cost (THB)',
    packagingCost: 'Packaging Cost (THB)',
    returnsRate: 'Returns Rate (%)',
    targetProfitMargin: 'Target Profit Margin (%)',
    shippingCostPlaceholder: 'Average shipping cost per item',
    marketingCostPlaceholder: 'Marketing cost per item',
    packagingCostPlaceholder: 'Packaging materials cost',
    returnsRatePlaceholder: 'Expected return rate',
    targetMarginPlaceholder: 'Your target profit margin',
    returnsRateHelp: 'Percentage of items that get returned',
    targetMarginHelp: 'Used to calculate recommended selling price',
    vat: 'VAT (%)',
    customCommission: 'Custom Commission (%)',
    
    // Advanced options
    advancedOptions: 'Advanced Options',
    shopeeOptions: 'Shopee Options',
    lazadaOptions: 'Lazada Options',
    tiktokOptions: 'TikTok Shop Options',
    activeProgram: 'Active Program',
    commissionRange: 'Commission Range',
    mallSeller: 'Mall Seller (Higher Commission)',
    programNote: 'Note: Only one program can be active at a time',
    eventBasedNote: 'Note: LIVE Specials and Flash Sale are event-based',
    noProgram: 'No Program',
    freeShippingProgram: 'Free Shipping Program (+5.35%, max 300฿)',
    couponProgram: 'Coupon Program (+4.28%, max 300฿)',
    combinedProgram: 'Free Shipping + Coupon (+6.42%, max 300฿)',
    minimumRate: 'Minimum Rate',
    maximumRate: 'Maximum Rate',
    higherCommission: 'Higher Commission',
    freeShippingAndCoupon: 'Free Shipping + Coupon (+5.35%)',
    liveSpecials: 'LIVE Specials (3.21% Non-Mall / 4.28% Mall)',
    flashSaleAndBrands: 'Flash Sale & Brands Crazy Deals (3.21% Non-Mall / 4.28% Mall)',
    
    // Business intelligence
    businessIntelligence: 'Business Intelligence',
    breakEvenAnalysis: 'Break-even Analysis',
    targetPrice: 'Target Price',
    profitabilityStatus: 'Profitability Status',
    platformDifference: 'Platform Difference',
    totalCosts: 'Total Costs',
    recommendations: 'Recommendations',
    bestPlatformBreakEven: 'Best Platform Break-even:',
    minimumPriceToCover: 'Minimum price to cover all costs on',
    forTargetMargin: 'For {margin}% margin:',
    recommendedSellingPrice: 'Recommended selling price',
    profitable: '✅ Profitable',
    notProfitable: '❌ Not Profitable',
    bestPlatform: 'Best platform:',
    considerIncreasingPrice: 'Consider increasing price or reducing costs',
    bestVsWorst: 'Best vs Worst:',
    productCostLabel: 'Product Cost:',
    shippingLabel: 'Shipping:',
    marketingLabel: 'Marketing:',
    packagingLabel: 'Packaging:',
    returnsLabel: 'Returns:',
    increaseSellingPrice: '• Increase selling price or reduce costs',
    focusOnPlatform: '• Focus on {platform} for better margins',
    improveProductQuality: '• Consider improving product quality to reduce returns',
    reviewMarketingCosts: '• Review marketing costs - they seem high',
    increasePriceForMargin: '• Increase price to reach target margin',
    
    // Results
    bestPlatformHighlight: 'Best Platform',
    totalFeeRate: 'Total Fee Rate',
    totalFees: 'Total Fees',
    netRevenue: 'Net Revenue',
    grossProfit: 'Gross Profit',
    profitMargin: 'Profit Margin',
    detailedBreakdown: 'Detailed Fee Breakdown',
    keyInsights: 'Key Insights',
    platformComparison: 'Platform Comparison',
    
    // Fee types
    feeType: 'Fee Type',
    platformFees: 'Platform Fees',
    commission: 'Commission',
    transactionFee: 'Transaction Fee',
    programFee: 'Program Fee',
    freeShippingAndCouponFee: 'Free Shipping + Coupon',
    liveSpecialsFee: 'LIVE Specials',
    flashSaleAndBrandsFee: 'Flash Sale & Brands',
    totalPlatformFees: 'Total Platform Fees',
    totalBusinessExpenses: 'Total Business Expenses',
    
    // Key insights
    baseCosts: 'Base Costs: All platforms charge commission + 3.21% transaction fee',
    shopeePrograms: 'Shopee Programs: Free Shipping (5.35%), Coupon (4.28%), or Combined (6.42%) - all capped at 300฿',
    lazadaPrograms: 'Lazada Programs: Free Shipping (5.35%, max 299฿) and Coupon Program (5.35%)',
    tiktokPrograms: 'TikTok Programs: XTRA Free Shipping (5.35%, max 199฿), LIVE Specials, and Flash Sale programs',
    mallVsNonMall: 'Mall vs Non-Mall: TikTok Mall sellers pay higher commission rates',
    maximumTotalCosts: 'Maximum Total Costs: Can reach 16-26% depending on platform and programs used',
    shopeeAdvantage: 'Shopee Advantage: Flexible commission ranges and multiple program options with caps',
    lazadaAdvantage: 'Lazada Advantage: Consistent rates with predictable program fees',
    tiktokAdvantage: 'TikTok Advantage: Best for live selling and flash sale strategies',
    
    // Language switcher
    language: 'Language',
    thai: 'ไทย',
    english: 'English',
    
    // Key insights table labels
    programs: 'Programs',
    maximumTotalCostsLabel: 'Maximum Total Costs',
    platformAdvantages: 'Platform Advantages'
  }
};

export const useTranslation = (language: Language) => {
  return translations[language];
};