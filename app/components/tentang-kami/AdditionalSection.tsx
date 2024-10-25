"use client"
import React from 'react'
import Image from 'next/image'
import luarsekolahTeamImage from '@/app/assets/images/luarsekolah-team.png'

const AdditionalSection = () => {
    return (
        <section className='px-[100px] py-[22px] mb-[50px] bg-primary h-[560px]'>
            <section className='flex-between'>
                <section className='relative w-[702px] h-[498px]'>
                    <Image src={luarsekolahTeamImage} fill alt="LSteam" className='w-full h-full'/>
                </section>
                <section className='w-[620px] space-y-[30px]'>
                    <section className="space-y-[16px]">
                        <h2 className='text-[42px] leading-[63px] tracking-[0.08em] font-semibold text-white'>
                            Kenal Kami Lebih Dekat
                        </h2>
                        <p className='text-[24px] leading-[38px] tracking-[0.06em] text-white'>
                            Kami terbuka untuk kerjasama! Jika Anda memiliki ide atau tawaran, silakan hubungi kami. Bersama, kita bisa menciptakan peluang pendidikan yang lebih baik untuk semua.
                        </p>
                    </section>
                    <button className='w-[300px] border border-primary rounded-[12px] text-primary p-[10px] bg-white text-[22px] leading-[38px]'>
                        Ajukan Penawaran
                    </button>
                </section>
            </section>
        </section>
    )
}

export default AdditionalSection