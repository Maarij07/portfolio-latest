import React, { Suspense, useState } from 'react';
import { myProjects } from '../constants';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const projectCount = myProjects.length;

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0, x: -100 },  // Slide out and fade out
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },  // Fade in and slide in
        exit: { opacity: 0, x: 100, transition: { duration: 0.8 } }  // Slide out and fade out
    };

    // Staggered children animation
    const staggerChildrenVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.2, 
                when: "beforeChildren" 
            } 
        }
    };

    // Button hover animation
    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <motion.section
            className='c-space my-20'
            initial="hidden"
            animate="visible"
            exit="exit"
            id="work"
            variants={staggerChildrenVariants}
        >
            <motion.p className='head-text' variants={containerVariants}>
                My Work
            </motion.p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <motion.div
                    className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    key={selectedProjectIndex} // Add key for smooth transitions between projects
                >
                    <motion.div 
                        className="absolute top-0 right-0"
                        initial={{ scale: 0, opacity: 0 }} 
                        animate={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 0.8 }}
                    >
                        <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </motion.div>
                    <motion.div
                        className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                        style={currentProject.logoStyle}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm' />
                    </motion.div>
                    <motion.div className="flex flex-col gap-5 text-white-600 my-5">
                        <motion.p
                            className='text-white font-semibold text-2xl animatedText'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            {currentProject.title}
                        </motion.p>
                        <motion.p
                            className='animatedText'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {currentProject.desc}
                        </motion.p>
                        <motion.p
                            className='animatedText'
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {currentProject.subdesc}
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex items-center justify-between flex-wrap gap-5">
                        <motion.div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <motion.div
                                    className="tech-logo"
                                    key={index}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <img src={tag.path} alt={tag.name} />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.a
                            className='flex items-center gap-2 cursor-pointer text-white-600'
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <p>Check Live Site</p>
                            <img src="/assets/arrow-up.png" className='w-3 h-3' alt="arrow" />
                        </motion.a>
                    </motion.div>
                    <motion.div className="flex justify-between items-center mt-7">
                        <motion.button
                            className='arrow-btn'
                            onClick={() => handleNavigation('previous')}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <img src="/assets/left-arrow.png" alt="Left Arrow" />
                        </motion.button>
                        <motion.button
                            className='arrow-btn'
                            onClick={() => handleNavigation('next')}
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <img src="/assets/right-arrow.png" alt="Right Arrow" />
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={1.8} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;
