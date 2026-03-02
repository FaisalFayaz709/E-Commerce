import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ProductFilter({ filters, setFilters, setCurrentPage }) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brands: true,
    features: false,
    price: false,
    condition: false,
    ratings: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const categories = ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'];
  const brands = ['Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo', 'Canon', 'Sony', 'Philips'];
  const features = ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'];
  const conditions = ['new', 'refurbished', 'brand new', 'old items'];

  const handleCategoryChange = (category) => {
    setCurrentPage(1);
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    setFilters({ ...filters, categories: newCategories });
  };

  const handleBrandChange = (brand) => {
    setCurrentPage(1);
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const handleFeatureChange = (feature) => {
    setCurrentPage(1);
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    setFilters({ ...filters, features: newFeatures });
  };

  const handleRatingChange = (rating) => {
    setCurrentPage(1);
    const ratingStr = rating.toString();
    const newRatings = filters.ratings.includes(ratingStr)
      ? filters.ratings.filter(r => r !== ratingStr)
      : [...filters.ratings, ratingStr];
    setFilters({ ...filters, ratings: newRatings });
  };

  const handleConditionChange = (condition) => {
    setCurrentPage(1);
    setFilters({ ...filters, condition: filters.condition === condition ? 'any' : condition });
  };

  const handlePriceChange = (e, type) => {
    setCurrentPage(1);
    const value = parseInt(e.target.value) || 0;
    const newRange = type === 'min' 
      ? [value, filters.priceRange[1]]
      : [filters.priceRange[0], value];
    setFilters({ ...filters, priceRange: newRange });
  };

  return (
    <div className="space-y-6">
      {/* Category */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('category')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Category
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.category ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={filters.categories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                <span className="text-sm text-gray-600">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('brands')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Brands
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.brands ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.brands && (
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={filters.brands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className="text-sm text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('features')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Features
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.features ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.features && (
          <div className="space-y-2">
            {features.map((feature) => (
              <label key={feature} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={filters.features.includes(feature)}
                  onChange={() => handleFeatureChange(feature)}
                />
                <span className="text-sm text-gray-600">{feature}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('price')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Price range
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.price ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            <input 
              type="range" 
              min="0" 
              max="2000" 
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(e, 'max')}
              className="w-full" 
            />
            <div className="flex gap-2">
              <input 
                type="number" 
                placeholder="Min" 
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceChange(e, 'min')}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 text-sm" 
              />
              <input 
                type="number" 
                placeholder="Max"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(e, 'max')}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 text-sm" 
              />
            </div>
          </div>
        )}
      </div>

      {/* Condition */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('condition')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Condition
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.condition ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.condition && (
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="condition" 
                className="rounded-full"
                checked={filters.condition === 'any'}
                onChange={() => handleConditionChange('any')}
              />
              <span className="text-sm text-gray-600">Any</span>
            </label>
            {['new', 'refurbished', 'brand new', 'old items'].map((cond) => (
              <label key={cond} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="condition" 
                  className="rounded-full"
                  checked={filters.condition === cond}
                  onChange={() => handleConditionChange(cond)}
                />
                <span className="text-sm text-gray-600 capitalize">{cond}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className="rounded-lg bg-white p-4">
        <button 
          onClick={() => toggleSection('ratings')}
          className="mb-3 font-semibold text-foreground flex w-full items-center justify-between"
        >
          Ratings
          <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedSections.ratings ? '' : '-rotate-90'}`} />
        </button>
        {expandedSections.ratings && (
          <div className="space-y-2">
            {[5, 4, 3, 1].map((stars) => (
              <label key={stars} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded"
                  checked={filters.ratings.includes(stars.toString())}
                  onChange={() => handleRatingChange(stars)}
                />
                <span className="text-sm">{'★'.repeat(stars)}{'☆'.repeat(5 - stars)}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
