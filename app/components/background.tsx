import React, { useEffect, useRef, useState } from 'react';
const BgLightGrid1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  );
};

const BgLightGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-red">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const BgLightGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
};

const BgLightGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
    </div>
  );
};

const BgLightGrid3 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};

const BgLightGridGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
    </div>
  );
};

const BgDarkGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const BgLightGrid4 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
  );
};

const BgLightGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const BgDarkGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient3 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
  );
};

const BgLightGradient4 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
};

const BgLightGradient5 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient6 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
  );
};

const BgDarkGrid1 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
  );
};

const BgDarkGradient3 = () => {
  return (
    <div className="relative h-full w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
    </div>
  );
};

const BgLightGridGradient2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
    </div>
  );
};

const BgDarkGradient4 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
    </div>
  );
};

const BgDarkGradient5 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
    </div>
  );
};

const BgDarkGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  );
};

const BgDarkGridGradient1 = () => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
    </div>
  );
};

const BgDarkGrid3 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
const BgDarkGrid4 = () => {
  return (
    <div className="relative h-full w-full bg-sky-200">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
  
  );
};
const BgDarkGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-red-300">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
  
  
  );
};
const BgDarkSpider: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
      setIsMouseMoving(true);
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => setIsMouseMoving(false), 100); // Set idle timeout
    };

    let mouseTimeout: NodeJS.Timeout;
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(mouseTimeout);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-full w-full bg-black overflow-hidden" ref={containerRef}>
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)] 
          ${isMouseMoving ? 'animate-focus-move' : 'animate-focus-idle'}`}
        style={{
          backgroundPosition: `${mousePosition.x * 0.05}px ${mousePosition.y * 0.05}px`,
        }}
      ></div>
      <style>{`
        @keyframes focusMove {
          0% { transform: scale(1) translateX(0) translateY(0); }
          100% { transform: scale(1.5) translateX(100%) translateY(100%); }
        }
        
        @keyframes focusIdle {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .animate-focus-move {
          animation: focusMove 10s linear infinite;
        }

        .animate-focus-idle {
          animation: focusIdle 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
const BgDarkGrid7 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-[#1e293b] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#0f172a] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] opacity-50" />
</div>

  );
};
const BgLightGridD1 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};
const BgLightGridD2 = () => {
  return (
    <div className="relative h-full w-full bg-[rgb(255,200,200)]">
    <div className="absolute h-full w-full bg-[radial-gradient(rgb(229,231,235)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(0,0,0)_70%,transparent_100%)]" />
  </div>
  );
};
const BgColorGrids = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-blue-100 bg-pattern">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial bg-blue-100"></div>
</div>
  );
};
const BgColorGridsA1 = () => {
 return (
<div className="relative h-full w-full">
  <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-pink-200 to-white"></div>
  <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-pink-200 to-white"></div>
  <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-pink-200 to-white"></div>
  <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-pink-200 to-white"></div>
</div>


  );
};
const BgColorGridsA2 = () => {
 return (
<div className="relative h-full w-full">
  <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-red-200 to-yellow-200"></div>
  <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-blue-200 to-white"></div>
  <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-yellow-200 to-black"></div>
  <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-blue-200 to-white"></div>
</div>

  );
};
const BgColorGridsA3 = () => {
 return (
<div className="absolute top-0 -z-10 h-full w-full bg-white">
  <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,173,0.5)] opacity-50 blur-[80px]"></div>
</div>
  );
};
const BgColorGridsA4 = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_4rem]">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff,transparent)]"></div>
</div>

  );
};
const BgColorGridsA5 = () => {
 return (
<div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,0.8)_0%,rgba(255,342,203,0.5)_50%,rgba(0,0,0,0)_100%)]"></div>
  );
};
const BgColorGridsA6 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black animate-focus-move"
        style={{
          background: 'radial-gradient(25% 125% at 50% 10%, #ffffff 40%, #6a0dad 100%)',
          backgroundSize: '200% 200%',
          animation: 'focusMove 10s ease-in-out infinite',
        }}
      ></div>
      <style>{`
        @keyframes focusMove {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
};
const BgColorGridsA7 = () => {
 return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_125%_at_50%_10%,#ffffff_0%,#ffffff_40%,#000000_100%)]"></div>
  );
};
const BgColorGridsA8 = () => {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_40%,#add8e6_100%)]"></div>
   );
 };
const BgColorGridsA9 = () => {
  return (
<div className="relative h-full w-full bg-black overflow-hidden">
  {/* Background Gradient */}
  <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_0%,#ffffff_40%,#1a1a1a_100%)]"></div>

  {/* Particles */}
  {[...Array(50)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full"
      style={{
        width: `${Math.random() * 5 + 2}px`,
        height: `${Math.random() * 5 + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `particleMove ${Math.random() * 5 + 2}s infinite linear`,
        opacity: Math.random(),
      }}
    ></div>
  ))}

  <style jsx>{`
    @keyframes particleMove {
      0% {
        transform: translateY(0) translateX(0);
      }
      100% {
        transform: translateY(-100vh) translateX(0);
      }
    }
  `}</style>
</div>
   );
 };


 const BgColorGridsA10: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
    <style>
      {`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        .animate-gradient {
          background: linear-gradient(45deg, #ff6f61, #d0e1f9, #6b5b95);
          background-size: 300% 300%;
          animation: gradientAnimation 10s ease infinite;
        }
      `}
    </style>
  </div>
  );
}; 
export default BgColorGrids;


export const BACKGROUND_OPTIONS = [
  {
    name: 'Background Light Gradient 1',
    component: <BgLightGradient1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 2',
    component: <BgLightGradient2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 3',
    component: <BgLightGradient3 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 4',
    component: <BgLightGradient4 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 5',
    component: <BgLightGradient5 />,
    theme: 'light',
  },
  {
    name: 'Background Light Gradient 6',
    component: <BgLightGradient6 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid Gradient 1',
    component: <BgLightGridGradient1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid Gradient 2',
    component: <BgLightGridGradient2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid ',
    component: <BgLightGrid1 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 2',
    component: <BgLightGrid2 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 3',
    component: <BgLightGrid3 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 4',
    component: <BgLightGrid4 />,
    theme: 'light',
  },
  {
    name: 'Background Light Grid 5',
    component: <BgLightGrid5 />,
    theme: 'light',
  },
  {
    name: 'Background Dark Gradient',
    component: <BgDarkGradient1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 2',
    component: <BgDarkGradient2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 3',
    component: <BgDarkGradient3 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 4',
    component: <BgDarkGradient4 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Gradient 5',
    component: <BgDarkGradient5 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid Gradient 1',
    component: <BgDarkGridGradient1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 1',
    component: <BgDarkGrid1 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 2',
    component: <BgDarkGrid2 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid3 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid4 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid5 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkSpider />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgDarkGrid7 />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgLightGridD1  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgLightGridD2  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGrids  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA1  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA2  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA3  />,
    theme: 'light',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA4  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA5  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA6  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA7  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA8  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA9  />,
    theme: 'dark',
  },
  {
    name: 'Background Dark Grid 3',
    component: <BgColorGridsA10  />,
    theme: 'dark',
  },
] as const;