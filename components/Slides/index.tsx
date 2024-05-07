"use client";

import { SectionQuestions } from "@/app/slides/components/section-questions";
import { SectionNext } from "@/components/pitch/section-next";
import { SectionProblem } from "@/app/slides/components/section-problem";
import { SectionSolution } from "@/app/slides/components/section-solution";
import { SectionStart } from "@/app/slides/components/section-start";
import { SectionSubscription } from "@/components/pitch/section-subscription";
import { SectionTeam } from "@/components/pitch/section-team";
import { SectionTraction } from "@/components/pitch/section-traction";
import { SectionVision } from "@/components/pitch/section-vision";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Toolbar } from "@/components/Toolbar";
import { SectionWhy } from "@/app/slides/components/section-why";
import { SectionPageRouter } from "@/app/slides/components/section-page-router";
import { SectionAppRouter } from "@/app/slides/components/section-app-router";
import { SectionAppRouter2 } from "@/app/slides/components/section-app-router2";
 

export function Slides() {
    // fake for now 
  const [views, setViews] = useState(6);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     async function fetchViewsCount() {
//       try {
//         const data = await setViewCount("pitch");
//         setViews(data);
//       } catch {}
//     }

//     if (!called.current) {
//       fetchViewsCount();
//       called.current = true;
//     }
//   }, [called.current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionWhy />
        </CarouselItem>
        <CarouselItem>
          <SectionPageRouter />
        </CarouselItem>
        <CarouselItem>
          <SectionAppRouter />
        </CarouselItem>
        <CarouselItem>
          <SectionAppRouter2 />
        </CarouselItem>
        {/* <CarouselItem>
          <SectionProblem />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionSolution />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionTraction />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionTeam />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionSubscription />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionVision />
        </CarouselItem> */}
        {/* <CarouselItem>
          <SectionNext />
        </CarouselItem> */}
        <CarouselItem>
          <SectionQuestions />
        </CarouselItem>
      </CarouselContent>

      <Toolbar views={views} />
    </Carousel>
  );
}
