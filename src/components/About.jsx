
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

            
            <p className='my-10 max-w-lg'>At Golf View City Real Estate, we don't just sell homes; we curate a lifestyle. Our mission is to connect discerning buyers with exclusive, premium properties that offer the perfect blend of modern luxury and access to world-class golf amenities. We are the dedicated specialists in golf course property in NH- Hapur</p>
            <p className='my-10 max-w-lg'>Founded on a passion for exceptional architecture and the serene beauty of the fairway, we recognized a need for specialized expertise in this unique real estate sector. Our journey began with a commitment to offering unparalleled market insight, transparency, and tailored service to every client looking for a home with a view of the golf course.</p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
