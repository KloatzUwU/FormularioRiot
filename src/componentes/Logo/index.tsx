import React from 'react'

interface LogoProps {
  imagem: string
}

export default function Logo({imagem}: LogoProps) {
  return (
    <div>
      <img 
        src={imagem} 
        alt="Logo" 
    />
    </div>
  )
}
