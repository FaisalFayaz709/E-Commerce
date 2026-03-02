import { Trash2, Heart } from 'lucide-react';

export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 border-b border-gray-200 pb-4 mb-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-600">
          Size: {item.size}, Color: {item.color}, Material: {item.material}
        </p>
        <p className="text-xs text-gray-500">Seller: {item.seller}</p>
        <div className="mt-3 flex gap-3">
          <button className="text-red-500 hover:text-red-600 text-sm font-medium">Remove</button>
          <button className="text-primary hover:text-primary/80 text-sm font-medium">Save for later</button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</p>
        <div className="mt-3">
          <select className="rounded border border-gray-300 px-2 py-1 text-sm">
            <option>Qty: {item.quantity}</option>
          </select>
        </div>
      </div>
    </div>
  );
}
