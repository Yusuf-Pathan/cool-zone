import { agentsInfo } from "@/data/agentsInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactWithAgent = () => {
  const { name, phones, whatsappLink } = agentsInfo[0];
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        {/* Agent profile removing */}
        {/* <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src="/images/team/agent-3.png"
            alt="avatar"
          />
        </div> */}
        <div className="single-contant ml0-xs">
          <h6 className="title mb-1">{name}</h6>
          <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-call pe-1" />
              {phones[0]}
            </a>
          </div>
          {/* <Link
            href="/agent-single/3"
            className="text-decoration-underline fw600"
          >
            View Listings
          </Link> */}
        </div>
      </div>
      {/* End agent-single */}

      <div className="d-grid">
        <Link href={`tel:${phones[0]}`} className="ud-btn btn-white2">
          Contact Agent
          <i className="fal fa-arrow-right-long" />
        </Link>
      </div>
    </>
  );
};

export default ContactWithAgent;
