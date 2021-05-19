import React from "react";

type FeatureSectionItem = { imageUrl: string };

type FeatureSectionProps = {
  title: string;
  summary: string;
  imageUrl: string;
  items: FeatureSectionItem[];
};

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  summary,
  imageUrl,
  items,
}) => (
  <React.Fragment>
    <section id="features" className="feature-section ptb-100">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-4">
            <div className="download-img d-flex align-bottom">
              <img src={imageUrl} alt="download" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="feature-contents section-heading">
              <h2>{title}</h2>
              {summary}

              <ul className="list-inline mt-5">
                {items.map((item, idx) => (
                  <li key={idx} className="list-inline-item">
                    <div className="mr-3 icon-box border">
                      <img
                        src={item.imageUrl}
                        alt="icon"
                        className="img-fluid"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
