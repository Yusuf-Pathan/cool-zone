"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";
import { useEffect, useState } from "react";

// const images = [
//   {
//     src: "/images/listings/listing-single-2.jpg",
//     alt: "2.jpg",
//   },
//   {
//     src: "/images/listings/listing-single-3.jpg",
//     alt: "3.jpg",
//   },
//   {
//     src: "/images/listings/listing-single-4.jpg",
//     alt: "4.jpg",
//   },
//   {
//     src: "/images/listings/listing-single-5.jpg",
//     alt: "5.jpg",
//   },
// ];

const PropertyGallery = ({ id, property }) => {
  // const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  // console.log(property.coverImage, "- cover image");
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={property?.coverImage}
                thumbnail={property?.coverImage}
                width={610}
                height={510}
              >
                {({ ref, open }) => (
                  <img
                    src={
                      property?.coverImage ||
                      "/images/listings/listing-single-1.jpg"
                    }
                    width={591}
                    height={558}
                    ref={ref}
                    onClick={open}
                    alt="image"
                    role="button"
                    className="w-100 h-100 cover"
                  />
                )}
              </Item>
            </div>
          </div>
        </div>

        {/* End .col-6 */}

        <div className="col-sm-6">
          <div className="row">
            {property?.images?.length > 0 &&
              property?.images.map((image, index) => (
                <div className="col-6 ps-sm-0" key={index}>
                  <div className="sp-img-content">
                    <div
                      className={`popup-img preview-img-${
                        index + 2
                      } sp-img mb10`}
                    >
                      <Item
                        original={image}
                        thumbnail={image}
                        width={270}
                        height={250}
                      >
                        {({ ref, open }) => (
                          <img
                            width={270}
                            height={250}
                            className="w-100 h-100 cover"
                            ref={ref}
                            onClick={open}
                            role="button"
                            src={image}
                            alt={`prop view ${index + 1}`}
                          />
                        )}
                      </Item>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
