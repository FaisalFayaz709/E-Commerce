import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-secondary/60 py-10">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-lg font-bold text-foreground">
          Subscribe on our newsletter
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <div className="mx-auto mt-4 flex max-w-md items-center gap-2">
          <div className="flex flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 py-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="button"
            className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
