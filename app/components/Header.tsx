"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSortDown, FaSortUp } from "react-icons/fa"
import searchIcon from '@/app/assets/icons/search.png'

const Header = () => {

    const [isDropdown, setIsDropdown] = useState<boolean>(false)
    const handleDropdown = () => {
        setIsDropdown(!isDropdown)
    }

    return (
        <header className='fixed w-full z-[9999] max-w-[1895px] mx-auto'>
            <section className='bg-white px-[100px] py-[22px] flex-between space-x-[100px]'>
                <section className="flexx space-x-20">
                    <Link href="/tentang-kami" className='w-[120px] h-[46px] relative'>
                        <Image src="/images/logo.png" fill alt="logo" className='w-full h-full'/>
                    </Link>
                    <section className='group flexx space-x-[9px] cursor-pointer relative' onClick={handleDropdown}>
                        <p className='text-[20px] leading-[30px] tracking-[0.12em] text-shadow-lg group-hover:text-primary'>Program</p>
                        {isDropdown ? <FaSortUp className='text-xl group-hover:text-primary mt-2'/> : <FaSortDown className='text-xl group-hover:text-primary mb-1'/>}

                        {isDropdown && (
                            <section className='absolute top-10 -left-2 shadow-dropdown w-[326px] px-[32px] py-[30px] rounded-b-lg bg-white flex flex-col space-y-[25px]'>
                                <a href="https://luarsekolah.com/prakerja" target='_blank' className='text-[20px] pb-[25px] leading-[30px] tracking-[0.12em] border-b-2 border-secondary-gray hover:text-primary'>Prakerja</a>
                                <a href="https://belajarbekerja.com" target='_blank' className='text-[20px] pb-[25px] leading-[30px] tracking-[0.12em] border-b-2 border-secondary-gray hover:text-primary'>Magang Bekerja</a>
                                <a href="https://luarsekolah.com/indonesia-skills-week" target='_blank' className='text-[20px] leading-[30px] tracking-[0.12em] hover:text-primary'>Indonesia Skills Week</a>
                            </section>
                        )}
                    </section>
                </section>
                <section className='flexx w-[750px] h-[65px] py-[17px] px-[25px] rounded-[12px] border border-secondary-gray shadow-sm'>
                    <input type="text" placeholder='Cari kelas yang ingin kamu pelajari' className='flex-1 text-[20px] leading-[30px] tracking-[0.12em] border-none outline-none placeholder:text-secondary-gray mr-2'/>
                    <div className='relative w-[20px] h-[20px] cursor-pointer'>
                        <Image src={searchIcon} fill alt="logo" className='w-full h-full object-contain'/>
                    </div>
                </section>
                <section className='flexx space-x-[13px]'>
                    <Link href="https://luarsekolah.com/masuk" className='w-[170px] h-[61px] border-2 border-primary text-primary py-[16px] px-[19px] rounded-[10px] text-[20px] font-medium bg-transparent text-center'>
                        Masuk
                    </Link>
                    <Link href="https://luarsekolah.com/daftar" className='w-[170px] h-[61px] border-2 border-primary text-white bg-primary py-[16px] px-[19px] rounded-[10px] text-[20px] font-medium text-center'>
                        Daftar
                    </Link>
                </section>
            </section>
        </header>
    )
}
export default Header