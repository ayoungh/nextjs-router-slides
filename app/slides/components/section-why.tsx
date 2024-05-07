import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CalendarCheck, Code, Network, Rabbit } from "lucide-react";

export function SectionWhy() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span className="font-bold">WHY</span>
        <span className="text-[#878787]">
          <Link href="/">Home</Link>
        </span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0 md:pt-0 h-[500px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <Rabbit size={60} />
              <h2 className="text-2xl pt-4">Speed & Performance</h2>

              <p className="text-sm ">
                We want to take advantage of the new speed and performance
                improvements.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-cyan-700 to-blue-500 text-white">
              <Network size={60} />
              <h2 className="text-2xl pt-4">Better file structure</h2>

              <p className="text-sm">
                All of our components are in a components folder and are far
                from the actual pages that use them. This makes it hard to know
                where to look when you need to make a change.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white">
              <Code size={60} />
              <h2 className="text-2xl pt-4">Better Developer Experience</h2>

              <p className="text-sm ">
                We want to make it easier for developers to work on the project.
              </p>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
              <CalendarCheck size={60} />
              <h2 className="text-2xl pt-4">Future Proof</h2>

              <p className="text-sm ">
                We want to make sure that our codebase is future proof and easy
                to update.
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full">
            <Image
              src="/spacious.png"
              alt="Clean and spacious desk with female developer"
              width={650}
              height={875}
              quality={100}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
