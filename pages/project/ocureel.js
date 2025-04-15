import React from "react";
import Head from "next/head";
import Header from "../../components/header/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import SectionOne from "../../components/project/projocureel/SectionOne.jsx";
const SectionTwo = dynamic(() =>
  import("../../components/project/projocureel/Sectiontwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/project/projocureel/SectionThree.jsx")
);
const ChallengeSection = dynamic(() =>
  import("../../components/project/projectDetailCard.jsx")
);
const TechStack = dynamic(() =>
  import("../../components/project/projectTechstack.jsx")
);
const Team = dynamic(() => import("../../components/project/projectTeam.jsx"));
const Milestone = dynamic(() =>
  import("../../components/project/projectMilestone.jsx")
);
const VisitProject = dynamic(() =>
  import("../../components/project/projectVisit.jsx")
);
const ProjectSectionTwo = dynamic(() =>
  import("../../components/project/projectSectionTwo.jsx")
);
const LocateUs = dynamic(() => import("../../components/portfolio/LocateUs"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm")
);
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle")
);
const Slogan = dynamic(() =>
  import("../../components/project/ProjectSlogan.jsx")
);
const Footer = dynamic(() => import("../../components/common/Footer"));

const Virifi = () => {
  const tech = [
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/CCVXV.png",
      name: "React Native",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/BFVDC.png",
      name: "Firebase",
    },
    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/GNBVDS.png",
      name: "NoSQL",
    },

    {
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/rtc/rgdgfg.png",
      name: "Docker",
    },
  ];
  const teamMembers = [
    {
      id: 1,
      name: "Shivam Singh",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group%20-1.png",
      role: "Sr. Software Architecture",
    },
    {
      id: 3,
      name: "Shubham patidar",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group%206300.png",
      role: "Mobile Developer",
    },
    {
      id: 2,
      name: "Pritesh Patil",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group%206301.png",
      role: "Quality Analyst",
    },

    {
      id: 4,
      name: "Darshan Boyat",
      image:
        "https://braininventory.s3.us-east-2.amazonaws.com/images/ocureel/Group%20-2.png",
      role: "Jr. Software Enginner",
    },
  ];

  const milestoneContent = [
    "Awarded as the best Social Ultimate Game",
    "Less than 2 seconds loading time on Reel scrolling",
    "1K download at the launch party itself",
  ];
  return (
    <>
      <Head>
        <title>
          Brain Inventory Developed Social Video Content Application OCUREEL
        </title>
        <meta
          name="description"
          content="Brain Inventory developed a social video content application, a video content platform that takes users on the ultimate adventure of creating real-life connections."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Brain Inventory Developed Social Video Content Application OCUREEL"
        />
        <meta
          property="og:description"
          content="Brain Inventory developed a social video content application, a video content platform that takes users on the ultimate adventure of creating real-life connections."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/project/ocureel"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_OCUREEL.jpg"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/project/ocureel"
        />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/Portfolio_Ocureel_Banner.webp"
          as="image"
          type="image/webp"
          crossorigin="anonymous"
        />
      </Head>
      <div className="bg-cover relative z-20 w-full h-[105vh] lg:h-[140vh] bg-center lg:bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/Portfolio_Ocureel_Banner.webp')] bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
        <Header />
        <div className="container">
          <SectionOne />
          <h3 className="invisible">Ocureel</h3>
        </div>
      </div>
      <div>
        <div className="bg-white relative z-10 lg:-top-52 lg:pt-48">
          <div className="container">
            <h1 className="flex container m-auto text-center justify-center text-black text-4xl lg:text-6xl py-4 lg:pt-32">
              <span className="font-bold">About</span>&nbsp; Ocureel
            </h1>
            <div className="w-full py-4">
              <p className="text-black opacity-50 font-Satoshi px-2 lg:px-72 text-center text-2xl font-semibold leading-10 lg:leading-[4rem] flex justify-center">
                A game-changing social video content application which went
                viral in no time. Ocureel is a video content platform which
                takes users on the ultimate adventure of creating real-life
                connections & building deep relationships via interactive video
                content. Do you ever feel empty after scrolling for hours on
                social media? Or pressure to show a flawless version of
                yourself? Ocureel a patented game is designed to bring life and
                help you feel good about the time you spend on your phone. Be
                seen for who you really are! Find genuine friends! NO FILTERS!
                NO HATE! ONLY POSITIVITY!
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FDDEFE] relative lg:-top-52 lg:-mb-64">
          <div className="container">
            <div className="lg:h-[80vh] bg-no-repeat bg-contain bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/Portfolio_Ocureel_Mobile+Version.webp')] relative lg:-top-28">
              <h3 className="transparent-text text-8xl bg-transparent w-72 px-8 h-[80vh] flex flex-col justify-end">
                Mobile Version
              </h3>
            </div>
          </div>
        </div>
        <SectionTwo />
        <SectionThree />
        <div className="container">
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/project/IMG_0984.png"
            alt="Custom Software Development Company | Application Development Company"
            className="rounded-3xl w-[100vw] px-[10vw] py-[5vh]"
            width={500}
            height={500}
          />
        </div>
        <ChallengeSection
          challenge="One significant challenge involved creating a schema that could effectively link multiple elements with each other. This required careful consideration of the relationships between different data components within the system to ensure efficient data management and retrieval. Implementing a secure and seamless payment process was another technical hurdle. The team needed to develop a solution that would allow trainers to accept payments directly into their wallets through the platform."
          solution="In order to address the aforementioned challenges, several technical solutions were implemented during the development of the project. Extensive discussions were held between the business owner, product analyst team and developers to identify the specific use cases. These discussions facilitated the thoughtful design of the schema, ensuring that every element of the project catered to the intended audience. MongoDB was chosen as the database solution due to its flexibility and built-in tools, which simplified the storage of dynamic data. For direct payment options, Stripe was selected as the payment aggregator. To provide users with the ability to connect their Stripe accounts, the Stripe Connect strategy was implemented. By utilizing the user's Stripe account, the platform was able to generate products on demand and securely process payments."
        />
        <div className="py-10">
          <video
            muted
            loop
            autoPlay={true}
            controls={false}
            poster="https://braininventory.s3.us-east-2.amazonaws.com/images/project/durationPoster.png"
          >
            <source
              src="https://braininventory.s3.us-east-2.amazonaws.com/videos/Comp 2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <TechStack tech={tech} />
        <Team teamMembers={teamMembers} />
        <Milestone content={milestoneContent} />
        <VisitProject
          projectName="Ocureel"
          projectLink="https://braininventory.in/project/ocureel"
          mockup=""
        />
        <div className="mx-4 lg:mx-24">
          <ProjectSectionTwo />
        </div>
        <div className="px-4">
          <BlogArticle />
        </div>
        <div className="mx-4">
          <ContactForm />
        </div>
        <LocateUs />
        <Slogan />
        <Footer />
      </div>
    </>
  );
};

export default Virifi;
