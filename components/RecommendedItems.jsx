const recommendedItems = [
  {
    price: "$10.30",
    description: "T-shirts with multiple colors, for men",
    image: "/images/products/tshirt.jpg",
  },
  {
    price: "$10.30",
    description: "Jeans shorts for men blue color",
    image: "/images/products/jeans-shorts.jpg",
  },
  {
    price: "$12.50",
    description: "Brown winter coat medium size",
    image: "/images/products/winter-coat.jpg",
  },
  {
    price: "$34.00",
    description: "Jeans bag for travel for men",
    image: "/images/products/travel-bag.jpg",
  },
  {
    price: "$99.00",
    description: "Leather wallet",
    image: "/images/products/wallet.jpg",
  },
  {
    price: "$9.99",
    description: "Canon camera black, 100x zoom",
    image: "/images/products/camera.jpg",
  },
  {
    price: "$8.99",
    description: "Headset for gaming with mic",
    image: "/images/products/gaming-headset.jpg",
  },
  {
    price: "$10.30",
    description: "Smartwatch silver color modern",
    image: "/images/products/smartwatch.jpg",
  },
  {
    price: "$10.30",
    description: "Blue wallet for men leather material",
    image: "/images/products/blue-wallet.jpg",
  },
  {
    price: "$80.95",
    description: "Jeans bag for travel for men",
    image: "/images/products/jeans-bag.jpg",
  },
];

export default function RecommendedItems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <h2 className="mb-5 text-xl font-bold text-foreground">Recommended items</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {recommendedItems.map((item, i) => (
          <a
            key={i}
            href={`/products/${i + 1}`}
            className="group overflow-hidden rounded-lg border border-border bg-background p-3 hover:shadow-md"
          >
            <div className="flex h-[160px] items-center justify-center overflow-hidden rounded bg-secondary/30 p-2">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.description}
                className="h-full w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-3">
              <p className="text-base font-bold text-foreground">{item.price}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
