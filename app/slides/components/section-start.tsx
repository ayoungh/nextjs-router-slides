import Image from 'next/image';

export function SectionStart() {
  return (
    <div className="min-h-screen">
      <span className="absolute right-4 md:right-8 top-4 text-lg">
        L&L/2024
      </span>

      <div className="container min-h-screen relative">
        <div className=" mt-32 relative z-[-1] flex flex-col place-items-center  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-900 dark:to-[#0141ff] dark:text-[#0141ff] pt-8">
            From Pages router to App router
          </h1>
        </div>
      </div>
    </div>
  );
}
