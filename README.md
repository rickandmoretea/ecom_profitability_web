# E-commerce Profitability Calculator

A modern web application built with Next.js that helps e-commerce sellers compare profitability across different platforms including Shopee, Lazada, and TikTok Shop.

## Features

- **Multi-Platform Comparison**: Compare fees and profitability across Shopee, Lazada, and TikTok Shop
- **Category-Specific Calculations**: Different commission rates for Electronics, Fashion, FMCG, Lifestyle, and Others
- **Advanced Options**: 
  - Shopee: Program fees, Ads program, Commission range selection
  - Lazada: Program fees, Ads program
  - TikTok: Mall vs Non-Mall, Program fees, Live/Flash sale programs
- **Real-time Calculations**: Instant updates as you modify product details
- **Detailed Breakdown**: See commission, transaction fees, program costs, and more
- **Best Platform Recommendation**: Automatically identifies the most profitable platform
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build the application for production:
```bash
npm run build
```

### Start Production Server

Start the production server:
```bash
npm start
```

## Usage

1. **Enter Product Details**:
   - Product Price (THB)
   - Product Cost (THB)
   - Select Category

2. **Configure Advanced Options** (optional):
   - Toggle platform-specific programs
   - Adjust commission ranges
   - Enable promotional features

3. **View Results**:
   - Best platform recommendation
   - Side-by-side platform comparison
   - Detailed fee breakdown table
   - Key insights and recommendations

## Platform Fee Structure

### Base Fees
- All platforms charge commission + 3.21% transaction fee
- Commission rates vary by category and platform

### Shopee
- **Commission**: 5.35-5.89% (Electronics), 9.63% (Fashion), 8.56% (Others)
- **Program Fee**: 5.35% (max 300 THB/item)
- **Ads Program**: 4.28-7.49% (varies by category)

### Lazada
- **Commission**: 5.35% (Electronics), 8.56% (Fashion), 7.49% (Others)
- **Program Fee**: 5.35% (max 299 THB/item)
- **Ads Program**: 5.35%

### TikTok Shop
- **Commission**: 5.35-6.42% (Electronics), 8.56% (Fashion), 5.35% (FMCG), 8.56% (Lifestyle)
- **Program Fee**: 5.35% (max 199 THB/item)
- **Live/Flash Sales**: 3.21-4.28% (varies by Mall status)

## Project Structure

```
ecom_profitability_web/
├── app/
│   ├── globals.css          # Global styles with Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   └── EcomProfitabilityCalculator.tsx  # Main calculator component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For questions or issues, please open an issue on the repository. 