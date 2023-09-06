import Button from 'react-bootstrap/Button';
import React from 'react'

interface BotaoProps {
    children: string
    type?: "submit"
}

function Botao({children, type}: BotaoProps){
    return (
        <Button 
            variant="danger" 
            className="d-block mx-auto"
            style={{marginTop: '20px', color: 'black'}} 
            size="lg" 
            type={type}
        >
            <h4>{children}</h4>
        </Button>
    )
}

export default Botao;