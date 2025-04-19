import React from 'react'
import { motion } from 'framer-motion'
import Coffee from "../../assets/coffee/coffee.png"
import Coffee2 from "../../assets/coffee/coffee2.png"

const servicesData = [
  {
    id: 1,
    image: Coffee,
    title: "Black Coffee",
    subtitle: "Rich aroma with a bold and intense coffee flavor."
  },
  {
    id: 2,
    image: Coffee2,
    title: "Cappuccino",
    subtitle: "A creamy blend of espresso, milk, and soft foam."
  },
  {
    id: 3,
    image: Coffee,
    title: "Latte",
    subtitle: "Smooth espresso mixed with warm, steamed milk."
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6, // 0.2s after paragraph
      staggerChildren: 0.2
    }
  }
}

const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* Header Section */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className='text-3xl font-bold text-lightGray'
        >
          Bold Brews, <span className='text-primary'>Warm Vibes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}
          className="text-sm opacity-50"
        >
          Discover the rich aroma and bold flavors of our hand-crafted brews. Whether you're starting your day or unwinding, each cup is made to elevate your moment.
        </motion.p>
      </div>

      {/* Card Section */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {servicesData.map(service => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            viewport={{ once: false }}
            className='text-center p-4 space-y-6'
          >
            <img
              src={service.image}
              alt={service.title}
              className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'
            />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
              <p className='text-darkGray'>{service.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
