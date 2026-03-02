export default function HeroSection() {
  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[240px_1fr_240px] lg:auto-rows-max">
        {/* Left Sidebar - Categories */}
        <div className="hidden rounded-lg bg-background lg:block">
          <ul className="space-y-0.5">
            {categories.map((cat, i) => (
              <li key={i}>
                <a
                  href="/products"
                  className={`block rounded-md px-4 py-2 text-sm hover:bg-secondary ${
                    i === 0
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-foreground"
                  }`}
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Banner */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="/images/banner-electronics.jpg"
            alt="Latest trending electronic items"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-foreground/60 to-transparent p-8">
            <p className="text-sm text-background/80">Latest trending</p>
            <h2 className="mt-1 text-2xl font-bold text-background">
              Electronic items
            </h2>
            <div className="mt-4">
              <a
                href="/products"
                className="inline-block rounded-md bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-background/90"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden flex-col gap-3 lg:flex">
          {/* User Panel */}
          <div className="rounded-lg bg-primary/10 p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#90CAF9]">
                <svg className="h-5 w-5 text-[#1976D2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground">Hi, user</p>
                <p className="text-xs text-muted-foreground">
                  {"let's get stated"}
                </p>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href="#"
                className="rounded-md bg-primary py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Join now
              </a>
              <a
                href="#"
                className="rounded-md bg-background py-2 text-center text-sm font-medium text-primary"
              >
                Log in
              </a>
            </div>
          </div>

          {/* Promo Cards */}
          <div className="rounded-lg bg-[#F38332] p-3">
            <p className="text-sm font-medium text-[#fff]">
              Get US $10 off
            </p>
            <p className="text-xs text-[#fff]/80">with a new supplier</p>
          </div>

          <div className="rounded-lg bg-[#55B6C5] p-3">
            <p className="text-sm font-medium text-[#fff]">
              Send quotes with
            </p>
            <p className="text-xs text-[#fff]/80">supplier preferences</p>
          </div>
        </div>
      </div>
    </section>
  );
}
