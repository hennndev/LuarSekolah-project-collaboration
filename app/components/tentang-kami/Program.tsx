"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import prakerjaImage from '@/app/assets/images/prakerja.png'
import belajarBekerjaImage from '@/app/assets/images/belajarbekerja.png'
import skillsWeekImage from '@/app/assets/images/skillsweek.png'

const Program = () => {
    return (
        <section className='py-[22px] mb-[50px] space-y-[100px]'>
            <h2 className='text-primary text-[42px] leading-[63px] tracking-[0.08em] font-bold text-center'>
                Pilihan Program Yang Bisa Kamu Ikuti!
            </h2>
            <section className='flex justify-center space-x-[50px]'>


                <section className='flex flex-col justify-between w-[573px] p-[20px] rounded-[24px] shadow-card space-y-[68px]'>
                    <section className='flex-1 space-y-[30px]'>
                        <section className="flex-center">
                            <section className='relative w-[300px] h-[80px]'>
                                <Image src={prakerjaImage} fill alt='prakerja' className='w-full h-full bg-contain'/>
                            </section>
                        </section>
                        <section>
                            <p className='text-[20px] leading-[38px]'>
                                Program Kartu Prakerja adalah program beasiswa pelatihan untuk meningkatkan kompetensi kerja dan kewirausahaan, ditujukan untuk:
                            </p>
                            <ul className='list-disc text-[20px] leading-[38px] ml-7'>
                                <li>Pencari kerja yang sudah bekerja / buruh yang ingin mendapatkan peningkatan skill atau kompetensi.</li>
                                <li>Pekerja / buruh yang terkena pemutusan hubungan kerja.</li>
                                <li>Pelaku usaha mikro dan kecil.</li>
                                <li>Pelatihan mulai dari Digital Marketing, Penggunaan Chat GPT, Membuat Pestisida, Membuat Desain produk sampai melatih berpikir kritis.</li>
                            </ul>
                        </section>
                    </section>
                    <section className="flex-center">
                        <Link href="https://luarsekolah.com/prakerja" target="_blank" className='w-[300px] text-center p-[10px] rounded-[12px] text-white bg-secondary outline-none text-[22px] leading-[38px]'>
                            Pelajari Lebih Lanjut
                        </Link>
                    </section>
                </section>


                <section className='flex flex-col justify-between w-[573px] p-[20px] rounded-[24px] shadow-card space-y-[68px]'>
                    <section className='flex-1 space-y-[30px]'>
                        <section className="flex-center">
                            <section className='relative w-[265px] h-[90px]'>
                                <Image src={belajarBekerjaImage} fill alt='belajar-bekerja' className='w-full h-full'/>
                            </section>
                        </section>
                        <section>
                            <p className='text-[20px] leading-[38px]'>
                                Belajar Bekerja merupakan program untuk mempersiapkan individu menjadi lebih siap secara profesional. Manfaatnya:
                            </p>
                            <ul className='list-disc text-[20px] leading-[38px] ml-7'>
                                <li>Peserta dapat mengerjakan kasus nyata yang terjadi di dunia industri.</li>
                                <li>Memanfaatkan pemahaman digital transformasi serta teknologi Kecerdasan Buatan (AI).</li>
                                <li>Didampingi oleh praktisi berpengalaman.</li>
                                <li>Terdapat pilihan kelas populer seperti: Digital Marketing, Social Media Marketing, Content Writer, Graphic Designer, Web Developer dan UI/UX Designer.</li>
                            </ul>
                        </section>
                    </section>
                    <section className="flex-center">
                        <Link href="https://belajarbekerja.com" target="_blank" className='w-[300px] text-center p-[10px] rounded-[12px] text-white bg-secondary outline-none text-[22px] leading-[38px]'>
                            Pelajari Lebih Lanjut
                        </Link>
                    </section>
                </section>


                <section className='flex flex-col justify-between w-[573px] p-[20px] rounded-[24px] shadow-card space-y-[68px]'>
                    <section className='flex-1 space-y-[30px]'>
                        <section className="flex-center">
                            <section className='relative w-[168px] h-[91px]'>
                                <Image src={skillsWeekImage} fill alt='skills-week' className='w-full h-full'/>
                            </section>
                        </section>
                        <section>
                            <p className='text-[20px] leading-[38px]'>
                                Indonesia Skills Week adalah event dua bulanan dari Prakerja yang terbuka untuk semua golongan, termasuk alumni Prakerja. Tingkatkan Kompetensi Diri dan Daya Saing dengan Pelatihan Eksklusif Indonesia Skills Week
                            </p>
                        </section>
                    </section>
                    <section className="flex-center">
                        <Link href="https://luarsekolah.com/indonesia-skills-week" target='_blank' className='w-[300px] text-center p-[10px] rounded-[12px] text-white bg-secondary outline-none text-[22px] leading-[38px]'>
                            Pelajari Lebih Lanjut
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Program