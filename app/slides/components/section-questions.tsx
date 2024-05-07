"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export function SectionQuestions() {
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
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="h-[400px] md:h-[600px] px-4 md:px-0 text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl">Questions?</h2>
        </div>
      </div>
    </div>
  );
}
