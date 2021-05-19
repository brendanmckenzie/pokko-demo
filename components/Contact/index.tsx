import * as React from "react";

type ContactSectionProps = {
  bgColour?: string;
  title: string;
  description: string;
  office: string;
  address: string;
  phone: string;
  email: string;
};

export const ContactSection: React.FC<ContactSectionProps> = ({
  bgColour,
  title,
  description,
  office,
  address,
  phone,
  email,
}) => (
  <React.Fragment>
    <section
      id="contact"
      className={
        "contact-us ptb-100 " + (bgColour === "white" ? "" : "gray-light-bg")
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="section-heading">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <div className="footer-address">
              <h6>
                <strong>{office}</strong>
              </h6>
              <p>{address}</p>
              <ul>
                <li>
                  <span>Phone: {phone}</span>
                </li>
                <li>
                  <span>
                    Email : <a href={`mailto:${email}`}>{email}</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-7">
            <form
              method="POST"
              id="contactForm1"
              className="contact-us-form"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <h5>Reach us quickly</h5>
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter name"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      size={40}
                      className="form-control"
                      id="company"
                      placeholder="Your Company"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows={7}
                      cols={25}
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 mt-3">
                  <button
                    type="submit"
                    className="btn solid-btn"
                    id="btnContactUs"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
