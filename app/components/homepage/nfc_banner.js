// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="nfc-side-event" style={ { backgroundColor: "rgb(200, 255, 0)", minHeight: "280px" } } className="py-10 px-10 md:py-20">
      <div className="flex flex-row flex-wrap container justify-center">
        <div>
          <h2 className="text-2xl text-slate-800">Support us at the</h2>
          <Image
            alt="NFC logo"
            width={300}
            height={300}
            src="https://assets-global.website-files.com/65ba6e2ae14c08958104a6a8/65ba6e2ae14c08958104a775_NFC_testing-content-_-graphics-06.webp"/>
        </div>

        <div>
          <Link className="btn btn-wide btn-disabled" href="#">Sign up for the side event</Link>
          <p className="text-slate-800 font-mono">To be announced</p>
        </div>
      </div>
    </section>
  )
}

export default Footer;
