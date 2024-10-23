import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const [currentSection, setCurrentSection] = useState('Setting'); // Начальная секция
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Добавляем состояние для Sidebar

  return (
    <div className="App">
      <Header 
        currentSection={currentSection} 
        setIsSidebarOpen={setIsSidebarOpen} // Передаем функцию изменения состояния Sidebar
        isSidebarOpen={isSidebarOpen} // Передаем текущее состояние Sidebar
      />
      <div className='section'>
        <Sidebar 
          setCurrentSection={setCurrentSection} 
          isSidebarOpen={isSidebarOpen} // Передаем текущее состояние Sidebar
        />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
