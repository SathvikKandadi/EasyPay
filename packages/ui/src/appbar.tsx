import { IoPersonCircleOutline } from "react-icons/io5";

export const Appbar = () => {
  return (
    <div className="flex justify-between p-4 border-b-2">
      <div className="text-2xl font-semibold text-blue-500">EazyPay</div>
      <div className="flex gap-4">
        <button className="bg-blue-500 font-semibold text-white rounded-xl p-2 hover:bg-blue-600">Add Money</button>
        <IoPersonCircleOutline className="text-4xl cursor-pointer hover:bg-blue-600 rounded-full hover:text-white"/>
      </div>
    </div>
  );
};
