import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/ankit1.jpg';
const About = () => {
  return (
     <section id='about' className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'>
    <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
      <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
        Hi, I am
      </h1>
      <h3 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight'>
        Narayan Gawas
      </h3>
      <h4 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
        <span className='text-white'>
        I am a
        </span>
     <Typewriter
    words={[
      ' Fullstack Developer',
      ' Java Developer',
      ' UI/UX Designer',
      ' Coder',
    ]}
    loop={0}
    cursor
    cursorStyle='_'
    typeSpeed={100}
    deleteSpeed={50}
    delaySpeed={2000}
  />
      </h4>
      {/* About me para */}
      <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer. I build scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* resume button */}
          <a href="/new_resume.pdf"
              
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
          style={{
            background:'linear-gradient(90deg,#8245ec,#a855f7)',
            boxShadow:'0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec',
  
          }}
         > DOWNLOAD CV</a>
      </div>
      {/* right side */}
      <div className='md:w-1/2 flex justify-center md:justify-end ml-8 '>
     <Tilt className='w-40 h-40 sm:w-60 sm:h-60 md:w-[25rem] md:h-[25rem] border-4 border-purple-700 rounded-full'
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      perspective={1000}
      scale={1.05}
      transitionSpeed={1000}
      gyroscope={true}

     >
      <img src={profileImage} alt='Narayan Gawas'
      className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
      </Tilt> 
      </div>
    </div>
     </section>
  )
}

export default About
