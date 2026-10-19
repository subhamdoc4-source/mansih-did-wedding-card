import React from 'react';
import { Phone, Users, UserCheck } from 'lucide-react';

interface Props {
  title: string;
  vineetLabel: string;
  vineetName: string;
  vineetAddress: string;
  swagatakankshiLabel: string;
  swagatakankshiNames: string[];
  darshanabhilashiLabel: string;
  darshanabhilashiNames: string;
  preshakLabel: string;
  preshakNames: string[];
  preshakPhones: string[];
}

export const FamilySection: React.FC<Props> = ({
  title,
  vineetLabel,
  vineetName,
  vineetAddress,
  swagatakankshiLabel,
  swagatakankshiNames,
  darshanabhilashiLabel,
  darshanabhilashiNames,
  preshakLabel,
  preshakNames,
  preshakPhones
}) => {
  return (
    <div className="w-full my-8 p-6 rounded-3xl bg-gradient-to-b from-[#103324] to-[#081F15] border border-gold/30 shadow-royal">
      <div className="text-center mb-6">
        <h3 className="font-tiro text-2xl xs:text-3xl font-bold text-gold-shimmer">
          {title}
        </h3>
        <div className="w-16 h-0.5 mx-auto mt-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Vineet (Chief Host) */}
      <div className="mb-5 pb-5 border-b border-gold/15 text-center">
        <span className="text-xs uppercase tracking-widest text-gold-light/75 font-body">
          {vineetLabel}
        </span>
        <h4 className="font-tiro text-xl font-bold text-white mt-1">
          {vineetName}
        </h4>
        <p className="text-sm font-mukta text-ivory/85 mt-0.5">
          {vineetAddress}
        </p>
      </div>

      {/* Swagatakankshi */}
      <div className="mb-5 pb-5 border-b border-gold/15 text-center">
        <div className="flex items-center justify-center gap-1.5 text-gold-shimmer mb-1">
          <UserCheck size={14} />
          <span className="text-xs uppercase tracking-widest font-body">
            {swagatakankshiLabel}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {swagatakankshiNames.map((name, i) => (
            <div key={i} className="py-1.5 px-3 rounded-xl bg-black/35 text-sm font-mukta font-medium text-ivory border border-gold/25">
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Darshanabhilashi */}
      <div className="mb-5 pb-5 border-b border-gold/15 text-center">
        <div className="flex items-center justify-center gap-1.5 text-gold-shimmer mb-1">
          <Users size={14} />
          <span className="text-xs uppercase tracking-widest font-body">
            {darshanabhilashiLabel}
          </span>
        </div>
        <p className="text-sm font-mukta text-ivory/95 leading-relaxed mt-2 px-2">
          {darshanabhilashiNames}
        </p>
      </div>

      {/* Preshak & Contact */}
      <div className="text-center">
        <span className="text-xs uppercase tracking-widest text-gold-light/75 font-body">
          {preshakLabel}
        </span>
        <p className="text-sm font-semibold text-white mt-1">
          {preshakNames.join(', ')}
        </p>

        <div className="flex items-center justify-center gap-3 mt-3">
          {preshakPhones.map((ph, idx) => (
            <a
              key={idx}
              href={`tel:${ph.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold/15 border border-gold/40 text-gold-shimmer text-xs font-body hover:bg-gold hover:text-emerald-deep transition-all"
            >
              <Phone size={12} />
              <span>{ph}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
