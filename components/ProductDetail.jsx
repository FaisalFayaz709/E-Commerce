'use client';

import { useState } from 'react';
import { Heart, Share2, ShoppingCart } from 'lucide-react';

export default function ProductDetail({ productId }) {
  const [quantity, setQuantity] = useState('50-100');
  const [activeTab, setActiveTab] = useState('description');

  const product = {
    name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    price: 98.00,
    originalPrice: 90.00,
    rating: 4.3,
    reviews: 32,
    sold: 154,
    inStock: true,
    type: 'Classic shoes',
    material: 'Plastic material',
    design: 'Modern nice',
    customization: 'Customized logo and design custom packages',
    protection: 'Refund Policy',
    warranty: '2 years full warranty',
    supplier: {
      name: 'Guaroji Trading LLC',
      location: 'Germany, Berlin',
      verified: true,
      shipping: 'Worldwide shipping',
    },
  };

  const priceTiers = [
    { range: '50-100 pcs', price: 98.00, original: 90.00 },
    { range: '100-700 pcs', price: 90.00, original: 85.00 },
    { range: '700+ pcs', price: 78.00, original: 70.00 },
  ];

  const specs = [
    { label: 'Model', value: '#8788887' },
    { label: 'Style', value: 'Classic style' },
    { label: 'Certificate', value: 'ISO-89892121212' },
    { label: 'Size', value: '34mm x 450mm x 19mm' },
    { label: 'Memory', value: '368GB RAM' },
  ];

  const thumbnails = [
    '/images/products/tshirt.jpg',
    '/images/products/tshirt.jpg',
    '/images/products/tshirt.jpg',
    '/images/products/tshirt.jpg',
    '/images/products/tshirt.jpg',
    '/images/products/tshirt.jpg',
  ];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-12">
      {/* Left - Product Images */}
      <div className="lg:col-span-1">
        <div className="rounded-lg bg-white p-4">
          <img src="/images/products/tshirt.jpg" alt={product.name} className="mb-4 h-96 w-full object-cover rounded-lg" />
          <div className="grid grid-cols-4 gap-2">
            {thumbnails.map((thumb, i) => (
              <img
                key={i}
                src={thumb}
                alt={`View ${i + 1}`}
                className="h-20 w-full cursor-pointer rounded-lg border-2 border-transparent hover:border-primary object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center - Product Info */}
      <div className="lg:col-span-1">
        <div className="rounded-lg bg-white p-6">
          {/* Stock Status */}
          {product.inStock && <p className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">✓ In stock</p>}

          <h1 className="mb-2 text-2xl font-bold text-foreground">{product.name}</h1>

          {/* Rating */}
          <div className="mb-4 flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating} · {product.reviews} reviews · {product.sold} sold</span>
          </div>

          {/* Price Tiers */}
          <div className="mb-6 space-y-2 border-b border-gray-200 pb-6">
            {priceTiers.map((tier) => (
              <div key={tier.range} className="flex gap-4">
                <span className="text-sm text-gray-600">{tier.range}</span>
                <span className="text-sm line-through text-gray-400">${tier.original}</span>
                <span className="font-bold text-foreground">${tier.price}</span>
              </div>
            ))}
          </div>

          {/* Specs */}
          <div className="space-y-3 mb-6">
            <h3 className="font-semibold text-foreground">Price:</h3>
            <p className="text-sm text-gray-600">Negotiable</p>

            {specs.map((spec) => (
              <div key={spec.label} className="flex justify-between">
                <span className="text-sm text-gray-600">{spec.label}:</span>
                <span className="text-sm text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-6 space-y-2 border-t border-gray-200 pt-4">
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span>✓</span> Some great feature name here
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span>✓</span> Lorem dolor sit amet, consectetur
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span>✓</span> Duis aute irure dolor in reprehenderit
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <span>✓</span> Some great feature name here
            </p>
          </div>
        </div>
      </div>

      {/* Right - Supplier & CTA */}
      <div className="lg:col-span-1">
        <div className="rounded-lg bg-white p-6">
          {/* Supplier Card */}
          <div className="mb-6 flex items-start gap-3 rounded-lg bg-blue-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-blue-700 font-semibold">
              R
            </div>
            <div>
              <p className="font-semibold text-foreground">Supplier</p>
              <p className="text-sm text-gray-600">{product.supplier.name}</p>
              <div className="mt-2 space-y-1 text-xs text-gray-600">
                <p>🇩🇪 {product.supplier.location}</p>
                <p>✓ Verified Seller</p>
                <p>🌍 {product.supplier.shipping}</p>
              </div>
            </div>
          </div>

          {/* Quantity Select */}
          <div className="mb-4">
            <label className="mb-2 block text-sm font-medium text-foreground">Select Quantity</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
            >
              <option>50-100 pcs</option>
              <option>100-700 pcs</option>
              <option>700+ pcs</option>
            </select>
          </div>

          {/* Action Buttons */}
          <button className="mb-3 w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-primary/90">
            Send inquiry
          </button>

          <button className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 font-semibold text-foreground hover:bg-gray-50">
            Seller's profile
          </button>

          {/* Save for Later */}
          <button className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80 mb-6">
            <Heart className="h-5 w-5" />
            Save for later
          </button>

          {/* Share */}
          <div className="flex gap-2 border-t border-gray-200 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2 hover:bg-gray-50">
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
