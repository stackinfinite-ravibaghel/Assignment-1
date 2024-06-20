import Image from 'next/image'

export default function CategoryImage () {
  return (
    <div className='flex justify-center'>
          <Image
            src="/category/aa.webp"
            width={50}
            height={50}
            alt="Picture of the author"
            className="content-center"
          />
        </div>
  )
}