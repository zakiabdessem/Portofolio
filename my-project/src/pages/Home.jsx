import "../App.css";
import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import devIMG from "../main_img.png";
import Layout from "./Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <div className="__mainHero mt-7 text-center p-7">
        <h2 className="  text-5xl font-extrabold text-teal-600 py-2">
          Zakaria Abdessemed
        </h2>
        <h3 className="text-2xl font-bold __text py-5">
          Full Stack MERN developer
        </h3>
        <div className="typewriter">
          <p className="text-md __text whitespace-normal leading-1">
            Freelancer providing services for programming needs.
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-16 rounded __text">
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

      <div className="mx-auto my-7 bg-gradient-to-b max-w-md from-cyan-600 rounded-full flex items-center justify-center overflow-hidden">
        <img src={devIMG} className="h-25 w-30 object-fit" alt="" />
      </div>
    </Layout>
  );
}
