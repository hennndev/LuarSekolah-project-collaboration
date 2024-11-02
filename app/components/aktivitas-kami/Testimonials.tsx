"use client"
import React, { useState, useRef } from 'react'
import 'swiper/css'
import clsx from 'clsx'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import Image from 'next/image'
import { GoDotFill } from "react-icons/go"
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { testimonials } from '@/app/data/testimonials'
import { IoIosArrowDropleft, IoIosArrowDropleftCircle, IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";


const Testimonials = () => {
    const swiperRef = useRef<any>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [isLeftHovered, setIsLeftHovered] = useState<boolean>(false)
    const [isRightHovered, setIsRightHovered] = useState<boolean>(false)
    
    return (
        <section className='bg-primary mb-[100px] flex-center py-[126px] px-[233px]'>
            <section className='w-[1450px] space-y-[50px]'>
                <section className='flex-between'>
                    <h2 className='text-white text-[48px] font-bold leading-[72px]'>Apa Kata Mereka?</h2>
                    <section className='flexx space-x-[15px]'>
                        <button 
                            onMouseEnter={() => setIsLeftHovered(true)}
                            onMouseLeave={() => setIsLeftHovered(false)}
                            className='cursor-pointer rounded-full'
                            onClick={() => swiperRef?.current?.slidePrev()}>
                            {isLeftHovered ? <IoIosArrowDropleftCircle className='text-white w-[70px] h-[70px] '/> : <IoIosArrowDropleft className='text-white w-[70px] h-[70px] '/>}
                        </button>
                        <button 
                            onMouseEnter={() => setIsRightHovered(true)}
                            onMouseLeave={() => setIsRightHovered(false)}
                            className='cursor-pointer rounded-full' onClick={() => swiperRef?.current?.slideNext()}>
                            {isRightHovered ? <IoIosArrowDroprightCircle className='text-white w-[70px] h-[70px] '/> : <IoIosArrowDropright className='text-white w-[70px] h-[70px] '/>}
                        </button>
                    </section>
                </section>

                <Swiper
                    direction='horizontal'
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false, // Pause on interaction
                    }}
                    ref={swiperRef}
                    loop={true} 
                    slidesPerView={1} 
                    onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
                    onSwiper={(swiper) => { 
                        setCurrentSlide(swiper.realIndex)
                        swiperRef.current = swiper
                    }}
                >   
                    {testimonials.map(obj => (
                        <SwiperSlide style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            rowGap: "35px",
                        }} key={obj.slide}>
                            {obj.testimonials.map(testimonial => (
                                <section key={testimonial.id} className='bg-white w-[460px] h-[315px] rounded-[24px] py-[23px] px-[24px] space-y-[24px]'>
                                    <section className='flexx space-x-[9px]'>
                                        <div className='relative w-[65px] h-[65px]'>
                                            <Image src={testimonial.image} fill alt={testimonial.name} className='w-full h-full'/>
                                        </div>
                                        <section>
                                            <h6 className='text-[16px] font-bold leading-[22px] text-[#171A1F]'>{testimonial.name}</h6>
                                            <p className='text-[14px] leading-[18px] text-[#888888]'>{testimonial.origin}</p>
                                            <p className='text-[14px] leading-[18px] text-[#888888]'>{testimonial.class}</p>
                                        </section>
                                    </section>
                                    <p className='text-[16px] leading-[22px] text-[#171A1F]'>
                                        {testimonial.testimonial}
                                    </p>
                                </section>

                            ))}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <section className='flex-center space-x-[10px]'>
                    {testimonials.map((_, index) => (
                        <GoDotFill 
                            key={index}
                            onClick={() => swiperRef.current.slideToLoop(index)}
                            className={clsx("text-3xl cursor-pointer hover:text-secondary", 
                                currentSlide === index ? "text-secondary" : "text-white"
                            )}/>
                    ))}
                </section>
            </section>
        </section>
    )
}
export default Testimonials