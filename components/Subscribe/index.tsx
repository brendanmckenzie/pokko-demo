import React from "react";

export const SubscribeSection: React.FC = () => (
  <React.Fragment>
    <div className="shape-img subscribe-wrap">
      <img
        src="img/footer-top-shape.png"
        alt="footer shape"
        className="img-fluid"
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              method="post"
              className="subscribe-form subscribe-form-footer d-none d-md-block d-lg-block"
              onSubmit={(ev) => ev.preventDefault()}
            >
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control input"
                  id="email-footer"
                  name="email"
                  placeholder="info@yourdomain.com"
                />
                <input
                  type="submit"
                  className="button btn solid-btn"
                  id="submit-footer"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);
