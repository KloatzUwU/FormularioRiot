import Cabecalho from '../../componentes/Cabecalho'
import Formulario from '../../componentes/Formulario'
import baner from '../../assets/IreliaBanner.png'
import FormularioCadastro from '../../componentes/Formulario/FormularioCadastro';

export default function Cadastro() {
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
          textoNavbar='Já tem conta?'
          linkNavbar='Login'
          link='/'
        />
      <div style={containerStyle}>
        <FormularioCadastro/>
      </div>
    </main>
  )
}
