import React from 'react';
import { Flame, Sparkles, Heart, Moon, CalendarPlus } from 'lucide-react';
import type { EventItem } from '../data/invitationData';

interface Props {
  title: string;
  subtitle: string;
  events: EventItem[];
  addToCalendarLabel: string;
}

export const EventTimeline: React.FC<Props> = ({
  title,
  subtitle,
  events,
  addToCalendarLabel
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="text-amber-500" size={20} />;
      case 'Sparkles': return <Sparkles className="text-yellow-400" size={20} />;
      case 'Heart': return <Heart className="text-red-500" size={20} />;
      case 'Moon': return <Moon className="text-purple-400" size={20} />;
      default: return <Sparkles className="text-gold" size={20} />;
    }
  };

  const createGoogleCalendarUrl = (ev: EventItem) => {
    const title = encodeURIComponent(`${ev.name} - Ragani & Pranay Wedding`);
    const details = encodeURIComponent(`${ev.tagline} at Satyanarayan Marriage Lawn, Ramganj, Pratapgarh`);
    const location = encodeURIComponent('Satyanarayan Marriage Lawn, Ramganj, Pratapgarh, Uttar Pradesh');
    
    // Dates formatted YYYYMMDDTHHMMSS
    const startIso = ev.fullDate.replace(/-/g, '') + 'T100000Z';
    const endIso = ev.fullDate.replace(/-/g, '') + 'T235900Z';
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startIso}/${endIso}`;
  };

  return (
    <div className="w-full my-8">
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="font-tiro text-2xl xs:text-3xl font-bold text-gold-shimmer tracking-wide">
          {title}
        </h3>
        <p className="text-xs text-gold-light/80 font-body mt-1">
          {subtitle}
        </p>
        <div className="w-20 h-0.5 mx-auto mt-2 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {events.map((ev) => (
          <div
            key={ev.id}
            className="relative rounded-3xl p-5 bg-gradient-to-b from-[#133A2A] to-[#0A2318] border border-gold/30 shadow-royal overflow-hidden"
          >
            {/* Top Badge Number */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-black/40 border border-gold/50 flex items-center justify-center shadow-inner">
                  {getIcon(ev.icon)}
                </div>
                <div>
                  <h4 className="font-tiro text-xl font-bold text-white tracking-wide">
                    {ev.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-gold-light font-body">
                    {ev.dateStr} ({ev.dayStr})
                  </span>
                </div>
              </div>

              <span className="text-xs px-2.5 py-1 rounded-full bg-gold/15 text-gold-shimmer border border-gold/30 font-body">
                {ev.time}
              </span>
            </div>

            {/* Poetic Tagline */}
            <p className="text-base font-mukta font-semibold text-gold-light my-2.5 leading-relaxed pl-3 border-l-2 border-gold">
              "{ev.tagline}"
            </p>

            {/* Add to Calendar button */}
            <div className="mt-3 pt-2.5 border-t border-gold/15 flex justify-end">
              <a
                href={createGoogleCalendarUrl(ev)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white font-body px-3 py-1.5 rounded-xl bg-black/30 border border-gold/30 hover:border-gold transition-colors"
              >
                <CalendarPlus size={13} />
                <span>{addToCalendarLabel}</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
