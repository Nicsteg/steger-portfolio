import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='flex items-center gap-3'>
        <NavLink to='/' className='flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md'>
          <p className='blue-gradient_text'>NS</p>
        </NavLink>
        <span className='rounded-md bg-red-600 px-2 py-1 text-xs font-bold uppercase tracking-wide text-white'>
          Updated Live ✅
        </span>
      </div>

      <nav className='flex gap-7 text-lg font-medium'>
        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
