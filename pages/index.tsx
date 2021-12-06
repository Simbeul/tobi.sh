import "../styles/index.css";
import { NextPage } from "next";
import Head from "next/head";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { Project } from "../components/project";
import { Position } from "../components/position";
import { Fun } from "../components/fun";

const Home: NextPage = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div className="container mt-10">
      <Head>
        <title>Simon Bel</title>
        <link rel="manifest" href="/static/manifest.json" />
        <meta
          name="description"
          content="Simon Bel - Innovation & Tech Enthusiast"
        />
        {/* <script async src="https://cdn.splitbee.io/sb.js"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org/",
  "@type": "Person",
  "name": "Simon Bel",
  "url": "https://www.simonbel.com/",
  "image": "https://pbs.twimg.com/profile_images/1264167841827360768/rbrgZalT_400x400.jpg",
  "sameAs": "https://twitter.com/TheSimonBel",
  "jobTitle": "Founder",
  "worksFor": {
    "@type": "Organization",
    "name": "Splitbee"
  }  
}`,
          }}
        ></script>
      </Head>
      <h1 className="text-4xl font-bold">Simon Bel</h1>
      <div className="mb-5 font-medium text-gray-600">
      Hi 👋 I’m a recent business school undergraduate passionate about product, design and development.
      </div>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Projects</h2>
      <motion.div
        variants={{
          hidden: { opacity: 1, scale: 1 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0,
              easings: "backOut",
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3"
      >
        <Project
          name="Stick It"
          color="#4CEBAD"
          url="https://www.stickitapp.io/"
          style={{ scale }}
          description="Sticky Habits is an app that pairs with Habit Stickers to help you build lasting habits."
          logo={
            <img
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
              src="/stickit.png"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                SwiftUI
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Firebase
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800 mr-2">
                Webflow
              </span>
            </div>
          }
        />
        <Project
          name="Quill"
          url="https://apps.apple.com/ca/app/quill-one-poem-a-day/id1547047768"
          style={{ scale }}
          color="#353535"
          description="An IOS app that keeps you inspired by sending you one poem a day."
          logo={
            <img
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
              src="/quill.png"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                SwiftUI
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                CoreData
              </span>
            </div>
          }
        />
        <Project
          name="Filio Studio"
          url="https://filio.studio/"
          style={{ scale }}
          color="#687DFF"
          description="A Design & Consultancy Studio. We help founders create their dream products."
          logo={
            <img
              className="w-16 transition-transform duration-500 transform group-hover:scale-110"
              src="/filio.png"
            />
          }
          tags={
            <div className="mt-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800 mr-2">
                Figma
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Protopie
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800 mr-2">
                Webflow
              </span>
            </div>
          }
        />
      </motion.div>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Work Experience</h2>
      <div className="inline-block w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg last:border-b-0">
        <table className="w-full">
          <tbody className="bg-white">
            <Position
              company="Accenture"
              position="Consulting Analyst"
              description="Helping clients solve tech startegy problems"
              url="https://www.accenture.com/ca-en"
              from="Sept. 2021"
              to="Present"
              logo={
                <img
                  className="w-10"
                  src={`/accenture.png`}
                  alt="Accenture logo"
                />
              }
            />
            <Position
              company="Accenture"
              position="Strategy & Consulting Summer Analyst"
              description="Helping financial institutions integrate smart banking solutions"
              url="https://www.accenture.com/ca-en"
              from="Jun. 2020"
              to="Aug. 2020"
              logo={
                <img
                  className="w-10"
                  src={`/accenture.png`}
                  alt="Accenture logo"
                />
              }
            />
            <Position
              company="Autodesk"
              position="Campaign Marketing Intern"
              description="Working on the customer acquisition strategy for AutoCAD"
              url=""
              from="Jan. 2020"
              to="May 2020"
              logo={
                <img
                  className="w-10"
                  src={`/autodesk.png`}
                  alt="Autodesk logo"
                />
              }
            />
            <Position
              company="Cossette Media"
              position="Assistant Media Planner"
              description="Worked on media campaigns for brands like Air Canada"
              url=""
              from="May 2019"
              to="Dec. 2019"
              logo={
                <img
                  className="w-10"
                  src={`/cossette.png`}
                  alt="Cossette logo"
                />
              }
            />
            <Position
              company="Busbud"
              position="Marketing & Growth Associate"
              description="Worked on scaling experimental marketing & growth channels"
              url=""
              from="May 2018"
              to="June 2019"
              logo={
                <img
                  className="w-10"
                  src={`/busbud.png`}
                  alt="Busbud logo"
                />
              }
            />
          </tbody>
        </table>
      </div>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Experiments</h2>
      <div className="inline-block w-full max-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg last:border-b-0">
        <table className="w-full">
          <tbody className="bg-white">
            <Fun
              experiment="Daily Fact Bot"
              description="A simple SMS-powered app that sends users a random fact through API, daily. Try it out!"
              url="https://docs.google.com/forms/d/e/1FAIpQLSdvc_vuipS-SWhO0Wj-Qv1GqyB_nf8Ed5gJWLD9Dw3uLf5Bqw/viewform"
              tech="Node.JS + Firebase + Twilio"
            /> 
            <Fun
              experiment="AI-Question Generator"
              description="An AI-powered web app (GPT-3) that creates tailored questions for your interviewer"
              url="https://www.linkedin.com/feed/update/urn:li:activity:6810290234232844288/"
              tech="Next.JS + OpenAI + Heroku"
            />
            <Fun
              experiment="Personal Site"
              description="This is my first React project. Cloned from an Open Source project found on GitHub."
              url="https://www.simonbel.com/"
              tech="React + Tailwind + Vercel"
            /> 
          </tbody>
        </table>  
      </div>
      <h2 className="mt-8 mb-3 text-2xl font-bold">Contact</h2>
      <div className="text-base text-gray-900">
        If you are interested in reaching out to me just drop me a quick mail at{" "}
        <b>simonpierrebel@gmail.com</b>
      </div>
      <div className="flex justify-center mt-8 mb-5 font-medium text-gray-600">
        {/* <span className="mx-2 font-bold">·</span> */}
        <a
          data-splitbee-event="Click LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/in/simonbel/"
        >
          LinkedIn
        </a>
        <span className="mx-2 font-bold">·</span>
        <a
          data-splitbee-event="Click Twitter"
          target="_blank"
          href="https://twitter.com/TheSimonBel"
        >
          Twitter
        </a>
        <span className="mx-2 font-bold">·</span>
        <a
          data-splitbee-event="Click Twitter"
          target="_blank"
          href="https://docs.google.com/document/d/1p2dodq1azJ3qUVzhz6gB-aOO_58kHbzbcApqg7Xm56k/edit?usp=sharing"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
