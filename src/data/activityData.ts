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
  images: string[]; // Array de rutas de imágenes
  itinerary: string[]; // Lista de pasos
  equipment: string[]; 
  included: string[]; // Servicios incluidos
}

export const activitiesData: Activity[] = [
  // --- TREKKING: CERRO BAÑOS  ---
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
    shortDescription: "Trekking de montaña completo con vistas abiertas hacia la precordillera y el valle mendocino.",
    fullDescription: "El Cerro Baños es una excelente opción para quienes desean un trekking de montaña completo, con desnivel progresivo y vistas abiertas hacia la precordillera y el valle mendocino. El recorrido atraviesa quebradas, senderos de acarreo y sectores de roca, permitiendo una experiencia variada y dinámica. Es ideal para un primer ascenso de mayor compromiso.",
    images: ["/trekking.jpg", "/valle.jpg", "/cruce.jpg"], 
    itinerary: [
      "08:00 – Encuentro y traslado",
      "09:30 – Inicio del trekking",
      "13:00 – Almuerzo tipo vianda",
      "15:30 – Cumbre y descanso",
      "18:00 – Regreso"
    ],
    equipment: [
      "Mochila de día (20-30 litros)",
      "Zapatillas de trekking o botas cómodas",
      "Ropa en capas (remera sintética, abrigo polar, campera cortaviento)",
      "Protector solar y lentes de sol",
      "Agua (2 litros por persona)",
      "Gorra o sombrero"
    ],
    included: [
      "Guía de trekking habilitado",
      "Transporte (opcional)",
      "Botiquín de primeros auxilios",
      "Comunicación y seguridad"
    ]
  },

  // --- TREKKING: CERRO MANOS  ---
  {
    id: 2,
    slug: "cerro-manos",
    title: "Cerro Manos",
    category: "Trekking",
    price: "Consultar",
    duration: "6 Horas",
    difficulty: "Media – Baja",
    season: "Todo el año",
    location: "Precordillera",
    altitude: "2.000 msnm",
    shortDescription: "Trekking progresivo y continuo, ideal para quienes desean disfrutar de la montaña a buen ritmo.",
    fullDescription: "Un cerro de ascenso progresivo, ideal para quienes buscan una caminata constante sin pasos técnicos. Su nombre y formaciones rocosas lo convierten en un trekking muy pintoresco. Perfecto para personas activas que buscan sus primeras cumbres.",
    images: ["/valle.jpg", "/trekking.jpg", "/cruce.jpg"],
    itinerary: [
      "08:30 – Encuentro",
      "09:30 – Inicio de caminata",
      "12:30 – Cumbre y almuerzo",
      "15:00 – Regreso a la base"
    ],
    equipment: [
      "Calzado deportivo o de trekking",
      "Ropa cómoda y abrigo ligero",
      "Agua y snacks",
      "Protección solar"
    ],
    included: [
      "Guías profesionales habilitados",
      "Seguro de accidentes personales",
      "Botiquín de primeros auxilios",
      "Comunicación y seguimiento"
    ]
  },

  // --- ESCALADA: MONO LARGO ---
  {
    id: 3,
    slug: "escalada-mono-largo",
    title: "Escalada Deportiva",
    category: "Escalada",
    price: "Consultar",
    duration: "6 a 8 Horas",
    difficulty: "Adaptable",
    season: "Todo el año",
    location: "Sectores de Escalada Mendoza",
    altitude: "Variable",
    shortDescription: "Iniciación o perfeccionamiento en roca. Sectores equipados y seguros con guías certificados.",
    fullDescription: "La escalada deportiva de mono largo es la opción ideal para iniciarse o perfeccionar técnica en roca. Se desarrolla en sectores equipados con anclajes fijos, permitiendo escalar vías de un largo con total seguridad. El guía acompaña en todo momento, adaptando la actividad al nivel y objetivos del grupo. Disfruta de la verticalidad y el contacto directo con la roca.",
    images: ["/arco.jpg", "/trekking.jpg", "/vino.jpg"],
    itinerary: [
      "08:00 – Encuentro y traslado al sector",
      "09:00 – Charla de seguridad y equipo",
      "09:30 – Práctica y escalada en top-rope",
      "13:00 – Almuerzo y descanso",
      "16:00 – Fin de la actividad y regreso"
    ],
    equipment: [
      "Ropa cómoda y elástica",
      "Abrigo ligero",
      "Zapatillas deportivas (para la aproximación)",
      "Agua y comida de marcha",
      "El equipo técnico (arnés, casco, pies de gato) está incluido"
    ],
    included: [
      "Guía de escalada certificado",
      "Equipo técnico completo (cuerdas, arneses, cascos, etc.)",
      "Gestión de seguridad",
      "Seguro de accidentes personales"
    ]
  }
];