import React from 'react'

const Journey = () => {
    return (
        <div className="relative bg-[rgb(1,57,63)] text-white py-20 px-4 ">
            <div className="absolute inset-0 bg-[url('/row-bgimage-1.png')] bg-cover bg-fixed opacity-20 pointer-events-none"></div>
            <div className='flex justify-between border-y border-y-gray-300 py-10 mx-20'>
                <div className='text-[150px] leading-[160px]'>2002</div>
                <div className='text-[150px] leading-[160px] text-[#888]'>08</div>

                <div className='text-[150px] leading-[160px] text-[#888]'>19</div>
            </div>
            <div className='flex mx-8 mt-20'>
                <div className='w-[30%] flex items-center '>
                    <h1 className='text-[78px] leading-[88px]'>Our <br /> Journey</h1>
                </div>
                <div className='w-[70%] '>
                    <h2 className='text-[48px] text-start'>Our
                        journey
                        Established For Oral Health</h2>
                    <p className='text-justify mt-10 '>Years ago, fresh out of dental school, Dr. Medica envisioned a dental practice that went beyond just treating dental issues. We dreamed of a placewhere patients felt at ease, where their fears were understood, and where their smiles were valued as much as their dental health. Armed with her determination, she took a leap of faith and founded Smile Haven Dental Clinic.
                        <br />
                        <br />Nothing is more important to us than delivering high-quality, accessible care. Dr. Main and our team remain at the forefront of modern dentistry. We’ll help you feel at home in our easy-going environment. We also offer sedation & relaxation amenities</p>
                </div>
            </div>

           

        </div>
    )
}

export default Journey
