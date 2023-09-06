import React from 'react'
import Formulario from '../../componentes/Formulario';
import baner from '../../assets/DrMundoBanner.jpg';
import Cabecalho from '../../componentes/Cabecalho';

export default function Login() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${baner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    
      return (
        <main>
          <Cabecalho
            textoNavbar='Não tem conta?'
            linkNavbar='Criar conta'
            link='cadastro'
          />
          <div style={containerStyle}>
            <Formulario
              textoBotao='Login'
              textoCheckBox='Manter Login'
              textoTitulo='Fazer Login'
              textoLabelNome='Nome de Usuário'
              textoLabelSenha='Senha'
              
            />
          </div>
        </main>
      );
}

