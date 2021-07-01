import React from "react";

export type DownloadSectionProps = {
  title: string;
  summary: string;
  apple: string;
  android: string;
  imageUrl?: string;
};

export const DownloadSection: React.FC<DownloadSectionProps> = ({
  title,
  summary,
  apple,
  android,
  imageUrl,
}) => (
  <React.Fragment>
    <section
      className="download-section pt-100 background-img"
      style={{
        backgroundImage: "url('img/app-hero-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-7">
            <div className="download-content text-white pb-100">
              <h2 className="text-white">{title}</h2>
              <p className="lead">{summary}</p>

              <div className="download-btn">
                <a href={android} className="btn google-play-btn mr-3">
                  <span className="ti-android"></span> Google Play
                </a>
                <a href={apple} className="btn app-store-btn">
                  <span className="ti-apple"></span> App Store
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="download-img d-flex align-bottom">
              {imageUrl ? (
                <img src={imageUrl} alt="download" className="img-fluid" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);
