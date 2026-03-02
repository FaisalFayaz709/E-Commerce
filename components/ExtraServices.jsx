import { Search, Box, Ship, Eye } from "lucide-react";

const services = [
  {
    title: "Source from Industry Hubs",
    icon: Search,
    image: "/images/service-source.jpg",
    color: "#0D6EFD",
  },
  {
    title: "Customize Your Products",
    icon: Box,
    image: "/images/service-customize.jpg",
    color: "#0D6EFD",
  },
  {
    title: "Fast, reliable shipping by ocean or air",
    icon: Ship,
    image: "/images/service-shipping.jpg",
    color: "#F38332",
  },
  {
    title: "Product monitoring and inspection",
    icon: Eye,
    image: "/images/service-inspection.jpg",
    color: "#55B6C5",
  },
];

export default function ExtraServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <h2 className="mb-5 text-xl font-bold text-foreground">Our extra services</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border border-border"
            >
              <div className="h-[140px] overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="relative bg-background p-4">
                <div
                  className="absolute -top-5 left-4 flex h-10 w-10 items-center justify-center rounded-full text-[#fff] shadow-md"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">
                  {service.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
