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
  };
}

const ProductDetailsForm: React.FC<ProductDetailsFormProps> = ({
  productPrice,
  productCost,
  selectedCategory,
  onProductPriceChange,
  onProductCostChange,
  onCategoryChange,
  t
}) => {
  const [priceInput, setPriceInput] = useState(productPrice.toString());
  const [costInput, setCostInput] = useState(productCost.toString());

  useEffect(() => {
    setPriceInput(productPrice.toString());
  }, [productPrice]);
  useEffect(() => {
    setCostInput(productCost.toString());
  }, [productCost]);

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

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Package className="w-5 h-5" />
        {t.productDetails}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t.sellingPrice}
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              inputMode="decimal"
              pattern="[0-9]*"
              value={priceInput}
              onChange={handlePriceChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              min="0"
              placeholder="0"
              autoComplete="off"
            />
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