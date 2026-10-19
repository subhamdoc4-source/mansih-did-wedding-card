export interface EventItem {
  id: string;
  name: string;
  tagline: string;
  dateStr: string;
  dayStr: string;
  fullDate: string;
  time: string;
  icon: string;
  theme: 'green' | 'yellow' | 'red' | 'purple';
  ritualTag: string;
}

export interface InvitationContent {
  shloka1: string;
  shloka2: string;
  shloka3: string;
  tapToOpen: string;
  doorSubtext: string;
  weAreMarried: string;
  invitationNote: string;
  bride: {
    title: string;
    name: string;
    grandfather: string;
    parents: string;
    location: string;
  };
  groom: {
    title: string;
    name: string;
    parents: string;
    location: string;
  };
  scratchTitle: string;
  scratchInstruction: string;
  weddingDateRevealed: string;
  weddingDateSub: string;
  countdownTitle: string;
  timelineTitle: string;
  timelineSub: string;
  events: EventItem[];
  venueTitle: string;
  venueName: string;
  venueAddress: string;
  getDirections: string;
  kidsTitle: string;
  kidsDoha: string;
  kidsNames: string;
  familyTitle: string;
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
  rsvpTitle: string;
  rsvpSub: string;
  sendWishesBtn: string;
  shareWhatsApp: string;
  addToCalendar: string;
  musicPlaying: string;
  musicMuted: string;
}

export const INVITATION_CONTENT: Record<'hi' | 'en', InvitationContent> = {
  hi: {
    shloka1: "॥ श्री गणेशाय नमः ॥",
    shloka2: "वक्रतुण्ड महाकाय सूर्य कोटि समप्रभः।\nनिर्विघ्नं कुरुमे देव सर्व कार्येषु सर्वदा ॥",
    shloka3: "ऋद्धि सिद्धि सहित पधारो, गौरी पुत्र गणेश।\nकुटुम्ब सहित सब देव पधारो ब्रह्मा, विष्णु, महेश ॥",
    tapToOpen: "खुशखबरी खोलें",
    doorSubtext: "विवाह निमंत्रण पत्र देखने के लिए स्पर्श करें",
    weAreMarried: "शुभ परिणय सूत्र बन्धन",
    invitationNote: "स्नेहिल स्वजन, परमपिता परमेश्वर की असीम अनुकम्पा एवं पूर्वजों के आशीर्वाद से मेरी सुपुत्री आयु० रागनी यादव संग चि० प्रणय यादव के शुभ परिणय सूत्र बन्धन की मधुर बेला पर आप सादर आमंत्रित हैं। कृपया पधार कर कन्या-वर को अपने स्नेहाशीष आशीर्वाद से अभिसिंचित कर हमें अनुगृहीत करें।",
    bride: {
      title: "आयु० (वधू)",
      name: "रागनी यादव",
      grandfather: "सुपौत्री - श्री उदयराज यादव",
      parents: "सुपुत्री - श्रीमती नीलू एवं श्री राम मूरत यादव",
      location: "ग्राम- रामगंज, पोस्ट- पी.डी. चौराहा, तहसील- पट्टी, प्रतापगढ़",
    },
    groom: {
      title: "चि० (वर)",
      name: "प्रणय यादव",
      parents: "सुपुत्र - श्रीमती पदमावती एवं श्री नरेश चन्द्र यादव",
      location: "करमनघाट, हैदराबाद, तेलंगाना",
    },
    scratchTitle: "शुभ विवाह मुहूर्त",
    scratchInstruction: "शुभ तिथि जानने के लिए सोने की परत खुरचें ✨",
    weddingDateRevealed: "25 नवम्बर 2026",
    weddingDateSub: "दिन बुधवार | शुभ लग्न बेला",
    countdownTitle: "विवाह में शेष समय",
    timelineTitle: "मांगलिक कार्यक्रम",
    timelineSub: "आनंद, उल्लास और रीति-रिवाजों का मंगल उत्सव",
    events: [
      {
        id: "mehendi",
        name: "तेल पूजन एवं मेंहदी उत्सव",
        tagline: "हल्दी चन्दन का उबटन लगें। दुल्हन का रूप सुनहरा सजें ॥",
        dateStr: "23 नवम्बर 2026",
        dayStr: "दिन सोमवार",
        fullDate: "2026-11-23",
        time: "प्रातः 10:00 बजे से",
        icon: "Leaf",
        theme: "green",
        ritualTag: "🌿 मेंहदी की रस्म"
      },
      {
        id: "haldi",
        name: "हल्दी उत्सव",
        tagline: "मामा आयें भांजी के द्वार। लेकर प्रेम भरा उपहार ॥",
        dateStr: "24 नवम्बर 2026",
        dayStr: "दिन मंगलवार",
        fullDate: "2026-11-24",
        time: "दोपहर 01:00 बजे से",
        icon: "Sun",
        theme: "yellow",
        ritualTag: "🌼 हल्दी उबटन"
      },
      {
        id: "vivah",
        name: "शुभ विवाह (मुख्य शादी)",
        tagline: "शुभ घड़ी आयेगी बारात। करेंगे स्वागत हम सब करेंगे साथ ॥",
        dateStr: "25 नवम्बर 2026",
        dayStr: "दिन बुधवार",
        fullDate: "2026-11-25",
        time: "सायं 07:00 बजे से (शुभ लग्न)",
        icon: "Crown",
        theme: "red",
        ritualTag: "🔥 फेरे एवं जयमाला"
      },
      {
        id: "vidaai",
        name: "भीगी पलकें (विदाई)",
        tagline: "लगी असुवन की घड़ी। लो आगयी विदाई की घड़ी ॥",
        dateStr: "26 नवम्बर 2026",
        dayStr: "दिन गुरूवार",
        fullDate: "2026-11-26",
        time: "प्रातः 05:00 बजे",
        icon: "HeartHandshake",
        theme: "purple",
        ritualTag: "🌸 विदाई मंगल कामना"
      }
    ],
    venueTitle: "कार्यक्रम स्थल",
    venueName: "सत्यनरायन मैरिज लॉन",
    venueAddress: "नगर पंचायत रामगंज, जिला- प्रतापगढ़ (उत्तर प्रदेश)",
    getDirections: "गूगल मैप पर रास्ता देखें",
    kidsTitle: "बालआग्रह",
    kidsDoha: "ढोल मंजीरा हुआ पुराना अब है डी.जी. का जमाना,\nमेरी दीदी की शादी में जुलूल-जुलूल आना!",
    kidsNames: "— आंशी, निधी, शिषू",
    familyTitle: "परिवार एवं स्वागतकर्ता",
    vineetLabel: "विनीत",
    vineetName: "श्री उदयराज यादव",
    vineetAddress: "ग्राम- रामगंज, पोस्ट- पी.डी. चौराहा, तहसील- पट्टी, प्रतापगढ़",
    swagatakankshiLabel: "स्वागताकांक्षी",
    swagatakankshiNames: [
      "श्री राम आशीष यादव",
      "श्री धर्मराज यादव",
      "श्री राम तीर्थ यादव",
      "श्री धनंजय यादव"
    ],
    darshanabhilashiLabel: "दर्शनाभिलाषी",
    darshanabhilashiNames: "राकेश, सूरज, रमेश, मनीष, प्रिंस, अनीष, अभय, अनुराग, अस्मित, अभिनव, अश्विन, देवास, आदविक (पण्डित) एवं समस्त यादव परिवार।",
    preshakLabel: "प्रेषक",
    preshakNames: ["उदयराज यादव", "राम तीर्थ यादव"],
    preshakPhones: ["+91 8331903048", "+91 9415253054"],
    rsvpTitle: "वर-वधू को आशीर्वाद भेजें",
    rsvpSub: "आपकी उपस्थिति और शुभकामनाएं हमारे लिए अमूल्य हैं",
    sendWishesBtn: "व्हाट्सएप पर बधाई व आशीर्वाद भेजें",
    shareWhatsApp: "निमंत्रण पत्र शेयर करें",
    addToCalendar: "कैलेंडर में जोड़ें",
    musicPlaying: "संगीत चालू",
    musicMuted: "संगीत बंद"
  },
  en: {
    shloka1: "॥ Om Shri Ganeshaya Namah ॥",
    shloka2: "Salutations to Lord Ganesha, the remover of all obstacles and giver of blessings.",
    shloka3: "May the divine blessings of God grace this holy wedding celebration.",
    tapToOpen: "Open Invitation",
    doorSubtext: "Tap the royal seal to open the wedding card",
    weAreMarried: "Wedding Celebration",
    invitationNote: "With the loving blessings of God and our elders, we warmly invite you to celebrate the wedding ceremony of our beloved daughter Ragani Yadav with Pranay Yadav. Please join us, bless the couple, and share our joy!",
    bride: {
      title: "Bride",
      name: "Ragani Yadav",
      grandfather: "Granddaughter of Shri Udayraj Yadav",
      parents: "Daughter of Smt. Neelu & Shri Ram Moorat Yadav",
      location: "Ramganj, Patti, Pratapgarh (U.P.)",
    },
    groom: {
      title: "Groom",
      name: "Pranay Yadav",
      parents: "Son of Smt. Padmavati & Shri Naresh Chandra Yadav",
      location: "Karmanghat, Hyderabad, Telangana",
    },
    scratchTitle: "Wedding Date & Time",
    scratchInstruction: "Scratch the golden card to reveal the date ✨",
    weddingDateRevealed: "25 November 2026",
    weddingDateSub: "Wednesday | Auspicious Wedding Day",
    countdownTitle: "Countdown to the Big Day",
    timelineTitle: "Wedding Celebrations",
    timelineSub: "Join us for every colorful ritual and celebration",
    events: [
      {
        id: "mehendi",
        name: "Tel Poojan & Mehendi",
        tagline: "Lush green henna patterns, songs, and sandalwood blessings for the bride.",
        dateStr: "23 Nov 2026",
        dayStr: "Monday",
        fullDate: "2026-11-23",
        time: "10:00 AM onwards",
        icon: "Leaf",
        theme: "green",
        ritualTag: "🌿 Henna Ritual"
      },
      {
        id: "haldi",
        name: "Haldi Ceremony",
        tagline: "Sunny splashes of yellow, family blessings, and sweet gifts.",
        dateStr: "24 Nov 2026",
        dayStr: "Tuesday",
        fullDate: "2026-11-24",
        time: "01:00 PM onwards",
        icon: "Sun",
        theme: "yellow",
        ritualTag: "🌼 Turmeric Glow"
      },
      {
        id: "vivah",
        name: "Shubh Vivah (Grand Wedding)",
        tagline: "The grand Baraat arrival, Varmala, and sacred wedding vows around the holy fire.",
        dateStr: "25 Nov 2026",
        dayStr: "Wednesday",
        fullDate: "2026-11-25",
        time: "07:00 PM onwards",
        icon: "Crown",
        theme: "red",
        ritualTag: "🔥 Wedding Vows"
      },
      {
        id: "vidaai",
        name: "Vidaai (Farewell)",
        tagline: "Heartfelt farewell with sweet memories and prayers for her happy new home.",
        dateStr: "26 Nov 2026",
        dayStr: "Thursday",
        fullDate: "2026-11-26",
        time: "05:00 AM",
        icon: "HeartHandshake",
        theme: "purple",
        ritualTag: "🌸 New Journey"
      }
    ],
    venueTitle: "Wedding Venue",
    venueName: "Satyanarayan Marriage Lawn",
    venueAddress: "Nagar Panchayat Ramganj, Pratapgarh, Uttar Pradesh",
    getDirections: "Open in Google Maps",
    kidsTitle: "A Sweet Note From The Kids",
    kidsDoha: "Old drums are gone, now it's time for the DJ party!\nYou definitely, definitely must come to our big sister's wedding!",
    kidsNames: "— With love: Aanshi, Nidhi, Shishu",
    familyTitle: "Warm Welcome From The Family",
    vineetLabel: "Chief Host",
    vineetName: "Shri Udayraj Yadav",
    vineetAddress: "Village Ramganj, P.D. Chauraha, Patti, Pratapgarh",
    swagatakankshiLabel: "Welcoming Hosts",
    swagatakankshiNames: [
      "Shri Ram Ashish Yadav",
      "Shri Dharmraj Yadav",
      "Shri Ram Teerth Yadav",
      "Shri Dhananjay Yadav"
    ],
    darshanabhilashiLabel: "Well Wishers",
    darshanabhilashiNames: "Rakesh, Sooraj, Ramesh, Manish, Prince, Aneesh, Abhay, Anurag, Asmit, Abhinav, Ashwin, Devas, Aadvik (Pandit) & the entire Yadav Family.",
    preshakLabel: "Sent with Respect By",
    preshakNames: ["Udayraj Yadav", "Ram Teerth Yadav"],
    preshakPhones: ["+91 8331903048", "+91 9415253054"],
    rsvpTitle: "Send Your Blessings & RSVP",
    rsvpSub: "Your presence and warm wishes mean the world to us",
    sendWishesBtn: "Send Blessings via WhatsApp",
    shareWhatsApp: "Share This Invitation Card",
    addToCalendar: "Add to Calendar",
    musicPlaying: "Music Playing",
    musicMuted: "Music Muted"
  }
};
