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
    to: 'see more'
  },
  {
    title: "E-Commerce",
    Icon: "/4.svg",
    description:
      "Unlock actionable insights and drive informed decisions with our advanced data analytics solutions, tailored to extract value from your data.",
    link: "/Ecommerce",
    to: 'see more'
  },
  {
    "title": "SEO",
    "Icon": "/2.svg",
    "description":
      "Elevate your business with custom mobile applications that offer seamless user experiences and robust functionality across all devices.",
    "link": "/Mobile",
    to: 'see more'
  },
  {
    title: "PERFORMANCE MARKETING",
    Icon: "/3.svg",
    description:
      "Empower your business with scalable cloud solutions tailored to streamline operations and enhance flexibility.",
    link: "/Cloud",
    to: 'see more'
  },

];

