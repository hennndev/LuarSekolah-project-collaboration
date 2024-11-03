"use client"
import React from 'react'
import Image from 'next/image'
import rocketImage from '@/app/assets/icons/rocket.png'
import arrowImage from '@/app/assets/icons/arrow.png'
import brainImage from '@/app/assets/icons/brain.png'

const OurValue = () => {
    return (
        <section className='px-[100px] py-[22px] mb-[100px] space-y-[50px]'>
            <h2 className='text-primary text-[40px] leading-[63px] tracking-[0.04em] font-bold text-center'>Value LuarSekolah</h2>
            <section className='flex justify-center space-x-[80px]'>
                <section className='w-[450px] flexx flex-col space-y-[60px]'>
                    <section className='relative w-[99px] h-[99px]'>
                        <Image src={rocketImage} fill alt="rocket" className='w-full h-full'/>
                    </section>
                    <section className='space-y-[10px]'>
                        <h3 className='text-[24px] leading-[42px] tracking-[0.015em] font-medium text-center'>Berani Untuk Memulai</h3>
                        <p className='text-[20px] leading-[38px] tracking-[0.04em] text-justify'>
                            Luarsekolah memiliki kursus yang mengajari tools dan pengetahuan yang dibutuhkan untuk berani mengambil langkah pertama.
                        </p>
                    </section>
                </section>
                <section className='w-[450px] flexx flex-col space-y-[60px]'>
                    <section className='relative w-[99px] h-[99px]'>
                        <Image src={arrowImage} fill alt="arrow" className='w-full h-full'/>
                    </section>
                    <section className='space-y-[10px]'>
                        <h3 className='text-[24px] leading-[42px] tracking-[0.015em] font-medium text-center'>Relevan Dengan Zaman</h3>
                        <p className='text-[20px] leading-[38px] tracking-[0.04em] text-justify'>
                            Kursus Luarsekolah bisa kamu akses dimana saja dan kapan saja. Dapatkan sertifikat di setiap kelas yang membantu kamu untuk meningkatkan peluang karir
                        </p>
                    </section>
                </section>
                <section className='w-[450px] flexx flex-col space-y-[60px]'>
                    <section className='relative w-[99px] h-[99px]'>
                        <Image src={brainImage} fill alt="brain" className='w-full h-full'/>
                    </section>
                    <section className='space-y-[10px]'>
                        <h3 className='text-[24px] leading-[42px] tracking-[0.015em] font-medium text-center'>Terbaru Dan Terkurasi</h3>
                        <p className='text-[20px] leading-[38px] tracking-[0.04em] text-justify'> 
                            Luarsekolah memiliki kursus webinar interaktif, yang bisa membuka kesempatan untuk berdiskusi dan dijawab langsung oleh instruktur berpengalaman lebih dari 5 tahun.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default OurValue