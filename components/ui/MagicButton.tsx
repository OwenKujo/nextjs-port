"use client"
import React from 'react'

const MagicButton = ( {
  title,icon, position, handleClick, link, otherClasses}:{
    title: string; icon: React.ReactNode; position:string, handleClick?: () => void; link?: string; otherClasses? : string;
}) => {
  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    } else if (link) {
      window.open(link); // Redirect to external link
    }
  };
  return (
        
        // Button code
        <button onClick={handleButtonClick} className="relative inline-flex h-12 w-50 overflow-hidden rounded-full p-[1px] 
        focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
        bg-[conic-gradient(from_90deg_at_50%_50%,#cbfffe_0%,#3984b2_50%,#cbeeff_100%)]" />
          <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full
           bg-slate-950 px-10 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
            {position === 'left'&& icon}
            {title}
            {position === 'right'&& icon}
          </span>
      </button>
  )
}

export default MagicButton