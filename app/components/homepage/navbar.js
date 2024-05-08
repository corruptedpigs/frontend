// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="navbar text-neutral-content">
        <div className="flex-1">
          <Image src="/logo.png"
            alt="corrupted pigs logo"
            className="dark:invert"
            height={120}
            width={124}
            priority
          />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 uppercase font-bold">
            <li><Link href="//corruptedpigs.notion.site/Game-Rules-643b79c0b7394b6dafd9adc54157cc80">Game Rules</Link></li>
            <li><Link href="//corruptedpigs.store">Merchandising</Link></li>
            <li><Link href="#" className="drop-shadow-md">About</Link></li>
            <li><Link href="#" className="btn btn-sm btn-warning glass no-animation">Play the game</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
