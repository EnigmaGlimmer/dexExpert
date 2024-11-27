"use client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
