import Features from "@/components/features";
import ImageTabs from "@/components/image-tabs";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans bg-white">
      <main className="flex-1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-32 ">
            <div>
              <h1 className="text-black mb-6 text-6xl font-bold">The best way to track your job application </h1>
              <p className="text-muted-foreground mb-10 text-xl">Capture, organize and manage your job search in one place</p>

              <div className="flex flex-col items-center gap-4">
                <Link href="/sign-up">
                <Button size="lg" className="h-12 px-8 text-lg font-medium">
                  Start for free <ArrowBigRight className="ml-2"/>
                  </Button>
                </Link>
                <p>Free forever Free. </p>
              </div>
            </div>
            
          </section>

          {/* Hero Image Section */}
          <ImageTabs></ImageTabs>

          {/* Features Section */}
          <Features />
      </main>
    </div>
  );
}
