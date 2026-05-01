import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PromoBannerComponent } from './promo-banner/promo-banner.component';

interface Card {
  icon: string;
  chip: string;
  name: string;
  service: string;
  contact: string;
  featured?: boolean;
  backgroundImage?: string;
}

interface Section {
  id: string;
  title: string;
  label: string;
  bgLight: boolean;
  keywords: string;
  cards: Card[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, PromoBannerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search = '';

  promoBanners = [
    {
      title: '¿Querés que tu negocio esté acá?',
      text: 'Queremos que tu emprendimiento crezca y sea conocido. Escribinos y asegurá tu lugar en la Guía de Emprendedores de Espíritu Emprendedor.',
      href: 'https://instagram.com/espirituemprendedor.cpt',
      buttonText: 'Escribinos en Instagram'
    }
    // {
    //   title: 'Sumate a la comunidad',
    //   text: 'Queremos que tu emprendimiento crezca y sea conocido. Escribinos y asegurá tu lugar en la guía de Espíritu Emprendedor.',
    //   href: 'https://instagram.com/espirituemprendedor.cpt',
    //   buttonText: '@espirituemprendedor.cpt'
    // }
  ];

  sections: Section[] = [
    {
      id: 'gastronomia',
      title: 'Gastronomía',
      label: 'Sección 01',
      bgLight: false,
      keywords: 'gastronomia gastronomía comida catering tortas pastelería panadería confitería lunch viandas',
      cards: [
        {
          icon: '🎂',
          backgroundImage: 'assets/panabruzzone.png',
          chip: 'Panadería · Confitería',
          name: 'Bruzzone',
          service: 'Cocinamos en familia y con mucho amor. Tortas, cheesecakes y productos artesanales elaborados con dedicación.',
          contact: '📍 Mendez 206, Glew',
          featured: true
        },
        {
          icon: '🍽️',
          chip: 'Catering',
          name: 'Mountain Dew Catering',
          service: 'Desayunos keto · Casamientos · Bandejas dulces. El servicio ideal para cada ocasión.',
          contact: '📲 @mountaindewcatering'
        },
        {
          icon: '🍞',
          chip: 'Panadería · Confitería',
          name: 'Los Manjares de Alé',
          service: 'Elaboración artesanal en horno a leña. Lunch · Viandas · Facturas · Tartas.',
          contact: '📍 Plaza Brown 211 – Adrogué<br>☎ Tel. 4600-0503 · 15-3732-2344<br>📍 Dr. Lucio Melendez 1531 – Adrogué · Tel. 4214-0714'
        }
      ]
    },
    {
      id: 'educacion',
      title: 'Educación',
      label: 'Sección 02',
      bgLight: true,
      keywords: 'educación cursos talleres formación capacitación crédito',
      cards: [
        {
          icon: '📚',
          chip: 'Estudio',
          name: 'Elevarte Estudio',
          service: 'Sumate a elevar tus capacidades. Formación, talleres y cursos para crecer personal y profesionalmente.',
          contact: '📍 Pl. Adrogué 54, Adrogué · 📲 Elevarte.estudio'
        },
        {
          icon: '💡',
          chip: 'Capacitación',
          name: 'Mejorísdar',
          service: 'Haciendo que las cosas pasen. Líneas de crédito para emprendedores, mejoramiento habitacional y cursos de capacitación.',
          contact: 'Escribinos para más información'
        }
      ]
    },
    {
      id: 'servicios',
      title: 'Servicios Profesionales',
      label: 'Sección 03',
      bgLight: false,
      keywords: 'servicios profesionales seguros distribuidora cotización',
      cards: [
        {
          icon: '🏠',
          chip: 'Seguros',
          name: 'Grupo Integro',
          service: '¿Tu casa está asegurada? Solicitá una cotización y comprobá lo económico que es estar cubierto. Asesores de seguros con respaldo de la SSN.',
          contact: '📞 11-6243-6177',
          featured: true
        },
        {
          icon: '📦',
          chip: 'Distribuidora',
          name: 'Enece Distribuidora',
          service: 'Distribución profesional de productos. Consultanos para conocer nuestro catálogo completo.',
          contact: 'Escribinos para más información'
        }
      ]
    },
    {
      id: 'alojamientos',
      title: 'Alojamientos',
      label: 'Sección 04',
      bgLight: true,
      keywords: 'alojamientos hotel apart departamentos estadía hospedaje',
      cards: [
        {
          icon: '🏨',
          chip: 'Apart Hotel',
          name: 'Adrogué Apart Hotel',
          service: 'Alojamiento confortable en el corazón de Adrogué. Departamentos equipados con todo lo que necesitás para una estadía perfecta.',
          contact: 'Consultanos por disponibilidad',
          featured: true
        }
      ]
    },
    {
      id: 'electricidad',
      title: 'Electricidad',
      label: 'Sección 05',
      bgLight: false,
      keywords: 'electricidad taller instalaciones reparaciones eléctrico',
      cards: [
        {
          icon: '⚡',
          chip: 'Taller',
          name: 'Del Río e Hijos',
          service: 'Taller de electricidad con trayectoria. Servicio técnico, instalaciones y reparaciones para el hogar y la industria.',
          contact: 'Consultanos para presupuesto'
        }
      ]
    },
    {
      id: 'eventos',
      title: 'Eventos',
      label: 'Sección 06',
      bgLight: true,
      keywords: 'eventos quincho cumpleaños casamientos despedidas salón fiestas',
      cards: [
        {
          icon: '🎉',
          chip: 'Salón · Quincho',
          name: 'El Quincho',
          service: 'Un espacio perfecto para tus eventos sociales. Por día o estadía en Burzaco. Cumpleaños · Despedidas · Casamientos · Estadías.',
          contact: 'Reservas y consultas: escribinos',
          featured: true
        }
      ]
    },
    {
      id: 'opticas',
      title: 'Ópticas',
      label: 'Sección 07',
      bgLight: false,
      keywords: 'ópticas optica ortopedia lentes marcos visual',
      cards: [
        {
          icon: '👓',
          chip: 'Óptica · Ortopedia',
          name: 'Óptica y Ortopedia González',
          service: 'Tu salud visual y ortopédica en manos expertas. Gran variedad de marcos, lentes y productos ortopédicos.',
          contact: 'Consultanos por turno y productos'
        }
      ]
    },
    {
      id: 'hogar',
      title: 'Hogar',
      label: 'Sección 08',
      bgLight: true,
      keywords: 'hogar colchones futón muebles cama descanso',
      cards: [
        {
          icon: '🛏️',
          chip: 'Colchones',
          name: 'Colchones para Futón Adrogué',
          service: 'Colchones y futones de calidad para tu hogar. Amplia variedad de medidas y modelos.',
          contact: '📞 1163647870'
        }
      ]
    },
    {
      id: 'estacionamientos',
      title: 'Estacionamientos',
      label: 'Sección 09',
      bgLight: false,
      keywords: 'estacionamiento parking auto vehículo garage',
      cards: [
        {
          icon: '🅿️',
          chip: 'Parking',
          name: 'Estacionamiento Parking Adrogué',
          service: 'Tu vehículo seguro en el centro de Adrogué. Estacionamiento cubierto y vigilado.',
          contact: 'Consultanos por tarifas y disponibilidad'
        }
      ]
    },
    {
      id: 'distribuidoras',
      title: 'Distribuidoras',
      label: 'Sección 10',
      bgLight: true,
      keywords: 'distribuidoras distribución productos mayorista',
      cards: [
        {
          icon: '📦',
          chip: 'Distribución',
          name: 'Marbyn',
          service: 'Distribución eficiente de productos con cobertura en la zona sur del Gran Buenos Aires.',
          contact: 'Consultanos por catálogo'
        }
      ]
    },
    {
      id: 'logisticas',
      title: 'Logística',
      label: 'Sección 11',
      bgLight: false,
      keywords: 'logística logistica entregas envíos distribución transporte fletes',
      cards: [
        {
          icon: '🚛',
          chip: 'Logística · Distribución',
          name: 'Lucpack',
          service: 'Agilidad, seguridad y cumplimiento en cada operación. Eficiencia logística para empresas que necesitan resultados.',
          contact: '🌐 www.lucpack.com · 📲 @lucpack.logistica',
          featured: true
        },
        {
          icon: '📬',
          chip: 'Entregas',
          name: 'Flexisur',
          service: 'Flexibilizá tus entregas. Servicio de distribución adaptable a las necesidades de tu negocio.',
          contact: 'Consultanos por cobertura y tarifas'
        }
      ]
    }
  ];

  get normalizedQuery(): string {
    return this.search.trim().toLowerCase();
  }

  private matchesText(value: string, query: string): boolean {
    return query.length > 0 && value.toLowerCase().includes(query);
  }

  private cardMatches(card: Card, query: string): boolean {
    return (
      this.matchesText(card.name, query) ||
      this.matchesText(card.service, query) ||
      this.matchesText(card.contact, query) ||
      this.matchesText(card.chip, query)
    );
  }

  get visibleSections() {
    const query = this.normalizedQuery;
    return this.sections
      .map(section => {
        const sectionMatch = query && section.keywords.includes(query);
        const cards = section.cards.filter(card => !query || sectionMatch || this.cardMatches(card, query));
        return { ...section, cards };
      })
      .filter(section => section.cards.length > 0);
  }

  get resultCount(): number {
    return this.visibleSections.reduce((total, section) => total + section.cards.length, 0);
  }
}
