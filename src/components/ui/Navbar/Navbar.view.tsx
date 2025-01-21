import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Offcanvas } from '@components/ui'

export default function Navbar() {
  
  const [offcanvasOpen, setOffcanvasOpen] = useState(false)
  
  function handleOpenOffcanvas() {
    setOffcanvasOpen(prev => !prev)
  }
  
  return (
    <header className="flex justify-between sm:justify-around items-center p-3">
      <div>
        <Link to="/" className="font-bold text-2xl">Watcha.</Link>
      </div>
      <nav className="flex items-center gap-x-5">
        <NavLink to="/" className="hidden sm:inline">Home</NavLink>
        <NavLink to="/" className="hidden sm:inline">About</NavLink>
        <NavLink to="/" className="hidden sm:inline">Movies</NavLink>
        <NavLink to="/" className="hidden sm:inline">TV Shows</NavLink>
        <div>
          <button>Menu</button>
          <Offcanvas open={offcanvasOpen} />
        </div>
      </nav>
    </header>
  )
}
