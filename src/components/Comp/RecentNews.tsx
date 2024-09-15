import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "./ArticleCard";
import image1 from "../../../public/img-1.jpg"
import image2 from "../../../public/img-2.jpg"
import image3 from "../../../public/img-3.jpg"
import image4 from "../../../public/img-4.jpg"
import image5 from "../../../public/img-5.jpg"

const RecentNews = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-between p-4">
        <h1 className="hedertext">Recent News</h1>
        <div className="flex gap-2 items-center ">
          <p className="text-center font-semibold">See all</p>
          <button className="border-none bg-black text-white p-2 rounded-full">
            <FaArrowRight />
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
            imageSrc={image1}
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
        <hr className="w-40 text-slate-900 text-2xl h-10"/>
        </div>
        <div className="flex flex-col  p-4 w-full mt-10">
          <ArticleCard
          imageSrc={image4}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image1}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
        </div>
        <div className="flex flex-col gap-2">
          <ArticleCard
          imageSrc={image5}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
          imageSrc={image1}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
          <ArticleCard
            imageSrc={image1}
            date="24 Sep, 2024"
            readingTime="4 min to read"
            title="Global Climate Change Initiatives"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            authorName="Windy Bond"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
