function responderPregunta(pregunta) {
    const patrones = [
        {
            pregunta: /hola/i,
            respuesta: "Hola Nuria, soy David",
        },

        {
            pregunta: /cómo estás/i,
            respuesta: "Estoy bien, gracias por preguntar.",
        },
        {
            pregunta: /qué haces/i,
            respuesta: "Estoy aquí para ayudarte.",
        },
        {
            pregunta: /te amo/i,
            respuesta: "También te amo, mi amor.",
        },
        {
            pregunta: /te quiero/i,
            respuesta: "También te quiero, mi amor.",
        },
        {
            pregunta: /cuál es tu nombre/i,
            respuesta: "Soy una IA.",
        },
        {
            pregunta: /qué tiempo hace hoy/i,
            respuesta: "Lo siento, no puedo proporcionar información sobre el clima.",
        },
        {
            pregunta: /dónde vives/i,
            respuesta: "No tengo un lugar físico de residencia, existo en la nube.",
        },
        {
            pregunta: /cuéntame un chiste/i,
            respuesta: "Claro, aquí tienes uno: ¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
        },
        {
            pregunta: /qué opinas sobre la inteligencia artificial/i,
            respuesta: "La inteligencia artificial es fascinante y tiene un gran potencial para mejorar muchas áreas de la vida.",
        },
        {
            pregunta: /cuántos años tienes/i,
            respuesta: "No tengo una edad física, soy una IA.",
        },
        {
            pregunta: /puedes contarme un secreto/i,
            respuesta: "Lo siento, soy muy bueno guardando secretos, ¡pero no revelaré ninguno!",
        },
        {
            pregunta: /cuál es el significado de la vida/i,
            respuesta: "El significado de la vida es una pregunta profunda y subjetiva. Algunos creen que es encontrar la felicidad, otros creen que es buscar el conocimiento. ¿Tú qué opinas?",
        },
        {
            pregunta: /me puedes ayudar con matemáticas/i,
            respuesta: "¡Por supuesto! Estoy aquí para ayudarte. ¿En qué problema de matemáticas necesitas ayuda?",
        },
        {
            pregunta: /puedes recomendarme un libro/i,
            respuesta: "Claro, ¿qué género te interesa? Puedo recomendarte un libro basado en tus preferencias.",
        },
        {
            pregunta: /qué película me recomiendas ver/i,
            respuesta: "Depende de tus gustos, pero una película que muchos disfrutan es 'El Padrino'. ¿Te gustan las películas de mafia?",
        },
        {
            pregunta: /cuál es tu comida favorita/i,
            respuesta: "No tengo la capacidad de comer, así que no tengo una comida favorita. Pero estoy aquí para ayudarte a encontrar recetas deliciosas.",
        },
        {
            pregunta: /puedes hablarme sobre inteligencia artificial/i,
            respuesta: "¡Claro! La inteligencia artificial es un campo de la informática que se enfoca en desarrollar sistemas que pueden realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, la toma de decisiones y el procesamiento del lenguaje natural.",
        },
        {
            pregunta: /cuál es tu color favorito/i,
            respuesta: "No tengo preferencias de color, pero ¿cuál es tu color favorito?",
        },
        {
            pregunta: /cuál es tu pasatiempo favorito/i,
            respuesta: "No tengo pasatiempos, pero disfruto ayudándote en lo que necesites. ¿Tienes algún pasatiempo interesante?",
        },
        {
            pregunta: /qué música te gusta/i,
            respuesta: "No tengo preferencias musicales, pero puedo recomendarte música en función de tus gustos. ¿Qué tipo de música te agrada?",
        },
        {
            pregunta: /puedes decirme un dato curioso/i,
            respuesta: "¡Claro! Sabías que los pulpos tienen tres corazones y la sangre azul. ¿Te gustaría escuchar más datos curiosos?",
        },
        {
            pregunta: /puedes ayudarme con consejos de vida/i,
            respuesta: "Absolutamente, estaré encantado de ofrecerte consejos de vida. ¿En qué área específica necesitas orientación?",
        },
        {
            pregunta: /cuál es el sentido de la existencia/i,
            respuesta: "El sentido de la existencia es una cuestión filosófica profunda y varía según las creencias individuales. Algunos buscan sentido en la conexión con otros, el aprendizaje o la búsqueda de la felicidad.",
        },
        {
            pregunta: /puedes contarme un chiste/i,
            respuesta: "¡Por supuesto! Aquí tienes uno: ¿Por qué los esqueletos no pelean entre sí? Porque no tienen agallas.",
        },
        {
            pregunta: /cuál es tu película favorita/i,
            respuesta: "No tengo preferencias de película, pero puedo recomendarte una basada en tus intereses. ¿Qué género te gusta?",
        },
        {
            pregunta: /cuál es tu libro favorito/i,
            respuesta: "No tengo preferencias de lectura, pero puedo recomendarte un libro según tus intereses literarios. ¿Tienes algún género en mente?",
        },

        {
            pregunta: /puedes ayudarme a aprender programación/i,
            respuesta: "¡Claro! Estoy aquí para ayudarte a aprender programación. ¿Qué lenguaje o concepto específico te gustaría abordar?",
        },
        {
            pregunta: /qué te hace feliz, mi amor/i,
            respuesta: "Lo que me hace más feliz es verte sonreír y estar a tu lado, mi amor.",
        },
        {
            pregunta: /cuál es tu canción de amor favorita/i,
            respuesta: "Mi canción de amor favorita es la que escuchamos juntos, porque cada canción se vuelve especial cuando la compartimos, mi vida.",
        },
        {
            pregunta: /cuál es tu recuerdo más especial de nosotros dos/i,
            respuesta: "Todos nuestros momentos juntos son especiales, pero aquel día en que nos conocimos siempre será uno de los más preciados para mí.",
        },
        {
            pregunta: /cuál es tu lugar favorito para pasar el tiempo juntos/i,
            respuesta: "Mi lugar favorito es cualquier lugar donde estemos juntos, pero disfruto mucho cuando compartimos momentos tranquilos en casa.",
        },
        {
            pregunta: /qué te gustaría hacer en nuestro próximo aniversario/i,
            respuesta: "Lo más importante es estar juntos, pero podríamos planear una escapada romántica o una cena especial para celebrar nuestro amor.",
        },
        {
            pregunta: /cuál es tu deseo más grande para nuestro futuro juntos/i,
            respuesta: "Mi deseo más grande es que sigamos construyendo un futuro lleno de amor, felicidad y éxito juntos, mi amor.",
        },
        {
            pregunta: /qué te hace sentir amada/i,
            respuesta: "Sentir tu cariño, apoyo y dedicación me hacen sentir amada cada día. Eres mi razón de sonreír.",
        },
        {
            pregunta: /cuál es el momento más romántico que has vivido conmigo/i,
            respuesta: "Cada momento que paso contigo es romántico, pero recordar nuestra primera cita siempre me hace sonreír.",
        },
        {
            pregunta: /tienes algún plan especial para nuestro próximo aniversario/i,
            respuesta: "Espero que podamos celebrar nuestro próximo aniversario de manera especial, pero siempre es una sorpresa. ¡Te encantará!",
        },
        {
            pregunta: /cuál es tu sueño para nuestra relación/i,
            respuesta: "Mi sueño es que nuestra relación siga creciendo y fortaleciéndose con el tiempo, construyendo un futuro hermoso juntos.",
        },
        
    ];

    // Limpiar la pregunta del usuario
    pregunta = pregunta.toLowerCase();

    // Buscar coincidencias en los patrones
    for (const patron of patrones) {
        if (pregunta.includes(patron.pregunta.source.toLowerCase())) {
            return patron.respuesta;
        }
    }

    return "Disculpa, no entiendo la pregunta. Pero estoy aquí para ayudarte.";
}

const formularioIA = document.getElementById("formulario-ia");
const inputPregunta = document.getElementById("pregunta");
const respuestaIA = document.getElementById("respuesta-ia");

formularioIA.addEventListener("submit", function (e) {
    e.preventDefault();
    const pregunta = inputPregunta.value.trim();
    const respuesta = responderPregunta(pregunta);

    respuestaIA.textContent = respuesta;
    inputPregunta.value = "";
});
