// LottoBall.tsx
import React from 'react';

type Props = {
  number: number;
};
export default function LottoBall({ number }: Props) {
    return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-white font-bold">
        {number}
      </div>
    );
  }