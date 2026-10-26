/**
 * MICHAEL VINCENTIUS - PORTFOLIO INTERACTIVITY SCRIPT
 * Theme: Elegant White Aesthetic
 * Features:
 * - Theme Switcher (Light Default / Dark Option)
 * - Language Switcher (Indonesian/English)
 * - Dynamic Marketing Analytics Charts (Chart.js)
 * - Contact Form & WhatsApp Messenger Bridge
 * - PDF Portfolio Modal
 * - Mobile Menu & Smooth Scrolling Spy
 */

// ==========================================
// 1. DATA & TRANSLATIONS
// ==========================================
const translations = {
  id: {
    nav_home: "Beranda",
    nav_about: "Profil",
    nav_skills: "Keahlian",
    nav_projects: "Proyek & Ads",
    nav_experience: "Pengalaman",
    nav_education: "Pendidikan",
    nav_contact: "Kontak",
    btn_download_cv: "Unduh PDF Portfolio",
    btn_view_pdf: "Lihat Dokumen PDF",
    
    hero_badge: "Performance Marketing • Digital Advertising • Data Analytics",
    hero_greeting: "Halo, Saya",
    hero_title: "Michael Vincentius",
    hero_roles: ["Digital Marketing Specialist", "Paid Ads Strategist", "Performance Marketer", "Data Analytics Enthusiast"],
    hero_desc: "Mahasiswa Digital Business di Cakrawala University dengan latar Computer & Network Engineering dan pengalaman lebih dari 3 tahun di retail sales serta operasional event. Berorientasi pada optimasi kampanye berbasis data, efisiensi anggaran iklan, dan pertumbuhan konversi.",
    hero_tagline: "ADAPTIF. SIGAP. BERORIENTASI EKSEKUSI.",
    hero_btn_contact: "Hubungi via WhatsApp",
    hero_btn_projects: "Lihat Studi Kasus",
    
    stat_experience: "Tahun Pengalaman",
    stat_experience_desc: "Retail Sales & Event Operations",
    stat_accuracy: "Akurasi Transaksi",
    stat_accuracy_desc: "Pencatatan Inventaris & Kasir",
    stat_grade: "Grade A",
    stat_grade_desc: "Academic Team Leader & Projects",
    stat_platforms: "Platform Utama",
    stat_platforms_desc: "Meta Ads & TikTok Ads Manager",
    
    about_title: "Profil & Keahlian",
    about_subtitle: "Kombinasi Rekayasa Jaringan, Penjualan Retail, dan Pertumbuhan Digital",
    about_p1: "Saya adalah mahasiswa Digital Business di Cakrawala University dengan latar belakang pendidikan Computer & Network Engineering. Fondasi teknis ini memberikan keunggulan analitis yang kuat dalam memahami arsitektur tracking, pixel implementation, algoritma bidding, dan pemrosesan data.",
    about_p2: "Didukung pengalaman lebih dari 3 tahun di dunia retail sales dan koordinasi operasional event berskala puluhan vendor, saya terbiasa memahami psikologi konsumen secara langsung, mengeksekusi strategi lapangan dengan cepat, dan menjaga integritas operasional hingga tingkat akurasi 100%.",
    about_badge_1: "Computer & Network Engineering Background",
    about_badge_2: "Consumer Behavior Research",
    about_badge_3: "High-Pressure Event Management",
    
    funnel_title: "Framework Strategi Digital Funnel",
    funnel_tofu: "Top of Funnel (Awareness)",
    funnel_tofu_desc: "Meta & TikTok Video Views, Brand Reach, Audience Engagement Research",
    funnel_mofu: "Middle of Funnel (Consideration)",
    funnel_mofu_desc: "Traffic Ads, Landing Page Views, A/B Testing Creative, Copywriting Hooks",
    funnel_bofu: "Bottom of Funnel (Conversion)",
    funnel_bofu_desc: "Purchase / Lead Conversion Tracking, Pixel Retargeting, ROAS & CPA Scaling",
    funnel_retention: "Retention & Reporting",
    funnel_retention_desc: "Data-driven Reporting, Cohort Analysis, Excel & Spreadsheet Dashboards",

    skills_title: "Keahlian & Alat Kerja",
    skills_subtitle: "Kapabilitas teruji dalam eksekusi Paid Advertising dan Data Intelligence",
    skill_cat_ads: "Digital Advertising",
    skill_cat_analytics: "Analytics & Metrik",
    skill_cat_tools: "Tools & Software",

    projects_title: "Proyek & Pencapaian",
    projects_subtitle: "Studi kasus riil perancangan paid ads dan kepemimpinan proyek akademis",
    project_1_tag: "Paid Advertising & Performance Marketing",
    project_1_title: "Digital Marketing & Paid Ads Campaign Project",
    project_1_institution: "Cakrawala University",
    project_1_point1: "Ad Campaign Management: Merancang campaign setting, audience targeting, budget allocation, dan bidding strategy di Meta Ads dan TikTok Ads berdasarkan riset Consumer Behavior.",
    project_1_point2: "Metrics Analytics & Optimization: Memantau CTR, CPM, CPA, ROAS, dan conversion rate untuk optimasi berbasis data berkelanjutan.",
    project_1_point3: "Creative & Audience A/B Testing: Menguji variasi visual creative ads, copywriting emosional/rasional, dan segmentasi audiens lookalike/interest.",
    project_1_point4: "Performance Reporting: Menyusun evaluasi kampanye dan rekomendasi strategis untuk meningkatkan traffic berkualitas, leads, dan konversi sales.",
    
    project_2_tag: "Leadership & Academic Project",
    project_2_title: "Academic Team Leader & Project Coordinator",
    project_2_period: "2026 – Sekarang",
    project_2_point1: "Memimpin tim proyek lintas disiplin: Digital Marketing, Data Analytics, dan UI/UX Design.",
    project_2_point2: "Mendelegasikan tugas berdasarkan matriks kompetensi anggota secara objektif.",
    project_2_point3: "Menjaga seluruh proyek utama selesai 100% tepat waktu dan konsisten mencapai Grade A.",

    experience_title: "Pengalaman Profesional",
    experience_subtitle: "Rekam jejak kepemimpinan, sales retail, dan operasional lapangan",
    exp_wedding_role: "Event Coordinator & Operational Specialist",
    exp_wedding_company: "Wedding Event Organizer",
    exp_wedding_type: "Freelance",
    exp_wedding_desc: "Menyusun run-down acara presisi, mengoordinasikan klien, keluarga, dan 10+ vendor eksternal, serta menangani alokasi tim, manajemen logistik, dan troubleshooting teknis saat acara berlangsung di bawah situasi intensif.",
    
    exp_gold_role: "Sales & Retail Representative",
    exp_gold_company: "Toko Emas Pulau Indah 21 Cilegon, Banten",
    exp_gold_period: "2022 – 2026 | Full Time",
    exp_gold_desc: "Melayani 20+ pelanggan retail setiap hari, menganalisis perilaku pembelian konsumen komoditas berharga tinggi, serta mengelola pencatatan inventaris dan transaksi keuangan dengan tingkat akurasi 100%.",

    exp_ramayana_role: "Counter Support Intern",
    exp_ramayana_company: "PT Ramayana Lestari Sentosa Tbk",
    exp_ramayana_period: "2021 | Internship",
    exp_ramayana_desc: "Menjalankan promosi penjualan langsung di lantai retail dan melaksanakan audit catatan stok barang masuk/keluar harian.",

    exp_school_role: "Division Chairperson",
    exp_school_company: "School Multimedia Division",
    exp_school_period: "2021 – 2022 | Organisasi",
    exp_school_desc: "Memimpin tim produksi konten digital promosi sekolah, mengelola infrastruktur broadcasting & live stream, serta merancang workflow editing video dan fotografi.",

    edu_title: "Pendidikan & Sertifikasi",
    edu_subtitle: "Fondasi akademis, kurikulum analitika digital, dan sertifikasi bahasa internasional",
    edu_degree: "Bachelor of Science in Digital Business",
    edu_uni: "Cakrawala University — Jakarta, Indonesia",
    edu_period: "2026 – Sekarang",
    edu_coursework_title: "Kurikulum Relevan yang Dipelajari:",
    
    cert_title: "Sertifikasi Bahasa Internasional",
    cert_jft: "Japan Foundation Test for Basic Japanese (JFT-Basic)",
    cert_level: "Level A2.1 | Skor: 175 / 250",
    cert_desc: "Kemampuan komunikasi operasional bahasa Jepang yang teruji secara resmi oleh The Japan Foundation.",
    
    lang_title: "Kemampuan Bahasa",
    lang_id: "Bahasa Indonesia",
    lang_id_lvl: "Penutur Asli (Native)",
    lang_en: "Bahasa Inggris",
    lang_en_lvl: "Tingkat Dasar (Basic / Elementary)",
    lang_jp: "Bahasa Jepang",
    lang_jp_lvl: "Tingkat Dasar Berlisensi (Basic - Certified A2.1)",

    contact_title: "Kontak",
    contact_subtitle: "Terbuka untuk posisi Digital Marketing, Performance Ads Specialist, dan Proyek Konsultasi",
    contact_location: "Cilegon, Banten, Indonesia",
    contact_phone: "+62 851-8065-4988",
    contact_email: "Michaelvincentius17@gmail.com",
    contact_linkedin: "linkedin.com/in/michaelvincentius",
    form_name: "Nama Lengkap Anda",
    form_email: "Alamat Email / No. WhatsApp",
    form_service: "Layanan / Subjek Diskusi",
    form_msg: "Pesan atau Detail Proyek",
    form_btn_send: "Kirim Pesan via WhatsApp",
    form_btn_email: "Kirim via Email",
    modal_pdf_title: "Dokumen Portofolio Asli Michael Vincentius",
    modal_close: "Tutup Preview",
    footer_text: "© 2026 Michael Vincentius. All Rights Reserved. Portofolio Profesional Digital Marketing & Analytics."
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    btn_download_cv: "Download PDF Portfolio",
    btn_view_pdf: "View Original PDF",
    
    hero_badge: "Performance Marketing • Digital Advertising • Data Analytics",
    hero_greeting: "Hello, I am",
    hero_title: "Michael Vincentius",
    hero_roles: ["Digital Marketing Specialist", "Paid Ads Strategist", "Performance Marketer", "Data Analytics Enthusiast"],
    hero_desc: "Digital Business student at Cakrawala University with a technical foundation in Computer & Network Engineering and over 3 years of hands-on experience in retail sales and event operations. Dedicated to data-backed paid campaign optimization, budget efficiency, and scalable conversion growth.",
    hero_tagline: "ADAPTIVE. AGILE. EXECUTION-ORIENTED.",
    hero_btn_contact: "Contact via WhatsApp",
    hero_btn_projects: "Explore Case Studies",
    
    stat_experience: "Years Experience",
    stat_experience_desc: "Retail Sales & Event Operations",
    stat_accuracy: "Transaction Accuracy",
    stat_accuracy_desc: "Inventory & Cashier Records",
    stat_grade: "Grade A",
    stat_grade_desc: "Academic Team Leadership & Ads Project",
    stat_platforms: "Key Platforms",
    stat_platforms_desc: "Meta Ads & TikTok Ads Manager",
    
    about_title: "Profile & Core Capabilities",
    about_subtitle: "Bridging Network Engineering, Retail Sales Precision, and Digital Growth",
    about_p1: "I am a Digital Business undergraduate at Cakrawala University backed by formal training in Computer & Network Engineering. This technical foundation gives me a decisive analytical edge in understanding pixel integrations, tracking architecture, bidding algorithms, and funnel data flows.",
    about_p2: "Coupled with 3+ years in high-volume retail sales and large-scale wedding event coordination managing 10+ external vendors, I understand real-world buyer psychology, act swiftly under pressure, and uphold 100% financial and inventory transactional accuracy.",
    about_badge_1: "Computer & Network Engineering Background",
    about_badge_2: "Consumer Behavior Research",
    about_badge_3: "High-Pressure Event Management",
    
    funnel_title: "Digital Marketing Funnel Framework",
    funnel_tofu: "Top of Funnel (Awareness)",
    funnel_tofu_desc: "Meta & TikTok Video Views, Brand Reach, Audience Interest & Demographics",
    funnel_mofu: "Middle of Funnel (Consideration)",
    funnel_mofu_desc: "High-Intent Traffic Ads, Landing Page Views, A/B Testing Creative Angles",
    funnel_bofu: "Bottom of Funnel (Conversion)",
    funnel_bofu_desc: "Purchase / Lead Pixel Tracking, Custom Audiences Retargeting, ROAS & CPA Scaling",
    funnel_retention: "Retention & Reporting",
    funnel_retention_desc: "Data-driven Reporting, Cohort Analysis, Advanced Excel & Sheets Diagnostics",

    skills_title: "Skills & Tech Stack",
    skills_subtitle: "Proven capabilities across paid advertising platforms and analytics intelligence",
    skill_cat_ads: "Digital Advertising",
    skill_cat_analytics: "Analytics & Metrics",
    skill_cat_tools: "Tools & Software",

    projects_title: "Projects & Achievements",
    projects_subtitle: "Real-world campaign execution and proven academic leadership",
    project_1_tag: "Paid Advertising & Performance Marketing",
    project_1_title: "Digital Marketing & Paid Ads Campaign Project",
    project_1_institution: "Cakrawala University",
    project_1_point1: "Ad Campaign Management: Designed full campaign architecture, demographic/interest targeting, budget allocation, and bidding strategies on Meta Ads and TikTok Ads grounded in Consumer Behavior research.",
    project_1_point2: "Metrics Analytics & Optimization: Actively tracked CTR, CPM, CPA, ROAS, and conversion rates to drive iterative, data-backed ad set refinements.",
    project_1_point3: "Creative & Audience A/B Testing: Split-tested ad video creatives, persuasive copywriting hooks, and audience segments (broad, lookalike, interest-based).",
    project_1_point4: "Performance Reporting: Developed structured campaign review decks and actionable data recommendations to maximize traffic quality, leads, and sales.",
    
    project_2_tag: "Leadership & Academic Project",
    project_2_title: "Academic Team Leader & Project Coordinator",
    project_2_period: "2026 – Present",
    project_2_point1: "Led interdisciplinary student teams across Digital Marketing, Data Analytics, and UI/UX Design.",
    project_2_point2: "Delegated core milestones matching team competencies with agile accountability.",
    project_2_point3: "Completed all capstone milestones 100% on schedule while securing top-tier Grade A honors.",

    experience_title: "Professional Experience",
    experience_subtitle: "Hands-on track record in high-stakes event coordination, retail sales, and digital production",
    exp_wedding_role: "Event Coordinator & Operational Specialist",
    exp_wedding_company: "Wedding Event Organizer",
    exp_wedding_type: "Freelance",
    exp_wedding_desc: "Developed minute-by-minute run-down itineraries, synchronized clients, families, and 10+ external vendors, while managing personnel deployment, logistics, and real-time technical troubleshooting under high-stress event environments.",
    
    exp_gold_role: "Sales & Retail Representative",
    exp_gold_company: "Toko Emas Pulau Indah 21 Cilegon, Banten",
    exp_gold_period: "2022 – 2026 | Full Time",
    exp_gold_desc: "Consulted and closed sales with 20+ retail buyers daily, analyzed purchasing patterns for high-value commodities, and maintained inventory and cash reconciliation with 100% ledger accuracy.",

    exp_ramayana_role: "Counter Support Intern",
    exp_ramayana_company: "PT Ramayana Lestari Sentosa Tbk",
    exp_ramayana_period: "2021 | Internship",
    exp_ramayana_desc: "Executed in-store promotional sales campaigns and performed daily audits for incoming and outgoing department merchandise.",

    exp_school_role: "Division Chairperson",
    exp_school_company: "School Multimedia Division",
    exp_school_period: "2021 – 2022 | Organization",
    exp_school_desc: "Spearheaded promotional school digital content production, operated live broadcasting systems, and established video/photo post-production editing pipelines.",

    edu_title: "Education & Certifications",
    edu_subtitle: "Academic foundation, data business curriculum, and certified international languages",
    edu_degree: "Bachelor of Science in Digital Business",
    edu_uni: "Cakrawala University — Jakarta, Indonesia",
    edu_period: "2026 – Present",
    edu_coursework_title: "Key Relevant Coursework:",
    
    cert_title: "International Language Certification",
    cert_jft: "Japan Foundation Test for Basic Japanese (JFT-Basic)",
    cert_level: "Level A2.1 | Score: 175 / 250",
    cert_desc: "Certified Japanese conversational and practical communication benchmark issued by The Japan Foundation.",
    
    lang_title: "Language Proficiencies",
    lang_id: "Indonesian",
    lang_id_lvl: "Native Proficiency",
    lang_en: "English",
    lang_en_lvl: "Elementary / Basic Professional",
    lang_jp: "Japanese",
    lang_jp_lvl: "Basic Licensed (Certified JFT A2.1)",

    contact_title: "Let's Collaborate",
    contact_subtitle: "Open for Performance Marketing roles, Paid Ads Management, and Strategic Consultations",
    contact_location: "Cilegon, Banten, Indonesia",
    contact_phone: "+62 851-8065-4988",
    contact_email: "Michaelvincentius17@gmail.com",
    contact_linkedin: "linkedin.com/in/michaelvincentius",
    form_name: "Your Full Name",
    form_email: "Email Address / WhatsApp No.",
    form_service: "Service / Inquired Topic",
    form_msg: "Message or Project Brief",
    form_btn_send: "Send Message via WhatsApp",
    form_btn_email: "Send via Email",
    modal_pdf_title: "Michael Vincentius Original Portfolio Document",
    modal_close: "Close Preview",
    footer_text: "© 2026 Michael Vincentius. All Rights Reserved. Digital Marketing & Performance Portfolio."
  }
};

let currentLang = 'id';

// ==========================================
// 2. THEME & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initTypewriter();
  initCharts();
  initMobileMenu();
  initScrollSpy();
  initContactForm();
});

// Theme Initialization (Pure Elegant White Theme)
function initTheme() {
  document.documentElement.classList.remove("dark");
}

// Language Initialization (Bahasa Indonesia)
function initLanguage() {
  currentLang = 'id';
  setLanguage('id');
}

function setLanguage(lang) {
  currentLang = lang;

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      elem.setAttribute("placeholder", translations[lang][key]);
    }
  });

  initTypewriter();
}

// ==========================================
// 3. TYPEWRITER EFFECT
// ==========================================
let typewriterTimeout = null;
function initTypewriter() {
  const typewriterElem = document.getElementById("typewriter-text");
  if (!typewriterElem) return;

  if (typewriterTimeout) clearTimeout(typewriterTimeout);

  const roles = translations[currentLang].hero_roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    typewriterTimeout = setTimeout(type, speed);
  }

  type();
}

// ==========================================
// 4. CHART.JS VISUALIZATIONS
// ==========================================
let abTestChart = null;
let funnelChart = null;

function initCharts() {
  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#94A3B8" : "#475569";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(11, 25, 44, 0.06)";

  // Chart 1: A/B Testing Case Study
  const ctxAB = document.getElementById("abTestChart");
  if (ctxAB && typeof Chart !== "undefined") {
    abTestChart = new Chart(ctxAB, {
      type: "bar",
      data: {
        labels: ["Baseline (Set 1)", "Variant A (Emotional)", "Variant B (Rational)", "Winner (Optimized)"],
        datasets: [
          {
            label: "ROAS (x)",
            data: [1.8, 2.7, 3.4, 4.6],
            backgroundColor: "#00A896",
            borderColor: "#008779",
            borderWidth: 1.5,
            borderRadius: 6,
            yAxisID: "y"
          },
          {
            label: "CTR (%)",
            data: [1.2, 2.1, 2.9, 3.8],
            backgroundColor: "#0284C7",
            borderColor: "#0369A1",
            borderWidth: 1.5,
            borderRadius: 6,
            yAxisID: "y1"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif", weight: 600 } }
          },
          tooltip: {
            backgroundColor: "#0B192C",
            titleColor: "#00D2B4",
            bodyColor: "#F8FAFC",
            borderColor: "rgba(0, 168, 150, 0.3)",
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
          },
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: { display: true, text: "ROAS (x)", color: "#00A896" },
            grid: { color: gridColor },
            ticks: { color: textColor }
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            title: { display: true, text: "CTR (%)", color: "#0284C7" },
            grid: { drawOnChartArea: false },
            ticks: { color: textColor }
          }
        }
      }
    });
  }

  // Chart 2: Full Funnel Conversion Breakdown
  const ctxFunnel = document.getElementById("funnelChart");
  if (ctxFunnel && typeof Chart !== "undefined") {
    funnelChart = new Chart(ctxFunnel, {
      type: "doughnut",
      data: {
        labels: ["Awareness (Impressions)", "Traffic (Landing Page Views)", "Interest (Engaged Clicks)", "Conversion (Sales/Leads)"],
        datasets: [{
          data: [65000, 12500, 3800, 940],
          backgroundColor: [
            "#0B192C",
            "#0284C7",
            "#00A896",
            "#10B981"
          ],
          borderColor: isDark ? "#070D18" : "#ffffff",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: { color: textColor, font: { family: "'Plus Jakarta Sans', sans-serif" } }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return ` ${context.label}: ${context.raw.toLocaleString("id-ID")} users`;
              }
            }
          }
        },
        cutout: "68%"
      }
    });
  }
}

function updateChartThemes(isDark) {
  const textColor = isDark ? "#94A3B8" : "#475569";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(11, 25, 44, 0.06)";

  if (abTestChart) {
    abTestChart.options.plugins.legend.labels.color = textColor;
    abTestChart.options.scales.x.ticks.color = textColor;
    abTestChart.options.scales.x.grid.color = gridColor;
    abTestChart.options.scales.y.ticks.color = textColor;
    abTestChart.options.scales.y.grid.color = gridColor;
    abTestChart.options.scales.y1.ticks.color = textColor;
    abTestChart.update();
  }

  if (funnelChart) {
    funnelChart.options.plugins.legend.labels.color = textColor;
    funnelChart.data.datasets[0].borderColor = isDark ? "#070D18" : "#ffffff";
    funnelChart.update();
  }
}

// ==========================================
// 5. CONTACT FORM & WHATSAPP
// ==========================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const contact = document.getElementById("form-email").value.trim();
    const service = document.getElementById("form-service").value;
    const msg = document.getElementById("form-message").value.trim();

    if (!name || !msg) {
      alert(currentLang === 'id' ? "Mohon lengkapi nama dan pesan Anda." : "Please fill out your name and message.");
      return;
    }

    const text = `Halo Michael Vincentius, nama saya *${name}* (${contact}).\n\n*Topik/Layanan:* ${service}\n*Pesan:* ${msg}\n\n(Dikirim dari Portofolio Website)`;
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6285180654988?text=${encodedText}`;

    window.open(waUrl, "_blank");
    showToast(currentLang === 'id' ? "Membuka WhatsApp..." : "Opening WhatsApp...");
  });
}

function sendViaEmail() {
  const name = document.getElementById("form-name")?.value.trim() || "";
  const contact = document.getElementById("form-email")?.value.trim() || "";
  const service = document.getElementById("form-service")?.value || "Inquiry";
  const msg = document.getElementById("form-message")?.value.trim() || "";

  const subject = encodeURIComponent(`Inquiry Portofolio: ${service} - dari ${name}`);
  const body = encodeURIComponent(`Halo Michael Vincentius,\n\nNama: ${name}\nKontak: ${contact}\nLayanan: ${service}\n\nDetail:\n${msg}`);

  window.location.href = `mailto:Michaelvincentius17@gmail.com?subject=${subject}&body=${body}`;
}

// Copy to Clipboard Utility
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || (currentLang === 'id' ? "Berhasil disalin ke clipboard!" : "Copied to clipboard!"));
  }).catch(() => {
    prompt("Copy info:", text);
  });
}

function showToast(msg) {
  const existing = document.getElementById("mv-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "mv-toast";
  toast.className = "fixed bottom-6 right-6 z-50 bg-[#0B192C] text-white border border-[#00A896]/50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3";
  toast.innerHTML = `<i class="fas fa-check-circle text-[#00D2B4] text-lg"></i><span class="font-semibold text-sm">${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease";
    setTimeout(() => toast.remove(), 500);
  }, 2800);
}

// ==========================================
// 6. MODAL PDF HANDLER
// ==========================================
function openPdfModal() {
  const modal = document.getElementById("pdf-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closePdfModal() {
  const modal = document.getElementById("pdf-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "auto";
  }
}

// ==========================================
// 7. MOBILE MENU & SCROLLSPY
// ==========================================
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  const backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    if (backToTop) {
      if (scrollY > 500) {
        backToTop.classList.remove("opacity-0", "pointer-events-none");
        backToTop.classList.add("opacity-100");
      } else {
        backToTop.classList.add("opacity-0", "pointer-events-none");
        backToTop.classList.remove("opacity-100");
      }
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("text-[#00A896]", "font-bold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-[#00A896]", "font-bold");
          }
        });
      }
    });
  });
}
