import Bio from "../components/Bio";
import CallToAction from "../components/CallToAction";
import Hero from "../components/Hero";
import MyLinks from "../components/MyLinks";

export default function Home(): JSX.Element {
  return (
    <div>
      <div className="md:grid md:grid-cols-2">
        <Hero />
        <div className="md:flex md:flex-col md:justify-center">
          <Bio />
          <CallToAction />
        </div>
      </div>
      <MyLinks />
    </div>
  )
}
