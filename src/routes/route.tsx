import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@pages/home/Home.view'
import AppLayout from '@/layouts/AppLayout/AppLayout.view'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
