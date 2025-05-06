import { useState } from 'react';
import { generateLottoNumbers } from '@lib/generateLotto';

export const useLotto = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const draw = () => {
    setNumbers(generateLottoNumbers());
  };

  return { numbers, draw };
};
