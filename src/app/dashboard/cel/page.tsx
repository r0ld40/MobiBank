'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface UserData {
  id: number;
  name: string;
  cpf: string;
  conta: string;
  phone: string;
  transactions: Transaction[];
}

interface Transaction {
  id: number;
  mode: string;
  value: number;
  date: string;
  method: string;
  to: string;
}

export default function Phone() {
  const [data, setData] = useState<Record<number, UserData> | null>(null);
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [done, setDone] = useState(false);

  const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/; // Expressão regular para validar o telefone

  const fetchInfo = async () => {
    const response = await fetch('/api/info', {
      method: 'GET',
    });

    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      console.error('Erro ao buscar dados:', response.statusText);
    }
  };

  const updateData = async () => {
    const response = await fetch('/api/info', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Dados para atualizar
    });

    if (response.ok) {
      const info = await response.json();
      setData(info);
    } else {
      console.error('Erro ao atualizar dados:', response.statusText);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const cleanValue = value.replace(/\D/g, '');

    let formattedValue = cleanValue;
    if (cleanValue.length <= 2) {
      formattedValue = `(${cleanValue}`;
    } else if (cleanValue.length <= 7) {
      formattedValue = `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}`;
    } else {
      formattedValue = `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 7)}-${cleanValue.slice(7, 11)}`;
    }

    setTelefone(formattedValue);

    const newInfo = data;

    if (!newInfo) {
      return;
    }

    newInfo[0].phone = formattedValue;

    // Verifica a validade com a regex
    if (regexTelefone.test(formattedValue)) {
      setErro('');
      setDone(true);
      setData(newInfo);
    } else {
      setErro('Formato inválido. Use (xx) xxxxx-xxxx');
      setDone(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="w-[35rem] h-fit flex flex-col items-center gap-8 bg-white p-5 rounded-lg border-2">
      <div className="w-full flex flex-col gap-2">
        <Link href={'/dashboard/overview'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Recarga de Celular</h2>
        </Link>
        <hr />
        <p>Qual número de telefone para recarga?</p>
        <input
          placeholder="(00) 00000-0000"
          value={telefone}
          onChange={handleChange}
          type="text"
          className="h-fit p-2 rounded-lg outline-none focus:bg-black focus:bg-opacity-10 transition border-2 bg-[#F6F6F6]"
        />

        {/* Exibe mensagem de erro se houver */}
        {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}
      </div>
      <Link
        onClick={() => updateData()}
        href={'/dashboard/cel/company'}
        className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold ${
          done ? 'bg-[#0980B4] hover:bg-black hover:bg-opacity-20' : 'bg-gray-300 cursor-not-allowed'
        } transition`}
      >
        Próximo
      </Link>
    </div>
  );
}
