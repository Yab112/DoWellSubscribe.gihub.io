import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-[60vw] ">
        <AccordionItem value="item-1" className="hover:bg-slate-100">
          <AccordionTrigger>
            <div className="flex items-center gap-2 text-center ">
                <h1 className="text-3xl font-semibold text-slate-400">01</h1>
                <h1 className="text-xl font-bold">How can I subscribe to the newsletter? </h1> 
            </div>
            </AccordionTrigger>
          <AccordionContent>
             <p className="text-center text-slate-600 text-xl ">Click the "Subscribe" button   | |    at the top, and enter your email.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="hover:bg-slate-100">
          <AccordionTrigger>
          <div className="flex items-center gap-2 text-center ">
                <h1 className="text-3xl font-semibold text-slate-400">02</h1>
                <h1 className="text-xl font-bold">How can I subscribe to the newsletter? </h1> 
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <p className="text-center text-slate-600 text-xl ">Click the "Subscribe" button   | |    at the top, and enter your email.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="hover:bg-slate-100">
          <AccordionTrigger>
          <div className="flex items-center gap-2 text-center ">
                <h1 className="text-3xl font-semibold text-slate-400">03</h1>
                <h1 className="text-xl font-bold">How can I subscribe to the newsletter? </h1> 
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <p className="text-center text-slate-600 text-xl ">Click the "Subscribe" button   | |    at the top, and enter your email.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  