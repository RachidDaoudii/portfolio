"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Greeting from "@/constants/Greeting/greeting"
export default function Home() {
  return (
    <div>
      <Header/>
      <Greeting/>
      <Footer/>
    </div>
  );
}
