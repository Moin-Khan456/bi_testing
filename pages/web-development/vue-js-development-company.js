import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../../components/header/Header"));
const LocateUs = dynamic(() => import("../../components/common/locateUs"));
const Footer = dynamic(() => import("../../components/common/Footer"));
const Loader = dynamic(() => import("../../components/common/loader"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm.jsx")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire"));
const Hire = dynamic(() => import("../../components/common/Hire"));
import SectionOne from "../../components/Web-Development/PageIntro.jsx";
import Link from "next/link.js";
const WhyMean = dynamic(() =>
  import("../../components/Web-Development/WhyMean.jsx")
);
const Benefits = dynamic(() =>
  import("../../components/Web-Development/benefits.jsx")
);
const ChooseBraininventory = dynamic(() =>
  import("../../components/common/ChooseBraininventory.jsx")
);
const Industries = dynamic(() =>
  import("../../components/Web-Development/industries.jsx")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);
import DOMPurify from "isomorphic-dompurify";

function VueJsDevelopment(props) {
  const content =
    "As a strong proponent of state-of-the-art web development technologies and a top-notch Vue JS Development Company, we deliver unmatched products at an affordable cost. Our team of experienced, dedicated Vue JS developers utilizes reusable UI components.";

  const hireCards = [
    {
      head: "Dedicated Vue.js Development Team",
      content: (
        <>
          <Link href="" className="text-[#2186ff]">
            Brain Inventory
          </Link>{" "}
          is an emerging Vuejs web development company with an experienced and
          flexible team of web application developers, sysops, project managers,
          and full-stack engineers. We are committed to making your business
          thrive and leveraging the advantages of{" "}
          <Link
            href="/web-development/custom-web-development"
            className="text-[#2186ff]"
          >
            custom web development
          </Link>{" "}
          services to help you expand, grow and flourish.
        </>
      ),
    },
    {
      head: "Fixed Price Model",
      content:
        "Fixed-price engagement is a cost-effective method considering the business application. It can be applicable to any type of business and ecosystem, irrespective of its size or nature. We will help turn your ideas into reality by designing an effective workflow that adheres to the latest coding standards and techniques.",
    },
    {
      head: "Cost Effective",
      content:
        "We offer Vue.js development services on an affordable budget. Our team’s experience and dedication to our client’s satisfaction are what sets us apart from other companies. You can be sure that your project will meet or exceed its goals because we ensure that quality comes first before anything else.",
    },
    {
      head: "Support and Maintenance",
      content:
        "Vue.js development services are of a high-quality approach and provide complete support to our clients for their websites at a time. We offer 24*7 complete support, maintenance, and upgradation services with our dedicated engineers who can build an application using this framework using the best possible technologies.",
    },
  ];

  const faqdetails = [
    {
      id: "1",
      title: "What are the benefits of Vue.js application development?",
      description:
        "Some benefits associated with Vue.js application development include its easy-to-use nature–it only requires basic knowledge of HTML, CSS, etc. Its virtual DOM feature, and component-based architecture. ",
    },
    {
      id: "2",
      title: "How long does it take to develop a Vue.js app?",
      description:
        "It depends on the project’s complexity and requirements. However, the average time is 2-3 months to develop a basic Vue.js app. ",
    },
    {
      id: "3",
      title: "Does VueJS allow you to build mobile-friendly websites?",
      description:
        "Yes. VueJS allows you to build mobile-friendly websites since it is a front-end framework that is used to create responsive designs, adaptable to different screen sizes.",
    },
    {
      id: "4",
      title:
        "What should you consider before choosing a Vue.js development company? ",
      description: `You must check their previously developed projects if they are up and running successfully. Also, check for client reviews and testimonials to see if they deliver on time and meet their client's expectations. 
      We are a leading Vue JS development company whom you can trust with your upcoming projects, contact us to discuss our past projects and experience. `,
    },
    {
      id: "5",
      title: "What kinds of applications can be built with Vuejs? ",
      description:
        "You can build single-page applications, web interfaces, chat applications, and social networking applications using Vue.js.",
    }
  ];

  const chooseBiSubhead =
    "As you can see, designing and building an Android application is not an easy task. It is much more than just coding. In order to deliver the best products in the market, we have highly professional developers who aim to offer a better end-user experience. We are fully equipped with the proven expertise of over 5 years and are equipped with a team of highly qualified developers who prioritize quality and efficiency while developing apps.";
  const chooseBI = [
    "We have a team of Vue.js developers, who love what they do and can make your idea come to life in an expert manner.",
    "We’re skilled at delivering Vue.js projects, so be rest assured that we can provide the right services for your industry.",
    "Our team of experts takes their inspiration from diverse fields like design, media, and research to create powerful software solutions that meet client needs.",
    "Vue.js is a well-liked JavaScript framework that powers thousands of projects in the Web development market.",
    "Vue.js is a quick, productive, and adaptable platform utilized to develop both backend and frontend applications.",
    "By using Vue.js, you can construct single-page web apps with Vuex and Vuetify in addition to other tools for making customized user interfaces for your project like a router, filters, etc.",
    "Without needing advanced coding abilities. It allows rapid development of interactive web interfaces without complex code.",
    "Vue.Js Development services from Brain Inventory to build interactive applications. We develop apps using high coding standards, the latest tools and technology, proper planning, research, and proven methodologies.",
    "Our Vue developers have a strong focus on UI/UX designs and provide flexible delivery models.",
  ];

  const benefitsList = [
    "Vue.js is praised for its uncomplicated nature and user-friendliness, allowing developers to quickly grasp and utilize it. This enables companies to economize on time and funds during development.",
    "It can be used to build a wide range of applications, from small and simple to large and complex. It is also compatible with a variety of platforms, including desktop, mobile, and web. Designed to be lightweight and fast, which means that applications built using Vue.js can load quickly and provide a smooth user experience.",
    "Component-based architecture provides developers with the ability to leverage existing code in new contexts throughout an application. This allows for accelerated development cycles, increased productivity, and a reduced chance of mistakes.",
    "It is compatible with popular front-end libraries and frameworks like React and Angular, providing flexibility for developers who wish to utilize it in conjunction with other technologies.",
  ];
  const meanReasons = [
    "Vue is considered one of the smallest frameworks in terms of file size.",
    "Smaller file size enables utility apps that are significantly smaller and quicker to download.",
    "Vue-built apps are more efficient to use compared to apps built with other frameworks.",
    "Vue is a flexible app development solution suitable for businesses of any size.",
    "Vue framework offers high versatility, supporting various build systems and multiple environments.",
    "Vue is a progressive framework that can be introduced into existing codebases without requiring major changes.",
    "Vue can enhance the performance and functionality of utility business applications without altering existing structures.",
  ];
  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What are the benefits of Vue.js application development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some benefits associated with Vue.js application development include its easy-to-use nature–it only requires basic knowledge of HTML, CSS, etc. Its virtual DOM feature, and component-based architecture."
      }
    },{
      "@type": "Question",
      "name": "How long does it take to develop a Vue.js app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the project’s complexity and requirements. However, the average time is 2-3 months to develop a basic Vue.js app."
      }
    },{
      "@type": "Question",
      "name": "Does VueJS allow you to build mobile-friendly websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. VueJS allows you to build mobile-friendly websites since it is a front-end framework that is used to create responsive designs, adaptable to different screen sizes."
      }
    },{
      "@type": "Question",
      "name": "What should you consider before choosing a Vue.js development company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `You must check their previously developed projects if they are up and running successfully. Also, check for client reviews and testimonials to see if they deliver on time and meet their client's expectations. 
        We are a leading Vue JS development company whom you can trust with your upcoming projects, contact us to discuss our past projects and experience.`
      }
    },{
      "@type": "Question",
      "name": "What kinds of applications can be built with Vuejs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can build single-page applications, web interfaces, chat applications, and social networking applications using Vue.js."
      }
    }]
  }
const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript)); 
  return (
    <>
      <Head>
        <title>Vue JS Development Service Company USA | Brain Inventory</title>
        <meta
          name="description"
          content="Are you looking for Vue JS development services? We are here to help! Contact Brain Inventory for experienced Vue JS developers to provide the best solutions."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Vue JS Development Service Company USA | Brain Inventory"
        />
        <meta
          property="og:description"
          content="Are you looking for Vue JS development services? We are here to help! Contact Brain Inventory for experienced Vue JS developers to provide the best solutions."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/web-development/vue-js-development-company"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/web-development/vue-js-development-company"
        />
        <link
          rel="preload"
          fetchpriority="high"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
          as="image"
          type="image/png"
        />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      {/*<Loader />*/}
      <div className="">
        <Header />
        <div className="pt-32">
          <SectionOne
            heading="Vue.Js"
            title="Vue.Js"
            miniTitle={"Service by Brain Inventory"}
            content={content}
            btn="Get a Quote"
            image="https://braininventory.s3.us-east-2.amazonaws.com/images/Technology/Group+6461.png"
            alt="Vue.js Application Development Company"
          />
          <WhyMean type="Vue.Js" meanReasons={meanReasons} />
          <div className="flex justify-center px-10">
            <h3 className="text-head mean_stack_development_text_shadow mt-8 text-2xl lg:text-8xl font-extrabold font-Satoshi">
              Vue.Js Development
            </h3>
          </div>
          <Benefits type="Vue.Js" benefitsList={benefitsList} />
          <Hire
            title="Why Vue.Js Development from %Brain Inventory"
            card={hireCards}
          />{" "}
          <ChooseBraininventory
            reasons={chooseBI}
            alt="Vue.js Application Development Company"
          />{" "}
          <Industries />
          <FaqHire faq={faqdetails} />
          <BlogArticle />
          <ContactForm />
          <LocateUs />
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default VueJsDevelopment;
