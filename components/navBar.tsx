import { Suspense } from "react";
import { BriefcasePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { getSession } from "@/lib/auth/auth";
import { UserNav } from "./user-nav";


export default function NavBar() {
  return (
    <nav className="flex justify-between border-b border-border bg-background px-4 py-2">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold text-primary"
      >
        <div className="container flex items-center gap-2 h-10 px-4">
          <BriefcasePlus />
          Job Tracker
        </div>
      </Link>

      <div className="flex items-center gap-2 px-4">
        <Suspense fallback={<div className="h-9 w-24 animate-pulse rounded-md bg-muted" />}>
          <NavAuthActions />
        </Suspense>
      </div>
    </nav>
  );
}


async function NavAuthActions() {
  const session = await getSession();

  if (session?.user) {
    const user = {
      name: session.user.name ?? "User",
      email: session.user.email ?? "",
      image: session.user.image ?? null,
    };

    return (
      <>
        <Link href="/dashboard">
          <Button variant="ghost" className="text-gray-700 hover:text-black">
            Dashboard
          </Button>
        </Link>
        <UserNav user={user} />
      </>
    );
  }

  return (
    <>
      <Link href="/sign-in">
        <Button variant="ghost" className="text-gray-700 hover:text-black">
          Log In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button>Start for Free</Button>
      </Link>
    </>
  );
}