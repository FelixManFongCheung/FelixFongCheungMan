"use client"

type DotPosition = {
  angle: number;
  offset: number;
  content: string;
}

export default function TitleDisplay({ isEgg, angle, dot }: { isEgg: boolean, angle: number, dot: DotPosition}) {
  return (
    <span className={`
        absolute 
        inset-0
        w-full
        h-full
        whitespace-nowrap
        transition-all duration-300 ease-in-out
        ${isEgg && angle === dot.angle ? 'opacity-100 bg-opacity-0' : 'opacity-0'}
        text-theme-light-text dark:text-theme-dark-text
        flex items-center justify-center
        -z-10
        text-[20vmin]
        font-[100]
        leading-none
        tracking-tight
        `}
    >
        {dot.content}
    </span>
  )
}
