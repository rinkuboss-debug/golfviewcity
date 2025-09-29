import React from 'react'
// import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonails = () => {
  return (
    <motion.div 
        initial={{opacity: 0, x:100}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Location'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'><span className='underline underline-offset-4 decoration-1 under font-light'>Location</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Golf View City (Aspire Golf City) Hapur</p>


<div className="max-w-xl mx-auto bg-white rounded shadow p-6 mt-8">
  <h2 className="text-lg font-semibold mb-2">Our Locations</h2>
  <p className="text-gray-700 mb-2">We are present in:</p>
  <ul className="list-disc list-inside text-gray-600 space-y-1">
    <li>NH-9 (Delhi–Hapur Highway / Delhi-Meerut Expressway), Pilkhuwa, Nizampur, Hapur, Uttar Pradesh - 245304.</li>
    <li>National Highway 9 (NH-9): Project seedhe NH-9 par sthit hai, jisse Delhi, Ghaziabad, aur Meerut tak seedhi connectivity milti hai.</li>
    <li>Pilkhuwa Railway Station aur Hapur Junction yahaan se nazdeek hain</li>
  </ul>
</div>
<div className="max-w-xl mx-auto bg-white rounded shadow p-6 mt-8">
  <h2 className="text-lg font-semibold mb-2">Approval Details</h2>
  <p className="text-gray-700 mb-2">HPDA Approval Status</p>
  <ul className="list-disc list-inside text-gray-600 space-y-1">
    <li>HPDA Approved aur RERA Registered.</li>
    <li>Hapur Pilkhuwa Development Authority (HPDA)</li>
    <li>HPDA aur RERA ki manzoori ka matlab hai ki aapka investment poori tarah surakshit, niyamit (regulated) aur kanooni (legal) hai. Saare zaroori documents aur development plans authority dwara jaanche gaye hain.</li>
  </ul>
</div>
    </motion.div>
  )
}

export default Testimonails
