"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  // console.log(data, '- data');
  return (
    <>
      {data.map(
        (listing) => (
          <div
            className={` ${colstyle ? "col-sm-12" : "col-sm-6 col-lg-6"}  `}
            key={listing._id}
          >
            <div
              className={
                colstyle
                  ? "listing-style1 listCustom listing-type"
                  : "listing-style1"
              }
            >
              <div className="list-thumb">
                {/* <Image
                  width={382}
                  height={248}
                  style={{ height: "472px" }}
                  className="w-100  cover"
                  src={listing.image}
                  alt="listings"
                /> */}
                {/* <Image
                width={382}
                height={248}
                style={{ height: "230px" }}
                className="w-100  cover"
                // src={listing?.images[0]}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhMy49o0xabhekK_F82R4jV_NGraUzOC7UHcJ0S-HLzB4CrtMWVJecimdqxSCs9wO6Q-E&usqp=CAU"
                }
                alt="listings"
              /> */}
                <img
                style={{ height: "230px" }}
                className="w-100  cover"
                src={listing?.coverImage}
                alt="listings"
              />

                {/* <div className="sale-sticker-wrap">
                  <div className="list-tag fz12">
                    <span className="flaticon-electricity me-2" />
                    FEATURED
                  </div>
              </div> */}

                <div className="list-price">
                  {listing.price} / <span>mo</span>
                </div>
              </div>
              <div className="list-content">
                <h6 className="list-title">
                  <Link href={`/single-v1/${listing._id}`}>
                    {listing.title}
                  </Link>
                </h6>
                <p className="list-text">
                  {listing.location?.socityName && listing.location?.socityName}
                </p>
                <div className="list-meta d-flex align-items-center">
                  <a href="#">
                    <span className="flaticon-bed" /> 2 bed
                  </a>
                  <a href="#">
                    <span className="flaticon-shower" />{" "}
                    {listing?.noOfBathrooms} bath
                  </a>
                  <a href="#">
                    <span className="flaticon-expand" /> 1000 sqft
                  </a>
                </div>
                <hr className="mt-2 mb-2" />
                <div className="list-meta2 d-flex justify-content-between align-items-center">
                  <span className="for-what">For Sale</span>
                  <div className="icons d-flex align-items-center">
                    <a href="#">
                      <span className="flaticon-fullscreen" />
                    </a>
                    <a href="#">
                      <span className="flaticon-new-tab" />
                    </a>
                    <a href="#">
                      <span className="flaticon-like" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default FeaturedListings;
