import Image from "next/image";
import { useState } from "react";

export default function VolunteerPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    province: "",
    city: "",
    postalCode: "",
    roles: [] as string[],
  });

  const toggleRole = (role: string) =>
    setForm((f) => ({
      ...f,
      roles: f.roles.includes(role)
        ? f.roles.filter((r) => r !== role)
        : [...f.roles, role],
    }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submit…
  };

  const groups = [
    {
      title: "Campaign Operations",
      items: ["Door knocking", "Phone banking", "Sign installation", "Office Administrator", "Event Organizer"],
    },
    {
      title: "Pre-Campaign Operations",
      items: ["Door knocking", "Phone banking", "Events"],
    },
    {
      title: "Other Opportunities",
      items: ["Rally Operator"],
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      {/* Image Section - now positioned next to form on large screens */}
      <div className="lg:w-2/3 relative h-64 lg:h-auto">
        <Image
          src="/assets/47305069_10216924835173764_569638931193135104_n.jpg"
          alt="Volunteer background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/3 bg-black backdrop-blur-lg lg:rounded-tr-2xl lg:rounded-br-2xl shadow-xl p-8 md:p-12 lg:p-16 text-white border-r border-white/10">
        <div className="max-w-md mx-auto h-full flex flex-col">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Volunteer With Us</h2>
            
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                Our movement is powered by people like you—we can't do it alone.
              </p>
              <p>
                Your energy and vision will help elect a government that puts Canadians first.
              </p>
              <p>
                Sign up today to help make Canada the freest country on earth!
              </p>
            </div>

            {/* Role selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">How would you like to help?*</h3>
              <div className="space-y-6">
                {groups.map((g) => (
                  <div key={g.title} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="text-base font-medium text-blue-400 mb-2">{g.title}</h4>
                    <ul className="space-y-3">
                      {g.items.map((role) => (
                        <li key={role}>
                          <label className="flex items-start space-x-3">
                            <input
                              type="checkbox"
                              checked={form.roles.includes(role)}
                              onChange={() => toggleRole(role)}
                              className="mt-1 h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-200">{role}</span>
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={submit} className="space-y-6 flex-grow flex flex-col">
            <div className="space-y-6 flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="province" className="block text-sm font-medium text-gray-300 mb-1">
                    Province
                  </label>
                  <input
                    id="province"
                    type="text"
                    value={form.province}
                    onChange={(e) => setForm((f) => ({ ...f, province: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-300 mb-1">
                    Postal Code
                  </label>
                  <input
                    id="postalCode"
                    type="text"
                    value={form.postalCode}
                    onChange={(e) => setForm((f) => ({ ...f, postalCode: e.target.value }))}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-md text-white font-bold transition-all shadow-lg hover:shadow-xl mt-auto"
            >
              JOIN OUR TEAM
            </button>
          </form>

          <p className="mt-6 text-xs text-gray-400">
            Authorized by the Chief Agent of the Conservative Party of Canada.{" "}
            <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
}