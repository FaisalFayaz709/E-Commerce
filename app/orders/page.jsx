import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'My Orders - Brand',
  description: 'Track your orders',
};

const orders = [
  {
    id: 'ORD-001',
    date: 'Mar 2, 2024',
    total: '$156.99',
    status: 'Delivered',
    statusColor: 'text-green-600',
    icon: CheckCircle,
    items: 2,
  },
  {
    id: 'ORD-002',
    date: 'Feb 28, 2024',
    total: '$89.50',
    status: 'In Transit',
    statusColor: 'text-blue-600',
    icon: Clock,
    items: 1,
  },
  {
    id: 'ORD-003',
    date: 'Feb 25, 2024',
    total: '$234.00',
    status: 'Processing',
    statusColor: 'text-orange-600',
    icon: Package,
    items: 3,
  },
];

export default function OrdersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">My Orders</h1>

          {/* Filter Tabs */}
          <div className="mb-6 flex gap-4 border-b border-gray-300 pb-4">
            {['All Orders', 'Pending', 'Delivered', 'Cancelled'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 font-medium transition-colors ${
                  tab === 'All Orders' ? 'border-b-2 border-primary text-primary' : 'text-gray-600 hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders List */}
          <div className="space-y-4">
            {orders.map((order) => {
              const StatusIcon = order.icon;
              return (
                <div key={order.id} className="rounded-lg bg-white p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{order.id}</h3>
                        <span className={`inline-flex items-center gap-1 text-sm font-semibold ${order.statusColor}`}>
                          <StatusIcon className="h-4 w-4" />
                          {order.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        Order placed on {order.date} • {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-foreground">{order.total}</p>
                      <button className="mt-2 text-sm text-primary hover:underline">View Details</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {orders.length === 0 && (
            <div className="flex flex-col items-center justify-center rounded-lg bg-white py-16">
              <Package className="mb-4 h-16 w-16 text-gray-400" />
              <h3 className="text-xl font-bold text-foreground">No orders yet</h3>
              <p className="mt-2 text-gray-600">Start shopping to see your orders here</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
