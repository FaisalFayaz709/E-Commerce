import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function RelatedProducts() {
  const relatedProducts = [
    {
      id: 1,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/laptop.jpg',
    },
    {
      id: 2,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/smartwatch.jpg',
    },
    {
      id: 3,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/headphones.jpg',
    },
    {
      id: 4,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/jeans-shorts.jpg',
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/coffee-maker.jpg',
    },
    {
      id: 6,
      name: 'Xiaomi Redmi 8 Original',
      price: '$32.00–$40.00',
      image: '/images/products/teapot.jpg',
    },
  ];

  return (
    <div className="my-12 rounded-lg bg-white p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Related products</h2>
        <div className="flex gap-2">
          <button className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="rounded-full border border-gray-300 p-2 hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {relatedProducts.map((product) => (
          <div key={product.id} className="rounded-lg border border-gray-200 p-3 hover:shadow-md transition-shadow">
            <img src={product.image} alt={product.name} className="mb-3 h-32 w-full object-cover rounded-lg" />
            <h3 className="line-clamp-2 text-xs font-medium text-foreground">{product.name}</h3>
            <p className="mt-2 text-xs text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Description Tabs */}
      <div className="mt-8 border-t border-gray-200 pt-6">
        <div className="mb-6 flex gap-6 border-b border-gray-200">
          <button className="border-b-2 border-primary pb-2 font-semibold text-primary">Description</button>
          <button className="pb-2 text-gray-600 hover:text-foreground">Reviews</button>
          <button className="pb-2 text-gray-600 hover:text-foreground">Shipping</button>
          <button className="pb-2 text-gray-600 hover:text-foreground">About seller</button>
        </div>

        <div className="text-sm leading-relaxed text-gray-600">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Quis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
