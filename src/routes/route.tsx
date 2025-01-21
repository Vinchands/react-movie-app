import { BrowserRouter, Routes, Route } from 'react-router'
import Home from '@pages/home/Home.view'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
