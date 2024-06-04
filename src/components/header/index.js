import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={() => navigate('/Contact')}>Contact</li>
      </ul>
    </nav>
  )
}
