import Link from "next/link";

const InstitutionsMarquee = () => {
  return (
    <div class="relative flex overflow-x-hidden bg-green-800 text-white">
      <div class="py-1 animate-marquee whitespace-nowrap space-x-10">
        <span class="text-xl font-bold ml-8">Institutions:</span>
        <Link href="#associations">Projeto Rios</Link>
        <Link href="#associations">PATAV</Link>
        <Link href="#associations">Os Baldios</Link>
      </div>

      <div class="absolute top-0 py-1 animate-marquee2 whitespace-nowrap  space-x-10">
        <span class="text-xl font-bold ml-8">Institutions:</span>
        <Link href="#associations">Projeto Rios</Link>
        <Link href="#associations">PATAV</Link>
        <Link href="#associations">Os Baldios</Link>
      </div>
    </div>
  )
}

export default InstitutionsMarquee;
