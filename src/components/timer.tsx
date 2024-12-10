'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimerRegrassivoProps {
  tempoInicial: number; // Tempo inicial em segundos
}

export default function TimerRel({ tempoInicial }: TimerRegrassivoProps) {
  const [tempo, setTempo] = useState(tempoInicial);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    let intervalo: NodeJS.Timeout | null = null;

    if (ativo && tempo > 0) {
      intervalo = setInterval(() => {
        setTempo((tempoAnterior) => tempoAnterior - 1);
      }, 1000);
    } else if (tempo === 0) {
      setAtivo(false);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [ativo, tempo]);

  const formatarTempo = (segundos: number) => {
    const dias = Math.floor(segundos / (24 * 60 * 60));
    const horas = Math.floor((segundos % (24 * 60 * 60)) / (60 * 60));
    const minutos = Math.floor((segundos % (60 * 60)) / 60);
    const segundosRestantes = segundos % 60;

    return {
      dias,
      horas,
      minutos,
      segundos: segundosRestantes,
    };
  };

  const tempoFormatado = formatarTempo(tempo);

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-center">Timer Regressivo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 text-center mb-4">
          <div>
            <div className="text-3xl font-bold">{tempoFormatado.dias}</div>
            <div className="text-xs text-muted-foreground">Dias</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{tempoFormatado.horas.toString().padStart(2, '0')}</div>
            <div className="text-xs text-muted-foreground">Horas</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{tempoFormatado.minutos.toString().padStart(2, '0')}</div>
            <div className="text-xs text-muted-foreground">Minutos</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{tempoFormatado.segundos.toString().padStart(2, '0')}</div>
            <div className="text-xs text-muted-foreground">Segundos</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
