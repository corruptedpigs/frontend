// import InstituitionsRollbar from './institutions_rollbar';
import Link from "next/link";
import { getImageProps } from 'next/image';
import Navbar from "./navbar"

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

const Hero = () => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 1264, height: 656, src: '/background.jpeg' })
  const backgroundImage = getBackgroundImage(srcSet)

  const style = {
    height: '100vh',
    width: '100vw',
    backgroundImage,
    backgroundSize: 'cover',
    position: 'relative', // Needed for overlay positioning
  }

  return (
    <div style={{ backgroundImage: backgroundImage, backgroundSize: "cover" }}>
      <Navbar />

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content grid grid-cols-1 text-neutral-content">
        <div className="flex justify-between">  <div>
        <h1 className="mb-5 text-5xl font-bold">Hero Label 1</h1>
        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-warning uppercase">Launch App</button>
      </div>
      <div>
        <img src="/carta1.png" alt="Image description" class="rounded" />
        {/* <img src="/carta2.png" alt="Image description" class="rounded" />
        <img src="/carta3.png" alt="Image description" class="rounded" /> */}
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero;
