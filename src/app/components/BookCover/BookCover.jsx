import React from "react";
import appLogo from "../../../../public/image/appLogo.jpg";
import newApp1 from "../../../../public/image/NewApp1.jpg";
import newApp2 from "../../../../public/image/NewApp2.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
const BookCover = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-full mx-auto pt-5 ">
      <div className="mb-20">
        <h1
          className="font-bold text-xl md:text-2xl lg:text-3xl mb-5 text-[#075f8f] drop-shadow-md
"
        >
          English speaking course in bangladesh :-
        </h1>

        <div className="flex flex-col gap-y-4 md:py-5">
          <div className="font-semibold text-[15px] md:text-[17px] bg-white text-[#075F8F]   p-3 md:p-4 rounded-lg shadow-md flex gap-2  hover:bg-[#075F8F] hover:text-white">
            <FaQuoteLeft />{" "}
            <p>
              মাত্র ১০ টি অধ্যায় - শেষ করে আপনি upgrade করুন spoken Reading
              writing & listening
            </p>{" "}
            <FaQuoteRight />
          </div>
          <div className="font-semibold text-[15px] md:text-[17px] bg-white text-[#075F8F]   p-3 md:p-4 rounded-lg shadow-md flex gap-2  hover:bg-[#075F8F] hover:text-white">
            <FaQuoteLeft />
            <p>
              Spoken English শিখতে আগ্রহী অথবা IELTS প্রত্যাশী, ইউনিভার্সিটি,
              কলেজ, স্কুল ও মাদ্রাসা সহ যেকোন বয়সের শিক্ষার্থীদের জন্য কোর্স টি
              উপযুক্ত
            </p>
            <FaQuoteRight />
          </div>
          <div className="font-semibold text-[15px] md:text-[17px] bg-white text-[#075F8F]   p-3 md:p-4 rounded-lg shadow-md flex gap-2  hover:bg-[#075F8F] hover:text-white">
            <FaQuoteLeft />{" "}
            <p>
              অতি আগ্রহী শিক্ষার্থী অথবা সিরিয়াস লার্নারদের জন্য রয়েছে Zaman
              স্যারের paid কোর্স ।সরাসরি ক্লাসে ভর্তি হতে নিচের contact option
              থেকে যোগাযোগ করুন
            </p>
            <FaQuoteRight />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-4 my-7">
        <span className="font-semibold text-lg text-blue-500">
          আমাদের App সমূহ play store থেকে ডাউনলোড করতে লিংকে ক্লিক করুন
        </span>
        <div className="flex gap-x-5">
          <Link href="https://play.google.com/store/apps/details?id=com.abmn.englishhub&pcampaignid=web_share">
            <Image
              className="rounded-md shadow-lg"
              width={55}
              src={appLogo}
              alt="Master English Book"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.abmn.learnify&pcampaignid=web_share">
            <Image
              className="rounded-md shadow-lg"
              width={55}
              src={newApp1}
              alt="Learnify"
            />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.abmn.redrosechating&pcampaignid=web_share">
            <Image
              className="rounded-md shadow-lg"
              width={55}
              src={newApp2}
              alt="App logo2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCover;
