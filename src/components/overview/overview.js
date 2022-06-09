import React from 'react'

function Overview() {

    const data = [
        {
            heading: "Top heading",
            paragraphs : [
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
            ]
        },
        {
            heading: "Top heading",
            paragraphs : [
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
            ]
        },
        {
            heading: "Top heading",
            paragraphs : [
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
            ]
        },
        {
            heading: "Top heading",
            paragraphs : [
                {
                    subHeading: "sub heading",
                    text: "text"
                },
                {
                    subHeading: "sub heading",
                    text: "text"
                },
            ]
        },
    ]

  return (
    <div className='text-center mb-20'>
        <div className="pt-16 pb-16 text-center text-[#143d59] mb-20 text-6xl font-bold">
            <span className='text-[#f2b31a]'>Company</span> Overview
        </div>
        <div className='mx-auto max-w-3xl'>
            {data.map((value, index) => 
                <div key={index}>
                    <h1 className='text-[#f2b31a] font-bold text-3xl mb-5'>{value.heading}</h1>
                    {value.paragraphs.map((para, paraInd) => 
                        <div key={paraInd}>
                            <h1 className='text-gray-900 font-bold text-xl mb-5'>{para.subHeading}</h1>
                            <p className='text-zinc-500 text-xs font-semibold mb-5'>{para.text}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    </div>
  )
}

export default Overview