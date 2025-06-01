import { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { WiStars } from "react-icons/wi";
import Image from "../assets/image.png";
import Footer from "../components/Footer";

const categories = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

const Home = () => {
  const [selected, setSelected] = useState("All");
  return (
    <Container>
      <Navbar />
      <div className="mb-[300px]">
        <div className="w-[273px] h-[42px] rounded-full border border-gray-300 bg-[#4f44e521] mx-auto mt-[114px]">
          <div className="flex items-center justify-center text-[#5044E5] gap-x-[10px] h-full">
            <p className="text-[16px] font-outfit text-center">
              New: AI feature integrated
            </p>
            <WiStars size={28} />
          </div>
        </div>
        <h1 className="font-outfit text-[80px] w-[654px] text-center font-medium text-[#3B3B3B] mx-auto mt-[30px]">
          Your own <span className="text-[#5044E5]">blogging</span> platform.
        </h1>
        <p className="text-[#808080] font-poppins text-base text-center w-[797px] mt-[10px] mx-auto">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it’s one word or a thousand, your story
          starts right here.
        </p>
        <div className="mx-auto flex items-center relative w-[680px] mt-[37px]">
          <input
            className="w-[680px] h-[70px] rounded-xl pl-[22px] outline-none border border-gray-400"
            type="text"
            placeholder="Search blogs"
          />
          <button className="w-[165px] text-white h-[55px] bg-[#5044E5] rounded-xl absolute right-[10px] top-[7px]">
            Search
          </button>
        </div>
        <div className="flex gap-x-[35px] mt-[64px] justify-center">
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-[30px] py-[15px] rounded-full cursor-pointer ${
                selected === cat
                  ? "bg-[#5044E5]"
                  : "bg-[#5044E533] border border-[#5044E5]"
              }`}
            >
              <p
                className={`text-center font-medium text-base ${
                  selected === cat ? "text-white" : "text-[#5044E5]"
                }`}
              >
                {cat}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-[66px] flex justify-between flex-wrap gap-y-[65px]">
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
          <div className="w-[360px] h-[450px]">
            <img src={Image} alt="Image" />
            <div className="h-[260px] rounded-b-lg shadow-2xl pl-[28px]">
              <div className="inline-block mx-auto bg-[#5044E533] border border-[#5044E5] rounded-full mt-4">
                <p className="text-[#5044E5] font-medium px-[10px] py-[5px]">
                  Lifestyle
                </p>
              </div>
              <p className="text-[20px] font-medium w-[300px] text-[#404040] mt-[20px]">
                A detailed step by step guide to manage your lifestyle
              </p>
              <p className="text-base w-[300px] text-gray-400 mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting..
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-4xl text-[#373737] font-medium text-center mt-[180px]">
          Never Miss a Blog!
        </h2>
        <p className="text-[18px] text-[#9A9A9A] text-center mt-[18px]">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>
        <div className="mx-auto flex items-center relative w-[680px] mt-[37px]">
          <input
            className="w-[680px] h-[70px] rounded-l-xl pl-[22px] outline-none border border-gray-300"
            type="text"
            placeholder="Enter your email id"
          />
          <button className="w-[165px] text-white h-[70px] bg-[#5044E5] rounded-r-xl">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
