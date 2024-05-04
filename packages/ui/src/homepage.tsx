export const Homepage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className="border rounded-xl  shadow mx-4 my-8 h-[600px] flex flex-col justify-between">
        <div className="ml-4 mt-4">
          <div className="text-2xl text-gray-500">Balance</div>
          <div className="text-4xl">$20,000</div>
        </div>
        <div className="ml-4 my-4 flex justify-center gap-2">
          <button className="bg-blue-500 p-2 text-white font-semibold rounded-xl hover:bg-blue-600">Add Money</button>
          <button className="bg-red-600 p-2 text-white font-semibold rounded-xl hover:bg-red-700">Withdraw Money</button>
        </div>
      </div>
    </div>
  );
};
