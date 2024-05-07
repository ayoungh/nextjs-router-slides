import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";

export function SectionAppRouter4() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span className="font-bold">App Router - Hydration</span>
        <span className="text-[#878787]">
          <Link href="/">Home</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0 md:pt-0 h-[500px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white h-96">
              <Code size={60} />
              <h2 className="text-2xl pt-4">Client and Server components</h2>

              <p className="text-sm">
                You can now render components on the server and hydrate them on client.
              </p>

              <p className="text-sm">
                All client components will need the use client directive at the top to tell next that it is a client only component.
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src="/serverclientlayout.gif"
              alt="Server and client layouts"
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
