import ContactUs from "./(root)/Contactus/Contact";
import Hero from "./(root)/Hero/Hero";
import References from "./(root)/Reference/Reference";
import Team from "./(root)/Team/Team";
import WhatWeDo from "./(root)/Whatwedo/Whatwedo";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Team />
      <References />
      <ContactUs />
    </>
  );
}
