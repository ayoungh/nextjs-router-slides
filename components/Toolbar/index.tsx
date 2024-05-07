"use client";

import { Button } from "@/components/ui/button";
import { useCarousel } from "@/components/ui/carousel";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { Icons } from "@midday/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";
// import { FaXTwitter } from "react-icons/fa6";
// import { CopyInput } from "../copy-input";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  Home,
  Share,
  ShieldQuestion,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  views: number;
};

const popupCenter = ({
  url,
  title,
  w,
  h,
}: {
  url: string;
  title: string;
  w: number;
  h: number;
}) => {
  if (typeof window !== "undefined") {
    const dualScreenLeft =
      window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
      window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
    const height = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
      url,
      title,
      `
    scrollbars=yes,
    width=${w / systemZoom}, 
    height=${h / systemZoom}, 
    top=${top}, 
    left=${left}
    `
    );

    return newWindow;
  }
  return null;
};

export function Toolbar({ views }: Props) {
  const api = useCarousel();

  useHotkeys("arrowRight", () => api.scrollNext(), [api]);
  useHotkeys("arrowLeft", () => api.scrollPrev(), [api]);

  const handleOnShare = () => {
    const popup = popupCenter({
      url: "https://twitter.com/intent/tweet?text=Check out this Lunch and Learn deck on moving to the nextjs app router. https://nextjs-router-slides.vercel.app/ @ayoungh",
      title: "Share",
      w: 800,
      h: 400,
    });

    popup?.focus();
  };

  return (
    <Dialog>
      <div className="fixed flex justify-center left-0 bottom-5 w-full">
        <AnimatePresence>
          <motion.div animate={{ y: views > 0 ? 0 : 100 }} initial={{ y: 100 }}>
            <TooltipProvider delayDuration={20}>
              <div className="flex backdrop-filter backdrop-blur-lg dark:bg-[#1A1A1A]/80 h-10 px-4 py-2 border border-[#2C2C2C] items-center rounded-2xl space-x-4">
                <Tooltip>
                  <TooltipTrigger>
                    <div className="text-[#878787] flex items-center space-x-2 border-r-[1px] border-border pr-4">
                      <Eye size={18} />
                      {/* <Icons.Visibility size={18} /> */}

                      <span className="text-sm">
                        {Intl.NumberFormat("en", {
                          notation: "compact",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 1,
                        }).format(views ?? 0)}
                      </span>
                    </div>
                  </TooltipTrigger>

                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Slides</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={() => api.scrollTo(0)}>
                      <Home size={18} className="text-[#878787]" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Home</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button" onClick={() => api.scrollTo(100)}>
                      <ShieldQuestion size={18} className="text-[#878787]" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Questions?</span>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger>
                    <DialogTrigger asChild>
                      <Share size={18} className="text-[#878787] -mt-[1px]" />
                    </DialogTrigger>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Share</span>
                  </TooltipContent>
                </Tooltip>

                <div className="flex items-center border-l-[1px] border-border pl-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollPrev}
                        className={cn(!api?.canScrollPrev && "opacity-50")}
                        onClick={() => {
                          api.scrollPrev();
                        }}
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Previous slide</span>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        type="button"
                        disabled={!api?.canScrollNext}
                        className={cn(!api?.canScrollNext && "opacity-50")}
                        onClick={() => {
                          api.scrollNext();
                        }}
                      >
                        <ChevronRight className="h-6 w-6" />
                        {/* <Icons.ChevronRight className="h-6 w-6" /> */}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      className="py-1 px-3 rounded-sm"
                      sideOffset={25}
                    >
                      <span className="text-xs">Next slide</span>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>

      <DialogContent className="sm:max-w-[425px]">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle>Share this L&L</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Sharing is caring. 
          </DialogDescription>

          <div className="py-4">
            <Button
              className="flex items-center space-x-2 h-10"
              onClick={handleOnShare}
            >
              <span>Share on</span>
              <Twitter size={18} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
