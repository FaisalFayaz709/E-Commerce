import { ShoppingCart } from 'lucide-react';

export default function SavedForLater({ items }) {
  return (
    <div className="mt-6 rounded-lg bg-white p-6">
      <h2 className="mb-4 text-lg font-bold text-foreground">Saved for later</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg bg-gray-100 p-4">
            <img
              src={item.image}
              alt={item.name}
              className="mb-3 h-32 w-full object-cover rounded"
            />
            <p className="text-xs text-gray-600 line-clamp-2">{item.name}</p>
            <p className="mt-2 text-sm font-bold text-foreground">${item.price.toFixed(2)}</p>
            <button className="mt-3 w-full flex items-center justify-center gap-2 rounded-lg border border-primary px-3 py-2 text-sm text-primary hover:bg-primary/5">
              <ShoppingCart className="h-4 w-4" />
              Move to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
