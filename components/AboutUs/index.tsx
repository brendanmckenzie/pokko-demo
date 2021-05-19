import * as React from "react";

type AboutItem = {
  imageUrl: string;
  description: string;
};

type AboutProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  items: AboutItem[];
};

export const About: React.FC<AboutProps> = ({
  title,
  subtitle,
  imageUrl,
  items,
}) => (
  <React.Fragment>
    <div className="overflow-hidden">
      <section id="about" className="about-us ptb-100 background-shape-img">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7">
              <div className="about-content-left section-heading">
                <h2>{title}</h2>

                <div className="single-feature mb-4 mt-5">
                  <div className="icon-box-wrap d-flex align-items-center mb-2">
                    <div className="mr-3 icon-box">
                      <img src={imageUrl} alt="icon" className="img-fluid" />
                    </div>
                    <p className="mb-0">{subtitle}</p>
                  </div>
                </div>
                {items.map((item, idx) => (
                  <div key={idx} className="single-feature mb-4">
                    <div className="icon-box-wrap mb-2">
                      <div className="mr-3 icon-box">
                        <img
                          src={item.imageUrl}
                          alt="icon"
                          className="img-fluid"
                        />
                      </div>
                      <p className="mb-0">{item.description}</p>
                    </div>
                    <p></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-content-right d-flex justify-content-center justify-content-lg-end justify-content-md-end">
                <img
                  src="img/image-11.png"
                  alt="about us"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </React.Fragment>
);
