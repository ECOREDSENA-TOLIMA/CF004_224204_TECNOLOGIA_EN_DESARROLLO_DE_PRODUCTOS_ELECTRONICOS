export default {
  global: {
    componenteFormativo: 'Identificación de componentes electrónicos',
    descripcionCurso:
      'El presente componente formativo contempla temas acerca de los circuitos electrónicos, de cómo están conformados y su vital importancia en la fabricación y operación de los productos electrónicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Simbología',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Encapsulados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Materiales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Placa base',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Características y hojas de datos',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño eléctrico y electrónico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Órdenes de trabajo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_4_224204.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Componentes electrónicos y su simbología',
      referencia:
        'Arboledas Brihuega, D. (2011). Electrónica básica: guía básica. Ediciones de la U.',
      tipo: 'Libro',
      link:
        'https://www.yumpu.com/es/document/view/63271889/electronica-basica-decrypted',
    },
  ],
  glosario: [
    {
      termino: 'Aislantes',
      significado: 'Materiales que impiden el paso de cargas eléctricas.',
    },
    {
      termino: 'Conductores',
      significado:
        'Materiales que permiten el movimiento de cargas eléctricas.',
    },
    {
      termino: 'Corriente',
      significado:
        'Flujo de electrones a través de un material impulsado por la diferencia de potencial entre dos puntos o materiales.',
    },
    {
      termino: 'Energía eléctrica',
      significado:
        'Es una fuente de energía renovable que se obtiene mediante el movimiento de cargas eléctricas (electrones) que se produce en el interior de materiales conductores (por ejemplo, cables metálicos como el cobre).',
    },
    {
      termino: 'Nodo',
      significado:
        'Punto de conexión común para dos o más componentes electrónicos que hacen parte de un circuito eléctrico.',
    },
    {
      termino: 'Semiconductores',
      significado:
        'Materiales que pueden permitir e impedir el paso de la energía eléctrica.',
    },
    {
      termino: 'Voltaje',
      significado:
        'Diferencia de potencial eléctrico entre dos puntos de un circuito o dos materiales con carga eléctrica diferente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arboledas Brihuega, D. (2011). Electrónica básica: guía básica. Ediciones de la U.',
      link:
        'https://www.yumpu.com/es/document/view/63271889/electronica-basica-decrypted',
    },
    {
      referencia:
        'Carmona Rubio, G.,  y Díaz Corcobado, T.(2010). Electrónica aplicada. McGraw-Hill.',
      link:
        'https://es.scribd.com/doc/158223478/Electronica-Aplicada-Solucionario-Mcgrawhill',
    },
    {
      referencia:
        'Texas Instruments. (2015). Quad-Operational Amplifiers. [Hoja de datos] TI.',
      link: 'https://www.ti.com/lit/ds/snosc16d/snosc16d.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Arley Delgado Rincón ',
          cargo: 'Instructor',
          centro:
            'Regional Distrito Capital Centro de Electricidad, Electrónica y Telecomunicaciones.',
        },
        {
          nombre: 'Miroslava González Hernández ',
          cargo: 'Diseñador y  Evaluador Instruccional ',
          centro: 'Regional Distrito Capital Centro de Gestión Industrial.',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez ',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro:
            'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Asesor Pedagógico ',
          centro:
            'Regional Santander Centro Industrial del Diseño y la Manufactura.',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
