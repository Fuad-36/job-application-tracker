import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  ChartNoAxesColumn,
  Columns3,
  Search,
  StickyNote,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Visual job pipeline",
    description:
      "Move applications from Wish List to Offer on a board that shows your entire search at a glance.",
    icon: Columns3,
  },
  {
    title: "Every application in one place",
    description:
      "Keep the company, role, salary, location, source, and job link together.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Interview and deadline tracking",
    description:
      "Stay on top of interviews, follow-ups, and key dates without digging through email.",
    icon: CalendarClock,
  },
  {
    title: "Notes and contacts",
    description:
      "Save recruiter details, interview notes, and next steps alongside each application.",
    icon: StickyNote,
  },
  {
    title: "Search and filter",
    description:
      "Find any application in seconds by company, stage, or date.",
    icon: Search,
  },
  {
    title: "Progress insights",
    description:
      "See response, interview, and offer rates so you know what is working.",
    icon: ChartNoAxesColumn,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            Everything you need to land the job
          </h2>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            Capture, organize, and move every application forward without
            spreadsheets or sticky notes.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/30"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-3">
          <Link
            href="/sign-up"
            className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 text-base")}
          >
            Start tracking for free
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <p className="text-sm text-muted-foreground">Free to get started.</p>
        </div>
      </div>
    </section>
  );
}
