"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import temurayaImage from '@/app/assets/images/temuraya.png'
import unityforcharityImage from '@/app/assets/images/unityforcharity.png'
import cendekialscImage from '@/app/assets/images/cendekialsc.png'
import webinarprakerjaImage from '@/app/assets/images/webinarprakerja.png'
import minimagangImage from '@/app/assets/images/minimagang.png'


const OurActivities = () => {
    return (
        <section className='px-[100px] py-[22px] mb-[50px] space-y-[50px]'>
            <h2 className='text-primary text-[42px] leading-[63px] tracking-[0.08em] font-bold text-center'>
                Kegiatan LuarSekolah
            </h2>
            <section className='flex space-x-[22px]'>
                <section className='relative w-[820px] h-[508px]'>
                    <Image src={temurayaImage} fill alt='temuraya' className='w-full h-ull'/>
                </section>
                <section className='flex-1 flex flex-wrap'>
                    <section className='relative w-[399px] h-[242px]'>
                        <Image src={unityforcharityImage} fill alt='unityforcharity' className='w-full h-ull'/>
                    </section>
                    <section className='relative w-[399px] h-[242px]'>
                        <Image src={cendekialscImage} fill alt='cendekialsc' className='w-full h-ull'/>
                    </section>
                    <section className='relative w-[399px] h-[242px]'>
                        <Image src={webinarprakerjaImage} fill alt='webinarprakerja' className='w-full h-ull'/>
                    </section>
                    <section className='relative w-[399px] h-[242px]'>
                        <Image src={minimagangImage} fill alt='minimagang' className='w-full h-ull'/>
                    </section>
                </section>
            </section>
            <section className="flex-center">
                <Link href="/aktivitas-kami/#kegiatan-kami" className="w-[300px] h-[60px] text-center bg-primary text-white rounded-[12px] p-[10px] text-[22px] leading-[38px]">Lihat Selengkapnya</Link>
            </section>
        </section>
    )
}

export default OurActivities