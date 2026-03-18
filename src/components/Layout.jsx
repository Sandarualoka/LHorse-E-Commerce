import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1 w-full  px-4 py-8 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
