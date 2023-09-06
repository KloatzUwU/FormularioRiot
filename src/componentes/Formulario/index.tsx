import React, { useState, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Botao from '../Botao';
import { Container, Row, Col } from 'react-bootstrap';
import Titulo from '../Titulo';
import Logo from '../Logo';
import lol from '../../assets/logoLoL.png'
import { type } from 'os';


interface FormularioProps {
  textoTitulo: string
  textoBotao: string
  textoCheckBox: string
  textoLabelNome: string
  textoLabelSenha: string
}

function Formulario(
  {
    textoTitulo, 
    textoBotao, 
    textoCheckBox, 
    textoLabelNome, 
    textoLabelSenha
  }:FormularioProps
) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [manterLogin, setManterLogin] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setNome('');
    setSenha('');
    setManterLogin(false);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
      <Row style={{ backgroundColor: 'white', padding: '72px', borderRadius: '40px'}}>
        <Col xs={12} md={12} >
          <div 
            style={{
              display: 'block',
              margin: 'auto',
              textAlign: 'center'
            }}>
          <Logo 
            imagem={lol}
          />
          </div>
          <Titulo>
            {textoTitulo}
          </Titulo>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <FloatingLabel
                controlId="floatingInput"
                label={textoLabelNome}
                className="mb-3"
              >
                <Form.Control
                  style={{ width: '300px' }}
                  type='text'
                  placeholder="name@example.com"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required={true}
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingPassword"
                label={textoLabelSenha}
              >
                <Form.Control
                  style={{ width: '300px'}}
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required={true}
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Check
              style={{
                paddingTop: '20px',
                paddingBottom: '10px'
              }}
              type='checkbox'
              label={<h6>{textoCheckBox}</h6>}
              checked={manterLogin}
              onChange={(e) => setManterLogin(e.target.checked)}
            />
            <Botao
              type='submit'
            >
              {textoBotao}
            </Botao>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Formulario;
