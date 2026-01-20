type MultiLanguageText = {
  es: string;
  en: string;
  pt: string;
};

type MultiLanguageArray = {
  es: string[];
  en: string[];
  pt: string[];
};

export interface Activity {
  id: number;
  slug: string;
  category: 'Trekking' | 'Escalada'; 
  
  // Campos traducibles
  title: MultiLanguageText;
  price: MultiLanguageText;
  duration: MultiLanguageText;
  difficulty: MultiLanguageText;
  season: MultiLanguageText;
  location: MultiLanguageText;
  altitude?: MultiLanguageText;
  shortDescription: MultiLanguageText;
  fullDescription: MultiLanguageText;
  
  images: string[];
  
  // Arrays traducibles
  itinerary: MultiLanguageArray;
  equipment: MultiLanguageArray;
  included: MultiLanguageArray;
}

export const activitiesData: Activity[] = [
  // ==========================================
  // ESCALADA (2 Opciones)
  // ==========================================
  {
    id: 101,
    slug: "escalada-mono-largo",
    category: "Escalada",
    images: ["/Depo 2.webp", "/Depo 3.webp", "/Depo 4.webp", "/Depo.webp"],
    
    title: {
      es: "Escalada: Vía de Mono Largo",
      en: "Climbing: Single Pitch Route",
      pt: "Escalada: Via de Mono Largo"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "6 a 8 Horas",
      en: "6 to 8 Hours",
      pt: "6 a 8 Horas"
    },
    difficulty: {
      es: "Adaptable",
      en: "Adaptable",
      pt: "Adaptável"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Cordillera de los Andes",
      en: "Andes Mountains",
      pt: "Cordilheira dos Andes"
    },
    altitude: {
      es: "Variable",
      en: "Variable",
      pt: "Variável"
    },
    shortDescription: {
      es: "Ideal para iniciarse o perfeccionar técnica. Sectores equipados y seguros.",
      en: "Ideal for beginners or technique perfection. Equipped and safe sectors.",
      pt: "Ideal para iniciantes ou aperfeiçoamento técnico. Setores equipados e seguros."
    },
    fullDescription: {
      es: "La escalada deportiva de mono largo es la opción ideal para iniciarse o perfeccionar técnica en roca. Se desarrolla en sectores equipados con anclajes fijos, permitiendo escalar vías de un largo con total seguridad. El guía acompaña en todo momento, adaptando la actividad al nivel y objetivos del grupo.",
      en: "Single pitch sport climbing is the ideal option to start or perfect rock technique. It takes place in sectors equipped with fixed anchors, allowing you to climb single-pitch routes with total safety. The guide accompanies you at all times, adapting the activity to the group's level and goals.",
      pt: "A escalada esportiva de mono largo é a opção ideal para iniciar ou aperfeiçoar a técnica na rocha. Desenvolve-se em setores equipados com ancoragens fixas, permitindo escalar vias de um largo com total segurança. O guia acompanha a todo momento, adaptando a atividade ao nível e objetivos do grupo."
    },
    itinerary: {
      es: [
        "08:00 – Encuentro y traslado al sector",
        "09:30 – Aproximación y charla técnica",
        "10:30 – Inicio de la escalada",
        "13:30 – Almuerzo tipo vianda y descanso",
        "16:30 – Fin de la actividad",
        "18:00 – Regreso"
      ],
      en: [
        "08:00 – Meeting and transfer to the sector",
        "09:30 – Approach and technical briefing",
        "10:30 – Start of climbing",
        "13:30 – Box lunch and rest",
        "16:30 – End of activity",
        "18:00 – Return"
      ],
      pt: [
        "08:00 – Encontro e traslado ao setor",
        "09:30 – Aproximação e palestra técnica",
        "10:30 – Início da escalada",
        "13:30 – Almoço tipo lanche e descanso",
        "16:30 – Fim da atividade",
        "18:00 – Retorno"
      ]
    },
    equipment: {
      es: [
        "Ropa cómoda y elástica",
        "Abrigo ligero",
        "Zapatillas deportivas (para aproximación)",
        "Agua y comida de marcha",
        "Equipo técnico incluido (arnés, casco, pies de gato)"
      ],
      en: [
        "Comfortable and stretchy clothes",
        "Light jacket",
        "Sneakers (for approach)",
        "Water and trail snacks",
        "Technical gear included (harness, helmet, climbing shoes)"
      ],
      pt: [
        "Roupa confortável e elástica",
        "Casaco leve",
        "Tênis esportivo (para aproximação)",
        "Água e lanche de trilha",
        "Equipamento técnico incluído (cadeirinha, capacete, sapatilhas)"
      ]
    },
    included: {
      es: [
        "Guía de escalada certificado",
        "Equipo técnico completo",
        "Planificación y gestión",
        "Botiquín de primeros auxilios",
        "Seguro de accidentes personales"
      ],
      en: [
        "Certified climbing guide",
        "Complete technical gear",
        "Planning and management",
        "First aid kit",
        "Personal accident insurance"
      ],
      pt: [
        "Guia de escalada certificado",
        "Equipamento técnico completo",
        "Planejamento e gestão",
        "Kit de primeiros socorros",
        "Seguro de acidentes pessoais"
      ]
    }
  },
  {
    id: 102,
    slug: "escalada-multi-largo",
    category: "Escalada",
    images: ["/Multi.webp", "/Multi 2.webp", "/Multi 4.png", "/Multi 3.webp", "/Multi 5.webp", "/Multi 6.webp"],
    
    title: {
      es: "Escalada: Vías Multi Largo",
      en: "Climbing: Multi-Pitch Routes",
      pt: "Escalada: Vias Multi-Pitch"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "8 a 10 Horas",
      en: "8 to 10 Hours",
      pt: "8 a 10 Horas"
    },
    difficulty: {
      es: "Media - Alta",
      en: "Medium - High",
      pt: "Média - Alta"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Paredes Naturales",
      en: "Natural Walls",
      pt: "Paredes Naturais"
    },
    altitude: {
      es: "Variable",
      en: "Variable",
      pt: "Variável"
    },
    shortDescription: {
      es: "Para quienes buscan un desafío mayor. Ascenso de vías de varios largos en pared.",
      en: "For those seeking a greater challenge. Ascent of multi-pitch wall routes.",
      pt: "Para quem busca um desafio maior. Ascensão de vias de vários largos em parede."
    },
    fullDescription: {
      es: "La escalada deportiva de multi largo está pensada para quienes buscan una experiencia más completa y desafiante. Consiste en el ascenso de vías de varios largos, combinando técnica, manejo de cuerdas, lectura de la roca y progresión en pared. Siempre bajo la supervisión directa de un guía profesional.",
      en: "Multi-pitch sport climbing is designed for those seeking a more complete and challenging experience. It involves ascending routes of several pitches, combining technique, rope management, rock reading, and wall progression. Always under the direct supervision of a professional guide.",
      pt: "A escalada esportiva multi-pitch é pensada para quem busca uma experiência mais completa e desafiadora. Consiste na ascensão de vias de vários largos, combinando técnica, manejo de cordas, leitura da rocha e progressão em parede. Sempre sob a supervisão direta de um guia profissional."
    },
    itinerary: {
      es: [
        "07:00 – Encuentro y traslado",
        "08:30 – Aproximación a la pared",
        "09:30 – Charla técnica y organización",
        "10:00 – Inicio de la escalada",
        "16:00 – Cumbre o final de vía",
        "18:30 – Regreso"
      ],
      en: [
        "07:00 – Meeting and transfer",
        "08:30 – Approach to the wall",
        "09:30 – Technical briefing and organization",
        "10:00 – Start of climbing",
        "16:00 – Summit or end of route",
        "18:30 – Return"
      ],
      pt: [
        "07:00 – Encontro e traslado",
        "08:30 – Aproximação da parede",
        "09:30 – Palestra técnica e organização",
        "10:00 – Início da escalada",
        "16:00 – Cume ou fim da via",
        "18:30 – Retorno"
      ]
    },
    equipment: {
      es: [
        "Experiencia previa recomendada",
        "Ropa técnica de montaña",
        "Mochila pequeña",
        "Agua y comida de marcha"
      ],
      en: [
        "Previous experience recommended",
        "Technical mountain clothing",
        "Small backpack",
        "Water and trail snacks"
      ],
      pt: [
        "Experiência prévia recomendada",
        "Roupa técnica de montanha",
        "Mochila pequena",
        "Água e lanche de trilha"
      ]
    },
    included: {
      es: [
        "Guía de escalada certificado",
        "Equipo técnico completo (cuerdas, arneses, cascos, cintas)",
        "Gestión de la vía y seguridad",
        "Botiquín y comunicación",
        "Seguro de accidentes personales"
      ],
      en: [
        "Certified climbing guide",
        "Complete technical gear (ropes, harnesses, helmets, quickdraws)",
        "Route management and safety",
        "First aid kit and communication",
        "Personal accident insurance"
      ],
      pt: [
        "Guia de escalada certificado",
        "Equipamento técnico completo (cordas, cadeirinhas, capacetes, costuras)",
        "Gestão da via e segurança",
        "Kit de primeiros socorros e comunicação",
        "Seguro de acidentes pessoais"
      ]
    }
  },

  // ==========================================
  // TREKKING (8 Opciones)
  // ==========================================
  {
    id: 1,
    slug: "cerro-banos",
    category: "Trekking",
    images: ["/trekking.webp", "/Cerros 3.webp", "/Cerros 4.webp"],
    
    title: {
      es: "Cerro Baños",
      en: "Cerro Baños",
      pt: "Cerro Baños"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "8 Horas",
      en: "8 Hours",
      pt: "8 Horas"
    },
    difficulty: {
      es: "Media",
      en: "Medium",
      pt: "Média"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera Mendocina",
      en: "Mendoza Pre-Andes",
      pt: "Pré-cordilheira Mendocina"
    },
    altitude: {
      es: "2.300 msnm",
      en: "2,300 masl",
      pt: "2.300 msnm"
    },
    shortDescription: {
      es: "Trekking de montaña completo con vistas abiertas hacia la precordillera y el valle.",
      en: "Complete mountain trekking with open views towards the Pre-Andes and the valley.",
      pt: "Trekking de montanha completo com vistas abertas para a pré-cordilheira e o vale."
    },
    fullDescription: {
      es: "El Cerro Baños es una excelente opción para quienes desean un trekking de montaña completo, con desnivel progresivo y vistas abiertas hacia la precordillera y el valle mendocino. El recorrido atraviesa quebradas, senderos de acarreo y sectores de roca, permitiendo una experiencia variada y dinámica.",
      en: "Cerro Baños is an excellent option for those who want a complete mountain trek, with progressive elevation gain and open views towards the Pre-Andes and the Mendoza valley. The route crosses gorges, scree paths, and rocky sectors, allowing for a varied and dynamic experience.",
      pt: "O Cerro Baños é uma excelente opção para quem deseja um trekking de montanha completo, com desnível progressivo e vistas abertas para a pré-cordilheira e o vale de Mendoza. O percurso atravessa ravinas, trilhas de cascalho e setores de rocha, permitindo uma experiência variada e dinâmica."
    },
    itinerary: {
      es: [
        "08:00 – Encuentro y traslado",
        "09:30 – Inicio del trekking",
        "12:30 – Descanso y almuerzo tipo vianda",
        "15:00 – Cumbre",
        "18:00 – Regreso al punto de encuentro"
      ],
      en: [
        "08:00 – Meeting and transfer",
        "09:30 – Start of trekking",
        "12:30 – Rest and box lunch",
        "15:00 – Summit",
        "18:00 – Return to meeting point"
      ],
      pt: [
        "08:00 – Encontro e traslado",
        "09:30 – Início do trekking",
        "12:30 – Descanso e almoço",
        "15:00 – Cume",
        "18:00 – Retorno ao ponto de encontro"
      ]
    },
    equipment: {
      es: ["Mochila de día", "Zapatillas de trekking", "Ropa en capas", "Agua (2L)", "Protector solar"],
      en: ["Daypack", "Trekking shoes", "Layered clothing", "Water (2L)", "Sunscreen"],
      pt: ["Mochila de ataque", "Tênis de trekking", "Roupas em camadas", "Água (2L)", "Protetor solar"]
    },
    included: {
      es: ["Guía habilitado", "Planificación", "Botiquín", "Comunicación", "Seguro"],
      en: ["Certified guide", "Planning", "First aid kit", "Communication", "Insurance"],
      pt: ["Guia habilitado", "Planejamento", "Kit de primeiros socorros", "Comunicação", "Seguro"]
    }
  },
  {
    id: 2,
    slug: "cerro-bayo",
    category: "Trekking",
    images: ["/valle.webp", "/Cerros 2.webp", "/Cerros 25.webp"],
    
    title: {
      es: "Cerro Bayo",
      en: "Cerro Bayo",
      pt: "Cerro Bayo"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "6 a 7 Horas",
      en: "6 to 7 Hours",
      pt: "6 a 7 Horas"
    },
    difficulty: {
      es: "Media – Baja",
      en: "Medium – Low",
      pt: "Média – Baixa"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Cercanías Gran Mendoza",
      en: "Near Greater Mendoza",
      pt: "Proximidades da Grande Mendoza"
    },
    altitude: {
      es: "2.100 msnm",
      en: "2,100 masl",
      pt: "2.100 msnm"
    },
    shortDescription: {
      es: "Clásico y accesible. Ideal para primer contacto con trekking de montaña.",
      en: "Classic and accessible. Ideal for a first contact with mountain trekking.",
      pt: "Clássico e acessível. Ideal para um primeiro contato com trekking de montanha."
    },
    fullDescription: {
      es: "Uno de los cerros más clásicos y accesibles de la zona. Ideal para quienes buscan un primer contacto con el trekking de montaña, sin resignar vistas espectaculares. Durante el ascenso se obtiene una panorámica constante de la ciudad de Mendoza y la Cordillera Principal.",
      en: "One of the most classic and accessible hills in the area. Ideal for those looking for a first contact with mountain trekking without giving up spectacular views. During the ascent, you get a constant panoramic view of the city of Mendoza and the Main Range.",
      pt: "Um dos morros mais clássicos e acessíveis da região. Ideal para quem busca um primeiro contato com trekking de montanha, sem abrir mão de vistas espetaculares. Durante a subida obtém-se uma panorâmica constante da cidade de Mendoza e da Cordilheira Principal."
    },
    itinerary: {
      es: ["08:30 – Encuentro", "09:00 – Inicio del ascenso", "13:00 – Cumbre", "16:30 – Regreso"],
      en: ["08:30 – Meeting", "09:00 – Start of ascent", "13:00 – Summit", "16:30 – Return"],
      pt: ["08:30 – Encontro", "09:00 – Início da subida", "13:00 – Cume", "16:30 – Retorno"]
    },
    equipment: {
      es: ["Calzado cómodo", "Ropa deportiva", "Agua", "Gorra"],
      en: ["Comfortable footwear", "Sportswear", "Water", "Cap"],
      pt: ["Calçado confortável", "Roupa esportiva", "Água", "Boné"]
    },
    included: {
      es: ["Guías habilitados", "Logística", "Seguro", "Botiquín"],
      en: ["Certified guides", "Logistics", "Insurance", "First aid kit"],
      pt: ["Guias habilitados", "Logística", "Seguro", "Kit de primeiros socorros"]
    }
  },
  {
    id: 3,
    slug: "cerro-nahuel",
    category: "Trekking",
    images: ["/Cerros 24.webp", "/Cerros 5.webp", "/Cerros 6.webp"],
    
    title: {
      es: "Cerro Nahuel",
      en: "Cerro Nahuel",
      pt: "Cerro Nahuel"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "7 a 8 Horas",
      en: "7 to 8 Hours",
      pt: "7 a 8 Horas"
    },
    difficulty: {
      es: "Media",
      en: "Medium",
      pt: "Média"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera",
      en: "Pre-Andes",
      pt: "Pré-cordilheira"
    },
    altitude: {
      es: "2.200 msnm",
      en: "2,200 masl",
      pt: "2.200 msnm"
    },
    shortDescription: {
      es: "Exigente pero gratificante. Pendientes sostenidas y vistas a cordones montañosos.",
      en: "Demanding but rewarding. Sustained slopes and views of mountain ranges.",
      pt: "Exigente mas gratificante. Encostas sustentadas e vistas para cadeias de montanhas."
    },
    fullDescription: {
      es: "El Cerro Nahuel ofrece un trekking exigente pero muy gratificante, con pendientes sostenidas y vistas abiertas a los cordones montañosos de la región. Es ideal para quienes ya tienen experiencia previa en caminatas de montaña.",
      en: "Cerro Nahuel offers a demanding but very rewarding trek, with sustained slopes and open views of the region's mountain ranges. It is ideal for those who already have previous experience in mountain hiking.",
      pt: "O Cerro Nahuel oferece um trekking exigente, mas muito gratificante, com encostas sustentadas e vistas abertas para as cadeias montanhosas da região. É ideal para quem já tem experiência anterior em caminhadas de montanha."
    },
    itinerary: {
      es: ["Coordinar con guía según época del año"],
      en: ["Coordinate with guide according to time of year"],
      pt: ["Coordenar com guia conforme a época do ano"]
    },
    equipment: {
      es: ["Mochila trekking", "Botas", "Bastones (recomendado)", "Agua 2L"],
      en: ["Trekking backpack", "Boots", "Trekking poles (recommended)", "Water 2L"],
      pt: ["Mochila de trekking", "Botas", "Bastões (recomendado)", "Água 2L"]
    },
    included: {
      es: ["Guía profesional", "Coordinación integral", "Asistencia permanente", "Seguro"],
      en: ["Professional guide", "Comprehensive coordination", "Permanent assistance", "Insurance"],
      pt: ["Guia profissional", "Coordenação integral", "Assistência permanente", "Seguro"]
    }
  },
  {
    id: 4,
    slug: "cerros-cabras-hormiguero",
    category: "Trekking",
    images: ["/Cerros 11.webp", "/Cerros 10.webp", "/Cerros 9.webp"],
    
    title: {
      es: "Cerros Cabras & Cascada",
      en: "Cabras Hills & Waterfall",
      pt: "Cerros Cabras & Cachoeira"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "6 a 7 Horas",
      en: "6 to 7 Hours",
      pt: "6 a 7 Horas"
    },
    difficulty: {
      es: "Baja a Media",
      en: "Low to Medium",
      pt: "Baixa a Média"
    },
    season: {
      es: "Primavera - Verano",
      en: "Spring - Summer",
      pt: "Primavera - Verão"
    },
    location: {
      es: "Área natural de montaña",
      en: "Mountain Natural Area",
      pt: "Área Natural de Montanha"
    },
    altitude: {
      es: "N/A",
      en: "N/A",
      pt: "N/A"
    },
    shortDescription: {
      es: "Trekking paisajístico. Cascada del Ángel y senderos suaves.",
      en: "Scenic trekking. Angel Falls and gentle trails.",
      pt: "Trekking paisagístico. Cachoeira do Anjo e trilhas suaves."
    },
    fullDescription: {
      es: "Una propuesta ideal para quienes buscan una experiencia más relajada, combinando varios puntos de interés en una misma jornada (Cerros Cabras, Hormiguero y Cascada del Ángel). La Cascada del Ángel es el principal atractivo natural, especialmente en épocas de mayor caudal.",
      en: "An ideal proposal for those looking for a more relaxed experience, combining several points of interest in a single day (Cabras Hills, Hormiguero, and Angel Falls). Angel Falls is the main natural attraction, especially in times of greater flow.",
      pt: "Uma proposta ideal para quem busca uma experiência mais relaxada, combinando vários pontos de interesse num mesmo dia (Cerros Cabras, Hormiguero e Cachoeira do Anjo). A Cachoeira do Anjo é o principal atrativo natural, especialmente em épocas de maior vazão."
    },
    itinerary: {
      es: ["Salida AM", "Visita Cascada", "Ascenso suave", "Regreso tarde"],
      en: ["AM Departure", "Waterfall Visit", "Gentle ascent", "Afternoon return"],
      pt: ["Saída AM", "Visita Cachoeira", "Subida suave", "Retorno à tarde"]
    },
    equipment: {
      es: ["Ropa cómoda", "Zapatillas", "Agua", "Protector solar"],
      en: ["Comfortable clothes", "Sneakers", "Water", "Sunscreen"],
      pt: ["Roupa confortável", "Tênis", "Água", "Protetor solar"]
    },
    included: {
      es: ["Guías", "Logística", "Seguro", "Botiquín"],
      en: ["Guides", "Logistics", "Insurance", "First aid kit"],
      pt: ["Guias", "Logística", "Seguro", "Kit de primeiros socorros"]
    }
  },
  {
    id: 5,
    slug: "cerro-manos",
    category: "Trekking",
    images: ["/Cerros 14.webp", "/Cerros 13.webp", "/Cerros 12.webp"],
    
    title: {
      es: "Cerro Manos",
      en: "Cerro Manos",
      pt: "Cerro Manos"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "6 Horas",
      en: "6 Hours",
      pt: "6 Horas"
    },
    difficulty: {
      es: "Media – Baja",
      en: "Medium – Low",
      pt: "Média – Baixa"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera",
      en: "Pre-Andes",
      pt: "Pré-cordilheira"
    },
    altitude: {
      es: "2.000 msnm",
      en: "2,000 masl",
      pt: "2.000 msnm"
    },
    shortDescription: {
      es: "Progresivo y continuo. Formaciones rocosas y vistas abiertas.",
      en: "Progressive and continuous. Rock formations and open views.",
      pt: "Progressivo e contínuo. Formações rochosas e vistas abertas."
    },
    fullDescription: {
      es: "Trekking progresivo y continuo, sin pasos técnicos, ideal para quienes desean disfrutar de la montaña a buen ritmo. El cerro se caracteriza por sus formaciones rocosas y vistas abiertas.",
      en: "Progressive and continuous trekking, without technical steps, ideal for those who want to enjoy the mountain at a good pace. The hill is characterized by its rock formations and open views.",
      pt: "Trekking progressivo e contínuo, sem passos técnicos, ideal para quem deseja curtir a montanha num bom ritmo. O morro caracteriza-se pelas formações rochosas e vistas abertas."
    },
    itinerary: {
      es: ["08:30 Encuentro", "Caminata", "Cumbre", "Regreso"],
      en: ["08:30 Meeting", "Hike", "Summit", "Return"],
      pt: ["08:30 Encontro", "Caminhada", "Cume", "Retorno"]
    },
    equipment: {
      es: ["Calzado deportivo/trekking", "Agua", "Snacks"],
      en: ["Sports/trekking footwear", "Water", "Snacks"],
      pt: ["Calçado esportivo/trekking", "Água", "Snacks"]
    },
    included: {
      es: ["Guías", "Seguro", "Botiquín"],
      en: ["Guides", "Insurance", "First aid kit"],
      pt: ["Guias", "Seguro", "Kit de primeiros socorros"]
    }
  },
  {
    id: 6,
    slug: "cerro-camello",
    category: "Trekking",
    images: ["/Cerros 17.webp", "/Cerros 16.webp", "/Cerros 15.webp"],
    
    title: {
      es: "Cerro Camello",
      en: "Cerro Camello",
      pt: "Cerro Camello"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "7 Horas",
      en: "7 Hours",
      pt: "7 Horas"
    },
    difficulty: {
      es: "Media",
      en: "Medium",
      pt: "Média"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera",
      en: "Pre-Andes",
      pt: "Pré-cordilheira"
    },
    altitude: {
      es: "N/A",
      en: "N/A",
      pt: "N/A"
    },
    shortDescription: {
      es: "Trekking dinámico con subidas y bajadas suaves. Ritmo constante.",
      en: "Dynamic trekking with gentle ups and downs. Constant rhythm.",
      pt: "Trekking dinâmico com subidas e descidas suaves. Ritmo constante."
    },
    fullDescription: {
      es: "Recibe su nombre por la forma ondulada de su lomo. Es un trekking dinámico, con subidas y bajadas suaves que permiten un ritmo constante y entretenido. Buen equilibrio entre exigencia y disfrute.",
      en: "It gets its name from the undulating shape of its ridge. It is a dynamic trek, with gentle ups and downs that allow for a constant and entertaining pace. Good balance between demand and enjoyment.",
      pt: "Recebe o nome pela forma ondulada de sua crista. É um trekking dinâmico, com subidas e descidas suaves que permitem um ritmo constante e divertido. Bom equilíbrio entre exigência e prazer."
    },
    itinerary: {
      es: ["Jornada completa"],
      en: ["Full day"],
      pt: ["Dia inteiro"]
    },
    equipment: {
      es: ["Equipo standard de trekking"],
      en: ["Standard trekking gear"],
      pt: ["Equipamento padrão de trekking"]
    },
    included: {
      es: ["Guías", "Seguro", "Botiquín"],
      en: ["Guides", "Insurance", "First aid kit"],
      pt: ["Guias", "Seguro", "Kit de primeiros socorros"]
    }
  },
  {
    id: 7,
    slug: "cerro-cocodrilo",
    category: "Trekking",
    images: ["/Cerros 20.webp", "/Cerros 19.webp", "/Cerros 18.webp"],
    
    title: {
      es: "Cerro Cocodrilo",
      en: "Cerro Cocodrilo",
      pt: "Cerro Cocodrilo"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "7 a 8 Horas",
      en: "7 to 8 Hours",
      pt: "7 a 8 Horas"
    },
    difficulty: {
      es: "Media",
      en: "Medium",
      pt: "Média"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera",
      en: "Pre-Andes",
      pt: "Pré-cordilheira"
    },
    altitude: {
      es: "N/A",
      en: "N/A",
      pt: "N/A"
    },
    shortDescription: {
      es: "Recorrido sinuoso, ideal para entrenar resistencia y orientación.",
      en: "Sinuous route, ideal for training endurance and orienteering.",
      pt: "Percurso sinuoso, ideal para treinar resistência e orientação."
    },
    fullDescription: {
      es: "Un cerro de recorrido sinuoso, ideal para quienes buscan una salida más exigente y menos transitada. Permite entrenar resistencia y orientación en montaña.",
      en: "A hill with a sinuous path, ideal for those looking for a more demanding and less crowded outing. Allows training endurance and mountain orienteering.",
      pt: "Um morro de percurso sinuoso, ideal para quem busca uma saída mais exigente e menos transitada. Permite treinar resistência e orientação em montanha."
    },
    itinerary: {
      es: ["Jornada completa"],
      en: ["Full day"],
      pt: ["Dia inteiro"]
    },
    equipment: {
      es: ["Equipo de trekking completo"],
      en: ["Complete trekking gear"],
      pt: ["Equipamento de trekking completo"]
    },
    included: {
      es: ["Guías", "Seguro", "Botiquín"],
      en: ["Guides", "Insurance", "First aid kit"],
      pt: ["Guias", "Seguro", "Kit de primeiros socorros"]
    }
  },
  {
    id: 8,
    slug: "cerro-comision",
    category: "Trekking",
    images: ["/Cerros 23.webp", "/Cerros 21.webp", "/Cerros 22.webp"],
    
    title: {
      es: "Cerro Comisión",
      en: "Cerro Comisión",
      pt: "Cerro Comisión"
    },
    price: {
      es: "Consultar",
      en: "Inquire",
      pt: "Consultar"
    },
    duration: {
      es: "Jornada Completa",
      en: "Full Day",
      pt: "Dia Inteiro"
    },
    difficulty: {
      es: "Media",
      en: "Medium",
      pt: "Média"
    },
    season: {
      es: "Todo el año",
      en: "All year round",
      pt: "O ano todo"
    },
    location: {
      es: "Precordillera Profunda",
      en: "Deep Pre-Andes",
      pt: "Pré-cordilheira Profunda"
    },
    altitude: {
      es: "N/A",
      en: "N/A",
      pt: "N/A"
    },
    shortDescription: {
      es: "Tranquilidad y contacto directo. Vistas amplias y limpias.",
      en: "Tranquility and direct contact. Wide and clean views.",
      pt: "Tranquilidade e contato direto. Vistas amplas e limpas."
    },
    fullDescription: {
      es: "Una alternativa menos concurrida, perfecta para quienes buscan tranquilidad y contacto directo con la montaña. Desde la cumbre se obtienen vistas amplias y limpias de la región.",
      en: "A less crowded alternative, perfect for those seeking tranquility and direct contact with the mountain. From the summit, wide and clean views of the region are obtained.",
      pt: "Uma alternativa menos frequentada, perfeita para quem busca tranquilidade e contato direto com a montanha. Do cume obtêm-se vistas amplas e limpas da região."
    },
    itinerary: {
      es: ["Salida temprano", "Regreso al atardecer"],
      en: ["Early start", "Return at sunset"],
      pt: ["Saída cedo", "Retorno ao entardecer"]
    },
    equipment: {
      es: ["Equipo de trekking completo"],
      en: ["Complete trekking gear"],
      pt: ["Equipamento de trekking completo"]
    },
    included: {
      es: ["Guías", "Seguro", "Botiquín"],
      en: ["Guides", "Insurance", "First aid kit"],
      pt: ["Guias", "Seguro", "Kit de primeiros socorros"]
    }
  }
];