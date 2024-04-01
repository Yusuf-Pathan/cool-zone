import React from "react";
import Image from "next/image";
import { agentsInfo } from "@/data/agentsInfo";

const SingleAgentInfo = () => {
  const { whatsappLink, name } = agentsInfo[0];
  return (
    <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
      {/* Commenting because No need  */}
      {/* <div className="single-img mb30-sm">
        <Image
          width={90}
          height={90}
          className="w90"
          src="/images/team/agent-3.png"
          alt="agent"
        />
      </div> */}
      <div className="single-contant">
        <h6 className="title mb-1">{name}</h6>
        <div className="agent-meta d-md-flex align-items-center">
          {/* {agentData.phoneNumbers.map((phoneNumber, index) => (
            <a key={index} className="text fz15 pe-2 bdrr1" href="#">
              <i className="flaticon-call pe-1 ps-1" />
              {phoneNumber}
            </a>
          ))} */}
          {agentsInfo[0].phones.map((phoneNumber, index) => (
            <a
              key={index}
              className="text fz15 pe-2 bdrr1"
              href={`tel:${phoneNumber}`}
            >
              <i className="flaticon-call pe-1 ps-1" />
              {phoneNumber}
            </a>
          ))}
          <a className="text fz15 ps-2" href={whatsappLink} target="_blank">
            <i className="flaticon-whatsapp pe-1" />
            WhatsApp
          </a>
        </div>
        {/* Hiding social media */}
        {/* <div className="agent-social">
          {agentData.socialMedia.map((social, index) => (
            <a key={index} className="mr20" href="#">
              <i className={`fab fa-${social}`} />
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default SingleAgentInfo;
