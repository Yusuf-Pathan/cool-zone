import listings from "@/data/listings";
import React from "react";

const OverView = ({ id, property }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: property?.noOfBedrooms || "NA",
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: property?.noOfBathrooms || "NA",
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: property?.yearBuilt || "NA",
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: property?.propertySize || "NA",
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: property?.propertyType || "NA",
    },
  ];

  return (
    <>
      {overviewData.map(
        (item, index) =>
          item.value !== "NA" && (
            <div
              key={index}
              className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
            >
              <div className="overview-element d-flex align-items-center">
                <span className={`icon ${item.icon}`} />
                <div className="ml15">
                  <h6 className="mb-0">{item.label}</h6>
                  <p className="text mb-0 fz15">{item.value}</p>
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};

export default OverView;
