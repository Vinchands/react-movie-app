import { Navbar, Footer, } from '@components/ui'
import { Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
