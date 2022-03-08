import logo from '../../../assets/images/logo.png';

export default function Hero() {

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold sm:px-6 sm:pt-10">Marco Chavez</h1>
        <p className="text-2xl text-yellow-crayola">A Software Developer.</p>
        <div className="w-80 mt-12 p-1 bg-white rounded-full">
          <img src={logo} alt="me" className="rounded-full" />
        </div>
      </div>
    </div>
  )
}
