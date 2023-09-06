import React, { useState, FormEvent } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Row, Col, Container } from 'react-bootstrap';
import Titulo from '../../Titulo';
import lol from '../../../assets/logoLoL.png'
import Logo from '../../Logo';
import Botao from '../../Botao';
import Estados from './Estados';



export default function FormularioCadastro() {

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [cpf, setCPF] = useState('');
    const [cep, setCEP] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmada, setSenhaConfirmada] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [estado, setEstado] = useState('')

    

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
     if(senhaConfirmada !== senha){
        event.preventDefault()
        setSenhaConfirmada('')
        alert('confirme a senha corretamente')
    }else if(!isValidCPF(cpf)){
        event.preventDefault()
        setCPF('')
        alert('insira um CPF válido')
    }else if (!isValidEmail(email)) {
        event.preventDefault();
        setEmail('')
        alert('E-mail inválido');
    }else{
        event.preventDefault();
    
        setCPF('');
        setCEP('');
        setSenha('');
        setSenhaConfirmada('');
        setEmail('');
        setNome('');
        setData('');
        setEstado('')
        setNumero('');
        setCidade('');
        setBairro('');
        setRua('');
    }
  };

    const formatarCPF = (cpf: string) => {
        let cpfNumerico = cpf.replace(/\D/g, '');

        if (cpfNumerico.length > 11) {
            cpfNumerico = cpfNumerico.slice(0, 11);
        }

        if (cpfNumerico.length <= 3) {
            return cpfNumerico;
        } else if (cpfNumerico.length <= 6) {
            return `${cpfNumerico.slice(0, 3)}.${cpfNumerico.slice(3)}`;
        } else if (cpfNumerico.length <= 9) {
            return `${cpfNumerico.slice(0, 3)}.${cpfNumerico.slice(3, 6)}.${cpfNumerico.slice(6)}`;
        } else {
            return `${cpfNumerico.slice(0, 3)}.${cpfNumerico.slice(3, 6)}.${cpfNumerico.slice(6, 9)}-${cpfNumerico.slice(9)}`;
        }
    };

    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCPF = formatarCPF(e.target.value);
        setCPF(formattedCPF);
    };

    

    const formatarCEP = (cep: string) => {
        let cepNumerico = cep.replace(/\D/g, '');

        if (cepNumerico.length > 8) {
            cepNumerico = cepNumerico.slice(0, 8);
        }

        if (cepNumerico.length < 5) {
            return `${cepNumerico.slice(0, 5)}`
        } else if (cepNumerico.length >= 5) {
            return `${cepNumerico.slice(0, 5)}-${cepNumerico.slice(5)}`;
        }
        else {
            return ``
        }
    }

    const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedCEP = formatarCEP(e.target.value);
        setCEP(formattedCEP); 
    };

    const handleSenhaConfirmadaChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setSenhaConfirmada(e.target.value)
    }

    const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(e.target.value)
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value)
    }
    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(e.target.value)
    }
    const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumero(e.target.value)
    }
    const handleCidadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCidade(e.target.value)
    }
    const handleBairroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBairro(e.target.value)
    }
    const handleRuaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRua(e.target.value)
    }

    const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            if (!e.target.value) return;
            setCidade(data.localidade);
            setEstado(data.uf);
            setBairro(data.bairro);
            setRua(data.logradouro);
        }).catch((err) => {    
           e.preventDefault()
           setCEP('')
           alert('CEP inválido') 
        })
    }

    function isValidEmail(email: string): boolean {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    
    function isValidEmailonBlur(e: React.FocusEvent<HTMLInputElement>){
        const email = e.target.value
        if(!isValidEmail(email)){
            e.preventDefault()
           setEmail('')
           alert('Email inválido') 
        }
        
    }
    
    function isValidCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]/g, ''); // Remover todos os caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
          return false; // CPF com tamanho inválido ou todos os dígitos iguais é inválido
        }
      
        let sum = 0;
        let remainder;
      
        for (let i = 1; i <= 9; i++) {
          sum += parseInt(cpf[i - 1], 10) * (11 - i);
        }
      
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        }
      
        if (remainder !== parseInt(cpf[9], 10)) {
          return false; // Primeiro dígito verificador não corresponde
        }
      
        sum = 0;
        for (let i = 1; i <= 10; i++) {
          sum += parseInt(cpf[i - 1], 10) * (12 - i);
        }
      
        remainder = (sum * 10) % 11;
        if (remainder === 10 || remainder === 11) {
          remainder = 0;
        }
      
        if (remainder !== parseInt(cpf[10], 10)) {
          return false; // Segundo dígito verificador não corresponde
        }
      
        return true; // CPF válido
      }
      

    function isValidCPFonBlur(e: React.FocusEvent<HTMLInputElement>){
        const cpf = e.target.value.replace(/\D/g, '');
        if(!isValidCPF(cpf)){
            e.preventDefault()
            setCPF('')
            alert('CPF inválido')
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row style={{ backgroundColor: 'white', padding: '22px', borderRadius: '40px' }}>
                <Col >
                    <div
                        style={{
                            display: 'block',
                            margin: 'auto',
                            textAlign: 'center'
                        }}
                    >
                        <Logo
                            imagem={lol}
                        />
                    </div>
                    <Titulo>
                        Criar Conta
                    </Titulo>
                    <Form onSubmit={handleSubmit}>
                        <Form.Label><h6>E-mail</h6></Form.Label>
                        <InputGroup className="mb-3" style={{ width: '300px' }}>
                            <Form.Control
                                placeholder="E-mail"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={email}
                                required={true}
                                onChange={handleEmailChange}
                                onBlur={isValidEmailonBlur}
                            />
                        </InputGroup>
                        <Form.Label><h6>Senha</h6></Form.Label>
                        <InputGroup className="mb-3" style={{ width: '300px' }}>
                            <Form.Control
                                placeholder="Senha"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                type='password'
                                value={senha}
                                required={true}
                                onChange={handleSenhaChange}
                            />
                        </InputGroup>
                        <Form.Label><h6>Confirmar Senha</h6></Form.Label>
                        <InputGroup className="mb-3" style={{ width: '300px' }}>
                            <Form.Control
                                placeholder="Confirmar Senha"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                type='password'
                                value={senhaConfirmada}
                                required={true}
                                onChange={handleSenhaConfirmadaChange}
                            />
                        </InputGroup>
                        <Form.Label><h6>Nome de Usuário</h6></Form.Label>
                        <InputGroup className="mb-3" style={{ width: '300px' }}>
                            <Form.Control
                                placeholder="Nome de Usuário"
                                aria-label="Nome de Usuário"
                                value={nome}
                                required={true}
                                onChange={handleNomeChange}
                            />
                        </InputGroup>

                        <Form.Label><h6>Data de nascimento e CPF</h6></Form.Label>
                        <InputGroup className="mb-3" >
                            <Row>
                                <Col>
                                    <Form.Control
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        type='date'
                                        value={data}
                                        required={true}
                                        onChange={handleDataChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        aria-label="CPF"
                                        type="text"
                                        placeholder="XXX.XXX.XXX-XX"
                                        value={cpf}
                                        required={true}
                                        onChange={handleCPFChange}
                                        onBlur={isValidCPFonBlur}
                                    />
                                </Col>
                            </Row>
                        </InputGroup>
                        <Form.Label><h6>Cep</h6></Form.Label>
                        <InputGroup className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Control
                                        aria-label="Cep"
                                        type="text"
                                        placeholder="XXXXX-XXX"
                                        value={cep}
                                        onBlur={checkCEP}
                                        required={true}
                                        onChange={handleCEPChange}
                                    />
                                </Col>
                            </Row>
                        </InputGroup>
                        <Form.Label><h6>Endereço</h6></Form.Label>
                        <InputGroup className="mb-3" >
                            <Row>
                                    <Col>
                                        <Form.Select 
                                            style={{marginBottom: '10px'}}
                                            required={true}
                                        >
                                            <Estados
                                                estado={estado}
                                            />
                                        </Form.Select>
                                        <Form.Control
                                        style={{marginBottom: '10px'}}
                                            placeholder="Cidade"
                                            aria-label="Cidade"
                                            value={cidade}
                                            required={true}
                                            onChange={handleCidadeChange}
                                        />
                                        <Form.Control
                                            placeholder="Rua"
                                            aria-label="Rua"
                                            value={rua}
                                            required={true}
                                            onChange={handleRuaChange}
                                        />
                                    </Col>
                                    <Col>
                                        
                                        <Form.Control
                                            style={{marginBottom: '10px'}}
                                            placeholder="Número"
                                            aria-label="Número"
                                            value={numero}
                                            required={true}
                                            onChange={handleNumeroChange}
                                        />
                                        <Form.Control
                                            placeholder="Bairro"
                                            aria-label="Bairro"
                                            value={bairro}
                                            required={true}
                                            onChange={handleBairroChange}
                                        />
                                    </Col>
                                </Row>
                        </InputGroup>
                        <Botao
                            type='submit'
                        >
                            Criar Conta
                        </Botao>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
