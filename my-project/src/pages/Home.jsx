import "../App.css";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import Layout from "./Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="__mainHero flex flex-col md:flex-row mt-7 p-7 relative">
          <div className="flex-shrink text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-teal-600 py-2">
              Zakaria Abdessemed
            </h2>
            <h3 className="text-2xl ml-6 font-bold __text py-5">
              Full Stack MERN developer
            </h3>

            <div className="typewriter ml-6 md:ml-0">
              <p className="text-md mx-auto md:mx-0 __text whitespace-normal leading-1 sm:text-center md:text-left">
                Freelancer providing services for programming needs.
              </p>
            </div>
            <div className="flex mx-auto mt-10 ml-5 gap-16 rounded __text justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/zakaria-abdessemed-05405725a">
                <AiOutlineLinkedin className="text-4xl hover:text-gray-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009007842352">
                <AiOutlineFacebook className="text-4xl hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/zak_u_u/">
                <AiOutlineInstagram className="text-4xl hover:text-gray-300" />
              </a>
            </div>
          </div>

          <div className="hero_img mx-auto my-7"></div>
        </div>
      </div>

      {/*
      <img
            className="absolute top-[320px] bottom-[-50px] right-[20%] lg:bottom-[-20px] z-0 object-cover"
            alt=" "
            src="/laptop.svg"
            style={{
              position: "absolute",
            }}
          />
          <img
            className="absolute top-[190px] right-[910px] bottom-[-50px] lg:right-[10%] text-teal-600 overflow-hidden z-0 object-cover"
            alt=" "
            src="/coding.svg"
            style={{
              position: "absolute",
            }}
          />
      */}
    </Layout>
  );
}
