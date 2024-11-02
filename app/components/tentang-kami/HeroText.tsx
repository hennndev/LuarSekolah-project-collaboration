"use client"
import React from 'react'
import Image from 'next/image'
import heroImage from '@/app/assets/images/hero-image.png'

const HeroText = () => {
    return (
        <section className='px-[100px] py-[22px] mb-[100px]'>
            <section className='flex space-x-[70px]'>
                <section className='max-w-[811px] space-y-[30px]'>
                    <h1 className='text-[48px] text-primary font-bold tracking-[0.12em] leading-[72px]'>Selayang Pandang</h1>
                    <p className='text-[24px] leading-[38px] tracking-[0.12em] text-justify'>
                        Luarsekolah hadir sebagai platform edukasi vokasi dan pengembangan diri  berbasis online yang dirancang untuk membuka pintu peluang dan pengembangan diri bagi semua kalangan yang ingin meningkatkan keterampilan dan pengetahuan mereka <span className='font-bold'>#SampaiJadiBisa</span>
                    </p>
                </section>
                <section className='relative w-[700px] h-[384px]'>
                    <Image src={heroImage} fill alt="hero-image" className='w-full h-full'/>
                </section>
            </section>

            <section className='space-y-[50px] mt-[100px]'>
                <h2 className='text-[42px] text-primary font-semibold tracking-[0.08em] leading-[63px]'>
                    Tidak hanya digital marketing saja yang ilmunya selalu berubah. Permintaan industri di Indonesia juga akan terus berkembang.
                </h2>
                <p className='text-[24px] leading-[38px] tracking-[0.12em] text-justify'>
                    Sejak tahun 2019, Luarsekolah hadir untuk menyediakan kursus online yang membantu dalam membekali kebutuhan ilmu dan skill industri. Kami berupaya keras dalam mengembangkan kursus yang relevan dengan kebutuhan pekerja Indonesia yang dapat diakses di mana saja. Materi kami disusun oleh para ahli, agar para pekerja mampu bersaing di pasar kerja yang makin kompetitif di masa depan. <br /> <br />
                    Beragam kelas telah Luarsekolah hadirkan, sebagai bukti untuk menjawab kebutuhan Industri, seperti:
                    Penggunaan Chat GPT, penggunaan canva, dasar manajemen pemasaran, belajar berpikir kritis, pelatihan kepemimpinan untuk manajer, pengembangan bisnis budi daya buah, merancang ilustrasi, dasar digital marketing, menganalisa perilaku konsumen, memasarkan produk untuk spesialis pemasaran, dan masih banyak lagi kelas-kelas yang akan muncul setiap tahunnya.
                </p>
            </section>
        </section>
    )
}

export default HeroText