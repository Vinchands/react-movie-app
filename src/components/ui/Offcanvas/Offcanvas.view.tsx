import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

interface OffcanvasProps {
  open: boolean
  onClose: () => void
}

export default function Offcanvas({ open = false, onClose }: OffcanvasProps) {
  const offcanvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose])

  return (
    <div
      ref={offcanvasRef}
      className={`absolute flex flex-col top-0 left-0 min-h-screen gap-y-3 p-5 backdrop-blur backdrop-brightness-90 transition-all ease-in-out duration-300 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div>
        <button onClick={onClose}>X</button>
        <h1 className="font-bold text-2xl">Watcha.</h1>
      </div>
      <div className="border border-black" />
      <nav className="flex flex-col gap-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'p-2 bg-black/50 rounded text-white' : 'p-2'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'p-2 bg-black/50 rounded text-white' : 'p-2'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? 'p-2 bg-black/50 rounded text-white' : 'p-2'
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive ? 'p-2 bg-black/50 rounded text-white' : 'p-2'
          }
        >
          TV Shows
        </NavLink>
      </nav>
      <div className="mt-auto">Copyright</div>
    </div>
  )
}
