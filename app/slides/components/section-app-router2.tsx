import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Tree } from "@geist-ui/core";
import { CalendarCheck, Code, Network, Rabbit } from "lucide-react";

export function SectionAppRouter2() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span className="font-bold">App Router - Layouts</span>
        <span className="text-[#878787]">
          <Link href="/">Home</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0 md:pt-0 h-[500px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white h-96">
              <Code size={60} />
              <h2 className="text-2xl pt-4">Nested Layouts</h2>

              <p className="text-sm">
                This now allows us to nest layouts within each other.
              </p>

              <p className="text-sm">
                Meaning different places in the app do not have to share the same layout.
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src="/nested-layouts-ui.jpeg"
              alt="Nested layout image of UI"
              className="rounded-md"
              width={650}
              height={875}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
