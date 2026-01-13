export interface Activity {
  id: number;
  slug: string; 
  title: string;
  category: 'Trekking' | 'Escalada'; 
  price: string; 
  duration: string;
  difficulty: string;
  season: string;
  location: string;
  altitude?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[]; 
  itinerary: string[]; 
  equipment: string[]; 
  included: string[]; 
}

export const activitiesData: Activity[] = [
  // ==========================================
  // ESCALADA (2 Opciones)
  // ==========================================
  {
    id: 101,
    slug: "escalada-mono-largo",
    title: "Escalada: Vía de Mono Largo",
    category: "Escalada",
    price: "Consultar",
    duration: "6 a 8 Horas",
    difficulty: "Adaptable",
    season: "Todo el año",
    location: "Cordillera de los Andes",
    altitude: "Variable",
    shortDescription: "Ideal para iniciarse o perfeccionar técnica. Sectores equipados y seguros.",
    fullDescription: "La escalada deportiva de mono largo es la opción ideal para iniciarse o perfeccionar técnica en roca. Se desarrolla en sectores equipados con anclajes fijos, permitiendo escalar vías de un largo con total seguridad. El guía acompaña en todo momento, adaptando la actividad al nivel y objetivos del grupo.",
    images: ["/Depo 2.jpg", "/Depo 3.jpg", "/Depo 4.jpg", "/Depo.jpg"], 
    itinerary: [
      "08:00 – Encuentro y traslado al sector",
      "09:30 – Aproximación y charla técnica",
      "10:30 – Inicio de la escalada",
      "13:30 – Almuerzo tipo vianda y descanso",
      "16:30 – Fin de la actividad",
      "18:00 – Regreso"
    ],
    equipment: [
      "Ropa cómoda y elástica",
      "Abrigo ligero",
      "Zapatillas deportivas (para aproximación)",
      "Agua y comida de marcha",
      "Equipo técnico incluido (arnés, casco, pies de gato)"
    ],
    included: [
      "Guía de escalada certificado",
      "Equipo técnico completo",
      "Planificación y gestión",
      "Botiquín de primeros auxilios",
      "Seguro de accidentes personales"
    ]
  },
  {
    id: 102,
    slug: "escalada-multi-largo",
    title: "Escalada: Vías Multi Largo",
    category: "Escalada",
    price: "Consultar",
    duration: "8 a 10 Horas",
    difficulty: "Media - Alta",
    season: "Todo el año",
    location: "Paredes Naturales",
    altitude: "Variable",
    shortDescription: "Para quienes buscan un desafío mayor. Ascenso de vías de varios largos en pared.",
    fullDescription: "La escalada deportiva de multi largo está pensada para quienes buscan una experiencia más completa y desafiante. Consiste en el ascenso de vías de varios largos, combinando técnica, manejo de cuerdas, lectura de la roca y progresión en pared. Siempre bajo la supervisión directa de un guía profesional.",
    images: ["/Multi.jpg", "/Multi 2.jpg", "/Multi 4.png", "/Multi 3.jpg", "/Multi 5.jpg", "/Multi 6.jpg"], 
    itinerary: [
      "07:00 – Encuentro y traslado",
      "08:30 – Aproximación a la pared",
      "09:30 – Charla técnica y organización",
      "10:00 – Inicio de la escalada",
      "16:00 – Cumbre o final de vía",
      "18:30 – Regreso"
    ],
    equipment: [
      "Experiencia previa recomendada",
      "Ropa técnica de montaña",
      "Mochila pequeña",
      "Agua y comida de marcha"
    ],
    included: [
      "Guía de escalada certificado",
      "Equipo técnico completo (cuerdas, arneses, cascos, cintas)",
      "Gestión de la vía y seguridad",
      "Botiquín y comunicación",
      "Seguro de accidentes personales"
    ]
  },

  // ==========================================
  // TREKKING (8 Opciones)
  // ==========================================
  {
    id: 1,
    slug: "cerro-banos",
    title: "Cerro Baños",
    category: "Trekking",
    price: "Consultar",
    duration: "8 Horas",
    difficulty: "Media",
    season: "Todo el año",
    location: "Precordillera Mendocina",
    altitude: "2.300 msnm",
    shortDescription: "Trekking de montaña completo con vistas abiertas hacia la precordillera y el valle.",
    fullDescription: "El Cerro Baños es una excelente opción para quienes desean un trekking de montaña completo, con desnivel progresivo y vistas abiertas hacia la precordillera y el valle mendocino. El recorrido atraviesa quebradas, senderos de acarreo y sectores de roca, permitiendo una experiencia variada y dinámica.",
    images: ["/trekking.jpg", "/Cerros 3.jpg", "/Cerros 4.jpg"],
    itinerary: [
      "08:00 – Encuentro y traslado",
      "09:30 – Inicio del trekking",
      "12:30 – Descanso y almuerzo tipo vianda",
      "15:00 – Cumbre",
      "18:00 – Regreso al punto de encuentro"
    ],
    equipment: ["Mochila de día", "Zapatillas de trekking", "Ropa en capas", "Agua (2L)", "Protector solar"],
    included: ["Guía habilitado", "Planificación", "Botiquín", "Comunicación", "Seguro"]
  },
  {
    id: 2,
    slug: "cerro-bayo",
    title: "Cerro Bayo",
    category: "Trekking",
    price: "Consultar",
    duration: "6 a 7 Horas",
    difficulty: "Media – Baja",
    season: "Todo el año",
    location: "Cercanías Gran Mendoza",
    altitude: "2.100 msnm",
    shortDescription: "Clásico y accesible. Ideal para primer contacto con trekking de montaña.",
    fullDescription: "Uno de los cerros más clásicos y accesibles de la zona. Ideal para quienes buscan un primer contacto con el trekking de montaña, sin resignar vistas espectaculares. Durante el ascenso se obtiene una panorámica constante de la ciudad de Mendoza y la Cordillera Principal.",
    images: ["/valle.jpg", "/Cerros 2.jpg", "/arco.jpg"],
    itinerary: [
      "08:30 – Encuentro",
      "09:00 – Inicio del ascenso",
      "13:00 – Cumbre",
      "16:30 – Regreso"
    ],
    equipment: ["Calzado cómodo", "Ropa deportiva", "Agua", "Gorra"],
    included: ["Guías habilitados", "Logística", "Seguro", "Botiquín"]
  },
  {
    id: 3,
    slug: "cerro-nahuel",
    title: "Cerro Nahuel",
    category: "Trekking",
    price: "Consultar",
    duration: "7 a 8 Horas",
    difficulty: "Media",
    season: "Todo el año",
    location: "Precordillera",
    altitude: "2.200 msnm",
    shortDescription: "Exigente pero gratificante. Pendientes sostenidas y vistas a cordones montañosos.",
    fullDescription: "El Cerro Nahuel ofrece un trekking exigente pero muy gratificante, con pendientes sostenidas y vistas abiertas a los cordones montañosos de la región. Es ideal para quienes ya tienen experiencia previa en caminatas de montaña.",
    images: ["/Cerros 24.jpg", "/Cerros 5.jpg", "/Cerros 6.jpg"],
    itinerary: ["Coordinar con guía según época del año"],
    equipment: ["Mochila trekking", "Botas", "Bastones (recomendado)", "Agua 2L"],
    included: ["Guía profesional", "Coordinación integral", "Asistencia permanente", "Seguro"]
  },
  {
    id: 4,
    slug: "cerros-cabras-hormiguero",
    title: "Cerros Cabras & Cascada",
    category: "Trekking",
    price: "Consultar",
    duration: "6 a 7 Horas",
    difficulty: "Baja a Media",
    season: "Primavera - Verano",
    location: "Área natural de montaña",
    altitude: "N/A",
    shortDescription: "Trekking paisajístico. Cascada del Ángel y senderos suaves.",
    fullDescription: "Una propuesta ideal para quienes buscan una experiencia más relajada, combinando varios puntos de interés en una misma jornada (Cerros Cabras, Hormiguero y Cascada del Ángel). La Cascada del Ángel es el principal atractivo natural, especialmente en épocas de mayor caudal.",
    images: ["/Cerros 11.jpg", "/Cerros 10.jpg", "/Cerros 9.jpg"],
    itinerary: ["Salida AM", "Visita Cascada", "Ascenso suave", "Regreso tarde"],
    equipment: ["Ropa cómoda", "Zapatillas", "Agua", "Protector solar"],
    included: ["Guías", "Logística", "Seguro", "Botiquín"]
  },
  {
    id: 5,
    slug: "cerro-manos",
    title: "Cerro Manos",
    category: "Trekking",
    price: "Consultar",
    duration: "6 Horas",
    difficulty: "Media – Baja",
    season: "Todo el año",
    location: "Precordillera",
    altitude: "2.000 msnm",
    shortDescription: "Progresivo y continuo. Formaciones rocosas y vistas abiertas.",
    fullDescription: "Trekking progresivo y continuo, sin pasos técnicos, ideal para quienes desean disfrutar de la montaña a buen ritmo. El cerro se caracteriza por sus formaciones rocosas y vistas abiertas.",
    images: ["/Cerros 14.jpg", "/Cerros 13.jpg", "/Cerros 12.jpg"],
    itinerary: ["08:30 Encuentro", "Caminata", "Cumbre", "Regreso"],
    equipment: ["Calzado deportivo/trekking", "Agua", "Snacks"],
    included: ["Guías", "Seguro", "Botiquín"]
  },
  {
    id: 6,
    slug: "cerro-camello",
    title: "Cerro Camello",
    category: "Trekking",
    price: "Consultar",
    duration: "7 Horas",
    difficulty: "Media",
    season: "Todo el año",
    location: "Precordillera",
    altitude: "N/A",
    shortDescription: "Trekking dinámico con subidas y bajadas suaves. Ritmo constante.",
    fullDescription: "Recibe su nombre por la forma ondulada de su lomo. Es un trekking dinámico, con subidas y bajadas suaves que permiten un ritmo constante y entretenido. Buen equilibrio entre exigencia y disfrute.",
    images: ["/Cerros 17.jpg", "/Cerros 16.jpg", "/Cerros 15.jpg"],
    itinerary: ["Jornada completa"],
    equipment: ["Equipo standard de trekking"],
    included: ["Guías", "Seguro", "Botiquín"]
  },
  {
    id: 7,
    slug: "cerro-cocodrilo",
    title: "Cerro Cocodrilo",
    category: "Trekking",
    price: "Consultar",
    duration: "7 a 8 Horas",
    difficulty: "Media",
    season: "Todo el año",
    location: "Precordillera",
    altitude: "N/A",
    shortDescription: "Recorrido sinuoso, ideal para entrenar resistencia y orientación.",
    fullDescription: "Un cerro de recorrido sinuoso, ideal para quienes buscan una salida más exigente y menos transitada. Permite entrenar resistencia y orientación en montaña.",
    images: ["/Cerros 20.jpg", "/Cerros 19.jpg", "/Cerros 18.jpg"],
    itinerary: ["Jornada completa"],
    equipment: ["Equipo de trekking completo"],
    included: ["Guías", "Seguro", "Botiquín"]
  },
  {
    id: 8,
    slug: "cerro-comision",
    title: "Cerro Comisión",
    category: "Trekking",
    price: "Consultar",
    duration: "Jornada Completa",
    difficulty: "Media",
    season: "Todo el año",
    location: "Precordillera Profunda",
    altitude: "N/A",
    shortDescription: "Tranquilidad y contacto directo. Vistas amplias y limpias.",
    fullDescription: "Una alternativa menos concurrida, perfecta para quienes buscan tranquilidad y contacto directo con la montaña. Desde la cumbre se obtienen vistas amplias y limpias de la región.",
    images: ["/Cerros 23.jpg", "/Cerros 21.jpg", "/Cerros 22.jpg"],
    itinerary: ["Salida temprano", "Regreso al atardecer"],
    equipment: ["Equipo de trekking completo"],
    included: ["Guías", "Seguro", "Botiquín"]
  }
];