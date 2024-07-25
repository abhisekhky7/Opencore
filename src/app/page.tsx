import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import MainTitle from "@/components/MainTitle";
import SearchBar from "@/components/SearchBar";
import Tabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="mx-auto mt-5 mb-[4%]">
        <MainTitle />
      </div>

      <div className=" mx-auto border-2 sm:p-5  w-full sm:w-[80%]">
        <div className="border-2 rounded-lg p-2 mb-[3%]">
          <SearchBar />
        </div>
        <div className="mb-[4%]">
          <Tabs />
        </div>
        <div>
          <Cards />
        </div>
      </div>

    <div className="w-[80%] my-[5%]  mx-auto">  <Banner /></div>
    </div>
  );
}
