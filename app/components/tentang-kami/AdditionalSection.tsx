"use client"
import React from 'react'
import Image from 'next/image'
import allteamImage from '@/app/assets/images/allteam.png'

const AdditionalSection = () => {
    return (
        <section className='px-[115px] py-[31px] mb-[100px] bg-primary h-[560px]'>
            <section className='flex-between h-[498px]'>
                <section className='relative w-[968px] h-[363px]'>
                    <Image src={allteamImage} fill alt="LSteam" className='w-full h-full'/>
                </section>
                <section className='w-[620px] space-y-[30px]'>
                    <section className="space-y-[16px]">
                        <h2 className='text-[38px] leading-[63px] tracking-[0.04em] font-semibold text-white'>
                            Kenal Kami Lebih Dekat
                        </h2>
                        <p className='text-[22px] leading-[35px] tracking-[0.04em] text-white'>
                            Kami terbuka untuk kerjasama! Jika Anda memiliki ide atau tawaran, silakan hubungi kami. Bersama, kita bisa menciptakan peluang pendidikan yang lebih baik untuk semua.
                        </p>
                    </section>
                    <button className='w-[300px] rounded-[12px] text-primary p-[10px] bg-white text-[22px] leading-[38px] border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white'>
                        Ajukan Penawaran
                    </button>
                </section>
            </section>
        </section>
    )
}

export default AdditionalSection