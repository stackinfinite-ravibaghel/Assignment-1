import Image from 'next/image'

export default function CategoryImage () {
  return (
    

<div className="w-full justify-center  content-center bg-white rounded-md p-2 ">
<div className="flex justify-center">
<div className='flex justify-center'>
          <Image
            src="/category/aa.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
</div>

<div className="justify-center text-center mt-2 ">Mobile</div>
</div>

  )
}