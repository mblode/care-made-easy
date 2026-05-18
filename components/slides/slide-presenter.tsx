import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Palette, Presenter } from "@/lib/slides";

interface SlidePresenterProps {
  presenter: Presenter;
  palette: Palette;
}

const MATT = { src: "/profile.jpg", name: "Matt", fallback: "M" } as const;
const MRU = { src: "/mru.jpg", name: "Mru", fallback: "M" } as const;

const ARIA_LABELS: Record<Presenter, string> = {
  matt: "Presenter: Matt",
  mru: "Presenter: Mrudula",
  both: "Presenters: Matt and Mrudula",
};

export function SlidePresenter({ presenter, palette }: SlidePresenterProps) {
  const people = presenter === "both" ? [MATT, MRU] : [presenter === "matt" ? MATT : MRU];

  return (
    <div
      aria-label={ARIA_LABELS[presenter]}
      className="-space-x-2 fixed top-4 right-4 z-50 flex items-center rounded-full p-1 shadow-[0_8px_28px_rgba(0,0,0,0.22),0_2px_6px_rgba(0,0,0,0.16)]"
      data-palette={palette}
      role="img"
      style={{ background: "var(--fg)" }}
    >
      {people.map((person) => (
        <Avatar className="size-6 ring-2 ring-[var(--fg)]" key={person.src} size="sm">
          <AvatarImage alt={person.name} src={person.src} />
          <AvatarFallback>{person.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
