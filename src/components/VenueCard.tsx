import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface Props {
  title: string;
  name: string;
  address: string;
  getDirectionsText: string;
}

export const VenueCard: React.FC<Props> = ({
  title,
  name,
  address,
  getDirectionsText
}) => {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Satyanarayan Marriage Lawn, Ramganj, Pratapgarh, Uttar Pradesh'
  )}`;

  return (
    <div className="w-full my-6 p-6 rounded-3xl bg-gradient-to-b from-[#143D2C] to-[#0A261B] border border-gold/40 shadow-royal text-center relative overflow-hidden">
      <div className="w-12 h-12 mx-auto rounded-full bg-gold/20 border border-gold/60 flex items-center justify-center text-gold mb-3 shadow-gold-glow">
        <MapPin size={24} />
      </div>

      <span className="text-xs uppercase tracking-widest text-gold-light/80 font-body">
        {title}
      </span>

      <h3 className="font-rozha text-2xl text-white my-1.5 tracking-wide">
        {name}
      </h3>

      <p className="text-sm text-gold-light/90 font-hindi leading-relaxed max-w-xs mx-auto mb-5">
        {address}
      </p>

      <a
        href={mapsSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 w-full max-w-xs py-3.5 px-5 rounded-2xl bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-[#2C1D11] font-bold text-sm font-body shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
      >
        <Navigation size={16} />
        <span>{getDirectionsText}</span>
      </a>
    </div>
  );
};
