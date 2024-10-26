"use client"
import React, { useState, useRef } from 'react'
import 'swiper/css'
import clsx from 'clsx'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { GoDotFill } from "react-icons/go"
import { Swiper, SwiperSlide } from 'swiper/react'
import Image, { StaticImageData } from 'next/image'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

type PropsTypes = {
    images: Array<StaticImageData>
}

const SwiperImages = ({images}: PropsTypes) => {
    const swiperImageRef = useRef<any>(null)
    const [currentSlideImage, setCurrentSlideImage] = useState(0)


    return (
        <Swiper
            direction='horizontal'
            modules={[Autoplay]}
            nested={true}
            touchEventsTarget="wrapper" 
            autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false
            }}
            ref={swiperImageRef}
            loop={true} 
            slidesPerView={1} 
            onSlideChange={(swiper) => setCurrentSlideImage(swiper.realIndex)}
            onSwiper={(swiper) => { 
                swiperImageRef.current = swiper
                setCurrentSlideImage(swiper.realIndex)
            }}
            style={{
                width: "970px",
                height: "610px",
                marginRight: "50px"
            }}
        >   
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <div className='relative w-full h-full'>
                        <Image src={img} fill alt="activity-image" className='w-full h-full'/> 
                        <section className='absolute w-full h-full top-0 left-0 bottom-0 z-50 space-x-[10px] flex justify-center items-end pb-10'>
                            <IoIosArrowDropleftCircle className='absolute top-[40%] left-5 transform translate-y-[50%] text-primary w-[60px] h-[60px] cursor-pointer opacity-50 hover:opacity-100' onClick={() => swiperImageRef.current.slidePrev()}/>
                            <IoIosArrowDroprightCircle className='absolute top-[40%] right-5 transform translate-y-[50%] text-primary w-[60px] h-[60px] cursor-pointer opacity-50 hover:opacity-100' onClick={() => swiperImageRef.current.slideNext()}/>
                            {images.length > 1 && images.map((_, index) => (
                                <GoDotFill 
                                    key={index}
                                    onClick={() => swiperImageRef.current.slideToLoop(index)}
                                    className={clsx("text-3xl cursor-pointer hover:text-primary", 
                                        currentSlideImage === index ? "text-primary" : "text-white"
                                )}/>
                            ))}
                        </section>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperImages