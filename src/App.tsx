import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { UserData } from './interface/UserData';
import { useUserData } from './hooks/useUserData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const { data } = useUserData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Users</h1>
      <div className='card-grid'>
        {data?.map(userData => 
          <Card 
            name={userData.name} 
            email={userData.email} 
            password={userData.password}
          />
        )}
        {isModalOpen && <CreateModal/>}
        <button onClick={handleOpenModal}>novo</button>
      </div>
    </div>
  )
}

export default App
