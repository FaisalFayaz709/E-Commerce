import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import SavedForLater from '@/components/SavedForLater';
import Link from 'next/link';
import { Trash2, Heart, Lock, MessageSquare, Truck } from 'lucide-react';

export const metadata = {
  title: 'My Cart - Brand',
  description: 'View and manage your shopping cart',
};

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men and lady',
      price: 78.99,
      quantity: 9,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/products/tshirt.jpg',
    },
    {
      id: 2,
      name: 'T-shirts with multiple colors, for men and lady',
      price: 39.00,
      quantity: 3,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best factory LLC',
      image: '/images/products/tshirt.jpg',
    },
    {
      id: 3,
      name: 'T-shirts with multiple colors, for men and lady',
      price: 170.50,
      quantity: 1,
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Artel Market',
      image: '/images/products/tshirt.jpg',
    },
  ];

  const savedItems = [
    { id: 1, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: '/images/products/camera.jpg' },
    { id: 2, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: '/images/products/smartphone.jpg' },
    { id: 3, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: '/images/products/smartwatch.jpg' },
    { id: 4, name: 'GoPro HERO6 4K Action Camera - Black', price: 99.50, image: '/images/products/laptop.jpg' },
  ];

  const subtotal = 1403.97;
  const discount = 60.00;
  const tax = 14.00;
  const total = 1357.97;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-6 text-2xl font-bold text-foreground">My cart (3)</h1>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Cart Items Section */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <Link href="/products" className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                    <span>← Back to shop</span>
                  </Link>
                  <button className="text-primary hover:underline">Remove all</button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4">
                  <Lock className="h-6 w-6 text-gray-400" />
                  <p className="text-center text-xs font-medium text-foreground">Secure payment</p>
                  <p className="text-center text-xs text-gray-500">Have you ever finally just</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4">
                  <MessageSquare className="h-6 w-6 text-gray-400" />
                  <p className="text-center text-xs font-medium text-foreground">Customer support</p>
                  <p className="text-center text-xs text-gray-500">Have you ever finally just</p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg bg-white p-4">
                  <Truck className="h-6 w-6 text-gray-400" />
                  <p className="text-center text-xs font-medium text-foreground">Free delivery</p>
                  <p className="text-center text-xs text-gray-500">Have you ever finally just</p>
                </div>
              </div>

              {/* Saved for Later */}
              {savedItems.length > 0 && <SavedForLater items={savedItems} />}
            </div>

            {/* Checkout Summary */}
            <div className="h-fit rounded-lg bg-white p-6 sticky top-4">
              <div className="mb-6">
                <h3 className="mb-4 text-sm font-semibold text-foreground">Have a coupon?</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add coupon"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                  <button className="text-primary hover:underline">Apply</button>
                </div>
              </div>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount:</span>
                  <span className="font-medium text-red-500">- ${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium text-green-600">+ ${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between pb-4">
                <span className="font-semibold text-foreground">Total:</span>
                <span className="text-xl font-bold text-foreground">${total.toFixed(2)}</span>
              </div>

              <button className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white hover:bg-green-600">
                Checkout
              </button>

              <div className="mt-4 flex justify-center gap-3">
                <img src="https://via.placeholder.com/30x20?text=Visa" alt="Visa" className="h-5" />
                <img src="https://via.placeholder.com/30x20?text=MC" alt="Mastercard" className="h-5" />
                <img src="https://via.placeholder.com/30x20?text=PayPal" alt="PayPal" className="h-5" />
                <img src="https://via.placeholder.com/30x20?text=Visa" alt="Visa" className="h-5" />
                <img src="https://via.placeholder.com/30x20?text=Apple" alt="Apple Pay" className="h-5" />
              </div>
            </div>
          </div>

          {/* Super Discount Banner */}
          <div className="mt-8 rounded-lg bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Super discount on more than 100 USD</h2>
                <p className="mt-2 text-sm opacity-90">Have you ever finally just write dummy info</p>
              </div>
              <button className="rounded-lg bg-orange-500 px-6 py-2 font-semibold hover:bg-orange-600">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
