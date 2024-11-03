"use client"
import React from 'react'
import Image from 'next/image'
import users from '@/app/assets/icons/users.svg'
import allClass from '@/app/assets/icons/class.svg'
import trainers from '@/app/assets/icons/trainer.svg'
import igFollowers from '@/app/assets/icons/ig-followers.svg'

const StatisticInfo = () => {
    return (
        <section className='px-[100px] h-[647px] py-[75px] bg-primary mb-[100px] space-y-[110px]'>
            <h2 className='text-white text-[40px] leading-[60px] font-bold text-center'>
                Komunitas Kami Terus Bertumbuh
            </h2>
            <section className='flex-center space-x-[130px]'>
                <section className='flexx flex-col space-y-[31px]'>
                    <section className='relative w-[200px] h-[200px]'>
                        <Image src={users} fill alt="ig-followers" className='w-full h-full'/>
                    </section>
                    <section className='flexx flex-col'>
                        <p className='text-white text-[32px] leading-[48px] font-semibold'>1.260.000+</p>
                        <p className='text-white text-[24px] leading-[36px] font-normal italic'>Total Users</p>
                    </section>
                </section>
                <section className='flexx flex-col space-y-[31px]'>
                    <section className='relative w-[200px] h-[200px]'>
                        <Image src={trainers} fill alt="ig-followers" className='w-full h-full'/>
                    </section>
                    <section className='flexx flex-col'>
                        <p className='text-white text-[32px] leading-[48px] font-semibold'>100+</p>
                        <p className='text-white text-[24px] leading-[36px] font-normal italic'>Total Trainers</p>
                    </section>
                </section>
                <section className='flexx flex-col space-y-[31px]'>
                    <section className='relative w-[200px] h-[200px]'>
                        <Image src={igFollowers} fill alt="ig-followers" className='w-full h-full'/>
                    </section>
                    <section className='flexx flex-col'>
                        <p className='text-white text-[32px] leading-[48px] font-semibold'>313.000+</p>
                        <p className='text-white text-[24px] leading-[36px] font-normal italic'>Followers Instagram</p>
                    </section>
                </section>
                <section className='flexx flex-col space-y-[31px]'>
                    <section className='relative w-[200px] h-[200px]'>
                        <Image src={allClass} fill alt="ig-followers" className='w-full h-full'/>
                    </section>
                    <section className='flexx flex-col'>
                        <p className='text-white text-[32px] leading-[48px] font-semibold'>150+</p>
                        <p className='text-white text-[24px] leading-[36px] font-normal italic'>Kelas</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default StatisticInfo