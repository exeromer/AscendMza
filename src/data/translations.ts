type Translations = {
    [lang in 'es' | 'en' | 'pt']: { [key: string]: string };
};

export const translations: Translations = {
    es: {
        // --- NAVBAR ---
        'nav.home': 'Inicio',
        'nav.experiences': 'Experiencias',
        'nav.about': 'Nosotros',
        'nav.reserve': 'Reservar',

        // --- HERO (Frase nueva) ---
        'hero.title.prefix': 'DESCUBRE',
        'hero.title.highlight': 'TU CUMBRE',
        'hero.subtitle': 'Guías expertos, seguridad certificada y la inmensidad de los Andes esperándote.',
        'hero.cta': 'Reservar Aventura',
        'hero.cta2': 'Conocer Rutas',

        // --- WHY US ---
        'why.title': '¿Por qué elegirnos?',
        'why.guides.title': 'Guías Locales',
        'why.guides.desc': 'Expertos que conocen cada rincón y secreto de la montaña.',
        'why.safety.title': 'Seguridad Primero',
        'why.safety.desc': 'Protocolos internacionales, comunicación satelital y equipo certificado.',
        'why.unique.title': 'Experiencias Únicas',
        'why.unique.desc': 'Rutas exclusivas diseñadas para conectar con la naturaleza real.',

        // --- EXPERIENCES ---
        'exp.title.prefix': 'Nuestras',
        'exp.title.highlight': 'Aventuras',
        'exp.subtitle': 'Seleccionamos las mejores rutas de Mendoza para desafiar tus límites.',
        'exp.tab.trekking': 'Trekking',
        'exp.tab.climbing': 'Escalada',
        'exp.card.difficulty': 'Dificultad',
        'exp.card.btn': 'Ver Detalles',

        // --- REVIEWS ---
        'reviews.title.prefix': 'Lo que dicen nuestros',
        'reviews.title.highlight': 'Aventureros',

        // --- FOOTER ---
        'footer.tagline': 'Expertos en alta montaña. Transformamos desafíos en experiencias inolvidables.',
        'footer.explore': 'Explorar',
        'footer.proposal': 'Propuesta',
        'footer.rights': 'Todos los derechos reservados.',

        // --- ACTIVITY DETAIL (Fichas) ---
        'detail.price_label': 'Precio Total',
        'detail.per_person': '/ persona',
        'detail.availability': 'Disponibilidad Inmediata',
        'detail.btn_reserve': 'Reservar Aventura',
        'detail.btn_consult': 'Consultar WhatsApp',
        'detail.about_title': 'Sobre esta experiencia',

        // Grid Info
        'detail.label.duration': 'Duración',
        'detail.label.difficulty': 'Dificultad',
        'detail.label.season': 'Temporada',
        'detail.label.altitude': 'Altura',

        // Tabs
        'detail.tab.itinerary': 'Itinerario',
        'detail.tab.equipment': 'Equipamiento',
        'detail.tab.included': 'Qué Incluye',
        'detail.section.itinerary': 'Itinerario Propuesto',
        'detail.section.equipment': 'Lista de Equipo',
        'detail.section.included': 'Incluido en el precio',

        // Breadcrumb
        'detail.crumb.home': 'Inicio',
    },
    en: {
        // --- NAVBAR ---
        'nav.home': 'Home',
        'nav.experiences': 'Adventures',
        'nav.about': 'About Us',
        'nav.reserve': 'Book Now',

        // --- HERO ---
        'hero.title.prefix': 'DISCOVER',
        'hero.title.highlight': 'YOUR SUMMIT',
        'hero.subtitle': 'Expert guides, certified safety, and the immensity of the Andes waiting for you.',
        'hero.cta': 'Book Adventure',
        'hero.cta2': 'See Routes',

        // --- WHY US ---
        'why.title': 'Why Choose Us',
        'why.guides.title': 'Local Guides',
        'why.guides.desc': 'Experts who know every corner and secret of the mountain.',
        'why.safety.title': 'Safety First',
        'why.safety.desc': 'International protocols, satellite communication, and certified gear.',
        'why.unique.title': 'Unique Experiences',
        'why.unique.desc': 'Exclusive routes designed to connect with real nature.',

        // --- EXPERIENCES ---
        'exp.title.prefix': 'Our',
        'exp.title.highlight': 'Adventures',
        'exp.subtitle': 'We select the best routes in Mendoza to challenge your limits.',
        'exp.tab.trekking': 'Trekking',
        'exp.tab.climbing': 'Climbing',
        'exp.card.difficulty': 'Difficulty',
        'exp.card.btn': 'View Details',

        // --- REVIEWS ---
        'reviews.title.prefix': 'What our',
        'reviews.title.highlight': 'Adventurers say',

        // --- FOOTER ---
        'footer.tagline': 'High mountain experts. We transform challenges into unforgettable experiences.',
        'footer.explore': 'Explore',
        'footer.proposal': 'Proposal',
        'footer.rights': 'All rights reserved.',

        // --- ACTIVITY DETAIL ---
        'detail.price_label': 'Total Price',
        'detail.per_person': '/ person',
        'detail.availability': 'Immediate Availability',
        'detail.btn_reserve': 'Book Adventure',
        'detail.btn_consult': 'Consult WhatsApp',
        'detail.about_title': 'About this experience',

        'detail.label.duration': 'Duration',
        'detail.label.difficulty': 'Difficulty',
        'detail.label.season': 'Season',
        'detail.label.altitude': 'Altitude',

        'detail.tab.itinerary': 'Itinerary',
        'detail.tab.equipment': 'Equipment',
        'detail.tab.included': 'Included',
        'detail.section.itinerary': 'Proposed Itinerary',
        'detail.section.equipment': 'Gear List',
        'detail.section.included': 'Included in Price',

        'detail.crumb.home': 'Home',
    },
    pt: {
        // --- NAVBAR ---
        'nav.home': 'Início',
        'nav.experiences': 'Aventuras',
        'nav.about': 'Sobre Nós',
        'nav.reserve': 'Reservar',

        // --- HERO ---
        'hero.title.prefix': 'DESCUBRA',
        'hero.title.highlight': 'SEU CUME',
        'hero.subtitle': 'Guias especialistas, segurança certificada e a imensidão dos Andes esperando por você.',
        'hero.cta': 'Reservar Aventura',
        'hero.cta2': 'Ver Rotas',

        // --- WHY US ---
        'why.title': 'Por que nos escolher',
        'why.guides.title': 'Guias Locais',
        'why.guides.desc': 'Especialistas que conhecem cada canto e segredo da montanha.',
        'why.safety.title': 'Segurança Primeiro',
        'why.safety.desc': 'Protocolos internacionais, comunicação via satélite e equipamentos certificados.',
        'why.unique.title': 'Experiências Únicas',
        'why.unique.desc': 'Rotas exclusivas projetadas para conectar com a natureza real.',

        // --- EXPERIENCES ---
        'exp.title.prefix': 'Nossas',
        'exp.title.highlight': 'Aventuras',
        'exp.subtitle': 'Selecionamos as melhores rotas de Mendoza para desafiar seus limites.',
        'exp.tab.trekking': 'Trekking',
        'exp.tab.climbing': 'Escalada',
        'exp.card.difficulty': 'Dificuldade',
        'exp.card.btn': 'Ver Detalhes',

        // --- REVIEWS ---
        'reviews.title.prefix': 'O que dizem nossos',
        'reviews.title.highlight': 'Aventureiros',
        
        // --- FOOTER ---
        'footer.tagline': 'Especialistas em alta montanha. Transformamos desafios em experiências inesquecíveis.',
        'footer.explore': 'Explorar',
        'footer.proposal': 'Proposta',
        'footer.rights': 'Todos os direitos reservados.',

        // --- ACTIVITY DETAIL ---
        'detail.price_label': 'Preço Total',
        'detail.per_person': '/ pessoa',
        'detail.availability': 'Disponibilidade Imediata',
        'detail.btn_reserve': 'Reservar Aventura',
        'detail.btn_consult': 'Consultar WhatsApp',
        'detail.about_title': 'Sobre esta experiência',

        'detail.label.duration': 'Duração',
        'detail.label.difficulty': 'Dificuldade',
        'detail.label.season': 'Temporada',
        'detail.label.altitude': 'Altitude',

        'detail.tab.itinerary': 'Itinerário',
        'detail.tab.equipment': 'Equipamento',
        'detail.tab.included': 'Incluído',
        'detail.section.itinerary': 'Itinerário Proposto',
        'detail.section.equipment': 'Lista de Equipamentos',
        'detail.section.included': 'Incluído no Preço',

        'detail.crumb.home': 'Início',
    }
};