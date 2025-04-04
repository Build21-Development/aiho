"use client";
import HeroApp from "src/components/HeroApp";

export default function Page() {
  return (
    <div className="mt-16 flex flex-col w-[1200px]">
      <section className="mt-32 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <HeroApp />
        </div>
      </section>
    </div>
  );
}
