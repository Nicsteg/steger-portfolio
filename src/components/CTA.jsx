import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />Let&apos;s work together.
      </p>
      <Link to='/contact' className='btn'>
        Get in touch
      </Link>
    </section>
  )
}

export default CTA