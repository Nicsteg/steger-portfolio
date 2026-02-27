import { Suspense, lazy } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  return (
    <main className='h-full bg-slate-300/20'>
      <Router>
        <Navbar />
        <Suspense fallback={<div className='max-container'>Loading page...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  )
}

export default App
