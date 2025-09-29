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
    </>
  )
}

export default App
