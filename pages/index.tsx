import * as React from "react";
import { About } from "../components/AboutUs";
import { ContactSection } from "../components/Contact";
import { DownloadSection } from "../components/Download";
import { FeatureSection } from "../components/Features";
import { FooterSection } from "../components/Footer";
import { Header } from "../components/Header/header";
import { HeroSection } from "../components/HeroSection/HeroSection1";
import { PricingSection } from "../components/Pricing";
import { PromoSection } from "../components/PromoSection";
import { Screenshots } from "../components/Screenshots";
import { SubscribeSection } from "../components/Subscribe";
import { TeamMember } from "../components/TeamMember";
import { Testimonial } from "../components/Testimonial";
import { TrustedCompany } from "../components/TrustedCompany/TrustedCompany";

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <div className="main">
      <HeroSection
        backgroundImageUrl="https://pokko-demo.vercel.app/img/app-hero-bg.jpg"
        imageUrl="https://pokko-demo.vercel.app/img/app-product.png"
        subtitle="Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"
        title="Brainstorming for desired perfect Usability"
        videoUrl="https://www.youtube.com/watch?v=9No-FiEInLA"
      />
      <PromoSection
        title="Why small business owners love AppCo?"
        subtitle="Following reasons show advantages of adding AgencyCo to your lead pages, demos and checkouts"
        items={[
          {
            title: "Clean Design",
            description:
              "Increase sales by showing true dynamics of your website",
            icon: "vector",
          },
          {
            title: "Secure Data",
            description:
              "Build your online store’s trust using Social Proof & Urgency",
            icon: "lock",
          },
          {
            title: "Retina Ready",
            description:
              "Realize importance of social proof in customer’s purchase decision",
            icon: "eye",
          },
        ]}
      />
      <About />
      <FeatureSection />
      <DownloadSection />
      <PricingSection
        items={[
          {
            price: "$29",
            license: "Basic",
            isFeatured: false,
            features: [
              "Push Notifications",
              "Data Transfer",
              "SQL Database",
              "Search & SEO Analytics",
              "24/7 Phone Support",
              "2 months technical support",
              "2+ profitable keyword",
            ],
          },
          {
            price: "$50",
            license: "Popular",
            isFeatured: true,
            features: [
              "Push Notifications",
              "Data Transfer",
              "SQL Database",
              "Search & SEO Analytics",
              "24/7 Phone Support",
              "6 months technical support",
              "30+ profitable keyword",
            ],
          },
          {
            price: "$120",
            license: "Extended",
            isFeatured: false,
            features: [
              "Push Notifications",
              "Data Transfer",
              "SQL Database",
              "Search & SEO Analytics",
              "24/7 Phone Support",
              "1 year technical support",
              "70+ profitable keyword",
            ],
          },
        ]}
        hideFaq={false}
      />
      <Testimonial
        items={[
          {
            name: "Arabella Ora",
            company: "AgencyCo",
            imageUrl: "img/client-2.jpg",
            comment:
              "Completely build backend ROI whereas cross-media metrics. Collaboratively deploy customer directed web-readiness via global testing procedures. Appropriately reinvent distributed innovation without proactive catalysts for change. Distinctively.",
          },
          {
            name: "John Charles",
            company: "ThemeTags",
            imageUrl: "img/client-1.jpg",
            comment:
              "If you can design one thing you can design everything with Front. Just believe it. Collaboratively repurpose performance based e-commerce without cost. It's beautiful and the coding is done quickly and seamlessly.",
          },
          {
            name: "Jeremy Jere",
            company: "WorldCheck",
            imageUrl: "img/client-3.jpg",
            comment:
              "The template is really nice and offers quite a large set of options. It's beautiful and the coding is done. If you can design one thing you can design everything with Front. Just believe it.",
          },
          {
            name: "Ciaran Kierce",
            company: "AppCo",
            imageUrl: "img/client-4.jpg",
            comment:
              "I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you. It’s really great how easy your websites are to update and manage. I never have any problem at all.",
          },
        ]}
      />
      <Screenshots />
      <TeamMember
        items={[
          {
            name: "Edna Mason",
            designation: "Senior Designer",
            imageUrl: "img/team-4.jpg",
          },
          {
            name: "Arabella Ora",
            designation: "Senior Designer",
            imageUrl: "img/team-1.jpg",
          },
          {
            name: "John Charles",
            designation: "Senior Designer",
            imageUrl: "img/team-2.jpg",
          },
          {
            name: "Jeremy Jere",
            designation: "Senior Designer",
            imageUrl: "img/team-3.jpg",
          },
        ]}
      />
      <ContactSection
        title="Contact with us"
        description="It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office. Dynamically innovate competitive technology after an expanded array of leadership."
        office="Head Office"
        address="121 King St Melbourne VIC 3000 Australia"
        phone="+61 2 8376 6284"
        email="hello@yourdomain.com"
      />
      <TrustedCompany
        title="Trusted by companies"
        description='Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business. Conveniently innovate compelling internal.'
        items={[
          { imageUrl: "img/client-5-color.png" },
          { imageUrl: "img/client-1-color.png" },
          { imageUrl: "img/client-6-color.png" },
          { imageUrl: "img/client-3-color.png" },
          { imageUrl: "img/client-4-color.png" },
          { imageUrl: "img/client-5-color.png" },
          { imageUrl: "img/client-7-color.png" },
          { imageUrl: "img/client-2-color.png" },
          { imageUrl: "img/client-1-color.png" },
          { imageUrl: "img/client-3-color.png" },
        ]}
      />
    </div>
    <SubscribeSection />
    <FooterSection />
  </React.Fragment>
);

export default IndexPage;
