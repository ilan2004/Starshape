import React from 'react'
import styles from './page.module.css';
export const Details = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.data}>
        <h1 className={styles.heading}>
          We'll help you build custom Web solutions from scratch
        </h1>
        <p className={styles.para}>
        Are you in need of a great online presence? It's time to upgrade to a custom website that's tailored to your specific needs and processes, perfect for any business.
        </p>
        <p className={styles.para}>
        Our team of expert developers specializes in creating custom websites, including Webflow sites, to streamline and optimize your online presence. Whether you need a big platform built from the ground up or intricate integrations, we have the skills and experience to bring your vision to life.
        </p>
        <img className={styles.image} src='/img3.webp'>
        </img>
        <h1 className={styles.heading2}>
        Devloping All kinds of websites
        </h1>
        <p className={styles.para}>
        <strong>Developing Websites with Webflow:</strong>
        We specialize in creating visually appealing and highly functional websites using Webflow. This platform allows for rapid development and easy customization, making it ideal for businesses that need a strong online presence. Webflow’s powerful design tools enable the creation of responsive and interactive websites that are easy to manage and update. Whether you need a simple landing page or a complex, multi-page site, our expertise with Webflow ensures a polished and professional result.
        </p>
        <p className={styles.para}>
        <strong>E-commerce Solutions:</strong>
        Our e-commerce solutions are tailored to meet the specific needs of online retailers. We develop robust, scalable, and secure e-commerce platforms using leading technologies such as Shopify, WooCommerce, and Magento. These platforms offer seamless integration with payment gateways, inventory management systems, and third-party applications, providing a comprehensive solution for online selling. Our focus is on creating user-friendly interfaces that enhance the shopping experience and drive sales.
        </p>
        <p className={styles.para}>
        <strong>3D Website Development:</strong>
        We bring the latest in 3D technology to your website, creating immersive and interactive experiences that engage users and differentiate your brand. Using tools like Three.js and WebGL, we develop 3D models and environments that can be explored directly within the browser. This is ideal for industries such as real estate, product design, and entertainment, where visual detail and user interaction are key.
        </p>
        <p className={styles.para}>
        <strong>Next.js Development:</strong>
        Our expertise in Next.js allows us to create high-performance, server-side rendered applications that deliver exceptional user experiences. Next.js is a powerful framework for building fast, scalable web applications with React. It offers features like static site generation, API routes, and automatic code splitting, making it a great choice for complex and high-traffic websites. Whether you need a single-page application or a large-scale web platform, our Next.js development services ensure a robust and efficient solution.
        </p>
        </div>
    </div>
  )
}