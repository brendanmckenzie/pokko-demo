import React from "react";

type TestimonialItem = {
  name: string;
  imageUrl: string;
  company: string;
  comment: string;
};

type TestimonialProps = {
  bgColour?: string;
  items: TestimonialItem[];
};

export const Testimonial: React.FC<TestimonialProps> = ({
  bgColour,
  items,
}) => (
  <React.Fragment>
    <section
      className={
        "testimonial-section ptb-100 " +
        (bgColour === "gray" ? "gray-light-bg" : "")
      }
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="section-heading mb-5">
              <h2>
                Testimonials <br />
                <span>what clients say</span>
              </h2>
              <p className="lead">
                Rapidiously morph transparent internal or "organic" sources
                whereas resource sucking e-business. Conveniently innovate
                compelling internal.
              </p>

              <div className="client-section-wrap d-flex flex-row align-items-center">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <img
                      src="img/client-1-color.png"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/client-6-color.png"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                  <li className="list-inline-item">
                    <img
                      src="img/client-3-color.png"
                      width="85"
                      alt="client"
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="owl-carousel owl-theme client-testimonial arrow-indicator">
              {items.map((item, idx) => (
                <div className="item" key={idx}>
                  <div className="testimonial-quote-wrap">
                    <div className="media author-info mb-3">
                      <div className="author-img mr-3">
                        <img
                          src={item.imageUrl}
                          alt="client"
                          className="img-fluid rounded-circle"
                        />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">{item.name}</h5>
                        <span>{item.company}</span>
                      </div>
                    </div>
                    <div className="client-say">
                      <p>
                        {" "}
                        <img
                          src="img/quote.png"
                          alt="quote"
                          className="img-fluid"
                        />{" "}
                        {item.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
