import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box text-center'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hello, my name is <span className='font-semibold'> Nicolas Steger</span>
      <br/>
      A University of Hawaii Computer Science graduate.
      </h1>
  ),
  2: (
    <InfoBox
     text= "I am a recent graduate from the University of Hawaii at Manoa with a Bachelor's degree in Computer Science."
      link= "/about"
      btnText= "Learn More about me"
     />
  ),
  3: (
    <InfoBox
     text= "Worked on multiple projects using various technologies such as React, Node.js, and Python. I am always looking for new opportunities to learn and grow as a developer"
      link= "/projects"
      btnText= "Visit portfolio"
     />
  ),
  4: (
    <InfoBox
     text= "Interested in contacting me about hiring or future projects? Feel free to reach out to me through my contact page"
      link= "/contact"
      btnText= "Contact me"
     />
  ),
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
  }

export default HomeInfo