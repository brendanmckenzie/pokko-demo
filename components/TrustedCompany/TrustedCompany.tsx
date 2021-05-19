import React from "react";

type TrustedCompanyItem = { imageUrl: string };
type TrustedCompanyProps = {
  bgColour?: string;
  title: string;
  description: string;
  items: TrustedCompanyItem[];
};

export const TrustedCompany: React.FC<TrustedCompanyProps> = ({
  bgColour,
  title,
  description,
  items,
}) => (
  <React.Fragment>
    <section
      className={
        "client-section ptb-100 " + (bgColour === "gray" ? "gray-light-bg" : "")
      }
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="section-heading text-center mb-5">
              <h2>{title}</h2>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="owl-carousel owl-theme clients-carousel dot-indicator">
              {items.map((item, idx) => (
                <div className="item single-client" key={idx}>
                  <img
                    src={item.imageUrl}
                    alt="client logo"
                    className="client-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
