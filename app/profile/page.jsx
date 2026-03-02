import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { User, MapPin, Phone, Mail } from 'lucide-react';

export const metadata = {
  title: 'My Profile - Brand',
  description: 'Manage your profile',
};

export default function ProfilePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#F8F9FA]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold text-foreground">My Profile</h1>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="rounded-lg bg-white p-6">
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">John Doe</h2>
                  <p className="text-sm text-gray-600">Premium Member</p>
                </div>
                <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 mb-3">
                  Edit Profile
                </button>
                <button className="w-full rounded-lg border border-primary px-4 py-2 text-primary hover:bg-primary/5">
                  Change Password
                </button>
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6">
                <h3 className="mb-6 text-xl font-bold text-foreground">Personal Information</h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
                      <input type="text" value="John" className="w-full rounded-lg border border-gray-300 px-4 py-2" disabled />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                      <input type="text" value="Doe" className="w-full rounded-lg border border-gray-300 px-4 py-2" disabled />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </label>
                    <input type="email" value="john@example.com" className="w-full rounded-lg border border-gray-300 px-4 py-2" disabled />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </label>
                    <input type="tel" value="+1 234 567 8900" className="w-full rounded-lg border border-gray-300 px-4 py-2" disabled />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Address
                    </label>
                    <input type="text" value="123 Main Street, New York, NY 10001" className="w-full rounded-lg border border-gray-300 px-4 py-2" disabled />
                  </div>

                  <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                    <button className="rounded-lg border border-gray-300 px-6 py-2 font-medium hover:bg-gray-50">
                      Cancel
                    </button>
                    <button className="rounded-lg bg-primary px-6 py-2 font-medium text-white hover:bg-primary/90">
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
