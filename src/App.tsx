import { FAQ, Footer, Header, MostPopular, OurSubscribers, RecentNews, Testimonials } from "./components/Comp";

export default function App() {
  return (
    
      <div className="container sm:mx-auto mx-1 mt-6">
        <div className="sticky top-0 z-50 bg-white">

        <Header/>
        <hr className="border-1 border-slate-300"/>
        
        </div>
        <RecentNews/>
        <MostPopular/>
        <FAQ/>
        <Testimonials/>
        <OurSubscribers/>
        <Footer/>
      </div>

  )
}