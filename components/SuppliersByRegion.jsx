const suppliers = [
  { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
  { country: "Australia", domain: "shopname.ae", flag: "🇦🇺" },
  { country: "United States", domain: "shopname.ae", flag: "🇺🇸" },
  { country: "Russia", domain: "shopname.ru", flag: "🇷🇺" },
  { country: "Italy", domain: "shopname.it", flag: "🇮🇹" },
  { country: "Denmark", domain: "denmark.com.dk", flag: "🇩🇰" },
  { country: "France", domain: "shopname.com.fr", flag: "🇫🇷" },
  { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
  { country: "China", domain: "shopname.ae", flag: "🇨🇳" },
  { country: "Great Britain", domain: "shopname.co.uk", flag: "🇬🇧" },
];

export default function SuppliersByRegion() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <h2 className="mb-5 text-xl font-bold text-foreground">Suppliers by region</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {suppliers.map((supplier, i) => (
          <a
            key={i}
            href="#"
            className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary/50"
          >
            <span className="text-2xl" role="img" aria-label={supplier.country}>
              {supplier.flag}
            </span>
            <div>
              <p className="text-sm font-medium text-foreground">{supplier.country}</p>
              <p className="text-xs text-muted-foreground">{supplier.domain}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
