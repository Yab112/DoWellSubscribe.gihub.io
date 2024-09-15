import { FaArrowRight } from "react-icons/fa";
import SubscribersCard from "./SubscribersCard";

const OurSubscribers = () => {
  return (
    <section className="flex w-[90%] flex-col gap-10 mt-20">
      {/* Header Section */}
      <div className="flex justify-between p-4">
        <h1 className="hedertext">Our Subscribers</h1>
        <div className="flex gap-2 items-center ">
          <p className="text-center font-semibold">See all</p>
          <button className="border-none bg-black text-white p-2 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Section */}
      
      <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4">
        <SubscribersCard
          name="yabibal"
          email="****@gmail.com"
          date="12/3/2024"
          status="active"
          avatar="/user.jpg"
        />
        <SubscribersCard
          name="yabibal"
          email="****@gmail.com"
          date="12/3/2024"
          status="active"
          avatar="/user.jpg"
        />
        <SubscribersCard
          name="yabibal"
          email="****@gmail.com"
          date="12/3/2024"
          status="active"
          avatar="/user.jpg"
        />
        <SubscribersCard
          name="yabibal"
          email="****@gmail.com"
          date="12/3/2024"
          status="active"
          avatar="/user.jpg"
        />
        <SubscribersCard
          name="yabibal"
          email="****@gmail.com"
          date="12/3/2024"
          status="active"
          avatar="/user.jpg"
        />
      </div>
    </section>
  );
};

export default OurSubscribers;
