import React from 'react';
import { Music2, PartyPopper } from 'lucide-react';

interface Props {
  title: string;
  doha: string;
  names: string;
}

export const BalAagrah: React.FC<Props> = ({ title, doha, names }) => {
  return (
    <div className="w-full my-6 p-5 rounded-3xl bg-gradient-to-br from-[#2D1B36] via-[#1F142B] to-[#120B1A] border border-pink-400/40 shadow-royal text-center relative overflow-hidden">
      {/* Playful Floating Badges */}
      <div className="flex items-center justify-center gap-2 mb-2 text-pink-300">
        <Music2 size={16} className="animate-bounce" />
        <h4 className="font-tiro text-2xl font-bold tracking-wide text-pink-200">
          -:: {title} ::-
        </h4>
        <PartyPopper size={16} className="animate-bounce" />
      </div>

      <p className="font-mukta text-lg font-bold text-pink-100 whitespace-pre-line leading-relaxed my-2">
        "{doha}"
      </p>

      <p className="font-mukta text-sm text-pink-300 font-bold mt-3">
        {names}
      </p>
    </div>
  );
};
