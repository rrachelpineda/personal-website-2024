import * as React from "react";

function MyComponent() {
  return (
    <div className="flex justify-center items-center px-16 py-20 text-black bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-72 max-w-full w-[847px] max-md:mt-10">
        <div className="flex gap-5 text-7xl whitespace-nowrap max-md:flex-wrap max-md:text-4xl">
          <div className="flex-auto font-bold max-md:max-w-full max-md:text-4xl">
            Connections
          </div>
          <div className="flex-auto max-md:text-4xl">Math</div>
        </div>
        <div className="self-stretch mt-9 text-4xl max-md:max-w-full">
          Group math equations that share a similar property.
        </div>
        <div className="flex flex-col justify-center mt-24 max-w-full text-3xl font-bold whitespace-nowrap border border-black border-solid rounded-[40px] w-[173px] max-md:mt-10">
          <div className="justify-center px-14 py-7 border border-black border-solid rounded-[40px] max-md:px-5">
            Play
          </div>
        </div>
        <div className="mt-8 text-2xl underline">How do I play?</div>
      </div>
    </div>
  );
}

