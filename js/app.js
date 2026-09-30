// =====================================================
// PANTALLAS
// =====================================================

const pantallaInicio =
    document.querySelector(".pantalla-inicio");

const pantallaDatos =
    document.getElementById("pantallaDatos");

const pantallaQuiz =
    document.getElementById("pantallaQuiz");

const pantallaResultado =
    document.getElementById("pantallaResultado");

const pantallaMapa =
    document.getElementById("pantallaMapa");

// =====================================================
// BOTONES
// =====================================================

const botonComenzar =
    document.getElementById("btnComenzar");

const botonRegresar =
    document.getElementById("btnRegresar");

const botonReiniciar =
    document.getElementById("btnReiniciar");

const btnSiguiente =
    document.getElementById("btnSiguiente");

const btnAnterior =
    document.getElementById("btnAnterior");

const btnIniciarMisiones =
    document.getElementById("btnIniciarMisiones");

const btnCambiarNivel =
    document.getElementById("btnCambiarNivel");

const nivelMapa =
    document.getElementById("nivelMapa");
// =====================================================
// ELEMENTOS DEL JUEGO
// =====================================================

const preguntaTexto =
    document.getElementById("preguntaTexto");

const preguntaDescripcion =
    document.getElementById("preguntaDescripcion");

const opcionesQuiz =
    document.getElementById("opcionesQuiz");

const numeroPregunta =
    document.getElementById("numeroPregunta");

const numeroFondo =
    document.getElementById("numeroFondo");

const barraProgreso =
    document.getElementById("barraProgreso");

const tipoPregunta =
    document.getElementById("tipoPregunta");

const iconoPregunta =
    document.getElementById("iconoPregunta");

const feedbackQuiz =
    document.getElementById("feedbackQuiz");

const textoNivel =
    document.getElementById("textoNivel");

const xpValor =
    document.getElementById("xpValor");

const rachaValor =
    document.getElementById("rachaValor");

const xpFlotante =
    document.getElementById("xpFlotante");

const timerBox =
    document.getElementById("timerBox");

const timerValor =
    document.getElementById("timerValor");

const topCarreras =
    document.getElementById("topCarreras");

const xpFinal =
    document.getElementById("xpFinal");

const misionesFinal =
    document.getElementById("misionesFinal");

const celebracion =
    document.getElementById("celebracion");


// =====================================================
// ESTADO DEL JUEGO
// =====================================================

let nivelEstudiante = "";

let preguntaActual = 0;

let afinidades = {};

let xp = 0;

let racha = 0;

let tiempo = 20;

let temporizador = null;

let respondida = false;

let ordenSeleccionado = [];

// Guarda el estado antes de responder cada pregunta
let historialEstados = [];

// Guarda qué había respondido el estudiante
let respuestasUsuario = [];

let preguntasActivas = [];

let rutaElegida = "";

// =====================================================
// 21 CARRERAS REALES
// =====================================================

const carreras = [

    {
        id: "bt_admin",

        nombre:
            "Bachillerato Técnico en Administración",

        icono: "📊",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Gestión de recursos económicos, materiales, humanos y tecnológicos.",

        grupo: "administracion",

        perfil: {
            ruta_larga: 3,
            organizacion: 4,
            oficina: 3,
            liderazgo: 2,
            rrhh: 2,
            numeros: 1
        }
    },


    {
        id: "bt_contabilidad",

        nombre:
            "Bachillerato Técnico en Contabilidad",

        icono: "🧾",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Registro contable, costos, impuestos, estados financieros y software contable.",

        grupo: "contabilidad",

        perfil: {
            ruta_larga: 3,
            finanzas: 4,
            numeros: 4,
            detalle: 4,
            oficina: 2,
            tecnologia: 1
        }
    },


    {
        id: "refrigeracion",

        nombre:
            "Técnico General en Refrigeración y Aire Acondicionado Comercial",

        icono: "❄️",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Instalación, mantenimiento y reparación de refrigeración y aire acondicionado.",

        perfil: {
            ruta_corta: 2,
            refrigeracion: 5,
            diagnostico: 4,
            herramientas: 3,
            electricidad: 2
        }
    },


    {
        id: "banca",

        nombre:
            "Técnico Especialista en Banca y Finanzas",

        icono: "🏦",

        requisitoAcademico: "bachiller",

        requisito:
            "Bachiller • 14+ años",

        descripcion:
            "Operaciones bancarias, análisis financiero, créditos y atención al cliente.",

        perfil: {
            especialista: 3,
            finanzas: 5,
            numeros: 4,
            cliente: 3,
            oficina: 3,
            detalle: 2
        }
    },


    {
        id: "ingles",

        nombre:
            "Técnico Especialista en Inglés",

        icono: "🌎",

        requisitoAcademico: "bachiller",

        requisito:
            "Bachiller • 14+ años",

        descripcion:
            "Dominio del inglés y aplicación de estrategias para enseñanza y atención bilingüe.",

        perfil: {
            especialista: 3,
            idiomas: 5,
            comunicacion: 5,
            servicio: 2,
            cliente: 2
        }
    },


    {
        id: "marketing",

        nombre:
            "Técnico Especialista en Marketing y Publicidad",

        icono: "📣",

        requisitoAcademico: "bachiller",

        requisito:
            "Bachiller • 14+ años",

        descripcion:
            "Marketing, publicidad, análisis de mercado, promoción y ventas.",

        perfil: {
            especialista: 3,
            marketing: 5,
            creatividad: 4,
            comunicacion: 4,
            ventas: 4,
            cliente: 2
        }
    },


    {
        id: "programacion",

        nombre:
            "Técnico Especialista en Programación",

        icono: "💻",

        requisitoAcademico: "bachiller",

        requisito:
            "Bachiller • 16+ años",

        descripcion:
            "Análisis y diseño de sistemas, bases de datos y desarrollo de software.",

        perfil: {
            especialista: 3,
            programacion: 5,
            logica: 5,
            tecnologia: 5,
            creatividad: 2
        }
    },


    {
        id: "tg_admin",

        nombre:
            "Técnico General en Administración",

        icono: "📋",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Administración de recursos y apoyo a los procesos de las organizaciones.",

        grupo: "administracion",

        perfil: {
            ruta_corta: 3,
            organizacion: 4,
            oficina: 3,
            liderazgo: 2,
            rrhh: 2
        }
    },


    {
        id: "asistente",

        nombre:
            "Técnico General Asistente Ejecutivo",

        icono: "🗂️",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Gestión secretarial, administrativa, gerencial y apoyo de dirección.",

        perfil: {
            ruta_corta: 3,
            oficina: 5,
            organizacion: 4,
            comunicacion: 3,
            rrhh: 1
        }
    },


    {
        id: "restaurante",

        nombre:
            "Técnico General en Servicio de Restaurante, Bar y Cafetería",

        icono: "☕",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Servicio al cliente, cafetería, bar, bebidas y atención en restaurantes.",

        perfil: {
            ruta_corta: 3,
            servicio: 5,
            cliente: 4,
            gastronomia: 2,
            comunicacion: 3,
            idiomas: 1
        }
    },


    {
        id: "cocina",

        nombre:
            "Técnico General en Cocina y Gastronomía",

        icono: "👨‍🍳",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Preparación, presentación y conservación de alimentos.",

        perfil: {
            ruta_corta: 3,
            gastronomia: 5,
            creatividad: 4,
            precision: 3,
            herramientas: 1
        }
    },


    {
        id: "computacion",

        nombre:
            "Técnico General en Computación",

        icono: "🖥️",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Operación y reparación de computadoras e instalación de redes LAN/WAN.",

        perfil: {
            ruta_corta: 3,
            tecnologia: 5,
            soporte: 5,
            redes: 5,
            diagnostico: 4,
            logica: 2
        }
    },


    {
        id: "tg_contabilidad",

        nombre:
            "Técnico General en Contabilidad",

        icono: "💵",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Registros contables, impuestos, estados financieros y operaciones de caja.",

        grupo: "contabilidad",

        perfil: {
            ruta_corta: 3,
            finanzas: 5,
            numeros: 5,
            detalle: 4,
            oficina: 2
        }
    },


    {
        id: "soldadura",

        nombre:
            "Técnico General en Corte y Soldadura",

        icono: "🔥",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Corte de metales y procesos de soldadura con diferentes técnicas.",

        perfil: {
            ruta_corta: 3,
            metal: 5,
            herramientas: 5,
            precision: 4
        }
    },


    {
        id: "electricidad",

        nombre:
            "Técnico General en Electricidad Industrial",

        icono: "⚡",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Instalaciones y mantenimiento de sistemas y redes eléctricas.",

        perfil: {
            ruta_corta: 3,
            electricidad: 5,
            diagnostico: 4,
            herramientas: 4,
            precision: 3
        }
    },


    {
        id: "electronica",

        nombre:
            "Técnico General en Electrónica",

        icono: "🔌",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Mantenimiento de electrodomésticos, sistemas electrónicos y hardware.",

        perfil: {
            ruta_corta: 3,
            electronica: 5,
            tecnologia: 4,
            diagnostico: 4,
            herramientas: 3
        }
    },


    {
        id: "madera",

        nombre:
            "Técnico General en Fabricación de Productos de Madera",

        icono: "🪵",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Diseño, construcción, tallado y acabado de muebles y productos de madera.",

        perfil: {
            ruta_corta: 3,
            madera: 5,
            creatividad: 4,
            herramientas: 4,
            precision: 4
        }
    },


    {
        id: "aduanera",

        nombre:
            "Técnico General en Gestión Aduanera",

        icono: "🚢",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Trámites de importación, exportación y gestión de mercancías en aduana.",

        perfil: {
            ruta_corta: 3,
            aduanas: 5,
            documentacion: 5,
            organizacion: 3,
            detalle: 4,
            oficina: 2
        }
    },


    {
        id: "mecanica",

        nombre:
            "Técnico General en Mecánica Automotriz de Vehículos Livianos Diésel y Gasolina",

        icono: "🚗",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Diagnóstico y reparación de motores, frenos, transmisión y sistemas automotrices.",

        perfil: {
            ruta_corta: 3,
            mecanica: 5,
            diagnostico: 5,
            herramientas: 5,
            electricidad: 1
        }
    },


    {
        id: "pasteleria",

        nombre:
            "Técnico General en Pastelería y Panadería",

        icono: "🎂",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 16+ años",

        descripcion:
            "Elaboración, diseño y decoración de productos de pastelería y panadería.",

        perfil: {
            ruta_corta: 3,
            reposteria: 5,
            gastronomia: 3,
            creatividad: 5,
            precision: 4
        }
    },


    {
        id: "rrhh",

        nombre:
            "Técnico General en Gestión de Recursos Humanos",

        icono: "👥",

        requisitoAcademico: "noveno",

        requisito:
            "Noveno grado aprobado • 14+ años",

        descripcion:
            "Gestión del talento humano, nóminas, capacitación y ambiente laboral.",

        perfil: {
            ruta_corta: 3,
            rrhh: 5,
            comunicacion: 4,
            organizacion: 4,
            liderazgo: 3,
            oficina: 2
        }
    }

];


// =====================================================
// PREGUNTA INICIAL DE RUTA
// =====================================================

function crearPreguntaRuta() {

    let opciones = [];


    if (nivelEstudiante === "bachiller") {

        opciones = [

            {
                texto: "🛠️\nTécnico\nGeneral",
                ruta: "tg",

                afinidad: {
                    ruta_corta: 2
                }
            },

            {
                texto: "🚀\nTécnico\nEspecialista",
                ruta: "te",

                afinidad: {
                    especialista: 2
                }
            },

            {
                texto: "🤷‍♂️ 🤷‍♀️\nTodavía\nno lo sé",
                ruta: "mixto",

                afinidad: {}
            }

        ];

    }

    else {

        opciones = [

            {
                texto: "🛠️\nTécnico\nGeneral",
                ruta: "tg",

                afinidad: {
                    ruta_corta: 2
                }
            },

            {
                texto: "🎓\nBachillerato\nTécnico",
                ruta: "bt",

                afinidad: {
                    ruta_larga: 2
                }
            },

            {
                texto: "🤷‍♂️ 🤷‍♀️\nTodavía\nno lo sé",
                ruta: "mixto",

                afinidad: {}
            }

        ];

    }


    return {

        esRuta: true,

        tipo: "preferencia",

        formato: "burbujas",

        icono: "🧭",

        pregunta:
            "¿Qué tipo de formación te atrae más?",

        descripcion:
            "Toca una burbuja y comienza tu recorrido.",

        opciones: opciones

    };

}

// =====================================================
// PREGUNTAS COMUNES
// =====================================================

const preguntasComunes = [

    // =================================================
    // 02 - EXPLORACIÓN GENERAL
    // =================================================

    {
        tipo: "preferencia",

        icono: "🎯",

        pregunta:
            "Si hoy pudieras probar una actividad nueva, ¿cuál escogerías?",

        descripcion:
            "No pienses en cuál sabes hacer. Elige la que más curiosidad te dé.",

        opciones: [

            {
                texto: "💻 Explorar tecnología y computadoras",

                afinidad: {
                    tecnologia: 4,
                    soporte: 2,
                    redes: 1,
                    programacion: 1
                }
            },

            {
                texto: "🔧 Reparar o construir algo",

                afinidad: {
                    herramientas: 4,
                    diagnostico: 2,
                    mecanica: 1,
                    precision: 1
                }
            },

            {
                texto: "🍰 Preparar y crear alimentos",

                afinidad: {
                    gastronomia: 4,
                    reposteria: 3,
                    creatividad: 2
                }
            },

            {
                texto: "👥 Organizar y trabajar con personas",

                afinidad: {
                    organizacion: 4,
                    comunicacion: 2,
                    liderazgo: 2,
                    oficina: 2
                }
            }

        ]
    },


    // =================================================
    // 03 - PASTELERÍA
    // =================================================

    {
        tipo: "ordenar",

        icono: "🎂",

        pregunta:
            "Vas a preparar un pastel. Ordena el proceso.",

        descripcion:
            "Toca los pasos desde el primero hasta el último.",

        opciones: [

            {
                id: "mezclar",
                nombreCorto: "Mezclar",
                texto: "🥣 Preparar y mezclar los ingredientes"
            },

            {
                id: "hornear",
                nombreCorto: "Hornear",
                texto: "🔥 Hornear la mezcla"
            },

            {
                id: "enfriar",
                nombreCorto: "Enfriar",
                texto: "❄️ Dejar enfriar"
            },

            {
                id: "decorar",
                nombreCorto: "Decorar",
                texto: "🍓 Decorar y presentar"
            }

        ],

        ordenCorrecto: [
            "mezclar",
            "hornear",
            "enfriar",
            "decorar"
        ],

        afinidadCorrecta: {
            reposteria: 3,
            gastronomia: 2,
            precision: 1,
            creatividad: 1
        }
    },


    // =================================================
    // 04 - MECÁNICA
    // =================================================

    {
        tipo: "reto",

        icono: "🚗",

        pregunta:
            "Un vehículo comienza a hacer un ruido extraño. ¿Qué sería lo más razonable hacer?",

        descripcion:
            "🚗 RETO MECÁNICO • Tienes 20 segundos",

        opciones: [

            {
                texto: "🔍 Revisar de dónde proviene la falla",

                correcta: true,

                afinidad: {
                    mecanica: 3,
                    diagnostico: 2,
                    herramientas: 1
                }
            },

            {
                texto: "🎵 Subir el volumen para no escucharlo",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "🚙 Seguir usándolo sin revisar",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "🎲 Cambiar piezas al azar",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // =================================================
    // 05 - SISTEMAS TÉCNICOS
    // =================================================

    {
        tipo: "preferencia",

        icono: "⚙️",

        pregunta:
            "¿Cuál de estas fallas te daría más curiosidad investigar?",

        descripcion:
            "🎯 Revienta la burbuja que más te llame.",

        opciones: [

            {
                texto: "⚡ Una instalación eléctrica dejó de funcionar",

                afinidad: {
                    electricidad: 5,
                    diagnostico: 2,
                    herramientas: 1
                }
            },

            {
                texto: "❄️ Un aire acondicionado no enfría",

                afinidad: {
                    refrigeracion: 5,
                    diagnostico: 2,
                    herramientas: 1
                }
            },

            {
                texto: "🔌 Un equipo electrónico dejó de responder",

                afinidad: {
                    electronica: 5,
                    tecnologia: 2,
                    diagnostico: 1
                }
            },

            {
                texto: "🌐 Una computadora perdió la conexión",

                afinidad: {
                    soporte: 4,
                    redes: 4,
                    tecnologia: 2
                }
            }

        ]
    },


    // =================================================
    // 06 - MADERA VS METAL
    // =================================================

    {
        tipo: "preferencia",

        formato: "duelo",

        icono: "⚔️",

        pregunta:
            "Si tuvieras que construir algo con tus manos, ¿cuál escogerías?",

        descripcion:
            "⚔️ DUELO DE TALLERES",

        opciones: [

            {
                texto:
                    "🪵 Diseñar y construir un mueble",

                afinidad: {
                    madera: 5,
                    herramientas: 3,
                    creatividad: 2,
                    precision: 2
                }
            },

            {
                texto:
                    "🔥 Construir una estructura de metal",

                afinidad: {
                    metal: 5,
                    herramientas: 3,
                    precision: 3
                }
            }

        ]
    },


    // =================================================
    // 07 - FINANZAS
    // =================================================

    {
        tipo: "reto",

        icono: "💰",

        pregunta:
            "Un artículo cuesta C$800 y tiene 25% de descuento. ¿Cuánto pagarías?",

        descripcion:
            "💰 RETO DE NÚMEROS • Tienes 20 segundos",

        opciones: [

            {
                texto: "C$600",

                correcta: true,

                afinidad: {
                    numeros: 3,
                    finanzas: 3,
                    detalle: 1
                }
            },

            {
                texto: "C$650",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "C$700",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "C$750",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // =================================================
    // 08 - INGLÉS
    // =================================================

    {
        tipo: "reto",

        formato: "vf",

        icono: "🌎",

        pregunta:
            "“Good afternoon” significa “Buenas tardes”.",

        descripcion:
            "🌎 VERDADERO O FALSO",

        opciones: [

            {
                texto: "✅ VERDADERO",

                correcta: true,

                afinidad: {
                    idiomas: 3,
                    comunicacion: 2
                }
            },

            {
                texto: "❌ FALSO",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // =================================================
    // 09 - CREATIVIDAD
    // =================================================

    {
        tipo: "preferencia",

        formato: "visual",

        icono: "🎨",

        pregunta:
            "Te piden crear algo que sorprenda a otras personas. ¿Qué escogerías?",

        descripcion:
            "Elige el proyecto que más disfrutarías.",

        opciones: [

            {
                texto: "📱\nUna campaña\npara redes",

                afinidad: {
                    marketing: 4,
                    creatividad: 4,
                    comunicacion: 2
                }
            },

            {
                texto: "🎂\nUn pastel\nllamativo",

                afinidad: {
                    reposteria: 4,
                    creatividad: 4,
                    gastronomia: 2
                }
            },

            {
                texto: "🪑\nUn mueble\noriginal",

                afinidad: {
                    madera: 4,
                    creatividad: 3,
                    precision: 2
                }
            },

            {
                texto: "💻\nUna aplicación\ndigital",

                afinidad: {
                    programacion: 4,
                    tecnologia: 3,
                    logica: 2
                }
            }

        ]
    },


    // =================================================
    // 10 - PERSONAS Y SERVICIO
    // =================================================

    {
        tipo: "preferencia",

        icono: "🤝",

        pregunta:
            "¿Cuál de estas situaciones disfrutarías más?",

        descripcion:
            "Piensa en cuál se parece más a ti.",

        opciones: [

            {
                texto: "🍽️ Atender muy bien a un cliente",

                afinidad: {
                    servicio: 5,
                    cliente: 4,
                    comunicacion: 2
                }
            },

            {
                texto: "👥 Ayudar a resolver una situación entre compañeros",

                afinidad: {
                    rrhh: 5,
                    comunicacion: 4,
                    liderazgo: 2
                }
            },

            {
                texto: "🗣️ Explicar un producto y convencer a alguien",

                afinidad: {
                    ventas: 4,
                    marketing: 3,
                    comunicacion: 3
                }
            },

            {
                texto: "🌎 Ayudar a una persona usando otro idioma",

                afinidad: {
                    idiomas: 5,
                    comunicacion: 4,
                    cliente: 2
                }
            }

        ]
    },


    // =================================================
    // 11 - OFICINA Y ORGANIZACIÓN
    // =================================================

    {
        tipo: "preferencia",

        icono: "📋",

        pregunta:
            "En una empresa te dejan escoger una responsabilidad. ¿Cuál tomarías?",

        descripcion:
            "🎯 Escoge la que más te atraiga.",

        opciones: [

            {
                texto: "📅 Organizar agendas, reuniones y documentos",

                afinidad: {
                    organizacion: 5,
                    oficina: 4,
                    documentacion: 2
                }
            },

            {
                texto: "🧾 Revisar cuentas, pagos y números",

                afinidad: {
                    numeros: 5,
                    finanzas: 4,
                    detalle: 3
                }
            },

            {
                texto: "👥 Coordinar personas y actividades",

                afinidad: {
                    rrhh: 4,
                    liderazgo: 4,
                    organizacion: 3
                }
            },

            {
                texto: "📦 Revisar documentos relacionados con mercancías",

                afinidad: {
                    aduanas: 5,
                    documentacion: 4,
                    detalle: 3
                }
            }

        ]
    },


    // =================================================
    // 12 - GESTIÓN ADUANERA
    // =================================================

    {
        tipo: "preferencia",

        icono: "📦",

        pregunta:
            "Llega una mercancía acompañada de varios documentos. ¿Qué parte te interesaría más?",

        descripcion:
            "No necesitas conocer aduanas todavía.",

        opciones: [

            {
                texto: "📑 Revisar que todos los documentos estén en orden",

                afinidad: {
                    aduanas: 5,
                    documentacion: 5,
                    detalle: 3
                }
            },

            {
                texto: "🔢 Revisar valores y cantidades",

                afinidad: {
                    numeros: 4,
                    finanzas: 3,
                    detalle: 3
                }
            },

            {
                texto: "🤝 Comunicarme con las personas involucradas",

                afinidad: {
                    comunicacion: 4,
                    cliente: 3,
                    aduanas: 2
                }
            },

            {
                texto: "🗂️ Organizar todo el proceso",

                afinidad: {
                    organizacion: 5,
                    documentacion: 3,
                    oficina: 2
                }
            }

        ]
    },


    // =================================================
    // 13 - PROGRAMACIÓN / LÓGICA
    // =================================================

    {
        tipo: "reto",

        icono: "🧠",

        pregunta:
            "Observa la secuencia: 3, 6, 12, 24... ¿qué número sigue?",

        descripcion:
            "🧠 RETO DE LÓGICA • Tienes 20 segundos",

        opciones: [

            {
                texto: "48",

                correcta: true,

                afinidad: {
                    logica: 3,
                    programacion: 3,
                    tecnologia: 1
                }
            },

            {
                texto: "36",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "42",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "50",
                correcta: false,
                afinidad: {}
            }

        ]
    }

];


// =====================================================
// RUTA TÉCNICO GENERAL
// =====================================================

const preguntasTG = [

    // 14

    {
        tipo: "preferencia",

        icono: "🔧",

        pregunta:
            "Si entraras a un taller ahora mismo, ¿qué te gustaría aprender primero?",

        descripcion:
            "🎯 Revienta tu elección.",

        opciones: [

            {
                texto: "🚗 Revisar el funcionamiento de un vehículo",

                afinidad: {
                    mecanica: 5,
                    diagnostico: 3,
                    herramientas: 2
                }
            },

            {
                texto: "⚡ Entender una instalación eléctrica",

                afinidad: {
                    electricidad: 5,
                    herramientas: 2,
                    diagnostico: 2
                }
            },

            {
                texto: "❄️ Revisar sistemas de refrigeración",

                afinidad: {
                    refrigeracion: 5,
                    diagnostico: 3,
                    herramientas: 2
                }
            },

            {
                texto: "🖥️ Revisar y dar soporte a una computadora",

                afinidad: {
                    soporte: 5,
                    tecnologia: 3,
                    redes: 2
                }
            }

        ]
    },


    // 15

    {
        tipo: "preferencia",

        formato: "visual",

        icono: "🛠️",

        pregunta:
            "¿Cuál de estos trabajos te daría más orgullo terminar?",

        descripcion:
            "Imagina que tú lo realizaste.",

        opciones: [

            {
                texto: "🪑\nUn mueble\nbien acabado",

                afinidad: {
                    madera: 5,
                    precision: 3,
                    creatividad: 2
                }
            },

            {
                texto: "🔥\nUna estructura\nde metal",

                afinidad: {
                    metal: 5,
                    precision: 3,
                    herramientas: 2
                }
            },

            {
                texto: "🍽️\nUn plato\nbien presentado",

                afinidad: {
                    gastronomia: 5,
                    creatividad: 3,
                    precision: 2
                }
            },

            {
                texto: "🎂\nUn pastel\ndecorado",

                afinidad: {
                    reposteria: 5,
                    creatividad: 3,
                    precision: 2
                }
            }

        ]
    },


    // 16

    {
        tipo: "reto",

        icono: "⚡",

        pregunta:
            "Antes de revisar un equipo eléctrico, ¿qué es lo más importante?",

        descripcion:
            "⚡ RETO DE SEGURIDAD",

        opciones: [

            {
                texto: "🔌 Asegurarse de trabajar de forma segura y sin energía",

                correcta: true,

                afinidad: {
                    electricidad: 3,
                    precision: 2,
                    detalle: 1
                }
            },

            {
                texto: "⚡ Tocar inmediatamente los cables",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "🔧 Cambiar piezas sin revisar",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "🎲 Probar cosas al azar",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // 17

    {
        tipo: "preferencia",

        icono: "🌟",

        pregunta:
            "¿Qué día de trabajo suena más interesante para ti?",

        descripcion:
            "Última exploración antes de cerrar.",

        opciones: [

            {
                texto: "🚘 Diagnosticar y reparar vehículos",

                afinidad: {
                    mecanica: 5,
                    herramientas: 3,
                    diagnostico: 3
                }
            },

            {
                texto: "🔌 Reparar equipos electrónicos",

                afinidad: {
                    electronica: 5,
                    tecnologia: 3,
                    diagnostico: 2
                }
            },

            {
                texto: "☕ Atender personas en restaurante o cafetería",

                afinidad: {
                    servicio: 5,
                    cliente: 4,
                    comunicacion: 2
                }
            },

            {
                texto: "💻 Resolver problemas de computadoras y redes",

                afinidad: {
                    soporte: 5,
                    redes: 4,
                    tecnologia: 3
                }
            }

        ]
    }

];

// =====================================================
// RUTA TÉCNICO ESPECIALISTA
// =====================================================

const preguntasTE = [

    // 14

    {
        tipo: "preferencia",

        icono: "🚀",

        pregunta:
            "¿Cuál proyecto especializado te atrae más?",

        descripcion:
            "🎯 Escoge sin pensar en cuál sabes hacer.",

        opciones: [

            {
                texto: "💻 Crear una aplicación o sistema",

                afinidad: {
                    programacion: 5,
                    tecnologia: 4,
                    logica: 3
                }
            },

            {
                texto: "📣 Crear una campaña publicitaria",

                afinidad: {
                    marketing: 5,
                    creatividad: 4,
                    comunicacion: 2
                }
            },

            {
                texto: "🏦 Analizar información financiera",

                afinidad: {
                    finanzas: 5,
                    numeros: 4,
                    detalle: 2
                }
            },

            {
                texto: "🌎 Comunicarme fluidamente en inglés",

                afinidad: {
                    idiomas: 5,
                    comunicacion: 4,
                    cliente: 1
                }
            }

        ]
    },


    // 15

    {
        tipo: "reto",

        icono: "💻",

        pregunta:
            "Si x vale 5 y después hacemos x = x + 3, ¿cuánto vale x?",

        descripcion:
            "💻 MINI RETO DE PROGRAMACIÓN",

        opciones: [

            {
                texto: "8",

                correcta: true,

                afinidad: {
                    programacion: 3,
                    logica: 3,
                    tecnologia: 1
                }
            },

            {
                texto: "3",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "5",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "15",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // 16

    {
        tipo: "preferencia",

        icono: "📣",

        pregunta:
            "Una empresa lanzará un nuevo producto. ¿Qué te gustaría hacer?",

        descripcion:
            "🎯 Elige tu papel en el proyecto.",

        opciones: [

            {
                texto: "🎨 Diseñar cómo se verá la publicidad",

                afinidad: {
                    marketing: 5,
                    creatividad: 4
                }
            },

            {
                texto: "📊 Analizar precios, costos y resultados",

                afinidad: {
                    finanzas: 5,
                    numeros: 4,
                    detalle: 2
                }
            },

            {
                texto: "💻 Crear la plataforma digital",

                afinidad: {
                    programacion: 5,
                    tecnologia: 4
                }
            },

            {
                texto: "🌎 Presentarlo a personas que hablan inglés",

                afinidad: {
                    idiomas: 5,
                    comunicacion: 4,
                    cliente: 2
                }
            }

        ]
    },


    // 17

    {
        tipo: "preferencia",

        formato: "duelo",

        icono: "⚔️",

        pregunta:
            "¿Qué tipo de reto te atrae más?",

        descripcion:
            "⚔️ DUELO ESPECIALISTA",

        opciones: [

            {
                texto:
                    "🧠 Resolver problemas usando lógica, datos y tecnología",

                afinidad: {
                    programacion: 4,
                    logica: 4,
                    finanzas: 2,
                    tecnologia: 2
                }
            },

            {
                texto:
                    "🎤 Comunicar ideas, persuadir y conectar con personas",

                afinidad: {
                    marketing: 4,
                    idiomas: 3,
                    comunicacion: 5,
                    ventas: 2
                }
            }

        ]
    }

];

// =====================================================
// RUTA BACHILLERATO TÉCNICO
// =====================================================

const preguntasBT = [

    // 14

    {
        tipo: "preferencia",

        icono: "🎓",

        pregunta:
            "En una empresa, ¿qué responsabilidad te atrae más?",

        descripcion:
            "🎯 Revienta la opción que más vaya contigo.",

        opciones: [

            {
                texto: "📋 Planificar tareas y organizar procesos",

                afinidad: {
                    organizacion: 5,
                    oficina: 4,
                    liderazgo: 2
                }
            },

            {
                texto: "🧾 Trabajar con cuentas y registros",

                afinidad: {
                    numeros: 5,
                    finanzas: 5,
                    detalle: 3
                }
            },

            {
                texto: "👥 Coordinar un equipo de trabajo",

                afinidad: {
                    liderazgo: 4,
                    rrhh: 3,
                    organizacion: 3
                }
            },

            {
                texto: "📑 Mantener documentos bien organizados",

                afinidad: {
                    documentacion: 5,
                    oficina: 4,
                    detalle: 3
                }
            }

        ]
    },


    // 15

    {
        tipo: "reto",

        icono: "🧮",

        pregunta:
            "Un negocio recibió C$900 y gastó C$600. ¿Cuánto quedó?",

        descripcion:
            "🧮 RETO CONTABLE",

        opciones: [

            {
                texto: "C$300",

                correcta: true,

                afinidad: {
                    numeros: 3,
                    finanzas: 3,
                    detalle: 1
                }
            },

            {
                texto: "C$200",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "C$400",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "C$1,500",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // 16

    {
        tipo: "preferencia",

        icono: "📆",

        pregunta:
            "Tienes varias tareas pendientes. ¿Cuál te gustaría asumir?",

        descripcion:
            "Escoge la que más te interese aprender.",

        opciones: [

            {
                texto: "📅 Preparar la agenda y organizar una reunión",

                afinidad: {
                    oficina: 5,
                    organizacion: 5,
                    documentacion: 2
                }
            },

            {
                texto: "💵 Revisar movimientos y comprobantes",

                afinidad: {
                    finanzas: 5,
                    numeros: 4,
                    detalle: 4
                }
            },

            {
                texto: "👥 Distribuir responsabilidades del equipo",

                afinidad: {
                    liderazgo: 4,
                    organizacion: 4,
                    rrhh: 2
                }
            },

            {
                texto: "📂 Ordenar y clasificar información",

                afinidad: {
                    documentacion: 5,
                    detalle: 4,
                    oficina: 3
                }
            }

        ]
    },


    // 17

    {
        tipo: "preferencia",

        formato: "duelo",

        icono: "⚔️",

        pregunta:
            "¿Qué te resulta más atractivo?",

        descripcion:
            "⚔️ DUELO DE GESTIÓN",

        opciones: [

            {
                texto:
                    "📋 Organizar personas, actividades y recursos",

                afinidad: {
                    organizacion: 5,
                    liderazgo: 3,
                    oficina: 3
                }
            },

            {
                texto:
                    "🧾 Trabajar con números, cuentas y detalles",

                afinidad: {
                    numeros: 5,
                    finanzas: 5,
                    detalle: 4
                }
            }

        ]
    }

];

// =====================================================
// RUTA MIXTA
// =====================================================

const preguntasMixto = [

    // 14

    {
        tipo: "preferencia",

        icono: "🌈",

        pregunta:
            "Si te regalaran un día para probar una profesión, ¿qué harías?",

        descripcion:
            "No hay una respuesta mejor que otra.",

        opciones: [

            {
                texto: "💻 Crear algo con tecnología",

                afinidad: {
                    tecnologia: 4,
                    programacion: 3,
                    soporte: 2
                }
            },

            {
                texto: "🔧 Trabajar en un taller",

                afinidad: {
                    herramientas: 4,
                    mecanica: 3,
                    diagnostico: 2
                }
            },

            {
                texto: "🍰 Crear algo en cocina o pastelería",

                afinidad: {
                    gastronomia: 4,
                    reposteria: 4,
                    creatividad: 2
                }
            },

            {
                texto: "📊 Participar en un proyecto empresarial",

                afinidad: {
                    organizacion: 4,
                    finanzas: 2,
                    marketing: 2,
                    oficina: 2
                }
            }

        ]
    },


    // 15

    {
        tipo: "preferencia",

        formato: "visual",

        icono: "👀",

        pregunta:
            "¿Cuál espacio te produce más curiosidad?",

        descripcion:
            "Más adelante pondremos aquí las fotos reales del centro.",

        opciones: [

            {
                texto: "⚡\nTaller de\nelectricidad",

                afinidad: {
                    electricidad: 5,
                    herramientas: 2
                }
            },

            {
                texto: "🪵\nTaller de\nmadera",

                afinidad: {
                    madera: 5,
                    creatividad: 2
                }
            },

            {
                texto: "☕\nRestaurante y\ncafetería",

                afinidad: {
                    servicio: 5,
                    cliente: 3
                }
            },

            {
                texto: "📣\nÁrea de\nmarketing",

                afinidad: {
                    marketing: 5,
                    creatividad: 3
                }
            }

        ]
    },


    // 16

    {
        tipo: "reto",

        icono: "👨‍🍳",

        pregunta:
            "Una receta usa 4 huevos para 8 personas. Para 24 personas, ¿cuántos huevos necesitas?",

        descripcion:
            "👨‍🍳 RETO DE COCINA",

        opciones: [

            {
                texto: "12",

                correcta: true,

                afinidad: {
                    gastronomia: 2,
                    reposteria: 2,
                    numeros: 2,
                    precision: 1
                }
            },

            {
                texto: "8",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "16",
                correcta: false,
                afinidad: {}
            },

            {
                texto: "20",
                correcta: false,
                afinidad: {}
            }

        ]
    },


    // 17

    {
        tipo: "preferencia",

        formato: "duelo",

        icono: "⚔️",

        pregunta:
            "¿Qué tipo de satisfacción te atrae más?",

        descripcion:
            "⚔️ DUELO FINAL DE EXPLORACIÓN",

        opciones: [

            {
                texto:
                    "🔧 Ver algo físico funcionando gracias a mi trabajo",

                afinidad: {
                    herramientas: 4,
                    mecanica: 2,
                    electricidad: 2,
                    diagnostico: 2
                }
            },

            {
                texto:
                    "💡 Ver una idea o proyecto crecer gracias a mí",

                afinidad: {
                    creatividad: 4,
                    marketing: 2,
                    programacion: 2,
                    organizacion: 2
                }
            }

        ]
    }

];

// =====================================================
// CIERRE COMÚN
// =====================================================

const preguntasCierre = [

    {
        tipo: "preferencia",

        icono: "🏁",

        pregunta:
            "Pensando en todo lo que acabas de explorar, ¿qué sensación buscas más en tu futuro?",

        descripcion:
            "🎯 ÚLTIMA MISIÓN • Sigue tu instinto.",

        opciones: [

            {
                texto: "🧠 Descubrir problemas y encontrar soluciones",

                afinidad: {
                    diagnostico: 4,
                    logica: 3,
                    tecnologia: 1,
                    detalle: 1
                }
            },

            {
                texto: "🎨 Crear cosas que otras personas puedan ver y disfrutar",

                afinidad: {
                    creatividad: 5,
                    reposteria: 1,
                    marketing: 1,
                    madera: 1
                }
            },

            {
                texto: "🤝 Trabajar con personas y ayudarlas",

                afinidad: {
                    comunicacion: 5,
                    cliente: 3,
                    servicio: 2,
                    rrhh: 2
                }
            },

            {
                texto: "📋 Organizar información, números y proyectos",

                afinidad: {
                    organizacion: 5,
                    detalle: 3,
                    numeros: 2,
                    oficina: 2
                }
            }

        ]
    }

];
// =====================================================
// PORTADA
// =====================================================

botonComenzar.addEventListener(
    "click",
    function () {

        pantallaInicio.classList.add(
            "oculto"
        );

        pantallaDatos.classList.remove(
            "oculto"
        );

    }
);


// =====================================================
// REGRESAR
// =====================================================

botonRegresar.addEventListener(
    "click",
    function () {

        pantallaDatos.classList.add(
            "oculto"
        );

        pantallaInicio.classList.remove(
            "oculto"
        );

    }
);


// =====================================================
// ELEGIR NIVEL
// =====================================================

document
    .querySelectorAll(".opcion-nivel")
    .forEach(function (opcion) {

        opcion.addEventListener(
            "click",
            function () {

                nivelEstudiante =
                    this.dataset.nivel;

                mostrarMapaMisiones();

            }
        );

    }
);

    // =====================================================
// MOSTRAR MAPA DE MISIONES
// =====================================================

function mostrarMapaMisiones() {

    pantallaDatos.classList.add(
        "oculto"
    );


    pantallaMapa.classList.remove(
        "oculto"
    );


    if (
        nivelEstudiante
        === "bachiller"
    ) {

        nivelMapa.textContent =
            "Bachiller";

    }

    else {

        nivelMapa.textContent =
            "Noveno grado aprobado";

    }

}
// =====================================================
// INICIAR JUEGO
// =====================================================

function iniciarJuego() {

    preguntaActual = 0;

    afinidades = {};

    xp = 0;

    racha = 0;

    historialEstados = [];

    respuestasUsuario = [];

    rutaElegida = "";

    preguntasActivas = [
        crearPreguntaRuta()
    ];

    actualizarHUD();

    pantallaDatos.classList.add(
        "oculto"
    );

    pantallaResultado.classList.add(
        "oculto"
    );

    pantallaQuiz.classList.remove(
        "oculto"
    );

    textoNivel.textContent =
        nivelEstudiante === "bachiller"
            ? "Bachiller"
            : "Noveno aprobado";

    mostrarPregunta();

}

// =====================================================
// MOSTRAR PREGUNTA
// =====================================================
// =====================================================
// MOSTRAR PREGUNTA
// =====================================================

function mostrarPregunta() {

    detenerTemporizador();

    respondida = false;

    if (
    preguntaActual === 0
) {

    btnAnterior.classList.add(
        "oculto"
    );

}

else {

    btnAnterior.classList.remove(
        "oculto"
    );

}

    ordenSeleccionado = [];


    const pregunta =
    preguntasActivas[preguntaActual];


    const numero =
        preguntaActual + 1;

    const totalMisiones = 18;


numeroPregunta.textContent =
    "Misión " +
    (preguntaActual + 1) +
    " de " +
    totalMisiones;

    numeroFondo.textContent =
        String(numero).padStart(
            2,
            "0"
        );


   const progreso =
    ((preguntaActual + 1)
    / 18)
    * 100;


    barraProgreso.style.width =
        progreso + "%";


    iconoPregunta.textContent =
        pregunta.icono;


    preguntaTexto.textContent =
        pregunta.pregunta;


    preguntaDescripcion.textContent =
        pregunta.descripcion;


    // =============================================
    // ETIQUETA SUPERIOR
    // =============================================

    if (pregunta.tipo === "reto") {

        tipoPregunta.textContent =
            "⚡ RETO RELÁMPAGO";

        iniciarTemporizador();

    }

    else if (
        pregunta.tipo === "ordenar"
    ) {

        tipoPregunta.textContent =
            "🧩 RETO DE SECUENCIA";

        timerBox.classList.add(
            "oculto"
        );

    }

    else if (
        pregunta.formato === "duelo"
    ) {

        tipoPregunta.textContent =
            "⚔️ ELIGE TU CAMINO";

        timerBox.classList.add(
            "oculto"
        );

    }

    else {

        tipoPregunta.textContent =
            "🎯 MISIÓN DE AFINIDAD";

        timerBox.classList.add(
            "oculto"
        );

    }


    // =============================================
    // LIMPIAR
    // =============================================

    opcionesQuiz.innerHTML = "";

    opcionesQuiz.className =
        "opciones-quiz";


    feedbackQuiz.innerHTML = "";

    feedbackQuiz.classList.add(
        "oculto"
    );


    btnSiguiente.classList.add(
        "oculto"
    );

  // =============================================
// FORMATO BURBUJAS
// =============================================

const usarBurbujas =
    pregunta.formato === "burbujas"
    ||
    (
        pregunta.tipo === "preferencia"
        &&
        pregunta.formato !== "duelo"
        &&
        pregunta.formato !== "visual"
    );


if (usarBurbujas) {

    mostrarPreguntaBurbujas(
        pregunta
    );

    mostrarRespuestaAnterior();

    return;

}

    // =============================================
    // PREGUNTA DE ORDEN
    // =============================================

   if (
    pregunta.tipo === "ordenar"
) {

    mostrarPreguntaOrdenar(
        pregunta
    );


    mostrarRespuestaAnterior();


    return;

}


    // =============================================
    // FORMATO VISUAL
    // =============================================

    if (pregunta.formato) {

        opcionesQuiz.classList.add(
            "formato-" +
            pregunta.formato
        );

    }


    const letras =
        ["A", "B", "C", "D"];


    pregunta.opciones.forEach(
        function (opcion, indice) {

            const boton =
                document.createElement(
                    "button"
                );


            boton.className =
                "opcion-quiz";


            boton.innerHTML = `

                <span class="letra-opcion">
                    ${letras[indice]}
                </span>

                <span>
                    ${opcion.texto}
                </span>

            `;


            boton.addEventListener(
                "click",
                function () {

                    responder(
                        opcion,
                        boton,
                        indice
                    );

                }
            );


            opcionesQuiz.appendChild(
                boton
            );

        }
    );
   mostrarRespuestaAnterior();
}


// =====================================================
// MOSTRAR PREGUNTA EN BURBUJAS
// =====================================================

function mostrarPreguntaBurbujas(
    pregunta
) {

    opcionesQuiz.className =
        "opciones-quiz formato-burbujas";


    const tablero =
        document.createElement("div");

    tablero.className =
        "tablero-burbujas";


    const posiciones = [
        "bubble-pos-1",
        "bubble-pos-2",
        "bubble-pos-3",
        "bubble-pos-4"
    ];


    pregunta.opciones.forEach(
        function (opcion, indice) {

            const boton =
                document.createElement("button");


            boton.className =
                "opcion-quiz bubble-option " +
                posiciones[indice];


           const textoLimpio =
    opcion.texto.trim();


const partes =
    textoLimpio.split(/\s+/);


const icono =
    partes.shift();


const texto =
    partes.join(" ")
        .replace(
            /\n/g,
            "<br>"
        );


boton.innerHTML = `

    <span class="bubble-icon">
        ${icono}
    </span>

    <span class="bubble-label">
        ${texto}
    </span>

`;


            boton.addEventListener(
                "click",
                function () {

                    if (respondida) {

                        return;

                    }

                    boton.classList.add(
                        "reventada"
                    );

                    setTimeout(
                        function () {

                            responder(
                                opcion,
                                boton,
                                indice
                            );

                        },
                        180
                    );

                }
            );


            tablero.appendChild(
                boton
            );

        }
    );


    opcionesQuiz.appendChild(
        tablero
    );


    const mensaje =
        document.createElement("p");

    mensaje.className =
        "mensaje-burbujas";

    mensaje.textContent =
        "🎯 Toca una burbuja para reventarla";

    opcionesQuiz.appendChild(
        mensaje
    );

}

// =====================================================
// MOSTRAR RESPUESTA QUE HABÍA ELEGIDO
// =====================================================

function mostrarRespuestaAnterior() {

    const respuestaAnterior =
        respuestasUsuario[
            preguntaActual
        ];


    if (!respuestaAnterior) {

        return;

    }


    // Pregunta normal

    if (
        respuestaAnterior.tipo
        === "opcion"
    ) {

        const botones =
            opcionesQuiz.querySelectorAll(
                ".opcion-quiz"
            );


        const boton =
            botones[
                respuestaAnterior.indice
            ];


        if (boton) {

            boton.classList.add(
                "respuesta-anterior"
            );

        }


        feedbackQuiz.innerHTML = `

            ✏️ <strong>
                Estás editando esta pregunta.
            </strong>

            La opción amarilla fue tu respuesta anterior.
            Puedes elegirla nuevamente o cambiarla.

        `;


        feedbackQuiz.classList.remove(
            "oculto"
        );

    }


    // Pregunta ordenar

    if (
        respuestaAnterior.tipo
        === "orden"
    ) {

        feedbackQuiz.innerHTML = `

            ✏️ <strong>
                Estás editando este reto.
            </strong>

            Vuelve a seleccionar los pasos
            en el orden que quieras.

        `;


        feedbackQuiz.classList.remove(
            "oculto"
        );

    }

}

// =====================================================
// MOSTRAR RETO DE ORDEN
// =====================================================

function mostrarPreguntaOrdenar(
    pregunta
) {

    const zona =
        document.createElement(
            "div"
        );


    zona.className =
        "zona-orden";


    zona.innerHTML = `

        <p class="instruccion-orden">

            👆 Toca las opciones en el orden
            que consideres correcto.

        </p>

        <div
            id="botonesOrden"
            class="botones-orden">
        </div>

        <div
            id="secuenciaElegida"
            class="secuencia-elegida">

            <span class="secuencia-vacia">
                Tu secuencia aparecerá aquí...
            </span>

        </div>

    `;


    opcionesQuiz.appendChild(
        zona
    );


    const botonesOrden =
        document.getElementById(
            "botonesOrden"
        );


    pregunta.opciones.forEach(
        function (
            opcion,
            indice
        ) {

            const boton =
                document.createElement(
                    "button"
                );


            boton.className =
                "paso-orden";


            boton.dataset.id =
                opcion.id;


            boton.innerHTML = `

                <span
                    class="numero-paso-elegido">

                    ?

                </span>

                <span>
                    ${opcion.texto}
                </span>

            `;


            boton.addEventListener(
                "click",
                function () {

                    seleccionarPaso(
                        opcion,
                        boton,
                        pregunta
                    );

                }
            );


            botonesOrden.appendChild(
                boton
            );

        }
    );

}



// =====================================================
// SELECCIONAR PASO
// =====================================================

function seleccionarPaso(
    opcion,
    boton,
    pregunta
) {

    if (
        respondida
        ||
        boton.classList.contains(
            "elegido"
        )
    ) {

        return;

    }


    ordenSeleccionado.push(
        opcion
    );


    boton.classList.add(
        "elegido"
    );


    const numero =
        ordenSeleccionado.length;


    boton.querySelector(
        ".numero-paso-elegido"
    ).textContent =
        numero;


    actualizarSecuenciaOrden();


    if (
        ordenSeleccionado.length
        ===
        pregunta.opciones.length
    ) {

        comprobarOrden(
            pregunta
        );

    }

}



// =====================================================
// ACTUALIZAR SECUENCIA VISUAL
// =====================================================

function actualizarSecuenciaOrden() {

    const contenedor =
        document.getElementById(
            "secuenciaElegida"
        );


    contenedor.innerHTML = "";


    ordenSeleccionado.forEach(
        function (
            opcion,
            indice
        ) {

            const chip =
                document.createElement(
                    "span"
                );


            chip.className =
                "chip-orden";


            chip.textContent =
                (indice + 1)
                +
                ". "
                +
                opcion.nombreCorto;


            contenedor.appendChild(
                chip
            );

        }
    );

}



// =====================================================
// COMPROBAR ORDEN
// =====================================================

function comprobarOrden(
    pregunta
) {

    respondida = true;

    guardarEstadoAntesDeResponder();

    const idsElegidos =
        ordenSeleccionado.map(
            function (opcion) {

                return opcion.id;

            }
        );

       respuestasUsuario[
    preguntaActual
] = {

    tipo: "orden",

    orden: [
        ...idsElegidos
    ]

};
    const correcto =
        idsElegidos.every(
            function (
                id,
                indice
            ) {

                return (
                    id
                    ===
                    pregunta.ordenCorrecto[
                        indice
                    ]
                );

            }
        );


    let xpGanado = 0;


    if (correcto) {

        sumarAfinidades(
            pregunta.afinidadCorrecta
        );


        racha++;

        xpGanado = 30;


        feedbackQuiz.innerHTML = `

            ✅ <strong>
                ¡Secuencia correcta!
            </strong>

            Organizaste el proceso de forma lógica.

        `;

    }

    else {

        racha = 0;

        xpGanado = 5;


        const ordenTexto =
            pregunta.ordenCorrecto
                .map(
                    function (
                        id,
                        indice
                    ) {

                        const opcion =
                            pregunta.opciones
                                .find(
                                    function (item) {

                                        return (
                                            item.id
                                            === id
                                        );

                                    }
                                );


                        return (
                            (indice + 1)
                            +
                            ". "
                            +
                            opcion.nombreCorto
                        );

                    }
                )
                .join(" → ");


        feedbackQuiz.innerHTML = `

            💡 <strong>
                Casi.
            </strong>

            Una secuencia posible era:

            <br><br>

            ${ordenTexto}

        `;

    }


    xp += xpGanado;


    mostrarXP(
        xpGanado
    );


    actualizarHUD();


    feedbackQuiz.classList.remove(
        "oculto"
    );


    btnSiguiente.classList.remove(
        "oculto"
    );

}

// =====================================================
// GUARDAR ESTADO ANTES DE RESPONDER
// =====================================================

function guardarEstadoAntesDeResponder() {

    historialEstados[preguntaActual] = {

        afinidades: {
            ...afinidades
        },

        xp: xp,

        racha: racha

    };

}
// =====================================================
// RESPONDER
// =====================================================

function responder(
    opcion,
    botonSeleccionado,
    indiceSeleccionado
) {

    if (respondida) {

        return;

    }
        // Guardamos cómo estaba el juego
    // antes de esta respuesta

    guardarEstadoAntesDeResponder();


    // Guardamos qué seleccionó

    respuestasUsuario[
        preguntaActual
    ] = {

        tipo: "opcion",

        indice:
            indiceSeleccionado,

        texto:
            opcion.texto

    };


    // Quitamos la marca de respuesta anterior

    document
        .querySelectorAll(
            ".respuesta-anterior"
        )
        .forEach(
            function (elemento) {

                elemento.classList.remove(
                    "respuesta-anterior"
                );

            }
        );

    respondida = true;


    detenerTemporizador();


    const pregunta =
        preguntasActivas[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".opcion-quiz"
        );


    botones.forEach(
        function (boton) {

            boton.disabled = true;

        }
    );
    if (
        pregunta.esRuta
        &&
        opcion.ruta
    ) {

        rutaElegida =
            opcion.ruta;

        construirCuestionarioRuta();

    }

    let xpGanado = 0;


    // =============================================
    // RETOS
    // =============================================

    if (pregunta.tipo === "reto") {

        if (opcion.correcta) {

            botonSeleccionado.classList.add(
                "correcta"
            );


            sumarAfinidades(
                opcion.afinidad
            );


            racha++;


            xpGanado =
                25;


            if (tiempo >= 10) {

                xpGanado += 5;

            }


            feedbackQuiz.innerHTML =
                `✅ <strong>¡Excelente!</strong>
                Superaste el reto.
                Tu desempeño suma una pequeña señal
                adicional a tu perfil.`;

        }

        else {

            botonSeleccionado.classList.add(
                "incorrecta"
            );


            racha = 0;

            xpGanado = 5;


            pregunta.opciones.forEach(
                function (respuesta, indice) {

                    if (
                        respuesta.correcta
                    ) {

                        botones[indice]
                            .classList
                            .add(
                                "correcta"
                            );

                    }

                }
            );


            feedbackQuiz.innerHTML =
                `💡 <strong>Buen intento.</strong>
                Los retos no deciden tu carrera:
                solamente aportan una pequeña señal
                adicional al resultado.`;

        }

    }


    // =============================================
    // PREFERENCIAS
    // =============================================

    else {

        botonSeleccionado.classList.add(
            "seleccionada"
        );


        sumarAfinidades(
            opcion.afinidad
        );


        xpGanado = 10;


        feedbackQuiz.innerHTML =
            `✨ <strong>Elección registrada.</strong>
            Estamos construyendo tu perfil
            de intereses.`;

    }


    xp += xpGanado;


    mostrarXP(
        xpGanado
    );


    actualizarHUD();


    feedbackQuiz.classList.remove(
        "oculto"
    );


    btnSiguiente.classList.remove(
        "oculto"
    );

}


// =====================================================
// SUMAR AFINIDADES
// =====================================================

function sumarAfinidades(
    nuevasAfinidades
) {

    for (
        const clave
        in nuevasAfinidades
    ) {

        if (!afinidades[clave]) {

            afinidades[clave] = 0;

        }


        afinidades[clave] +=
            nuevasAfinidades[clave];

    }

}


// =====================================================
// SIGUIENTE MISIÓN
// =====================================================

btnSiguiente.addEventListener(
    "click",
    function () {

        preguntaActual++;


        if (
          preguntaActual < preguntasActivas.length
        ) {

            mostrarPregunta();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        else {

            mostrarResultados();

        }

    }
);


// =====================================================
// TEMPORIZADOR
// =====================================================

function iniciarTemporizador() {

    tiempo = 20;


    timerValor.textContent =
        tiempo;


    timerBox.classList.remove(
        "oculto",
        "urgente"
    );


    temporizador =
        setInterval(
            function () {

                tiempo--;


                timerValor.textContent =
                    tiempo;


                if (tiempo <= 5) {

                    timerBox.classList.add(
                        "urgente"
                    );

                }


                if (tiempo <= 0) {

                    detenerTemporizador();


                    timerValor.textContent =
                        "0";


                    timerBox.classList.remove(
                        "urgente"
                    );


                    feedbackQuiz.innerHTML =
                        `⏱️ El tiempo terminó,
                        pero puedes responder igualmente.
                        Solo perdiste el bonus de rapidez.`;

                    feedbackQuiz.classList.remove(
                        "oculto"
                    );

                }

            },
            1000
        );

}


// =====================================================
// DETENER TIMER
// =====================================================

function detenerTemporizador() {

    if (temporizador) {

        clearInterval(
            temporizador
        );

        temporizador = null;

    }

}


// =====================================================
// XP
// =====================================================

function mostrarXP(
    cantidad
) {

    xpFlotante.textContent =
        "+" +
        cantidad +
        " XP";


    xpFlotante.classList.remove(
        "mostrar"
    );


    void xpFlotante.offsetWidth;


    xpFlotante.classList.add(
        "mostrar"
    );

}


// =====================================================
// HUD
// =====================================================

function actualizarHUD() {

    xpValor.textContent =
        xp;


    rachaValor.textContent =
        racha;

}


// =====================================================
// CALCULAR PUNTUACIÓN DE UNA CARRERA
// =====================================================

function calcularPuntuacion(
    carrera
) {

    let total = 0;


    for (
        const atributo
        in carrera.perfil
    ) {

        const respuesta =
            afinidades[atributo]
            || 0;


        total +=
            respuesta
            *
            carrera.perfil[atributo];

    }


    return total;

}


// =====================================================
// OBTENER CARRERAS DISPONIBLES
// =====================================================

function obtenerResultados() {

    let disponibles =
        carreras.filter(
            function (carrera) {

                if (
                    nivelEstudiante
                    === "bachiller"
                ) {

                    return true;

                }


                return (
                    carrera
                        .requisitoAcademico
                    === "noveno"
                );

            }
        );


    let resultados =
        disponibles.map(
            function (carrera) {

                return {

                    ...carrera,

                    puntos:
                        calcularPuntuacion(
                            carrera
                        )

                };

            }
        );


    resultados.sort(
        function (a, b) {

            return (
                b.puntos
                -
                a.puntos
            );

        }
    );


    // Evitamos que Administración o Contabilidad
    // aparezcan dos veces en el Top 3.

    const seleccionadas = [];

    const gruposUsados =
        new Set();


    for (
        const carrera
        of resultados
    ) {

        if (
            carrera.grupo
            &&
            gruposUsados.has(
                carrera.grupo
            )
        ) {

            continue;

        }


        seleccionadas.push(
            carrera
        );


        if (carrera.grupo) {

            gruposUsados.add(
                carrera.grupo
            );

        }


        if (
            seleccionadas.length
            === 3
        ) {

            break;

        }

    }


    return seleccionadas;

}


// =====================================================
// MOSTRAR RESULTADOS
// =====================================================

function mostrarResultados() {

    detenerTemporizador();


    pantallaQuiz.classList.add(
        "oculto"
    );


    pantallaResultado.classList.remove(
        "oculto"
    );


    xpFinal.textContent =
        xp;


   misionesFinal.textContent =
    preguntasActivas.length;


    const mejores =
        obtenerResultados();


    topCarreras.innerHTML =
        "";


    const mayorPuntuacion =
        mejores.length > 0
            ? mejores[0].puntos
            : 1;


    mejores.forEach(
        function (
            carrera,
            indice
        ) {

            const porcentajeRelativo =
                mayorPuntuacion > 0
                    ? Math.max(
                        18,
                        Math.round(
                            (
                                carrera.puntos
                                /
                                mayorPuntuacion
                            )
                            * 100
                        )
                    )
                    : 20;


            const tarjeta =
                document.createElement(
                    "article"
                );


            tarjeta.className =
                "carrera-resultado";


            tarjeta.innerHTML = `

                <div class="numero-ranking">

                    ${carrera.icono}

                    <small>
                        #${indice + 1}
                    </small>

                </div>


                <div>

                    <strong class="nombre-carrera">

                        ${carrera.nombre}

                    </strong>


                    <p class="datos-carrera">

                        ${carrera.descripcion}

                    </p>


                    <span class="requisito-carrera">

                        🎓 ${carrera.requisito}

                    </span>


                    <div class="barra-afinidad">

                        <div style="
                            width:
                            ${porcentajeRelativo}%;
                        ">
                        </div>

                    </div>

                </div>

            `;


            topCarreras.appendChild(
                tarjeta
            );

        }
    );


    lanzarConfeti();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// =====================================================
// CONFETI
// =====================================================

function lanzarConfeti() {

    celebracion.innerHTML =
        "";


    const simbolos = [
        "🎉",
        "✨",
        "⭐",
        "🎊",
        "💫"
    ];


    for (
        let i = 0;
        i < 28;
        i++
    ) {

        const confeti =
            document.createElement(
                "span"
            );


        confeti.className =
            "confeti";


        confeti.textContent =
            simbolos[
                Math.floor(
                    Math.random()
                    *
                    simbolos.length
                )
            ];


        confeti.style.left =
            Math.random()
            * 100
            + "%";


        confeti.style.animationDelay =
            Math.random()
            * 1.5
            + "s";


        celebracion.appendChild(
            confeti
        );

    }


    setTimeout(
        function () {

            celebracion.innerHTML =
                "";

        },
        4500
    );

}


// =====================================================
// REINICIAR
// =====================================================

botonReiniciar.addEventListener(
    "click",
    function () {

        detenerTemporizador();


        pantallaResultado.classList.add(
            "oculto"
        );


        pantallaInicio.classList.remove(
            "oculto"
        );


        preguntaActual = 0;

        afinidades = {};

        xp = 0;

        racha = 0;

        nivelEstudiante = "";


        actualizarHUD();

    }
);


// =====================================================
// AÑO FOOTER
// =====================================================

const anioFooter =
    document.getElementById(
        "anioFooter"
    );


if (anioFooter) {

    anioFooter.textContent =
        new Date().getFullYear();

}
// =====================================================
// BOTÓN COMENZAR RECORRIDO
// =====================================================

btnIniciarMisiones.addEventListener(
    "click",
    function () {

        pantallaMapa.classList.add(
            "oculto"
        );

        iniciarJuego();

    }
);


// =====================================================
// BOTÓN CAMBIAR NIVEL
// =====================================================

btnCambiarNivel.addEventListener(
    "click",
    function () {

        pantallaMapa.classList.add(
            "oculto"
        );

        pantallaDatos.classList.remove(
            "oculto"
        );

    }
);
// =====================================================
// VOLVER A LA PREGUNTA ANTERIOR
// =====================================================

btnAnterior.addEventListener(
    "click",
    function () {

        if (
            preguntaActual <= 0
        ) {

            return;

        }


        detenerTemporizador();


        const preguntaAnterior =
            preguntaActual - 1;


        const estadoAnterior =
            historialEstados[
                preguntaAnterior
            ];


        // Restauramos las puntuaciones
        // que había ANTES de esa pregunta

        if (estadoAnterior) {

            afinidades = {

                ...estadoAnterior
                    .afinidades

            };


            xp =
                estadoAnterior.xp;


            racha =
                estadoAnterior.racha;


            actualizarHUD();

        }


        // Nos movemos hacia atrás

        preguntaActual =
            preguntaAnterior;


        // Eliminamos estados posteriores
        // porque ahora el estudiante
        // puede cambiar su camino

        historialEstados =
            historialEstados.slice(
                0,
                preguntaAnterior
            );


        // Conservamos únicamente
        // la respuesta anterior
        // para enseñársela visualmente

        respuestasUsuario =
            respuestasUsuario.slice(
                0,
                preguntaAnterior + 1
            );


        mostrarPregunta();


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);
// =====================================================
// CONSTRUIR PREGUNTAS SEGÚN RUTA
// =====================================================

function construirCuestionarioRuta() {

    let bloqueRuta = [];


    if (rutaElegida === "tg") {

        bloqueRuta = preguntasTG;

    }

    else if (rutaElegida === "te") {

        bloqueRuta = preguntasTE;

    }

    else if (rutaElegida === "bt") {

        bloqueRuta = preguntasBT;

    }

    else {

        bloqueRuta = preguntasMixto;

    }


    preguntasActivas = [

        crearPreguntaRuta(),

        ...preguntasComunes,

        ...bloqueRuta,

        ...preguntasCierre

    ];

}
