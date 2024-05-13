// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";
import CtaGoogleAnalytics from "../cta_google_analytics";

const Navbar = () => {
  return (
    <div className="navbar text-neutral-content">
      <div className="navbar-start md:w-20">
        <div className="hidden md:block">
          <Image src="/logo.png"
            alt="corrupted pigs logo"
            height={120}
            width={124}
            priority
          />
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 rounded-box shadow bg-slate-600 text-neutral-content border-solid w-52">
            <li><Link href="//corruptedpigs.notion.site/Game-Rules-643b79c0b7394b6dafd9adc54157cc80">Game Rules</Link></li>
            <li>
              <CtaGoogleAnalytics
                buttonText="Merchandising"
                buttonClass=""
                url="//corruptedpigs.store"
                ctaLabel="cta-merch-nav"
              />
            </li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#" className="btn btn-sm btn-warning glass no-animation">Play the game</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center md:hidden">
        <Image src="/logo.png"
          alt="corrupted pigs logo"
          height={70}
          width={88}
          priority
        />
      </div>
      <div className="navbar-end hidden md:flex md:flex-1">
        <ul className="menu menu-horizontal px-1 uppercase font-bold">
          <li><Link href="//corruptedpigs.notion.site/Game-Rules-643b79c0b7394b6dafd9adc54157cc80">Game Rules</Link></li>
          <li>
            <CtaGoogleAnalytics
              buttonText="Merchandising"
              buttonClass=""
              url="//corruptedpigs.store"
              ctaLabel="cta-merch-nav"
            />
          </li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#" className="btn btn-sm btn-warning glass no-animation">Play the game</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
