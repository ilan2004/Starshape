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
      logoSrc: "/placeholder.svg?height=50&width=150",
      imageSrc: "/placeholder.svg?height=400&width=400",
      categories: ["AMAZON", "AUTOMATION", "SELLER", "SP-API"],
    },
    {
      id: "Wallpaperwale",
      title: "Wallpaperwale",
      description:
        "We created a multi-module SaaS that serves as a one-stop solution for wholesale businesses selling a variety of products on Amazon.",
      logoSrc: "/placeholder.svg?height=50&width=150",
      imageSrc: "/placeholder.svg?height=400&width=400",
      categories: ["INTEGRATION", "SELLER", "SP-API", "AMAZON", "AUTOMATION"],
    },
    {
      id: "Pulikkalfuels",
      title: "Pulikkalfuels",
      description: "Seamless integration solution connecting multiple marketplaces to centralized inventory management.",
      logoSrc: "/placeholder.svg?height=50&width=150",
      imageSrc: "/placeholder.svg?height=400&width=400",
      categories: ["INTEGRATION", "MARKETPLACE", "SAAS"],
    },
    {
      id: "RaphaelMedia",
      title: "RaphaelMedia",
      description:
        "Comprehensive migration tool helping sellers transition from legacy systems to modern eBay infrastructure.",
      logoSrc: "/placeholder.svg?height=50&width=150",
      imageSrc: "/placeholder.svg?height=400&width=400",
      categories: ["EBAY", "MIGRATION", "SELLER"],
    },
  ];
  
  /**
   * Get all unique categories from case studies
   * @returns {string[]} Sorted array of all unique categories
   */
  export const getAllCategories = () => {
    return Array.from(new Set(caseStudies.flatMap((study) => study.categories))).sort();
  };