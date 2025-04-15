import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link.js";
import DOMPurify from "isomorphic-dompurify";
const Header = dynamic(() => import("../../components/header/Header.js"));
const Footer = dynamic(() => import("../../components/common/Footer.js"));
const ContactForm = dynamic(() =>
  import("../../components/common/ContactForm.jsx")
);
const FaqHire = dynamic(() => import("../../components/common/Faqhire.jsx"));
const Approach = dynamic(() =>
  import("../../components/SolutionFitness/Approach.jsx")
);
const SectionOne = dynamic(() =>
  import("../../components/SolutionEd-tech/SectionOne.jsx")
);
const SectionTwo = dynamic(() =>
  import("../../components/SolutionFitness/SectionTwo.jsx")
);
const SectionThree = dynamic(() =>
  import("../../components/SolutionFitness/SectionThree.jsx")
);
const SectionFour = dynamic(() =>
  import("../../components/SolutionFitness/SectionFour.jsx")
);
const SectionFive = dynamic(() =>
  import("../../components/SolutionFitness/SectionFive.jsx")
);
const SectionSix = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSix.jsx")
);
const SectionNine = dynamic(() =>
  import("../../components/SolutionFitness/SectionNine.jsx")
);
const SectionTen = dynamic(() =>
  import("../../components/SolutionFitness/SectionTen.jsx")
);
const TiltMarquee = dynamic(() =>
  import("../../components/SolutionFitness/TiltMarquee.jsx")
);
const PlatformDevelopment = dynamic(() =>
  import("../../components/SolutionAccounting/SectionSlider.jsx")
);
const LetsKick = dynamic(() => import("../../components/common/LetsKick.js"));
const BlogArticle = dynamic(() =>
  import("../../components/common/BlogArticle.jsx")
);

function EdTech() {
  const faqdetails = [
    {
      id: "1",
      title: "How much does it cost to build educational software?",
      description:
        "The cost of building educational software varies based on features, complexity, and platform. Basic software may cost $5,000–$20,000, while advanced solutions with AI, gamification, or VR can exceed $50,000–$200,000. For an exact quote, consulting a development team is recommended.",
    },
    {
      id: "2",
      title: "What type of education apps do you develop?",
      description:
        "Our expert education software developers can develop various types of education apps, including classroom apps, language learning apps, assessment apps, etc. ",
    },
    {
      id: "3",
      title: "What is the role of education apps in business?",
      description:
        "Education apps help businesses in conducting employee training, educating employees on the latest and advanced technologies, knowledge sharing, and promoting skill enhancement workshops. Take help from education software development services to develop a customized education app as per the needs of your business. ",
    },
    {
      id: "4",
      title: "What does an educational software developer do?",
      description:
        "An educational software developer develops educational apps to facilitate learning and make the overall experience fun and enjoyable for the user. ",
    },
    {
      id: "5",
      title: "Are educational apps profitable?",
      description:
        "Yes. The future market of educational apps looks promising with the revenue projected to grow at a CAGR of 8.9% until 2030. This presents a golden opportunity for businesses to invest in education software development and make good profits in the long run. ",
    },
  ];
  const jsonLdScript = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much does it cost to build educational software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of building educational software varies based on features, complexity, and platform. Basic software may cost $5,000–$20,000, while advanced solutions with AI, gamification, or VR can exceed $50,000–$200,000. For an exact quote, consulting a development team is recommended."
      }
    },{
      "@type": "Question",
      "name": "What type of education apps do you develop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our expert education software developers can develop various types of education apps, including classroom apps, language learning apps, assessment apps, etc."
      }
    },{
      "@type": "Question",
      "name": "What is the role of education apps in business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Education apps help businesses in conducting employee training, educating employees on the latest and advanced technologies, knowledge sharing, and promoting skill enhancement workshops. Take help from education software development services to develop a customized education app as per the needs of your business."
      }
    },{
      "@type": "Question",
      "name": "What does an educational software developer do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An educational software developer develops educational apps to facilitate learning and make the overall experience fun and enjoyable for the user."
      }
    },{
      "@type": "Question",
      "name": "Are educational apps profitable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The future market of educational apps looks promising with the revenue projected to grow at a CAGR of 8.9% until 2030. This presents a golden opportunity for businesses to invest in education software development and make good profits in the long run."
      }
    }]
  }
  
  const solutionList = [
    {
      id: "1",
      text: "Learning Management Systems (LMS)",
      desc: (
        <>
          In the digital age, Brain Inventory helps create robust Learning
          Management Systems for enhanced edtech industry services. As a leading
          web and{" "}
          <Link href="javascript:void(0)" className="text-[#2186ff]">
            mobile app development company
          </Link>
          , we understand the distinct needs of the education industry.
        </>
      ),
    },
    {
      id: "2",
      text: "E-Learning Platforms",
      desc: "Experience unparalleled e-learning platform development services geared to empower education systems, brought to you by Brain Inventory.  Our personalized approach ensures every app is tailored to drive engagement and improve learning outcomes.",
    },
    {
      id: "3",
      text: "Mobile Learning Apps",
      desc: "Your online learning journey is about to take a leap forward with the mobile learning apps we create at Brain Inventory. These affable tools function as your personal learning assistant, offering a seamless learning experience right at your fingertips.",
    },
    {
      id: "4",
      text: "Virtual Classrooms",
      desc: "Welcome to Brain Inventory - a  superior education software development company, the Virtual Classrooms development service. Our state-of-the-art platform presents a dynamic suite of features that assure an enriching and comprehensive educational experience for all learners.",
    },
    {
      id: "5",
      text: "Teacher and Student Portals",
      desc: (
        <>
          We specialize in crafting effective, user-friendly Teacher and Student
          Portals.{" "}
          <Link href="/company" className="text-[#2186ff]">
            Our expert team
          </Link>{" "}
          is proficient at developing portals that boost educational
          interactivity and accountability.
        </>
      ),
    },
    {
      id: "6",
      text: "AI-Powered Personalized Learning",
      desc: (
        <>
          At Brain Inventory, we redefine education, by crafting smart,
          intuitive and interactive learning environments, fuelled by
          state-of-the-art Artificial Intelligence algorithms. With an
          experienced education{" "}
          <Link href="/" className="text-[#2186ff]">
            software development company
          </Link>
          , you benefit from engaging and personalized learning experiences,
          custom-built to meet diverse educational needs, while promoting
          effortless understanding and retention.
        </>
      ),
    },
    {
      id: "7",
      text: "Gamification Platforms",
      desc: "At Brain Inventory, we develop engaging gamification platforms that transform the way you learn. Our team of expert developers craft interactive and fun learning experiences that not only captivate learners, but also drive user engagement and improve knowledge retention.",
    },
    {
      id: "8",
      text: "Online Course Marketplaces",
      desc: "At Brain Inventory, we specialize in the insightful development of online course marketplaces, focusing on user-friendly interfaces and robust functionality for a seamless learning experience.",
    },
    {
      id: "9",
      text: "AI-Powered Tutoring",
      desc: "At Brain Inventory, we specialize in the development of AI-Powered Tutoring services that revolutionize the educational landscape. We incorporate cutting-edge technology to create customizable, interactive, and data-driven applications that promote a robust learning environment.",
    },
  ];
  const sectionFourDesc =
    "By partnering with an education software development company, you can take your educational software to new heights. We are pioneers in the field, creating innovative apps that reshape the edtech industry. However, collaborating with us means more than just creating a website or an app. Together, we're crafting an engaging and immersive learning experience that empowers users and fosters high levels of engagement from the start.";

  const sectionTwoDesc =
    "At Brain Inventory, we're the pioneers of crafting super-smart educational services that make a big impact. We're experts at creating top-notch tools with cool features and strong designs, all to make education even better.";

  const sectionFiveDesc =
    "We are undoubtedly in an era of digital educational transformation. It is a time where online applications are growing in popularity among knowledge seekers. Big names like Udemy have paved the way, but now we see a rise of innovative platforms looking to find their own place in this ever-changing landscape. Let's explore these emerging contenders:";

  const sectionFiveTable = [
    ["StudyBuddy", "LearnTogether", "MindfulLearn", "SkillBuilder"],
    [
      "Offers personalized study plans and group study sessions",
      "Creates an educational-focused social network to connect and motivate learners",
      "Focuses on mindfulness and holistic learning, offering meditation and stress management techniques",
      "Provides interactive skill development courses and career guidance",
    ],
    [
      "Over 1 million",
      "More than 1.5 million",
      "More than 500,000",
      "Over 2 million",
    ],
  ];
  const sectionFiveTableHead = [
    "Educational App Platform",
    "Unique Features",
    "User Base",
  ];

  const platformDesc =
    "At Brain Inventory, we understand the transformative power of technology in education. We provide ed-tech software development that simplifies the learning process, enhances interaction, and promotes effective education. Here's why you should consider Brain Inventory for your ed-tech services.";

  const platformDevelopment = [
    {
      head: "Educational Technology Domain Knowledge",
      content:
        "Understanding the domain where technology and education intersect is a significant advantage in building and delivering effective educational solutions. Here at Brain Inventory, we strive to leverage our domain knowledge to create cutting-edge tools and platforms for educational advancement. ",
    },
    {
      head: "E-Learning Standards",
      content:
        "Gain familiarity with e-learning standards such as SCORM and xAPI, ensuring optimum interoperability and tracking. Your courses will smoothly integrate into different systems and platforms while also tracking learners' progress with precision.",
    },
    {
      head: "Content Authoring Tools",
      content:
        "At Brain Inventory, we possess expertise in creating authoring tools for educators to develop and customize digital learning content. Our toolsets provide an interactive interface, allowing for the easy creation and management of multimedia content.",
    },
    {
      head: "Adaptive Learning Algorithms",
      content:
        "At Brain Inventory, we harness the power of machine learning and AI techniques to create adaptive learning systems that personalize content based on each learner's progress. This technologically advanced approach targets the unique needs of individual learners, offering a custom-fit educational journey on our platform. ",
    },
    {
      head: "Mobile Development",
      content:
        "Our proficiency in mobile app development for iOS and Android platforms elevates learning experiences across various devices. Using the latest technologies, we custom build education apps that are interactive, engaging, and easy for both students and educators to use. ",
    },
    {
      head: "Web Development",
      content:
        "With Brain Inventory, be assured of strong edtech website development skills that create responsive and accessible web-based ed-tech solutions tailored for your needs. Our web developers excel in various frameworks like Laravel, Angular, React, and Node.js, ensuring your web applications are state-of-the-art, scalable, and secure.",
    },
  ];

  const keyDesc =
    "If you're seeking an edge in the ever-evolving education technology sector, Brain Inventory has a proven track record in delivering top-notch Ed-Tech Solution Development, tailored to your needs. Below are the key features to expect when developing with us.";
  const keyFeatures = [
    {
      head: "User Registration and Profiles",
      content:
        "Enhance interactive learning by creating user accounts and profiles for students, teachers, and administrators. Here at Brain Inventory, we develop user registration systems that are incredibly user-friendly and secure.",
    },
    {
      head: "Content Management System (CMS)",
      content:
        "Welcome to Brain Inventory's robust system development where you can upload, organize, and manage your educational content effortlessly. Our expertise in web and mobile app development, coupled with our deep understanding of the education industry, has enabled us to create services tailored to meet your needs.",
    },
    {
      head: "Course Creation and Management",
      content:
        "Discover tools to design, create, and update your courses seamlessly with Brain Inventory. Offering efficient course creation and management software, our platform ensures a streamlined educational experience for all users.",
    },
    {
      head: "Assessment and Quiz Creation",
      content:
        "Unlock the potential of online learning with our tools for creating engaging quizzes, exams,  and dynamic assessments. Brain Inventory strives to provide technological services that enable comprehensive assessment and testing.",
    },
    {
      head: "Personalized Learning Paths",
      content:
        "Adaptive algorithms are integral in tailoring educational content to suit individual learners' needs. They analyze the learner's interaction with the content, identifying their strengths and weaknesses, and dynamically adjust the complexity and type of content to optimize the learning process.",
    },
    {
      head: "Gradebook and Performance Analytics",
      content:
        "Welcome to Brain Inventory's educational software page! Our cutting-edge technology enables you to track and manage student grades, while simultaneously detailed providing analytics for performance analysis.",
    },
    {
      head: "Interactive Whiteboards",
      content:
        "Virtual whiteboards bring to life real-time collaboration and teaching, enhancing education solutions. At Brain Inventory, we leverage advanced technology to develop intuitive interactive whiteboard platforms.",
    },
    {
      head: "How Do We Approach Educational Solution Development?",
      content:
        "At Brain Inventory, our approach to building educational software is unique and effective. We aim to make software that fit our clients' needs and the needs of the people who will use them. Here's how we do it:",
    },
    {
      head: "Understanding Your Goals",
      content:
        "Our initial step involves a thorough understanding of our clients' desires and needs. We firmly believe that every solution should align with our client's unique style and objectives.",
    },
    {
      head: "Learning from the World",
      content:
        "We keep our finger on the pulse of global trends and industry innovations. This broad awareness informs our approach, ensuring that our services not only introduce novelty but also deliver practical functionality.",
    },
    {
      head: "Making It Easy for You",
      content:
        "User experience is paramount in our design philosophy. We are committed to ensuring that our software are not only intuitive and user-friendly but also visually appealing.",
    },
    {
      head: "Building the Software",
      content:
        "Our skilled team meticulously constructs the software. This involves rigorous development, thorough testing, and a commitment to producing a robust, reliable product.",
    },
    {
      head: "Testing and Making It Better",
      content:
        "Before presenting the application to the public, it undergoes comprehensive testing. This phase identifies and addresses any potential shortcomings or problems to achieve a state of perfection.",
    },
  ];

  const setionThreeCards = [
    {
      points: [
        "Did you realize that the edtech industry is anticipated to exceed $300 billion by 2025? According to Statista, this market is set to experience robust growth post-2023. This fact clearly highlights the relevance and demand for exceptional educational software development.",
        "There is a strong surge in mobile learning or m-learning. A report by MarketsandMarkets predicts that the mobile learning market would reach around $78.5 billion by 2025, up from $12.2 billion in 2020. Post-2023, this implies there will be an increasingly sizable market for mobile-based educational services.",
      ],
    },
    {
      head: "The Impact of Online Platforms on Learning Goals",

      tableHead: ["Statistic", "Source"],
      tableContent: [
        [
          "Pew Research confirms that 73% of adults consider themselves lifelong learners, and a vast majority of them use digital tools for self-directed learning.",
          "Statista",
        ],
        [
          "e-Learning requires 40-60% less employee time than traditional education. Online learning platforms, hence, not only enhance the knowledge base but also increase productivity by consuming less time.",
          "MarketsandMarkets",
        ],
      ],
    },
  ];

  const approachDesc =
    "At Brain Inventory, our approach to building educational solutions is unique and effective. We aim to make solutions that fit our clients' needs and the needs of the people who will use them. Here's how we do it:";
  const approachPoints = [
    {
      head: "Understanding Your Goals",
      content:
        "Our initial step involves a thorough understanding of our clients' desires and needs. We firmly believe that every solution should align with our client's unique style and objectives.",
    },
    {
      head: "Learning from the World",
      content:
        "We keep our finger on the pulse of global trends and industry innovations. This broad awareness informs our approach, ensuring that our solutions not only introduce novelty but also deliver practical functionality.",
    },
    {
      head: "Making It Easy for You",
      content:
        "User experience is paramount in our design philosophy. We are committed to ensuring that our solutions are not only intuitive and user-friendly but also visually appealing.",
    },
    {
      head: "Building the Solution",
      content:
        "Our skilled team meticulously constructs the solution. This involves rigorous development, thorough testing, and a commitment to producing a robust, reliable product.",
    },
    {
      head: "Testing and Making It Bettert",
      content:
        "Before presenting the solution to the public, it undergoes comprehensive testing. This phase identifies and addresses any potential shortcomings or problems to achieve a state of perfection.",
    },
  ];
  
  const sanitizedJsonLd = DOMPurify.sanitize(JSON.stringify(jsonLdScript));
  return (
    <>
      <Head>
        <title>Education & Research IT Company | Brain Inventory</title>
        <meta
          name="description"
          content="Brain Inventory services offer education IT solutions to build a platform where the administration, faculty and students can collaborate easily. Call us!"
        />
        <meta
          property="og:description"
          content="Brain Inventory services offer education IT solutions to build a platform where the administration, faculty and students can collaborate easily. Call us!"
        />
        <meta
          name="og:title"
          content="Education & Research IT Company | Brain Inventory"
        />
        <meta
          property="og:image"
          content="https://braininventory.s3.us-east-2.amazonaws.com/images/preview/Braininventory_Edtech.jpg"
        />
        <meta
          property="og:url"
          content="https://braininventory.in/industry/edtech"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/industry/edtech"
        />
                <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: sanitizedJsonLd }}
        />
      </Head>
      {/*<Loader />*/}
      <Header />
      <SectionOne />
      <SectionTwo
        className="pt-52 pb-32 bg-no-repeat bg-right brightness-[1.35] bg-[url('https://braininventory.s3.us-east-2.amazonaws.com/images/solution/grid-matrix.png')]"
        title="Education App Service Provide by Brain Inventory"
        isHeadShow={false}
        head1="Revolutionizing Ed-Tech Services"
        description={sectionTwoDesc}
      />
      <SectionThree
        title="Insights into the Education Industry"
        sectionDesc="Education technology is a constantly evolving field that is rapidly embracing technological advancements. Here are some fascinating insights about the education industry."
        setionThreeCards={setionThreeCards}
      />
      <TiltMarquee title="EdTech Software Development" />
      <SectionFour
        title="Solutions for Education Software Development"
        description={sectionFourDesc}
        solutionList={solutionList}
      />
      <SectionFive
        head="Educational APPLICATIONS"
        subhead="COMPARED TO Udemy"
        description={sectionFiveDesc}
        sectionFiveTableHead={sectionFiveTableHead}
        sectionFiveTable={sectionFiveTable}
        alt="Rise of Transportation and Logistics Management"
      />
      <SectionSix
        title="Ready to start your journey with a transformative education platform?"
        customClasses="max-w-[200px] lg:max-w-[400px] !w-[350px] bottom-0"
        btn="BUILD YOUR ED-TECH SOFTWARE"
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Ed-Tech/Mask+group+(1).png"
      />
      <PlatformDevelopment
        data={platformDevelopment}
        subhead="WHY CHOOSE BRAIN INVENTORY FOR"
        head="Educational SOftware DEVELOPMENT"
        description={platformDesc}
      />
      <SectionNine
        brand="Educational SOftware DEVELOPMENT        "
        pageCategory="Educational SOftware DEVELOPMENT     "
        pageCategoryAbbr="Educational SOftware DEVELOPMENT       "
        slow={70000}
        fast={55000}
        alt={"Educational Software Development Services"}
        src="https://braininventory.s3.us-east-2.amazonaws.com/images/solution/Ed-Tech/office-workers-using-finance-graphs+1.png"
      />
      <PlatformDevelopment
        data={keyFeatures}
        subhead="KEY FEATURES OF"
        head="Educational SOftware DEVELOPMENT"
        description={keyDesc}
      />
      <Approach
        title="Our Approach to Educational Software Development"
        desc={approachDesc}
        points={approachPoints}
      />
      <SectionTen
        oneName={"EDUCATION.NUMETRIC"}
        oneVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/1.mp4"
        }
        oneImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Education+Numetric/Ed+tech.png"
        }
        twoName={"EDUCATOR UNITED"}
        twoVideo={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/3.mp4"
        }
        twoImage={
          "https://braininventory.s3.us-east-2.amazonaws.com/images/Industry+page+mockups/Edtech/Dummy+1/Ed+tech.png"
        }
        oneLink={null}
        twoLink={null}
        alt="Our Work"
      />
      <FaqHire faq={faqdetails} />
      <hr />
      <BlogArticle />
      <ContactForm />
      <LetsKick />
      <hr />
      <Footer />
    </>
  );
}
export default EdTech;
