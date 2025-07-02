'use client'

import React, { useState, useEffect } from 'react';
import { Package, Tag, DollarSign } from 'lucide-react';

interface ProductDetailsFormProps {
  productPrice: number;
  productCost: number;
  selectedCategory: string;
  onProductPriceChange: (price: number) => void;
  onProductCostChange: (cost: number) => void;
  onCategoryChange: (category: string) => void;
  t: {
    productDetails: string;
    sellingPrice: string;
    productCost: string;
    category: string;
    categories: {
      electronics: string;
      fashion: string;
      fmcg: string;
      lifestyle: string;
      others: string;
    };
    orderQuantity: string;
  };
  orderQuantity: number;
  onOrderQuantityChange: (qty: number) => void;
  lang: 'en' | 'th';
}

const ProductDetailsForm: React.FC<ProductDetailsFormProps> = ({
  productPrice,
  productCost,
  selectedCategory,
  onProductPriceChange,
  onProductCostChange,
  onCategoryChange,
  t,
  orderQuantity,
  onOrderQuantityChange,
  lang
}) => {
  const [priceInput, setPriceInput] = useState(productPrice.toString());
  const [costInput, setCostInput] = useState(productCost.toString());
  const [orderQtyInput, setOrderQtyInput] = useState(orderQuantity.toString());
  const [orderQtyError, setOrderQtyError] = useState('');

  useEffect(() => {
    setPriceInput(productPrice.toString());
  }, [productPrice]);
  useEffect(() => {
    setCostInput(productCost.toString());
  }, [productCost]);
  useEffect(() => {
    setOrderQtyInput(orderQuantity.toString());
  }, [orderQuantity]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/^0+(?!$)/, ''); // Remove leading zeros
    if (!/^[0-9]*$/.test(value)) return; // Only allow digits
    setPriceInput(value);
    onProductPriceChange(value === '' ? 0 : Number(value));
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/^0+(?!$)/, '');
    if (!/^[0-9]*$/.test(value)) return;
    setCostInput(value);
    onProductCostChange(value === '' ? 0 : Number(value));
  };

  const categories = [
    { value: 'electronics', label: t.categories.electronics },
    { value: 'fashion', label: t.categories.fashion },
    { value: 'fmcg', label: t.categories.fmcg },
    { value: 'lifestyle', label: t.categories.lifestyle },
    { value: 'others', label: t.categories.others }
  ];

  // Error messages for order quantity
  const orderQtyErrorMsg = {
    en: 'Please enter a valid order quantity (1 or more)',
    th: 'กรุณากรอกจำนวนออเดอร์ที่ถูกต้อง (1 ขึ้นไป)'
  };

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Package className="w-5 h-5" />
        {t.productDetails}
      </h2>
      
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">{t.sellingPrice}</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <DollarSign className="w-4 h-4" />
              </span>
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={priceInput}
                onChange={handlePriceChange}
                className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg"
                min="0"
                placeholder="0"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex-1 md:w-40">
            <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">{t.orderQuantity}</label>
            <div className="relative flex items-center">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-transparent select-none">
                <DollarSign className="w-4 h-4" />
              </span>
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={orderQtyInput}
                onChange={e => {
                  let value = e.target.value.replace(/^0+(?!$)/, '');
                  if (!/^[0-9]*$/.test(value)) return;
                  setOrderQtyInput(value);
                  setOrderQtyError('');
                  if (value !== '' && !isNaN(Number(value)) && Number(value) >= 1) {
                    onOrderQuantityChange(Number(value));
                  }
                }}
                onBlur={() => {
                  const qty = Number(orderQtyInput);
                  if (!orderQtyInput || isNaN(qty) || qty < 1) {
                    setOrderQtyError(orderQtyErrorMsg[lang]);
                    setOrderQtyInput('1');
                    onOrderQuantityChange(1);
                  } else {
                    setOrderQtyError('');
                  }
                }}
                className={`w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg ${orderQtyError ? 'border-red-500' : ''}`}
                placeholder="1"
                autoComplete="off"
              />
            </div>
            {orderQtyError && (
              <div className="text-red-500 text-xs mt-1">{orderQtyError}</div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.productCost}
          </label>
          <div className="relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              value={costInput}
              onChange={handleCostChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              placeholder="0"
              autoComplete="off"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.category}
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsForm; 