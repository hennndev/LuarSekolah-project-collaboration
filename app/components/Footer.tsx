"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import xIcon from '@/app/assets/icons/x.svg'
import mapIcon from '@/app/assets/icons/map.svg'
import mailIcon from '@/app/assets/icons/mail.svg'
import tiktokIcon from '@/app/assets/icons/tiktok.svg'
import youtubeIcon from '@/app/assets/icons/youtube.svg'
import whatsappIcon from '@/app/assets/icons/whatsapp.svg'
import linkedinIcon from '@/app/assets/icons/linkedin.svg'
import facebookIcon from '@/app/assets/icons/facebook.svg'
import instagramIcon from '@/app/assets/icons/instagram.svg'
import googleplayIcon from '@/app/assets/icons/googleplay.svg'


const Footer = () => {
    return (
        <footer className='px-[100px] py-[22px] space-y-[100px] pb-[50px]'>
            <section className='space-y-[30px]'>
                <section className='relative w-[120px] h-[46px]'>
                    <Image src="/images/logo.png" fill alt='logo' className='w-full h-full'/>
                </section>
                <section className='flex-between space-x-[100px]'>
                    <section className='w-[657px] space-y-[30px]'>
                        <p className='text-[20px] leading-[38px] tracking-[0.12em] text-justify w-full'>
                            Luarsekolah merupakan wadah belajar dan mengajar pelajaran non-formal/alternatif dengan cara menyediakan kelas pengajaran dalam bentuk online dan offline
                        </p>
                        <section className='space-y-[35px]'>
                            <section className='space-y-[15px]'>
                                <p className='text-[20px] font-semibold leading-[30px] tracking-[0.12em]'>Ikuti Kami</p>
                                <section className='flexx space-x-[32px]'>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={linkedinIcon} fill alt='linkedin' className='w-full h-full'/>
                                    </section>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={facebookIcon} fill alt='facebook' className='w-full h-full'/>
                                    </section>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={youtubeIcon} fill alt='youtube' className='w-full h-full'/>
                                    </section>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={instagramIcon} fill alt='instagram' className='w-full h-full'/>
                                    </section>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={tiktokIcon} fill alt='tiktok' className='w-full h-full'/>
                                    </section>
                                    <section className='relative w-[24px] h-[23px]'>
                                        <Image src={xIcon} fill alt='x' className='w-full h-full'/>
                                    </section>
                                </section>
                            </section>

                            <section className='space-y-[15px]'>
                                <p className='text-[20px] leading-[30px] tracking-[0.12em] font-semibold'>Hubungi Kami</p>
                                <section className='space-y-[10px]'>
                                    <section className='flexx space-x-[20px]'>
                                        <section className='relative w-[25px] h-[25px]'>
                                            <Image src={whatsappIcon} fill alt='whatsapp' className='w-full h-full'/>
                                        </section>
                                        <p className='text-[20px] leading-[30px] font-medium tracking-[0.12em]'>0811 2021 444</p>
                                    </section>

                                    <section className='flexx space-x-[20px]'>
                                        <section className='relative w-[25px] h-[25px]'>
                                            <Image src={mailIcon} fill alt='mail' className='w-full h-full'/>
                                        </section>
                                        <p className='text-[20px] leading-[30px] font-medium tracking-[0.12em]'>info@luarsekolah.com</p>
                                    </section>
                                </section>
                            </section>

                            <section className='space-y-[15px]'>
                                <p className='text-[20px] font-semibold leading-[30px] tracking-[0.12em]'>Unduh Aplikasi</p>
                                <section className='relative w-[187px] h-[72px]'>
                                    <Image src={googleplayIcon} fill alt='googleplay' className='w-full h-full'/>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section className='w-[861px] space-y-[50px]'>
                        <section className='flex space-x-[10px]'>
                            <section className='w-[450px] h-[250px]'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.4445330097889!2d106.81931793147752!3d-6.214721614053378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e2a9a0f2f7%3A0x490f4bc4df781104!2sCentennial%20Tower%2C%20Jl.%20Jend.%20Gatot%20Subroto%20No.27%2C%20RT.2%2FRW.2%2C%20Karet%20Semanggi%2C%20Setiabudi%2C%20South%20Jakarta%20City%2C%20Jakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012950!5e0!3m2!1sen!2sid!4v1698050083376!5m2!1sen!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </section>
                            <section className='flex flex-1 space-x-[10px]'>
                                <section className='relative w-[18px] h-[25px]'>
                                    <Image src={mapIcon} fill alt="map" className='w-full h-ull'/>
                                </section>
                                <p className='flex-1 text-[18px] leading-[38px] tracking-[0.12em] text-[#888888]'>
                                    Centenial Tower Level 29, Jl Jend Gatot Subroto No.27, Karet Semanggi, Setiabudi Daerah Khusus Ibukota Jakarta 12950
                                </p>
                            </section>
                        </section>

                        <section className='w-full flex justify-between'>
                            <section className='space-y-[10px]'>
                                <p className='text-[20px] leading-[30px] tracking-[0.12em] font-semibold'>Informasi</p>
                                <section className='flex flex-col space-y-[5px]'>
                                    <Link href="/tentang-kami" className='text-[20px] leading-[30px] tracking-[0.12em] cursor-pointer hover:text-primary'>Tentang Kami</Link>
                                    <Link href="/aktivitas-kami" className='text-[20px] leading-[30px] tracking-[0.12em] cursor-pointer hover:text-primary'>Aktivitas Kami</Link>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Blog</p>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Promo</p>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>FAQ</p>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Komunitas</p>
                                </section>
                            </section>
                            <section className='space-y-[10px]'>
                                <p className='text-[20px] leading-[30px] tracking-[0.12em] font-semibold'>Program</p>
                                <section className='flex flex-col space-y-[5px]'>
                                    <Link href="https://luarsekolah.com/prakerja" target="_blank" className='text-[20px] leading-[30px] tracking-[0.12em] cursor-pointer hover:text-primary'>Prakerja</Link>
                                    <Link href="https://belajarbekerja.com" target="_blank" className='text-[20px] leading-[30px] tracking-[0.12em] cursor-pointer hover:text-primary'>Belajar Bekerja</Link>
                                    <Link href="https://luarsekolah.com/indonesia-skills-week" target="_blank" className='text-[20px] leading-[30px] tracking-[0.12em] cursor-pointer hover:text-primary'>Indonesia Skills Week</Link>
                                </section>
                            </section>
                            <section className='space-y-[10px]'>
                                <p className='text-[20px] leading-[30px] tracking-[0.12em] font-semibold'>Lainnya</p>
                                <section className='space-y-[5px]'>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Ajukan Penawaran</p>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Syarat & Ketentuan</p>
                                    <p className='text-[20px] leading-[30px] tracking-[0.12em]'>Kebijakan Privasi</p>
                                </section>
                            </section>
                        </section>  
                    </section>
                </section>
            </section>

            <section className='flex-between'>
                <p className='text-[20px] leading-[38px] tracking-[0.12em]'>PT Teknologi Edukasi Indonesia</p>
                <p className='text-[20px] leading-[38px] tracking-[0.12em]'>Copyright &#169; 2022 &#xb7; All Right Reserved</p>
            </section>
        </footer>
    )
}

export default Footer