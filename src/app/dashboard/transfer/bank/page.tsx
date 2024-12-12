'use client';

import Arrow from '@/assets/arrow';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const conta = {
  '0': [
    { id: 1, company: 'Conta Corrente' },
    { id: 2, company: 'Conta Poupança' },
  ],
  '1': [
    { id: 1, company: 'CPF' },
    { id: 2, company: 'CNPJ' },
  ],
};

const RadioOptionGroup = ({
  label,
  options,
  onValueChange,
}: {
  label: string;
  options: Array<{ id: number; company: string }>;
  onValueChange: (value: string) => void;
}) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-semibold text-xl">{label}</h3>
    <RadioGroup
      onValueChange={onValueChange}
      defaultValue="none"
      className="grid grid-cols-1 md:grid-cols-2 gap-16 font-semibold text-lg"
    >
      {options.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <RadioGroupItem value={item.company} id={`r${item.id}`} />
          <Label htmlFor={`r${item.id}`}>{item.company}</Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

export default function Bank() {
  const [formData, setFormData] = useState({
    count: 'none',
    value: 'none',
    accountNumber: '',
    accountHolder: '',
    agency: '',
    account: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-[58rem] h-[45rem] flex flex-col gap-5 justify-between items-center border-2 p-5 rounded-lg bg-white">
      <div className="w-full flex flex-col gap-5 items-center">
        <Link href={'/dashboard/transfer/who'} className="w-full flex gap-2 items-center">
          <Arrow color="#000000" size={20} rotate={180} />
          <h2 className="w-fit font-semibold text-lg">Transferência</h2>
        </Link>
        <div className="w-full flex flex-col gap-5">
          <h2 className="font-semibold text-3xl">Conta</h2>
          <div className="w-fit flex flex-col gap-4">
            <RadioOptionGroup
              label="Tipo de Conta"
              options={conta[0]}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, value }))}
            />
            <RadioOptionGroup
              label="Pessoa"
              options={conta[1]}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, count: value }))}
            />
          </div>
          <div className="w-full p-5 flex flex-col gap-5 font-bold">
            <input
              id="accountNumber"
              type="text"
              placeholder="000.000.000.00"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="border-2 rounded-lg p-1 outline-none"
            />
            <div className="flex flex-col gap-1">
              <label htmlFor="accountHolder">Nome do favorecido</label>
              <input
                id="accountHolder"
                type="text"
                value={formData.accountHolder}
                onChange={handleInputChange}
                className="border-2 rounded-lg p-1 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="agency">Agência (Sem dígito)</label>
              <input
                id="agency"
                type="text"
                placeholder="00001"
                value={formData.agency}
                onChange={handleInputChange}
                className="border-2 rounded-lg p-1 outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="account">Conta (com dígito)</label>
              <input
                id="account"
                type="text"
                placeholder="000001-0"
                value={formData.account}
                onChange={handleInputChange}
                className="border-2 rounded-lg p-1 outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <button>
        <Link
          href={'/dashboard/transfer/confirm'}
          className={`w-fit p-5 px-[80px] flex justify-center items-center rounded-lg font-semibold bg-[#0980B4] hover:bg-black hover:bg-opacity-20 transition`}
        >
          Transferir
        </Link>
      </button>
    </div>
  );
}
