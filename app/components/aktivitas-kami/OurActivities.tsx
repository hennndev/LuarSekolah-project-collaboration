"use client"
import React, { useState, useRef } from 'react'
import 'swiper/css'
import clsx from 'clsx'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { activities, activitiesTitle } from '@/app/data/activities'
import SwiperImages from '@/app/components/aktivitas-kami/SwiperImages'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

const OurActivities = () => {
    const swiperRef = useRef<any>(null)
    const scrollRef = useRef<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isLeftHovered, setIsLeftHovered] = useState<boolean>(false)
    const [isRightHovered, setIsRightHovered] = useState<boolean>(false)

    const handleParentSwipe = (index: number) => {
        setCurrentSlide(index)
        if(scrollRef.current && swiperRef.current.previousIndex > swiperRef.current.activeIndex && currentSlide <= 4) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
        if(scrollRef.current && swiperRef.current.previousIndex < swiperRef.current.activeIndex && currentSlide >= 3) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    }

    const handleSlidePrevBtn = () => {
        if(currentSlide !== 0) {
            swiperRef?.current?.slidePrev()
            if(scrollRef.current && currentSlide <= 4) {
                scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
            }
        }
    }
    const handleSlideNextBtn = () => {
        if(currentSlide !== 6) {
            swiperRef?.current?.slideNext()
            if(scrollRef.current && currentSlide >= 3) {
                scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
            }
        }
    }

    return (
        <section id="kegiatan-kami" className='px-[116px] py-[63px] mb-[50px] mt-[100px] space-y-[50px]'>
            <h2 className='text-[40px] leading-[60px] tracking-[0.001em] text-primary text-center font-medium'>Kegiatan Luarsekolah</h2>
            <section className='flex-between space-x-[50px]'>
                <button className='cursor-pointer rounded-full'
                    onClick={handleSlidePrevBtn}>
                    <IoIosArrowDropleftCircle className={clsx("text-primary w-[70px] h-[70px]", currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100")}/>
                </button>
                <section ref={scrollRef} className='w-[1368px] overflow-x-scroll scrollbar-hide flexx space-x-[50px]'>
                    {activitiesTitle.map((title, index) => (
                        <p key={index} className={clsx("text-[18px] leading-[22px] font-semibold whitespace-nowrap p-[30px] hover:text-primary border-b-4 cursor-pointer", currentSlide === index ? "text-primary border-primary" : "text-[#565D6D] border-transparent hover:border-primary")} onClick={() => {
                            swiperRef.current.slideTo(index)
                            setCurrentSlide(index)
                            if(scrollRef.current && currentSlide <= 4) {
                                scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
                            }
                            if(scrollRef.current && currentSlide >= 3) {
                                scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
                            }
                        }}>
                            {title}
                        </p>
                    ))}
                </section>
                <button className='cursor-pointer rounded-full'
                    onClick={handleSlideNextBtn}>
                    <IoIosArrowDroprightCircle className={clsx("text-primary w-[70px] h-[70px]", currentSlide === activitiesTitle.length - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100")}/>
                </button>
            </section>
            <Swiper
                direction='horizontal'
                ref={swiperRef}
                loop={true} 
                slidesPerView={1} 
                allowSlidePrev={currentSlide === 0 ? false : true}
                allowSlideNext={currentSlide === activities.length - 1 ? false : true}
                onSlideChange={(swiper) => handleParentSwipe(swiper.realIndex)}
                onSwiper={(swiper) => { 
                    if(scrollRef.current && swiper.previousIndex > swiper.activeIndex && currentSlide <= 4) {
                        scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
                    }
                    if(scrollRef.current && swiper.previousIndex < swiper.activeIndex && currentSlide >= 3) {
                        scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
                    }
                    setCurrentSlide(swiper.realIndex)
                    swiperRef.current = swiper
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "1447px"
                }}
            >   
                {activities.map(obj => (
                    <SwiperSlide 
                        key={obj.id}
                        style={{
                            display: "flex",
                        }}>
                        <SwiperImages images={obj.images}/>
                        <section className='w-[480px] space-y-[20px]'>
                            <h3 className='text-[32px] leading-[48px] font-medium tracking-[0.12em]'>{obj.title}</h3>
                            <p className='text-[20px] leading-[38px] font-medium tracking-[0.12em]'>{obj.date}</p>
                            <p className='text-[20px] leading-[38px] font-medium tracking-[0.12em] text-justify'>{obj.content}</p>
                        </section>
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    )
}

export default OurActivities