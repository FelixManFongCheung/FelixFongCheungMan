"use client"

import { useState, useCallback, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import TitleDisplay from '../titleDisplay';

type Title = "Projects" | "About" | "Contact" | "";

// Add this type for our button positions
type DotPosition = {
  angle: number;
  offset: number;
  content: string;
}

export default function Circle({ setTitle }: { setTitle: Dispatch<SetStateAction<Title>> }) {
  // Initialize angle with the first dot's angle
  const [isEgg, setIsEgg] = useState(false)
  const [angle, setAngle] = useState(-1)  // Use -1 as invalid angle
  const [sParameter, setSParameter] = useState(0)
  const [lastAngle, setLastAngle] = useState(-1)  // Use -1 as invalid angle
  const [activeDot, setActiveDot] = useState<DotPosition | null>(null)

  // Move entire path generation logic into useMemo
  const pathString = useMemo(() => {
    const points: [number, number][] = []
    const numPoints = 100
    const a1 = 1
    const b1 = 1
    const scale = 140
    const centerX = 150
    const centerY = 150
    
    const compressionFactor = 0.3
    const currentCompression = 1 - (0.3 * (sParameter / compressionFactor))
    
    const adjustedAngle = (angle + 90) % 360
    const angleRad = (adjustedAngle * Math.PI) / 180

    for (let i = 0; i < numPoints; i++) {
      const t = (2 * Math.PI * i) / numPoints
      const x = a1 * Math.cos(t)
      const y = b1 * Math.sin(t) * Math.exp(sParameter * x) * currentCompression

      const rotatedX = x * Math.cos(angleRad) - y * Math.sin(angleRad)
      const rotatedY = x * Math.sin(angleRad) + y * Math.cos(angleRad)

      points.push([
        rotatedX * scale + centerX,
        rotatedY * scale + centerY
      ])
    }

    return points.reduce((path, point, i) => (
      i === 0 
        ? `M ${point[0]} ${point[1]}` 
        : `${path} L ${point[0]} ${point[1]}`
    ), '') + ' Z'
  }, [angle, sParameter]) // Only real dependencies

  // Modified useEffect for smoother animation
  useEffect(() => {
    let frameId: number
    let isAnimating = true    

    const animate = () => {
      if (!isAnimating) return

      setSParameter(prev => {
        const target = isEgg ? 0.3 : 0
        const step = 0.01
        const diff = target - prev
        
        if (Math.abs(diff) < step) {
          isAnimating = false
          if (!isEgg) {
            setAngle(0)
          }
          return target
        }
        
        // Ease-out function (inverse quadratic)
        const easeOut = (x: number) => 1 - (1 - x)**3
        
        // Calculate progress (1 to 0)
        const progress = isEgg ? 
          1 - (prev / 0.3) :  // When becoming egg
          prev / 0.3          // When returning to circle
        
        // Apply easing to the step
        const easedStep = step * (1 + easeOut(progress) * 2)
        
        return prev + Math.sign(diff) * easedStep
      })

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)

    return () => {
      isAnimating = false
      cancelAnimationFrame(frameId)
    }
  }, [isEgg])

  // Combined handler for both mouse and touch events
  const handleInteractionStart = (dot: DotPosition) => {
    setActiveDot(dot)
    setTitle(dot.content as Title)
    setIsEgg(true)
    setAngle(dot.angle)
    setLastAngle(dot.angle)
  }

  const handleInteractionEnd = () => {
    setIsEgg(false)
    setAngle(lastAngle)
  }

  // Generate random dots around the circle
  const generateDotPositions = useCallback((numDots: number): DotPosition[] => {
    const positions: DotPosition[] = [];
    const angleStep = 360 / numDots;
    const titles = ['Projects', 'About', 'Contact'];
    
    for (let i = 0; i < numDots; i++) {
      positions.push({
        angle: i * angleStep,
        offset: Math.random() * 20 - 10, // Random offset between -5px and +5px
        content: titles[i]
      });
    }
    
    return positions;
  }, []);

  // Create dot positions (you can adjust number of dots)
  const dotPositions = useMemo(() => generateDotPositions(3), [generateDotPositions]);

  const calculatePosition = (angle: number, offset: number) => {
    const radius = 150; // Base radius
    const adjustedRadius = radius + offset;
    const x = Math.cos((angle - 90) * Math.PI / 180) * adjustedRadius;
    const y = Math.sin((angle - 90) * Math.PI / 180) * adjustedRadius;
    return { x, y };
  };

  return (
    <div className="relative h-[300px] w-[300px] overflow-visible">

      {activeDot && <TitleDisplay isEgg={isEgg} angle={angle} dot={activeDot}/>}

      <svg className="absolute h-full w-full overflow-visible">
        <path
          d={pathString}
          fill="transparent"
          stroke="#bebebe"
          strokeWidth="1"
        />
      </svg>
      
      {dotPositions.map((dot, index) => {
        const pos = calculatePosition(dot.angle, dot.offset);
        return (
          <button 
            key={index}
            className={`
              group absolute h-12 w-12 -translate-x-1/2 -translate-y-1/2 
              transition-[border-width]
              duration-300 
              ${activeDot?.content === dot.content ? 'border-[6px]' : 'border'} 
              border-theme-light-signBorder dark:border-theme-dark-signBorder
            `}
            style={{
              left: `${pos.x + 150}px`,
              top: `${pos.y + 150}px`,
            }}
            onMouseEnter={() => handleInteractionStart(dot)}
            onMouseLeave={() => handleInteractionEnd()}
            onTouchStart={(e) => {
              e.preventDefault(); // Prevent mouse event from firing
              handleInteractionStart(dot);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleInteractionEnd();
            }}
          >
            <div className={`
              transition-opacity duration-300 ease-in-out
              text-[32px] font-[100] tracking-wider
              ${isEgg && angle === dot.angle ? 'opacity-100' : 'opacity-0'}
              absolute inset-0 flex items-center justify-center text-theme-light-text dark:text-theme-dark-text
            `}>
              −
            </div>
            <div className={`
              transition-opacity duration-300 ease-in-out
              text-[32px] font-[100] tracking-wider
              ${isEgg && angle === dot.angle ? 'opacity-0' : 'opacity-100'}
              absolute inset-0 flex items-center justify-center text-theme-light-text dark:text-theme-dark-text
            `}>
              +
            </div>
          </button>
        );
      })}
    </div>
  )
}
