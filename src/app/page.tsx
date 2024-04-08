"use client";

import PlayArea from "@/components/PlayArea";

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="border w-full max-w-screen-2xl">
        <div>Jagruk</div>
        <div className="grid grid-cols-5 gap-4">
          <div className="border col-span-5 lg:col-span-2 ">text area</div>
          <div className="border col-span-5 lg:col-span-3 ">
            <PlayArea />
          </div>
        </div>
      </div>
    </div>
  );
}
