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
// PREGUNTAS / MISIONES
// =====================================================

const preguntas = [

    {
        tipo: "preferencia",

        icono: "🛣️",

        pregunta:
            "¿Qué tipo de camino de formación te atrae más?",

        descripcion:
            "No hay una respuesta mejor que otra.",

        opciones: [

            {
                texto:
                    "🎓 Una formación de varios años con Bachillerato Técnico",

                afinidad: {
                    ruta_larga: 4
                }
            },

            {
                texto:
                    "⚡ Una carrera técnica más directa y práctica",

                afinidad: {
                    ruta_corta: 4
                }
            },

            {
                texto:
                    "🚀 Especializarme después de ser bachiller",

                afinidad: {
                    especialista: 4
                }
            },

            {
                texto:
                    "🤔 Todavía no estoy seguro",

                afinidad: {}
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "✨",

        pregunta:
            "Si te dieran una tarde completa para crear algo, ¿qué escogerías?",

        descripcion:
            "Elige aquello que realmente te daría curiosidad.",

        opciones: [

            {
                texto:
                    "💻 Crear una app, programa o solución digital",

                afinidad: {
                    tecnologia: 3,
                    programacion: 4,
                    logica: 2
                }
            },

            {
                texto:
                    "🛠️ Construir, reparar o modificar algo físico",

                afinidad: {
                    herramientas: 4,
                    diagnostico: 2
                }
            },

            {
                texto:
                    "🎨 Crear algo visual, promocional o creativo",

                afinidad: {
                    creatividad: 4,
                    marketing: 2
                }
            },

            {
                texto:
                    "🍰 Preparar algo que otras personas puedan disfrutar",

                afinidad: {
                    gastronomia: 3,
                    reposteria: 2,
                    servicio: 2
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🧠",

        pregunta:
            "Cuando algo no funciona, ¿qué parte del proceso disfrutas más?",

        descripcion:
            "Piensa en cómo reaccionas ante problemas.",

        opciones: [

            {
                texto:
                    "🔍 Investigar hasta descubrir la causa",

                afinidad: {
                    diagnostico: 4,
                    logica: 3
                }
            },

            {
                texto:
                    "📋 Organizar los pasos para solucionarlo",

                afinidad: {
                    organizacion: 4,
                    oficina: 1
                }
            },

            {
                texto:
                    "👥 Reunir personas y coordinar una solución",

                afinidad: {
                    liderazgo: 3,
                    comunicacion: 3,
                    rrhh: 2
                }
            },

            {
                texto:
                    "💡 Imaginar una solución diferente",

                afinidad: {
                    creatividad: 4,
                    programacion: 1,
                    marketing: 1
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🏢",

        pregunta:
            "¿Cuál de estos ambientes te resulta más interesante?",

        descripcion:
            "Imagínate trabajando allí varias horas.",

        opciones: [

            {
                texto:
                    "🏦 Banco, oficina financiera o caja",

                afinidad: {
                    finanzas: 4,
                    numeros: 3,
                    oficina: 2
                }
            },

            {
                texto:
                    "🔧 Taller con herramientas y equipos",

                afinidad: {
                    herramientas: 4,
                    mecanica: 2,
                    electricidad: 1
                }
            },

            {
                texto:
                    "☕ Restaurante, cocina o cafetería",

                afinidad: {
                    gastronomia: 3,
                    servicio: 4,
                    cliente: 2
                }
            },

            {
                texto:
                    "💻 Laboratorio de computación y tecnología",

                afinidad: {
                    tecnologia: 4,
                    soporte: 2,
                    redes: 1
                }
            }

        ]
    },


    {
        tipo: "reto",

        icono: "💸",

        pregunta:
            "Un producto cuesta C$800 y tiene 25% de descuento. ¿Cuánto pagarías?",

        descripcion:
            "RETO RELÁMPAGO • Tienes 20 segundos",

        opciones: [

            {
                texto: "C$600",

                correcta: true,

                afinidad: {
                    numeros: 2,
                    finanzas: 2
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
                texto: "C$575",

                correcta: false,

                afinidad: {}
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🛠️",

        pregunta:
            "Si pudieras aprender una habilidad práctica hoy mismo, ¿cuál elegirías?",

        descripcion:
            "Aunque nunca la hayas realizado antes.",

        opciones: [

            {
                texto:
                    "🚗 Diagnosticar una falla en un automóvil",

                afinidad: {
                    mecanica: 5,
                    diagnostico: 3
                }
            },

            {
                texto:
                    "⚡ Instalar o reparar un sistema eléctrico",

                afinidad: {
                    electricidad: 5,
                    herramientas: 2
                }
            },

            {
                texto:
                    "🔥 Aprender a cortar y soldar metal",

                afinidad: {
                    metal: 5,
                    herramientas: 3,
                    precision: 2
                }
            },

            {
                texto:
                    "🪵 Diseñar y construir un mueble",

                afinidad: {
                    madera: 5,
                    creatividad: 3,
                    precision: 2
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🗣️",

        pregunta:
            "¿Qué tipo de comunicación disfrutas más?",

        descripcion:
            "Piensa en aquello que se te hace más natural.",

        opciones: [

            {
                texto:
                    "🌎 Hablar y aprender otros idiomas",

                afinidad: {
                    idiomas: 5,
                    comunicacion: 3
                }
            },

            {
                texto:
                    "📣 Convencer, promocionar o vender una idea",

                afinidad: {
                    marketing: 4,
                    ventas: 4,
                    comunicacion: 3
                }
            },

            {
                texto:
                    "👥 Escuchar y ayudar a otras personas",

                afinidad: {
                    rrhh: 4,
                    comunicacion: 4
                }
            },

            {
                texto:
                    "📑 Comunicar información de manera ordenada",

                afinidad: {
                    oficina: 4,
                    organizacion: 3,
                    documentacion: 2
                }
            }

        ]
    },


    {
        tipo: "reto",

        icono: "💻",

        pregunta:
            "Observa: 3, 6, 12, 24... ¿qué número sigue?",

        descripcion:
            "RETO DE LÓGICA • Tienes 20 segundos",

        opciones: [

            {
                texto: "30",

                correcta: false,

                afinidad: {}
            },

            {
                texto: "36",

                correcta: false,

                afinidad: {}
            },

            {
                texto: "48",

                correcta: true,

                afinidad: {
                    logica: 3,
                    programacion: 2
                }
            },

            {
                texto: "50",

                correcta: false,

                afinidad: {}
            }

        ]
    },


    {
        tipo: "reto",

        icono: "🍰",

        pregunta:
            "Una receta para 8 personas usa 4 huevos. ¿Cuántos necesitas para 24 personas?",

        descripcion:
            "RETO GASTRONÓMICO • Tienes 20 segundos",

        opciones: [

            {
                texto: "8",

                correcta: false,

                afinidad: {}
            },

            {
                texto: "10",

                correcta: false,

                afinidad: {}
            },

            {
                texto: "12",

                correcta: true,

                afinidad: {
                    gastronomia: 2,
                    reposteria: 2,
                    precision: 2
                }
            },

            {
                texto: "16",

                correcta: false,

                afinidad: {}
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🔌",

        pregunta:
            "¿Cuál de estos sistemas te produce más curiosidad?",

        descripcion:
            "¿Cuál abrirías para aprender cómo funciona?",

        opciones: [

            {
                texto:
                    "🖥️ Computadoras, redes y conexión a internet",

                afinidad: {
                    tecnologia: 4,
                    soporte: 4,
                    redes: 5
                }
            },

            {
                texto:
                    "📺 Electrodomésticos y circuitos electrónicos",

                afinidad: {
                    electronica: 5,
                    diagnostico: 2
                }
            },

            {
                texto:
                    "❄️ Aire acondicionado y refrigeración",

                afinidad: {
                    refrigeracion: 5,
                    diagnostico: 2
                }
            },

            {
                texto:
                    "⚡ Redes, cableado y sistemas eléctricos",

                afinidad: {
                    electricidad: 5,
                    diagnostico: 2
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "📂",

        pregunta:
            "¿Cuál de estas responsabilidades elegirías primero?",

        descripcion:
            "Imagina que puedes probar cualquiera durante un día.",

        opciones: [

            {
                texto:
                    "🚢 Organizar documentos de importación y exportación",

                afinidad: {
                    aduanas: 5,
                    documentacion: 4,
                    detalle: 2
                }
            },

            {
                texto:
                    "👥 Organizar nómina y procesos del personal",

                afinidad: {
                    rrhh: 5,
                    organizacion: 3,
                    numeros: 1
                }
            },

            {
                texto:
                    "🏦 Atender operaciones y clientes bancarios",

                afinidad: {
                    finanzas: 4,
                    cliente: 4,
                    numeros: 2
                }
            },

            {
                texto:
                    "📅 Manejar agenda, documentos y reuniones",

                afinidad: {
                    oficina: 5,
                    organizacion: 4
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🎨",

        pregunta:
            "Te piden crear algo que impresione a otras personas. ¿Qué haces?",

        descripcion:
            "Escoge el proyecto que más te emocione.",

        opciones: [

            {
                texto:
                    "🎂 Diseñar y decorar un pastel",

                afinidad: {
                    reposteria: 5,
                    creatividad: 4,
                    precision: 2
                }
            },

            {
                texto:
                    "🪵 Diseñar un mueble original",

                afinidad: {
                    madera: 4,
                    creatividad: 4,
                    precision: 2
                }
            },

            {
                texto:
                    "📱 Crear una campaña para redes sociales",

                afinidad: {
                    marketing: 5,
                    creatividad: 4,
                    comunicacion: 2
                }
            },

            {
                texto:
                    "💻 Diseñar una solución digital",

                afinidad: {
                    programacion: 4,
                    tecnologia: 4,
                    creatividad: 2
                }
            }

        ]
    },


    {
        tipo: "reto",

        icono: "🌎",

        pregunta:
            "Un visitante te dice: “Can you help me?”. ¿Qué significa?",

        descripcion:
            "RETO DE INGLÉS • Tienes 20 segundos",

        opciones: [

            {
                texto:
                    "¿Puedes ayudarme?",

                correcta: true,

                afinidad: {
                    idiomas: 3,
                    comunicacion: 2
                }
            },

            {
                texto:
                    "¿Dónde trabajas?",

                correcta: false,

                afinidad: {}
            },

            {
                texto:
                    "¿Cuánto cuesta?",

                correcta: false,

                afinidad: {}
            },

            {
                texto:
                    "Hasta mañana",

                correcta: false,

                afinidad: {}
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🔎",

        pregunta:
            "¿Qué clase de error te daría más satisfacción encontrar?",

        descripcion:
            "Ese momento de: ¡ya descubrí qué estaba mal!",

        opciones: [

            {
                texto:
                    "💰 Un número incorrecto en las cuentas",

                afinidad: {
                    detalle: 4,
                    numeros: 4,
                    finanzas: 3
                }
            },

            {
                texto:
                    "🐛 Un error dentro de un programa",

                afinidad: {
                    programacion: 5,
                    logica: 4,
                    tecnologia: 2
                }
            },

            {
                texto:
                    "🚗 Una falla escondida en un motor",

                afinidad: {
                    mecanica: 5,
                    diagnostico: 4
                }
            },

            {
                texto:
                    "📋 Un proceso desorganizado en una empresa",

                afinidad: {
                    organizacion: 5,
                    administracion: 3,
                    oficina: 2
                }
            }

        ]
    },


    {
        tipo: "preferencia",

        icono: "🤝",

        pregunta:
            "Si tu trabajo implicara atender personas, ¿qué situación preferirías?",

        descripcion:
            "Escoge la experiencia que más disfrutarías.",

        opciones: [

            {
                texto:
                    "☕ Atender clientes en cafetería o restaurante",

                afinidad: {
                    servicio: 5,
                    cliente: 4,
                    gastronomia: 1
                }
            },

            {
                texto:
                    "🏦 Orientar a alguien sobre un servicio financiero",

                afinidad: {
                    finanzas: 3,
                    cliente: 5,
                    oficina: 2
                }
            },

            {
                texto:
                    "👥 Ayudar a una persona dentro de una empresa",

                afinidad: {
                    rrhh: 5,
                    comunicacion: 4
                }
            },

            {
                texto:
                    "📣 Convencer a alguien de probar un producto",

                afinidad: {
                    ventas: 5,
                    marketing: 4,
                    comunicacion: 3
                }
            }

        ]
    },

    {
    tipo: "preferencia",

    formato: "duelo",

    icono: "⚔️",

    pregunta:
        "Solo puedes elegir uno de estos dos proyectos. ¿Cuál aceptarías?",

    descripcion:
        "No pienses en cuál parece más fácil. Elige el que te emocione más.",

    opciones: [

        {
            texto:
                "💻 Crear desde cero un sistema para organizar un negocio",

            afinidad: {
                programacion: 5,
                tecnologia: 4,
                logica: 3,
                creatividad: 2
            }
        },

        {
            texto:
                "🔧 Recibir una máquina dañada y lograr que vuelva a funcionar",

            afinidad: {
                diagnostico: 5,
                herramientas: 4,
                mecanica: 3,
                electricidad: 2
            }
        }

    ]

},

{
    tipo: "reto",

    formato: "vf",

    icono: "⚡",

    pregunta:
        "Si un producto cuesta C$1,000 y aumenta 10%, su nuevo precio será C$1,100.",

    descripcion:
        "VERDADERO O FALSO • Tienes 20 segundos",

    opciones: [

        {
            texto:
                "✅ VERDADERO",

            correcta: true,

            afinidad: {
                numeros: 3,
                finanzas: 2
            }
        },

        {
            texto:
                "❌ FALSO",

            correcta: false,

            afinidad: {}
        }

    ]

},
{
    tipo: "preferencia",

    formato: "visual",

    icono: "👀",

    pregunta:
        "Sin pensarlo demasiado, ¿cuál de estas escenas te atrae más?",

    descripcion:
        "Escoge aquello que te gustaría experimentar.",

    opciones: [

        {
            texto:
                "💻\nTecnología",

            afinidad: {
                tecnologia: 5,
                programacion: 2,
                soporte: 2
            }
        },

        {
            texto:
                "🔧\nTaller",

            afinidad: {
                herramientas: 5,
                mecanica: 2,
                diagnostico: 2
            }
        },

        {
            texto:
                "🍰\nCocina creativa",

            afinidad: {
                gastronomia: 4,
                reposteria: 4,
                creatividad: 2
            }
        },

        {
            texto:
                "📊\nNegocios",

            afinidad: {
                organizacion: 3,
                finanzas: 3,
                oficina: 3
            }
        }

    ]

},
{
    tipo: "ordenar",

    icono: "🧩",

    pregunta:
        "Una computadora no tiene conexión a internet. ¿En qué orden investigarías el problema?",

    descripcion:
        "Toca los pasos desde el primero hasta el último.",

    opciones: [

        {
            id: "conexion",

            nombreCorto:
                "Conexión",

            texto:
                "🔌 Revisar si los cables o Wi-Fi están conectados"
        },

        {
            id: "configuracion",

            nombreCorto:
                "Configuración",

            texto:
                "⚙️ Revisar la configuración de red"
        },

        {
            id: "prueba",

            nombreCorto:
                "Prueba",

            texto:
                "🌐 Probar nuevamente la conexión"
        },

        {
            id: "diagnostico",

            nombreCorto:
                "Diagnóstico",

            texto:
                "🔍 Investigar una falla más profunda"
        }

    ],

    ordenCorrecto: [

        "conexion",
        "configuracion",
        "prueba",
        "diagnostico"

    ],

    afinidadCorrecta: {

        tecnologia: 3,

        soporte: 4,

        redes: 4,

        logica: 2,

        diagnostico: 2

    }

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

    ordenSeleccionado = [];


    const pregunta =
        preguntas[preguntaActual];


    const numero =
        preguntaActual + 1;


    numeroPregunta.textContent =
        "Misión " +
        numero +
        " de " +
        preguntas.length;


    numeroFondo.textContent =
        String(numero).padStart(
            2,
            "0"
        );


    const progreso =
        (
            numero
            /
            preguntas.length
        )
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
    // PREGUNTA DE ORDEN
    // =============================================

    if (
        pregunta.tipo === "ordenar"
    ) {

        mostrarPreguntaOrdenar(
            pregunta
        );

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


    const idsElegidos =
        ordenSeleccionado.map(
            function (opcion) {

                return opcion.id;

            }
        );


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


    respondida = true;


    detenerTemporizador();


    const pregunta =
        preguntas[preguntaActual];


    const botones =
        document.querySelectorAll(
            ".opcion-quiz"
        );


    botones.forEach(
        function (boton) {

            boton.disabled = true;

        }
    );


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
            preguntaActual
            < preguntas.length
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
        preguntas.length;


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