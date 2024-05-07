// import InstituitionsRollbar from './institutions_rollbar';
import Image from "next/image";
import Link from "next/link";

// import logoImg from "./public/logo.png"

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
          <ul className="menu menu-horizontal px-1 uppercase font-semibold">
            <li><Link href="#">Games</Link></li>
            <li><Link href="//corruptedpigs.store">Merchandising</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#" className="btn btn-sm btn-warning">Launch App</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
