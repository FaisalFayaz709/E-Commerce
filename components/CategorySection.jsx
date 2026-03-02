const homeOutdoorProducts = [
  { name: "Soft chairs", price: "USD 19", image: "/images/products/soft-chair.jpg" },
  { name: "Sofa & chair", price: "USD 19", image: "/images/products/sofa.jpg" },
  { name: "Kitchen dishes", price: "USD 19", image: "/images/products/kitchen-dishes.jpg" },
  { name: "Smart watches", price: "USD 19", image: "/images/products/smartwatch.jpg" },
  { name: "Kitchen mixer", price: "USD 100", image: "/images/products/kitchen-mixer.jpg" },
  { name: "Blenders", price: "USD 39", image: "/images/products/blender.jpg" },
  { name: "Home appliance", price: "USD 19", image: "/images/products/home-appliance.jpg" },
  { name: "Coffee maker", price: "USD 10", image: "/images/products/coffee-maker.jpg" },
];

const electronicsProducts = [
  { name: "Smart watches", price: "USD 19", image: "/images/products/smartwatch.jpg" },
  { name: "Cameras", price: "USD 89", image: "/images/products/camera.jpg" },
  { name: "Headphones", price: "USD 10", image: "/images/products/headphones.jpg" },
  { name: "Smart watches", price: "USD 90", image: "/images/products/smartwatch.jpg" },
  { name: "Gaming set", price: "USD 35", image: "/images/products/gaming-set.jpg" },
  { name: "Laptops & PC", price: "USD 340", image: "/images/products/laptop.jpg" },
  { name: "Smartphones", price: "USD 19", image: "/images/products/smartphone.jpg" },
  { name: "Electric kettle", price: "USD 240", image: "/images/products/electric-kettle.jpg" },
];

function CategoryGrid({ title, bannerImage, bannerColor, products }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-3">
      <div className="overflow-hidden rounded-lg border border-border">
        <div className="flex flex-col lg:flex-row">
          {/* Left Banner */}
          <div
            className="relative flex flex-col justify-between overflow-hidden border-b border-border p-6 lg:w-[220px] lg:border-b-0 lg:border-r"
            style={{ backgroundColor: bannerColor }}
          >
            <div>
              <h3 className="text-xl font-bold text-[#fff]">{title}</h3>
              <a
                href="#"
                className="mt-3 inline-block rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground"
              >
                Source now
              </a>
            </div>
            <img
              src={bannerImage || "/placeholder.svg"}
              alt={title}
              className="mt-4 h-[100px] w-full rounded object-cover lg:h-auto"
            />
          </div>

          {/* Products Grid */}
          <div className="grid flex-1 grid-cols-2 sm:grid-cols-4">
            {products.map((product, i) => (
              <a
                key={i}
                href="#"
                className="flex flex-col border-r border-b border-border p-4 hover:bg-secondary/50"
              >
                <p className="text-sm font-medium text-foreground">{product.name}</p>
                <p className="text-xs text-muted-foreground">
                  From
                  <br />
                  {product.price}
                </p>
                <div className="mt-auto flex h-[80px] items-end justify-end pt-2">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full max-w-[80px] object-contain"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CategorySections() {
  return (
    <>
      <CategoryGrid
        title="Home and outdoor"
        bannerImage="/images/home-outdoor.jpg"
        bannerColor="#55B6C5"
        products={homeOutdoorProducts}
      />
      <CategoryGrid
        title="Consumer electronics and gadgets"
        bannerImage="/images/consumer-electronics.jpg"
        bannerColor="#F38332"
        products={electronicsProducts}
      />
    </>
  );
}
