"use client"
import React from 'react'
import Image from 'next/image'
import heroImage from '@/app/assets/images/hero-image-aktivitas.png'

const HeroText = () => {
    return (
        <section className='px-[116px] py-[63px] bg-primary mb-[50px]'>
            <section className='flex-between'>
                <section className='w-[811px] space-y-[30px]'>
                    <h1 className='text-[40px] leading-[63px] tracking-[0.06em] font-bold text-white'>Jejak Langkah Kami</h1>
                    <p className='text-[22px] leading-[38px] tracking-[0.06em] text-white'>
                        Kami adalah komunitas yang saling mendukung, di mana kamu tidak hanya akan belajar, tetapi juga terhubung dengan para profesional di berbagai bidang. <br /> <br />
                        Kami paham bila perjalanan menuju kesuksesan karier tidak selalu mudah. Karena itu, kami berkomitmen untuk memberikan dukungan penuh dalam proses pembelajaran kepada kamu.
                    </p>
                </section>

                <section className='relative w-[730px] h-[429px]'>
                    <Image src={heroImage} fill alt='heor-image' className='w-full h-full'/>
                </section>
            </section>
        </section>
    )
}

export default HeroText