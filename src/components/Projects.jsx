import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

return (
    <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto py-8 px-4 md:px-16 lg:px-32 my-16 w-full overflow-hidden"
        id="Projects"
    >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
            Sizes
            <span className="underline underline-offset-4 decoration-1 font-light"></span>
        </h1>
        <p className="text-center text-gray-500 mb-8 max-w-xs sm:max-w-md mx-auto">
            Golf View Property Hapur
        </p>

        {/* Slider buttons */}
        <div className="flex justify-end items-center mb-6 gap-2">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={prevProject}
                className="p-2 sm:p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
                aria-label="Previous Project"
            >
                <img
                    src={assets.left_arrow}
                    alt="Previous"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                />
            </motion.button>
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={nextProject}
                className="p-2 sm:p-3 bg-gray-200 rounded hover:bg-gray-300 transition"
                aria-label="Next Project"
            >
                <img
                    src={assets.right_arrow}
                    alt="Next"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                />
            </motion.button>
        </div>

        {/* Project slider container */}
        <div className="overflow-hidden">
            <motion.div
                className="flex gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                }}
            >
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="w-full h-52 sm:h-64 flex items-center justify-center mb-8 bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                            />
                        </div>
                        {/* <div className="absolute left-0 right-0 bottom-2 flex justify-center">
                                                    <div className="inline-block bg-white w-11/12 sm:w-3/4 px-3 py-2 shadow-lg rounded">
                                                            <h2 className="text-base sm:text-lg font-semibold text-gray-800 text-center">
                                                                    {project.title}
                                                            </h2>
                                                            <p className="text-gray-500 text-xs sm:text-sm text-center">
                                                                    {project.price} <span className="px-1">|</span> {project.location}
                                                            </p>
                                                    </div>
                                            </div> */}
                    </motion.div>
                ))}
            </motion.div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-8"
        >
            <h2 className="text-lg sm:text-2xl font-bold mb-3 text-gray-800">
                Hapur Plots for Sale: Size-Wise Investment Options
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Small Budget, Big Dreams: Hapur mein sabse kam budget mein ghar banana
                chahte hain? Humare paas 60 Square Yard ke RERA Approved residential
                plots hain. Yeh size first-time buyers aur chhoti family ke liye
                perfect hai. HPDA approved aur achhi connectivity ke saath. Investment
                Opportunity: Kam investment mein turant registry aur possession waale
                60 gaj ke plots Hapur mein uplabdh hain.
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-8"
        >
            <h2 className="text-lg sm:text-2xl font-bold mb-3 text-gray-800">
                100 Square Yard Plots in near noida
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                The Sweet Spot: 100 Square Yard (100 Gaj) ka plot space aur budget ka
                behtareen balance deta hai. Is size mein aap ek aaramdayak 2-3 BHK
                ghar aasaani se bana sakte hain.Gated Community Options: Humare 100
                gaj ke residential plots Hapur ki gated communities mein hain, jahaan
                park, security, aur road jaise amenities hain.High Return Potential:
                NH-9 (Delhi-Hapur Highway) ke paas sthit 100 sq yard plots mein
                shandaar return on investment (ROI) milta hai.{" "}
            </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-8"
        >
            <h2 className="text-lg sm:text-2xl font-bold mb-3 text-gray-800">
                Premium 200 Gaj Plots & Farmhouse Land in Hapur
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Luxury aur Space: Agar aapko ek bada ghar, lawn, ya shuruwaati farmhouse setup ke liye zameen chahiye, toh 200 Square Yard (200 Gaj) plot sabse achha hai.Golf View City Advantage: Humare 200 gaj ke plots aisi location par hain jahaan se aap golf course view aur sabhi premium resort-style amenities ka fayda utha sakte hain.Exclusive Inventory: Humare paas corner plots (200 gaj) aur prime location waale bade residential plots ki limited inventory hai. Investment aur living, dono ke liye perfect.
            </p>
        </motion.div>
        {/* About Us Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-8"
        >
            <h1 className="text-lg sm:text-2xl font-bold mb-3 text-gray-900">Golf View City: Hapur mein Luxury Living Ka Naya Pata</h1>
            <h2 className="text-lg sm:text-2xl font-sans mb-3 text-gray-800">
                Golf View City: Jahaan Har Din Vacation Jaisa Mehsoos Hota Hai
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Golf View City Hapur aur NH-9 (Delhi-Hapur Highway) corridor par sirf ek residential project nahi hai; yeh ek lifestyle destination hai. Humne golf course living ke exclusive concept ko aise design kiya hai jahan aapko shahar ki suvidhaon ke saath-saath prakriti ki shaanti bhi milti hai.
                We are dedicated to providing quality residential plots and real estate solutions in Hapur and nearby regions. With years of experience and a commitment to transparency, our team ensures every client finds the perfect property for their needs. Whether you are a first-time buyer or an investor, we offer a range of options backed by trusted approvals and excellent connectivity. Your dream home journey starts here.
            </p>
        </motion.div>
    </motion.div>
);
};

export default Projects;

