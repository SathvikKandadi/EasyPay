import { Appbar } from "./appbar";
import { HomepageCard } from "./homepagecard";
import { Sidebar } from "./sidebar";

export const Homepage = () => {
  return (
    <div className='w-full h-screen'>
      <Appbar></Appbar>
      <div className='grid grid-cols-10 h-full'>
        <div className='grid col-span-2 border-r-2 '>
          <Sidebar></Sidebar>
        </div>
        <div className='grid col-span-8 h-full'>
          <HomepageCard>
            <h1 className='ml-4 mt-8 mb-4 text-5xl text-blue-500 font-semibold'>Good afternoon, Sathvik Kandadi</h1>
          </HomepageCard>
        </div>
      </div>
    </div>
  );
};
