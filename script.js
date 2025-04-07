document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    backToTopBtn.onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    // Inicializa el formulario de contacto con el idioma predeterminado (español)
    setupContactForm('es');
    changeLanguage('es');
});

const translations = {
    es: {
        about: "Sobre mí",
        projects: "Proyectos",
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        contact: "Contacto",
        greeting: "¡Hola, soy Andrés Segura Calderón!",
        intro: "Desarrollador full-stack con experiencia en Java, Python, C#, .NET y bases de datos SQL y NoSQL. Experiencia en tecnologías frontend como HTML, CSS, JavaScript y React, además de pruebas de software manuales y automatizadas con Selenium y PyCharm.",
        projectsTitle: "Proyectos Destacados",
        project1Title: "Medallero",
        project1Desc: "Aplicación para gestionar medalleros en eventos deportivos.",
        githubLink: "Ver en GitHub",
        project2Title: "Silueta Club",
        project2Desc: "Plataforma para gestión de miembros y eventos de un club deportivo.",
        project3Title: "Estructuras de Datos",
        project3Desc: "Implementaciones de diversas estructuras de datos en Java.",
        experienceTitle: "Experiencia",
        experienceItem1Title: "Proyecto Universitario: Sistema de Gestión para un Centro de Acondicionamiento Físico",
        experienceItem1Desc: "Diseño y desarrollo de una plataforma para la gestión de usuarios, servicios y reservas en un gimnasio. Implementación del back-end con .NET, C#, y SQL. Creación del front-end utilizando HTML, CSS, JavaScript y Bootstrap. Aplicación de metodologías ágiles (Scrum) para la organización del desarrollo. Gestión del control de versiones con Git y despliegue en Azure para servicios en la nube.",
        experienceItem2Title: "Proyecto Universitario: Sistema de Bolsa de Empleo para uso Generalizado",
        experienceItem2Desc: "Elaboración e implementación de una plataforma para conectar empresas con buscadores de empleo. Construcción del back-end con Node.js y MongoDB. Desarrollo del front-end utilizando HTML, CSS y JavaScript. Liderazgo del equipo como Scrum Master, organizando tareas y asegurando entregas a tiempo.",
        educationTitle: "Educación",
        educationItem1Title: "Técnico Superior En Pruebas De Software",
        educationItem1Desc: "Universidad CENFOTEC 2021-2023",
        educationItem2Title: "Bachillerato en Ingeniería del Software",
        educationItem2Desc: "Universidad CENFOTEC 2023 - actualidad",
        skillsTitle: "Habilidades",
        skillsItem1Title: "Técnicas",
        skillsItem1Desc: "Front-end: HTML, CSS, Bootstrap, JavaScript, React. Back-end: SQL, MySQL, MongoDB, Java, Python, C#. Otras: GitHub, Scrum, Agile, Windows 365, Azure.",
        skillsItem2Title: "Blandas",
        skillsItem2Desc: "Liderazgo, Trabajo en equipo, Comunicación, Inteligencia emocional, Adaptación al cambio.",
        downloadCV: "Descargar CV",
        contactFormTitle: "Formulario de Contacto",
        contactInfoTitle: "Información de Contacto",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo",
        emailPlaceholder: "Tu correo",
        topicLabel: "Asunto",
        topicPlaceholder: "Asunto del mensaje",
        messageLabel: "Mensaje",
        messagePlaceholder: "Tu mensaje",
        sendButton: "Enviar",
        emailSentSuccessTitle: "¡Correo enviado!",
        emailSentSuccessText: "Tu mensaje ha sido enviado con éxito.",
        emailSentSuccessButton: "¡Genial!",
        emailSentSuccessResult: "Mensaje enviado con éxito.",
        emailSentErrorTitle: "¡Oops!",
        emailSentErrorText: "Error al enviar el mensaje. Intenta nuevamente.",
        emailSentErrorButton: "Cerrar",
        emailSentErrorResult: "Error al enviar el mensaje."
    },
    en: {
        about: "About me",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        contact: "Contact",
        greeting: "Hello, I'm Andrés Segura Calderón!",
        intro: "Full-stack developer with experience in Java, Python, C#, .NET, and SQL and NoSQL databases. Experience in frontend technologies like HTML, CSS, JavaScript, and React, as well as manual and automated software testing with Selenium and PyCharm.",
        projectsTitle: "Featured Projects",
        project1Title: "Medallero",
        project1Desc: "Application for managing medal tables in sporting events.",
        githubLink: "View on GitHub",
        project2Title: "Silueta Club",
        project2Desc: "Platform for managing members and events of a sports club.",
        project3Title: "Data Structures",
        project3Desc: "Implementations of various data structures in Java.",
        experienceTitle: "Experience",
        experienceItem1Title: "University Project: Management System for a Fitness Center",
        experienceItem1Desc: "Design and development of a platform for managing users, services, and reservations in a gym. Implementation of the back-end with .NET, C#, and SQL. Creation of the front-end using HTML, CSS, JavaScript, and Bootstrap. Application of agile methodologies (Scrum) for development organization. Version control management with Git and deployment on Azure for cloud services.",
        experienceItem2Title: "University Project: Job Board System for General Use",
        experienceItem2Desc: "Elaboration and implementation of a platform to connect companies with job seekers. Construction of the back-end with Node.js and MongoDB. Development of the front-end using HTML, CSS, and JavaScript. Team leadership as Scrum Master, organizing tasks and ensuring on-time deliveries.",
        educationTitle: "Education",
        educationItem1Title: "Senior Technician in Software Testing",
        educationItem1Desc: "CENFOTEC University 2021-2023",
        educationItem2Title: "Bachelor's Degree in Software Engineering",
        educationItem2Desc: "CENFOTEC University 2023 - present",
        skillsTitle: "Skills",
        skillsItem1Title: "Technical",
        skillsItem1Desc: "Front-end: HTML, CSS, Bootstrap, JavaScript, React. Back-end: SQL, MySQL, MongoDB, Java, Python, C#. Others: GitHub, Scrum, Agile, Windows 365, Azure.",
        skillsItem2Title: "Soft",
        skillsItem2Desc: "Leadership, Teamwork, Communication, Emotional intelligence, Adaptability.",
        downloadCV: "Download CV",
        contactFormTitle: "Contact Form",
        contactInfoTitle: "Contact Information",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "Your email",
        topicLabel: "Subject",
        topicPlaceholder: "Subject of the message",
        messageLabel: "Message",
        messagePlaceholder: "Your message",
        sendButton: "Send",
        emailSentSuccessTitle: "Email sent!",
        emailSentSuccessText: "Your message has been sent successfully.",
        emailSentSuccessButton: "Great!",
        emailSentSuccessResult: "Message sent successfully.",
        emailSentErrorTitle: "Oops!",
        emailSentErrorText: "Error sending the message. Please try again.",
        emailSentErrorButton: "Close",
        emailSentErrorResult: "Error sending the message."
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key + 'Placeholder'] || translations[lang][key] || '';
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    const downloadCVLink = document.getElementById('downloadCVLink');
    downloadCVLink.href = `CV_${lang.toUpperCase()}_Andres_Segura.pdf`;

    // Reconfigura el listener del formulario de contacto al cambiar el idioma
    setupContactForm(lang);
}

function setupContactForm(lang) {
    const contactForm = document.getElementById('contactForm');

    
    contactForm.removeEventListener('submit', handleContactSubmit);

    contactForm.addEventListener('submit', handleContactSubmit);

    function handleContactSubmit(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        // Obtención de valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value;

        // Parámetros que se enviarán en el correo (a ti)
        const templateParamsToAdmin = {
            name: name,
            email: email,
            topic: topic,
            message: message,
        };

        const serviceID = "IrcI4r4feXZP75k0a"; 
        let templateIDToAdmin = "";

        if (lang === 'es') {
            templateIDToAdmin = "template_sibbg7f"; 
        } else if (lang === 'en') {
            templateIDToAdmin = "template_wh14meh"; 
        } else {
            console.error("Idioma no soportado para el envío de correo.");
            return;
        }

        // Envío del correo al administrador
        emailjs.send("service_lui5xao", templateIDToAdmin, templateParamsToAdmin)
            .then((responseAdmin) => {
                console.log('Correo al administrador enviado!', responseAdmin.status, responseAdmin.text);

                // Mostrar alerta de éxito al usuario con textos traducidos
                Swal.fire({
                    icon: 'success',
                    title: translations[lang]['emailSentSuccessTitle'],
                    text: translations[lang]['emailSentSuccessText'],
                    confirmButtonText: translations[lang]['emailSentSuccessButton']
                });

                // Mostrar mensaje de éxito en la sección de resultados
                const resultMessage = document.getElementById('resultMessage');
                resultMessage.innerText = translations[lang]['emailSentSuccessResult'];
                resultMessage.style.display = 'block';

                // Resetear campos del formulario
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('topic').value = '';
                document.getElementById('message').value = '';
            })
            .catch((error) => {
                console.error('Error al enviar:', error);

                // Mostrar alerta de error con textos traducidos
                Swal.fire({
                    icon: 'error',
                    title: translations[lang]['emailSentErrorTitle'],
                    text: translations[lang]['emailSentErrorText'],
                    confirmButtonText: translations[lang]['emailSentErrorButton']
                });

                // Mostrar mensaje de error en la sección de resultados
                const resultMessage = document.getElementById('resultMessage');
                resultMessage.innerText = translations[lang]['emailSentErrorResult'];
                resultMessage.style.display = 'block';
            });
    }
}