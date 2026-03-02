import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '@/components/RelatedProducts';

export const metadata = {
  title: 'Product Details - Brand',
  description: 'View detailed product information',
};

export default function ProductDetailPage({ params }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span> &gt; <span>Clothings</span> &gt; <span>Men's wear</span> &gt; <span>Summer clothing</span>
          </div>

          <ProductDetail productId={params.id} />
          <RelatedProducts />

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
