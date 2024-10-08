import { FaArrowRight } from "react-icons/fa"
import ArticleCard from "./ArticleCard"
import image1 from "../../../public/img-1.jpg"
import image2 from "../../../public/img-2.jpg"
import image3 from "../../../public/img-3.jpg"
import image4 from "../../../public/img-4.jpg"
import image5 from "../../../public/img-5.jpg"


const MostPopularnews = () => {
  return (
    <section className="flex mt-4 flex-col gap-10 ">
      <div className="flex justify-between border-b-2 border-slate-300 p-1 ">
        <h1 className="hedertext">Most Popular</h1>
        <div className="flex gap-2 items-center ">
          <p className="text-center font-semibold">See all</p>
          <button className="border-none bg-black p-2 rounded-full">
            <FaArrowRight className="text-white flex justify-center items-center" />
          </button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 line-between gap-4">
        <div className="flex flex-col gap-2">
          <ArticleCard
           imageSrc={image1}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
            
          />
          <hr />
          <ArticleCard
            imageSrc="data:image/jpeg;base64,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"
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
           imageSrc={image2}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
        <hr className="w-40 text-slate-900 text-2xl h-10"/>
        </div>
        <div className="flex flex-col  p-4 w-full mt-10">
          <ArticleCard
           imageSrc={image3}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image4}
          date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image5}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
        </div>
        <div className="flex flex-col gap-2">
          <ArticleCard
            imageSrc={image1}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image2}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image3}
           date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          
        </div>
      </div>


    </section>
  )
}

export default MostPopularnews

