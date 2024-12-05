import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'src', 'data', 'rede.json');

export async function GET() {
  try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return NextResponse.json(jsonData, { status: 200 });
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error);
    return NextResponse.json({ message: 'Erro ao ler o arquivo JSON' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const updatedData = {
      ...jsonData,
      ...body,
    };

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf-8');
    return NextResponse.json({ message: 'Dados atualizados com sucesso', updatedData }, { status: 200 });
  } catch (error) {
    console.error('Erro ao atualizar o arquivo:', error);
    return NextResponse.json({ message: 'Erro ao atualizar o arquivo JSON' }, { status: 500 });
  }
}
