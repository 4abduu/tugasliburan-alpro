  import { Routes, Route } from 'react-router-dom'
  import Dashboard from './pages/Dashboard'
  import Abdu from './pages/Abdu'
  import TeukuAtha from './pages/TeukuAtha'
  import IkhsanPutra from './pages/Ikhsan'  
  function App() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/abdu" element={<Abdu />} />
        <Route path="/teuku-atha-athaya-nafi" element={<TeukuAtha />} />
        <Route path="/ikhsan-putra" element={<IkhsanPutra />} />
      </Routes>
    )
  }

  export default App