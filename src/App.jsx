import Navbar from './container/Navbar'
import Link from './container/Link'
import Homepage from './pages/Homepage'
import Footer from './container/Footer'

function App() {

  return (
    <div className='h-full bg-[#EFF2F5] font-[Inter]'>
      <Navbar />
      <Link />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
