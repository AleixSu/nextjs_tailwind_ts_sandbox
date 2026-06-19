import Image from 'next/image'
import heroImg from '@/public/images/hero.png'

const Hero = () => {
  return (
    <section className='px-5 md:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-10 w-full overflow-hidden'>
      <article className='flex-1 flex flex-col gap-10 w-full justify-center'>
        <div className='flex flex-col gap-5'>
          <h4 className='hidden sm:block text-slate-500 font-semibold tracking-wider text-sm'>
            YOUR GO-TO PLATFORM FOR 3D PRINTING FILES
          </h4>
          <h1 className='text-4xl font-montserrat font-bold tracking-wide md:text-5xl lg:text-6xl text-slate-900'>
            Discover what&apos;s possible with 3D printing
          </h1>
          <h2 className='text-lg leading-6.5 md:text-xl lg:text-2xl text-slate-600'>
            Join our community of creators and explore a vast library of
            user-submitted models.
          </h2>
        </div>
        <div>
          <button className='p-3 border-2 border-solid border-slate-900 font-bold cursor-pointer text-sm tracking-wider hover:bg-slate-900 hover:text-white transition-colors duration-200'>
            BROWSE MODELS
          </button>
        </div>
      </article>

      <article className='flex-1 flex justify-center items-center w-full h-full max-h-[80%] md:max-h-full'>
        <div className='relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[650px] aspect-square overflow-hidden rounded-full z-0 shadow-sm max-h-full'>
          <Image
            src={heroImg}
            alt='3D printing models background'
            fill
            priority
            className='object-cover'
          />
          <div className='absolute bg-slate-50 h-[23.3%] w-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 pointer-events-none' />

          <div className='absolute bg-slate-50 w-[39.4%] h-[39.4%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none' />
        </div>
      </article>
    </section>
  )
}

export default Hero
