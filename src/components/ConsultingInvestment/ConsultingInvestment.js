import React from "react";
import Dog from "../../assets/dog2.png";
import OfficeImg from '../../assets/office.png'

function ConsultingInvestment() {
  return (
    <div>
      <div className="pt-16 pb-16 mb-8 bg-red- text-center text-[#143d59] bg-red-100 text-6xl font-bold">
        Consulting <span className="text-[#efb21a]">And </span> Investment
      </div>
      <div>
        <InvestmentDetails />
      </div>
      <div>
        <ProManagement />
      </div>
      <div>
        <StrategySection/>
      </div>
    </div>
  );
}

const cardData = [
  [
    "Services",
    "bg-[#efb21c]",
    "text-[#0d283b]",
    "bg-[#0d283b]",
    [
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
    ],
  ],
  [
    "Terms",
    "bg-[#0d283b]",
    "text-[#efb21c]",
    "bg-[#efb21c]",
    [
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
    ],
  ],
  [
    "Price",
    "bg-[#efb21c]",
    "text-[#0d283b]",
    "bg-[#0d283b]",
    [
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
    ],
  ],
  [
    "Communication Method",
    "bg-[#0d283b]",
    "text-[#efb21c]",
    "bg-[#efb21c]",
    [
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
      "lorem ipsum dummy text",
    ],
  ],
];
const heights = ["h-20", "h-28", "h-48", "h-20", "h-56"];
function InvestmentDetails() {
  return (
    <div className="container mx-auto flex flex-wrap justify-evenly gap-3 p-4 mt-2 mb-2">
      {cardData.map((value, index) => (
        <div key={index} className=" w-60 rounded-2xl overflow-hidden">
          <div
            className={`text-center p-2 font-semibold text-base ${value[2]} ${value[1]}`}
          >
            {value[0]}
          </div>
          <div className={`${value[3]}`}>
            {value[4].map((value, index) => (
              <div
                className={`p-3 ${heights[index]}`} style={{borderBottom:"10px !important",borderBottomColor:"white" }}
              >
                {value}{" "}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function ProManagement() {
  return (
    <div className="container  mx-auto grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-3 p-4 mt-2 mb-2">
      <div>
        <h1 className="text-2xl text-bold">
          Professional Management Consulting In Digital Assets
        </h1>
        <p className="text-xs">
          Lorem ipsum is the dummy text Lorem ipsum is the dummy text Lorem
          ipsum is the dummy text Lorem ipsum is the dummy text
          <br />
          <br />
          lorem ipsum is my dummy text lorem ipsum is my dummy text lorem ipsum
          is my dummy text lorem ipsum is my dummy text lorem ipsum is my dummy
          text lorem ipsum is my dummy text lorem ipsum is my dummy text lorem
          ipsum is my dummy text lorem ipsum is my dummy text lorem ipsum is my
          dummy text lorem ipsum is my dummy text lorem ipsum is my dummy text
          lorem ipsum is my dummy text lorem ipsum is my dummy text lorem ipsum
          is my dummy text lorem ipsum is my dummy text lorem ipsum is my dummy
          text lorem ipsum is my dummy text lorem ipsum is my dummy text lorem
          ipsum is my dummy text lorem ipsum is my dummy text lorem ipsum is my
          dummy text lorem ipsum is my dummy text lorem ipsum is my dummy text
          lorem ipsum is my dummy text lorem ipsum is my dummy text lorem ipsum
          is my dummy text lorem ipsum is my dummy text lorem ipsum is my dummy
          text lorem ipsum is my dummy text lorem ipsum is my dummy text lorem
          ipsum is my dummy text
        </p>
      </div>

      <div>
        <img className="rounded-3xl" src={Dog} />
      </div>
    </div>
  );
}
function StrategySection(){
  return(
    <div  className="flex justify-end p-[5%]" style={{backgroundImage:`url(${OfficeImg})`}}>
      <div className="lg:w-[50%] bg-white p-[5%]"> 
        <h1>Our Strategy</h1>
        <h3>
        If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated
        </h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>
  )
}
export default ConsultingInvestment;
