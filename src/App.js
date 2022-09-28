import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import DetailPage from './pages/DetailPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/RegisterPage'

const Layout = () => {
  
  return(
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path ='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path=":movieId" element={<DetailPage />} />
          <Route path="search" element={<SearchPage/>} />
          <Route path="LoginPage" element={<LoginPage/>} />
          <Route path="Register" element={<Register/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
