// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="nfc-side-event" style={ { backgroundColor: "rgb(200, 255, 0)", minHeight: "280px" } } className="py-10 px-10 md:py-20">
      <div className="container mx-auto">
        <Image
          className="float-right"
          alt="NFC logo"
          width={300}
          height={300}
          src="https://assets-global.website-files.com/65ba6e2ae14c08958104a6a8/65ba6e2ae14c08958104a775_NFC_testing-content-_-graphics-06.webp"/>
        <h2 className="text-2xl mb-6 text-slate-800">Support us at the Non Fungible Conference</h2>
        <Link className="btn btn-wide btn-disabled" href="#">Sign up for the side event</Link>
        <p className="text-slate-800 font-mono">To be announced</p>
      </div>
    </section>
  )
}

export default Footer;
