"use client"
import React from 'react'

const VisiMisi = () => {
    return (
        <section className='w-full flex-center bg-visimisi-image bg-cover bg-center h-[660px] mb-[100px]'>
            <section className='w-[1370px] h-[507px] space-y-[18px]'>
                <h2 className='text-[40px] font-bold leading-[60px] text-white text-center'>Visi & Misi</h2>
                <section className='flex space-x-[50px]'>
                    <section className='bg-white rounded-[24px] space-y-[25px] w-[660px] h-[420px] py-5 px-10'>
                        <h3 className='text-primary text-[32px] leading-[48px] font-semibold text-center'>Visi</h3>
                        <p className='text-[20px] text-justify tracking-[0.04em] text-[#171A1F]'>
                            Menjadi platform pendidikan non-formal berbasis teknologi yang menghasilkan generasi muda yang unggul dalam keterampilan, pengetahuan, karakter, aktif dalam pengembangan potensi diri dan memiliki daya saing.
                        </p>
                    </section>
                    <section className='bg-white rounded-[24px] space-y-[25px] w-[660px] h-[420px] py-5 px-10'>
                        <h3 className='text-primary text-[32px] leading-[48px] font-semibold text-center'>Misi</h3>
                        <p className='text-[20px] text-justify tracking-[0.04em] text-[#171A1F]'>
                            Kami berkomitmen untuk merancang program pendidikan yang relevan dengan kebutuhan industri saat ini. Kami akan menyediakan platform teknologi yang lengkap untuk mendukung pembelajaran mandiri dan kolaboratif. Melalui pelatihan berkualitas dan pendampingan berkelanjutan, kami ingin menumbuhkan budaya belajar sepanjang hayat pada generasi muda.
                        </p>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default VisiMisi