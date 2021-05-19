import React from "react";

type PrompItem = {
  title: string;
  icon: string;
  description: string;
};

type PromoSectionProps = {
  title: string;
  subtitle: string;
  items: PrompItem[];
};

export const PromoSection: React.FC<PromoSectionProps> = ({
  title,
  subtitle,
  items,
}) => (
  <section className="promo-section ptb-100">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-8">
          <div className="section-heading text-center mb-5">
            <h2>{title}</h2>
            <p className="lead">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="row equal">
        {items.map((item) => (
          <div className="col-md-4 col-lg-4" key={item.title}>
            <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
              <div className="circle-icon mb-5">
                <span className={`ti-${item.icon} text-white`}></span>
              </div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
