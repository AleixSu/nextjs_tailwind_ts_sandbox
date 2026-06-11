import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-grey-100 h-180 p-5 flex flex-col justify-between'>
      <article className='flex flex-col gap-10'>
        <div className='flex flex-col gap-5'>
          <h4 className='hidden sm:block'>
            YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
          </h4>
          <h1 className='text-4xl font-montserrat font-bold tracking-wide'>
            Discover what&apos;s possible with 3D printing
          </h1>
          <h2 className='text-lg s leading-6.5'>
            Join our community of creators and explore a vas library of
            user-submitted models.
          </h2>
        </div>
        <div>
          <button className='p-2 border-2 border-solid font-semibold cursor-pointer'>
            BROWSE MODELS
          </button>
        </div>
      </article>
      <article className=' flex justify-center align-center'>
        <div className='relative w-[330px] h-[330px] overflow-hidden rounded-full'>
          {/* Capa Inferior (z-0): Tu fotografía rectangular normal */}
          <Image
            src='/images/hero.png'
            alt='3D printing models background'
            fill
            priority
            className='object-cover z-0'
          />
        </div>
      </article>
    </section>
  )
}

export default Hero
