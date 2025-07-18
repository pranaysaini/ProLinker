import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const id = localStorage.getItem("userId");
      setIsLoggedIn(!!id);
    };

    checkLogin();
    
    window.addEventListener("user-logged-in", checkLogin);
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("user-logged-in", checkLogin);
      window.removeEventListener("storage", checkLogin);
    }
  }, []);

  const handleClick = () => navigate('/getstarted');
  const signInClick = () => navigate('/login');

  const goToDashboard = () => {
    const userId = localStorage.getItem("userId");
    if (userId) navigate('/dashboard');
    else alert("UserId not found. Please re-login.");
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("number");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Main container */}
      <div className="flex items-center justify-between px-4 py-3 md:px-10">
        
        {/* Hamburger (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>

        {/* Logo */}
        <h1
          className="text-3xl font-bold cursor-pointer mx-auto md:mx-0"
          onClick={() => navigate('/')}
        >
          ProLinker
        </h1>

        {/* Sell Button (mobile right) */}
        <div className="md:hidden">
          <button
            onClick={handleClick}
            className="bg-[#009400] text-white text-sm px-4 py-2 rounded-lg"
          >
            Sell
          </button>
        </div>

        {/* Nav links (desktop only) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <h4 className="hover:text-[#009400] hover:underline cursor-pointer ">Find Service</h4>
          <h4 className="hover:text-[#009400] hover:underline cursor-pointer ">Career Resources</h4>
          <h4 className="hover:text-[#009400] hover:underline cursor-pointer ">Why ProLinker</h4>

          <button
            onClick={handleClick}
            className="bg-[#009400] hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg"
          >
            Sell Service
          </button>

          {isLoggedIn ? (
            <>
              <button onClick={goToDashboard} className="bg-white border-2 border-[#009400] text-[#009400] py-2 px-5 rounded-lg hover:bg-[#e6ffdc] hover:text-green-800">
                Dashboard
              </button>
              <button onClick={logout} className="bg-white border-2 border-[#009400] text-[#009400] py-2 px-5 rounded-lg hover:bg-[#e6ffdc] hover:text-green-800">
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={signInClick}
              className="border-2 border-[#009400] text-[#009400] py-2 px-5 rounded-lg hover:bg-[#e6ffdc] hover:text-green-800"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-4 space-y-4 font-semibold">
          <button className="text-left" onClick={() => setMenuOpen(false)}>Find Service</button>
          <button className="text-left" onClick={() => setMenuOpen(false)}>Career Resources</button>
          <button className="text-left" onClick={() => setMenuOpen(false)}>Why ProLinker</button>
          {!isLoggedIn ? (
            <button
              onClick={() => {
                setMenuOpen(false);
                signInClick();
              }}
              className="text-left text-green-700 font-bold"
            >
              Login
            </button>
          ):(
            <>
                <button
                      onClick={() => {
                        setMenuOpen(false);
                        goToDashboard();
                      }}
                      className="text-left text-green-700 font-bold"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        logout();
                      }}
                      className="text-left text-red-600 font-bold"
                    >
                      Logout
                </button>

            </>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Header;
