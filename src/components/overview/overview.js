import React from 'react'

function Overview() {

    const data = [
        {
            heading: "BITCOVERSE Overview",
            paragraphs : [
                {
                    subHeading: "BITCOVERSE, A Community For Everyone:",
                    text: "The premier blockchain institutional company that incorporates seamless integration of: Education, global community, consulting, social media, demo trade exchange, and mobile wallet that features a first of its kind Messenger option all into one pioneering concept."
                },
                {
                    subHeading: "Bitcov:",
                    text: "BITCOVERSE or BITCOV for short, the token issued by BITCOVERSE is a POS (Proof of Stake) and will maintain a TO BE DETERMINED total distribution volume of digital asset coins, BITCO. Being a decentralized cryptocurrency based on the Ethereum platform, while also being a standard ERC 20 token based on Ethereum blockchain, BITCOV supports all Ethereum wallets."
                },
            ]
        },
        {
            heading: "Background",
            paragraphs : [
                {
                    subHeading: "About BITCOVERSE",
                    text: "The founder of BITCOVERSE love and infatuation for cryptocurrency began in 2012, once the time was taken to fully understand them and how they were going to potentially affect the future of money globally. It was truly going to be revolutionary! The key to truly understanding cryptocurrency is research, networking with all of the people in the community, and learning from each other. The BITCOVERSE team was confidentially founded in 2018 during the infant stages of global understanding, acceptance, and pre-mass adoption of cryptocurrency. The software behind blockchain technology and cryptocurrency are pure examples of innovation and we are proud to continue this by being the first and only brand to integrate a concept of learning, prosperity, and preservation of wealth through global community, social media, education, demo trade exchange, consulting, and a first of its kind Messenger platform crypto mobile wallet where you store, receive, buy, and sell cryptocurrency PLUS the option of chatting with fellow community members."
                }
            ]
        },
        {
            heading: "Founder",
            paragraphs : [
                {
                    subHeading: "Thomas Christopher / CEO",
                    text: "Mr. Thomas Christopher is the CEO and Founder of BITCOVERSE, A Community For Everyone. Tom, is a former Actor / Model and Athlete, from New York City, who turned private Businessman at 24 years old. Key investment industries include: precious metals and gemstones (active mining partner), sports wagering, real estate (virtual as well), and blockchain technology, which is currently a key focus of Tom's investment plans. He is known to be a forward thinker who believes in innovation and usually sees things 3-10 years into the future."
                }
            ]
        },
        {
            heading: "The Premier Blockchain Boutique Company",
            paragraphs : [
                {
                    subHeading: "About BITCOVERSE",
                    text: "Founded by an ambitious forward thinking Entrepreneur and developed by up-and coming blockchain intellects who push barriers even further for the mass adoption of cryptocurrency. BITCOVERSE will create a first of its kind state of the art seamless platform featuring premium digital assets in which the world of cryptocurrency will unify as one whole global community in a safe and convenient matter. Education through social media and Retail integrated with investment consulting while offering a mobile wallet that features a first of its' kind Messenger option, BITCOVERSE is looking forward to having you be a part of our"
                },
                {
                    subHeading: "BITCOVERSE Nucleus",
                    text: "Thomas Christopher CEO"
                },
                {
                    subHeading: "Key BITCOVERSE Advantages",
                    text: "The founder of BITCOVERSE has been in the business of Entrepreneurial-ship since 2008 with an emphasis of building solid company fundamentals via great customer service through a forward thinking approach. The research and developmen team of BITCOVERSE has carried out research on blockchain technology as early as 2012. The BITCOVERSE team will officially enter the blockchain digital assets seamless platform in 2022 with the most consistent and extended technical manner, finer service and superior strategical operations to better serve blockchain digital asset learning, comprehension and transactions. Over 126 Educational Courses with Certificate and Diploma Options (Degree Programs are under Development)"
                }
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