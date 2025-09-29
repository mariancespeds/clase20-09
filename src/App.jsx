import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard
        name="John Doe"
        email="john.doe@example.com"
        age={30}
        isOnline={true}
      />
      
      <UserCard
        name="Maria García"
        email="maria.garcia@company.com"
        age={25}
        isOnline={false}
      />
      
      <UserCard
        name="Alex Johnson"
        email="alex.johnson@tech.io"
        age={28}
        isOnline={true}
      />
      
      <UserCard
        name="Sarah Wilson"
        email="sarah.w@design.studio"
        age={32}
        isOnline={false}
      />
      
      <UserCard
        name="Carlos Rodriguez"
        email="carlos.r@startup.dev"
        age={27}
        isOnline={true}
      />

    </>
  )
}

export default App
