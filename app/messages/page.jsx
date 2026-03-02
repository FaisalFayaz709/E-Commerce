import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Send, Paperclip, Smile } from 'lucide-react';

export const metadata = {
  title: 'Messages - Brand',
  description: 'View your messages',
};

const conversations = [
  {
    id: 1,
    name: 'Guaroji Trading LLC',
    lastMessage: 'Thanks for your inquiry. We will get back to you soon.',
    time: '2 hours ago',
    unread: true,
    avatar: 'G',
  },
  {
    id: 2,
    name: 'Customer Support',
    lastMessage: 'Your order has been shipped successfully',
    time: '1 day ago',
    unread: false,
    avatar: 'CS',
  },
  {
    id: 3,
    name: 'Best Factory LLC',
    lastMessage: 'We offer bulk discounts for large orders',
    time: '3 days ago',
    unread: false,
    avatar: 'BF',
  },
];

export default function MessagesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">Messages</h1>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Conversations List */}
            <div className="lg:col-span-1 rounded-lg bg-white p-4 h-fit">
              <h2 className="mb-4 font-bold text-foreground">Conversations</h2>
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    className="w-full text-left rounded-lg p-3 hover:bg-gray-100 transition-colors border-l-4 border-transparent hover:border-primary"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${conv.unread ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'} font-semibold text-sm`}>
                        {conv.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-foreground ${conv.unread ? 'font-bold' : ''}`}>{conv.name}</p>
                        <p className="mt-1 truncate text-xs text-gray-600">{conv.lastMessage}</p>
                        <p className="mt-1 text-xs text-gray-500">{conv.time}</p>
                      </div>
                      {conv.unread && <div className="h-2 w-2 rounded-full bg-primary mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2 rounded-lg bg-white p-6 flex flex-col h-96">
              <div className="mb-4 border-b border-gray-200 pb-4">
                <h3 className="text-lg font-bold text-foreground">Guaroji Trading LLC</h3>
                <p className="text-sm text-gray-600">Active 2 hours ago</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-lg bg-gray-100 px-4 py-2">
                    <p className="text-sm text-gray-700">Hi, I am interested in bulk orders</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-xs rounded-lg bg-primary px-4 py-2">
                    <p className="text-sm text-white">What quantities are you looking for?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-xs rounded-lg bg-gray-100 px-4 py-2">
                    <p className="text-sm text-gray-700">Thanks for your inquiry. We will get back to you soon.</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50">
                  <Paperclip className="h-5 w-5 text-gray-600" />
                </button>
                <input type="text" placeholder="Type your message..." className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none" />
                <button className="rounded-lg border border-gray-300 p-2 hover:bg-gray-50">
                  <Smile className="h-5 w-5 text-gray-600" />
                </button>
                <button className="rounded-lg bg-primary p-2 hover:bg-primary/90">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
