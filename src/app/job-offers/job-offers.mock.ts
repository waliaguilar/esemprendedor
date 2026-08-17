import { JobOffer } from '../models/job-offer.model';

export const MOCK_JOB_OFFERS: JobOffer[] = [
  {
    id: 1,
    title: 'Vendedor/a de Local Comercial',
    company: 'Ropa & Estilo Adrogué',
    category: 'Ventas',
    location: 'Adrogué, Buenos Aires',
    type: 'full-time',
    description: 'Buscamos vendedor/a con experiencia en atención al cliente para local de indumentaria. Buen trato, proactividad y ganas de crecer.',
    contact: 'empleos@ropayestilo.com.ar',
    featured: true,
    publishedAt: '2026-07-20'
  },
  {
    id: 2,
    title: 'Ayudante de Cocina',
    company: 'El Fogón de la Abuela',
    category: 'Gastronomía',
    location: 'Adrogué, Buenos Aires',
    type: 'part-time',
    description: 'Restaurante familiar busca ayudante de cocina para turno noche. Experiencia previa deseable pero no excluyente. Posibilidad de permanencia.',
    contact: 'fogonabuela@gmail.com',
    featured: false,
    publishedAt: '2026-07-22'
  },
  {
    id: 3,
    title: 'Diseñador/a Gráfico Freelance',
    company: 'Emprendimientos Sur',
    category: 'Diseño',
    location: 'Remoto / Zona Sur GBA',
    type: 'freelance',
    description: 'Buscamos diseñador/a para proyectos de identidad visual, redes sociales y material gráfico para pymes locales. Portfolio requerido.',
    contact: 'diseno@emprendimientossur.com.ar',
    featured: true,
    publishedAt: '2026-07-18'
  },
  {
    id: 4,
    title: 'Repositor/a de Supermercado',
    company: 'Almacén Don Julio',
    category: 'Comercio',
    location: 'Adrogué, Buenos Aires',
    type: 'part-time',
    description: 'Se busca repositor/a para turno mañana. Tarea principal: acomodar mercadería y mantener orden en góndolas. No requiere experiencia previa.',
    contact: '11-4242-1234',
    featured: false,
    publishedAt: '2026-07-23'
  },
  {
    id: 5,
    title: 'Pasante de Marketing Digital',
    company: 'AgenciaClick',
    category: 'Marketing',
    location: 'Adrogué, Buenos Aires',
    type: 'internship',
    description: 'Agencia digital incorpora pasante para apoyar gestión de redes sociales, campañas de email y análisis de métricas. Estudiantes de último año.',
    contact: 'rrhh@agenciaclick.com.ar',
    featured: false,
    publishedAt: '2026-07-21'
  },
  {
    id: 6,
    title: 'Técnico/a en Reparación de PCs',
    company: 'TechZona Sur',
    category: 'Tecnología',
    location: 'Adrogué, Buenos Aires',
    type: 'full-time',
    description: 'Local de informática busca técnico/a con experiencia en hardware, instalación de software y soporte al cliente. Lunes a sábado.',
    contact: 'techzonasur@gmail.com',
    featured: false,
    publishedAt: '2026-07-19'
  },
  {
    id: 7,
    title: 'Maestra Particular de Matemáticas',
    company: 'Centro de Apoyo Escolar EduSur',
    category: 'Educación',
    location: 'Adrogué, Buenos Aires',
    type: 'freelance',
    description: 'Centro educativo necesita docente de matemáticas para clases particulares de nivel secundario. Horarios flexibles, tardes y fines de semana.',
    contact: 'edusur.adrogue@gmail.com',
    featured: false,
    publishedAt: '2026-07-17'
  },
  {
    id: 8,
    title: 'Peluquero/a',
    company: 'Estudio Hair Glam',
    category: 'Estética y Bienestar',
    location: 'Adrogué, Buenos Aires',
    type: 'full-time',
    description: 'Peluquería moderna busca profesional con experiencia en cortes, coloración y tratamientos. Excelente ambiente laboral y clientela estable.',
    contact: 'hairglam.adrogue@gmail.com',
    featured: true,
    publishedAt: '2026-07-24'
  },
  {
    id: 9,
    title: 'Repartidor/a con Moto',
    company: 'DeliverSur',
    category: 'Logística',
    location: 'Adrogué y alrededores',
    type: 'part-time',
    description: 'Empresa de delivery local busca repartidores con moto propia y licencia habilitante. Turnos flexibles, pago semanal.',
    contact: '11-5678-9000',
    featured: false,
    publishedAt: '2026-07-25'
  },
  {
    id: 10,
    title: 'Recepcionista',
    company: 'Consultorio Médico Integral',
    category: 'Salud',
    location: 'Adrogué, Buenos Aires',
    type: 'full-time',
    description: 'Consultorio médico incorpora recepcionista con manejo de agenda, atención al público y conocimientos básicos de informática. Lunes a viernes.',
    contact: 'consultorios.integral@gmail.com',
    featured: false,
    publishedAt: '2026-07-22'
  }
];
