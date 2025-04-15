import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DOMPurify from "isomorphic-dompurify";

const Header = dynamic(() => import("../../components/header/Header"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const LetsKick = dynamic(() => import("../../components/common/LetsKick"));
const Footer = dynamic(() => import("../../components/common/Footer"));
const Loader = dynamic(() => import("../../components/common/loader"));
const KeepInTouch = dynamic(() =>
  import("../../components/common/keepInTouch")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire"));
const Customer = dynamic(() => import("../../components/common/customer"));
const Advantage = dynamic(() =>
  import("../../components/Web-Development/Advantage.jsx")
);
const HireMarquee = dynamic(() =>
  import("../../components/common/HireMarquee")
);
const Experienced = dynamic(() =>
  import("../../components/Web-Development/Experienced")
);
const Hire = dynamic(() => import("../../components/common/Hire.jsx"));
import SectionOne from "../../components/common/HireBanner";
import Link from "next/link.js";
const Hello = dynamic(() => import("../../components/common/FindUs"));
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/CommonChooseBraininventory.jsx")
);

function LaravelDevelopment(props) {
  const content = (
    <>
      Efficient development of a high-quality and secure application is what we
      do best. Our experts are highly trained and experienced in the{" "}
      <Link href="/" className="text-[#2186ff]">
        custom software development
      </Link>{" "}
      industry. As a top TypeScript{" "}
      <Link href="javascript:void(0)" className="text-[#2186ff]">
        app development company
      </Link>
      , we prioritize customer needs.
    </>
  );
  const subhead1 =
    "A Laravel Development Services can be indispensable for various reasons. Firstly, Laravel is a robust and widely used PHP framework known for its elegance and simplicity, making it an excellent choice for developing web applications and websites. Its extensive ecosystem of pre-built components and libraries accelerates development, reducing time-to-market for your project.";
  const subhead2 =
    "Security is paramount in today's digital landscape, and Laravel excels in this regard. The framework includes built-in security features like protection against SQL injection, cross-site scripting, and cross-site request forgery, helping safeguard your application and data from potential threats.";
  const subhead3 =
    "Scalability is another key consideration. As your business grows, your application must scale to accommodate increased traffic and user demand. Laravel's scalability features, coupled with its efficient and modular codebase, make it easier to expand and enhance your application as needed. Moreover, a Laravel Development Services offers robust support for tasks such as authentication, authorization, and data migration.";

  const hireCards = [
    {
      head: "Experienced Developers",
      content: `Our Laravel developers are the backbone of our business. Having spent time in the industry, they have used their experience to architect custom web development using Laravel and related frameworks. We craft custom web development that give you the functionality you need with ease of use and security.`,
    },
    {
      head: "Trusted Delivery Methods",
      content:
        "We are a development team of seasoned Laravel web app builders working across time zones. This unique time zone coverage allows us to supply round-the-clock technical assistance. For most projects, we utilize the Agile development framework. This means we can build premium solutions that align with your budget and schedule.",
    },
    {
      head: "Affordable Pricing",
      content:
        "Our team of highly skilled Laravel developers ensures top-notch website design, development, and maintenance services at affordable prices. With years of experience they design, develop, and maintain creative websites using innovative technology. Our talented Laravel developers are trusted by leading organizations in diverse industries such as the financial sector, the healthcare industry, and education.",
    },
    {
      head: "Transparent Work Approach",
      content:
        "We are committed to utilizing a productive development process that promotes openness and foreseeability in managing the investment for your project. After thoroughly understanding your needs, we work together with you to define clear goals and boundaries for the project, providing an accurate evaluation of the time and budget required to complete the development.",
    },
  ];
  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Why should I choose laravel for my project",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can choose laravel because of its robust and highly popular PHP framework. It also has a rich set of inbuilt features to help developers build and scale applications effectively."
      }
    },{
      "@type": "Question",
      "name": "What services does your Laravel Development team offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our company offers a comprehensive range of Laravel development services to support your business needs. Some of which include custom Laravel development, Laravel API development, Laravel e-commerce solutions, Enterprise-level app development, and more."
      }
    },{
      "@type": "Question",
      "name": "Does the Laravel framework secure your web app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Laravel provides a strong set of features, using which you can secure your web application from potential threats and data breaches."
      }
    },{
      "@type": "Question",
      "name": "Can you help me complete my incomplete web/app development project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, definitely. Our Laravel development company has a team of experts that can help you in building a project from scratch and completing your existing project as well."
      }
    },{
      "@type": "Question",
      "name": "What are the advantages of laravel development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Advantages of Laravel development include: 
  Rapid development
  Efficient routing 
  Enhanced security features
  Easy syntax 
  Community support
  Scalability
  Easy maintenance 
  
  Contact our Laravel web development company for assistance in your future projects.`
      }
    }]
  }
  
  const faqdetails = [
    {
      id: "1",
      title: "Why should I choose laravel for my project",
      description:
        <>
        You can choose laravel because of its robust and highly popular <Link className="text-blue-600" href={"https://braininventory.in/web-development/php-development-service-company"}>PHP framework</Link>. It also has a rich set of inbuilt features to help developers build and scale applications effectively.
        </>
    },
    {
      id: "2",
      title: "What services does your Laravel Development team offer?",
      description:
      <>
      Our company offers a comprehensive range of Laravel development services to support your business needs. Some of which include custom Laravel development, Laravel <Link href={"https://braininventory.in/mobile-development/mobile-api-integration-services"} className="text-blue-600">API development</Link>, Laravel <Link href={"https://braininventory.in/industry/ecommerce"} className="text-blue-600">e-commerce</Link> solutions, Enterprise-level app development, and more. 
      </>
    },
    {
      id: "3",
      title: "Does the Laravel framework secure your web app?",
      description:
        "Yes, Laravel provides a strong set of features, using which you can secure your web application from potential threats and data breaches. ",
    },
    {
      id: "4",
      title: "Can you help me complete my incomplete web/app development project?",
      description:
        "Yes, definitely. Our Laravel development company has a team of experts that can help you in building a project from scratch and completing your existing project as well. ",
    },
    {
      id: "5",
      title: "What are the advantages of laravel development? ",
      description:
       <>
       <p>Advantages of Laravel development include: </p>
       <ul className="list-disc ml-6">
        <li>Rapid development</li>
        <li>Efficient routing </li>
        <li>Enhanced security features</li>
        <li>Easy syntax </li>
        <li>Community support</li>
        <li>Scalability</li>
        <li>Easy maintenance </li>
       </ul>
       </>
    },
  ];

  const advantages = [
    "The Laravel framework is renowned for its graceful and articulate code syntax. This allows programmers to compose tidy and comprehensible code with ease. This streamlines the development workflow and lessens the probability of mistakes.",
    "Laravel takes security seriously and provides built-in features to protect against common web vulnerabilities like SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). It also includes tools for user authentication and authorization.",
    "Laravel encourages and facilitates unit testing and integration testing. It provides PHPUnit support out of the box and offers helpful testing tools to ensure the reliability of your applications.",
    "The Laravel framework provides comprehensive documentation, educational materials, and other learning assets, facilitating usage for programmers of varying abilities. This supports a gentle learning progression and cultivates a dynamic community of Laravel users.",
  ];

  const chooseBI = [
    <>
      Brain Inventory is a leading Laravel Development Services, based in India
      and working with clients worldwide to fulfill their requirements. We offer
      top-notch{" "}
      <Link
        href="/web-development/custom-web-development"
        className="text-[#2186ff]"
      >
        Custom Web Development Services
      </Link>
      , which include{" "}
      <Link href="javascript:void(0)" className="text-[#2186ff]">
        custom web design
      </Link>{" "}
      , website development, and{" "}
      <Link href="/" className="text-[#2186ff]">
        Custom Mobile App Development
      </Link>{" "}
      along with offshore outsourcing & customized custom software development
      services at competitive rates. We are driven by the innovative thinking of
      our developers who have outclass skills and strong technical backgrounds.
    </>,
    <>
      While you have the opportunity to rest assured that we will handle even
      the most complicated design or programming requirements, we know that
      every project is different and unique, so we always listen closely to your
      needs and requirements.{" "}
      <Link href="/hire-laravel-developers" className="text-[#2186ff]">
        Our team of Laravel developers
      </Link>{" "}
      here at Brain Inventory is eager to help you work towards solving your
      technological problems.
    </>,
    "Our developers have an extensive understanding of the framework and this allows us to take advantage of unique features that a standard PHP developer may not know about. Therefore, we can help your business build sophisticated software solutions that leverage what the framework has to offer.",
  ];
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>
          Laravel Web Development Service Company USA | Brain Inventory
        </title>
        <meta
          name="description"
          content="Are you looking for a laravel development company? Look no further! Brain Inventory provides the best laravel development services for you. Contact us today!"
        />
        <meta
          property="og:description"
          content="Are you looking for a laravel development company? Look no further! Brain Inventory provides the best laravel development services for you. Contact us today!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Laravel Web Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/laravel-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Laravel+preview+image.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/laravel-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+170+(1).png"
          as="image"
          type="image/png"
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      <Suspense
        fallback={
          {
            /*<Loader />*/
          }
        }
      >
        <div className="">
          <Header />
          <SectionOne
            title="Laravel Web Development Company by"
            content={content}
            subhead="A Smarter Way to Build Customized Applications."
            btn="Contact Us!"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+170+(1).png"
            alt="Laravel Development Company"
            type="php"
            unique={"brain inventory"}
          />
          <Customer />
          <Experienced
            title="Laravel Development"
            type="why"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/mobile-app-development/Mask+Group+171.png"
            alt="Laravel Development From Brain Inventory"
            para1={subhead1}
            para2={subhead2}
            para3={subhead3}
          />
          <HireMarquee title="Laravel" />
          <Advantage
            title="Laravel Development"
            desc="Laravel is a popular PHP web application framework that offers numerous benefits for developers and businesses alike. Here are some key advantages of Laravel development:"
            reasons={advantages}
          />{" "}
          <Hire
            title="Why Laravel Development from %Brain Inventory"
            card={hireCards}
          />
          <div className="container"></div>
          <ChooseBraininventory
            reasons={chooseBI}
            alt="Laravel Development Company"
          />
          <FaqHire faq={faqdetails} />
          <hr />
          <BlogArticle />
          <KeepInTouch />
          <LocateUs />
          <LetsKick />
          <Footer />
        </div>
      </Suspense>
    </>
  );
}
export default LaravelDevelopment;
