import React from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image';

export const CustomNextArrow = ({ onClick }) => (
    <div
        className='position-absolute top-50 end-0 translate-middle-y'
        style={{ cursor: 'pointer', zIndex: 10, transform: 'translateX(5rem)' }}
        onClick={onClick}
    >
        {/* next-arrow-icon.png */}
        {/* <Icon
            icon="ep:arrow-right-bold"
            color='#c29d55'
            style={{ width: '1.6rem', height: '1.6rem' }}
        /> */}
        <Image
            src={`/next-arrow-icon.png`}
            alt='next arrow icon'
            width={18}
            height={18}
            quality={100}
            priority
            style={{ height: 'auto' }}
        />
    </div>
);

export const CustomPrevArrow = ({ onClick }) => (
    <div
        className='position-absolute top-50 start-0 translate-middle-y'
        style={{ cursor: 'pointer', zIndex: 10 }}
        onClick={onClick}
    >
        <Image
            src={`/prev-arrow-icon.png`}
            alt='next arrow icon'
            width={18}
            height={18}
            quality={100}
            priority
            style={{ height: 'auto' }}
        />
    </div>
);