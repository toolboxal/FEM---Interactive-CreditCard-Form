import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [info, setInfo] = useState({})
  const handleInfo = (value) => {
    const newValue = { ...info, ...value }
    setInfo(newValue)
    // console.log('inside App', info)
  }
  return (
    <main className="w-full h-screen">
      <div className="w-full h-1/4 overflow-hidden fixed top-0 left-0 lg:w-1/3 lg:h-screen lg:max-h-full bg-red-300">
        <img
          src="bg-main-mobile.png"
          alt="background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex justify-around flex-col  max-w-[343px] pt-24 lg:max-w-[1050px] lg:flex-row m-auto">
        <div className="flex flex-col-reverse lg:basis-1/2 lg:flex-col lg:gap-8">
          <Card info={info} side="front" logo={'card-logo.svg'}></Card>
          <Card info={info} side="back"></Card>
        </div>
        <Form handleInfo={handleInfo}></Form>
      </div>
    </main>
  )
}

export default App
