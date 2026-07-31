// Mock data for Rəngarəng Əsmər Beauty Salon

export const salonInfo = {
  name: "Rəngarəng Əsmər",
  tagline: "Gözəlliyinizin ünvanı",
  description: "Rəngarəng Əsmər gözəllik salonu olaraq, sizə ən yüksək keyfiyyətli xidmətlər təqdim edirik. Peşəkar komandamız və müasir avadanlıqlarımızla gözəlliyinizi üzə çıxarırıq.",
  phone: "+994 12 345 67 89",
  email: "info@rengarengesmer.az",
  address: "Bakı şəhəri, Nizami küç. 123",
  workingHours: {
    weekdays: "09:00 - 20:00",
    saturday: "10:00 - 18:00",
    sunday: "Bağlıdır"
  },
  social: {
    instagram: "https://instagram.com/rengarengesmer",
    facebook: "https://facebook.com/rengarengesmer",
    whatsapp: "+994501234567"
  }
};

export const services = [
  {
    id: 1,
    title: "Saç Üzrə Xidmətlər",
    description: "Peşəkar saç kəsimi, rəngləmə, fönləmə və saç düzəldilməsi xidmətləri",
    icon: "Scissors",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85",
    items: [
      { name: "Qadın saç kəsimi", price: "25 AZN" },
      { name: "Kişi saç kəsimi", price: "15 AZN" },
      { name: "Saç rəngləmə", price: "50-100 AZN" },
      { name: "Fön", price: "20 AZN" },
      { name: "Saç düzəldilməsi (Keratin)", price: "150 AZN" }
    ]
  },
  {
    id: 2,
    title: "Dırnaq Xidmətləri",
    description: "Manikür, pedikür və dırnaq dizaynı xidmətləri",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85",
    items: [
      { name: "Klassik manikür", price: "20 AZN" },
      { name: "Gel manikür", price: "35 AZN" },
      { name: "Klassik pedikür", price: "25 AZN" },
      { name: "Gel pedikür", price: "40 AZN" },
      { name: "Dırnaq dizaynı", price: "5-15 AZN" }
    ]
  },
  {
    id: 3,
    title: "Üz Baxımı",
    description: "Dəri təmizləmə, maskalar və professional üz baxımı",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnR8ZW58MHx8fHwxNzgzODczOTI3fDA&ixlib=rb-4.1.0&q=85",
    items: [
      { name: "Dəri təmizləmə", price: "40 AZN" },
      { name: "Klassik üz maskası", price: "30 AZN" },
      { name: "Anti-aging baxım", price: "60 AZN" },
      { name: "Mezoterapi", price: "80 AZN" },
      { name: "Peelinq", price: "45 AZN" }
    ]
  },
  {
    id: 4,
    title: "Makiyaj",
    description: "Gündəlik və təntənəli makiyaj xidmətləri",
    icon: "Palette",
    image: "https://images.pexels.com/photos/23349912/pexels-photo-23349912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    items: [
      { name: "Gündəlik makiyaj", price: "40 AZN" },
      { name: "Axşam makiyajı", price: "60 AZN" },
      { name: "Gəlin makiyajı", price: "100 AZN" },
      { name: "Qaş düzəldilməsi", price: "15 AZN" },
      { name: "Kirpik extension", price: "50 AZN" }
    ]
  },
  {
    id: 5,
    title: "Masaj",
    description: "Rahatlaşdırıcı və terapevtik masaj xidmətləri",
    icon: "Hand",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHxzcGElMjB0cmVhdG1lbnR8ZW58MHx8fHwxNzgzODczOTI3fDA&ixlib=rb-4.1.0&q=85",
    items: [
      { name: "Bel masajı", price: "35 AZN" },
      { name: "Tam bədən masajı", price: "60 AZN" },
      { name: "Üz masajı", price: "25 AZN" },
      { name: "Antiselülit masajı", price: "50 AZN" },
      { name: "Aromaterapiya", price: "70 AZN" }
    ]
  },
  {
    id: 6,
    title: "Epilyasiya",
    description: "Lazer və ağda ilə epilyasiya xidmətləri",
    icon: "Zap",
    image: "https://images.pexels.com/photos/9146381/pexels-photo-9146381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    items: [
      { name: "Lazer epilyasiya (hər zona)", price: "30-80 AZN" },
      { name: "Ağda epilyasiya (qol)", price: "20 AZN" },
      { name: "Ağda epilyasiya (ayaq)", price: "25 AZN" },
      { name: "Üz epilyasiya", price: "15 AZN" },
      { name: "Şeker pastası", price: "18-30 AZN" }
    ]
  }
];

export const staff = [
  {
    id: 1,
    name: "Aynur Məmmədova",
    position: "Salon Direktoru və Baş Stilist",
    experience: "12 il təcrübə",
    specialization: "Saç rəngləmə və dizayn",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85",
    bio: "Gözəllik sənətində 12 illik təcrübəyə malik, beynəlxalq sertifikatlara sahib professional stilist."
  },
  {
    id: 2,
    name: "Günel İsmayılova",
    position: "Baş Kosmetoloq",
    experience: "8 il təcrübə",
    specialization: "Üz baxımı və dəri müalicəsi",
    image: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbnxlbnwwfHx8fDE3ODM4NzM5MTd8MA&ixlib=rb-4.1.0&q=85",
    bio: "Dəri problemlərinin müalicəsində ixtisaslaşmış, müasir kosmetologiya texnologiyalarına yiyələnmiş mütəxəssis."
  },
  {
    id: 3,
    name: "Səbinə Əliyeva",
    position: "Makiyaj Ustası",
    experience: "6 il təcrübə",
    specialization: "Gəlin makiyajı və professional make-up",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHwyfHxiZWF1dHklMjBzYWxvbnxlbnwwfHx8fDE3ODM4NzM5MTd8MA&ixlib=rb-4.1.0&q=85",
    bio: "Kreativ makiyaj dizaynı və gəlin makiyajında mükəmməl təcrübəyə sahib sənətkar."
  },
  {
    id: 4,
    name: "Leyla Həsənova",
    position: "Nail Artist",
    experience: "5 il təcrübə",
    specialization: "Dırnaq dizaynı və art",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjV8MHwxfHNlYXJjaHw0fHxiZWF1dHklMjBzYWxvbnxlbnwwfHx8fDE3ODM4NzM5MTd8MA&ixlib=rb-4.1.0&q=85",
    bio: "Yaradıcı dırnaq dizaynları və incə nail art işləri ilə tanınan peşəkar master."
  },
  {
    id: 5,
    name: "Nigar Quliyeva",
    position: "Masaj Terapisti",
    experience: "7 il təcrübə",
    specialization: "Terapevtik və rahatlaşdırıcı masaj",
    image: "https://images.pexels.com/photos/15949782/pexels-photo-15949782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    bio: "Müxtəlif masaj texnikalarında ixtisaslaşmış, lisenziyalı masaj mütəxəssisi."
  },
  {
    id: 6,
    name: "Miran",
    position: "Baş Stilist",
    experience: "3 il təcrübə",
    specialization: "Ümumi gözəllik xidmətləri",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85",
    bio: "Peşəkar və mehriban yanaşması ilə tanınan usta."
  }
];

export const gallery = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwzfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc4Mzg3MzkxNnww&ixlib=rb-4.1.0&q=85",
    category: "Salon İnteryeri",
    title: "Qəbul Sahəsi"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHwyfHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc4Mzg3MzkxNnww&ixlib=rb-4.1.0&q=85",
    category: "Salon İnteryeri",
    title: "İş Sahələri"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTJ8MHwxfHNlYXJjaHw0fHxzYWxvbiUyMGludGVyaW9yfGVufDB8fHx8MTc4Mzg3MzkxNnww&ixlib=rb-4.1.0&q=85",
    category: "Salon İnteryeri",
    title: "Lüks Atmosfer"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7195800/pexels-photo-7195800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Salon İnteryeri",
    title: "Modern Dizayn"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/13068377/pexels-photo-13068377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "Salon İnteryeri",
    title: "Rahat Mühit"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1734111719430-fe4a3973f8af?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxoYWlyJTIwc3R5bGluZ3xlbnwwfHx8fDE3ODM4NzM5MjJ8MA&ixlib=rb-4.1.0&q=85",
    category: "Xidmətlər",
    title: "Peşəkar Saç Baxımı"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxzcGElMjB0cmVhdG1lbnR8ZW58MHx8fHwxNzgzODczOTI3fDA&ixlib=rb-4.1.0&q=85",
    category: "Xidmətlər",
    title: "Üz Baxımı"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHw0fHxzcGElMjB0cmVhdG1lbnR8ZW58MHx8fHwxNzgzODczOTI3fDA&ixlib=rb-4.1.0&q=85",
    category: "Xidmətlər",
    title: "SPA Terapiya"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aygül Məmmədova",
    rating: 5,
    comment: "Əla xidmət və professional yanaşma! Komandanın hamısı çox mehriban və bacarıqlıdır. Hər dəfə burada özümü xüsusi hiss edirəm.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Könül Əhmədova",
    rating: 5,
    comment: "Gəlin makiyajımı burda etdirdim, nəticədən çox razı qaldım! Səbinə xanım əsl sənətkardır. Hər kəsə tövsiyə edirəm.",
    date: "2024-01-10"
  },
  {
    id: 3,
    name: "Zeynəb Hüseynova",
    rating: 5,
    comment: "Saç rəngləmə işində Aynur xanımın əli qızıldır. Tələb etdiyim rəngi mükəmməl şəkildə etdi. Salon da çox təmiz və rahatdır.",
    date: "2024-01-05"
  },
  {
    id: 4,
    name: "Nigar Cavadova",
    rating: 5,
    comment: "Üz baxımında Günel xanımın işi heyrətamizdir. Dərim artıq daha sağlam və parlaq görünür. Təşəkkür edirəm!",
    date: "2023-12-28"
  }
];

// Contact form submission (mock)
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form məlumatları (mock):", formData);
      resolve({
        success: true,
        message: "Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq."
      });
    }, 1000);
  });
};

// Appointment booking (mock)
export const bookAppointment = async (appointmentData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Randevu məlumatları (mock):", appointmentData);
      resolve({
        success: true,
        message: "Randevunuz qeydə alındı! Təsdiq üçün sizinlə əlaqə saxlayacağıq."
      });
    }, 1000);
  });
};
