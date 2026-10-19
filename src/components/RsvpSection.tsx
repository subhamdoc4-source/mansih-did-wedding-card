import React, { useState } from 'react';
import { Send, Share2, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  title: string;
  subtitle: string;
  sendBtnText: string;
  shareBtnText: string;
}

export const RsvpSection: React.FC<Props> = ({
  title,
  subtitle,
  sendBtnText,
  shareBtnText
}) => {
  const [guestName, setGuestName] = useState('');
  const [wishes, setWishes] = useState('');
  const [attending, setAttending] = useState('हाँ, अवश्य आएंगे (Yes, definitely attending)');
  const [isSent, setIsSent] = useState(false);

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSent(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#E11D48', '#D4AF37', '#FFF']
    });

    const msg = `शुभ विवाह बधाई व आशीर्वाद! 🌸\n\nप्रेषक: ${guestName}\nउपस्थिति: ${attending}\nसंदेश: ${wishes || 'वर-वधू को सुखद वैवाहिक जीवन की अनंत शुभकामनाएं!'}\n\n— Ragani & Pranay Wedding`;
    
    // Open WhatsApp to family phone number
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918331903048&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShareCard = async () => {
    const shareData = {
      title: 'शुभ विवाह | रागनी संग प्रणय',
      text: 'आप सादर आमंत्रित हैं! रागनी और प्रणय के शुभ विवाह का डिजिटल निमंत्रण पत्र देखें:',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled
      }
    } else {
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${shareData.text} ${shareData.url}`
      )}`;
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className="w-full my-8 p-6 rounded-3xl bg-gradient-to-b from-[#133A2B] to-[#092218] border border-gold/40 shadow-royal">
      <div className="text-center mb-5">
        <div className="w-10 h-10 mx-auto rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 mb-2">
          <Heart size={20} fill="currentColor" />
        </div>
        <h3 className="font-rozha text-2xl text-white">
          {title}
        </h3>
        <p className="text-xs text-gold-light/80 font-body mt-1">
          {subtitle}
        </p>
      </div>

      {isSent ? (
        <div className="py-6 px-4 text-center rounded-2xl bg-black/30 border border-gold/30">
          <CheckCircle2 size={36} className="text-green-400 mx-auto mb-2" />
          <h4 className="font-rozha text-lg text-white">धन्यवाद!</h4>
          <p className="text-xs text-gold-light mt-1 font-body">
            आपकी शुभकामनाएं और आशीर्वाद सफलतापूर्वक भेजे गए।
          </p>
        </div>
      ) : (
        <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-3">
          <div>
            <label className="text-[11px] text-gold-light font-body uppercase tracking-wider block mb-1">
              आपका नाम (Your Name) *
            </label>
            <input
              type="text"
              required
              placeholder="उदा. रमेश कुमार यादव"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gold/30 text-white placeholder-ivory/40 text-sm font-hindi focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="text-[11px] text-gold-light font-body uppercase tracking-wider block mb-1">
              उपस्थिति (Attending Status)
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full px-3 py-3 rounded-xl bg-black/40 border border-gold/30 text-white text-xs font-body focus:outline-none focus:border-gold"
            >
              <option value="हाँ, परिवार सहित आएंगे (Yes, with family)">
                हाँ, परिवार सहित आएंगे (Yes, with family)
              </option>
              <option value="हाँ, 2 लोग आएंगे (Yes, 2 persons)">
                हाँ, 2 लोग आएंगे (Yes, 2 persons)
              </option>
              <option value="बधाई व आशीर्वाद स्वीकारें (Sending best wishes)">
                बधाई व आशीर्वाद स्वीकारें (Sending best wishes)
              </option>
            </select>
          </div>

          <div>
            <label className="text-[11px] text-gold-light font-body uppercase tracking-wider block mb-1">
              शुभकामना संदेश (Warm Message)
            </label>
            <textarea
              rows={2}
              placeholder="वर-वधू को आपका आशीर्वाद..."
              value={wishes}
              onChange={(e) => setWishes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-white placeholder-ivory/40 text-sm font-hindi focus:outline-none focus:border-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 mt-2 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-bold text-sm font-body shadow-md flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all"
          >
            <Send size={15} />
            <span>{sendBtnText}</span>
          </button>
        </form>
      )}

      {/* Share Button */}
      <button
        onClick={handleShareCard}
        className="w-full py-3 px-4 mt-3 rounded-xl bg-gold/15 border border-gold/40 text-gold-shimmer font-semibold text-xs font-body flex items-center justify-center gap-2 hover:bg-gold/25 transition-all"
      >
        <Share2 size={14} />
        <span>{shareBtnText}</span>
      </button>
    </div>
  );
};
