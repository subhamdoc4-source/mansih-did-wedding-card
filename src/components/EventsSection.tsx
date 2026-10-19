import { motion, type Variants } from 'framer-motion';
import { ParallaxArch } from './ParallaxArch';
import { ExpandingDivider } from './ExpandingDivider';
import { AnimatedTitle } from './AnimatedTitle';

interface Props {
  lang: 'en' | 'hi';
}

export const EventsSection: React.FC<Props> = ({ lang }) => {
  const titleFont = lang === 'en' ? "'Cormorant Garamond', serif" : "'Noto Serif Devanagari', serif";
  const bodyFont = lang === 'en' ? "'Jost', sans-serif" : "'Noto Serif Devanagari', serif";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };


  return (
    <div className="w-full max-w-[480px] mx-auto flex flex-col relative z-20 select-none overflow-hidden">
      
      {/* Strict Typography Classes */}
      <style>{`
        .d-font { 
          font-family: ${titleFont}; 
          font-weight: 700; 
        }
        .d-italic { 
          font-family: ${titleFont}; 
          font-style: ${lang === 'en' ? 'italic' : 'normal'}; 
          font-weight: 500; 
        }
        .b-font { 
          font-family: ${bodyFont}; 
        }
        .sec-clean { 
          position: relative; 
          overflow: hidden; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          text-align: center; 
          box-sizing: border-box; 
          border: none !important;
          outline: none !important;
          margin: 0 !important;
        }
        .sec-clean:not(:first-of-type) {
          margin-top: -3px !important;
        }
        .sec-content {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>

            {/* =========================================================================
          1. INTRO SECTION (Warm Festive Cream)
          - Structured Lineage: Bride -> Father & Mother -> Divider -> Groom -> Father & Mother
          ========================================================================= */}
      <section 
        className="sec-clean" 
        style={{ 
          padding: '52px 24px 44px', 
          background: 'linear-gradient(180deg, #FDF6ED 0%, #FBF1E6 60%, #FFFBEB 100%)', 
          gap: '16px' 
        }}
      >
        <div className="sec-content" style={{ gap: '16px' }}>
          
          {/* Distinct Lineage Hierarchy: Bride -> Parents -> Divider -> Groom -> Parents */}
          <div className="flex flex-col items-center w-full max-w-[340px] mx-auto text-center">
            
            {/* Bride & Her Parents */}
            <div className="flex flex-col items-center">
              <h3 
                className="d-font" 
                style={{ fontSize: '30px', color: '#700B13', margin: 0, lineHeight: 1.15 }}
              >
                {lang === 'en' ? 'Ragani Yadav' : 'आयु० रागनी यादव'}
              </h3>
              <p 
                className="b-font" 
                style={{ fontSize: '16px', color: '#8A4B2B', margin: '4px 0 0', fontWeight: 600 }}
              >
                {lang === 'en' 
                  ? 'Daughter of Smt. Manju Devi & Shri Ram Tirth Yadav' 
                  : 'सुपुत्री: श्रीमती मंजू देवी एवं श्री राम तीर्थ यादव'}
              </p>
              <span 
                className="b-font text-[13px] mt-1" 
                style={{ color: '#8A4B2B', opacity: 0.9 }}
              >
                {lang === 'en' 
                  ? '(Granddaughter of Shri Udayraj Yadav · Ramganj, Pratapgarh)' 
                  : '(सुपौत्री: श्री उदयराज यादव · रामगंज, प्रतापगढ़)'}
              </span>
            </div>

            {/* Auspicious Wedding Divider (Center-Out Expansion) */}
            <ExpandingDivider color="#B45309" width="w-40" className="my-3" opacity={0.65} />

            {/* Groom & His Parents */}
            <div className="flex flex-col items-center">
              <h3 
                className="d-font" 
                style={{ fontSize: '30px', color: '#700B13', margin: 0, lineHeight: 1.15 }}
              >
                {lang === 'en' ? 'Pranay Yadav' : 'चि० प्रणय यादव'}
              </h3>
              <p 
                className="b-font" 
                style={{ fontSize: '16px', color: '#8A4B2B', margin: '4px 0 0', fontWeight: 600 }}
              >
                {lang === 'en' 
                  ? 'Son of Smt. Padmavati & Shri Naresh Chandra Yadav' 
                  : 'सुपुत्र: श्रीमती पदमावती एवं श्री नरेश चन्द्र यादव'}
              </p>
              <span 
                className="b-font text-[13px] mt-1" 
                style={{ color: '#8A4B2B', opacity: 0.9 }}
              >
                {lang === 'en' 
                  ? '(Karmanghat, Hyderabad, Telangana)' 
                  : '(करमनघाट, हैदराबाद, तेलंगाना)'}
              </span>
            </div>

          </div>

          {/* Invitation Headline */}
          <div className="mt-4 flex flex-col items-center gap-2 w-full text-center">
            <h2 
              className="d-font" 
              style={{ fontSize: lang === 'en' ? '42px' : '36px', lineHeight: '1.08', color: '#700B13', margin: 0 }}
            >
              {lang === 'en' ? (
                <>You are invited,<br />with your entire family</>
              ) : (
                <>सस्नेह निमंत्रण,<br />सपरिवार पधारें</>
              )}
            </h2>

            <div style={{ width: '64px', height: '2px', background: '#B45309', opacity: 0.6, marginTop: '8px' }} />
          </div>

        </div>
      </section>


      {/* =========================================================================
          2. HALDI & TEL POOJAN (Vibrant Amber / Turmeric Yellow)
          - Yellow smoothly deepens into forest green at the bottom
          - Direct text: NO BOXES, NO INTERACTIVE TILES (matching Section 5 Vidaai)
          ========================================================================= */}
      <section 
        className="sec-clean" 
        style={{ 
          minHeight: '820px', 
          padding: '40px 24px 100px', 
          /* Smooth transition: Starts at #FFFBEB, flows through amber gold, and gently fades into #1B4332 green at the bottom */
          background: 'linear-gradient(180deg, #FFFBEB 0%, #FDE68A 10%, #FBBF24 38%, #D97706 65%, #7C5212 85%, #1B4332 100%)', 
          color: '#4A2400' 
        }}
      >
        <div className="sec-content" style={{ gap: '14px' }}>
          
          <span 
            className="b-font" 
            style={{ fontSize: '13px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#7C2D12', fontWeight: 600 }}
          >
            {lang === 'en' ? 'Event One' : 'प्रथम कार्यक्रम'}
          </span>

          <AnimatedTitle 
            className="d-font text-center" 
            style={{ fontSize: lang === 'en' ? '50px' : '40px', lineHeight: '1.05', color: '#7C2D12', margin: 0 }}
          >
            {lang === 'en' ? 'Haldi & Tel Poojan' : 'हल्दी उत्सव एवं तेल पूजन'}
          </AnimatedTitle>

          <p 
            className="d-italic" 
            style={{ fontSize: '20px', margin: 0, color: '#5A2200' }}
          >
            {lang === 'en' ? 'Sunlit, playful, and full of laughter' : 'हल्दी चन्दन का उबटन लगें, दुल्हन का रूप सुनहरा सजें'}
          </p>

          {/* Faded Arched Background Photograph with Optical Depth Parallax */}
          <ParallaxArch 
            src="/assets/event-haldi.jpg" 
            alt="Haldi Ritual" 
            height={230} 
          />

          {/* Direct Text (Sequential Ceremonial Cascade) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="flex flex-col items-center gap-2 text-center mt-2 w-full max-w-[340px]"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <strong className="d-font" style={{ fontSize: '26px', color: '#4A1D08', textShadow: '0 1px 2px rgba(255,255,255,0.4)' }}>
                {lang === 'en' ? 'Tel Poojan' : 'तेल पूजन'}
              </strong>
              <span className="b-font" style={{ fontSize: '16px', color: '#3A1400', fontWeight: 500 }}>
                {lang === 'en' ? '23 November 2026 · Monday · 10:00 AM' : '23 नवम्बर 2026 · दिन सोमवार · प्रातः 10:00 बजे'}
              </span>
            </motion.div>

            <div className="my-1" />

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <strong className="d-font" style={{ fontSize: '26px', color: '#FFF8E7', textShadow: '0 2px 8px rgba(0,0,0,0.45)' }}>
                {lang === 'en' ? 'Haldi Ceremony' : 'हल्दी उत्सव'}
              </strong>
              <span className="b-font" style={{ fontSize: '16px', color: '#FFFBEB', fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}>
                {lang === 'en' ? '24 November 2026 · Tuesday · 01:00 PM' : '24 नवम्बर 2026 · दिन मंगलवार · दोपहर 01:00 बजे'}
              </span>
              <span className="b-font mt-1" style={{ fontSize: '16px', color: '#FFFBEB', fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.35)' }}>
                {lang === 'en' ? 'Satyanarayan Marriage Lawn, Ramganj, Pratapgarh' : 'सत्यनरायन मैरिज लॉन, रामगंज, प्रतापगढ़'}
              </span>
            </motion.div>

            <div className="my-1" />

            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '15px', color: '#FDE68A', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
              {lang === 'en' ? 'Dress code: Festive Yellow & Cream' : 'पहनावा: पारंपरिक पीला एवं क्रीम'}
            </motion.span>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          3. MEHENDI & SANGEET (Lush Forest / Henna Green)
          - Starts at #1B4332 green, flows through lush green, and smoothly fades into #700B13 crimson at bottom
          - Direct text: NO BOXES, NO INTERACTIVE TILES
          ========================================================================= */}
      <section 
        className="sec-clean" 
        style={{ 
          minHeight: '840px', 
          padding: '40px 24px 100px', 
          /* Continuous gradient from #1B4332 to #700B13 with zero seams */
          background: 'linear-gradient(180deg, #1B4332 0%, #1B4332 35%, #143525 65%, #3D1C1E 85%, #700B13 100%)', 
          color: '#F3C68F' 
        }}
      >
        <div className="sec-content" style={{ gap: '14px' }}>
          
          <span 
            className="b-font" 
            style={{ fontSize: '13px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#D8F3DC', fontWeight: 500 }}
          >
            {lang === 'en' ? 'Event Two' : 'द्वितीय कार्यक्रम'}
          </span>

          <AnimatedTitle 
            className="d-font text-center" 
            style={{ fontSize: lang === 'en' ? '50px' : '40px', lineHeight: '1.05', color: '#F3C68F', margin: 0 }}
          >
            {lang === 'en' ? 'Mehendi & Sangeet' : 'मेहंदी एवं संगीत उत्सव'}
          </AnimatedTitle>

          <p 
            className="d-italic" 
            style={{ fontSize: '20px', margin: 0, color: '#D8F3DC' }}
          >
            {lang === 'en' ? 'Henna, dholak and dancing till late' : 'ढोल मंजीरा हुआ पुराना अब है डी.जी. का जमाना'}
          </p>

          {/* Faded Arched Background Photograph with Optical Depth Parallax */}
          <ParallaxArch 
            src="/assets/event-mehendi.jpg" 
            alt="Mehendi & Sangeet" 
            height={220} 
          />

          {/* Direct Text (Sequential Ceremonial Cascade) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={containerVariants}
            className="flex flex-col items-center gap-2 text-center mt-2 w-full max-w-[340px]"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <strong className="d-font" style={{ fontSize: '24px', color: '#F3C68F' }}>
                {lang === 'en' ? 'Mehendi Ceremony' : 'मेहंदी उत्सव'}
              </strong>
              <span className="b-font" style={{ fontSize: '16px', color: '#D8F3DC' }}>
                {lang === 'en' ? '24 November 2026 · Tuesday · 04:00 PM' : '24 नवम्बर 2026 · दिन मंगलवार · सायं 04:00 बजे'}
              </span>
            </motion.div>

            <div className="my-1" />

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <strong className="d-font" style={{ fontSize: '24px', color: '#F3C68F' }}>
                {lang === 'en' ? 'Sangeet & DJ Night' : 'संगीत एवं डी.जे. उत्सव'}
              </strong>
              <span className="b-font" style={{ fontSize: '16px', color: '#D8F3DC' }}>
                {lang === 'en' ? '24 November 2026 · Tuesday · 07:00 PM' : '24 नवम्बर 2026 · दिन मंगलवार · सायं 07:00 बजे'}
              </span>
              <span className="b-font mt-1" style={{ fontSize: '16px', color: '#D8F3DC' }}>
                {lang === 'en' ? 'Satyanarayan Marriage Lawn, Ramganj, Pratapgarh' : 'सत्यनरायन मैरिज लॉन, रामगंज, प्रतापगढ़'}
              </span>
            </motion.div>

            <div className="my-1" />

            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '15px', color: '#52B788', fontWeight: 600 }}>
              {lang === 'en' ? 'Dress code: Greens & Gold' : 'पहनावा: हरा एवं सुनहरा'}
            </motion.span>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          4. SHUBH VIVAH (Royal Crimson / Sindoor Red)
          - Starts at #700B13, flows through royal red, and gently fades into #1B1528 indigo
          - Direct text: NO BOXES, NO INTERACTIVE TILES
          ========================================================================= */}
      <section 
        className="sec-clean" 
        style={{ 
          minHeight: '880px', 
          padding: '40px 24px 100px', 
          /* Continuous gradient from #700B13 to #1B1528 */
          background: 'linear-gradient(180deg, #700B13 0%, #700B13 35%, #5E0A11 65%, #35101E 85%, #1B1528 100%)', 
          color: '#FFF3DC' 
        }}
      >
        <div className="sec-content" style={{ gap: '14px' }}>
          
          <span 
            className="b-font" 
            style={{ fontSize: '13px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#E5C158', fontWeight: 600 }}
          >
            {lang === 'en' ? 'The Main Event' : 'मुख्य विवाह'}
          </span>

          <AnimatedTitle 
            className="d-font text-center" 
            style={{ fontSize: lang === 'en' ? '54px' : '44px', lineHeight: '1.05', color: '#E5C158', margin: 0 }}
          >
            {lang === 'en' ? 'Shubh Vivah' : 'शुभ विवाह एवं पाणिग्रहण'}
          </AnimatedTitle>

          <p 
            className="d-italic" 
            style={{ fontSize: '20px', margin: 0, color: '#FFF3DC' }}
          >
            {lang === 'en' ? 'Seven sacred vows, one beautiful beginning' : 'शुभ घड़ी आयेगी बारात, करेंगे स्वागत हम सब करेंगे साथ'}
          </p>

          {/* Faded Arched Background Photograph with Optical Depth Parallax */}
          <ParallaxArch 
            src="/assets/event-vivah.jpg" 
            alt="Sacred Vivah" 
            height={230} 
          />

          {/* Direct Text (Sacred Ceremonial Cascade) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={containerVariants}
            className="flex flex-col items-center gap-2 text-center mt-2 w-full max-w-[340px]"
          >
            <motion.strong variants={itemVariants} className="d-font" style={{ fontSize: '36px', color: '#E5C158', lineHeight: 1.1 }}>
              {lang === 'en' ? '25 November 2026' : '25 नवम्बर 2026'}
            </motion.strong>
            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '16px', color: '#FFF3DC' }}>
              {lang === 'en' ? 'Wednesday · Baraat Swagat: 07:00 PM' : 'दिन बुधवार · शुभ बारात आगमन: सायं 07:00 बजे'}
            </motion.span>
            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '16px', color: '#FFF3DC' }}>
              {lang === 'en' ? 'Varmala Ceremony: 08:30 PM' : 'जयमाला रस्म: रात्रि 08:30 बजे'}
            </motion.span>
            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '16px', color: '#FFF3DC' }}>
              {lang === 'en' ? 'Seven Sacred Pheras: 11:00 PM' : 'पाणिग्रहण (फेरे): रात्रि 11:00 बजे (शुभ लग्न)'}
            </motion.span>
            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '16px', color: '#FFF3DC' }}>
              {lang === 'en' ? 'Dinner & Blessings to follow' : 'प्रीतिभोज एवं शुभाशीर्वाद'}
            </motion.span>

            <div className="my-1" />

            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '16px', color: '#FFF3DC' }}>
              {lang === 'en' ? 'Satyanarayan Marriage Lawn, Ramganj, Pratapgarh' : 'सत्यनरायन मैरिज लॉन, रामगंज, जिला- प्रतापगढ़'}
            </motion.span>

            <div className="my-1" />

            <motion.span variants={itemVariants} className="b-font" style={{ fontSize: '15px', color: '#E5C158', fontWeight: 600 }}>
              {lang === 'en' ? 'Dress code: Royal Red, Maroon & Gold' : 'पहनावा: पारंपरिक लाल, मैरून एवं सुनहरा'}
            </motion.span>
          </motion.div>

        </div>
      </section>


      {/* =========================================================================
          5. VIDAAI (Twilight Midnight Indigo)
          - Praised by user as "perfect, grea color combination.. do this same for all sections.. no boxes.. direct text.."
          ========================================================================= */}
      <section 
        className="sec-clean" 
        style={{ 
          minHeight: '680px', 
          padding: '40px 24px 80px', 
          background: 'linear-gradient(180deg, #1B1528 0%, #140E20 50%, #0B0813 100%)', 
          color: '#DDD6FE', 
          justifyContent: 'center' 
        }}
      >
        <div className="sec-content" style={{ gap: '14px' }}>
          
          <span 
            className="b-font" 
            style={{ fontSize: '13px', letterSpacing: '.28em', textTransform: 'uppercase', color: '#C4B5FD', fontWeight: 500 }}
          >
            {lang === 'en' ? 'The Farewell' : 'विदाई बेला'}
          </span>

          <AnimatedTitle 
            className="d-font text-center" 
            style={{ fontSize: lang === 'en' ? '50px' : '40px', lineHeight: '1.05', color: '#DDD6FE', margin: 0 }}
          >
            {lang === 'en' ? 'Bheegi Palke' : 'भीगी पलकें (विदाई)'}
          </AnimatedTitle>

          <p 
            className="d-italic" 
            style={{ fontSize: '18px', lineHeight: '1.6', margin: 0, color: '#E9D5FF' }}
          >
            {lang === 'en' ? 'Heartfelt farewell, lifelong blessings, and new beginnings' : 'लगी असुवन की घड़ी, लो आगयी विदाई की घड़ी…'}
          </p>

          {/* Faded Arched Background Photograph with Optical Depth Parallax */}
          <ParallaxArch 
            src="/assets/event-vidaai.jpg" 
            alt="Vidaai Doli" 
            height={210} 
          />

          {/* Direct Text */}
          <span className="b-font" style={{ fontSize: '16px', color: '#F5F3FF', marginTop: '4px' }}>
            {lang === 'en' ? 'Thursday, 26 November 2026 · 05:00 AM' : '26 नवम्बर 2026 · दिन गुरूवार · प्रातः 05:00 बजे'}
          </span>

          <div className="my-1" />

          <h3 className="d-font" style={{ fontSize: '28px', lineHeight: '1.2', color: '#E5C158', margin: 0 }}>
            {lang === 'en' ? 'Your entire family is invited' : 'आप सपरिवार सादर आमंत्रित हैं'}
          </h3>
          <p className="b-font" style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', maxWidth: '320px', color: '#DDD6FE' }}>
            {lang === 'en' 
              ? 'Please join our celebrations and shower your heartfelt blessings upon us.' 
              : 'कृपया पधारकर वर-वधू को अपने स्नेहिल आशीर्वाद से अनुगृहीत करें।'}
          </p>
          <span className="b-font" style={{ fontSize: '15px', letterSpacing: '.14em', textTransform: 'uppercase', color: '#E5C158', marginTop: '6px' }}>
            {lang === 'en' ? 'With love, Ragani & Pranay' : 'स्नेही: रागनी एवं प्रणय'}
          </span>

        </div>
      </section>

    </div>
  );
};
