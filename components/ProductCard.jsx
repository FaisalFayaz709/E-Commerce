import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProductCard({ product, viewMode }) {
  if (viewMode === 'list') {
    return (
      <div className="flex gap-4 rounded-lg bg-white p-4">
        <img src={product.image} alt={product.name} className="h-40 w-40 object-cover rounded-lg" />
        <div className="flex-1">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer">{product.name}</h3>
          </Link>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-orange-400' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-600">{product.rating}</span>
            <span className="text-xs text-gray-600">· {product.reviews} orders</span>
          </div>
          <div className="mt-3 flex gap-4">
            <div>
              <p className="text-xs text-gray-500">50-100 pcs</p>
              <p className="text-sm font-bold text-foreground">${product.price}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">100-700 pcs</p>
              <p className="text-sm font-bold text-foreground">${product.price}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">700+ pcs</p>
              <p className="text-sm font-bold text-foreground">${product.price}</p>
            </div>
          </div>
          {product.shipping && <p className="mt-2 text-xs text-green-600 font-medium">Free Shipping</p>}
        </div>
        <div className="flex flex-col items-center gap-2">
          <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-red-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-white p-4 hover:shadow-lg transition-shadow">
      <div className="relative mb-4">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-lg" />
        <Heart className="absolute top-2 right-2 h-5 w-5 text-gray-400 cursor-pointer hover:text-red-500" />
      </div>
      <Link href={`/products/${product.id}`}>
        <h3 className="mb-2 text-sm font-semibold text-foreground hover:text-primary line-clamp-2 cursor-pointer">
          {product.name}
        </h3>
      </Link>
      <div className="mb-2 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(product.rating) ? 'text-orange-400 text-xs' : 'text-gray-300 text-xs'}>
            ★
          </span>
        ))}
        <span className="ml-1 text-xs text-gray-600">{product.reviews}</span>
      </div>
      <div className="mb-3 space-y-1">
        <p className="text-xs text-gray-500">50-100 pcs <span className="text-gray-400 line-through">${product.original}</span></p>
        <p className="text-xs font-bold text-foreground">${product.price}</p>
      </div>
      {product.shipping && <p className="text-xs text-green-600 font-medium mb-2">Free Shipping</p>}
    </div>
  );
}
