import { useRef, useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ClientCard from "./ClientCard";

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsCount = 5; // Number of testimonials
  const cardWidth = 300; // Width of each testimonial card

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Update the active index
      const newIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
      setActiveIndex(Math.max(0, Math.min(newIndex, testimonialsCount - 1)));
    }
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollTo = cardWidth * index; // Adjust based on the width of your cards
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Add scroll listener to track current scroll position
  useEffect(() => {
    const handleScrollUpdate = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScrollUpdate);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScrollUpdate);
      }
    };
  }, [cardWidth]);

  return (
    <section className="flex flex-col items-center gap-4 mt-40">
      <div className="w-[80%] text-center">
        <h1 className="hedertext text-4xl">What Our Clients Say About Us</h1>
      </div>

      {/* Testimonials Scrollable Section */}
      <div className="flex w-full overflow-x-scroll scroll-smooth gap-4 scrollbar-hide mt-10" ref={scrollRef} >
        {[...Array(testimonialsCount)].map((_, index) => (
          <ClientCard
            key={index}
            name="Nardos Teshome"
            image="/user.jpg"
            description="The DoWell Newsletter is the first thing I check in the morning. It's concise, informative, and always highlights the most important news. It’s like having a personal news assistant!"
            header="It was a very good experience"
            link="http://google.com"
            linkText="Read More"
            className={`w-[25%] flex-shrink-0 transition-transform ${
              activeIndex === index ? "zoomed" : "normal"
            }`}
          />
        ))}
      </div>

      {/* Scroll Icons and Dots Indicators */}
      <div className="flex items-center justify-center mt-8 gap-4">
        <button
          onClick={() => handleScroll("left")}
          className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
          disabled={activeIndex === 0} // Disable if at the first item
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-2">
          {[...Array(testimonialsCount)].map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700"
          disabled={activeIndex === testimonialsCount - 1}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
