"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Greeting from "@/constants/Greeting/greeting"
import Skills from "@/constants/skills/Skills";


export default function Home() {
  return (
    <div>
      <Header/>
      <Greeting/>
      <Skills/>
      <Footer/>
    </div>
  );
}
