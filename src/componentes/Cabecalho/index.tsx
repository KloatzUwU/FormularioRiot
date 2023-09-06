import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logoRiot from '../../assets/logoRiot.png';
import Logo from '../Logo';

interface CabecalhoProps{
  textoNavbar: string
  linkNavbar: string
  link: string
}

export default function Cabecalho({textoNavbar, linkNavbar, link}:CabecalhoProps) {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href='/'>
          <Logo imagem={logoRiot} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h6>{textoNavbar}</h6>
            <div style={{ textAlign: 'center' }}>
              <a href={link}>
                <h6>{linkNavbar}</h6>
              </a>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

