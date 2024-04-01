import React from "react";

const PropertyAddress = ({ address }) => {
  const addresses = [
    {
      city: address?.city || "NA",
      state: address?.state || "NA",
      zipCode: address?.pincode || "NA",
      area: address?.locality || "NA",
    },
  ];

  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-4 ${index === 1 ? "offset-xl-2" : ""}`}
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              {address.city !== "NA" && (
                <p className="fw600 mb10 ff-heading dark-color">City</p>
              )}
              {address.area !== "NA" && (
                <p className="fw600 mb10 ff-heading dark-color">Area</p>
              )}
              {address.zipCode !== "NA" && (
                <p className="fw600 mb10 ff-heading dark-color">Pin Code</p>
              )}
              {address.state !== "NA" && (
                <p className="fw600 mb10 ff-heading dark-color">State</p>
              )}
            </div>
            <div className="pd-list">
              {address.city !== "NA" && (
                <p className="text mb10">{address.city}</p>
              )}
              {address.area !== "NA" && (
                <p className="text mb10">{address.area}</p>
              )}
              {address.zipCode !== "NA" && (
                <p className="text mb10">{address.zipCode}</p>
              )}
              {address.state !== "NA" && (
                <p className="text mb10">{address.state}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* End col */}

      <div className="col-md-12">
        <iframe
          className="position-relative bdrs12 mt30 h250"
          loading="lazy"
          src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
          title={addresses[0].address}
          aria-label={addresses[0].address}
        />
      </div>
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
