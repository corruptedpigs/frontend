// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="nfc-side-event" style={ { backgroundColor: "rgb(200, 255, 0)", minHeight: "380px" } } className="py-10 px-10 md:py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl">Support us at the Non Fungible Conference</h2>
        <p className="text-xl">Meet us at the side event</p>
        <img
          className="float-right"
          width={300}
          height={300}
          src="https://assets-global.website-files.com/65ba6e2ae14c08958104a6a8/65ba6e2ae14c08958104a775_NFC_testing-content-_-graphics-06.webp"/>
      </div>
    </section>
  )
}

export default Footer;
