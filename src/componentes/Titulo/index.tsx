
interface TituloProps {
    children: string
}

export default function Titulo({children}: TituloProps) {
  return (
    <h1 className="text-center" style={{
        paddingBottom: '10px'
      }}>
        {children}
    </h1>
  )
}
