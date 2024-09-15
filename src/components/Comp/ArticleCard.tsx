import React from "react";
import { FaCalendar, FaClock, FaEllipsisH } from "react-icons/fa";
import { CalendarDays } from "lucide-react";
import user from "../../../public/user.jpg"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

interface CardProps {
  imageSrc: string;
  date: string;
  readingTime: string;
  title: string;
  description: string;
  authorName: string;
}

const ArticleCard: React.FC<CardProps> = ({
  imageSrc,
  date,
  readingTime,
  title,
  description,
  authorName,
}) => {
  return (
    <div className="max-w-2xl rounded-lg shadow-lg bg-white border-l-2  p-2">
      {/* Image */}
      <div className="relative">
        <img
          src={imageSrc}
          alt="Article"
          className="rounded-t-lg w-full h-auto object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Date and Reading Time with Vertical Line */}
        <div className="flex items-center text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <FaCalendar />
            <span>{date}</span>
          </div>

          {/* Vertical Line */}
          <div className="h-4 border-l border-slate-300 mx-2"></div>

          <div className="flex items-center gap-2">
            <FaClock />
            <span>{readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-black mt-2">{title}</h3>

        {/* Description */}
        <p className="text-slate-500 text-sm mt-2">{description}</p>

        {/* Author and Read more */}
        <div className="flex items-center justify-between mt-4">
          {/* Author */}
          <div className="flex items-center gap-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <img
                  src={user}
                  alt={authorName}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={imageSrc} />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h1 className="text-[18px] text-slate-600 ">yabial</h1>
                    <button className="font-bold text-xl hover:underline">Follow</button>
                    <p className="text-sm">
                      The art of writing simple, clear, and concise code that
                      effectively solves problems.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <span className="text-slate-700 text-sm font-medium">
              {authorName}
            </span>
          </div>

          {/* Read more */}
          <div className="flex items-center gap-1 cursor-pointer text-slate-700 hover:text-black">
            <span className="text-sm font-medium">Read more</span>
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
