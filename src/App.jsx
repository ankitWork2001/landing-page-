import Navbar from "./page/navbar"


import Hero from './page/hero'
function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <h1 className="text-4xl font-bold text-blue-600">
        Hello Tailwind CSS with Vite!
      </h1>
    </div>
    </>
  )
}

export default App