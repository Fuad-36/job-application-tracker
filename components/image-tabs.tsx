"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ImageTabs() {
  const [activeTab, setActiveTab] = useState("organize"); //organize hired boards
  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto flex flex-col items-center gap-8 px-4">
        <div className="mx-auto max-w-4xl ">
          {/* Tabs  */}
          <div className="flex gap-2 justify-center mb-8">
            <Button
              onClick={() => setActiveTab("organize")}
              variant={activeTab === "organize" ? "default" : "outline"}
            >
              Organize Applications
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              variant={activeTab === "hired" ? "default" : "outline"}
            >
              Get Hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
              variant={activeTab === "boards" ? "default" : "outline"}
            >
              Manage Board
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg  border border-gray-200">
            {activeTab === "organize" && (
              <Image
                src="/hero-images/hero1.png"
                alt="Hero Image"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "hired" && (
              <Image
                src="/hero-images/hero2.png"
                alt="Hero Image"
                width={1200}
                height={800}
              />
            )}
            {activeTab === "boards" && (
              <Image
                src="/hero-images/hero3.png"
                alt="Hero Image"
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
