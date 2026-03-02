'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { Grid3x3, List, ChevronLeft, ChevronRight, X } from 'lucide-react';

const mockProducts = [
  { id: 1, name: 'Canon Camera EOS 2000, Black 10x zoom', category: 'Mobile accessory', brand: 'Samsung', price: 998, original: 1128, rating: 4.5, reviews: 154, image: '/images/products/camera.jpg', features: ['Metallic'], condition: 'new', shipping: true },
  { id: 2, name: 'GoPro HERO6 4K Action Camera - Black', category: 'Mobile accessory', brand: 'Apple', price: 998, original: 1128, rating: 3.8, reviews: 154, image: '/images/products/gopro.jpg', features: ['Metallic', 'Super power'], condition: 'new', shipping: true },
  { id: 3, name: 'Smartphone Pro Max 12 256GB Blue', category: 'Mobile accessory', brand: 'Apple', price: 599, original: 699, rating: 4.2, reviews: 154, image: '/images/products/smartphone.jpg', features: ['8GB Ram'], condition: 'new', shipping: true },
  { id: 4, name: 'Wireless Headphones Studio Pro', category: 'Electronics', brand: 'Poco', price: 299, original: 399, rating: 3.5, reviews: 154, image: '/images/products/headphones.jpg', features: [], condition: 'refurbished', shipping: true },
  { id: 5, name: 'Smartwatch Series 8 Silver', category: 'Mobile accessory', brand: 'Samsung', price: 399, original: 499, rating: 4.0, reviews: 154, image: '/images/products/smartwatch.jpg', features: ['Metallic'], condition: 'new', shipping: true },
  { id: 6, name: 'Laptop ProBook 15 Silver', category: 'Electronics', brand: 'Lenovo', price: 1299, original: 1599, rating: 4.5, reviews: 154, image: '/images/products/laptop.jpg', features: ['8GB Ram', 'Metallic'], condition: 'new', shipping: true },
  { id: 7, name: 'Gaming Headset RGB Black', category: 'Electronics', brand: 'Samsung', price: 159, original: 199, rating: 4.8, reviews: 154, image: '/images/products/gaming-headset.jpg', features: ['Super power'], condition: 'new', shipping: true },
  { id: 8, name: 'Tablet Pro 12 inch', category: 'Mobile accessory', brand: 'Apple', price: 899, original: 999, rating: 4.3, reviews: 154, image: '/images/products/smartphone.jpg', features: ['8GB Ram'], condition: 'new', shipping: true },
  { id: 9, name: 'Coffee Maker Digital', category: 'Electronics', brand: 'Philips', price: 129, original: 179, rating: 3.9, reviews: 154, image: '/images/products/coffee-maker.jpg', features: [], condition: 'new', shipping: true },
  { id: 10, name: 'Electric Kettle Stainless Steel', category: 'Electronics', brand: 'Samsung', price: 89, original: 129, rating: 4.1, reviews: 154, image: '/images/products/electric-kettle.jpg', features: ['Metallic'], condition: 'new', shipping: true },
  { id: 11, name: 'Bluetooth Speaker Portable', category: 'Electronics', brand: 'Sony', price: 199, original: 249, rating: 4.4, reviews: 154, image: '/images/products/headphones.jpg', features: ['Super power'], condition: 'new', shipping: true },
  { id: 12, name: 'Camera Lens 50mm f/1.8', category: 'Electronics', brand: 'Canon', price: 449, original: 549, rating: 4.6, reviews: 154, image: '/images/products/camera.jpg', features: ['Metallic'], condition: 'new', shipping: true },
];

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    features: [],
    priceRange: [0, 2000],
    ratings: [],
    condition: 'any'
  });

  // Apply filters logic
  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      // Search filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Features filter
      if (filters.features.length > 0) {
        const hasAllFeatures = filters.features.every(feature =>
          product.features.includes(feature)
        );
        if (!hasAllFeatures) return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Rating filter
      if (filters.ratings.length > 0) {
        const productRating = Math.floor(product.rating);
        if (!filters.ratings.includes(productRating.toString())) {
          return false;
        }
      }

      // Condition filter
      if (filters.condition !== 'any' && product.condition !== filters.condition) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  // Get applied filter tags
  const getAppliedFilters = () => {
    const applied = [];
    filters.brands.forEach(brand => applied.push({ type: 'brand', value: brand }));
    filters.categories.forEach(cat => applied.push({ type: 'category', value: cat }));
    filters.features.forEach(feat => applied.push({ type: 'feature', value: feat }));
    filters.ratings.forEach(rating => applied.push({ type: 'rating', value: `${rating} star` }));
    if (filters.condition !== 'any') {
      applied.push({ type: 'condition', value: filters.condition });
    }
    return applied;
  };

  const removeFilter = (type, value) => {
    setCurrentPage(1);
    if (type === 'brand') {
      setFilters({ ...filters, brands: filters.brands.filter(b => b !== value) });
    } else if (type === 'category') {
      setFilters({ ...filters, categories: filters.categories.filter(c => c !== value) });
    } else if (type === 'feature') {
      setFilters({ ...filters, features: filters.features.filter(f => f !== value) });
    } else if (type === 'rating') {
      setFilters({ ...filters, ratings: filters.ratings.filter(r => r !== value.split(' ')[0]) });
    } else if (type === 'condition') {
      setFilters({ ...filters, condition: 'any' });
    }
  };

  const clearAllFilters = () => {
    setCurrentPage(1);
    setSearchQuery('');
    setFilters({
      categories: [],
      brands: [],
      features: [],
      priceRange: [0, 2000],
      ratings: [],
      condition: 'any'
    });
  };

  const productsPerPage = 12;
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <Header onSearch={setSearchQuery} searchValue={searchQuery} />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <span>Home</span> &gt; <span>Clothings</span> &gt; <span>Men's wear</span> &gt; <span>Summer clothing</span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Sidebar Filters */}
            <ProductFilter filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Header with View Toggle */}
              <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{filteredProducts.length.toLocaleString()} items in <span className="font-bold">Mobile accessory</span></p>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-600">Verified only</span>
                  </label>
                  <select className="rounded border border-gray-300 px-2 py-1 text-sm">
                    <option>Featured</option>
                  </select>
                  <div className="flex gap-2 border-l border-gray-300 pl-4">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'text-primary' : 'text-gray-400'}`}
                    >
                      <Grid3x3 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'text-primary' : 'text-gray-400'}`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Applied Filters */}
              {getAppliedFilters().length > 0 && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {getAppliedFilters().map((filter) => (
                    <span key={`${filter.type}-${filter.value}`} className="inline-flex items-center gap-2 rounded-full border border-primary bg-blue-50 px-3 py-1 text-sm text-primary">
                      {filter.value}
                      <button onClick={() => removeFilter(filter.type, filter.value)} className="hover:text-primary/70">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  <button onClick={clearAllFilters} className="text-sm text-primary hover:underline">Clear all filter</button>
                </div>
              )}

              {/* Products Grid */}
              {paginatedProducts.length > 0 ? (
                <div className={viewMode === 'grid' ? 'grid grid-cols-3 gap-4' : 'space-y-4'}>
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                <div className="rounded-lg bg-white p-8 text-center">
                  <p className="text-gray-600">No products found. Try adjusting your filters or search.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <button 
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded border border-gray-300 p-2 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`h-8 w-8 rounded ${
                        page === currentPage
                          ? 'bg-primary text-white'
                          : 'border border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button 
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded border border-gray-300 p-2 hover:bg-gray-100 disabled:opacity-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-300 bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h3 className="mb-2 text-xl font-bold text-foreground">Subscribe on our newsletter</h3>
            <p className="mb-4 text-gray-600">Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className="flex gap-2 justify-center">
              <input type="email" placeholder="Email" className="rounded-lg border border-gray-300 px-4 py-2" />
              <button className="rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary/90">Subscribe</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
