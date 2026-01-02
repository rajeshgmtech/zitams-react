import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useLocation, useNavigate } from "react-router-dom";
import Header from './components/header';
import Sidebar from './components/sidebar';





function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const lastSegment = location.pathname.split("/").filter(Boolean).pop();
  const [activeTab, setActiveTab] = useState(lastSegment);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setActiveTab(lastSegment);
  }, [lastSegment]);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeRoute = (url) => {
    setActiveTab(url);
    navigate(`/${url}`);
  };

  const isHome = location.pathname === "/";

  return (
    <>
       <div className="min-h-screen flex flex-col bg-primary-bg">
        {location.pathname !== "/" && (
      <Header />
        )}

      <div className="flex flex-1  ">
        
        {/* Sidebar */}
        {location.pathname !== "/" && (
          <Sidebar
            isSticky={isSticky}
            activeTab={activeTab}
            changeRoute={changeRoute}
          />
        )}

        {/* Main Content */}
        
        <div  className={`flex-1 overflow-hidden ${
    isHome ? "pl-0" : "pl-0 md:pl-3 sm:px-6 lg:px-10 pt-6 pb-6"
  }`}
>
          <Outlet />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
     
    
    </>
  )
}

export default App
