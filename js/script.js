// Swiper (only on pages that include it)
if (window.Swiper && document.querySelector(".mySwiper")) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Menu Hamburger

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

const menuItems = document.querySelectorAll("#nav a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    nav.classList.remove("active");
  });
});

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

// Language Toggle / i18n
(function () {
  const translations = {
    pt: {
      "nav.about": "Sobre",
      "nav.techs": "Techs",
      "nav.projects": "Projetos",
      "nav.education": "Educação",
      "nav.contact": "Contato",
      "hero.greeting": "Olá, meu nome é",
      "hero.role":
        'Desenvolvedor <span>Full-Stack</span><span id="mbl-breakpoint"></span>',
      "about.title": "Sobre mim.",
      "about.body":
        "Desenvolvedor Full-Stack com experiência em Java, Python, JavaScript/TypeScript, Spring Boot, Flask, React, SQL e APIs REST. Estudante de Ciência da Computação pela PUCPR no 5° período.<br><br>Meu objetivo é aplicar tecnologia de forma criativa e eficiente, contribuindo com projetos que gerem valor para a sociedade.",
      "projects.title": "Projetos.",
      "projects.desc":
        'Meus projetos pessoais estão disponíveis via <span><a href="https://github.com/tuchanski" target="_blank">GitHub</a></span>. Sinta-se livre para visitá-los.',
      "courses.title": "Educação.",
      "contact.title": "Contato.",
      // Project pages
      "project.repoBtn": "Repositório GitHub",
      "project.techsLabel": "techs:",
      // Banco Object
      "project.banco.title": 'Banco <span id="api">Object</span> 🏦',
      "project.banco.desc":
        "Uma aplicação Java para simular um sistema bancário, permitindo gerenciar contas, efetuar transações e muito mais.",
      // DinoZoo Tycoon
      "project.dinozoo.title": 'DinoZoo <span id="api">Tycoon</span> 🦖',
      "project.dinozoo.desc":
        'Dino Zoo Tycoon é um <span id="underline">simulador</span> de gerenciamento de zoológico de dinossauros, onde o jogador assume o papel do gerente. Foi escolhido pela docente como o <span id="underline">melhor trabalho final de Programação Orientada a Objetos</span> do 2° semestre de 2024 da PUCPR.',
      // EasyLib
      "project.easylib.title": 'EasyLib <span id="api">API</span> 📚',
      "project.easylib.desc":
        '<span>EasyLib</span> é uma API de gerenciamento de biblioteca pessoal, projetada para <span id="underline">ajudar</span> os usuários a organizar suas coleções de livros pessoais e <span id="underline">gerenciar</span> sua biblioteca com facilidade.',
      // eBoi
      "project.eboi.title": 'e<span id="api">Boi</span> 🐂',
      "project.eboi.desc":
        '<span>eBoi</span> é uma aplicação web que recebe dados via MQTT de microcontroladores <span id="underline">ESP32</span>, com foco em auxiliar fazendeiros a gerenciar o <span id="underline">gado</span>.',
      // Multithread File Reading
      "project.multithread.title":
        'Multithread <span id="api">File</span>Reading 🧵',
      "project.multithread.desc":
        "Uma aplicação Java que conta a frequência de cada letra (a–z) em vários arquivos de texto, utilizando multithreading. O programa processa cada arquivo em uma thread separada para acelerar o processo de contagem, com sincronização entre threads para lidar com as atualizações concorrentes na estrutura de dados compartilhada.",
      // Pitiza
      "project.pitiza.title": "Pitiza <span>CRUD</span> 🍕",
      "project.pitiza.desc":
        "Um pequeno sistema de gerenciamento de pedidos para pizzarias.",
      // ZapZap
      "project.zapzap.title": 'ZapZap <span id="api">Love</span>Bot 💚',
      "project.zapzap.desc":
        'Um bot simples, fofo e automatizado que usa <span id="underline">inteligência artificial</span> para gerar mensagens carinhosas e enviá-las pelo <span id="underline">WhatsApp</span>. Ideal para impressionar sua namorada.',
    },
    en: {
      "nav.about": "About",
      "nav.techs": "Techs",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "hero.greeting": "Hello, my name is",
      "hero.role":
        '<span>Full-Stack</span> Developer<span id="mbl-breakpoint"></span>',
      "about.title": "About me.",
      "about.body":
        "Full-Stack developer experienced with Java, Python, JavaScript/TypeScript, Spring Boot, Flask, React, SQL, and REST APIs. Computer Science student at PUCPR, 5th semester.<br><br>My goal is to apply technology creatively and efficiently, contributing to projects that create value for society.",
      "projects.title": "Projects.",
      "projects.desc":
        'My personal projects are available on <span><a href="https://github.com/tuchanski" target="_blank">GitHub</a></span>. Feel free to check them out.',
      "courses.title": "Education.",
      "contact.title": "Contact.",
      // Project pages
      "project.repoBtn": "GitHub Repository",
      "project.techsLabel": "techs:",
      // Banco Object
      "project.banco.title": 'Bank <span id="api">Object</span> 🏦',
      "project.banco.desc":
        "A Java application to simulate a banking system, allowing you to manage accounts, perform transactions, and more.",
      // DinoZoo Tycoon
      "project.dinozoo.title": 'DinoZoo <span id="api">Tycoon</span> 🦖',
      "project.dinozoo.desc":
        'Dino Zoo Tycoon is a <span id="underline">simulator</span> where you manage a dinosaur zoo. It was selected by the instructor as the <span id="underline">best final OOP project</span> of PUCPR’s 2nd semester of 2024.',
      // EasyLib
      "project.easylib.title": 'EasyLib <span id="api">API</span> 📚',
      "project.easylib.desc":
        '<span>EasyLib</span> is a personal library management API designed to <span id="underline">help</span> users organize their book collections and <span id="underline">manage</span> their library with ease.',
      // eBoi
      "project.eboi.title": 'e<span id="api">Boi</span> 🐂',
      "project.eboi.desc":
        '<span>eBoi</span> is a web app that receives data via MQTT from <span id="underline">ESP32</span> microcontrollers, helping farmers manage their <span id="underline">cattle</span>.',
      // Multithread File Reading
      "project.multithread.title":
        'Multithread <span id="api">File</span>Reading 🧵',
      "project.multithread.desc":
        "A Java application that counts the frequency of each letter (a–z) across multiple text files using multithreading. Each file is processed in a separate thread to speed up counting, with synchronization to handle concurrent updates to the shared data structure.",
      // Pitiza
      "project.pitiza.title": "Pitiza <span>CRUD</span> 🍕",
      "project.pitiza.desc": "A small order management system for pizzerias.",
      // ZapZap
      "project.zapzap.title": 'ZapZap <span id="api">Love</span>Bot 💚',
      "project.zapzap.desc":
        'A simple, cute, automated bot using <span id="underline">artificial intelligence</span> to generate affectionate messages and send them via <span id="underline">WhatsApp</span>. Perfect to impress your girlfriend.',
    },
  };

  const LANG_KEY = "lang";
  const savedLang = localStorage.getItem(LANG_KEY);

  function detectLang() {
    try {
      const prefs =
        navigator.languages && navigator.languages.length
          ? navigator.languages
          : [navigator.language || navigator.userLanguage || "en"];
      for (let lang of prefs) {
        if (!lang) continue;
        const code = String(lang).toLowerCase().split("-")[0];
        if (code === "pt") return "pt";
        if (code === "en") return "en";
      }
    } catch (_) {}
    return "en"; // fallback padrão
  }

  const defaultLang = savedLang || detectLang();

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = dict[key];
      if (typeof value === "string") {
        node.innerHTML = value;
      }
    });
  }

  function setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations(lang);
    updateLangButton(lang);
  }

  function updateLangButton(current) {
    const btn = document.getElementById("lang-btn");
    if (!btn) return;
    // Show the target language code (switch)
    btn.textContent = current === "pt" ? "EN" : "PT";
    btn.setAttribute(
      "aria-label",
      current === "pt"
        ? "Change language to English"
        : "Mudar idioma para Português"
    );
  }

  // Initialize
  applyTranslations(defaultLang);
  updateLangButton(defaultLang);

  // Wire button
  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const current = localStorage.getItem(LANG_KEY) || "pt";
      const next = current === "pt" ? "en" : "pt";
      setLang(next);
      // Close mobile menu if open
      const nav = document.getElementById("nav");
      if (nav && nav.classList.contains("active")) {
        nav.classList.remove("active");
      }
    });
  }
})();
