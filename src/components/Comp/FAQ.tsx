import { AccordionDemo } from "./Accordion"

const FAQ = () => {
  return (
    <section className="mx-auto mt-20 flex gap-4 p-2 flex-col">
       <div className="flex flex-col gap-2 items-center justify-center w-full text-center">
          <h1 className="hedertext text-4xl">We are here to answer all your questions</h1>
          <p className="hedertext">FAQ</p>
       </div>
       <div className="mt-8 p-10 mx-10">
          <AccordionDemo/>
          
       </div>
    </section>
  )
}

export default FAQ
