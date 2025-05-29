import React from 'react';
import type { IconType } from 'react-icons';

type HexIconProps = {
    icon: IconType;
    label: string;
  };
  

const HexIcon: React.FC<HexIconProps> = ({ icon: Icon, label }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-24 h-24'>
        <svg viewBox='0 0 100 100" className="w-full h-full'>
          <polygon
            points='50,1 95,25 95,75 50,99 5,75 5,25'
            fill='#F5F5F4'
            stroke='#81B29A'
            strokeWidth='4'
          />
        </svg>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-[#2D2D2D] text-3xl'>
          <Icon />
          <span className='text-sm'>{label}</span>
        </div>
      </div>
    </div>
  )
}

export default HexIcon
