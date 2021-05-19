import React from "react";

type TeamMemberItem = {
  name: string;
  designation: string;
  imageUrl: string;
};

type TeamMemberProps = { items: TeamMemberItem[] };

export const TeamMember: React.FC<TeamMemberProps> = ({ items }) => (
  <React.Fragment>
    <section id="team" className="team-member-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-8">
            <div className="section-heading text-center mb-5">
              <h2>Our team members</h2>
              <p className="lead">
                Following reasons show advantages of adding AppCo to your lead
                pages, demos and checkouts
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {items.map((item, idx) => (
            <div className="col-lg-3 col-sm-6" key={idx}>
              <div className="single-team-member position-relative">
                <div className="team-image">
                  <img
                    src={item.imageUrl}
                    alt="Team Members"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="team-info text-white rounded-circle d-flex flex-column align-items-center justify-content-center">
                  <h5 className="mb-0">{item.name}</h5>
                  <h6>{item.designation}</h6>
                  <ul className="list-inline team-social social-icon mt-4 text-white">
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-facebook"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-twitter"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-github"></span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="/#">
                        <span className="ti-dribbble"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </React.Fragment>
);
