import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiGift } from "react-icons/ci";
import { BiTransfer } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Sidebar = () => {
  return (
    <div className="text-2xl">
      <div className="grid grid-cols-2 my-4 mx-8  gap-2 cursor-pointer hover:text-blue-500">
        <GoHome className="text-3xl col-end-1"/>
        Home
      </div>
      <div className="grid grid-cols-2 my-4 mx-8  gap-2 cursor-pointer hover:text-blue-500">
        <CiSearch className="text-3xl font-black col-end-1 " />
        Explore
      </div>
      <div className="grid grid-cols-2 my-4 mx-8 gap-2 cursor-pointer hover:text-blue-500">
        <CiGift className="text-3xl col-end-1"/>
        Rewards
      </div>
      <div className="grid grid-cols-2 my-4 mx-8 gap-2 cursor-pointer hover:text-blue-500">
        <BiTransfer className="text-3xl col-end-1"/>
        Transfer
      </div>
      <div className="grid grid-cols-2 my-4 mx-8 gap-2 cursor-pointer hover:text-blue-500">
        <AiOutlineClockCircle className="text-3xl col-end-1"/>
        Transactions
      </div>
    </div>
  );
};
