import * as React from "react";
import {
  ModularPage as ModularPageModel,
  ModularPage_Components,
} from "../../pokko/queries";

import { About } from "../AboutUs";
import { ContactSection } from "../Contact";
import { DownloadSection } from "../Download";
import { FeatureSection } from "../Features";
import { FooterSection } from "../Footer";
import { Header } from "../Header/header";
import { HeroSection } from "../HeroSection/HeroSection1";
import { PricingSection } from "../Pricing";
import { PromoSection } from "../PromoSection";
import { Screenshots } from "../Screenshots";
import { SubscribeSection } from "../Subscribe";
import { TeamMember } from "../TeamMember";
import { Testimonial } from "../Testimonial";
import { TrustedCompany } from "../TrustedCompany/TrustedCompany";

export type ModularPageProps = {
  entry: ModularPageModel;
};

const Module: React.FC<{ module: ModularPage_Components }> = ({ module }) => {
  switch (module.__typename) {
    case "HomeHero":
      return (
        <HeroSection
          backgroundImageUrl={module.backgroundImage?.url!}
          imageUrl={module.image?.url!}
          subtitle={module.subtitle!}
          title={module.title!}
          videoUrl={module.videoUrl!}
        />
      );
    case "HomePromo":
      return (
        <PromoSection
          title={module.title!}
          subtitle={module.subtitle!}
          items={module.items!.map((ent) => ({
            title: ent!.title!,
            description: ent!.description!,
            icon: ent!.icon!,
          }))}
        />
      );
    case "HomeAbout":
      return (
        <About
          title={module.title!}
          subtitle={module.subtitle!}
          imageUrl={module.image?.url!}
          items={module.items!.map((ent) => ({
            description: ent!.description!,
            imageUrl: ent!.image!.url!,
          }))}
        />
      );
    case "HomeFeature":
      return (
        <FeatureSection
          imageUrl={module.image!.url}
          title={module.title!}
          summary={module.summary!}
          items={module.items!.map((ent) => ({ imageUrl: ent!.image!.url }))}
        />
      );
    case "HomeDownloads":
      return (
        <DownloadSection
          title={module.title!}
          summary={module.summary!}
          apple={module.apple!.url!}
          android={module.android!.url!}
          imageUrl={module.image?.url}
        />
      );
    case "HomePricing":
      console.log(module)
      return (
        <PricingSection
          hideFaq={false}
          items={
            module.items?.map((ent) => ({
              price: ent!.price!,
              license: ent!.license!,
              isFeatured: Boolean(ent!.featured!),
              features: ent!.features!.map((str) => str!)!,
            })) ?? []
          }
        />
      );
    default:
      return <pre>Unknown module: {module.__typename}</pre>;
  }
};

export const ModularPage: React.FC<ModularPageProps> = ({ entry }) => (
  <React.Fragment>
    <Header />
    <div className="main">
      {entry.components?.map((ent, idx) => (
        <Module key={idx} module={ent as ModularPage_Components} />
      ))}
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
