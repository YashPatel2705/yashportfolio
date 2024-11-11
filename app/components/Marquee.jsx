// import React from 'react';

// export default function Marquee() {
//   return (
//     <div className="relative overflow-hidden bg-dark py-4 transform rotate-2">
//       <div className="animate-marquee flex whitespace-nowrap items-center space-x-8">
//         <MarqueeItem text="DESIGN" />
//         <Separator />
//         <MarqueeItem text="DEVELOPMENT" />
//         <Separator />
//         <MarqueeItem text="WEBSITE" />
//         <Separator />
//         <MarqueeItem text="APPLICATION" />
//         <Separator />
//         <MarqueeItem text="UI/UX" />
//         <Separator />
//       </div>
//     </div>
//   );
// }

// function MarqueeItem({ text }) {
//   return <span className="text-white font-eurostile text-lg">{text}</span>;
// }

// function Separator() {
//   return <span className="text-primary text-lg">✴</span>;
// }
"use client";

import React from 'react';

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-dark py-4 transform rotate-2">
      <div className="animate-marquee flex whitespace-nowrap items-center space-x-8 md:space-x-12">
        <MarqueeItem text="DESIGN" />
        <Separator />
        <MarqueeItem text="DEVELOPMENT" />
        <Separator />
        <MarqueeItem text="WEBSITE" />
        <Separator />
        <MarqueeItem text="APPLICATION" />
        <Separator />
        <MarqueeItem text="UI/UX" />
        <Separator />
      </div>
    </div>
  );
}

function MarqueeItem({ text }) {
  return (
    <span className="text-white font-eurostile text-lg md:text-xl lg:text-2xl">
      {text}
    </span>
  );
}

function Separator() {
  return <span className="text-primary text-lg md:text-xl lg:text-2xl">✴</span>;
}
