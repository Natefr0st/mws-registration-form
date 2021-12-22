import React from 'react';
import { useRouter } from "next/router";

import {StepProps} from "../../interfaces/StepProps";

const Step = ({ children, title, url }: StepProps) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center p-2 justify-between cursor-pointer"
      onClick={() => router.push(url)}
    >
      <div className={`
        flex
        items-center
        justify-center
        rounded-full
        bg-slate-500
        w-10
        h-10
        mb-1
        px-5
        text-lg
        text-white
        font-bold
      `}>
        {children}
      </div>
      <span className="w-min text-center text-sm font-bold">
        {title.toUpperCase()}
      </span>
    </div>
  );
};

export default Step;