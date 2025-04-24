import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa6";
import "./BookCover.css";

const CoverCard = ({ title, cardColor }) => {
  return (
    <div className="card-wrapper w-[21rem] h-[14rem]">
      <div
        className="w-full h-full card-background shadow-background"
        style={{ backgroundColor: cardColor }}
      ></div>

      <div className="card-content">
        <p className="text-[#075F8F] text-lg p-4 font-semibold">{title}</p>
        <div className="quote-left">
          <FaQuoteLeft style={{ color: cardColor }} size={25} />
        </div>
        <div className="quote-right">
          <FaQuoteRight style={{ color: cardColor }} size={25} />
        </div>
      </div>
    </div>
  );
};

export default CoverCard;
