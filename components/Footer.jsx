import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  About: ["About Us", "Find store", "Categories", "Blogs"],
  Partnership: ["About Us", "Find store", "Categories", "Blogs"],
  Information: ["Help Center", "Money Refund", "Shipping", "Contact us"],
  "For users": ["Login", "Register", "Settings", "My Orders"],
};

export default function Footer() {
  return (
    <footer className="bg-[#F3F4F6]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">Brand</span>
            </div>
            <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-foreground/60">
              Best information about the company goes here but now lorem ipsum is
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 hover:bg-foreground/20" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 hover:bg-foreground/20" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 hover:bg-foreground/20" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 hover:bg-foreground/20" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground/10 text-foreground/60 hover:bg-foreground/20" aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get App Column - hidden on small */}
          <div className="hidden md:block">
            <h4 className="mb-3 text-sm font-semibold text-foreground">Get app</h4>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-2 rounded-md bg-background border border-foreground/20 px-3 py-2 hover:bg-foreground/5"
              >
                <div className="text-foreground">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-foreground/60">Download on the</p>
                  <p className="text-xs font-medium text-foreground">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 rounded-md bg-background border border-foreground/20 px-3 py-2 hover:bg-foreground/5"
              >
                <div className="text-foreground">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302L5.864 2.658z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] text-foreground/60">Get it on</p>
                  <p className="text-xs font-medium text-foreground">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <p className="text-sm text-foreground/50">
            &copy; 2023 Ecommerce.
          </p>
          <div className="flex items-center gap-1 text-sm text-foreground/50">
            <span className="inline-block h-4 w-5 rounded-sm bg-[#DE2910]" />
            English
          </div>
        </div>
      </div>
    </footer>
  );
}
