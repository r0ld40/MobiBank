'use client';

import * as React from 'react';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Loading from '@/assets/loading.png';
import LoadingEnd from '@/assets/load-end.png';

export function ProgressItem() {
  const [progress, setProgress] = React.useState(0);
  const [timer, setTimer] = React.useState(8);

  React.useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 20;
        if (newProgress >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return newProgress;
      });
    }, 500);

    const countdownTimer = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer - 1;
        if (newTimer <= 0) {
          clearInterval(countdownTimer);
          setTimeout(() => {
            window.location.href = '/dashboard';
          }, 1000);
          return 0;
        }
        return newTimer;
      });
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  if (progress < 100) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-between">
        <Image src={Loading} alt="loading" width={100} height={100} quality={100} className="w-[15rem]" />
        <strong>Sua transação está processando</strong>
        <Progress value={progress} className="w-[60%]" color="#0980B4" />
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-16">
      <Image src={LoadingEnd} alt="loading" width={100} height={100} quality={100} className="w-[20rem]" />
      <strong>Sua transação foi realizada com sucesso!</strong>
      <p>Continuando em: {timer}s</p>
    </div>
  );
}
