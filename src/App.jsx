import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard.jsx'
import Producto from './components/Producto.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Sección de Usuarios */}
      <h1 >
          👥 Tarjetas de Usuario
        </h1>
      <div >

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
      </div>

      {/* Sección de Productos */}
      <div>
        <h1 >
          🛒 Catálogo de Productos
        </h1>
        
        <Producto
          name="iPhone 15 Pro"
          price={1200}
          discount={15}
          category="Electrónicos"
        />
        
        <Producto
          name="Laptop Gaming"
          price={899}
          category="Computadoras"
        />
        
        <Producto
          name="Auriculares Inalámbricos"
          price={250}
          discount={25}
          category="Audio"
        />
        
        <Producto
          name="Camiseta Deportiva"
          price={45}
          discount={10}
          category="Ropa"
        />
        
        <Producto
          name="Libro de React"
          price={35}
          category="Libros"
        />
      </div>

    </>
  )
}

export default App
