// Mock Data for Renacer Rural - Wellness Rural Tourism Platform

export interface Experience {
  id: string
  title: string
  slug: string
  description: string
  shortDescription: string
  duration: string
  price: number
  category: Category
  relaxationLevel: 1 | 2 | 3 | 4 | 5
  image: string
  gallery: string[]
  benefits: string[]
  includes: string[]
  schedule: ScheduleItem[]
  maxParticipants: number
  rating: number
  reviewCount: number
  featured: boolean
}

export interface ScheduleItem {
  time: string
  activity: string
  description: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company?: string
  avatar: string
  content: string
  rating: number
  experienceId: string
}

export interface CorporateMetric {
  id: string
  label: string
  value: number
  change: number
  unit: string
  icon: string
}

export interface WellnessActivity {
  id: string
  title: string
  description: string
  duration: string
  icon: string
}

export const categories: Category[] = [
  { id: "stress", name: "Antiestrés", icon: "Brain", color: "emerald" },
  { id: "family", name: "Familiar", icon: "Users", color: "amber" },
  { id: "corporate", name: "Corporativo", icon: "Building2", color: "slate" },
  { id: "nature", name: "Naturaleza", icon: "Trees", color: "green" },
  { id: "mental-health", name: "Salud Mental", icon: "Heart", color: "rose" },
  { id: "agro", name: "Agroexperiencia", icon: "Wheat", color: "yellow" },
]

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Retiro Antiestrés de Fin de Semana",
    slug: "retiro-antiestres",
    description: "Sumérgete en un fin de semana de completa desconexión donde el silencio de la naturaleza y las prácticas de mindfulness te guiarán hacia tu centro. Nuestro retiro combina meditación guiada, caminatas conscientes por senderos de bosque nativo, y sesiones de respiración al amanecer. Cada momento está diseñado para liberar tensiones acumuladas y reconectarte con tu esencia.",
    shortDescription: "Un fin de semana de desconexión total para liberar el estrés acumulado.",
    duration: "2 días",
    price: 450000,
    category: categories[0],
    relaxationLevel: 5,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    ],
    benefits: [
      "Reducción significativa del cortisol",
      "Mejora de la calidad del sueño",
      "Claridad mental renovada",
      "Técnicas de manejo del estrés para llevar a casa",
    ],
    includes: [
      "Alojamiento en cabaña privada",
      "Alimentación orgánica completa",
      "Sesiones de meditación guiada",
      "Caminata terapéutica",
      "Kit de bienestar para llevar",
    ],
    schedule: [
      { time: "06:00", activity: "Amanecer consciente", description: "Meditación guiada con los primeros rayos del sol" },
      { time: "08:00", activity: "Desayuno nutritivo", description: "Alimentos frescos de nuestra huerta" },
      { time: "10:00", activity: "Caminata por el bosque", description: "Sendero de 3km entre árboles nativos" },
      { time: "13:00", activity: "Almuerzo consciente", description: "Comida en silencio, saboreando cada bocado" },
      { time: "15:00", activity: "Tiempo libre", description: "Descanso, lectura o conexión con la naturaleza" },
      { time: "17:00", activity: "Yoga restaurativo", description: "Posturas suaves para liberar tensión" },
      { time: "19:00", activity: "Cena y fogata", description: "Compartir en comunidad bajo las estrellas" },
    ],
    maxParticipants: 12,
    rating: 4.9,
    reviewCount: 127,
    featured: true,
  },
  {
    id: "2",
    title: "Experiencia de Ordeño y Vida Campesina",
    slug: "experiencia-ordeno",
    description: "Vive una mañana auténtica en el campo colombiano. Aprende el arte del ordeño tradicional, participa en el cuidado de nuestros animales y descubre cómo producimos lácteos artesanales. Esta experiencia te reconecta con las raíces campesinas y te muestra la belleza de una vida más simple y conectada con la tierra.",
    shortDescription: "Conecta con la vida rural y aprende el arte del ordeño tradicional.",
    duration: "4 horas",
    price: 85000,
    category: categories[5],
    relaxationLevel: 3,
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
      "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=800&q=80",
    ],
    benefits: [
      "Conexión con tradiciones ancestrales",
      "Reducción de ansiedad urbana",
      "Aprendizaje práctico y tangible",
      "Sentido de logro y satisfacción",
    ],
    includes: [
      "Guía campesino experto",
      "Desayuno típico campesino",
      "Productos lácteos para llevar",
      "Certificado de experiencia",
    ],
    schedule: [
      { time: "05:30", activity: "Llegada y bienvenida", description: "Café campesino mientras amanece" },
      { time: "06:00", activity: "Ordeño guiado", description: "Aprende la técnica tradicional" },
      { time: "07:30", activity: "Proceso de lácteos", description: "Preparación de queso fresco" },
      { time: "08:30", activity: "Desayuno campesino", description: "Con productos recién preparados" },
    ],
    maxParticipants: 8,
    rating: 4.8,
    reviewCount: 89,
    featured: true,
  },
  {
    id: "3",
    title: "Siembra Consciente",
    slug: "siembra-consciente",
    description: "Pon tus manos en la tierra y siembra vida. Esta experiencia te guía a través del proceso de siembra orgánica mientras practicas mindfulness. Cada semilla que plantas es una metáfora de tus propios proyectos y sueños. Te llevas a casa no solo una planta, sino una nueva perspectiva sobre el crecimiento y la paciencia.",
    shortDescription: "Conecta con la tierra mientras plantas semillas y cultivas tu paz interior.",
    duration: "3 horas",
    price: 65000,
    category: categories[3],
    relaxationLevel: 4,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
      "https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80",
    ],
    benefits: [
      "Reducción de la ansiedad",
      "Sentido de propósito",
      "Conexión mente-tierra",
      "Práctica de paciencia y presencia",
    ],
    includes: [
      "Materiales de siembra",
      "Planta para llevar a casa",
      "Guía de cultivo",
      "Refrigerio orgánico",
    ],
    schedule: [
      { time: "09:00", activity: "Círculo de intención", description: "Establecemos nuestra conexión" },
      { time: "09:30", activity: "Preparación de la tierra", description: "Trabajo consciente con las manos" },
      { time: "10:30", activity: "Siembra meditativa", description: "Plantamos con intención" },
      { time: "11:30", activity: "Cierre y refrigerio", description: "Compartimos la experiencia" },
    ],
    maxParticipants: 15,
    rating: 4.7,
    reviewCount: 64,
    featured: false,
  },
  {
    id: "4",
    title: "Caminata Terapéutica al Amanecer",
    slug: "caminata-terapeutica",
    description: "El bosque despierta con el sol y tú con él. Esta caminata guiada te lleva por senderos de bosque nativo mientras practicas técnicas de respiración y mindfulness. El canto de los pájaros, el olor de la tierra húmeda y la luz dorada del amanecer crean el escenario perfecto para reconectar contigo mismo.",
    shortDescription: "Despierta con el bosque en una caminata guiada de mindfulness.",
    duration: "2.5 horas",
    price: 55000,
    category: categories[4],
    relaxationLevel: 4,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
      "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=800&q=80",
    ],
    benefits: [
      "Activación del sistema inmune",
      "Reducción de presión arterial",
      "Claridad mental",
      "Conexión profunda con la naturaleza",
    ],
    includes: [
      "Guía naturalista certificado",
      "Equipo de senderismo",
      "Desayuno energético",
      "Agua y snacks saludables",
    ],
    schedule: [
      { time: "05:30", activity: "Encuentro y preparación", description: "Ejercicios de activación suave" },
      { time: "06:00", activity: "Inicio de caminata", description: "Primer tramo de ascenso" },
      { time: "07:00", activity: "Mirador del amanecer", description: "Meditación con vista panorámica" },
      { time: "08:00", activity: "Desayuno en el bosque", description: "Alimentos energéticos al aire libre" },
    ],
    maxParticipants: 10,
    rating: 4.9,
    reviewCount: 156,
    featured: true,
  },
  {
    id: "5",
    title: "Fogata Emocional",
    slug: "fogata-emocional",
    description: "Bajo las estrellas del Cauca, alrededor del fuego ancestral, encontrarás un espacio seguro para soltar lo que ya no sirve. Esta experiencia nocturna combina círculos de palabra, rituales de liberación y conexión con otros viajeros del alma. El fuego transforma y purifica, igual que este momento.",
    shortDescription: "Un ritual nocturno de liberación emocional junto al fuego.",
    duration: "3 horas",
    price: 75000,
    category: categories[4],
    relaxationLevel: 5,
    image: "https://images.unsplash.com/photo-1475609471617-0ef53b59cff5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1475609471617-0ef53b59cff5?w=800&q=80",
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800&q=80",
      "https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=800&q=80",
    ],
    benefits: [
      "Liberación emocional profunda",
      "Sentido de comunidad",
      "Claridad sobre próximos pasos",
      "Paz interior renovada",
    ],
    includes: [
      "Facilitador emocional",
      "Cena bajo las estrellas",
      "Bebidas calientes artesanales",
      "Manta y cojín para la fogata",
    ],
    schedule: [
      { time: "18:00", activity: "Recepción y cena", description: "Comida reconfortante antes del ritual" },
      { time: "19:30", activity: "Encendido del fuego", description: "Ceremonia de apertura" },
      { time: "20:00", activity: "Círculo de palabra", description: "Compartir desde el corazón" },
      { time: "21:00", activity: "Ritual de liberación", description: "Soltar al fuego lo que no sirve" },
    ],
    maxParticipants: 20,
    rating: 4.8,
    reviewCount: 98,
    featured: false,
  },
  {
    id: "6",
    title: "Detox Digital de 48 Horas",
    slug: "detox-digital",
    description: "Entrega tu teléfono y recibe a cambio tu vida. Durante 48 horas vivirás sin pantallas, reconectando con el ritmo natural del día y la noche. Descubrirás que el aburrimiento es solo la puerta de entrada a la creatividad, y que el silencio digital es el sonido más hermoso que has escuchado en mucho tiempo.",
    shortDescription: "Desconecta completamente de las pantallas durante 48 horas transformadoras.",
    duration: "2 días",
    price: 380000,
    category: categories[0],
    relaxationLevel: 5,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800&q=80",
    ],
    benefits: [
      "Reseteo del sistema nervioso",
      "Mejora de atención y concentración",
      "Reconexión con el presente",
      "Nuevos hábitos digitales saludables",
    ],
    includes: [
      "Alojamiento sin WiFi",
      "Todas las comidas orgánicas",
      "Kit de actividades análogas",
      "Diario de reflexión",
      "Sesiones de coaching personal",
    ],
    schedule: [
      { time: "09:00", activity: "Check-in y entrega de dispositivos", description: "Ritual de desconexión" },
      { time: "10:00", activity: "Primera sesión de presencia", description: "Aprender a estar sin estimulación" },
      { time: "12:00", activity: "Almuerzo consciente", description: "Comer sin distracciones" },
      { time: "14:00", activity: "Actividades creativas", description: "Pintura, escritura, artesanía" },
    ],
    maxParticipants: 8,
    rating: 4.9,
    reviewCount: 72,
    featured: true,
  },
  {
    id: "7",
    title: "Fin de Semana Familiar Rural",
    slug: "fin-semana-familiar",
    description: "Regala a tu familia el recuerdo de una vida: un fin de semana sin prisas, sin pantallas, solo conexión auténtica. Los niños descubrirán de dónde viene la comida, los padres recordarán jugar, y todos juntos crearán memorias que ninguna app puede replicar.",
    shortDescription: "Reconecta con tu familia en un fin de semana de aventuras rurales.",
    duration: "2 días",
    price: 680000,
    category: categories[1],
    relaxationLevel: 3,
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      "https://images.unsplash.com/photo-1484665754804-74b091211472?w=800&q=80",
    ],
    benefits: [
      "Fortalecimiento de vínculos familiares",
      "Aprendizaje intergeneracional",
      "Desconexión digital compartida",
      "Memorias duraderas",
    ],
    includes: [
      "Cabaña familiar completa",
      "Todas las comidas",
      "Actividades para todas las edades",
      "Fogata familiar",
      "Recuerdos artesanales",
    ],
    schedule: [
      { time: "10:00", activity: "Llegada y exploración", description: "Recorrido por la finca" },
      { time: "12:00", activity: "Cocina en familia", description: "Preparamos el almuerzo juntos" },
      { time: "15:00", activity: "Actividades con animales", description: "Alimentar y cuidar a nuestros animales" },
      { time: "18:00", activity: "Juegos tradicionales", description: "Trompo, canicas, cometas" },
    ],
    maxParticipants: 6,
    rating: 4.9,
    reviewCount: 134,
    featured: true,
  },
  {
    id: "8",
    title: "Retiro Corporativo de Bienestar",
    slug: "retiro-corporativo",
    description: "Transforma a tu equipo en un ambiente donde las jerarquías se disuelven y la humanidad emerge. Este retiro diseñado para empresas combina team building con prácticas de bienestar, creando las condiciones para conversaciones que nunca ocurrirían en la oficina.",
    shortDescription: "Fortalece tu equipo con un retiro de bienestar y conexión.",
    duration: "3 días",
    price: 2500000,
    category: categories[2],
    relaxationLevel: 4,
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
    benefits: [
      "Reducción del burnout colectivo",
      "Mejora del clima laboral",
      "Comunicación más auténtica",
      "Equipos más cohesionados",
    ],
    includes: [
      "Programa personalizado",
      "Facilitadores expertos",
      "Alojamiento completo",
      "Todas las comidas",
      "Materiales y memorias del evento",
      "Informe de resultados",
    ],
    schedule: [
      { time: "09:00", activity: "Bienvenida e intención", description: "Establecer el marco del retiro" },
      { time: "10:00", activity: "Actividad de conexión", description: "Romper el hielo corporativo" },
      { time: "12:00", activity: "Almuerzo colaborativo", description: "Cocinar juntos" },
      { time: "15:00", activity: "Reto de equipo", description: "Desafío en la naturaleza" },
    ],
    maxParticipants: 30,
    rating: 4.8,
    reviewCount: 45,
    featured: false,
  },
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María Alejandra Torres",
    role: "Gerente de Marketing",
    company: "Tecnología Global S.A.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "Llegué con el burnout más fuerte de mi vida y salí sintiéndome como si hubiera dormido un mes. El retiro antiestrés cambió literalmente mi perspectiva de vida. Ahora medito cada mañana y he aprendido a poner límites.",
    rating: 5,
    experienceId: "1",
  },
  {
    id: "2",
    name: "Carlos Eduardo Méndez",
    role: "CEO",
    company: "Innovación Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "Trajimos a todo nuestro equipo de liderazgo y fue transformador. Las conversaciones que tuvimos junto a la fogata nunca habrían ocurrido en una sala de juntas. La productividad después aumentó un 40%.",
    rating: 5,
    experienceId: "8",
  },
  {
    id: "3",
    name: "Valentina Restrepo",
    role: "Madre de familia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "Mis hijos no paraban de hablar de la experiencia durante semanas. Por fin dejaron el celular voluntariamente. El ordeño, los animales, la fogata... Todo fue mágico. Ya reservamos para volver.",
    rating: 5,
    experienceId: "7",
  },
  {
    id: "4",
    name: "Andrés Felipe Rojas",
    role: "Desarrollador de Software",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content: "48 horas sin mi teléfono parecía imposible. Ahora pienso que fueron las mejores 48 horas del año. Descubrí que el aburrimiento es en realidad creatividad esperando salir.",
    rating: 5,
    experienceId: "6",
  },
  {
    id: "5",
    name: "Lucía Fernanda Castro",
    role: "Psicóloga Clínica",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    content: "Como profesional de salud mental, estoy impresionada por la calidad del programa. Lo recomiendo a mis pacientes con confianza. La combinación de naturaleza, comunidad y técnicas basadas en evidencia es perfecta.",
    rating: 5,
    experienceId: "4",
  },
  {
    id: "6",
    name: "Santiago Vargas",
    role: "Estudiante Universitario",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80",
    content: "La siembra consciente me ayudó con mi ansiedad de una forma que no esperaba. Ahora tengo plantas en mi apartamento y cada vez que las cuido, recuerdo las técnicas que aprendí.",
    rating: 4,
    experienceId: "3",
  },
]

export const corporateMetrics: CorporateMetric[] = [
  { id: "1", label: "Reducción de Burnout", value: 67, change: 12, unit: "%", icon: "TrendingDown" },
  { id: "2", label: "Satisfacción Laboral", value: 89, change: 23, unit: "%", icon: "Heart" },
  { id: "3", label: "Clima Organizacional", value: 8.7, change: 1.2, unit: "/10", icon: "Sun" },
  { id: "4", label: "Retención de Talento", value: 94, change: 15, unit: "%", icon: "Users" },
  { id: "5", label: "Productividad Post-Retiro", value: 34, change: 34, unit: "%", icon: "Zap" },
  { id: "6", label: "Comunicación de Equipo", value: 78, change: 28, unit: "%", icon: "MessageCircle" },
]

export const wellnessActivities: WellnessActivity[] = [
  { id: "1", title: "Respiración 4-7-8", description: "Técnica de relajación profunda", duration: "5 min", icon: "Wind" },
  { id: "2", title: "Meditación Guiada", description: "Calma tu mente con visualización", duration: "10 min", icon: "Brain" },
  { id: "3", title: "Estiramiento Consciente", description: "Libera tensión corporal", duration: "8 min", icon: "Sparkles" },
  { id: "4", title: "Diario de Gratitud", description: "Escribe 3 cosas positivas del día", duration: "5 min", icon: "BookOpen" },
]

export const stressQuestions = [
  { id: 1, question: "¿Con qué frecuencia te sientes abrumado/a por tus responsabilidades?", options: ["Nunca", "A veces", "Frecuentemente", "Siempre"] },
  { id: 2, question: "¿Cuántas horas de sueño de calidad tienes normalmente?", options: ["Más de 8", "6-8 horas", "4-6 horas", "Menos de 4"] },
  { id: 3, question: "¿Con qué frecuencia tomas pausas durante tu jornada?", options: ["Cada hora", "Cada 2-3 horas", "Solo al almuerzo", "Casi nunca"] },
  { id: 4, question: "¿Cuánto tiempo pasas en la naturaleza semanalmente?", options: ["Más de 5 horas", "2-5 horas", "Menos de 2 horas", "Casi nada"] },
  { id: 5, question: "¿Cómo describirías tu equilibrio vida-trabajo?", options: ["Excelente", "Bueno", "Regular", "Malo"] },
]

export const reflexiveQuotes = [
  "La naturaleza no tiene prisa, pero todo lo logra.",
  "En el silencio del campo, tu alma encuentra su voz.",
  "Cada amanecer es una invitación a comenzar de nuevo.",
  "La paz no se encuentra, se cultiva.",
  "Desconectar para reconectar: tu bienestar lo merece.",
  "El tiempo en la naturaleza es tiempo invertido en ti.",
  "Respira profundo. Estás exactamente donde necesitas estar.",
  "La verdadera productividad nace del descanso auténtico.",
]

export const farmFeatures = [
  {
    id: "1",
    title: "Ganadería Regenerativa",
    description: "Nuestro ganado pasta libremente en rotación, mejorando la salud del suelo y capturando carbono.",
    icon: "Beef",
    stats: "50 hectáreas",
  },
  {
    id: "2",
    title: "Huerta Orgánica",
    description: "Más de 40 variedades de vegetales y hierbas sin químicos alimentan nuestra cocina.",
    icon: "Carrot",
    stats: "3 hectáreas",
  },
  {
    id: "3",
    title: "Bosque Nativo",
    description: "Conservamos y restauramos el bosque andino, hogar de aves y especies nativas.",
    icon: "TreePine",
    stats: "80 hectáreas",
  },
  {
    id: "4",
    title: "Producción Artesanal",
    description: "Quesos, yogures y dulces elaborados con técnicas tradicionales del Cauca.",
    icon: "Cookie",
    stats: "12 productos",
  },
  {
    id: "5",
    title: "Energía Renovable",
    description: "Paneles solares y biodigestores nos hacen casi autosuficientes energéticamente.",
    icon: "Sun",
    stats: "85% renovable",
  },
  {
    id: "6",
    title: "Agua de Nacimiento",
    description: "Tres nacimientos de agua pura abastecen toda la finca y son protegidos activamente.",
    icon: "Droplets",
    stats: "3 nacimientos",
  },
]

export const timelineEvents = [
  { year: "2015", title: "El Sueño Comienza", description: "Compramos las primeras 20 hectáreas con la visión de crear un santuario." },
  { year: "2017", title: "Primera Siembra", description: "Iniciamos la transición a agricultura orgánica y plantamos nuestro primer bosque." },
  { year: "2019", title: "Puertas Abiertas", description: "Recibimos los primeros visitantes y descubrimos nuestra vocación de bienestar." },
  { year: "2021", title: "Reconocimiento", description: "Certificación orgánica y premio regional de turismo sostenible." },
  { year: "2023", title: "Expansión", description: "Adquirimos 60 hectáreas adicionales y construimos nuevas cabañas." },
  { year: "2024", title: "Renacer Rural", description: "Lanzamos oficialmente nuestra plataforma de experiencias de bienestar." },
]

export const moodOptions = [
  { id: "great", label: "Excelente", emoji: "😊", color: "emerald" },
  { id: "good", label: "Bien", emoji: "🙂", color: "green" },
  { id: "okay", label: "Regular", emoji: "😐", color: "amber" },
  { id: "low", label: "Bajo", emoji: "😔", color: "orange" },
  { id: "stressed", label: "Estresado", emoji: "😫", color: "red" },
]

export const corporatePrograms = [
  {
    id: "1",
    title: "Programa Básico",
    description: "Ideal para equipos pequeños que buscan una introducción al bienestar laboral.",
    duration: "1 día",
    participants: "Hasta 15 personas",
    price: "Desde $1.800.000",
    features: [
      "Taller de manejo del estrés",
      "Caminata terapéutica grupal",
      "Almuerzo consciente",
      "Kit de bienestar individual",
    ],
  },
  {
    id: "2",
    title: "Programa Transformación",
    description: "Para empresas comprometidas con el cambio cultural hacia el bienestar.",
    duration: "3 días",
    participants: "Hasta 30 personas",
    price: "Desde $5.500.000",
    features: [
      "Todo lo del programa básico",
      "Retiro con alojamiento",
      "Sesiones de coaching grupal",
      "Actividades de team building",
      "Plan de seguimiento 30 días",
      "Informe de impacto",
    ],
  },
  {
    id: "3",
    title: "Programa Anual",
    description: "Transformación sostenida con acompañamiento continuo durante todo el año.",
    duration: "12 meses",
    participants: "Hasta 100 personas",
    price: "Consultar",
    features: [
      "4 retiros trimestrales",
      "Acceso a plataforma de bienestar",
      "Sesiones mensuales virtuales",
      "Métricas y reportes trimestrales",
      "Consultoría en cultura de bienestar",
      "Descuentos para empleados",
    ],
  },
]

export const sustainabilityMetrics = [
  { label: "Hectáreas Reforestadas", value: 45, suffix: "ha" },
  { label: "CO₂ Capturado Anual", value: 180, suffix: "ton" },
  { label: "Agua Protegida", value: 3, suffix: "nacimientos" },
  { label: "Familias Beneficiadas", value: 12, suffix: "locales" },
  { label: "Biodiversidad", value: 120, suffix: "especies" },
  { label: "Residuos Reciclados", value: 95, suffix: "%" },
]
