"use client";

import { useState, useEffect } from "react";

const dealProducts = [
  { name: "Smart watches", discount: "-25%", image: "/images/products/smartwatch.jpg" },
  { name: "Laptops", discount: "-15%", image: "/images/products/laptop.jpg" },
  { name: "GoPro cameras", discount: "-40%", image: "/images/products/gopro.jpg" },
  { name: "Headphones", discount: "-25%", image: "/images/products/headphones.jpg" },
  { name: "Canon cameras", discount: "-25%", image: "/images/products/camera.jpg" },
];

export default function DealsSection() {
  const [time, setTime] = useState({ days: 4, hours: 13, mins: 34, secs: 56 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; mins = 0; secs = 0; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div className="flex flex-col justify-center border-b border-border bg-background p-6 lg:w-[220px] lg:border-b-0 lg:border-r">
            <h3 className="text-xl font-bold text-foreground">Deals and offers</h3>
            <p className="mt-1 text-sm text-muted-foreground">Hygiene equipments</p>
            <div className="mt-4 flex gap-2">
              {[
                { label: "Days", value: String(time.days).padStart(2, "0") },
                { label: "Hour", value: String(time.hours).padStart(2, "0") },
                { label: "Min", value: String(time.mins).padStart(2, "0") },
                { label: "Sec", value: String(time.secs).padStart(2, "0") },
              ].map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center rounded-md bg-foreground px-2 py-1"
                >
                  <span className="text-base font-bold text-background">{t.value}</span>
                  <span className="text-[10px] text-background/70">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
            {dealProducts.map((product) => (
              <a
                key={product.name}
                href="#"
                className="flex flex-col items-center border-r border-b border-border p-4 last:border-r-0 hover:bg-secondary/50"
              >
                <div className="flex h-[120px] w-[120px] items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="mt-3 text-sm text-foreground">{product.name}</p>
                <span className="mt-1 rounded-full bg-[#FFE3E3] px-3 py-0.5 text-xs font-medium text-[#EB001B]">
                  {product.discount}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
