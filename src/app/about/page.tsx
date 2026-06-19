import Image from 'next/image'
import heroImg from '@/public/images/hero.png'
import layersImg from '@/public/images/capas.png'
import worldImg from '@/public/images/world.png'
import flagImg from '@/public/images/flag.png'

const page = () => {
  return (
    <section className='w-[85%] mx-auto py-30'>
      <article className='md:mx-30 md:flex md:gap-25'>
        <div className='m-auto aspect-square rounded-md relative md:w-[50%] md:m-0 '>
          <Image
            src={heroImg}
            alt='3D printing models img'
            fill
            priority
            className='object-contain rounded-xs'
          />
        </div>
        <div className='  m-auto py-5  my-5 text-justify flex flex-col gap-5 border-b-2 border-slate-200 md:w-[50%] md:border-none'>
          <h4 className='text-xs font-semibold md:text-2xl'>
            ABOUT PRINTFORGE
          </h4>
          <h1 className='font-montserrat text-4xl font-bold md:text-6xl md:text-left'>
            Empowering makers worlwide
          </h1>
          <p className='text-xl md:text-3xl'>
            Founded in 2023, PrintForge has quickly become the go-to platform
            for 3D printing enthusiasts, makers, and professional designers to
            share and discover amazing STL files for 3D printing. Our mission is
            to foster a vibrant community where creativity meets technology,
            enabling anyone to bring their ideas to life through 3D printing.
          </p>
          <p className='text-xl md:text-3xl'>
            Our mission is to foster a vibrant community where creativity meets
            technology, enabling anyone to bring their ideas to life through 3D
            printing
          </p>
        </div>
      </article>
      <article className='m-auto py-5  my-5 text-justify flex flex-col gap-5 md:my-15 md:px-50 md:py-15 md:flex-row md:gap-35 md:border-y-2 md:border-slate-200'>
        <div className=' '>
          <div className='relative flex  gap-2 items-center'>
            <div className='relative h-8 w-8'>
              <Image
                src={layersImg}
                alt='Layers icon'
                fill
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl my-3 md:text-3xl'>
              100K+ Models
            </h3>
          </div>
          <p className='text-lg leading-5 md:text-2xl md:leading-7'>
            Access our vast library of community-created 3D models, from
            practical tools to artistic creations.
          </p>
        </div>
        <div>
          <div className='relative flex  gap-2 items-center'>
            <div className='relative  h-8 w-8'>
              <Image
                src={worldImg}
                alt='world icon'
                fill
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl my-3 md:text-3xl '>
              Active Community
            </h3>
          </div>
          <p className='text-lg leading-5 md:text-2xl md:leading-7'>
            Join thousands of makers who share tips, provide feedback, and
            collaborate on projects
          </p>
        </div>
        <div>
          <div className='relative flex  gap-2 items-center'>
            <div className='relative  h-8 w-8'>
              <Image
                src={flagImg}
                alt='Flag Icon'
                fill
                className='object-contain'
              />
            </div>
            <h3 className='font-montserrat font-bold text-2xl my-3 md:text-3xl'>
              Free to Use
            </h3>
          </div>
          <p className='text-lg leading-5 md:text-2xl md:leading-7'>
            Most models are free to download, with optional premium features for
            power users.
          </p>
        </div>
      </article>
      <article className=' mx-auto py-5  my-5 text-justify flex flex-col gap-5 md:w-[50%]  md:mb-20'>
        <h1 className='font-montserrat text-4xl font-bold'>Our vision</h1>
        <p className='text-xl md:text-3xl'>
          At PrintForge, we believe that 3D printing is revolutionizing the way
          we create, prototype, and manufacture. Our platform serves as a bridge
          between designers and makers, enabling the sharing of knowledge and
          creativity that pushes the boundaries of what&apos;s possible with 3D
          printing.
        </p>
        <div className=' mx-auto my-5 w-[70%] h-1 border-b-2'></div>
        <p className='text-xl md:text-3xl'>
          Whether you&apos;re a hobbyist looking for your next weekend project,
          an educator seeking teaching materials, or a professional designer
          wanting to share your creations, PrintForge provides the tools and
          community to support your local artist.
        </p>
      </article>
      <div className='mx-auto my-5 h-30 w-30 relative'>
        <Image
          src='/images/smallLogo.png'
          alt='Small Logo'
          fill
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default page
