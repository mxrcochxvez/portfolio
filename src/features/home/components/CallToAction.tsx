export default function CallToAction() {
  const routeChange = () => {
    let path = 'https://marcode-chavez-jr-0d8f01.trycoffeechats.com';
    window.location.href = path;
  }

  return (
    <div className="flex flex-col items-center py-4">
      <button onClick={routeChange} className="bg-yellow-crayola py-4 w-1/2 rounded-lg text-jet ring-4 ring-yellow-100 hover:bg-yellow-200 focus:bg-yellow-200 hover:ring-yellow-400">Coffee Chat?</button>
    </div>
  )
}
