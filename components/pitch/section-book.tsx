"use client";

// import { CalEmbed } from "@/components/cal-embed";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export function SectionBook() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    }
  },[]);

  return (
    <div className="min-h-screen relative w-screen">
      {width > 0 && height > 0 && <Confetti width={width} height={height} />}

      {/* <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>Book a meeting</span>
        <Link href="https://app.midday.ai">
          <Button variant="outline">Sign up</Button>
        </Link>
      </div> */}
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="h-[400px] md:h-[600px] px-4 md:px-0 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl">Questions?</h2>
          {/* <a href="mailto:support@midday.ai">support@midday.ai</a> */}
        </div>

        {/* <div className="flex justify-center mt-10 md:mt-0">
          <a href="https://git.new/midday" target="_blank" rel="noreferrer">
            <Button variant="outline" className="font-normal">
              Proudly Open Source
            </Button>
          </a>
        </div> */}
      </div>
    </div>
  );
}
