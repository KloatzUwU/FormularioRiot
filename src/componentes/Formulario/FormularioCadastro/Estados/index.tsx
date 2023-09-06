import React, { useState, useEffect } from 'react';

interface EstadosProps {
  estado: string
}

export default function Estados({ estado }: EstadosProps) {
  const [siglasEstados, setSiglasEstados] = useState([]);

  useEffect(() => {
    async function fetchEstados() {
      try {
        const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados");

        if (!response.ok) {
          throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const data = await response.json();
        const siglas = data.map((estado: { sigla: string }) => estado.sigla);

        setSiglasEstados(siglas);
      } catch (error) {
        console.error("Erro ao buscar:", error);
      }
    }

    fetchEstados();
  }, []);

  return (
    <>
      {estado === '' ? siglasEstados.map((sigla) => (
        <option key={sigla} value={sigla}>
          {sigla}
        </option>
      )) : <option key={estado} value={estado}>{estado}</option>}
    </>
  );
}



