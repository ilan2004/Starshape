import { Hover } from "../Hover/Page";

export function CardHover() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hover items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "WEB DEVELOPMENT",
    Icon: "/1.svg",
    description:
      "Transform your digital presence with tailored web solutions that marry cutting-edge technology with user-centric design.",
    link: "/Web",
    to: "see more",
  },
  {
    title: "E-Commerce Solutions",
    Icon: "/2.svg",
    description:
      "Launch and scale your online store effortlessly with Shopify and custom e-commerce solutions tailored to your business needs.",
    link: "/Ecommerce",
    to: "see more",
  },
  {
    title: "POS Solutions",
    Icon: "/3.svg",
    description:
      "Seamlessly manage sales, inventory, and billing with our POS solutions",
    link: "/Pos",
    to: "see more",
  },
  {
    title: "Data Analytics (Power BI)",
    Icon: "/4.svg",
    description:
      "Unlock actionable insights with advanced Power BI dashboards, real-time analytics, and custom business intelligence solutions.",
    link: "/Data",
    to: "see more",
  },
  {
    title: "AI Animated Ads",
    Icon: "/1.svg",
    description:
      "Unlock actionable insights with advanced Power BI dashboards, real-time analytics, and custom business intelligence solutions.",
    link: "/Aiads",
    to: "see more",
  },
];
