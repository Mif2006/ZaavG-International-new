import React from 'react';

export default function Divider() {
  return (
    <div className="w-full flex justify-center py-[25px] sm:py-[30px] md:py-[40px] md:pb-[60px]">
      <hr className="w-full max-w-[1000px] h-[1px] border-none bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.5)] to-transparent [mask-image:linear-gradient(to_right,transparent,black_20%,black_50%,black_80%,transparent)]" />
    </div>
  );
}