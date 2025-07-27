// components/Footer.tsx
import { Facebook, Instagram, X, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2345] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold tracking-tight">About Gar Gar</h4>
          <p className="text-gray-300 leading-relaxed">
            Driven by community, Gar Gar is committed to making Ward 9 a place
            where everyone's voice is heard. Join the movement today.
          </p>
          <div className="pt-4">
            <Link 
              href="/donate" 
              className="inline-block px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold tracking-tight">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { href: "#my-story", label: "My Story" },
              { href: "#why-im-running", label: "Why I'm Running" },
              { href: "#platform", label: "Platform" },
              { href: "/donate", label: "Donate" },
              { href: "/volunteer", label: "Volunteer" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center text-gray-300 hover:text-red-400 transition-colors duration-200 group"
                >
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold tracking-tight">Contact Us</h4>
          <address className="not-italic space-y-3 text-gray-300">
            <div className="flex items-start">
              <MapPin className="flex-shrink-0 h-5 w-5 mt-0.5 text-red-400" />
              <span className="ml-3">
                123 Main St.<br />
                Calgary, AB T2P TEC
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-400" />
              <Link href="tel:+1234567890" className="ml-3 hover:text-red-400 transition-colors">
                (123) 456-7890
              </Link>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-red-400" />
              <Link href="mailto:info@w9gar.ca" className="ml-3 hover:text-red-400 transition-colors">
                info@w9gar.ca
              </Link>
            </div>
          </address>
        </div>

        {/* Social & Newsletter */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-bold tracking-tight mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: X, href: "https://twitter.com", label: "Twitter" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold tracking-tight mb-4">Newsletter</h4>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            Authorized by the Chief Agent of Ward 9 Gar Gar Campaign.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} Gar Gar for City Council. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}