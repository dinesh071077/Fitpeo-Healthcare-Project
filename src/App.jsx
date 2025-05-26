
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
       
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      
        <div className="flex-1 flex flex-col">
        
         <Header toggleSidebar={toggleSidebar} />


         
          <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
