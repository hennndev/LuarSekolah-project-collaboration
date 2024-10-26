"use client"
import React from 'react'
import Image from 'next/image'
import personTeam1 from '@/app/assets/images/A1.png'
import personTeam2 from '@/app/assets/images/A2.png'
import personTeam3 from '@/app/assets/images/A3.png'
import personTeam4 from '@/app/assets/images/A4.png'
import personTeam5 from '@/app/assets/images/A5.png'
import personTeam6 from '@/app/assets/images/A6.png'
import personTeam7 from '@/app/assets/images/A7.png'
import personTeam8 from '@/app/assets/images/A8.png'
import personTeam9 from '@/app/assets/images/A9.png'
import personTeam10 from '@/app/assets/images/A10.png'
import personTeam11 from '@/app/assets/images/A11.png'

const Team = () => {
    return (
        <section className='px-[100px] py-[22px] mb-[50px] space-y-[50px]'>
            <section className='space-y-[10px]'>
                <h2 className='text-primary text-[42px] leading-[63px] tracking-[0.08em] font-bold text-center'>Team LuarSekolah</h2>
                <p className='text-[22px] leading-[48px] tracking-[0.12em] text-center'>Kami adalah sekelompok individu yang memiliki passion yang sama, yaitu memajukan pendidikan di Indonesia melalui teknologi dan kolaborasi.</p>
            </section>

            <section className='space-y-[15px]'>
                <section className='flex-center space-x-[15px]'>
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam1} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam2} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                </section>

                <section className='flex-center space-x-[15px]'>
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam3} fill alt='person3-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam4} fill alt='person4-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam5} fill alt='person5-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam6} fill alt='person6-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam7} fill alt='person7-team' className='w-full h-full'/>
                    </div>  
                </section>

                <section className='flex-center space-x-[15px]'>
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam8} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam9} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam10} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                    <div className='relative w-[268px] h-[439px]'>
                        <Image src={personTeam11} fill alt='person1-team' className='w-full h-full'/>
                    </div>  
                </section>
            </section>
        </section>
    )
}

export default Team