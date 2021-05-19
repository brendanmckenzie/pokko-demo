import React from "react";

type HeroSectionProps = {
  backgroundImageUrl: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  videoUrl: string;
};

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImageUrl,
  title,
  subtitle,
  videoUrl,
  imageUrl,
}) => {
  return (
    <React.Fragment>
      <section
        className="hero-section pt-100 background-img"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between py-5">
            <div className="col-md-7 col-lg-6">
              <div className="hero-content-left text-white">
                <h1 className="text-white">{title}</h1>
                <p className="lead">{subtitle}</p>

                <form
                  method="post"
                  className="subscribe-form"
                  onSubmit={(ev) => ev.preventDefault()}
                >
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      className="form-control input"
                      id="email"
                      name="email"
                      placeholder="info@yourdomain.com"
                    />
                    <input
                      type="submit"
                      className="button btn solid-btn"
                      id="submit"
                      value="Submit"
                    />
                  </div>
                </form>

                {videoUrl ? (
                  <div className="video-promo-content py-4 d-flex align-items-center">
                    <a
                      href={videoUrl}
                      className="popup-youtube video-play-icon-without-bip video-play-icon mr-3"
                    >
                      <span className="ti-control-play"></span>
                    </a>{" "}
                    Watch Video Overview
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-5 col-lg-5">
              <div className="hero-animation-img">
                <img src={imageUrl} alt="app" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-img-absolute">
          <img
            src="img/hero-bg-shape-1.svg"
            alt="wave shape"
            className="img-fluid"
          />
        </div>
      </section>
    </React.Fragment>
  );
};
