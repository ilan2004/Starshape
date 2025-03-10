/**
 * @typedef {Object} CaseStudy
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} logoSrc
 * @property {string} imageSrc
 * @property {string[]} categories
 */

/**
 * Sample case study data
 * @type {CaseStudy[]}
 */
export const caseStudies = [
    {
      id: "Dionpower",
      title: "Dionpower ",
      description: "We built custom integration to company ERP system and automated Amazon FBM & FBM orders.",
      logoSrc: "/projects/Dion/logo.webp",
      imageSrc: "/projects/Dion/mockd.webp",
      categories: ["WEBSITE", "CUSTOM DASHBOARD", "ORDER MANGEMENT"],
      link: "/Works/Dion"
    },
    {
      id: "Wallpaperwale",
      title: "Wallpaperwale",
      description:
        "We created a multi-module SaaS that serves as a one-stop solution for wholesale businesses selling a variety of products on Amazon.",
      logoSrc: "/projects/Wallpaperwale/logo.webp",
      imageSrc: "/projects/Wallpaperwale/web.webp",
      categories: ["WEBSITE", "PRODUCT PHOTOGRAPHY", "SOCIAL MEDIA MARKETING"],
    },
    {
      id: "Pulikkalfuels",
      title: "Pulikkalfuels",
      description: "Seamless integration solution connecting multiple marketplaces to centralized inventory management.",
      logoSrc: "/projects/pulikkal/logo.webp",
      imageSrc: "/projects/pulikkal/web.webp",
      categories: ["WEBSITE"],
    },
    {
      id: "RaphaelMedia",
      title: "RaphaelMedia",
      description:
        "Comprehensive migration tool helping sellers transition from legacy systems to modern eBay infrastructure.",
      logoSrc: "/projects/Raf/logo.webp",
      imageSrc: "/projects/Raf/web.webp",
      categories: ["WEBSITE" ],
    },
  ];
  
  /**
   * Get all unique categories from case studies
   * @returns {string[]} Sorted array of all unique categories
   */
  export const getAllCategories = () => {
    return Array.from(new Set(caseStudies.flatMap((study) => study.categories))).sort();
  };