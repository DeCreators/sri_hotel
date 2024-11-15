import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between  md:py-12 md:flex-row'>
      <div className='flex flex-col gap-2 md:gap-3 text-[35px] md:text-7xl'>
        <div className='flex gap-2 md:gap-3'>
        <span className='bg-white text-primetext font-semibold rounded-md md:rounded-xl px-2 py-2 md:py-3'>One</span>
        <span className='bg-white text-primetext font-semibold rounded-md md:rounded-xl px-2 py-2 md:py-3'>Stop</span>
        </div>
        <div className='flex gap-2'>
        <span className='bg-white text-primetext rounded-md md:rounded-xl px-2 py-2 md:py-3 font-semibold'>Staying</span>
        <span className='bg-white text-primetext rounded-md md:rounded-xl px-2 py-2 md:py-3 font-semibold'>Place</span>
        </div>
        <div className='flex gap-2 md:gap-3'>
        <span className='bg-white text-primetext font-semibold rounded-md md:rounded-xl px-2 py-2 md:py-3'>For</span>
        <span className='bg-prime text-primetext font-semibold rounded-md md:rounded-xl px-2 py-2 md:py-3'>Traveler's</span>
        </div>
        <div className='text-xl font-semibold md:text-4xl mt-4'>
        "Unleash Your Explorer: <br /> Travel anywhere<br /> With out taking care about hotel <br /> Rooms – All the comfort you need."
        </div>
        <div className='flex gap-6 md:gap-12 my-5 md:mt-[7.5rem]'>
        <button className='py-2 px-4 text-sm md:py-3 md:px-6 bg-prime md:text-xl text-primetext font-semibold rounded-xl md:rounded-2xl'>Demo Store</button>
        <div className='bg-gradient-to-r to-grad1 from-grad2 rounded-xl md:rounded-2xl text-transparent text-sm md:text-xl font-semibold p-[2px] md:p-[3px]'>
        <button className='flex w-full py-2 px-4 md:px-6 md:py-3 bg-black rounded-[10px] md:rounded-xl'>
            <span className='bg-gradient-to-r to-grad1 from-grad2 bg-clip-text'>Join Waitlist</span>
        </button>
        </div>
        </div>
      </div>
      <div>
        <img src="/hero.png" alt="hero image" className='pl-8 object-cover'/>
      </div>
    </div>
  )
}

export default Hero
