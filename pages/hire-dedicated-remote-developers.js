import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/common/Footer";
import LocateUs from "../components/common/locateUs";
import KeepInTouch from "../components/common/keepInTouch";
import StaffBanner from "../components/staffAugmentation/staffBanner";
import Staform from "../components/staffAugmentation/staform";
import OurProcess from "../components/staffAugmentation/ourProcess";
import HireRemote from "../components/staffAugmentation/hireRemote";
import OnboardingProcess from "../components/staffAugmentation/onboardingProcess";
import Hiringbenifit from "../components/staffAugmentation/hiringbenifit";
import StaffPratice from "../components/staffAugmentation/staffPratice";
import Logo from "../components/staffAugmentation/logo";
import Faq from "../components/common/Faqhire";
import Loader from "../components/common/loader";
import Image from "next/image";
export default function Hirededicatedremotedevelopers(props) {
  const faqdetails = [
    {
      id: "1",
      title:
        "How much does it cost to hire a Dedicated Developer from Brain Inventory?",
      description:
        "Cost necessarily varies based on the skills you require. We offer a closed set of technology at which we really excel. Starting price for a monthly contract with Brain Inventory is at $1000 per month. Cost increase with years of experience and the technology requirement. It is extremely easy to upscale your team with Brain Inventory. Within 7 days you can onboard our developer to your team and with 1-month notice, you can end the contract. Our policies are extremely startup-friendly.",
    },
    {
      id: "2",
      title: "How will I communicate with the Developer?",
      description:
        "Once we have signed the contract and received the payment we will create an open channel between you and our developers. Team Brain Inventory aim is to reduce the hassle and save your time. We use Skype, Slack, Whatsapp, Trello and Discord for all our communication. Nonetheless, we are open to your preferences and collaborate where you are most comfortable.",
    },
    {
      id: "3",
      title:
        "I live in a different timezone from India, How will the developer work with me?",
      description:
        "Team of Brain Inventory has helped numerous overseas clients belonging from opposite time zones to complete Time Overlap. Developers of our team can be available for different time shifts to ensure we are working together. We schedule meetings, discussions at times that are suitable for both of us. Stay working crossing time zones when you work with Brain Inventory.",
    },
    {
      id: "4",
      title: "What happens when a developer is not working as per expectation?",
      description:
        "You can raise a query to your account manager about the performance. We will do an internal analysis and give a 1 week chance to the developer to improve performance. Onc completion of 1 week you will have 2 options.",
    },
    {
      id: "5",
      title:
        "If I terminate the contract what will happen to my advance payment?",
      description:
        "We will calculate the number of days developers worked for you and reduce that amount from your advance payment and refund you the remaining complete amount. Long term relations can only be built on happy relations.",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Hire Dedicated Remote Developers India - Remote Developers
        </title>
        <meta
          name="description"
          content="Hire dedicated remote developers in India for your new projects. We are here to help you. We are trusted remote developers from india."
        />
        <meta
          name="og:title"
          content="Hire Dedicated Remote Developers India - Remote Developers"
        />
        <meta
          name="og:description"
          content="Hire dedicated remote developers in India for your new projects. We are here to help you. We are trusted remote developers from india."
        />
        <meta
          property="og:url"
          content="https://braininventory.in/hire-dedicated-remote-developers"
        />
        <link
          rel="canonical"
          href="https://braininventory.in/hire-dedicated-remote-developers"
        />
        <link
          rel="preload"
          href="https://braininventory.s3.us-east-2.amazonaws.com/images/staffbanner.png"
          as="image"
          type="image/png"
          crossorigin="anonymous"
        />
      </Head>

      <div className="second-component">
        <Header />
        <StaffBanner />
        <Staform />
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
          <div className="container lg:px-24">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/something.png"
              alt="Custom Software Development Company | Application Development Company"
              priority="low"
              fetchPriority="low"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
        <OurProcess />
        <HireRemote />
        <OnboardingProcess />
        <Hiringbenifit />
        <HireRemote />
        <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6 padding-left-all-section-1 container">
          <div className="container">
            <Image
              src="https://braininventory.s3.us-east-2.amazonaws.com/images/staff-image.png"
              alt="Custom Software Development Company | Application Development Company"
              fetchPriority="low"
              priority="low"
              width={500}
              height={500}
              className="w-full"
            />
            <StaffPratice />
            <Logo />
          </div>
        </div>
        <Faq faq={faqdetails} />
        <KeepInTouch />
        <LocateUs />
        <Footer />
      </div>
    </>
  );
}
