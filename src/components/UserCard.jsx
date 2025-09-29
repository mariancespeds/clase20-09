import { useState } from 'react'
import '../statics/css/MisComponentes.css'
function UserCard(props) {
  const { age, name, email, isOnline } = props

  return (
    <>
    <div className="user-card">
      <div className="user-header">
      <h1>User Card</h1>
        </div>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <span className={isOnline ? 'online' : 'offline'}>
        <p>Status: {isOnline ? 'Online' : 'Offline'}</p>
         </span>
      </div>
      </div>
    </>
  )
}

export default UserCard

/*
.user-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin: 10px;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.online {
  color: green;
}
.offline {
  color: gray;
}


*/