import React from "react";

const PropertyDetails = ({ property }) => {
  const propSize = property?.price / property?.pricePerSqFt;
  const columns = [
    [
      {
        label: "Property ID",
        value: property?._id,
      },
      {
        label: "Price",
        value: property?.price || "NA",
      },
      {
        label: "Property Size",
        value: `${property?.pricePerSqFt} Sq Ft`,
      },
      {
        label: "Bathrooms",
        value: property?.noOfBathrooms || "NA",
      },
      {
        label: "Bedrooms",
        value: property?.noOfBedrooms || "NA",
      },
    ],
    [
      {
        label: "Year Built",
        value: property?.yearBuilt || "NA",
      },
      {
        label: "Property Type",
        value: property?.propertyType || "NA",
      },
    ],
  ];
  console.log(property, '- prop in det')
  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-5${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map(
            (detail, index) =>
              detail.value !== "NA" && (
                <div key={index} className="d-flex justify-content-between">
                  <div className="pd-list">
                    <p className="fw600 mb10 ff-heading dark-color">
                      {detail.label}
                    </p>
                  </div>
                  <div className="pd-list">
                    <p
                      className={`text mb10 ${
                        detail.label === "Property Type" && "text-capitalize"
                      }`}
                    >
                      {detail.value}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
