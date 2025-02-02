import { v4 as uuidv4 } from 'uuid';
export const siteInfo = {
  title: 'Pokemon Static',
  description:
    'Pokemon Static is a web application that allows you to search for a pokemon and get its information.',

  author: 'Jose luis @j0selu'
};

export const frameworks = ['react', 'angular', 'vue'];
export const PROYECTS = [
  {
    id: uuidv4(),
    // img: '/react/shop_jl.webp',
    title: 'SHOP JL',
    tegnologies: 'React',
    description:
      'Este proyecto de eCommerce está construido con Next.js, utilizando React y TypeScript para una interfaz dinámica, rápida y con tipado robusto. El diseño de la plataforma es moderno y completamente responsive utilizando Tailwind, lo que garantiza una experiencia de usuario fluida en cualquier dispositivo. Para la infraestructura, se emplea Docker para gestionar contenedores y asegurar una implementación eficiente y consistente, mientras que PostgreSQL actúa como base de datos, proporcionando una solución confiable y escalable para manejar grandes volúmenes de datos. Esta combinación de tecnologías crea una plataforma de compra y venta en línea altamente optimizada y lista para escalar.'
  },
  {
    id: uuidv4(),
    // img: '/react/miranda.webp',
    title: 'Hotel Miranda',
    tegnologies: 'React',
    description:
      'Para el proyecto Hotel Miranda, me sumergí en el desarrollo de una página web para un hotel, utilizando HTML, CSS y JavaScript. Implementé un diseño responsive y atractivo, asegurando que la página fuera accesible en distintos dispositivos. Además,utilize SASS y metodología BEM para estructurar el código de manera eficiente y mantenible. Este proyecto me permitió demostrar mi habilidad para crear interfaces de usuario efectivas y atractivas.'
  },
  {
    id: uuidv4(),
    // img: '/react/dasboard_miranda.webp',
    title: 'Dashboard Hotel Miranda',
    tegnologies: 'React',
    description:
      'Proyecto de Dashboard para el Hotel Miranda. En este proyecto se pone en práctica el uso de React, TypeScript, Redux y Styled Modules. El Dashboard esta conectado a la API del Hotel Miranda, permitiendo la gestión de los datos de los usuarios y las habitaciones del hotel.'
  },
  {
    id: uuidv4(),
    // img: '/react/dasboard_images.webp',
    title: 'Dashboard de imágenes',
    tegnologies: 'React',
    description:
      'Aplicacion que nos permite realizar una busqueda de imagenes, utilizando la API de Unsplash. En este proyecto se pone en práctica el uso de React, TypeScript, Redux y SASS. Se implementa el patron CRUD para la gestión de las imagenes.'
  },
  {
    id: uuidv4(),
    // img: '/react/miranda_api.webp',
    title: 'Hotel Miranda API',
    tegnologies: 'React',
    description:
      'Proyecto de API RESTful para el Hotel Miranda. En este proyecto se pone en práctica el uso de Node.js, Express, TypeScript, MongoDB y JWT. La API gestiona la utenticación gracias a JWT y realizar operaciones CRUD sobre los datos de los usuarios y las habitaciones del hotel.'
  },
  //6
  {
    id: uuidv4(),
    // img: '/react/oxygen-shop.webp',
    title: 'Oxygen Shop',
    tegnologies: 'Angular',
    description:
      'Página web para Oxygen Shop, una tienda de ropa. En este proyecto, utilicé HTML, CSS y JavaScript para desarrollar una interfaz de usuario atractiva y funcional. Implementé un diseño responsive y atractivo, asegurando que la página fuera accesible en distintos dispositivos. Además, utilicé SASS y la metodología BEM para estructurar el código de manera eficiente y mantenible. Este proyecto me permitió demostrar mi habilidad para crear interfaces de usuario efectivas y atractivas.'
  },
  {
    id: uuidv4(),
    // img: '/react/al-andalus.webp',
    title: 'Al-Andalus Doner Kebab',
    tegnologies: 'Angular',
    description:
      "Durante la ejecución del proyecto Al-Andalus Doner Kebab Demo, empleé HTML, JavaScript y Sass para desarrollar una página web con un enfoque 'Mobile First', asegurando así su adaptabilidad a distintos dispositivos. Para estructurar el código de manera eficiente y mantenible, implementé la metodología BEM. Uno de los objetivos clave fue la creación de un menú interactivo que abarcara todas las opciones de la carta, proporcionando a los usuarios una experiencia completa y accesible. Este proyecto representó un compromiso integral con el diseño responsive y las prácticas de desarrollo que garantizan una interfaz de usuario efectiva y atractiva."
  },
  {
    id: uuidv4(),
    // img: '/react/jabiertzo-web.webp',
    title: 'Landing Page - Jabiertzo',
    tegnologies: 'Angular',
    description:
      'Esta es una landing page diseñada para el canal de YouTube Jabiertzo, desarrollada con Astro, TypeScript y SASS. La página es completamente e, garantizando una experiencia de usuario óptima en cualquier dispositivo. Los vídeos de YouTube se cargan de manera eficiente, permitiendo que solo se reproduzcan al hacer clic, lo que mejora el rendimiento de la página. Además, se incluye un enlace destacado al canal de Twitch, facilitando a los usuarios la conexión con todo el contenido del creador.'
  },
  {
    id: uuidv4(),
    // img: '/proyects/reading-list.webp',
    title: 'Prueba técnica por @Midudev',
    tegnologies: 'Angular',
    description:
      'Prueba técnica propuesta por @Midudev, en la que se pone a prueba los conocimientos de Angular, TypeScript, RxJs, HTML y Sass. En este proyecto se pone en práctica el uso de la librería RxJs para el manejo de los datos'
  },
  {
    id: uuidv4(),
    // img: '/proyects/chat-openAi.webp',
    title: 'Asistente virtual con OpenAi ',
    tegnologies: 'Angular',
    description:
      '¡Este proyecto fue toda una aventura! Aprendí un montón mientras desarrollaba un asistente virtual para ayudar a la gente a encontrar información sobre cómo comprar productos Samsung en México. En el frontend, me sumergí en Tailwind CSS, creando una interfaz de usuario que es tanto bonita como funcional. Por otro lado, en el backend, utilicé Nest.js y Multer para manejar archivos y gestionar la lógica de la aplicación. ¡Fue genial ver cómo todo se unía para ofrecer respuestas útiles a las consultas de los usuarios!'
  },
  {
    id: uuidv4(),
    // img: '/proyects/space.webp',
    title: 'Space tourism multi-page ',
    tegnologies: 'React',
    description: 'Un proyecto de FRONTENDMENTOR en colaboraciçon between us, Scrimba, and Kevin Powell.'
  },

  {
    id: uuidv4(),
    img: '/proyects/pomodoro.webp',
    title: 'Pomodoro',
    tegnologies: 'Angular',
    description:
      'PomoDoro con tareas es una aplicación que permite al usuario organizar su tiempo de trabajo y descanso. El usuario puede añadir tareas. La aplicación cuenta con un temporizador que avisa al usuario cuando el tiempo de trabajo o descanso ha terminado. Además, la aplicación cuenta con acciones sobre cada tareas como el de terminar la tarea, editar y eliminar.'
  },
  {
    id: uuidv4(),
    // img: '/proyects/map-box.webp',
    title: 'Map-Box',
    tegnologies: 'Angular',
    description:
      'Durante mi tiempo trabajando en el proyecto Map-box Demo con Angular, logré aplicar y poner en práctica de manera efectiva conceptos avanzados como standalone components, signals y la estrategia de componentización. Este proyecto se centró en la potenciación de la API de Map-box, donde mi objetivo era incorporar funcionalidades, tales como la implementación de características como la adición de marcadores, personalización de los mismos y la capacidad de desplazarlos por el mapa, manteniendo los datos persistentes.'
  },
  {
    id: uuidv4(),
    // img: '/proyects/github-profile.webp',
    title: 'Buscador perfil GitHub',
    tegnologies: 'React',
    description:
      'Applicacion que permite buscar perfiles de GitHub, utilizando la API de GitHub. En este proyecto se pone en práctica el uso HttpClient para el manejo de los datos y debouncer para la busqueda.'
  },
  {
    id: uuidv4(),
    // img: '/proyects/recetas.webp',
    title: 'Buscador de recetas',
    tegnologies: 'Angular',
    description:
      'Desarrollé una aplicación para buscar recetas que incorpora un modal para visualizar los ingredientes. Además, los usuarios tienen la capacidad de añadir recetas a la lista de favoritos, proporcionando una experiencia interactiva y funcional. Este proyecto destaca mi habilidad para trabajar con tecnologías web clave y crear aplicaciones prácticas y atractivas.'
  }
  // {
  //   id: uuidv4(),
  //   img: '/proyects/search-gifs.webp',
  //   title: 'Buscador de gifs',
  //   tegnologies: ['Angular', 'TypeScript', 'HTML', 'SASS'],
  //   description:
  //     "En la creación de este proyecto, utilicé Angular 16, HTML, SASS y TypeScript, empleando específicamente Angular's HttpClient para consumir eficientemente la API de Giphy a través de peticiones HTTP. Destaco tambien la implementación de un historial de búsquedas, permitiendo a los usuarios repetir búsquedas anteriores con un clic. Aseguré la eficiencia del historial al evitar duplicación de nombres. Este proyecto resalta mi capacidad para desarrollar aplicaciones interactivas y mi habilidad en el uso de herramientas avanzadas como Angular's HttpClient para optimizar la comunicación con la API.",

  //   descriptionList: [
  //     'Desarrollado con Angular, TypeScript y SCSS.',
  //     'Historial de búsquedas implementado con control de duplicados.',
  //     'Uso de HttpClient para optimizar la comunicación con la API.'
  //   ],

  //   demo: 'https://angular-search-gifs.vercel.app/',
  //   repo: 'https://github.com/JoseIu/Angular-searchGifs'
  // },
  // {
  //   id: uuidv4(),
  //   img: '/proyects/chat-openAi-back.webp',
  //   title: 'Asistente virtual API',
  //   tegnologies: ['NestJS', 'OpenAi', 'Multer'],
  //   description:
  //     '¡Este proyecto fue toda una aventura! Aprendí un montón mientras desarrollaba un asistente virtual para ayudar a la gente a encontrar información sobre cómo comprar productos Samsung en México. En el frontend, me sumergí en Tailwind CSS, creando una interfaz de usuario que es tanto bonita como funcional. Por otro lado, en el backend, utilicé Nest.js y Multer para manejar archivos y gestionar la lógica de la aplicación. ¡Fue genial ver cómo todo se unía para ofrecer respuestas útiles a las consultas de los usuarios!',
  //   descriptionList: [
  //     'Desarrollado con NestJS y OpenAI.',
  //     'Manejo de archivos con Multer.',
  //     'Asistente virtual con OpenAI. Lógica y archivos gestionados en backend.'
  //   ],
  //   demo: 'https://angular-gpt-gilt.vercel.app/orthography',
  //   repo: 'https://github.com/JoseIu/nest-gpt'
  // },
];
