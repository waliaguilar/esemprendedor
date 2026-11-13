export interface FeaturedBusiness {
  name: string;
  category: string;
  image: string;
  url?: string;
}

export const FEATURED_BUSINESSES: FeaturedBusiness[] = [
  { name: 'A su imagen', category: 'Salud, bienestar y belleza', image: 'assets/destacados/a-su-imagen.jpg', url: 'https://www.instagram.com/asuimagen.entrenamiento' },
  { name: 'Aneres', category: 'Indumentaria, moda, accesorios y diseño personal', image: 'assets/destacados/aneres.jpg' },
  { name: 'Alejandro Avila', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/AleAvila.jpeg' },
  { name: 'Bruzzone panadería y confitería', category: 'Gastronomía y alimentación', image: 'assets/destacados/bruzzone-panaderia-y-confiteria.jpg', url: 'https://www.instagram.com/bruzzone_panaderia' },
  { name: 'Casa erica pizzas artesanales', category: 'Gastronomía y alimentación', image: 'assets/destacados/casa-erica-pizzas-artesanales.jpg' },
  { name: 'Colchones', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/colchones.jpg' },
  { name: 'Dulce Petitt', category: 'Gastronomía y alimentación', image: 'assets/destacados/dulce-petit.jpg', url: 'https://www.instagram.com/dulce.petitt' },
  { name: 'Dulces de Petro', category: 'Gastronomía y alimentación', image: 'assets/destacados/dulces-de-petro.jpg', url: 'https://www.instagram.com/dulceslodepetro' },
  { name: 'Dulces Mediciones', category: 'Salud, bienestar y belleza', image: 'assets/destacados/dulces-mediciones.jpg', url: 'https://www.instagram.com/dulcesmediciones' },
  { name: 'Keeper Indumentaria', category: 'Indumentaria, moda, accesorios y diseño personal', image: 'assets/destacados/keeper-indumentaria.jpg', url: 'https://www.instagram.com/keeper.oficial' },
  { name: 'LAPELUDEFER', category: 'Salud, bienestar y belleza', image: 'assets/destacados/lapeludefer.jpg', url: 'https://www.instagram.com/lapeludefer2' },
  { name: 'Los manjares de ale', category: 'Gastronomía y alimentación', image: 'assets/destacados/los-manjares-de-ale.jpg', url: 'https://www.instagram.com/los.manjares.de.ale' },
  { name: 'Lucecitas de colores', category: 'Arte, regalería, papelería y productos personalizados', image: 'assets/destacados/lucecitas-de-colores.jpg', url: 'https://www.instagram.com/lucecitas_de_colores_' },
  { name: 'Marmoleria MV', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/marmoleria-mv.jpg', url: 'https://www.instagram.com/marmoleria_mv' },
  { name: 'MiLou estética', category: 'Salud, bienestar y belleza', image: 'assets/destacados/milou-estetica.jpg', url: 'https://www.instagram.com/milou_estetica' },
  { name: 'MoraluzTYD', category: 'Arte, regalería, papelería y productos personalizados', image: 'assets/destacados/moraluztyd.jpg', url: 'https://www.instagram.com/moraluztyd' },
  { name: 'Mountaindew', category: 'Gastronomía y alimentación', image: 'assets/destacados/mountaindew.jpg', url: 'https://www.instagram.com/mountaindewcatering' },
  { name: 'OPTICA Y ORTOPEDIA GONZALEZ', category: 'Salud, bienestar y belleza', image: 'assets/destacados/optica-y-ortopedia-gonzalez.jpg' },
  { name: 'refrigeracion sf', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/refrigeracion-sf.jpg' },
  { name: 'Los Cardales', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/los-cardales.jpg', url: 'https://www.instagram.com/loscardales.sanrafael' },
  { name: 'CD electricidad domestica', category: 'Hogar, construcción, servicios técnicos', image: 'assets/destacados/cd-electricidad-domestica.jpg', url: 'https://www.instagram.com/cdserviciotecnico' },
  { name: 'ce&ba abogadas', category: 'Servicios profesionales', image: 'assets/destacados/ce-ba-abogadas.jpg' },
  { name: 'colombo', category: 'Servicios profesionales', image: 'assets/destacados/colombo.jpg' },
  { name: 'doctora gomez', category: 'Servicios profesionales', image: 'assets/destacados/doctora-gomez.jpg' },
  { name: 'el quincho', category: 'Eventos', image: 'assets/destacados/el-quincho.jpg', url: 'https://www.instagram.com/elquinchoburzaco' },
  { name: 'espacio samara', category: 'Eventos', image: 'assets/destacados/espacio-samara.jpg', url: 'https://www.instagram.com/espacio.samara' },
  { name: 'eugenia rivas laise', category: 'Servicios profesionales', image: 'assets/destacados/eugenia-rivas-laise.jpg', url: 'https://www.instagram.com/eugeniarlaise' },
  { name: 'factorytruck', category: 'Construcción', image: 'assets/destacados/factorytruck.jpg', url: 'https://www.instagram.com/factorytruck.arg' },
  { name: 'genesis', category: 'Automotores, compra y venta, accesorios y servicios', image: 'assets/destacados/genesis.jpg', url: 'https://www.instagram.com/tallermecanicogenesis' },
  { name: 'greco propiedades', category: 'Servicios profesionales', image: 'assets/destacados/greco-propiedades.jpg' },
  { name: 'grupo integro', category: 'Servicios profesionales', image: 'assets/destacados/grupo-integro.jpg', url: 'https://www.instagram.com/grupointegroseguros' },
  { name: 'kairos calzada', category: 'minorista, polirubro, kiosco y almacen', image: 'assets/destacados/kairos-calzada.jpg', url: 'https://www.instagram.com/kairos.calzada' },
  { name: 'lucpack', category: 'Logística', image: 'assets/destacados/lucpack.jpg', url: 'https://www.instagram.com/lucpacklogistica' },
  { name: 'mefiboset', category: 'Servicios profesionales', image: 'assets/destacados/mefiboset.jpg', url: 'https://www.instagram.com/mefiboset.ok' },
  { name: 'natalia romero', category: 'Educación', image: 'assets/destacados/natalia-romero.jpg', url: 'https://www.instagram.com/nataliaromero.cantante' },
  { name: 'neumaticos corban', category: 'Automotores, compra y venta, accesorios y servicios', image: 'assets/destacados/neumaticos-corban.jpg' },
  { name: 'trama consultorios', category: 'Servicios profesionales', image: 'assets/destacados/trama-consultorios.jpg', url: 'https://www.instagram.com/consultorio_psicologico_trama_' }
];
