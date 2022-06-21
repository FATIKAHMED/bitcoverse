import React from 'react'
import Founder from '../founder/Founder';

function Overview() {
    let skip=<br/>;

    function breaklike (){
        return "\n";
    }
    const data = [
        {
            heading: "BITCOVERSE Overview",
            paragraphs : [
                {
                    subHeading: "BITCOVERSE, A Community For Everyone:",
                    text: "The premier blockchain institutional company that incorporates seamless integration of: Education, global community, consulting, social media, demo trade exchange, and mobile wallet that features a first of its kind Messenger option all into one pioneering concept."
                },
                {
                    subHeading: "BITCOV",
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
            heading: "",
            paragraphs : [
                {
                    subHeading: "",
                    text: ""
                }
            ]
        },
        {
            heading: "Advantages",
            paragraphs : [
                {
                    subHeading: "Operational Strategies",
                    text: "On top of solid fundamentals, pure innovation, and a forward thinking approach lies a powerful core of BITCOVERSE, which is its' R&D team. A superior support team contributes to an around the clock result of world class constancy and service for all of its' global community. The vision of BITCOVERSE is to collaborate with other astute members both inside and outside of our global community to create a prosperous and endless future through long-term and large-scale online/offline promotion leading to mass adoption."
                },
                {
                    subHeading: "Competent Customer Services",
                    text: "Our global community interaction resolves any requests made in order to ensure a smooth and operational system. BITCOVERSE offers different options of customer service including webpage, email, and a Retail location in Antalya, Turkey."
                },
                {
                    subHeading: "Income & Expense",
                    text: "BITCOVERSE income streams include: advertisement space, educational courses, NFTS, publications, and services offered. BITCOVERSE expenses are mainly for: blockchain technology R&D, marketing and promotion, and operations."
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
    <div className='text-center container mx-auto mb-20'>
        <div className="pt-10 pb-10 text-center text-[#133b59] mb-20 text-6xl font-bold">
            <span className='text-[#f2b31b]'>Company</span> Overview
        </div>
        <div className='mx-auto max-w-3xl'>
            {data.map((value, index) => 
                <div key={index}>
                    <h1 className='text-[#f2b31b] font-bold text-4xl mb-5'>{value.heading}</h1>
                    {value.paragraphs.map((para, paraInd) => 
                        <div key={paraInd}>
                            <h1 className='text-[#133d59] font-bold text-2xl mb-5'>{para.subHeading}</h1>
                            <p style={{lineHeight:"25px"}} className='text-[#7e7e7e] text-[16px] font-[400] mb-5'>{para.text}</p>
                            {
                                value.heading===""?
                                // <p style={{lineHeight:"25px"}} className='text-[#7e7e7e] text-xs font-[400] mb-5'> One of his latest ventures is with the brand, Toppem Sports, a subsidiary of its' parent company, Toppem. Toppem Sports
                                // integrates the worlds of Fantasy Sports and blockchain technology via NFTS, tokenization, and gamification. Feel free to review
                                // the company.<br/> <br/> For more information about Tom, please review his Bio. </p>
                                <>
                                <div className="founder-heding pt-20 pb-20 text-center text-4xl font-bold">
                                <h1><span>CEO</span> &  <span> Founder</span> Bio </h1>
                            </div><Founder/></>:""
                            }
                        </div>
                    )}
                </div>
            )}
            <div className='flex flex-wrap items-center justify-around sm:text-left text-center gap-10 text-[#7e7e7e] text-xs font-[400]'>
                <p style={{lineHeight:"1.5"}}>Premiere professional team <br/> Vault - level digital asset security <br/> Superior customer service</p>
                <p style={{lineHeight:"1.5"}}>Potent API interface <br/>  Global consultant team of digital asset gurus <br/>  Premiere educational tools</p>

                <p style={{lineHeight:"1.5"}}>Blockchain digital assets</p>

            </div>
        </div>
    </div>
  )
}

export default Overview