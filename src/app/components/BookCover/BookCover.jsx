import React from "react";
import appLogo from "../../../../public/image/appLogo.jpg";
import newApp1 from "../../../../public/image/NewApp1.jpg";
import newApp2 from "../../../../public/image/NewApp2.jpg";
import Image from "next/image";
import Link from "next/link";
import CoverCard from "./CoverCard";

const BookCover = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-full mx-auto pt-5 ">
      <div className="mb-20">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-10 text-[#075f8f] drop-shadow-md">
          English speaking course in bangladesh :-
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-10 mb-14 justify-center items-center">
          <CoverCard
            title="মাত্র ১০ টি অধ্যায় - শেষ করে আপনি upgrade করুন spoken Reading writing & listening"
            cardColor="#01C4BE"
          />
          <CoverCard
            title=" অতি অল্প সময়ে ইংরেজিতে অনর্গল কথা বলতে zaman স্যারের পেইড কোর্সটি
              হতে পারে আপনার জন্য উপযুক্ত"
            cardColor="#07B4D6"
          />
          
        </div>
        <div className="w-full flex flex-col md:flex-row my-10 gap-10 justify-center">
        
          <CoverCard
            title=" Spoken English শিখতে আগ্রহী অথবা IELTS প্রত্যাশী, ইউনিভার্সিটি,
              কলেজ, স্কুল ও মাদ্রাসা সহ যেকোন বয়সের শিক্ষার্থীদের জন্য কোর্স টি
              উপযুক্ত"
            cardColor="#D30F1C"
          />
          <CoverCard
            title=" অতি আগ্রহী শিক্ষার্থী অথবা সিরিয়াস লার্নারদের জন্য রয়েছে Zaman
              স্যারের paid কোর্স ।সরাসরি ক্লাসে ভর্তি হতে নিচের contact option
              থেকে যোগাযোগ করুন"
            cardColor="#F2B04A"
          />
        </div>
      </div>

      {/* ---------- New Styled Card Will Be here------------- */}

      {/* ----------------------------------------------------- */}

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
