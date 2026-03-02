export default function QuoteBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-5">
      <div className="overflow-hidden rounded-lg bg-gradient-to-r from-[#2563EB] to-[#1E40AF]">
        <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary-foreground md:text-3xl">
              An easy way to send requests to all suppliers
            </h3>
            <p className="mt-3 max-w-md text-sm text-primary-foreground/80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-sm rounded-lg bg-background p-5 shadow-lg">
            <h4 className="mb-4 text-lg font-semibold text-foreground">
              Send quote to suppliers
            </h4>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="What item you need?"
                className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <textarea
                placeholder="Type more details"
                rows={3}
                className="resize-none rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
                />
                <select className="rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground outline-none">
                  <option>Pcs</option>
                  <option>Kg</option>
                  <option>Set</option>
                  <option>Lot</option>
                </select>
              </div>
              <button
                type="button"
                className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
