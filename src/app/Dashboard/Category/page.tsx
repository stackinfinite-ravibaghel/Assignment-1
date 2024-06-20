

import Image from 'next/image'
import CategoryImage from './CategoryImage/page';

export default function Category() {
  return (
    <div className=" w-full bg-gray-300 text-black justify-center  grid grid-cols-12 place-items-center gap-2 p-2 ">

      <div className="w-full  bg-white rounded-md p-2 ">
        
        <CategoryImage />

        <div className='justify-center text-center mt-2'>All Product</div>
      </div>
      
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
        <div className='flex justify-center'>
        <CategoryImage />
        </div>
        
        <div className='justify-center text-center mt-2 '>Mobile</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Display</div>
      </div>

      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Beauty</div>
      </div>

      
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Clothes</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Grocery</div>
      </div>
      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Furniture</div>
      </div>

      <div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
        
      <CategoryImage />
        
        <div className='justify-center text-center mt-2'>Electonics</div>
      </div>
      

    </div>
  );
}
