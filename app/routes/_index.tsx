import type { V2_MetaFunction } from "@remix-run/node";
import Nav from "../components/nav"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Will C. Johnson - Website Design and Development" },
    { name: "description", content: "Passionate Developers. Custom Designs. We offer modern, mobile-friendly, SEO optimized websites for your small business or organization. Whether you need an Shopify E-Commerce website or a simple static website, we can get it done. Get started today." },
    { name: "keywords", content: "front end developer, website development, backend developer, web design company, shopify developer, web design, web development, react developer, freelance developer" },
  ];
};

export default function Index() {
  return (
    <>
      <Nav />
    </>
  );
}
