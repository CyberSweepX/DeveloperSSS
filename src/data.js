export const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'az', name: 'Azərbaycan', flag: '🇦🇿' },
];

export const countries = [
    { code: 'GLOBAL', name: 'Global', flag: '🌍' },
    { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
    { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
];

export const ui = {
    en: {
        welcome: "Welcome",
        heroTitle: "What do you want to learn today?",
        heroSubtitle: "Your ultimate guide to the tech world.",
        searchPlaceholder: "Search for Python, Cyber Security, Jobs...",
        tabs: { roadmap: "Roadmap", resources: "Resources", jobs: "Jobs", faq: "FAQ" },
        comingSoon: "Content coming soon...",
        globalFaq: "Global FAQ",
        globalResources: "Global Resources",
        faqTitle: "Frequently Asked Questions",
        faqSubtitle: "Common questions about software development and security."
    },
    tr: {
        welcome: "Hoş Geldiniz",
        heroTitle: "Bugün ne öğrenmek istiyorsun?",
        heroSubtitle: "Teknoloji dünyasındaki nihai rehberiniz.",
        searchPlaceholder: "Örn: Python, Siber Güvenlik...",
        tabs: { roadmap: "Yol Haritası", resources: "Kaynaklar", jobs: "İş İlanları", faq: "SSS" },
        comingSoon: "İçerik yakında eklenecek...",
        globalFaq: "Genel SSS",
        globalResources: "Genel Kaynaklar",
        faqTitle: "Sıkça Sorulan Sorular",
        faqSubtitle: "Yazılım dünyası ve güvenlik hakkında genel sorular."
    },
    az: {
        welcome: "Xoş Gəlmisiniz",
        heroTitle: "Bu gün nə öyrənmək istəyirsən?",
        heroSubtitle: "Texnologiya dünyasında əsas bələdçiniz.",
        searchPlaceholder: "Məsələn: Python, Kiber Təhlükəsizlik...",
        tabs: { roadmap: "Yol Xəritəsi", resources: "Resurslar", jobs: "İş Elanları", faq: "Suallar" },
        comingSoon: "Məzmun tezliklə əlavə olunacaq...",
        globalFaq: "Ümumi SSS",
        globalResources: "Ümumi Resurslar",
        faqTitle: "Tez-tez Verilən Suallar",
        faqSubtitle: "Proqramlaşdırma və təhlükəsizlik haqqında ümumi suallar."
    }
};

export const categories = [
    {
        id: 'web-dev',
        icon: '💻',
        color: 'from-blue-500 to-cyan-500',
        title: { en: 'Web Development', tr: 'Web Geliştirme', az: 'Veb İnkişafı' },
        desc: { en: 'Frontend, Backend, Full Stack', tr: 'Frontend, Backend, Full Stack', az: 'Frontend, Backend, Full Stack' },
        subCategories: [
            { id: 'frontend', title: { en: 'Frontend', tr: 'Ön Yüz (Frontend)', az: 'Frontend' } },
            { id: 'backend', title: { en: 'Backend', tr: 'Arka Yüz (Backend)', az: 'Backend' } },
            { id: 'fullstack', title: { en: 'Full Stack', tr: 'Full Stack', az: 'Full Stack' } }
        ]
    },
    {
        id: 'mobile-dev',
        icon: '📱',
        color: 'from-purple-500 to-pink-500',
        title: { en: 'Mobile Development', tr: 'Mobil Geliştirme', az: 'Mobil İnkişafı' },
        desc: { en: 'iOS, Android, Cross-Platform', tr: 'iOS, Android, Cross-Platform', az: 'iOS, Android, Cross-Platform' },
        subCategories: [
            { id: 'ios', title: { en: 'Native iOS', tr: 'Native iOS', az: 'Native iOS' } },
            { id: 'android', title: { en: 'Native Android', tr: 'Native Android', az: 'Native Android' } },
            { id: 'cross-platform', title: { en: 'Cross-Platform', tr: 'Hibrit (Cross-Platform)', az: 'Hibrit' } }
        ]
    },
    {
        id: 'data-ai',
        icon: '📊',
        color: 'from-emerald-500 to-green-500',
        title: { en: 'Data & AI', tr: 'Veri ve Yapay Zeka', az: 'Məlumat və AI' },
        desc: { en: 'Data Science, ML, AI', tr: 'Veri Bilimi, Makine Öğrenmesi, AI', az: 'Data Science, ML, AI' },
        subCategories: [
            { id: 'data-science', title: { en: 'Data Science', tr: 'Veri Bilimi', az: 'Data Science' } },
            { id: 'ml', title: { en: 'Machine Learning', tr: 'Makine Öğrenmesi', az: 'Maşın Öyrənməsi' } },
            { id: 'deep-learning', title: { en: 'Deep Learning & AI', tr: 'Derin Öğrenme & AI', az: 'Dərin Öyrənmə & AI' } },
            { id: 'big-data', title: { en: 'Big Data', tr: 'Büyük Veri', az: 'Big Data' } }
        ]
    },
    {
        id: 'infra-sec',
        icon: '🔒',
        color: 'from-red-500 to-orange-500',
        title: { en: 'Infrastructure & Security', tr: 'Altyapı ve Güvenlik', az: 'İnfrastruktur və Təhlükəsizlik' },
        desc: { en: 'Cyber Security, DevOps, Cloud', tr: 'Siber Güvenlik, DevOps, Bulut', az: 'Kiber Təhlükəsizlik, DevOps, Cloud' },
        subCategories: [
            { id: 'cyber-security', title: { en: 'Cyber Security', tr: 'Siber Güvenlik', az: 'Kiber Təhlükəsizlik' } },
            { id: 'network', title: { en: 'Network Engineering', tr: 'Ağ Mühendisliği', az: 'Şəbəkə Mühəndisliyi' } },
            { id: 'devops', title: { en: 'DevOps Engineering', tr: 'DevOps Mühendisliği', az: 'DevOps Mühəndisliyi' } },
            { id: 'cloud', title: { en: 'Cloud Computing', tr: 'Bulut Bilişim', az: 'Bulud Hesablamaları' } }
        ]
    },
    {
        id: 'game-dev',
        icon: '🎮',
        color: 'from-indigo-500 to-violet-500',
        title: { en: 'Game Development', tr: 'Oyun Geliştirme', az: 'Oyun İnkişafı' },
        desc: { en: 'Game Programming, Graphics', tr: 'Oyun Programlama, Grafikler', az: 'Oyun Proqramlaşdırma, Qrafika' },
        subCategories: [
            { id: 'game-programming', title: { en: 'Game Programming', tr: 'Oyun Programlama', az: 'Oyun Proqramlaşdırma' } },
            { id: 'graphics-programming', title: { en: 'Graphics Programming', tr: 'Grafik Programlama', az: 'Qrafik Proqramlaşdırma' } }
        ]
    },
    {
        id: 'embedded-iot',
        icon: '🔌',
        color: 'from-yellow-500 to-amber-500',
        title: { en: 'Embedded & IoT', tr: 'Gömülü Sistemler & IoT', az: 'Gömülü Sistemlər & IoT' },
        desc: { en: 'Microcontrollers, IoT', tr: 'Mikrodenetleyiciler, IoT', az: 'Mikrokontrollerlər, IoT' },
        subCategories: [
            { id: 'embedded', title: { en: 'Embedded Systems', tr: 'Gömülü Sistemler', az: 'Gömülü Sistemlər' } },
            { id: 'iot', title: { en: 'IoT', tr: 'Nesnelerin İnterneti (IoT)', az: 'Əşyaların İnterneti (IoT)' } }
        ]
    },
    {
        id: 'emerging',
        icon: '🔮',
        color: 'from-fuchsia-500 to-purple-500',
        title: { en: 'Emerging Tech', tr: 'Geleceğin Teknolojileri', az: 'Gələcək Texnologiyalar' },
        desc: { en: 'Blockchain, Web3, AR/VR', tr: 'Blockchain, Web3, AR/VR', az: 'Blockchain, Web3, AR/VR' },
        subCategories: [
            { id: 'blockchain', title: { en: 'Blockchain & Web3', tr: 'Blockchain & Web3', az: 'Blockchain & Web3' } },
            { id: 'ar-vr', title: { en: 'AR / VR', tr: 'Artırılmış & Sanal Gerçeklik', az: 'Artırılmış & Virtual Reallıq' } }
        ]
    },
    {
        id: 'qa-test',
        icon: '🧪',
        color: 'from-teal-500 to-emerald-500',
        title: { en: 'QA & Testing', tr: 'Kalite & Test', az: 'Keyfiyyət & Test' },
        desc: { en: 'Automation, Manual Testing', tr: 'Otomasyon, Manuel Test', az: 'Avtomatlaşdırma, Manuel Test' },
        subCategories: [
            { id: 'qa-automation', title: { en: 'QA Automation', tr: 'QA Otomasyon', az: 'QA Avtomatlaşdırma' } }
        ]
    }
];

// Initial Empty Data Structure
export const contentData = {};

categories.forEach(cat => {
    cat.subCategories.forEach(sub => {
        contentData[sub.id] = {
            roadmap: { en: [], tr: [], az: [] },
            resources: { items: [] },
            jobs: { TR: [], GLOBAL: [], AZ: [] },
            faq: { en: [], tr: [], az: [] }
        };
    });
});

// --- 🚀 VERİ GİRİŞ ALANI ---
// Kendi verilerine aşağıdaki şablonları kopyalayarak ekleyebilirsin.
// Her id (örn: 'frontend', 'cyber-security') için veri girebilirsin.
contentData['android'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Giriş ve Kurulum", items: ["Android Studio Kurulumu", "JDK & SDK Yönetimi", "Emülatör (AVD) Ayarları"], status: "start" },
            { title: "Kotlin Dili (Modern Standart)", items: ["Değişkenler (val/var)", "Null Safety (!! ?)", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Modern UI: Jetpack Compose", items: ["Composable Functions", "State Management (Remember/State)", "Scaffold & Layouts", "Material Design 3"], status: "mid" },
            { title: "Legacy UI: XML (Eski Projeler)", items: ["View Binding", "ConstraintLayout", "RecyclerView & Adapters", "Activity/Fragment Lifecycle"], status: "mid" },
            { title: "Veri ve Ağ (Networking)", items: ["Retrofit (API İstekleri)", "Coroutines & Flow (Asenkron)", "Room Database (Yerel Veri)", "JSON Parsing (Gson/Moshi)"], status: "mid" },
            { title: "Mimari (Architecture)", items: ["MVVM (Model-View-ViewModel)", "Clean Architecture", "Dependency Injection (Hilt/Koin)", "Repository Pattern"], status: "advanced" },
            { title: "Arka Plan & Servisler", items: ["WorkManager (Zamanlı İşler)", "Broadcast Receivers", "Notifications", "Foreground Services"], status: "expert" },
            { title: "Yayınlama (Deployment)", items: ["Google Play Console", "App Bundles (.aab)", "Keystore & İmzalama", "Firebase Crashlytics"], status: "expert" }
        ],
        az: [
            { title: "Giriş və Quraşdırma", items: ["Android Studio Quraşdırılması", "JDK & SDK İdarəetməsi", "Emulyator (AVD) Tənzimləmələri"], status: "start" },
            { title: "Kotlin Dili (Müasir Standart)", items: ["Dəyişənlər (val/var)", "Null Safety", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Müasir UI: Jetpack Compose", items: ["Composable Functions", "State İdarəetməsi", "Scaffold & Layouts", "Material Design 3"], status: "mid" },
            { title: "Köhnə UI: XML (Eski Layihələr)", items: ["View Binding", "ConstraintLayout", "RecyclerView", "Həyat Dövrü (Lifecycle)"], status: "mid" },
            { title: "Məlumat və Şəbəkə", items: ["Retrofit (API İstəkləri)", "Coroutines & Flow", "Room Database", "JSON Parsing"], status: "mid" },
            { title: "Memarlıq (Architecture)", items: ["MVVM", "Clean Architecture", "Dependency Injection (Hilt)", "Repository Pattern"], status: "advanced" },
            { title: "Arxa Plan & Servislər", items: ["WorkManager", "Broadcast Receivers", "Bildirişlər", "Foreground Services"], status: "expert" },
            { title: "Yayımlama", items: ["Google Play Console", "App Bundles (.aab)", "İmzalama (Signing)", "Firebase Crashlytics"], status: "expert" }
        ],
        en: [
            { title: "Intro & Setup", items: ["Android Studio Setup", "JDK & SDK Manager", "Emulator (AVD) Config"], status: "start" },
            { title: "Kotlin Language", items: ["Variables (val/var)", "Null Safety", "Data Classes", "Higher-Order Functions"], status: "start" },
            { title: "Modern UI: Jetpack Compose", items: ["Composable Functions", "State Hoisting", "Scaffold & Modifiers", "Material Design 3"], status: "mid" },
            { title: "Legacy UI: XML", items: ["View Binding", "ConstraintLayout", "RecyclerView & Adapters", "Activity/Fragment Lifecycle"], status: "mid" },
            { title: "Data & Networking", items: ["Retrofit (REST API)", "Coroutines & Flow", "Room Database (SQL)", "Serialization (Moshi)"], status: "mid" },
            { title: "Architecture", items: ["MVVM Pattern", "Clean Architecture", "Dependency Injection (Hilt)", "Repository Pattern"], status: "advanced" },
            { title: "Background Tasks", items: ["WorkManager", "Broadcast Receivers", "Push Notifications", "Services"], status: "expert" },
            { title: "Deployment", items: ["Google Play Console", "App Bundles (.aab)", "Signing & Keystore", "CI/CD (Bitrise/GitHub)"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube & Eğitim
            { type: 'course', title: 'Android Basics with Compose', url: 'https://developer.android.com/courses/android-basics-compose/course', desc: 'Google\'ın kendi hazırladığı, sertifikalı ve ücretsiz efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'youtube', title: 'Philipp Lackner', url: 'https://youtube.com/@PhilippLackner', desc: 'Modern Android (Kotlin/Compose) üzerine dünyadaki en iyi ve en güncel kanal.', lang: 'en' },
            { type: 'youtube', title: 'Stevdza-San', url: 'https://youtube.com/@StevdzaSan', desc: 'Görsel ağırlıklı, hızlı ve pratik Android dersleri.', lang: 'en' },
            { type: 'course', title: 'Atıl Samancıoğlu', url: 'https://www.udemy.com/user/atilsamancioglu/', desc: 'Udemy\'de Türkçe Android eğitimi denince akla gelen ilk isim.', lang: 'tr' },

            // Dokümantasyon & Araçlar
            { type: 'doc', title: 'Android Developer Docs', url: 'https://developer.android.com/docs', desc: 'Android\'in resmi kutsal kitabı. Her şey burada.', lang: 'en' },
            { type: 'tool', title: 'Android Studio', url: 'https://developer.android.com/studio', desc: 'Android geliştirmek için Google\'ın resmi IDE\'si.', lang: 'global' },
            { type: 'tool', title: 'Kotlin Playground', url: 'https://play.kotlinlang.org', desc: 'Android Studio kurmadan tarayıcıda Kotlin kodu yazıp test edin.', lang: 'global' },
            { type: 'tool', title: 'Firebase', url: 'https://firebase.google.com', desc: 'Backend yazmadan Auth, Veritabanı ve Bildiriş işlemleri için Google servisi.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/android', desc: 'Android geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Teknokent İlanları"],
            top_skills: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Git"],
            avg_salary: "Junior: 35k-50k TL | Mid: 65k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık & Telecom"],
            top_skills: ["Kotlin", "Java (Legacy)", "Android SDK", "REST API"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Android Jobs", "RemoteOK", "Upwork"],
            top_skills: ["Kotlin Multiplatform", "CI/CD", "Unit Testing", "Hilt"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Java mı yoksa Kotlin mi öğrenmeliyim?",
                az: "Java yoxsa Kotlin öyrənməliyəm?",
                en: "Should I learn Java or Kotlin?"
            },
            a: {
                tr: "Kesinlikle Kotlin. Google 2019'da Kotlin'i resmi dil ilan etti. Modern işlerin %95'i Kotlin ile yapılıyor. Java sadece çok eski projelerin bakımı için gereklidir.",
                az: "Mütləq Kotlin. Google 2019-da Kotlin-i rəsmi dil elan etdi. Müasir işlərin 95%-i Kotlin ilə görülür. Java yalnız çox köhnə layihələrin baxımı üçün lazımdır.",
                en: "Definitely Kotlin. Google announced it as the preferred language in 2019. 95% of modern jobs require Kotlin. Java is only needed for maintaining legacy code."
            }
        },
        {
            id: 2,
            q: {
                tr: "Bilgisayarım Android Studio'yu kaldırır mı?",
                az: "Kompüterim Android Studio-nu açar?",
                en: "Can my computer run Android Studio?"
            },
            a: {
                tr: "Android Studio bir RAM canavarıdır. Rahat çalışmak için en az 16GB RAM önerilir. 8GB ile çalışır ama emülatör açınca çok kasar. SSD disk zorunludur.",
                az: "Android Studio bir RAM canavarıdır. Rahat işləmək üçün ən azı 16GB RAM tövsiyə olunur. 8GB ilə işləyir, amma emulyator açanda çox donur. SSD disk məcburidir.",
                en: "Android Studio is a RAM monster. Minimum 16GB RAM is recommended for smooth work. 8GB works but lags heavily with the emulator. SSD is mandatory."
            }
        },
        {
            id: 3,
            q: {
                tr: "XML mi yoksa Jetpack Compose mu?",
                az: "XML yoxsa Jetpack Compose?",
                en: "XML or Jetpack Compose?"
            },
            a: {
                tr: "Yolun başındaysanız Jetpack Compose. Bu geleceğin teknolojisidir (Flutter/SwiftUI benzeri). Ancak iş ilanlarında hala XML (eski yapı) bilgisi de istenmektedir.",
                az: "Yolun başındasınızsa Jetpack Compose. Bu gələcəyin texnologiyasıdır. Lakin iş elanlarında hələ də XML (köhnə struktur) biliyi tələb olunur.",
                en: "If you are starting fresh, Jetpack Compose. It is the future. However, XML knowledge is still required in many job postings for legacy codebases."
            }
        },
        {
            id: 4,
            q: {
                tr: "Uygulamayı mağazaya yüklemek ne kadar?",
                az: "Tətbiqi mağazaya yükləmək neçəyədir?",
                en: "How much does it cost to publish an app?"
            },
            a: {
                tr: "Google Play Store için tek seferlik 25$ ödersiniz ve ömür boyu geliştirici hesabınız olur. (Apple'da bu her yıl 99$'dır).",
                az: "Google Play Store üçün birdəfəlik 25$ ödəyirsiniz və ömürlük tərtibatçı hesabınız olur. (Apple-da bu hər il 99$-dır).",
                en: "You pay a one-time fee of $25 for a Google Play Developer account, valid for a lifetime. (Unlike Apple's $99/year)."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sadece Android öğrensem iş bulabilir miyim?",
                az: "Sadəcə Android öyrənsəm iş tapa bilərəm?",
                en: "Can I find a job knowing only Android?"
            },
            a: {
                tr: "Evet. Özellikle Türkiye ve Azerbaycan gibi ülkelerde Android cihaz kullanımı iOS'tan çok daha fazladır (Pazar payı %70+). Bu da yerel pazarda çok fazla iş imkanı demektir.",
                az: "Bəli. Xüsusilə Türkiyə və Azərbaycan kimi ölkələrdə Android cihaz istifadəsi iOS-dan daha çoxdur. Bu da yerli bazarda çoxlu iş imkanı deməkdir.",
                en: "Yes. Especially in regions like TR/AZ, Android market share is huge (70%+). This means plenty of job opportunities in the local market."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kotlin Multiplatform (KMP) nedir?",
                az: "Kotlin Multiplatform (KMP) nədir?",
                en: "What is Kotlin Multiplatform (KMP)?"
            },
            a: {
                tr: "KMP, Kotlin ile yazdığınız kodun (iş mantığının) hem Android hem iOS'ta çalışmasını sağlayan yeni bir teknolojidir. Geleceği çok parlaktır, ileri seviyede öğrenilmelidir.",
                az: "KMP, Kotlin ilə yazdığınız kodun həm Android, həm də iOS-da işləməsini təmin edən yeni texnologiyadır. Gələcəyi çox parlaqdır.",
                en: "KMP allows sharing Kotlin code (business logic) between Android and iOS. It has a very bright future and should be learned at an advanced level."
            }
        }
    ]
};

contentData['devops'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temeller (Ön Koşul)", items: ["Linux Terminal (Bash)", "Ağ Bilgisi (DNS, HTTP, OSI)", "Git & Versiyon Kontrol", "Vim/Nano Editörleri"], status: "start" },
            { title: "Programlama Dili", items: ["Python (Scripting için)", "Go (Golang - Cloud Native araçlar için)", "Bash Scripting"], status: "start" },
            { title: "Sunucu Yönetimi", items: ["Linux Yönetimi (Ubuntu/RHEL)", "Web Sunucuları (Nginx/Apache)", "SSH Güvenliği", "Cron Jobs"], status: "mid" },
            { title: "Konteynerleşme", items: ["Docker Temelleri", "Dockerfile Yazımı", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orkestrasyon", items: ["Kubernetes (K8s) Mimarisi", "Pod/Service/Ingress", "Helm Charts", "Cluster Yönetimi"], status: "advanced" },
            { title: "CI/CD (Sürekli Entegrasyon)", items: ["Jenkins (Klasik)", "GitHub Actions / GitLab CI (Modern)", "Pipeline Yazımı", "Otomatik Testler"], status: "advanced" },
            { title: "IaC (Kod Olarak Altyapı)", items: ["Terraform (Provisioning)", "Ansible (Configuration)", "Infrastructure State Yönetimi"], status: "expert" },
            { title: "Bulut & İzleme", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Loglama)", "Cloud Security"], status: "expert" }
        ],
        az: [
            { title: "Təməllər (Mütləq)", items: ["Linux Terminal (Bash)", "Şəbəkə Biliyi (DNS, OSI)", "Git & Versiya Nəzarəti", "Vim/Nano"], status: "start" },
            { title: "Proqramlaşdırma Dili", items: ["Python (Skriptlər üçün)", "Go (Golang)", "Bash Scripting"], status: "start" },
            { title: "Server İdarəetməsi", items: ["Linux İdarəçiliyi", "Veb Serverlər (Nginx)", "SSH Təhlükəsizliyi", "Cron İşləri"], status: "mid" },
            { title: "Konteynerləşdirmə", items: ["Docker Əsasları", "Dockerfile Yazımı", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orkestrasiya", items: ["Kubernetes (K8s)", "Pod/Service/Ingress", "Helm Charts", "Klaster İdarəetməsi"], status: "advanced" },
            { title: "CI/CD (Davamlı İnteqrasiya)", items: ["Jenkins", "GitHub Actions / GitLab CI", "Pipeline Yazımı", "Avtomatik Testlər"], status: "advanced" },
            { title: "IaC (İnfrastruktur Kodu)", items: ["Terraform", "Ansible", "İnfrastruktur Vəziyyəti"], status: "expert" },
            { title: "Bulud & İzləmə", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Loglar)", "Bulud Təhlükəsizliyi"], status: "expert" }
        ],
        en: [
            { title: "Prerequisites", items: ["Linux Terminal (Bash)", "Networking (DNS, OSI, HTTP)", "Git & Version Control", "Vim/Nano"], status: "start" },
            { title: "Programming Language", items: ["Python (For Scripting)", "Go (Golang - Cloud Native)", "Bash Scripting"], status: "start" },
            { title: "Server Management", items: ["Linux Admin (Ubuntu/RHEL)", "Web Servers (Nginx)", "SSH Security", "Cron Jobs"], status: "mid" },
            { title: "Containerization", items: ["Docker Basics", "Writing Dockerfiles", "Docker Compose", "Container Registry"], status: "mid" },
            { title: "Orchestration", items: ["Kubernetes (K8s) Architecture", "Pod/Service/Ingress", "Helm Charts", "Cluster Ops"], status: "advanced" },
            { title: "CI/CD Pipelines", items: ["Jenkins (Legacy)", "GitHub Actions / GitLab CI", "Pipeline Syntax", "Automated Testing"], status: "advanced" },
            { title: "IaC (Infrastructure as Code)", items: ["Terraform (Provisioning)", "Ansible (Config Mgmt)", "State Management"], status: "expert" },
            { title: "Cloud & Monitoring", items: ["AWS / Azure / GCP", "Prometheus & Grafana", "ELK Stack (Logging)", "DevSecOps"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'TechWorld with Nana', url: 'https://youtube.com/@TechWorldwithNana', desc: 'Dünyanın en iyi DevOps anlatıcısı. Docker, K8s, Jenkins için 1 numara.', lang: 'en' },
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Ağ, Linux ve Cloud konularını çok enerjik ve basit anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Jeff Geerling', url: 'https://youtube.com/@JeffGeerling', desc: 'Ansible ve Raspberry Pi/Server yönetimi üzerine efsanevi içerikler.', lang: 'en' },
            { type: 'youtube', title: 'DevOps Toolkit', url: 'https://youtube.com/@DevOpsToolkit', desc: 'Modern DevOps araçlarını (ArgoCD, K8s) inceleyen ileri seviye kanal.', lang: 'en' },

            // Dokümantasyon & Kitap
            { type: 'doc', title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/', desc: 'K8s öğrenmek için en doğru ve güncel kaynak.', lang: 'global' },
            { type: 'doc', title: 'The Phoenix Project', url: 'https://itrevolution.com/book/the-phoenix-project/', desc: 'DevOps kültürünü ve mantığını anlatan, roman tadında efsanevi bir kitap.', lang: 'en' },
            { type: 'doc', title: 'Google SRE Book', url: 'https://sre.google/books/', desc: 'Google\'ın sistemleri nasıl ayakta tuttuğunu anlatan ücretsiz başyapıt.', lang: 'en' },

            // Araçlar
            { type: 'tool', title: 'Killer.sh', url: 'https://killer.sh', desc: 'CKA (Kubernetes) sertifikası sınav simülatörü. Zor ama öğretici.', lang: 'en' },
            { type: 'tool', title: 'Terraform Registry', url: 'https://registry.terraform.io', desc: 'Hazır altyapı kodları bulabileceğiniz kütüphane.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (DevOps)', url: 'https://roadmap.sh/devops', desc: 'DevOps uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "DevOps Türkiye (Discord/Slack)"],
            top_skills: ["Kubernetes", "Docker", "AWS", "Terraform", "Jenkins"],
            avg_salary: "Junior: 45k-65k TL | Mid: 85k-130k TL | Senior: 180k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankalar & Telecom (Azercell/Bakcell)"],
            top_skills: ["Linux", "Docker", "CI/CD", "Bash Scripting", "Monitoring"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["We Work Remotely", "RemoteOK", "Hired", "Toptal"],
            top_skills: ["AWS Solutions Architect", "CKA (K8s Certified)", "Terraform", "Python"],
            avg_salary: "Junior: $6k-$9k | Mid: $10k-$15k | Senior: $20k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Yazılım bilmek zorunda mıyım?",
                az: "Proqramlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Bir yazılımcı kadar derinlemesine değil ama otomasyon yapacak kadar 'Scripting' (Python, Bash, Go) bilmek zorundasınız. Kod okuyamayan bir DevOps mühendisi kör gibidir.",
                az: "Bir proqramçı qədər dərin yox, amma avtomatlaşdırma edəcək qədər 'Scripting' (Python, Bash) bilmək məcburiyyətindəsiniz. Kod oxuya bilməyən DevOps mühəndisi kor kimidir.",
                en: "Not as deep as a developer, but you must know 'Scripting' (Python, Bash, Go) for automation. A DevOps engineer who can't read code is flying blind."
            }
        },
        {
            id: 2,
            q: {
                tr: "Doğrudan DevOps olarak başlayabilir miyim?",
                az: "Birbaşa DevOps kimi başlaya bilərəm?",
                en: "Can I start directly as DevOps?"
            },
            a: {
                tr: "Zordur. Genellikle 'Junior DevOps' ilanları azdır. Çoğu kişi önce Sistem Yöneticisi (SysAdmin) veya Backend Developer olarak başlar, sonra DevOps'a evrilir.",
                az: "Çətindir. Adətən 'Junior DevOps' elanları azdır. Çox adam əvvəlcə Sistem İdarəçisi (SysAdmin) və ya Backend Developer kimi başlayır, sonra DevOps-a keçir.",
                en: "It's hard. 'Junior DevOps' roles are rare. Most people start as SysAdmins or Backend Developers and then evolve into DevOps."
            }
        },
        {
            id: 3,
            q: {
                tr: "CI/CD nedir?",
                az: "CI/CD nədir?",
                en: "What is CI/CD?"
            },
            a: {
                tr: "CI (Continuous Integration): Yazılımcıların kodunun sürekli birleşip test edilmesi. CD (Continuous Deployment): Testten geçen kodun otomatik olarak sunucuya yüklenmesi.",
                az: "CI: Proqramçıların kodunun davamlı birləşib test edilməsi. CD: Testdən keçən kodun avtomatik olaraq serverə yüklənməsi.",
                en: "CI (Continuous Integration): Merging and testing code frequently. CD (Continuous Deployment): Automatically deploying the tested code to servers."
            }
        },
        {
            id: 4,
            q: {
                tr: "Hangi Bulut (Cloud) sağlayıcısını öğrenmeliyim?",
                az: "Hansı Bulud (Cloud) provayderini öyrənməliyəm?",
                en: "Which Cloud provider should I learn?"
            },
            a: {
                tr: "Pazar payı en yüksek olan AWS (Amazon Web Services) ile başlayın. AWS bilen biri Azure veya Google Cloud'u (GCP) çok hızlı öğrenir.",
                az: "Bazar payı ən yüksək olan AWS (Amazon Web Services) ilə başlayın. AWS bilən biri Azure və ya Google Cloud-u (GCP) çox tez öyrənir.",
                en: "Start with AWS (Amazon Web Services) as it has the largest market share. Once you know AWS, learning Azure or GCP is easy."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sertifika önemli mi? (AWS, CKA)",
                az: "Sertifikat vacibdirmi? (AWS, CKA)",
                en: "Are certifications important? (AWS, CKA)"
            },
            a: {
                tr: "Evet! Özellikle DevOps alanında sertifikalar (CKA - Kubernetes Admin, AWS Solutions Architect) bilginizi kanıtlar ve maaşınızı doğrudan artırır.",
                az: "Bəli! Xüsusilə DevOps sahəsində sertifikatlar (CKA, AWS) biliyinizi sübut edir və maaşınızı birbaşa artırır.",
                en: "Yes! Especially in DevOps, certifications (CKA, AWS Solutions Architect) validate your skills and directly increase your salary."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kubernetes gerçekten o kadar zor mu? ",
                az: "Kubernetes həqiqətən o qədər çətindir?",
                en: "Is Kubernetes really that hard?"
            },
            a: {
                tr: "Evet, öğrenme eğrisi diktir. Çok fazla hareketli parça (Pods, Nodes, Ingress, Services) vardır. Ama bir kere mantığını kavradığınızda sektörün en güçlü silahına sahip olursunuz.",
                az: "Bəli, öyrənmə əyrisi dikdir. Çoxlu hərəkətli hissə var. Amma bir dəfə məntiqi anlayanda sektorun ən güclü silahına sahib olursunuz.",
                en: "Yes, the learning curve is steep. It has many moving parts. But once you grasp the logic, you possess the industry's most powerful tool."
            }
        }
    ]
};

contentData['cyber-security'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temeller (Olmazsa Olmaz)", items: ["Ağ Bilgisi (OSI, TCP/IP, DNS)", "Linux Komut Satırı (CLI)", "Temel Python/Bash Scripting", "Sanal Makineler (VirtualBox)"], status: "start" },
            { title: "İşletim Sistemi Mimarisi", items: ["Windows & Linux İç Yapısı", "File Systems", "Memory Management", "Process & Services"], status: "start" },
            { title: "Sızma Testi (Pentesting)", items: ["Bilgi Toplama (Nmap, OSINT)", "Zafiyet Tarama (Nessus)", "Metasploit Framework", "Yetki Yükseltme (Privilege Escalation)"], status: "mid" },
            { title: "Web Uygulama Güvenliği", items: ["OWASP Top 10 (SQLi, XSS)", "Burp Suite Kullanımı", "API Güvenliği", "HTTP Request Smuggling"], status: "mid" },
            { title: "Savunma (Blue Team)", items: ["SIEM (Splunk, Wazuh)", "Log Analizi", "Incident Response (Olay Müdahale)", "Firewall & IPS/IDS"], status: "mid" },
            { title: "İleri Saldırı Teknikleri", items: ["Reverse Engineering (Tersine Mühendislik)", "Malware Analizi", "Buffer Overflow", "Active Directory Hacking"], status: "advanced" },
            { title: "Bulut Güvenliği (Cloud Sec)", items: ["AWS/Azure Security", "Docker & K8s Security", "IAM Policies", "Misconfiguration Hunting"], status: "expert" },
            { title: "Sertifikasyon & Kariyer", items: ["eJPT (Başlangıç)", "OSCP (Sektör Standardı)", "CISSP (Yönetim)", "Bug Bounty"], status: "expert" }
        ],
        az: [
            { title: "Təməllər (Mütləq)", items: ["Şəbəkə Biliyi (OSI, TCP/IP)", "Linux Əmrləri", "Təməl Python/Bash", "Virtual Maşınlar"], status: "start" },
            { title: "Əməliyyat Sistemi Arxitekturası", items: ["Windows & Linux Daxili", "Fayl Sistemləri", "Yaddaş İdarəetməsi", "Proseslər"], status: "start" },
            { title: "Sızma Testi (Pentesting)", items: ["Məlumat Toplama (Nmap)", "Zəiflik Axtarışı", "Metasploit", "Səlahiyyət Yüksəltmə"], status: "mid" },
            { title: "Veb Tətbiq Təhlükəsizliyi", items: ["OWASP Top 10", "Burp Suite", "API Təhlükəsizliyi", "HTTP Qaçaqçılığı"], status: "mid" },
            { title: "Müdafiə (Blue Team)", items: ["SIEM (Splunk)", "Log Analizi", "Hadisəyə Müdaxilə", "Firewall & IPS/IDS"], status: "mid" },
            { title: "İrəli Hücum Texnikaları", items: ["Tərs Mühəndislik", "Zərərli Proqram Analizi", "Buffer Overflow", "Active Directory"], status: "advanced" },
            { title: "Bulud Təhlükəsizliyi", items: ["AWS/Azure Security", "Konteyner Təhlükəsizliyi", "IAM Qaydaları", "Yanlış Konfiqurasiya"], status: "expert" },
            { title: "Sertifikatlaşdırma", items: ["eJPT", "OSCP (Standart)", "CISSP", "Bug Bounty"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Networking (OSI, TCP/IP)", "Linux CLI Basics", "Python/Bash Scripting", "Virtualization (VMs)"], status: "start" },
            { title: "OS Architecture", items: ["Windows/Linux Internals", "File Systems", "Memory Management", "Processes"], status: "start" },
            { title: "Penetration Testing", items: ["Reconnaissance (Nmap)", "Vulnerability Scanning", "Metasploit Framework", "Privilege Escalation"], status: "mid" },
            { title: "Web App Security", items: ["OWASP Top 10", "Burp Suite Mastery", "API Security", "Request Smuggling"], status: "mid" },
            { title: "Blue Team (Defense)", items: ["SIEM (Splunk, Wazuh)", "Log Analysis", "Incident Response", "Firewall & IPS/IDS"], status: "mid" },
            { title: "Advanced Attack Ops", items: ["Reverse Engineering", "Malware Analysis", "Buffer Overflow", "Active Directory Attacks"], status: "advanced" },
            { title: "Cloud Security", items: ["AWS/Azure Security", "Container Security", "IAM & Compliance", "Cloud Pentesting"], status: "expert" },
            { title: "Certs & Career", items: ["eJPT (Junior)", "OSCP (Gold Standard)", "CISSP (Management)", "Bug Bounty Hunting"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Eğitim Platformları
            { type: 'course', title: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Siber güvenliği oyunlaştırarak öğreten, yeni başlayanlar için en iyi platform.', lang: 'global' },
            { type: 'course', title: 'HackTheBox', url: 'https://www.hackthebox.com', desc: 'Gerçekçi lab ortamları sunan, orta ve ileri seviye için sızma testi platformu.', lang: 'global' },
            { type: 'course', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', desc: 'Web güvenliği (Burp Suite) öğrenmek için dünyanın en iyi ücretsiz kaynağı.', lang: 'en' },

            // YouTube Kanalları
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Ağ, Linux ve hack konularını çok enerjik anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'John Hammond', url: 'https://youtube.com/@_JohnHammond', desc: 'CTF çözümleri ve malware analizi üzerine harika içerikler.', lang: 'en' },
            { type: 'youtube', title: 'Can Değer', url: 'https://youtube.com/@CanDeger', desc: 'Türkiye\'nin siber güvenlik duayeni. Kariyer ve teknik sohbetler.', lang: 'tr' },
            { type: 'youtube', title: 'LiveOverflow', url: 'https://youtube.com/@LiveOverflow', desc: 'Hacking mantığını ve derin teknik detayları (Minecraft hackleri dahil) anlatır.', lang: 'en' },

            // Araçlar & Listeler
            { type: 'tool', title: 'Kali Linux', url: 'https://www.kali.org', desc: 'Siber güvenlikçilerin İsviçre çakısı olan işletim sistemi.', lang: 'global' },
            { type: 'doc', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', desc: 'Web uygulamalarındaki en kritik 10 güvenlik açığı listesi.', lang: 'global' },
            { type: 'tool', title: 'GTFOBins', url: 'https://gtfobins.github.io', desc: 'Linux sistemlerde yetki yükseltmek için kullanılan komutlar listesi.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (Cyber)', url: 'https://roadmap.sh/cyber-security', desc: 'Siber güvenlik uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Vizyoner Genç (Savunma Sanayi)"],
            top_skills: ["Pentest", "SIEM (Splunk)", "Network Security", "KVKK/ISO 27001", "Forensics"],
            avg_salary: "Junior: 40k-60k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Dövlət Qurumları (DTX, Xüsusi Rabitə)"],
            top_skills: ["Network Security", "Information Security", "Cisco", "Linux"],
            avg_salary: "Junior: 1000-1500 AZN | Mid: 2200-3500 AZN | Senior: 5500+ AZN"
        },
        GLOBAL: {
            platforms: ["HackerOne (Bug Bounty)", "Synack", "LinkedIn", "Clearance Jobs"],
            top_skills: ["Cloud Security", "DevSecOps", "OSCP Certified", "Incident Response"],
            avg_salary: "Junior: $5k-$8k | Mid: $9k-$13k | Senior: $16k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Red Team ve Blue Team nedir?",
                az: "Red Team və Blue Team nədir?",
                en: "What are Red Team and Blue Team?"
            },
            a: {
                tr: "Red Team (Kırmızı Takım) saldırgandır; sistemi hacklemeye çalışır. Blue Team (Mavi Takım) savunmacıdır; saldırıları tespit edip engellemeye çalışır. Bir de ikisinin karışımı Purple Team vardır.",
                az: "Red Team (Qırmızı Komanda) hücumçudur; sistemi sındırmağa çalışır. Blue Team (Mavi Komanda) müdafiəçidir; hücumları aşkarlayıb qarşısını almağa çalışır.",
                en: "Red Team involves offensive security (attacking). Blue Team involves defensive security (protecting/monitoring). Purple Team is a mix of both."
            }
        },
        {
            id: 2,
            q: {
                tr: "Yazılım bilmek zorunda mıyım?",
                az: "Proqramlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Başlangıç için hayır, araçları kullanmak yeterlidir. Ancak 'Script Kiddie' (lamer) seviyesinden çıkmak ve kendi araçlarınızı yazmak/zararlı yazılım analizi yapmak için Python ve Bash şarttır.",
                az: "Başlanğıc üçün xeyr. Lakin peşəkar olmaq və öz alətlərinizi yazmaq üçün Python və Bash şərtdir.",
                en: "Not for starters. But to advance beyond being a 'Script Kiddie' and to write your own exploits/tools, Python and Bash are mandatory."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi sertifikayı almalıyım?",
                az: "Hansı sertifikatı almalıyam?",
                en: "Which certification should I get?"
            },
            a: {
                tr: "Başlangıç için CompTIA Security+ veya eJPT. Sektörde saygı görmek ve iş bulmak için 'OSCP' (Offensive Security Certified Professional) altın standarttır.",
                az: "Başlanğıc üçün CompTIA Security+ və ya eJPT. Sektorda hörmət qazanmaq və iş tapmaq üçün 'OSCP' qızıl standartdır.",
                en: "Start with CompTIA Security+ or eJPT. For industry respect and jobs, 'OSCP' is the gold standard."
            }
        },
        {
            id: 4,
            q: {
                tr: "Kali Linux'u ana bilgisayarıma kurmalı mıyım?",
                az: "Kali Linux-u əsas kompüterimə qurmalıyam?",
                en: "Should I install Kali Linux as my main OS?"
            },
            a: {
                tr: "Hayır! Kali günlük kullanım için güvenli ve stabil değildir. Sanal Makine (VirtualBox/VMware) içine kurmanız veya USB'den (Live Boot) çalıştırmanız en doğrusudur.",
                az: "Xeyr! Kali gündəlik istifadə üçün təhlükəsiz və stabil deyil. Virtual Maşın (VirtualBox) içinə qurmaq və ya USB-dən işlətmək ən doğrusudur.",
                en: "No! Kali is not secure or stable for daily use. It is best to run it inside a Virtual Machine (VM) or via Live USB."
            }
        },
        {
            id: 5,
            q: {
                tr: "Bug Bounty yaparak para kazanabilir miyim?",
                az: "Bug Bounty edərək pul qazana bilərəm?",
                en: "Can I make money with Bug Bounty?"
            },
            a: {
                tr: "Evet, ama zordur. HackerOne gibi platformlarda şirketler açık bulanlara ödül verir. Ancak rekabet çok yüksektir ve sürekli kendinizi geliştirmeniz gerekir. Ek gelir olarak harikadır.",
                az: "Bəli, amma çətindir. HackerOne kimi platformalarda şirkətlər boşluq tapanlara mükafat verir. Rəqabət yüksəkdir, amma əlavə gəlir üçün əladır.",
                en: "Yes, but it's hard. Platforms like HackerOne pay for bugs. Competition is high, so you need to be skilled. It's great for side income."
            }
        },
        {
            id: 6,
            q: {
                tr: "Wifi kırmak için hangi adaptörü almalıyım?",
                az: "Wifi sındırmaq üçün hansı adaptoru almalıyam?",
                en: "Which adapter do I need for Wifi hacking?"
            },
            a: {
                tr: "Markaya değil 'Chipset'e bakın. 'Monitor Mode' ve 'Packet Injection' destekleyen adaptörler gerekir. (Örn: Atheros AR9271, Realtek RTL8812AU).",
                az: "Markaya yox 'Chipset'ə baxın. 'Monitor Mode' və 'Packet Injection' dəstəkləyən adaptorlar lazımdır. (Məs: Atheros AR9271).",
                en: "Look for the 'Chipset', not the brand. You need support for 'Monitor Mode' and 'Packet Injection'. (e.g., Atheros AR9271)."
            }
        }
    ]
};

contentData['big-data'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Linux Terminali & Bash Scripting", "İleri Seviye SQL", "Programlama (Python veya Scala)", "JVM Mantığı (Java Virtual Machine)"], status: "start" },
            { title: "Veri Mimarisi Kavramları", items: ["CAP Teoremi", "ETL vs ELT", "Data Warehouse vs Data Lake", "Batch vs Stream Processing"], status: "start" },
            { title: "Depolama (Storage)", items: ["Hadoop (HDFS)", "Amazon S3 / GCS (Object Storage)", "Parquet / Avro / ORC Formatları"], status: "mid" },
            { title: "İşleme (Processing)", items: ["Apache Spark (Standart)", "Hadoop MapReduce (Eski ama Temel)", "Databricks"], status: "mid" },
            { title: "Akış (Streaming)", items: ["Apache Kafka (Event Bus)", "Apache Flink (Real-time Processing)", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Modern Veritabanları", items: ["Apache Cassandra (Wide Column)", "HBase", "Elasticsearch (Search Engine)", "Neo4j (Graph DB)"], status: "advanced" },
            { title: "Veri Ambarı & SQL Motorları", items: ["Snowflake", "Google BigQuery", "Apache Hive", "Trino / Presto"], status: "advanced" },
            { title: "Orkestrasyon & Yönetim", items: ["Apache Airflow (Workflow)", "Docker & Kubernetes", "Data Governance (Veri Yönetişimi)"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Linux Terminal & Bash", "İrəli Səviyyə SQL", "Proqramlaşdırma (Python/Scala)", "JVM Məntiqi"], status: "start" },
            { title: "Məlumat Arxitekturası", items: ["CAP Teoremi", "ETL vs ELT", "Data Warehouse vs Data Lake", "Batch vs Stream Emalı"], status: "start" },
            { title: "Saxlama (Storage)", items: ["Hadoop (HDFS)", "Amazon S3 / GCS", "Parquet / Avro Formatları"], status: "mid" },
            { title: "Emal (Processing)", items: ["Apache Spark (Standart)", "Hadoop MapReduce", "Databricks"], status: "mid" },
            { title: "Axın (Streaming)", items: ["Apache Kafka", "Apache Flink (Real-time)", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Müasir Bazalar", items: ["Apache Cassandra", "HBase", "Elasticsearch", "Neo4j"], status: "advanced" },
            { title: "Məlumat Anbarı & SQL", items: ["Snowflake", "Google BigQuery", "Apache Hive", "Trino"], status: "advanced" },
            { title: "Orkestrasiya & İdarəetmə", items: ["Apache Airflow", "Docker & Kubernetes", "Məlumat İdarəçiliyi"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Linux CLI & Bash", "Advanced SQL", "Programming (Python/Scala)", "JVM Internals"], status: "start" },
            { title: "Architecture Concepts", items: ["CAP Theorem", "ETL vs ELT", "Data Warehouse vs Lake", "Batch vs Stream"], status: "start" },
            { title: "Storage", items: ["Hadoop (HDFS)", "Amazon S3 / GCS", "File Formats (Parquet/Avro)"], status: "mid" },
            { title: "Processing", items: ["Apache Spark (Standard)", "Hadoop MapReduce", "Databricks"], status: "mid" },
            { title: "Streaming", items: ["Apache Kafka", "Apache Flink", "Spark Streaming"], status: "mid" },
            { title: "NoSQL & Modern DBs", items: ["Apache Cassandra", "HBase", "Elasticsearch", "Neo4j"], status: "advanced" },
            { title: "Warehousing & SQL Engines", items: ["Snowflake", "BigQuery", "Apache Hive", "Trino / Presto"], status: "advanced" },
            { title: "Orchestration & Ops", items: ["Apache Airflow", "Docker & Kubernetes", "Data Governance"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Kitap & Okuma
            { type: 'doc', title: 'Designing Data-Intensive Applications', url: 'https://dataintensive.net', desc: 'Martin Kleppmann\'ın yazdığı, bu işin "Kutsal Kitabı". Her veri mühendisi okumalı.', lang: 'en' },
            { type: 'doc', title: 'Apache Spark Docs', url: 'https://spark.apache.org/docs/latest/', desc: 'Büyük veri işlemenin kralı olan Spark\'ın resmi belgeleri.', lang: 'en' },

            // YouTube
            { type: 'youtube', title: 'Seattle Data Guy', url: 'https://youtube.com/@SeattleDataGuy', desc: 'Veri mühendisliği kariyeri ve araçları hakkında harika analizler.', lang: 'en' },
            { type: 'youtube', title: 'Marc Lamberti', url: 'https://youtube.com/@marclamberti', desc: 'Airflow ve Data Engineering üzerine çok detaylı teknik videolar.', lang: 'en' },
            { type: 'youtube', title: 'Data Engineering (FreeCodeCamp)', url: 'https://www.youtube.com/watch?v=qWru-b6m030', desc: '3 saatlik devasa başlangıç kursu.', lang: 'en' },

            // Araçlar
            { type: 'tool', title: 'Databricks Community', url: 'https://community.cloud.databricks.com', desc: 'Spark ve Big Data öğrenmek için ücretsiz bulut ortamı.', lang: 'global' },
            { type: 'tool', title: 'Confluent Cloud', url: 'https://confluent.cloud', desc: 'Kafka öğrenmek için en kolay, yönetilen (managed) platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (Data Engineer)', url: 'https://roadmap.sh/data-engineer', desc: 'Veri Mühendisliği için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Bankacılık & E-Ticaret"],
            top_skills: ["Spark", "Hadoop", "Kafka", "Airflow", "SQL"],
            avg_salary: "Junior: 45k-65k TL | Mid: 85k-125k TL | Senior: 170k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Kapital Bank / Pasha Bank"],
            top_skills: ["PL/SQL", "Hadoop", "Python", "ETL Tools"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "RemoteOK", "Dice", "Toptal"],
            top_skills: ["Databricks", "Snowflake", "AWS Glue", "Python/Scala"],
            avg_salary: "Junior: $6k-$9k | Mid: $11k-$16k | Senior: $22k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Veri Bilimcisi (Data Scientist) ile Veri Mühendisi (Data Engineer) farkı ne?",
                az: "Məlumat Alimi ilə Məlumat Mühəndisi fərqi nədir?",
                en: "Difference between Data Scientist and Data Engineer?"
            },
            a: {
                tr: "Veri Mühendisi 'tesisatçıdır'; boruları döşer, veriyi taşır ve temizler. Veri Bilimcisi ise o temiz veriyi alıp analiz eder ve modeller kurar. Mühendis olmadan Bilimci çalışamaz.",
                az: "Məlumat Mühəndisi 'santexnikdir'; boruları çəkir, məlumatı daşıyır və təmizləyir. Məlumat Alimi isə o təmiz məlumatı alıb analiz edir. Mühəndis olmadan Alim işləyə bilməz.",
                en: "Data Engineer is the 'plumber'; building pipelines and cleaning data. Data Scientist analyzes that clean data. Scientists can't work without Engineers."
            }
        },
        {
            id: 2,
            q: {
                tr: "Hadoop öldü mü?",
                az: "Hadoop öldü?",
                en: "Is Hadoop dead?"
            },
            a: {
                tr: "Hadoop'un hesaplama kısmı (MapReduce) öldü, yerini Spark aldı. Ancak depolama kısmı (HDFS) hala büyük şirketlerde (On-Premise) kullanılıyor. Bulutta ise yerini S3/GCS aldı.",
                az: "Hadoop-un hesablama hissəsi (MapReduce) öldü, yerini Spark aldı. Lakin saxlama hissəsi (HDFS) hələ də böyük şirkətlərdə istifadə olunur. Buludda isə yerini S3/GCS aldı.",
                en: "Hadoop's compute part (MapReduce) is dead, replaced by Spark. But its storage (HDFS) is still used in large on-premise systems. In Cloud, S3/GCS replaced it."
            }
        },
        {
            id: 3,
            q: {
                tr: "Python mı Scala mı öğrenmeliyim?",
                az: "Python yoxsa Scala öyrənməliyəm?",
                en: "Should I learn Python or Scala?"
            },
            a: {
                tr: "Başlangıç ve genel kullanım için Python (PySpark). Ancak Spark ve Kafka'nın ana dili Scala'dır; çok yüksek performanslı, devasa sistemler kuracaksanız Scala (ve Java) bilmek sizi 'Senior' yapar.",
                az: "Başlanğıc üçün Python (PySpark). Lakin Spark və Kafka-nın ana dili Scala-dır; çox yüksək performanslı sistemlər quracaqsınızsa Scala bilmək sizi 'Senior' edər.",
                en: "Python (PySpark) for beginners and general use. However, Scala is the native language of Spark/Kafka; knowing it makes you a 'Senior' for high-performance systems."
            }
        },
        {
            id: 4,
            q: {
                tr: "ETL nedir?",
                az: "ETL nədir?",
                en: "What is ETL?"
            },
            a: {
                tr: "Extract (Çek), Transform (Dönüştür), Load (Yükle). Veriyi bir yerden alıp, formatını değiştirip (örn: para birimi çevirme), hedef veritabanına kaydetme sürecidir.",
                az: "Extract, Transform, Load. Məlumatı bir yerdən alıb, formatını dəyişdirib (məs: valyuta çevirmə), hədəf bazaya yazma prosesidir.",
                en: "Extract, Transform, Load. It is the process of taking data from a source, changing its format, and saving it to a target database."
            }
        },
        {
            id: 5,
            q: {
                tr: "Kafka ne işe yarar?",
                az: "Kafka nə işə yarayır?",
                en: "What does Kafka do?"
            },
            a: {
                tr: "Kafka, gerçek zamanlı veri boru hattıdır. Milyonlarca veriyi (loglar, tıklamalar) anlık olarak bir yerden bir yere kayıpsız taşımak için kullanılır. Big Data'nın sinir sistemidir.",
                az: "Kafka, real vaxt məlumat boru xəttidir. Milyonlarla məlumatı (loglar, kliklər) anlıq olaraq bir yerdən digərinə itkisiz daşımaq üçün istifadə olunur.",
                en: "Kafka is a real-time data pipeline. It is used to transport millions of data points (logs, clicks) instantly without loss. It is the nervous system of Big Data."
            }
        }
    ]
};
contentData['deep-learning'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Sinir Ağları Temelleri", items: ["Nöronlar & Perceptrons", "Aktivasyon Fonksiyonları (ReLU, Sigmoid)", "Loss Functions & Backpropagation", "Optimizers (Adam, SGD)"], status: "start" },
            { title: "Framework Seçimi", items: ["PyTorch (Sektör Standardı)", "TensorFlow / Keras", "Tensor İşlemleri", "GPU/CUDA Kullanımı"], status: "start" },
            { title: "Bilgisayarlı Göru (Computer Vision)", items: ["Convolutional Neural Networks (CNN)", "Nesne Tanıma (YOLO)", "Görüntü Segmentasyonu", "OpenCV"], status: "mid" },
            { title: "Doğal Dil İşleme (NLP)", items: ["RNN & LSTM (Eski ama Temel)", "Word Embeddings (Word2Vec)", "Attention Mechanism", "Transformers Mimarisi"], status: "mid" },
            { title: "Üretken Yapay Zeka (GenAI)", items: ["GANs (Generative Adversarial Networks)", "Diffusion Models (Stable Diffusion)", "LLMs (GPT, Llama)", "Prompt Engineering"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Reinforcement Learning (Pekiştirmeli Öğrenme)", "Graph Neural Networks", "Explainable AI (XAI)", "Model Fine-Tuning"], status: "expert" },
            { title: "Deployment & Ölçekleme", items: ["Model Quantization (Küçültme)", "ONNX Runtime", "TorchServe", "Multi-GPU Training"], status: "expert" }
        ],
        az: [
            { title: "Sinir Şəbəkələrinin Əsasları", items: ["Neyronlar & Perceptronlar", "Aktivasiya Funksiyaları", "İtki Funksiyaları & Backpropagation", "Optimayzerlər (Adam)"], status: "start" },
            { title: "Freymvörk Seçimi", items: ["PyTorch (Sənaye Standartı)", "TensorFlow / Keras", "Tensor Əməliyyatları", "GPU/CUDA İstifadəsi"], status: "start" },
            { title: "Kompüter Görmə", items: ["Konvolyusiya Şəbəkələri (CNN)", "Obyekt Tanıma (YOLO)", "Təsvir Seqmentasiyası", "OpenCV"], status: "mid" },
            { title: "Təbii Dil Emalı (NLP)", items: ["RNN & LSTM", "Söz Vektorları", "Diqqət Mexanizmi (Attention)", "Transformers Arxitekturası"], status: "mid" },
            { title: "Generativ Süni İntellekt", items: ["GANs", "Diffuziya Modelləri", "LLMs (Böyük Dil Modelləri)", "Prompt Mühəndisliyi"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Gücləndirməli Öyrənmə (RL)", "Qraf Sinir Şəbəkələri", "İzah Edilə bilən AI", "Model Fine-Tuning"], status: "expert" },
            { title: "Yerləşdirmə & Ölçəkləmə", items: ["Model Kvantizasiyası", "ONNX Runtime", "TorchServe", "Multi-GPU Təlimi"], status: "expert" }
        ],
        en: [
            { title: "Neural Network Basics", items: ["Neurons & Perceptrons", "Activation Functions", "Backpropagation & Loss", "Optimizers (Adam, SGD)"], status: "start" },
            { title: "Framework Mastery", items: ["PyTorch (Industry Standard)", "TensorFlow / Keras", "Tensor Operations", "GPU/CUDA Usage"], status: "start" },
            { title: "Computer Vision", items: ["CNNs (Convolutional Networks)", "Object Detection (YOLO)", "Image Segmentation", "OpenCV"], status: "mid" },
            { title: "NLP Mastery", items: ["RNNs & LSTMs", "Word Embeddings", "Attention Mechanism", "Transformers Architecture"], status: "mid" },
            { title: "Generative AI", items: ["GANs", "Diffusion Models", "Large Language Models (LLMs)", "Fine-Tuning"], status: "advanced" },
            { title: "Advanced Topics", items: ["Reinforcement Learning (RL)", "Graph Neural Networks", "Explainable AI (XAI)", "Self-Supervised Learning"], status: "expert" },
            { title: "Deployment & Scaling", items: ["Model Quantization", "ONNX Runtime", "Serving (TorchServe)", "Distributed Training"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Kurslar & YouTube
            { type: 'course', title: 'Deep Learning Specialization', url: 'https://www.coursera.org/specializations/deep-learning', desc: 'Andrew Ng tarafından hazırlanan, bu alanın "üniversite diploması" sayılan kurs serisi.', lang: 'en' },
            { type: 'course', title: 'Fast.ai', url: 'https://course.fast.ai', desc: 'Jeremy Howard\'ın "kod yazarak öğren" mantığıyla hazırladığı efsanevi pratik kurs.', lang: 'en' },
            { type: 'youtube', title: 'Andrej Karpathy', url: 'https://youtube.com/@AndrejKarpathy', desc: 'Eski Tesla AI direktöründen, "Neural Networks from Scratch" gibi başyapıt videolar.', lang: 'en' },
            { type: 'youtube', title: '3Blue1Brown', url: 'https://youtube.com/@3blue1brown', desc: 'Sinir ağlarının matematiğini görsel şölenle anlatan kanal.', lang: 'en' },

            // Dokümantasyon & Araçlar
            { type: 'doc', title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/', desc: 'Meta\'nın geliştirdiği ve araştırmacıların favorisi olan kütüphanenin resmi dersleri.', lang: 'en' },
            { type: 'tool', title: 'Papers with Code', url: 'https://paperswithcode.com', desc: 'En son akademik makalelerin ve onların kodlarının bulunduğu hazine.', lang: 'en' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Transformer modellerinin ve açık kaynak yapay zekanın kalbi.', lang: 'global' },
            { type: 'tool', title: 'Google Colab Pro', url: 'https://colab.research.google.com', desc: 'Bulutta GPU (T4/A100) kiralayıp model eğitmek için en erişilebilir yol.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (AI)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Görsel öğrenme yolu.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Teknokent (Aselsan/Havelsan/TUSAŞ)", "AI Startups"],
            top_skills: ["PyTorch", "Computer Vision", "NLP", "CUDA", "C++"],
            avg_salary: "Junior: 50k-70k TL | Mid: 90k-130k TL | Senior: 180k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Innovations Center"],
            top_skills: ["Python", "TensorFlow/PyTorch", "Data Science", "Computer Vision"],
            avg_salary: "Junior: 1500-2000 AZN | Mid: 3000-4500 AZN | Senior: 7000+ AZN"
        },
        GLOBAL: {
            platforms: ["OpenAI Careers", "Anthropic", "DeepMind", "RemoteOK"],
            top_skills: ["LLM Training", "Distributed Systems", "Research Paper Implementation"],
            avg_salary: "Junior: $8k-$12k | Mid: $15k-$20k | Senior: $25k+ (Aylık/Remote/US)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Machine Learning ile Deep Learning farkı ne?",
                az: "Machine Learning ilə Deep Learning fərqi nədir?",
                en: "What is the difference between ML and Deep Learning?"
            },
            a: {
                tr: "ML daha geneldir; veriden öğrenen her şeyi kapsar (Excel tablosu analizi gibi). Deep Learning ise ML'in 'yapay sinir ağları' kullanan, resim/ses gibi karmaşık verileri işleyen alt kümesidir.",
                az: "ML daha ümumidir; məlumatdan öyrənən hər şeyi əhatə edir. Deep Learning isə ML-in 'süni sinir şəbəkələri' istifadə edən, şəkil/səs kimi mürəkkəb məlumatları emal edən alt çoxluğudur.",
                en: "ML is general; covering anything that learns from data. Deep Learning is a subset of ML using 'neural networks' to process complex data like images/audio."
            }
        },
        {
            id: 2,
            q: {
                tr: "GPU (Ekran Kartı) olmadan öğrenebilir miyim?",
                az: "GPU (Video Kart) olmadan öyrənə bilərəm?",
                en: "Can I learn without a GPU?"
            },
            a: {
                tr: "Teoriyi öğrenirsiniz ama model eğitemezsiniz. Deep Learning çok yüksek işlem gücü ister. Bilgisayarınız kötüyse Google Colab veya Kaggle gibi bulut servislerini kullanmalısınız.",
                az: "Teoriyanı öyrənərsiniz, amma model öyrədə bilməzsiniz. Deep Learning çox yüksək emal gücü tələb edir. Kompüteriniz zəifdirsə Google Colab və ya Kaggle kimi bulud servislərini istifadə etməlisiniz.",
                en: "You can learn the theory, but can't train models. Deep Learning requires massive compute. If your PC is weak, use cloud services like Google Colab or Kaggle."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi Matematik konularını bilmeliyim?",
                az: "Hansı Riyaziyyat mövzularını bilməliyəm?",
                en: "Which Math topics should I know?"
            },
            a: {
                tr: "Kalkülüs (Türev - Backpropagation için), Lineer Cebir (Matris çarpımları için) ve İstatistik. Framework'ler (PyTorch) bu işlemleri otomatik yapar ama mantığı anlamak için matematik şarttır.",
                az: "Kalkulus (Törəmə), Xətti Cəbr (Matrislər) və Statistika. Freymvörklər (PyTorch) bu əməliyyatları avtomatik edir, amma məntiqi anlamaq üçün riyaziyyat şərtdir.",
                en: "Calculus (Derivatives), Linear Algebra (Matrix ops), and Statistics. Frameworks (PyTorch) automate this, but math is required to understand the 'why'."
            }
        },
        {
            id: 4,
            q: {
                tr: "Sektörde en çok hangi Framework kullanılıyor?",
                az: "Sektorda ən çox hansı Freymvörk istifadə olunur?",
                en: "Which Framework is used most in the industry?"
            },
            a: {
                tr: "PyTorch. Araştırma (OpenAI, Meta) ve modern üretim ortamlarında açık ara liderdir. TensorFlow (Google) hala kullanılıyor ama popülaritesi azalıyor.",
                az: "PyTorch. Araşdırma və müasir istehsalat mühitlərində liderdir. TensorFlow hələ də istifadə olunur, amma populyarlığı azalır.",
                en: "PyTorch. It is the leader in research (OpenAI, Meta) and modern production. TensorFlow is still used but declining in popularity."
            }
        },
        {
            id: 5,
            q: {
                tr: "Black Box (Kara Kutu) problemi nedir?",
                az: "Black Box (Qara Qutu) problemi nədir?",
                en: "What is the Black Box problem?"
            },
            a: {
                tr: "Deep Learning modellerinin nasıl karar verdiğini tam olarak anlayamamamızdır. Milyarlarca parametre arasında kararın 'neden' alındığını açıklamak zordur (Explainable AI bu sorunu çözmeye çalışır).",
                az: "Deep Learning modellərinin necə qərar verdiyini tam anlaya bilməməyimizdir. Milyardlarla parametr arasında qərarın 'niyə' verildiyini izah etmək çətindir.",
                en: "It's the inability to fully understand how DL models make decisions. Explaining 'why' a decision was made among billions of parameters is hard."
            }
        }
    ]
};
contentData['ml'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Matematiksel Temeller", items: ["Lineer Cebir (Matrisler)", "Kalkülüs (Gradient Descent)", "İstatistik & Olasılık", "Vektör Uzayları"], status: "start" },
            { title: "Python & Veri İşleme", items: ["NumPy & Pandas", "Veri Temizleme (Preprocessing)", "Feature Engineering", "Görselleştirme"], status: "start" },
            { title: "Klasik Makine Öğrenmesi", items: ["Scikit-Learn", "Regression (Lineer/Lojistik)", "Decision Trees & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Derin Öğrenme (Deep Learning)", items: ["Yapay Sinir Ağları (ANN)", "PyTorch veya TensorFlow", "Backpropagation Mantığı", "Aktivasyon Fonksiyonları"], status: "mid" },
            { title: "İleri Uzmanlık Alanları", items: ["Computer Vision (CNN, YOLO)", "NLP (Transformers, HuggingFace)", "LLM (Large Language Models)", "Reinforcement Learning"], status: "advanced" },
            { title: "MLOps & Deployment", items: ["Model API (FastAPI)", "Docker & Kubernetes", "Model Monitoring (MLflow)", "Cloud AI (AWS SageMaker)"], status: "expert" }
        ],
        az: [
            { title: "Riyazi Əsaslar", items: ["Xətti Cəbr (Matrislər)", "Kalkulus (Gradient Descent)", "Statistika & Ehtimal", "Vektor Fəzaları"], status: "start" },
            { title: "Python & Məlumat Emalı", items: ["NumPy & Pandas", "Məlumat Təmizləmə", "Feature Engineering", "Vizuallaşdırma"], status: "start" },
            { title: "Klassik Maşın Öyrənməsi", items: ["Scikit-Learn", "Reqressiya", "Qərar Ağacları & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Dərin Öyrənmə (Deep Learning)", items: ["Süni Sinir Şəbəkələri", "PyTorch və ya TensorFlow", "Backpropagation", "Aktivasiya Funksiyaları"], status: "mid" },
            { title: "İrəli İxtisas Sahələri", items: ["Kompüter Görmə (CNN)", "NLP (Transformers)", "LLM (Böyük Dil Modelləri)", "Gücləndirməli Öyrənmə"], status: "advanced" },
            { title: "MLOps & Yerləşdirmə", items: ["Model API (FastAPI)", "Docker & Kubernetes", "Model İzləmə (MLflow)", "Bulud AI"], status: "expert" }
        ],
        en: [
            { title: "Math Foundations", items: ["Linear Algebra", "Calculus (Gradient Descent)", "Probability & Stats", "Vector Spaces"], status: "start" },
            { title: "Python & Data Prep", items: ["NumPy & Pandas", "Data Preprocessing", "Feature Engineering", "Visualization"], status: "start" },
            { title: "Classical ML", items: ["Scikit-Learn", "Regression", "Decision Trees & Random Forest", "SVM & K-Means"], status: "mid" },
            { title: "Deep Learning", items: ["Neural Networks (ANN)", "PyTorch or TensorFlow", "Backpropagation", "Activation Functions"], status: "mid" },
            { title: "Advanced Domains", items: ["Computer Vision (CNN)", "NLP (Transformers/LLMs)", "Generative AI", "Reinforcement Learning"], status: "advanced" },
            { title: "MLOps & Deployment", items: ["Model Serving (FastAPI)", "Docker & K8s", "MLflow/WandB", "Cloud AI (AWS/Azure)"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Kurslar & YouTube
            { type: 'course', title: 'Andrew Ng - Machine Learning', url: 'https://www.coursera.org/specializations/machine-learning-introduction', desc: 'Bu alanın babası Andrew Ng\'den sertifikalı efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'course', title: 'Fast.ai', url: 'https://www.fast.ai', desc: 'Pratik odaklı, kod yazarak öğreten dünyanın en iyi ücretsiz Deep Learning kursu.', lang: 'en' },
            { type: 'youtube', title: 'Two Minute Papers', url: 'https://youtube.com/@TwoMinutePapers', desc: 'En yeni AI makalelerini ve gelişmeleri harika görsellerle anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Murat Yücedağ', url: 'https://youtube.com/@MuratYucedag', desc: 'Türkçe Python ve Yapay Zeka dersleri için kapsamlı bir kaynak.', lang: 'tr' },

            // Dokümantasyon & Araçlar
            { type: 'doc', title: 'PyTorch Docs', url: 'https://pytorch.org', desc: 'Facebook (Meta) tarafından geliştirilen, araştırmacıların favori kütüphanesi.', lang: 'en' },
            { type: 'doc', title: 'Scikit-Learn', url: 'https://scikit-learn.org', desc: 'Klasik makine öğrenmesi algoritmaları için ana kütüphane.', lang: 'en' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Hazır LLM modelleri (GPT, Llama vb.) ve veri setleri için AI\'ın GitHub\'ı.', lang: 'global' },
            { type: 'tool', title: 'Kaggle', url: 'https://www.kaggle.com', desc: 'Veri setleri bulmak ve yarışmalara katılmak için bir numaralı platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (AI/ML)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Yapay Zeka uzmanlığı için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Teknokent Savunma Sanayi"],
            top_skills: ["Python", "PyTorch", "NLP", "Computer Vision", "MLOps"],
            avg_salary: "Junior: 45k-65k TL | Mid: 80k-120k TL | Senior: 160k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankalar & Telekom"],
            top_skills: ["Python", "SQL", "Data Analysis", "Machine Learning Basics"],
            avg_salary: "Junior: 1200-1800 AZN | Mid: 2500-4000 AZN | Senior: 6000+ AZN"
        },
        GLOBAL: {
            platforms: ["Hacker News Jobs", "RemoteOK", "Toptal", "AI Startups"],
            top_skills: ["LLM Fine-Tuning", "Transformers", "AWS SageMaker", "CUDA"],
            avg_salary: "Junior: $7k-$9k | Mid: $12k-$16k | Senior: $20k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "AI, Machine Learning ve Deep Learning farkı nedir?",
                az: "AI, Machine Learning və Deep Learning fərqi nədir?",
                en: "Difference between AI, ML, and Deep Learning?"
            },
            a: {
                tr: "AI (Yapay Zeka) genel çatı kavramdır. ML (Makine Öğrenmesi) bunun, veriden öğrenen alt dalıdır. DL (Derin Öğrenme) ise ML'in, insan beynini taklit eden (sinir ağları) en gelişmiş alt dalıdır.",
                az: "AI (Süni İntellekt) ümumi anlayışdır. ML (Maşın Öyrənməsi) bunun, məlumatdan öyrənən alt sahəsidir. DL (Dərin Öyrənmə) isə ML-in insan beynini təqlid edən ən qabaqcıl sahəsidir.",
                en: "AI is the broad concept. ML is a subset that learns from data. DL is a subset of ML that uses neural networks to mimic the human brain."
            }
        },
        {
            id: 2,
            q: {
                tr: "PyTorch mu yoksa TensorFlow mu?",
                az: "PyTorch yoxsa TensorFlow?",
                en: "PyTorch or TensorFlow?"
            },
            a: {
                tr: "2024 itibariyle PyTorch, hem akademik araştırmalarda hem de endüstride (Tesla, OpenAI) lider konumdadır. Öğrenmesi daha kolay ve 'Pythonic'tir. TensorFlow daha eski ve hantaldır.",
                az: "2024 etibarilə PyTorch həm akademik araşdırmalarda, həm də sənayedə (Tesla, OpenAI) liderdir. Öyrənmək daha asandır. TensorFlow daha köhnədir.",
                en: "As of 2024, PyTorch leads in both research and industry (Tesla, OpenAI). It is easier to learn and more 'Pythonic'. TensorFlow is older and clunkier."
            }
        },
        {
            id: 3,
            q: {
                tr: "Doktora (PhD) yapmak şart mı?",
                az: "Doktorantura (PhD) oxumaq şərtdir?",
                en: "Is a PhD required?"
            },
            a: {
                tr: "Google DeepMind veya OpenAI gibi yerlerde 'Araştırmacı' olmak istiyorsanız evet. Ancak 'Machine Learning Engineer' (Mühendis) olarak modelleri uygulamak için lisans diploması ve sağlam bir portfolyo yeterlidir.",
                az: "Google DeepMind və ya OpenAI kimi yerlərdə 'Tədqiqatçı' olmaq istəyirsinizsə, bəli. Lakin 'Mühəndis' kimi işləmək üçün bakalavr diplomu və güclü portfolio kifayətdir.",
                en: "If you want to be a 'Researcher' at places like DeepMind, yes. But to work as an 'ML Engineer' applying models, a bachelor's degree and a strong portfolio are enough."
            }
        },
        {
            id: 4,
            q: {
                tr: "Ekran kartı (GPU) ne kadar önemli?",
                az: "Video kart (GPU) nə qədər vacibdir?",
                en: "How important is the GPU?"
            },
            a: {
                tr: "Çok önemli. Derin öğrenme modelleri (Neural Networks) paralel işlem gücüne ihtiyaç duyar. NVIDIA kartlar (CUDA desteği için) şarttır. Mac M1/M2/M3 çipleri de artık iyi destek veriyor.",
                az: "Çox vacibdir. Dərin öyrənmə modelləri paralel emal gücünə ehtiyac duyur. NVIDIA kartları (CUDA üçün) şərtdir. Mac M1/M2/M3 çipləri də artıq yaxşı dəstəkləyir.",
                en: "Very important. Deep Learning models require parallel processing power. NVIDIA cards (for CUDA) are mandatory. Mac M-series chips also have good support now."
            }
        },
        {
            id: 5,
            q: {
                tr: "MLOps nedir, neden öğrenmeliyim?",
                az: "MLOps nədir, niyə öyrənməliyəm?",
                en: "What is MLOps and why learn it?"
            },
            a: {
                tr: "Modeli eğitmek işin %20'sidir. O modeli canlı sisteme almak, izlemek ve güncellemek %80'idir. Şirketler artık sadece model kuran değil, onu üretime (production) alabilen mühendis arıyor.",
                az: "Modeli öyrətmək işin 20%-dir. O modeli canlı sistemə almaq, izləmək və yeniləmək 80%-dir. Şirkətlər artıq modeli istehsalata (production) buraxa bilən mühəndis axtarır.",
                en: "Training the model is 20% of the work. Deploying, monitoring, and updating it is 80%. Companies want engineers who can take models to production, not just build them."
            }
        }
    ]
};
contentData['data-science'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Matematik ve İstatistik", items: ["Lineer Cebir", "Olasılık ve İstatistik", "Kalkülüs (Türev/İntegral Temelleri)", "Hipotez Testleri"], status: "start" },
            { title: "Programlama (Python)", items: ["Python Temelleri", "Veri Yapıları", "List Comprehensions", "SQL (Veritabanı Sorgulama)"], status: "start" },
            { title: "Veri Analizi & Görselleştirme", items: ["NumPy (Matematiksel İşlemler)", "Pandas (Veri Manipülasyonu)", "Matplotlib & Seaborn (Görselleştirme)", "Tableau / PowerBI"], status: "mid" },
            { title: "Makine Öğrenmesi (ML)", items: ["Scikit-Learn", "Gözetimli Öğrenme (Regression/Classification)", "Gözetimsiz Öğrenme (Clustering)", "Model Değerlendirme"], status: "mid" },
            { title: "Derin Öğrenme (Deep Learning)", items: ["Neural Networks", "TensorFlow veya PyTorch", "CNN (Görüntü İşleme)", "RNN/LSTM (NLP)"], status: "advanced" },
            { title: "Büyük Veri & MLOps", items: ["Apache Spark", "Hadoop", "Model Deployment (Streamlit/Flask)", "Docker for Data Science"], status: "expert" }
        ],
        az: [
            { title: "Riyaziyyat və Statistika", items: ["Xətti Cəbr", "Ehtimal və Statistika", "Kalkulus (Törəmə/İnteqral)", "Hipotez Testləri"], status: "start" },
            { title: "Proqramlaşdırma (Python)", items: ["Python Əsasları", "Məlumat Strukturları", "SQL (Sorğulama)", "Verilənlərin Təmizlənməsi"], status: "start" },
            { title: "Məlumat Analizi & Vizuallaşdırma", items: ["NumPy", "Pandas (Məlumat Manipulyasiyası)", "Matplotlib & Seaborn", "Tableau / PowerBI"], status: "mid" },
            { title: "Maşın Öyrənməsi (ML)", items: ["Scikit-Learn", "Nəzarətli Öyrənmə", "Nəzarətsiz Öyrənmə", "Model Qiymətləndirmə"], status: "mid" },
            { title: "Dərin Öyrənmə (Deep Learning)", items: ["Süni Sinir Şəbəkələri", "TensorFlow və ya PyTorch", "Kompüter Görmə (CNN)", "Təbii Dil Emalı (NLP)"], status: "advanced" },
            { title: "Böyük Məlumat & MLOps", items: ["Apache Spark", "Hadoop", "Modelin Yerləşdirilməsi", "Docker"], status: "expert" }
        ],
        en: [
            { title: "Math & Statistics", items: ["Linear Algebra", "Probability & Statistics", "Calculus Basics", "Hypothesis Testing"], status: "start" },
            { title: "Programming (Python)", items: ["Python Basics", "Data Structures", "SQL (Querying)", "Data Cleaning"], status: "start" },
            { title: "Data Analysis & Viz", items: ["NumPy", "Pandas (Data Manipulation)", "Matplotlib & Seaborn", "Tableau / PowerBI"], status: "mid" },
            { title: "Machine Learning (ML)", items: ["Scikit-Learn", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"], status: "mid" },
            { title: "Deep Learning (DL)", items: ["Neural Networks", "TensorFlow or PyTorch", "Computer Vision (CNN)", "NLP (RNN/Transformers)"], status: "advanced" },
            { title: "Big Data & MLOps", items: ["Apache Spark", "Hadoop", "Model Deployment (Streamlit)", "Docker for DS"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'StatQuest with Josh Starmer', url: 'https://youtube.com/@statquest', desc: 'İstatistik ve Makine Öğrenmesi mantığını dünyada en iyi anlatan kanal ("BAM!" diyerek).', lang: 'en' },
            { type: 'youtube', title: 'Veri Bilimi Okulu', url: 'https://youtube.com/@VeriBilimiOkulu', desc: 'Türkçe veri bilimi, makine öğrenmesi ve yapay zeka kaynakları.', lang: 'tr' },
            { type: 'youtube', title: 'Krish Naik', url: 'https://youtube.com/@krishnaik06', desc: 'Sektör odaklı pratik veri bilimi ve mülakat hazırlık dersleri.', lang: 'en' },

            // Kurs & Platform
            { type: 'course', title: 'Kaggle', url: 'https://www.kaggle.com/learn', desc: 'Veri bilimcilerin oyun alanı. Ücretsiz mikro kurslar, veri setleri ve yarışmalar.', lang: 'en' },
            { type: 'course', title: 'Machine Learning Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction', desc: 'Andrew Ng\'nin (Yapay zekanın babası) hazırladığı efsanevi başlangıç kursu.', lang: 'en' },
            { type: 'course', title: 'Patika.dev Veri Bilimi', url: 'https://www.patika.dev', desc: 'Türkçe ve projeli veri bilimi bootcamp\'leri.', lang: 'tr' },

            // Araçlar
            { type: 'tool', title: 'Google Colab', url: 'https://colab.research.google.com', desc: 'Kurulum yapmadan tarayıcıda Python kodu çalıştırın (Ücretsiz GPU verir).', lang: 'global' },
            { type: 'tool', title: 'Anaconda', url: 'https://www.anaconda.com', desc: 'Veri bilimi kütüphanelerini yönetmek için en popüler paket yöneticisi.', lang: 'global' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'Hazır yapay zeka modelleri ve veri setleri için dünyanın en büyük deposu.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (AI/Data)', url: 'https://roadmap.sh/ai-data-scientist', desc: 'Veri Bilimcisi olmak için adım adım görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Datacamp Jobs"],
            top_skills: ["Python", "SQL", "Machine Learning", "Pandas", "PowerBI"],
            avg_salary: "Junior: 40k-60k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık Sektörü (Kapital, Pasha)"],
            top_skills: ["SQL", "Python", "Excel (İleri)", "Veri Analizi", "Tableau"],
            avg_salary: "Junior: 1000-1600 AZN | Mid: 2200-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Indeed", "Glassdoor", "Toptal"],
            top_skills: ["Python", "AWS/Cloud", "TensorFlow/PyTorch", "MLOps", "SQL"],
            avg_salary: "Junior: $6k-$8k | Mid: $10k-$14k | Senior: $18k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Matematik bilmek zorunda mıyım?",
                az: "Riyaziyyat bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Math?"
            },
            a: {
                tr: "Evet. Web geliştirmeden farklı olarak veri bilimi; İstatistik, Olasılık ve Lineer Cebir üzerine kuruludur. Modellerin nasıl çalıştığını anlamak için bu şarttır.",
                az: "Bəli. Veb inkişafından fərqli olaraq məlumat elmi; Statistika, Ehtimal və Xətti Cəbr üzərində qurulub. Modellərin necə işlədiyini anlamaq üçün bu şərtdir.",
                en: "Yes. Unlike web development, Data Science is built on Statistics, Probability, and Linear Algebra. It's essential to understand how models work."
            }
        },
        {
            id: 2,
            q: {
                tr: "Python mı R mı öğrenmeliyim?",
                az: "Python yoxsa R öyrənməliyəm?",
                en: "Should I learn Python or R?"
            },
            a: {
                tr: "Kesinlikle Python. Sektörün %90'ı Python kullanıyor. R daha çok akademik araştırmalar ve sadece istatistiksel analizler için kullanılır.",
                az: "Mütləq Python. Sektorun 90%-i Python istifadə edir. R daha çox akademik araşdırmalar və yalnız statistik analizlər üçün istifadə olunur.",
                en: "Definitely Python. 90% of the industry uses Python. R is mostly used for academic research and pure statistical analysis."
            }
        },
        {
            id: 3,
            q: {
                tr: "Veri Analisti ile Veri Bilimcisi farkı nedir?",
                az: "Məlumat Analitiki ilə Məlumat Alimi fərqi nədir?",
                en: "Difference between Data Analyst and Data Scientist?"
            },
            a: {
                tr: "Veri Analisti, 'geçmişte ne olduğunu' anlamak için veriyi raporlar (SQL, Excel, PowerBI). Veri Bilimcisi ise 'gelecekte ne olacağını' tahmin etmek için modeller kurar (Python, ML, AI).",
                az: "Məlumat Analitiki, 'keçmişdə nə olduğunu' anlamaq üçün məlumatı raporlayır (SQL, Excel). Məlumat Alimi isə 'gələcəkdə nə olacağını' təxmin etmək üçün modellər qurur (ML, AI).",
                en: "Data Analyst reports data to understand 'what happened' (SQL, Excel). Data Scientist builds models to predict 'what will happen' (Python, ML, AI)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Güçlü bir bilgisayar şart mı?",
                az: "Güclü kompüter şərtdir?",
                en: "Is a powerful computer required?"
            },
            a: {
                tr: "Derin Öğrenme (Deep Learning) yapacaksanız NVIDIA GPU'lu bir cihaz iyidir. Ancak başlangıç için 'Google Colab' veya 'Kaggle Kernels' kullanarak bulut üzerinden ücretsiz güçlü bilgisayarlar kullanabilirsiniz.",
                az: "Dərin Öyrənmə edəcəksinizsə NVIDIA GPU-lu cihaz yaxşıdır. Lakin başlanğıc üçün 'Google Colab' istifadə edərək bulud üzərindən pulsuz güclü kompüterlər istifadə edə bilərsiniz.",
                en: "If doing Deep Learning, an NVIDIA GPU is good. However, for starters, you can use free powerful cloud computers via 'Google Colab' or 'Kaggle Kernels'."
            }
        },
        {
            id: 5,
            q: {
                tr: "ChatGPT varken Veri Bilimcisine ihtiyaç var mı?",
                az: "ChatGPT varkən Məlumat Aliminə ehtiyac var?",
                en: "Do we need Data Scientists when ChatGPT exists?"
            },
            a: {
                tr: "Evet. ChatGPT kodu yazar ama veriyi temizleyemez, şirketin özel verisine erişip strateji kuramaz veya modelin matematiksel doğruluğunu garanti edemez. AI, veri bilimcinin asistanıdır.",
                az: "Bəli. ChatGPT kod yaza bilər, amma məlumatı təmizləyə bilməz, şirkət strategiyası qura bilməz. AI, məlumat aliminin köməkçisidir.",
                en: "Yes. ChatGPT can write code but can't clean messy data, access private company data for strategy, or guarantee mathematical accuracy. AI is an assistant."
            }
        }
    ]
};
contentData['cross-platform'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Teknoloji Seçimi", items: ["Flutter (Dart Dili)", "React Native (JavaScript/TypeScript)", ".NET MAUI (C#)"], status: "start" },
            { title: "Dil Temelleri", items: ["Dart: OOP, Mixins, Async", "JS/TS: ES6+, Arrow Functions, Promises"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Ağacı, Material/Cupertino", "RN: Flexbox, JSX, Core Components"], status: "mid" },
            { title: "State Management", items: ["Flutter: Provider, Riverpod, Bloc", "RN: Redux Toolkit, Zustand, Context API"], status: "mid" },
            { title: "Navigasyon", items: ["Flutter: GoRouter, Navigator 2.0", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native Entegrasyon", items: ["Kamera & Galeri Erişimi", "GPS & Haritalar", "Platform Channels / Native Modules"], status: "advanced" },
            { title: "Veri & Depolama", items: ["Firebase (Auth, Firestore)", "Supabase", "SQLite / Realm (Yerel DB)", "REST API & GraphQL"], status: "advanced" },
            { title: "Yayınlama & CI/CD", items: ["App Store & Play Store Kuralları", "Codemagic / Bitrise", "Shorebird (OTA Updates)"], status: "expert" }
        ],
        az: [
            { title: "Texnologiya Seçimi", items: ["Flutter (Dart Dili)", "React Native (JavaScript/TypeScript)", ".NET MAUI"], status: "start" },
            { title: "Dil Təməlləri", items: ["Dart: OOP, Asinxron", "JS/TS: ES6+, Promises"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Ağacı", "RN: Flexbox, JSX, Komponentlər"], status: "mid" },
            { title: "State İdarəetməsi", items: ["Flutter: Provider, Bloc", "RN: Redux, Zustand, Context API"], status: "mid" },
            { title: "Naviqasiya", items: ["Flutter: GoRouter", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native İnteqrasiya", items: ["Kamera & Qalereya", "GPS & Xəritələr", "Native Modullar"], status: "advanced" },
            { title: "Məlumat & Yaddaş", items: ["Firebase", "Supabase", "SQLite (Yerli DB)", "REST API"], status: "advanced" },
            { title: "Yayımlama & CI/CD", items: ["Mağaza Qaydaları", "Codemagic", "OTA Yeniləmələri"], status: "expert" }
        ],
        en: [
            { title: "Framework Selection", items: ["Flutter (Dart)", "React Native (JS/TS)", ".NET MAUI"], status: "start" },
            { title: "Language Basics", items: ["Dart: OOP, Futures", "JS/TS: ES6+, Async/Await"], status: "start" },
            { title: "UI & Layout", items: ["Flutter: Widget Tree", "RN: Flexbox, JSX, Stylesheet"], status: "mid" },
            { title: "State Management", items: ["Flutter: Riverpod, Bloc", "RN: Redux Toolkit, Zustand"], status: "mid" },
            { title: "Navigation", items: ["Flutter: GoRouter", "RN: React Navigation, Expo Router"], status: "mid" },
            { title: "Native Integration", items: ["Camera & Permissions", "Maps & Location", "Bridge / JSI"], status: "advanced" },
            { title: "Data & Storage", items: ["Firebase Ecosystem", "Supabase", "Local DB (SQLite)", "API Consumption"], status: "advanced" },
            { title: "Deployment & CI/CD", items: ["Store Guidelines", "Fastlane", "Codemagic / EAS Build"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Flutter
            { type: 'doc', title: 'Flutter Docs', url: 'https://docs.flutter.dev', desc: 'Google\'ın mükemmel dokümantasyonu. Flutter öğrenmenin en iyi yolu.', lang: 'global' },
            { type: 'youtube', title: 'The Flutter Way', url: 'https://youtube.com/@TheFlutterWay', desc: 'Görsel olarak büyüleyici UI tasarımlarını Flutter ile kodlayan kanal.', lang: 'en' },
            { type: 'course', title: 'Veli Bacık (Flutter)', url: 'https://www.youtube.com/@VeliBacik', desc: 'Sektör tecrübesiyle Türkçe Flutter ve mimari dersleri.', lang: 'tr' },

            // React Native
            { type: 'doc', title: 'React Native Docs', url: 'https://reactnative.dev', desc: 'Meta (Facebook) tarafından hazırlanan resmi kaynak.', lang: 'en' },
            { type: 'youtube', title: 'William Candillon', url: 'https://youtube.com/@wcandillon', desc: 'React Native animasyonlarının (Can it be done in React Native?) kralı.', lang: 'en' },
            { type: 'tool', title: 'Expo', url: 'https://expo.dev', desc: 'React Native geliştirmeyi inanılmaz kolaylaştıran araç seti.', lang: 'global' },

            // Genel
            { type: 'roadmap', title: 'Roadmap.sh (Flutter)', url: 'https://roadmap.sh/flutter', desc: 'Adım adım Flutter yol haritası.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (React Native)', url: 'https://roadmap.sh/react-native', desc: 'Adım adım React Native yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Startup İlanları"],
            top_skills: ["Flutter", "React Native", "Firebase", "State Management", "Git"],
            avg_salary: "Junior: 35k-50k TL | Mid: 65k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Staff.az"],
            top_skills: ["Flutter (Çok Popüler)", "React Native", "API Entegrasyonu"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-2800 AZN | Senior: 4000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "RemoteOK", "Upwork", "Freelancer"],
            top_skills: ["Flutter/Dart", "React Native/TypeScript", "Native Modules", "CI/CD"],
            avg_salary: "Junior: $3k-$5k | Mid: $7k-$11k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Flutter mı yoksa React Native mi?",
                az: "Flutter yoxsa React Native?",
                en: "Flutter or React Native?"
            },
            a: {
                tr: "Web geçmişiniz varsa (JS/React biliyorsanız) React Native seçin. Sıfırdan başlıyorsanız veya performans/tutarlılık önceliğinizse Flutter (Dart) daha iyi bir deneyim sunar.",
                az: "Veb təcrübəniz varsa (JS/React bilirsinizsə) React Native seçin. Sıfırdan başlayırsınızsa və ya performans əsasdırsa, Flutter (Dart) daha yaxşıdır.",
                en: "If you have a Web background (JS/React), go for React Native. If starting from scratch or prioritize performance/consistency, Flutter is often better."
            }
        },
        {
            id: 2,
            q: {
                tr: "Native (Swift/Kotlin) ölüyor mu?",
                az: "Native (Swift/Kotlin) ölür?",
                en: "Is Native (Swift/Kotlin) dying?"
            },
            a: {
                tr: "Hayır. Yüksek performanslı oyunlar, AR/VR veya donanıma çok yakın çalışan uygulamalar için hala Native şarttır. Ancak standart iş uygulamaları (E-ticaret vb.) için Cross-Platform artık standarttır.",
                az: "Xeyr. Yüksək performanslı oyunlar və ya donanımla sıx işləyən tətbiqlər üçün Native hələ də şərtdir. Lakin standart biznes tətbiqləri üçün Cross-Platform artıq standartdır.",
                en: "No. Native is still required for high-performance games, AR/VR, or hardware-heavy apps. But for standard business apps, Cross-Platform is now the standard."
            }
        },
        {
            id: 3,
            q: {
                tr: "iOS çıktısı almak için Mac şart mı?",
                az: "iOS çıxışı almaq üçün Mac şərtdir?",
                en: "Is a Mac required for iOS builds?"
            },
            a: {
                tr: "Evet, kod yazmak için şart değil ama uygulamayı derlemek (build) ve App Store'a atmak için Mac gerekir. (Expo Application Services gibi bulut çözümleriyle Mac olmadan da yapılabilir ama sınırlıdır).",
                az: "Bəli, kod yazmaq üçün şərt deyil, amma tətbiqi yığmaq (build) və App Store-a atmaq üçün Mac lazımdır. (Expo kimi bulud həlləri ilə Mac olmadan da edilə bilər).",
                en: "Yes, you need a Mac to build and deploy to the App Store. (Cloud solutions like EAS allow building without a Mac, but eventually, a Mac is recommended)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Web sitemi mobil uygulamaya çevirebilir miyim?",
                az: "Veb saytımı mobil tətbiqə çevirə bilərəm?",
                en: "Can I turn my website into a mobile app?"
            },
            a: {
                tr: "React Native kullanıyorsanız web kodlarınızın (Business Logic) büyük kısmını paylaşabilirsiniz. Flutter da Web'i destekler ancak sadece bir 'WebView' içine site gömmek profesyonel bir yaklaşım değildir.",
                az: "React Native istifadə edirsinizsə, veb kodlarınızın böyük hissəsini paylaşa bilərsiniz. Flutter da Vebi dəstəkləyir, amma sadəcə saytı 'WebView' içinə qoymaq peşəkar deyil.",
                en: "If using React Native, you can share a lot of logic with the web. Flutter also supports Web. However, just wrapping a site in a 'WebView' is not professional."
            }
        },
        {
            id: 5,
            q: {
                tr: "Hangi bilgisayar gereklidir?",
                az: "Hansı kompüter lazımdır?",
                en: "Which computer is required?"
            },
            a: {
                tr: "Flutter ve React Native, emülatörler yüzünden çok RAM tüketir. Minimum 16GB RAM ve SSD diski olan herhangi bir bilgisayar iş görür. Mac (M1/M2) en iyi performansı verir.",
                az: "Flutter və React Native emulyatorlara görə çox RAM yeyir. Minimum 16GB RAM və SSD diski olan hər hansı kompüter iş görər. Mac (M1/M2) ən yaxşı performansı verir.",
                en: "Flutter and RN consume a lot of RAM due to emulators. Any PC with min 16GB RAM and SSD works. Mac (M1/M2) offers the best performance."
            }
        }
    ]
};
contentData['ios'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Ekosisteme Giriş", items: ["macOS Kullanımı", "Xcode Kurulumu & Arayüzü", "Apple Developer Program Nedir?"], status: "start" },
            { title: "Swift Dili (Temeller)", items: ["Değişkenler & Sabitler (let/var)", "Optionals (?) & Unwrapping", "Struct vs Class", "Loops & Collections"], status: "start" },
            { title: "Modern UI: SwiftUI", items: ["View Yapısı & Modifiers", "State Management (@State, @Binding)", "NavigationStack", "Listeler & Gridler"], status: "mid" },
            { title: "Legacy UI: UIKit (Hala Önemli)", items: ["Storyboards vs Programmatic UI", "Auto Layout & Constraints", "UITableView / UICollectionView", "View Controller Lifecycle"], status: "mid" },
            { title: "Veri ve Ağ (Networking)", items: ["URLSession & API İstekleri", "JSON Decoding (Codable)", "SwiftData (Modern DB)", "Core Data (Klasik DB)"], status: "mid" },
            { title: "Mimari Desenler", items: ["MVVM (Sektör Standardı)", "MVC (Klasik)", "The Composable Architecture (TCA)", "Dependency Injection"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Concurrency (Async/Await)", "Grand Central Dispatch (GCD)", "Memory Management (ARC)", "Unit Testing & XCTest"], status: "expert" },
            { title: "Dağıtım ve Mağaza", items: ["App Store Connect", "TestFlight", "Provisioning Profiles & Certificates", "CI/CD (Xcode Cloud)"], status: "expert" }
        ],
        az: [
            { title: "Ekosistemə Giriş", items: ["macOS İstifadəsi", "Xcode Quraşdırılması", "Apple Developer Proqramı Nədir?"], status: "start" },
            { title: "Swift Dili (Təməllər)", items: ["Dəyişənlər & Sabitlər", "Optionals (?) & Ailə", "Struct vs Class", "Dövrələr & Kolleksiyalar"], status: "start" },
            { title: "Müasir UI: SwiftUI", items: ["View Strukturu", "State İdarəetməsi (@State, @Binding)", "Naviqasiya", "Siyahılar"], status: "mid" },
            { title: "Köhnə UI: UIKit (Hələ də Vacib)", items: ["Storyboards vs Kodla UI", "Auto Layout", "UITableView", "Həyat Dövrü (Lifecycle)"], status: "mid" },
            { title: "Məlumat və Şəbəkə", items: ["URLSession & API İstəkləri", "JSON (Codable)", "SwiftData (Yeni)", "Core Data (Klassik)"], status: "mid" },
            { title: "Memarlıq Nümunələri", items: ["MVVM (Standart)", "MVC", "TCA (Mütəxəssis)", "Dependency Injection"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Concurrency (Async/Await)", "Yaddaş İdarəetməsi (ARC)", "Unit Testlər"], status: "expert" },
            { title: "Yayılma və Mağaza", items: ["App Store Connect", "TestFlight", "Sertifikatlar & Profillər", "CI/CD (Xcode Cloud)"], status: "expert" }
        ],
        en: [
            { title: "Ecosystem Basics", items: ["macOS Basics", "Xcode Setup & Interface", "Apple Developer Program"], status: "start" },
            { title: "Swift Language", items: ["Variables (let/var)", "Optionals (?) & Unwrapping", "Struct vs Class", "Control Flow"], status: "start" },
            { title: "Modern UI: SwiftUI", items: ["Views & Modifiers", "State Management", "NavigationStack", "Lists & Grids"], status: "mid" },
            { title: "Legacy UI: UIKit", items: ["Programmatic UI", "Auto Layout", "Delegates & Protocols", "View Controller Lifecycle"], status: "mid" },
            { title: "Data & Networking", items: ["URLSession & Async/Await", "JSON Parsing (Codable)", "SwiftData (Modern)", "Core Data (Legacy)"], status: "mid" },
            { title: "Architecture", items: ["MVVM (Industry Standard)", "MVC", "TCA (The Composable Architecture)", "Clean Architecture"], status: "advanced" },
            { title: "Advanced Topics", items: ["Structured Concurrency", "Memory Management (ARC)", "Combine Framework", "Unit/UI Testing"], status: "expert" },
            { title: "Deployment", items: ["App Store Connect", "TestFlight", "Certificates & Provisioning", "CI/CD Workflows"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube & Kurslar
            { type: 'course', title: '100 Days of SwiftUI', url: 'https://www.hackingwithswift.com/100/swiftui', desc: 'Paul Hudson\'ın efsanevi, ücretsiz ve günlük planlı kursu. iOS\'un kutsal kitabı.', lang: 'en' },
            { type: 'youtube', title: 'Swiftful Thinking', url: 'https://youtube.com/@SwiftfulThinking', desc: 'Nick Sarno. Özellikle SwiftUI ve MVVM mimarisi için dünyadaki en iyi anlatım.', lang: 'en' },
            { type: 'youtube', title: 'Sean Allen', url: 'https://youtube.com/@seanallen', desc: 'Kariyer tavsiyeleri ve Swift üzerine popüler içerikler.', lang: 'en' },
            { type: 'course', title: 'Angela Yu iOS Course', url: 'https://www.udemy.com', desc: 'Udemy\'nin en popüler başlangıç kursu (UIKit ve SwiftUI karışık).', lang: 'en' },

            // Dokümantasyon & Araçlar
            { type: 'doc', title: 'Apple Developer Docs', url: 'https://developer.apple.com/documentation/', desc: 'Apple\'ın resmi dokümantasyonu. Her şeyin kaynağı.', lang: 'en' },
            { type: 'doc', title: 'Human Interface Guidelines', url: 'https://developer.apple.com/design/human-interface-guidelines/', desc: 'Apple tasarım kuralları. Tasarımcı olmasanız bile okumalısınız.', lang: 'global' },
            { type: 'tool', title: 'SF Symbols', url: 'https://developer.apple.com/sf-symbols/', desc: 'Apple\'ın uygulamanızda kullanabileceğiniz binlerce ücretsiz ikonu.', lang: 'global' },
            { type: 'tool', title: 'Xcode', url: 'https://developer.apple.com/xcode/', desc: 'iOS geliştirmek için zorunlu olan IDE.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/ios', desc: 'iOS geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "iOS Developer TR (Slack/Discord)"],
            top_skills: ["Swift", "SwiftUI", "UIKit (Legacy projeler)", "Git", "MVVM"],
            avg_salary: "Junior: 40k-55k TL | Mid: 75k-110k TL | Senior: 150k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bankacılık Sektörü İlanları"],
            top_skills: ["Swift", "UIKit", "Auto Layout", "REST API", "Figma"],
            avg_salary: "Junior: 1000-1500 AZN | Mid: 2000-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Hired", "Remote.co", "WeWorkRemotely"],
            top_skills: ["SwiftUI", "Combine", "TCA", "CI/CD", "Unit Testing"],
            avg_salary: "Junior: $5k-$7k | Mid: $9k-$13k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Mac bilgisayar şart mı?",
                az: "Mac kompüteri şərtdir?",
                en: "Is a Mac required?"
            },
            a: {
                tr: "Evet. Xcode sadece macOS'ta çalışır. Hackintosh veya sanal makine (VM) ile öğrenilebilir ama profesyonel iş ve App Store'a yükleme yapmak için gerçek bir Mac şarttır.",
                az: "Bəli. Xcode yalnız macOS-da işləyir. Hackintosh və ya virtual maşınla öyrənmək olar, amma peşəkar iş və App Store-a yükləmək üçün real Mac şərtdir.",
                en: "Yes. Xcode only runs on macOS. You can learn on a VM/Hackintosh, but for professional work and App Store deployment, a real Mac is mandatory."
            }
        },
        {
            id: 2,
            q: {
                tr: "SwiftUI mı yoksa UIKit mi öğrenmeliyim?",
                az: "SwiftUI yoxsa UIKit öyrənməliyəm?",
                en: "Should I learn SwiftUI or UIKit?"
            },
            a: {
                tr: "Kesinlikle SwiftUI ile başlayın, gelecek orada. Ancak iş bulmak için UIKit'i 'okuyabilmek' ve temel seviyede bilmek zorundasınız çünkü eski projeler hala UIKit dolu.",
                az: "Mütləq SwiftUI ilə başlayın, gələcək oradadır. Lakin iş tapmaq üçün UIKit-i 'oxuya bilmək' və təməl səviyyədə bilmək məcburiyyətindəsiniz, çünki köhnə layihələr hələ də UIKit doludur.",
                en: "Definitely start with SwiftUI, it's the future. However, you must be able to 'read' and know basic UIKit to find a job, as legacy projects are full of it."
            }
        },
        {
            id: 3,
            q: {
                tr: "Uygulama yayınlamak ücretli mi?",
                az: "Tətbiq yayımlamaq ödənişlidir?",
                en: "Is publishing apps free?"
            },
            a: {
                tr: "Hayır. Apple App Store'a uygulama yüklemek için yıllık 99$ geliştirici ücreti ödemeniz gerekir. (Google Play'de bu tek seferlik 25$ civarıdır).",
                az: "Xeyr. Apple App Store-a tətbiq yükləmək üçün illik 99$ tərtibatçı haqqı ödəməlisiniz. (Google Play-də bu birdəfəlik 25$-dır).",
                en: "No. You need to pay a $99 annual developer fee to publish on the App Store. (Google Play is a one-time $25 fee)."
            }
        },
        {
            id: 4,
            q: {
                tr: "Objective-C öğrenmeli miyim?",
                az: "Objective-C öyrənməliyəm?",
                en: "Should I learn Objective-C?"
            },
            a: {
                tr: "Hayır. 2014'ten beri Swift kullanılıyor. Objective-C sadece çok eski bankacılık uygulamalarında bakım yapmak için gerekebilir, yeni başlayanlar için vakit kaybıdır.",
                az: "Xeyr. 2014-cü ildən bəri Swift istifadə olunur. Objective-C yalnız çox köhnə bank tətbiqlərində baxım etmək üçün lazım ola bilər, yeni başlayanlar üçün vaxt itkisidir.",
                en: "No. Swift has been the standard since 2014. Objective-C is only needed for maintaining very old legacy apps; it's a waste of time for beginners."
            }
        },
        {
            id: 5,
            q: {
                tr: "iPhone cihazım olması gerekir mi?",
                az: "iPhone cihazım olmalıdır?",
                en: "Do I need an iPhone?"
            },
            a: {
                tr: "Xcode içindeki 'Simulator' çoğu işi (UI, mantık) test etmek için yeterlidir. Ancak Kamera, GPS veya Jiroskop gibi sensörleri test etmek için gerçek cihaz gerekir.",
                az: "Xcode daxilindəki 'Simulator' bir çox işi test etmək üçün kifayətdir. Lakin Kamera, GPS və ya Giroskop kimi sensorları yoxlamaq üçün real cihaz lazımdır.",
                en: "The 'Simulator' in Xcode is enough for most tasks. However, a real device is required to test sensors like Camera, GPS, or Gyroscope."
            }
        },
        {
            id: 6,
            q: {
                tr: "Neden Flutter/React Native yerine Native iOS?",
                az: "Niyə Flutter/React Native yerinə Native iOS?",
                en: "Why Native iOS instead of Flutter/RN?"
            },
            a: {
                tr: "En yüksek performans, en yeni Apple özelliklerine anında erişim (örn: Dynamic Island) ve daha stabil, 'Premium' hissettiren uygulamalar için Native tercih edilir.",
                az: "Ən yüksək performans, ən yeni Apple xüsusiyyətlərinə dərhal çıxış (məs: Dynamic Island) və daha stabil, 'Premium' hiss etdirən tətbiqlər üçün Native seçilir.",
                en: "Native is preferred for peak performance, instant access to latest Apple features (e.g., Dynamic Island), and building stable, 'Premium' feeling apps."
            }
        }
    ]
};
contentData['frontend'] = {
    // 1. YOL HARİTASI (ROADMAP) - Genişletilmiş ve AZ Dili Eklenmiş
    roadmap: {
        tr: [
            { title: "İnternetin Temelleri", items: ["DNS & Hosting Nedir?", "HTTP/HTTPS & SSL", "Tarayıcılar Nasıl Çalışır?", "Domain Yönetimi"], status: "start" },
            { title: "HTML & CSS", items: ["Semantic HTML5", "SEO Temelleri", "Flexbox & Grid", "Responsive Design", "BEM Metodolojisi"], status: "start" },
            { title: "Git & Versiyon Kontrol", items: ["Git Komutları", "GitHub/GitLab", "Pull Request & Merge", "Semantic Versioning"], status: "mid" },
            { title: "Modern CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI / Material UI"], status: "mid" },
            { title: "JavaScript (Derinlemesine)", items: ["ES6+ Syntax", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Local/Session Storage"], status: "mid" },
            { title: "Modern Frameworkler", items: ["React.js (Hooks, Custom Hooks)", "Next.js (App Router, SSR, SSG)", "Vue.js 3"], status: "advanced" },
            { title: "State Management", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query (React Query)"], status: "advanced" },
            { title: "Test & Güvenlik", items: ["Jest & React Testing Library", "Cypress/Playwright", "OWASP Security Basics", "JWT & Auth"], status: "advanced" },
            { title: "Performans & Deployment", items: ["Lazy Loading", "Code Splitting", "Vercel/Netlify Deploy", "CI/CD Pipeline"], status: "expert" }
        ],
        az: [
            { title: "İnternetin Əsasları", items: ["DNS & Hostinq Nədir?", "HTTP/HTTPS & SSL", "Brauzerlər Necə İşləyir?", "Domen İdarəetməsi"], status: "start" },
            { title: "HTML & CSS", items: ["Semantik HTML5", "SEO Əsasları", "Flexbox & Grid", "Adaptiv Dizayn (Responsive)", "BEM Metodologiyası"], status: "start" },
            { title: "Git & Versiya Nəzarəti", items: ["Git Əmrləri", "GitHub/GitLab", "Pull Request & Merge", "Semantik Versiyalar"], status: "mid" },
            { title: "Müasir CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI"], status: "mid" },
            { title: "JavaScript (Dərinləşdirmə)", items: ["ES6+ Sintaksis", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Yaddaş (Storage)"], status: "mid" },
            { title: "Müasir Freymvörklər", items: ["React.js", "Next.js (App Router)", "Vue.js 3"], status: "advanced" },
            { title: "State İdarəetməsi", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"], status: "advanced" },
            { title: "Test & Təhlükəsizlik", items: ["Jest & RTL", "Cypress/Playwright", "Veb Təhlükəsizliyi", "JWT & Auth"], status: "advanced" },
            { title: "Performans & Yerləşdirmə", items: ["Lazy Loading", "Kodun Bölünməsi", "Vercel/Netlify", "CI/CD Prosesləri"], status: "expert" }
        ],
        en: [
            { title: "Internet Fundamentals", items: ["How DNS Works", "HTTP/HTTPS & SSL", "Browser Engines", "Domain Management"], status: "start" },
            { title: "HTML & CSS", items: ["Semantic HTML5", "SEO Basics", "Flexbox & Grid", "Responsive Design", "BEM Methodology"], status: "start" },
            { title: "Git & Version Control", items: ["Git Commands", "GitHub/GitLab", "PR & Code Review", "Semantic Versioning"], status: "mid" },
            { title: "Modern CSS & UI", items: ["Tailwind CSS", "Sass/SCSS", "CSS Modules", "Styled Components", "ShadCN UI"], status: "mid" },
            { title: "JavaScript Mastery", items: ["ES6+ Syntax", "DOM & Event Loop", "Async/Await & Promises", "Fetch & Axios", "Web Storage"], status: "mid" },
            { title: "Modern Frameworks", items: ["React.js", "Next.js (App Router)", "Vue.js 3"], status: "advanced" },
            { title: "State Management", items: ["Redux Toolkit", "Zustand", "Context API", "TanStack Query"], status: "advanced" },
            { title: "Testing & Security", items: ["Jest & RTL", "Cypress/Playwright", "Web Security Basics", "JWT & Auth"], status: "advanced" },
            { title: "Performance & Deploy", items: ["Lazy Loading", "Code Splitting", "Vercel/Netlify", "CI/CD Pipelines"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES) - Yeni Araçlar Eklendi
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'Prototürk', url: 'https://youtube.com/@prototurk', desc: 'Tayfun Erbilen - HTML/CSS/JS ve PHP üzerine efsane kaynak.', lang: 'tr' },
            { type: 'youtube', title: 'Arin Yazılım', url: 'https://youtube.com/@arinyazilim', desc: 'Modern JS ve React konularında çok detaylı anlatım.', lang: 'tr' },
            { type: 'youtube', title: 'Kevin Powell', url: 'https://youtube.com/@kevinpowell', desc: 'CSS\'in kralı. Tasarımı koda dökme uzmanı.', lang: 'en' },
            { type: 'youtube', title: 'Fireship', url: 'https://youtube.com/@Fireship', desc: 'Teknolojileri 100 saniyede anlatan hızlı ve güncel kanal.', lang: 'en' },

            // Dokümantasyon & Eğitim
            { type: 'doc', title: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web teknolojileri için ana sözlük (İncil).', lang: 'global' },
            { type: 'doc', title: 'React.dev', url: 'https://react.dev', desc: 'React\'in yeni ve interaktif resmi dokümantasyonu.', lang: 'en' },
            { type: 'course', title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Ücretsiz sertifikalı eğitim kampı.', lang: 'en' },
            { type: 'course', title: 'Patika.dev', url: 'https://www.patika.dev', desc: 'Türkçe, ücretsiz ve bootcamp imkanlı platform.', lang: 'tr' },

            // Araçlar (Tools)
            { type: 'tool', title: 'Can I Use?', url: 'https://caniuse.com', desc: 'Hangi CSS/JS özelliğinin hangi tarayıcıda çalıştığını görün.', lang: 'global' },
            { type: 'tool', title: 'UIverse', url: 'https://uiverse.io', desc: 'Hazır, açık kaynaklı CSS buton ve kart tasarımları.', lang: 'global' },
            { type: 'tool', title: 'Realtime Colors', url: 'https://realtimecolors.com', desc: 'Renk paletlerini gerçek bir web sitesi üzerinde test edin.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/frontend', desc: 'Dünya standartlarında görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY) - Güncellendi
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Youthall", "PeakUp", "Armut (Freelance)"],
            top_skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Git"],
            avg_salary: "Junior: 30k-45k TL | Mid: 55k-95k TL | Senior: 110k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "Busy.az", "LinkedIn", "JobSearch.az"],
            top_skills: ["React", "JavaScript", "Bootstrap", "Figma to Code", "jQuery (Legacy)"],
            avg_salary: "Junior: 700-1200 AZN | Mid: 1600-2800 AZN | Senior: 3500+ AZN"
        },
        GLOBAL: {
            platforms: ["Indeed", "Remote OK", "Dice", "Wellfound", "Toptal"],
            top_skills: ["Next.js", "TypeScript", "AWS/Cloud", "Testing (Cypress/Jest)"],
            avg_salary: "Junior: $2k-$4k | Mid: $5k-$8k | Senior: $10k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ) - Tamamen Yenilendi ve Çoklu Dil Yapısına Geçildi
    // Artık her bir obje içinde 3 dil barındırıyor, böylece dil değişimi kolaylaşır.
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi framework'ü seçmeliyim?",
                az: "Hansı freymvörkü seçməliyəm?",
                en: "Which framework should I choose?"
            },
            a: {
                tr: "Piyasa hakimiyeti ve iş imkanları için React. Daha kolay öğrenim için Vue. Büyük kurumsal projeler için Angular.",
                az: "Bazar hakimiyyəti və iş imkanları üçün React. Daha asan öyrənmək üçün Vue. Böyük korporativ layihələr üçün Angular.",
                en: "React for job market dominance. Vue for an easier learning curve. Angular for large-scale enterprise projects."
            }
        },
        {
            id: 2,
            q: {
                tr: "İngilizce bilmek zorunda mıyım?",
                az: "İngilis dilini bilmək vacibdirmi?",
                en: "Is English necessary?"
            },
            a: {
                tr: "Evet. Kod yazarken Türkçe kaynak bulabilirsiniz ama hataları çözmek ve dokümantasyon okumak için teknik İngilizce şarttır.",
                az: "Bəli. Kod yazarkən yerli qaynaqlar tapa bilərsiniz, amma xətaları həll etmək və sənədləri oxumaq üçün texniki ingilis dili şərtdir.",
                en: "Yes. While you can find local resources, technical English is essential for debugging and reading official documentation."
            }
        },
        {
            id: 3,
            q: {
                tr: "Frontend mi Backend mi?",
                az: "Frontend yoxsa Backend?",
                en: "Frontend or Backend?"
            },
            a: {
                tr: "Görsellik, tasarım ve kullanıcı etkileşimi sizi heyecanlandırıyorsa Frontend. Veri tabanları, sunucu mimarisi ve mantık seviyorsanız Backend.",
                az: "Görünüş, dizayn və istifadəçi qarşılıqlı əlaqəsi sizi həyəcanlandırırsa Frontend. Məlumat bazaları, server arxitekturası və məntiq sevirsinizsə Backend.",
                en: "Frontend if you love visuals, design, and user interaction. Backend if you prefer databases, server architecture, and logic."
            }
        },
        {
            id: 4,
            q: {
                tr: "Matematik bilmek şart mı?",
                az: "Riyaziyyat bilmək mütləqdirmi?",
                en: "Is math strictly required?"
            },
            a: {
                tr: "Genel web geliştirme için hayır, temel mantık yeterlidir. Ancak Canvas, WebGL veya oyun geliştirecekseniz matematik gerekir.",
                az: "Ümumi veb inkişafı üçün xeyr, təməl məntiq kifayətdir. Lakin Canvas, WebGL və ya oyun hazırlayacaqsınızsa riyaziyyat lazımdır.",
                en: "Not for general web development, basic logic is enough. However, if you work with Canvas, WebGL, or game dev, math is required."
            }
        },
        {
            id: 5,
            q: {
                tr: "Yapay Zeka (ChatGPT/Copilot) işimi elimden alacak mı?",
                az: "Süni İntellekt (AI) işimi əlimdən alacaqmı?",
                en: "Will AI replace developers?"
            },
            a: {
                tr: "Hayır, AI bir araçtır. Kod yazmayı hızlandırır ama mimari kararları veremez. AI kullanan yazılımcı, kullanmayanın yerini alacaktır.",
                az: "Xeyr, AI bir alətdir. Kod yazmağı sürətləndirir, amma memarlıq qərarlarını verə bilməz. AI istifadə edən proqramçı, etməyəni əvəz edəcək.",
                en: "No, AI is a tool. It speeds up coding but can't make architectural decisions. Developers using AI will replace those who don't."
            }
        },
        {
            id: 6,
            q: {
                tr: "Üniversite diploması gerekli mi?",
                az: "Universitet diplomu vacibdirmi?",
                en: "Is a university degree required?"
            },
            a: {
                tr: "Çoğu özel sektör şirketi için hayır. Önemli olan portfolyonuz ve GitHub hesabınızdır. Ancak bazı kurumsal firmalar hala diploma isteyebilir.",
                az: "Özəl sektorun əksəriyyəti üçün xeyr. Əsas olan portfolionuz və GitHub hesabınızdır. Lakin bəzi korporativ şirkətlər hələ də diplom tələb edə bilər.",
                en: "For most private tech companies, no. Your portfolio and GitHub matter more. However, some corporate firms may still ask for one."
            }
        },
        {
            id: 7,
            q: {
                tr: "Mac mi Windows mu kullanmalıyım?",
                az: "Mac yoxsa Windows istifadə etməliyəm?",
                en: "Should I use Mac or Windows?"
            },
            a: {
                tr: "Frontend için her ikisi de uygundur. Ancak iOS uygulamaları da geliştirmeyi düşünüyorsanız Mac zorunludur. Sektör standardı genelde Mac'tir.",
                az: "Frontend üçün hər ikisi uyğundur. Lakin iOS tətbiqləri də hazırlamağı düşünürsünüzsə Mac mütləqdir. Sektor standartı adətən Mac-dir.",
                en: "Both are fine for Frontend. However, if you plan to develop iOS apps too, Mac is mandatory. Mac is generally the industry standard."
            }
        },
        {
            id: 8,
            q: {
                tr: "TypeScript öğrenmeli miyim?",
                az: "TypeScript öyrənməliyəm?",
                en: "Should I learn TypeScript?"
            },
            a: {
                tr: "Kesinlikle evet! Modern iş ilanlarının %80'i artık düz JavaScript yerine TypeScript bilgisi talep ediyor.",
                az: "Mütləq bəli! Müasir iş elanlarının 80%-i artıq sadə JavaScript əvəzinə TypeScript biliyi tələb edir.",
                en: "Absolutely yes! 80% of modern job postings now require TypeScript instead of plain JavaScript."
            }
        }
    ]
};

contentData['backend'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "İnternet & İşletim Sistemi", items: ["HTTP/HTTPS, DNS Nasıl Çalışır?", "Linux Terminal Komutları", "Process Management", "Thread & Concurrency"], status: "start" },
            { title: "Bir Dil Seçimi", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "İlişkisel Veritabanları (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Sorguları & Joins", "ACID Prensipleri", "Normalizasyon"], status: "mid" },
            { title: "NoSQL Veritabanları", items: ["MongoDB (Document)", "Redis (Key-Value)", "Cassandra (Wide Column)"], status: "mid" },
            { title: "API Geliştirme", items: ["RESTful API Standartları", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Veri Yönetimi", items: ["Prisma / TypeORM", "Entity Framework", "SQL Injection Koruması", "Migration Yönetimi"], status: "mid" },
            { title: "DevOps & Deployment", items: ["Docker & Containerization", "CI/CD (GitHub Actions)", "AWS/DigitalOcean Temelleri", "Nginx/Apache"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Microservices Mimarisi", "Message Brokers (RabbitMQ/Kafka)", "Caching Stratejileri", "WebSockets"], status: "expert" },
            { title: "Test & Güvenlik", items: ["Unit & Integration Testing", "OWASP Top 10 Backend", "Rate Limiting", "Logging & Monitoring"], status: "expert" }
        ],
        az: [
            { title: "İnternet & Əməliyyat Sistemləri", items: ["HTTP/HTTPS, DNS Necə İşləyir?", "Linux Terminal Əmrləri", "Proses İdarəetməsi", "Thread & Concurrency"], status: "start" },
            { title: "Dil Seçimi", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "Əlaqəli Məlumat Bazaları (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Sorğuları & Joins", "ACID Prinsipləri", "Normalizasiya"], status: "mid" },
            { title: "NoSQL Məlumat Bazaları", items: ["MongoDB", "Redis (Key-Value)", "Cassandra"], status: "mid" },
            { title: "API İnkişafı", items: ["RESTful API Standartları", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Məlumat İdarəetməsi", items: ["Prisma / TypeORM", "Entity Framework", "SQL Injection Qorunması", "Miqrasiya İdarəetməsi"], status: "mid" },
            { title: "DevOps & Yerləşdirmə", items: ["Docker & Konteynerlər", "CI/CD (GitHub Actions)", "AWS/DigitalOcean Əsasları", "Nginx/Apache"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Microservices Arxitekturası", "Message Brokers (RabbitMQ/Kafka)", "Keşləmə (Caching)", "WebSockets"], status: "expert" },
            { title: "Test & Təhlükəsizlik", items: ["Unit & Integration Testing", "OWASP Top 10 Backend", "Rate Limiting", "Logging & Monitoring"], status: "expert" }
        ],
        en: [
            { title: "Internet & OS Basics", items: ["How HTTP/DNS Works", "Linux Terminal Basics", "Process Management", "Concurrency & Threads"], status: "start" },
            { title: "Pick a Language", items: ["JavaScript (Node.js)", "Python", "Go (Golang)", "Java", "C# (.NET)"], status: "start" },
            { title: "Relational Databases (SQL)", items: ["PostgreSQL", "MySQL/MariaDB", "SQL Queries & Joins", "ACID Properties", "Normalization"], status: "mid" },
            { title: "NoSQL Databases", items: ["MongoDB", "Redis", "Cassandra"], status: "mid" },
            { title: "API Development", items: ["RESTful Standards", "GraphQL", "Authentication (JWT, OAuth2)", "JSON & XML"], status: "mid" },
            { title: "ORM & Data Management", items: ["Prisma / TypeORM", "Entity Framework", "Preventing SQL Injection", "Migration Management"], status: "mid" },
            { title: "DevOps & Deployment", items: ["Docker & Containers", "CI/CD Pipelines", "Cloud Basics (AWS/DO)", "Reverse Proxies (Nginx)"], status: "advanced" },
            { title: "Advanced Topics", items: ["Microservices Architecture", "Message Brokers (RabbitMQ/Kafka)", "Caching Strategies", "WebSockets"], status: "expert" },
            { title: "Testing & Security", items: ["Unit & Integration Testing", "OWASP Backend Risks", "Rate Limiting", "Observability"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube Kanalları
            { type: 'youtube', title: 'Hussein Nasser', url: 'https://youtube.com/@hnasr', desc: 'Backend mühendisliği üzerine dünyadaki en iyi teknik kanal (Database, Protocol vs).', lang: 'en' },
            { type: 'youtube', title: 'Gençay Yıldız', url: 'https://youtube.com/@GencayYildiz', desc: '.NET Core ve Backend mimarisi üzerine harika Türkçe içerikler.', lang: 'tr' },
            { type: 'youtube', title: 'Traversy Media', url: 'https://youtube.com/@TraversyMedia', desc: 'Node.js, Python ve PHP için proje bazlı harika anlatımlar.', lang: 'en' },
            { type: 'youtube', title: 'Be the Better Dev', url: 'https://youtube.com/@BetheBetterDev', desc: 'Sistem tasarımı ve Cloud mimarisi üzerine odaklı.', lang: 'en' },

            // Dokümantasyon & Kurs
            { type: 'doc', title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/', desc: 'Dünyanın en gelişmiş açık kaynak veritabanı dokümantasyonu.', lang: 'global' },
            { type: 'course', title: 'Full Stack Open', url: 'https://fullstackopen.com', desc: 'Helsinki Üniversitesi\'nin ücretsiz, efsanevi Node.js ve React kursu.', lang: 'en' },
            { type: 'doc', title: 'Redis Docs', url: 'https://redis.io/docs/', desc: 'Caching ve hızlı veri yönetimi için başucu kaynağı.', lang: 'global' },

            // Araçlar (Tools)
            { type: 'tool', title: 'Postman', url: 'https://www.postman.com', desc: 'API\'lerinizi test etmek ve dökümante etmek için 1 numaralı araç.', lang: 'global' },
            { type: 'tool', title: 'Docker Hub', url: 'https://hub.docker.com', desc: 'Hazır veritabanı ve servis imajlarını bulabileceğiniz depo.', lang: 'global' },
            { type: 'tool', title: 'Supabase', url: 'https://supabase.com', desc: 'Backend kurmadan veritabanı ve Auth işlemlerini halleden Firebase alternatifi.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/backend', desc: 'Backend için adım adım görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut (Freelance)", "Remoteok.io"],
            top_skills: [".NET Core (C#)", "Java (Spring Boot)", "Node.js", "PostgreSQL", "Docker"],
            avg_salary: "Junior: 35k-50k TL | Mid: 60k-100k TL | Senior: 120k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "Busy.az", "LinkedIn", "Staff.az"],
            top_skills: ["PHP (Laravel)", "C# (.NET)", "Java", "SQL", "Python (Django)"],
            avg_salary: "Junior: 800-1300 AZN | Mid: 1800-3000 AZN | Senior: 4000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "Hacker News Jobs", "We Work Remotely", "Arc.dev"],
            top_skills: ["Go (Golang)", "Rust", "Node.js", "AWS/Cloud", "Kubernetes"],
            avg_salary: "Junior: $3k-$5k | Mid: $6k-$10k | Senior: $12k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi Backend dilini seçmeliyim?",
                az: "Hansı Backend dilini seçməliyəm?",
                en: "Which Backend language should I choose?"
            },
            a: {
                tr: "Hızlı prototip ve Web için Node.js. Kurumsal ve büyük projeler için Java veya C#. Veri bilimi ve sadelik için Python. Yüksek performans ve modern sistemler için Go.",
                az: "Sürətli prototip və Veb üçün Node.js. Korporativ və böyük layihələr üçün Java və ya C#. Məlumat elmi və sadəlik üçün Python. Yüksək performans üçün Go.",
                en: "Node.js for rapid prototyping/Web. Java or C# for enterprise. Python for data science/simplicity. Go for high performance and modern systems."
            }
        },
        {
            id: 2,
            q: {
                tr: "Frontend mi Backend mi daha zor?",
                az: "Frontend yoxsa Backend daha çətindir?",
                en: "Is Frontend or Backend harder?"
            },
            a: {
                tr: "Backend mantıksal olarak daha komplekstir (güvenlik, veri tutarlılığı, ölçekleme). Frontend ise görsel detaylar ve tarayıcı uyumluluğu açısından yorucudur. Analitik zekanız güçlüyse Backend daha keyiflidir.",
                az: "Backend məntiqi olaraq daha mürəkkəbdir (təhlükəsizlik, məlumat bütövlüyü). Frontend isə vizual detallar baxımından yorucudur. Analitik zəkanız güclüdürsə Backend daha zövqlüdür.",
                en: "Backend is logically more complex (security, data consistency, scaling). Frontend is demanding regarding visuals/browser compatibility. If you are analytical, Backend might be better."
            }
        },
        {
            id: 3,
            q: {
                tr: "SQL mi NoSQL mi öğrenmeliyim?",
                az: "SQL yoxsa NoSQL öyrənməliyəm?",
                en: "Should I learn SQL or NoSQL?"
            },
            a: {
                tr: "Kesinlikle önce SQL (PostgreSQL veya MySQL). Veri ilişkilerini anlamak backend'in temelidir. NoSQL (MongoDB vb.) daha sonra ihtiyaca göre öğrenilir.",
                az: "Mütləq əvvəlcə SQL (PostgreSQL və ya MySQL). Məlumat əlaqələrini anlamaq backend-in təməlidir. NoSQL (MongoDB və s.) daha sonra ehtiyaca görə öyrənilir.",
                en: "Definitely SQL first (PostgreSQL/MySQL). Understanding data relationships is the foundation. NoSQL can be learned later as needed."
            }
        },
        {
            id: 4,
            q: {
                tr: "Matematik Backend için gerekli mi?",
                az: "Riyaziyyat Backend üçün lazımdır?",
                en: "Is math necessary for Backend?"
            },
            a: {
                tr: "Frontend'e göre biraz daha fazla. Özellikle büyük verilerle çalışırken, optimizasyon yaparken veya yapay zeka entegrasyonlarında algoritma mantığı ve temel matematik gerekir.",
                az: "Frontend-ə nisbətən bir az daha çox. Xüsusilə böyük məlumatlarla işləyərkən və ya optimallaşdırma zamanı alqoritm məntiqi və təməl riyaziyyat lazımdır.",
                en: "Slightly more than Frontend. Especially when working with big data, optimization, or AI integrations, algorithmic logic and basic math are required."
            }
        },
        {
            id: 5,
            q: {
                tr: "Serverless ve Microservices nedir?",
                az: "Serverless və Microservices nədir?",
                en: "What are Serverless and Microservices?"
            },
            a: {
                tr: "Microservices, uygulamayı küçük parçalara bölmektir. Serverless ise sunucu yönetimiyle uğraşmadan sadece kodu buluta yükleyip çalıştırmaktır. İleri seviye konulardır, junior iken boğulmayın.",
                az: "Microservices, tətbiqi kiçik hissələrə bölməkdir. Serverless isə server idarəetməsi ilə məşğul olmadan sadəcə kodu buluda yükləməkdir. İrəli səviyyə mövzulardır.",
                en: "Microservices break the app into small parts. Serverless runs code on the cloud without managing servers. These are advanced topics, don't worry about them as a junior."
            }
        },
        {
            id: 6,
            q: {
                tr: "Kendi sunucumu kurmalı mıyım?",
                az: "Öz serverimi qurmalıyam?",
                en: "Should I set up my own server?"
            },
            a: {
                tr: "Öğrenmek için kesinlikle evet! Linux (Ubuntu) kurup, SSH ile bağlanıp, Nginx ve bir veritabanı ayağa kaldırmak size backend'in nasıl çalıştığını gerçekten öğretir.",
                az: "Öyrənmək üçün mütləq bəli! Linux (Ubuntu) qurub, SSH ilə qoşulub, Nginx və bir məlumat bazası qaldırmaq sizə backend-in necə işlədiyini həqiqətən öyrədər.",
                en: "For learning, absolutely yes! Setting up Linux, connecting via SSH, and running Nginx/DB teaches you how backend really works."
            }
        }
    ]
};
contentData['fullstack'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temellerin Birleşimi", items: ["HTML/CSS/JS İleri Seviye", "HTTP & REST API Mantığı", "Git & GitHub Akışı"], status: "start" },
            { title: "Frontend Uzmanlığı", items: ["React.js veya Vue.js", "State Management (Redux/Zustand)", "Tailwind CSS", "Responsive UI"], status: "start" },
            { title: "Backend Temelleri", items: ["Node.js (Express/NestJS)", "veya Python (FastAPI/Django)", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Veritabanı Entegrasyonu", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM Kullanımı (Prisma/Mongoose)", "Veri Modelleme"], status: "mid" },
            { title: "Full-Stack Frameworkler", items: ["Next.js (App Router)", "Nuxt.js", "SvelteKit", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Authentication & Security", items: ["NextAuth.js / Auth0", "JWT & Session Management", "CORS & CSRF Koruması"], status: "advanced" },
            { title: "DevOps & Cloud", items: ["Docker & Compose", "Vercel/Netlify Deployment", "AWS/VPS Temelleri", "CI/CD (GitHub Actions)"], status: "expert" },
            { title: "Mobil (Opsiyonel)", items: ["React Native (Expo)", "Mobil UI Tasarımı", "App Store Süreçleri"], status: "expert" }
        ],
        az: [
            { title: "Təməllərin Birləşməsi", items: ["HTML/CSS/JS İrəli Səviyyə", "HTTP & REST API Məntiqi", "Git & GitHub Axını"], status: "start" },
            { title: "Frontend İxtisaslaşması", items: ["React.js və ya Vue.js", "State İdarəetməsi", "Tailwind CSS", "Adaptiv UI"], status: "start" },
            { title: "Backend Əsasları", items: ["Node.js (Express/NestJS)", "və ya Python", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Məlumat Bazası İnteqrasiyası", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM İstifadəsi (Prisma)", "Veri Modelləmə"], status: "mid" },
            { title: "Full-Stack Freymvörklər", items: ["Next.js (App Router)", "Nuxt.js", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Autentifikasiya & Təhlükəsizlik", items: ["NextAuth.js", "JWT & Sessiya", "CORS & CSRF Qorunması"], status: "advanced" },
            { title: "DevOps & Bulud", items: ["Docker", "Vercel/Netlify", "AWS/VPS Əsasları", "CI/CD Prosesləri"], status: "expert" },
            { title: "Mobil (İstəyə bağlı)", items: ["React Native (Expo)", "Mobil UI Dizaynı", "App Store Prosesləri"], status: "expert" }
        ],
        en: [
            { title: "Foundational Convergence", items: ["Advanced HTML/CSS/JS", "HTTP & REST Logic", "Git & GitHub Workflow"], status: "start" },
            { title: "Frontend Mastery", items: ["React.js or Vue.js", "State Management", "Tailwind CSS", "Responsive UI"], status: "start" },
            { title: "Backend Basics", items: ["Node.js (Express/NestJS)", "or Python", "API Route Handlers", "Middleware"], status: "mid" },
            { title: "Database Integration", items: ["PostgreSQL (SQL)", "MongoDB (NoSQL)", "ORM Usage (Prisma)", "Data Modeling"], status: "mid" },
            { title: "Full-Stack Frameworks", items: ["Next.js (App Router)", "Nuxt.js", "Server Side Rendering (SSR)"], status: "advanced" },
            { title: "Authentication & Security", items: ["NextAuth.js", "JWT & Sessions", "CORS & CSRF Protection"], status: "advanced" },
            { title: "DevOps & Cloud", items: ["Docker", "Vercel/Netlify", "AWS/VPS Basics", "CI/CD Pipelines"], status: "expert" },
            { title: "Mobile (Optional)", items: ["React Native (Expo)", "Mobile UI Design", "App Store Publishing"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube & Eğitim
            { type: 'course', title: 'The Odin Project', url: 'https://www.theodinproject.com', desc: 'Full Stack öğrenmek için dünyanın en iyi ücretsiz, proje bazlı açık kaynak müfredatı.', lang: 'en' },
            { type: 'course', title: 'Full Stack Open', url: 'https://fullstackopen.com', desc: 'Modern React, Redux, Node.js, MongoDB ve GraphQL üzerine Helsinki Üniversitesi kursu.', lang: 'en' },
            { type: 'youtube', title: 'Web Dev Simplified', url: 'https://youtube.com/@WebDevSimplified', desc: 'Karmaşık Full-stack konseptlerini basitleştiren harika kanal.', lang: 'en' },
            { type: 'youtube', title: 'Codevolution', url: 'https://youtube.com/@Codevolution', desc: 'React, Next.js ve Backend teknolojileri için detaylı Hint ekolü eğitimleri.', lang: 'en' },

            // Dokümantasyon & Stack
            { type: 'doc', title: 'Next.js Docs', url: 'https://nextjs.org/docs', desc: 'Modern Full-stack geliştirmenin standardı haline gelen framework dokümantasyonu.', lang: 'en' },
            { type: 'tool', title: 'T3 Stack', url: 'https://create.t3.gg', desc: 'Next.js, TypeScript ve Tailwind ile tip güvenli (type-safe) geliştirme yığını.', lang: 'en' },

            // Araçlar
            { type: 'tool', title: 'Vercel', url: 'https://vercel.com', desc: 'Full-stack uygulamalarınızı saniyeler içinde yayınlayabileceğiniz platform.', lang: 'global' },
            { type: 'tool', title: 'Neon DB', url: 'https://neon.tech', desc: 'Serverless PostgreSQL veritabanı. Hızlı ve ölçeklenebilir.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh/full-stack', desc: 'Full Stack geliştirici olmak için görsel yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Armut", "Missions"],
            top_skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
            avg_salary: "Junior: 40k-60k TL | Mid: 70k-120k TL | Senior: 140k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "JobSearch.az", "Upwork (Remote)"],
            top_skills: ["PHP (Laravel) + Vue", "Node.js + React", "MySQL", "Git"],
            avg_salary: "Junior: 900-1500 AZN | Mid: 2000-3500 AZN | Senior: 5000+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "RemoteOK", "WeWorkRemotely", "Wellfound"],
            top_skills: ["T3 Stack", "AWS Lambda", "GraphQL", "Docker", "System Design"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Full Stack nedir? Her şeyi bilmek zorunda mıyım?",
                az: "Full Stack nədir? Hər şeyi bilmək məcburiyyətindəyəm?",
                en: "What is Full Stack? Do I have to know everything?"
            },
            a: {
                tr: "Hayır. Full Stack, bir projeyi tek başına A'dan Z'ye (Front ve Back) çıkarabilme yeteneğidir. Her konuda uzman olamazsınız ama her katmanda iş yapabilir olmalısınız (T-shaped skill).",
                az: "Xeyr. Full Stack, bir layihəni təkbaşına A-dan Z-yə (Front və Back) çıxara bilmə bacarığıdır. Hər mövzuda mütəxəssis ola bilməzsiniz, amma hər təbəqədə iş görə bilməlisiniz.",
                en: "No. Full Stack is the ability to build a project from A to Z (Front and Back) alone. You can't be an expert in everything, but you must be functional in every layer."
            }
        },
        {
            id: 2,
            q: {
                tr: "Hangi Stack'i (Yığın) öğrenmeliyim?",
                az: "Hansı Stack-i (Yığını) öyrənməliyəm?",
                en: "Which Stack should I learn?"
            },
            a: {
                tr: "En popüleri MERN Stack'tir (MongoDB, Express, React, Node). Ancak 2024 itibariyle Next.js + PostgreSQL + TypeScript kombinasyonu sektörün en çok aranan yığınıdır.",
                az: "Ən populyarı MERN Stack-dir (MongoDB, Express, React, Node). Lakin 2024 etibarilə Next.js + PostgreSQL + TypeScript kombinasiyası sektorun ən çox axtarılan yığınıdır.",
                en: "The most popular is MERN (Mongo, Express, React, Node). However, as of 2024, the Next.js + PostgreSQL + TypeScript combo is the most sought-after stack."
            }
        },
        {
            id: 3,
            q: {
                tr: "Frontend mi Backend mi önce öğrenilmeli?",
                az: "Birinci Frontend yoxsa Backend öyrənilməlidir?",
                en: "Should I learn Frontend or Backend first?"
            },
            a: {
                tr: "Genellikle Frontend ile başlamak daha kolaydır çünkü yazdığınız kodun sonucunu anında görürsünüz. Motivasyonunuz artar. Sonra o arayüze veri çekmek için Backend'e geçersiniz.",
                az: "Adətən Frontend ilə başlamaq daha asandır, çünki yazdığınız kodun nəticəsini dərhal görürsünüz. Motivasiyanız artar. Sonra o interfeysə məlumat çəkmək üçün Backend-ə keçərsiniz.",
                en: "Generally, starting with Frontend is easier because you see the results instantly. It boosts motivation. Then move to Backend to fetch data for that UI."
            }
        },
        {
            id: 4,
            q: {
                tr: "İki kat maaş mı alacağım?",
                az: "İki qat maaş alacağam?",
                en: "Will I earn double the salary?"
            },
            a: {
                tr: "Hayır :) Full-stack geliştiriciler, Frontend veya Backend uzmanlarından biraz daha fazla kazanabilir ama iki katı değil. Avantajınız, iş bulma şansınızın çok daha yüksek olmasıdır.",
                az: "Xeyr :) Full-stack proqramçılar, Frontend və ya Backend mütəxəssislərindən bir az daha çox qazana bilər, amma iki qat deyil. Üstünlüyünüz, iş tapma şansınızın çox daha yüksək olmasıdır.",
                en: "No :) Full-stack developers might earn slightly more than pure FE/BE experts, but not double. Your advantage is much higher employability."
            }
        },
        {
            id: 5,
            q: {
                tr: "Tasarım (UI/UX) bilmek zorunda mıyım?",
                az: "Dizayn (UI/UX) bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Design (UI/UX)?"
            },
            a: {
                tr: "Tasarımcı kadar değil ama temel tasarım prensiplerini ve Figma kullanmayı bilmelisiniz. Güzel görünen bir uygulama satar. Tailwind CSS gibi araçlar bu işi çok kolaylaştırır.",
                az: "Dizayner qədər yox, amma təməl dizayn prinsiplərini və Figma istifadə etməyi bilməlisiniz. Gözəl görünən tətbiq satır. Tailwind CSS kimi alətlər bu işi çox asanlaşdırır.",
                en: "Not like a designer, but you should know basic design principles and Figma. Good looking apps sell. Tools like Tailwind CSS make this very easy."
            }
        },
        {
            id: 6,
            q: {
                tr: "Deployment (Yayına alma) zor mu?",
                az: "Deployment (Yayımlama) çətindir?",
                en: "Is Deployment hard?"
            },
            a: {
                tr: "Eskiden zordu (FTP, SSH vb.). Şimdi Vercel, Netlify veya Railway gibi platformlarla GitHub'a kodunuzu attığınız an siteniz yayına giriyor. DevOps bilmek artı ama başlangıçta şart değil.",
                az: "Əvvəllər çətin idi. İndi Vercel, Netlify və ya Railway kimi platformalarla GitHub-a kodunuzu atdığınız an saytınız yayımlanır. DevOps bilmək müsbətdir, amma başlanğıcda şərt deyil.",
                en: "It used to be hard. Now with Vercel, Netlify, or Railway, your site goes live the moment you push to GitHub. DevOps is a plus, but not mandatory at start."
            }
        }
    ]
};
contentData['cloud'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Bulut Nedir? (IaaS, PaaS, SaaS)", "Sanallaştırma Mantığı", "Ağ Temelleri (IP, DNS, VPN)", "Linux CLI"], status: "start" },
            { title: "Sağlayıcı Seçimi & Başlangıç", items: ["AWS (Pazar Lideri)", "Microsoft Azure (Kurumsal)", "Google Cloud (Data/AI)", "Free Tier Hesabı Açma"], status: "start" },
            { title: "Temel Servisler (Core Services)", items: ["Compute (EC2 / VM)", "Storage (S3 / Blob)", "Networking (VPC / VNet)", "IAM (Kimlik Yönetimi)"], status: "mid" },
            { title: "Veritabanı Yönetimi", items: ["Relational (RDS / Azure SQL)", "NoSQL (DynamoDB / CosmosDB)", "Caching (ElastiCache / Redis)"], status: "mid" },
            { title: "Kod Olarak Altyapı (IaC)", items: ["Terraform (Standart)", "AWS CloudFormation", "Ansible", "GitOps Mantığı"], status: "advanced" },
            { title: "Modern Mimariler", items: ["Serverless (Lambda / Azure Functions)", "Containers (ECS / AKS / GKE)", "Microservices", "Event-Driven Architecture"], status: "expert" },
            { title: "Maliyet & Güvenlik (FinOps/Sec)", items: ["Cost Explorer & Budgets", "WAF & Shield", "Compliance (GDPR/KVKK)", "Well-Architected Framework"], status: "expert" },
            { title: "PROJE: Cloud Resume Challenge", items: ["1. Sertifika (AWS CP/AZ-900)", "2. HTML/CSS Özgeçmiş", "3. Statik Hosting (S3/Blob) & CDN", "4. Ziyaretçi Sayacı (JS+DB+API)", "5. Backend (Python Lambda)", "6. Otomasyon (Terraform & CI/CD)", "7. Blog Yazısı"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Bulud Nədir? (IaaS, PaaS, SaaS)", "Virtualizasiya", "Şəbəkə Əsasları (IP, DNS)", "Linux CLI"], status: "start" },
            { title: "Provayder Seçimi", items: ["AWS (Bazar Lideri)", "Microsoft Azure", "Google Cloud", "Pulsuz Hesab (Free Tier)"], status: "start" },
            { title: "Əsas Servislər", items: ["Hesablama (EC2 / VM)", "Yaddaş (S3 / Blob)", "Şəbəkə (VPC)", "IAM (Kimlik İdarəetməsi)"], status: "mid" },
            { title: "Məlumat Bazası", items: ["Relational (RDS)", "NoSQL (DynamoDB)", "Caching (Redis)"], status: "mid" },
            { title: "İnfrastruktur Kodu (IaC)", items: ["Terraform", "CloudFormation", "Ansible", "GitOps"], status: "advanced" },
            { title: "Müasir Memarlıqlar", items: ["Serverless (Lambda)", "Konteynerlər (Kubernetes)", "Mikroservislər", "Hadisə Əsaslı (Event-Driven)"], status: "expert" },
            { title: "Xərc & Təhlükəsizlik", items: ["Büdcə İdarəetməsi", "WAF & Shield", "Uyğunluq (Compliance)", "Well-Architected Framework"], status: "expert" },
            { title: "LAYİHƏ: Cloud Resume Challenge", items: ["1. Sertifikat (AWS CP/AZ-900)", "2. HTML/CSS CV", "3. Statik Hostinq & CDN", "4. Ziyarətçi Sayğacı (JS+DB+API)", "5. Backend (Python Lambda)", "6. Avtomatlaşdırma (Terraform & CI/CD)", "7. Blog Yazısı"], status: "expert" }
        ],
        en: [
            { title: "Fundamentals", items: ["What is Cloud? (IaaS, PaaS, SaaS)", "Virtualization", "Networking (IP, DNS, CIDR)", "Linux CLI"], status: "start" },
            { title: "Provider & Setup", items: ["AWS (Market Leader)", "Azure (Enterprise)", "GCP (Data/AI)", "Free Tier Setup"], status: "start" },
            { title: "Core Services", items: ["Compute (EC2 / VM)", "Storage (S3 / Blob)", "Networking (VPC / VNet)", "IAM (Identity Mgmt)"], status: "mid" },
            { title: "Database Management", items: ["Relational (RDS / SQL)", "NoSQL (DynamoDB / Cosmos)", "Caching (Redis)"], status: "mid" },
            { title: "IaC (Infrastructure as Code)", items: ["Terraform (Industry Std)", "CloudFormation", "Ansible", "GitOps Principles"], status: "advanced" },
            { title: "Modern Architectures", items: ["Serverless (Lambda)", "Containers (K8s / ECS)", "Microservices", "Event-Driven"], status: "expert" },
            { title: "Cost & Security (FinOps)", items: ["Cost Management", "WAF & DDoS Protection", "Compliance", "Well-Architected Framework"], status: "expert" },
            { title: "PROJECT: Cloud Resume Challenge", items: ["1. Certification (AWS CP/AZ-900)", "2. HTML/CSS Resume", "3. Static Hosting (S3/CDN)", "4. Visitor Counter (JS+DB+API)", "5. Backend (Python Lambda)", "6. Automation (IaC & CI/CD)", "7. Blog Post"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'NetworkChuck', url: 'https://youtube.com/@NetworkChuck', desc: 'Bulut ve Ağ temellerini en eğlenceli anlatan kanal. Kahvenizi hazırlayın!', lang: 'en' },
            { type: 'youtube', title: 'Tech with Lucy', url: 'https://youtube.com/@TechWithLucy', desc: 'AWS kariyeri ve sertifikasyon süreçleri için harika rehber.', lang: 'en' },
            { type: 'youtube', title: 'Stephane Maarek', url: 'https://www.udemy.com/user/stephanemaarek/', desc: 'AWS sertifikası alacaksanız Udemy\'deki 1 numaralı eğitmen.', lang: 'en' },

            // Dokümantasyon & Platform
            { type: 'doc', title: 'AWS Documentation', url: 'https://docs.aws.amazon.com', desc: 'Sektörün en kapsamlı dokümantasyonu. Her şeyin kaynağı.', lang: 'en' },
            { type: 'doc', title: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Azure öğrenmek için Microsoft\'un ücretsiz, interaktif eğitim platformu.', lang: 'global' },
            { type: 'tool', title: 'A Cloud Guru', url: 'https://acloudguru.com', desc: 'Bulut öğrenmenin Netflix\'i. Ücretli ama en iyi platform.', lang: 'en' },

            // Araçlar
            { type: 'tool', title: 'AWS Free Tier', url: 'https://aws.amazon.com/free', desc: '12 ay boyunca birçok servisi ücretsiz kullanabileceğiniz başlangıç paketi.', lang: 'global' },
            { type: 'tool', title: 'Terraform Registry', url: 'https://registry.terraform.io', desc: 'Altyapı kodları için kütüphane.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (DevOps/Cloud)', url: 'https://roadmap.sh/devops', desc: 'Bulut mühendisliği yol haritası.', lang: 'en' },

            // Projeler
            { type: 'roadmap', title: 'Cloud Resume Challenge', url: 'https://cloudresumechallenge.dev', desc: 'Bulut yetkinliklerinizi kanıtlamanız için hazırlanan efsanevi proje.', lang: 'global' },
            { type: 'doc', title: 'SSS Lunizz Guide', url: 'https://sss.lunizz.com', desc: 'Cloud Resume Challenge için Türkçe rehber ve kaynaklar.', lang: 'tr' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Remote iş ilanları"],
            top_skills: ["AWS Solutions Architect", "Terraform", "Docker/K8s", "Python", "Linux"],
            avg_salary: "Junior: 40k-60k TL | Mid: 80k-120k TL | Senior: 160k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Telecom & Banking"],
            top_skills: ["Linux Admin", "Azure", "VMware", "Network"],
            avg_salary: "Junior: 1000-1600 AZN | Mid: 2200-3500 AZN | Senior: 5500+ AZN"
        },
        GLOBAL: {
            platforms: ["Toptal", "WeWorkRemotely", "Arc.dev", "AWS Jobs"],
            top_skills: ["AWS Certified", "Kubernetes (CKA)", "Terraform", "FinOps"],
            avg_salary: "Junior: $5k-$8k | Mid: $10k-$15k | Senior: $18k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Hangi bulut sağlayıcısını seçmeliyim? (AWS vs Azure vs GCP)",
                az: "Hansı bulud provayderini seçməliyəm? (AWS vs Azure vs GCP)",
                en: "Which cloud provider should I choose? (AWS vs Azure vs GCP)"
            },
            a: {
                tr: "Pazar payı lideri (%30+) AWS'dir, kaynak boldur. Kurumsal Windows ortamları için Azure tercih edilir. Veri analitiği ve Yapay Zeka için Google Cloud (GCP) öne çıkar. Başlangıç için AWS önerilir.",
                az: "Bazar lideri AWS-dir, qaynaq çoxdur. Korporativ Windows mühitləri üçün Azure seçilir. Məlumat analitikası və AI üçün Google Cloud (GCP) önə çıxır. Başlanğıc üçün AWS məsləhətdir.",
                en: "AWS is the market leader with abundant resources. Azure is preferred for corporate Windows environments. GCP shines in Data and AI. AWS is recommended for starters."
            }
        },
        {
            id: 2,
            q: {
                tr: "IaaS, PaaS ve SaaS farkı nedir? ",
                az: "IaaS, PaaS və SaaS fərqi nədir?",
                en: "What is the difference between IaaS, PaaS, and SaaS?"
            },
            a: {
                tr: "IaaS (Altyapı): Sunucuyu kiralarsın, yönetimi sendendir (AWS EC2). PaaS (Platform): Sadece kodu yüklersin, sunucuyu sağlayıcı yönetir (Heroku). SaaS (Yazılım): Direkt kullanırsın (Gmail, Dropbox).",
                az: "IaaS: Serveri icarəyə götürürsən, idarəetmə səndədir. PaaS: Sadəcə kodu yükləyirsən, serveri provayder idarə edir. SaaS: Birbaşa istifadə edirsən (Gmail).",
                en: "IaaS: You rent infrastructure, manage OS (EC2). PaaS: You deploy code, provider manages OS (Heroku). SaaS: You just use the software (Gmail)."
            }
        },
        {
            id: 3,
            q: {
                tr: "Bulut öğrenmek pahalı mı? Fatura sürprizi yaşar mıyım?",
                az: "Bulud öyrənmək bahadır? Faktura sürprizi yaşayaram?",
                en: "Is learning Cloud expensive? Will I get bill shock?"
            },
            a: {
                tr: "Dikkat etmezseniz evet! Ancak AWS/Azure 'Free Tier' (Ücretsiz Katman) sunar. Mutlaka 'Budget Alarm' (Bütçe Uyazısı) kurmalısınız. Açık unuttuğunuz sunucu ay sonunda üzebilir.",
                az: "Diqqət etməsəniz bəli! Lakin 'Free Tier' (Pulsuz Mərhələ) mövcuddur. Mütləq 'Büdcə Xəbərdarlığı' (Budget Alarm) qurmalısınız. Açıq qalan server üzə bilər.",
                en: "If not careful, yes! Use the 'Free Tier'. Always set up 'Budget Alarms'. Leaving a server running can lead to bill shock."
            }
        },
        {
            id: 4,
            q: {
                tr: "Kodlama bilmek zorunda mıyım?",
                az: "Kodlaşdırma bilmək məcburiyyətindəyəm?",
                en: "Do I have to know coding?"
            },
            a: {
                tr: "Bir yazılımcı kadar değil ama 'Infrastructure as Code' (Terraform) ve otomasyon için Python/Bash bilmek zorundasınız. Sadece arayüzden (Console) tıklayarak profesyonel olunmaz.",
                az: "Proqramçı qədər yox, amma 'Infrastructure as Code' və avtomatlaşdırma üçün Python/Bash bilməlisiniz. Sadəcə interfeysdən klikləyərək peşəkar olunmaz.",
                en: "Not as much as a dev, but you need Python/Bash for automation and IaC. You can't be a pro just by clicking in the Console."
            }
        },
        {
            id: 5,
            q: {
                tr: "Sertifika almalı mıyım?",
                az: "Sertifikat almalıyam?",
                en: "Should I get certified?"
            },
            a: {
                tr: "Kesinlikle Evet. Cloud dünyasında sertifikalar (özellikle AWS Solutions Architect Associate) işe alımda çok büyük bir filtredir ve maaşı doğrudan etkiler.",
                az: "Mütləq Bəli. Bulud dünyasında sertifikatlar (xüsusilə AWS Solutions Architect) işə qəbulda böyük filtrdir və maaşa birbaşa təsir edir.",
                en: "Absolutely Yes. In Cloud, certifications (especially AWS Solutions Architect Associate) are a huge filter for hiring and directly impact salary."
            }
        },
        {
            id: 6,
            q: {
                tr: "Serverless (Sunucusuz) mimari nedir?",
                az: "Serverless (Serversiz) memarlıq nədir?",
                en: "What is Serverless architecture?"
            },
            a: {
                tr: "Sunucu yönetimiyle hiç uğraşmadığınız, kodunuzun sadece çalıştığı süre kadar (milisaniye bazında) ücret ödediğiniz modeldir (Örn: AWS Lambda). Geleceğin mimarisidir.",
                az: "Server idarəçiliyi ilə məşğul olmadığınız, kodunuzun işlədiyi müddət qədər ödəniş etdiyiniz modeldir (AWS Lambda). Gələcəyin memarlığıdır.",
                en: "A model where you don't manage servers and only pay for the execution time (milliseconds) of your code (e.g., AWS Lambda). It is the future."
            }
        }
    ]
};
contentData['network'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Giriş ve Terimler", items: ["Ağ (Network) Nedir?", "Domain (Alan Adı)", "Hosting & Sunucu", "Subdomain", "NS (Name Server)"], status: "start" },
            { title: "Ağ Donanımları", items: ["NIC (Ağ Kartı)", "Switch (Anahtar)", "Modem & Router", "Hub & Bridge", "Firewall (Güvenlik Duvarı)"], status: "start" },
            { title: "Ağ Türleri (Topology)", items: ["LAN (Yerel Ağ)", "MAN (Metropol Ağı)", "WAN (Geniş Ağ)", "WLAN (Kablosuz)"], status: "mid" },
            { title: "Protokoller ve Modeller", items: ["OSI Modeli (7 Katman)", "TCP/IP Mimarisi", "DNS Çalışma Mantığı", "Portlar (80, 443, 22)"], status: "mid" },
            { title: "İletim ve Adresleme", items: ["IP Adresleme (v4/v6)", "Network ID & Host ID", "Unicast / Multicast / Broadcast", "Subnetting"], status: "advanced" },
            { title: "Ağ Servisleri", items: ["DHCP (Otomatik IP)", "NAT (Ağ Adres Çevirimi)", "VPN & Tunneling", "Proxy & Reverse Proxy"], status: "advanced" },
            { title: "İleri Seviye", items: ["VLAN (Sanal Ağlar)", "SD-WAN", "Load Balancing", "Network Security (IDS/IPS)"], status: "expert" }
        ],
        az: [
            { title: "Giriş və Terminlər", items: ["Şəbəkə Nədir?", "Domen & Hostinq", "Subdomain", "NS (Name Server)"], status: "start" },
            { title: "Şəbəkə Avadanlıqları", items: ["NIC (Şəbəkə Kartı)", "Switch", "Modem & Router", "Hub & Bridge", "Firewall"], status: "start" },
            { title: "Şəbəkə Növləri", items: ["LAN (Yerli)", "MAN (Şəhər)", "WAN (Qlobal)", "WLAN (Simsiz)"], status: "mid" },
            { title: "Protokollar və Modellər", items: ["OSI Modeli (7 Qat)", "TCP/IP", "DNS Məntiqi", "Portlar"], status: "mid" },
            { title: "Ötürmə və Ünvanlama", items: ["IP Ünvanlama", "Network ID & Host ID", "Unicast / Multicast", "Subnetting"], status: "advanced" },
            { title: "Şəbəkə Servisləri", items: ["DHCP", "NAT", "VPN", "Proxy"], status: "advanced" },
            { title: "İrəli Səviyyə", items: ["VLAN", "SD-WAN", "Yük Balanslaşdırma", "Şəbəkə Təhlükəsizliyi"], status: "expert" }
        ],
        en: [
            { title: "Intro & Terms", items: ["What is Network?", "Domain & Hosting", "Subdomain", "Name Server (NS)"], status: "start" },
            { title: "Network Hardware", items: ["NIC (Network Card)", "Switch", "Modem & Router", "Hub & Bridge", "Firewall"], status: "start" },
            { title: "Network Types", items: ["LAN (Local Area)", "MAN (Metro Area)", "WAN (Wide Area)", "WLAN (Wireless)"], status: "mid" },
            { title: "Protocols & Models", items: ["OSI Model (7 Layers)", "TCP/IP Architecture", "DNS Logic", "Ports"], status: "mid" },
            { title: "Transmission & Addressing", items: ["IP Addressing", "Network ID & Host ID", "Unicast / Multicast", "Subnetting"], status: "advanced" },
            { title: "Network Services", items: ["DHCP", "NAT", "VPN", "Proxy"], status: "advanced" },
            { title: "Advanced Topics", items: ["VLAN", "SD-WAN", "Load Balancing", "Network Security"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Kullanıcının verdiği kaynaklar
            { type: 'doc', title: 'NS (Name Server) Nedir?', url: 'https://isimkayit.com/index.php/knowledgebase/166/NS-Name-Server-Nedir.html', desc: 'Aradaki bağlantıyı kuran sunucular hakkında bilgi.', lang: 'tr' },
            { type: 'doc', title: 'Bridge (Köprü) Nedir?', url: 'http://yusufgokkaya.com/en/active-directory-nedir/', desc: 'Ağ köprüleme mantığı üzerine detaylı yazı.', lang: 'tr' },
            { type: 'doc', title: 'Hub Nedir?', url: 'https://www.geeksforgeeks.org/basics-computer-networking/', desc: 'Ağ temelleri ve donanımlar hakkında İngilizce kaynak.', lang: 'en' },
            { type: 'doc', title: 'OSI Katmanları', url: 'https://bidb.itu.edu.tr/seyir-defteri/blog/2013/09/07/osi-katmanlar%C4%B1', desc: 'İTÜ Bilgi İşlem Daire Başkanlığından OSI modeli anlatımı.', lang: 'tr' },
            { type: 'doc', title: 'Port Numaraları', url: 'https://tr.wikipedia.org/wiki/TCP_ve_UDP_ba%C4%9Flant%C4%B1_noktas%C4%B1_numaralar%C4%B1_listesi', desc: 'Hangi uygulama hangi portu kullanır listesi.', lang: 'tr' },
            { type: 'doc', title: 'IP Sınıf Aralıkları', url: 'https://www.ugureskici.com/notlarim-makalelerim/ip-sinif-araliklari', desc: 'IP v4 sınıfları ve aralıkları tablosu.', lang: 'tr' },

            // Video Oynatma Listeleri
            { type: 'youtube', title: 'IBM Technology', url: 'https://youtube.com/playlist?list=PLOspHqNVtKAA_5N3pI49wkH4WsTkeZ_iQ', desc: 'IBM tarafından hazırlanan kapsamlı ağ temelleri eğitimi.', lang: 'en' },
            { type: 'youtube', title: 'NetworkChuck CCNA', url: 'https://youtu.be/pDn2u65rQbQ', desc: 'Network öğrenmenin en eğlenceli yolu. Mutlaka izleyin.', lang: 'en' },
            { type: 'youtube', title: 'Fırat Boyan', url: 'https://www.firatboyan.com/ip-ve-subnetting-kavrami.aspx', desc: 'IP ve Subnetting kavramı üzerine Türkçe teknik makale.', lang: 'tr' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "ISP Firmaları (Türk Telekom, Superonline)"],
            top_skills: ["Cisco (CCNA/CCNP)", "Fortinet", "TCP/IP", "Linux Admin", "VoIP"],
            avg_salary: "Junior: 35k-50k TL | Mid: 70k-100k TL | Senior: 130k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Bakcell / Azercell"],
            top_skills: ["Network Admin", "Cisco", "MikroTik", "VPN Config"],
            avg_salary: "Junior: 900-1400 AZN | Mid: 2000-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["LinkedIn", "Dice", "Field Engineer"],
            top_skills: ["CCIE", "Juniper", "Arista", "Network Automation (Python)"],
            avg_salary: "Junior: $4k-$6k | Mid: $8k-$12k | Senior: $15k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Switch ve Hub farkı nedir?",
                az: "Switch ilə Hub fərqi nədir?",
                en: "Difference between Switch and Hub?"
            },
            a: {
                tr: "Hub 'aptaldır'; gelen veriyi herkese yollar (Broadcast), trafiği şişirir. Switch 'akıllıdır'; MAC adreslerini öğrenir ve veriyi sadece hedef cihaza yollar (Unicast).",
                az: "Hub 'axmaqdır'; gələn məlumatı hamıya göndərir. Switch 'ağıllıdır'; MAC ünvanlarını öyrənir və məlumatı yalnız hədəf cihaza göndərir.",
                en: "Hub is 'dumb'; it broadcasts data to everyone. Switch is 'smart'; it learns MAC addresses and sends data only to the target device."
            }
        },
        {
            id: 2,
            q: {
                tr: "OSI Modeli nedir, neden bilmeliyim?",
                az: "OSI Modeli nədir, niyə bilməliyəm?",
                en: "What is OSI Model and why learn it?"
            },
            a: {
                tr: "Ağ iletişimini 7 katmana bölen standarttır (Fiziksel -> Uygulama). Bir sorun olduğunda (örn: internet yok), sorunun kabloda mı (L1), IP'de mi (L3) yoksa tarayıcıda mı (L7) olduğunu anlamanızı sağlar.",
                az: "Şəbəkə əlaqəsini 7 qata bölən standartdır. Problem olanda problemin kabellə (L1), IP ilə (L3) yoxsa brauzerlə (L7) əlaqəli olduğunu anlamağa kömək edir.",
                en: "It's a standard dividing network communication into 7 layers. It helps diagnose usage issues: is it the cable (L1), IP (L3), or browser (L7)?"
            }
        },
        {
            id: 3,
            q: {
                tr: "DNS ve DHCP nedir?",
                az: "DNS və DHCP nədir?",
                en: "What are DNS and DHCP?"
            },
            a: {
                tr: "DNS 'Telefon Rehberi'dir; 'google.com' ismini '142.250.xxx' IP adresine çevirir. DHCP ise ağa bağlanan cihazlara otomatik IP adresi dağıtan servistir.",
                az: "DNS 'Telefon Kitabçası'dır; adları IP ünvanlarına çevirir. DHCP isə cihazlara avtomatik IP paylayan servisdir.",
                en: "DNS is the 'Phonebook'; translates names to IPs. DHCP assigns automatic IP addresses to devices joining the network."
            }
        },
        {
            id: 4,
            q: {
                tr: "NAT (Network Address Translation) ne işe yarar?",
                az: "NAT nə işə yarayır?",
                en: "What does NAT do?"
            },
            a: {
                tr: "Evdeki 10 cihazın internete tek bir 'Public IP' üzerinden çıkmasını sağlar. İç ağdaki (Private) IP'leri dış ağdaki (Public) IP'ye dönüştürür. IPv4 tükenmesini geciktirir.",
                az: "Evdəki 10 cihazın internetə tək bir 'Public IP' üzərindən çıxmasını təmin edir. Daxili IP-ləri xarici IP-yə çevirir.",
                en: "Allows multiple local devices to access the internet via a single Public IP. Maps Private IPs to Public IPs."
            }
        },
        {
            id: 5,
            q: {
                tr: "Firewall (Güvenlik Duvarı) nasıl çalışır?",
                az: "Firewall necə işləyir?",
                en: "How does a Firewall work?"
            },
            a: {
                tr: "Gelen ve giden paketleri inceler. İçinde zararlı içerik varsa veya kurallara uymuyorsa (örn: Port 80 kapalıysa) paketi bloklar. Donanımsal veya yazılımsal olabilir.",
                az: "Gələn və gedən paketləri yoxlayır. Zərərli məzmun varsa və ya qaydalara uyğun gəlmirsə bloka atır.",
                en: "Inspects incoming/outgoing packets. Blocks them if they contain threats or violate rules (e.g., closed ports)."
            }
        }
    ]
};
contentData['game-programming'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Temeller", items: ["Algoritma Mantığı", "Temel Matematik (Vektörler/Trigonometri)", "C# veya C++ Dili", "Git Versiyon Kontrol"], status: "start" },
            { title: "Oyun Motoru Seçimi", items: ["Unity (Mobil/Indie için ideal)", "Unreal Engine (AAA/Gerçekçi Grafikler)", "Godot (Açık Kaynak)", "Editör Arayüzü"], status: "start" },
            { title: "Oyun Döngüsü & Fizik", items: ["Game Loop (Update/Start)", "Rigidbody & Colliders", "Input Sistemleri", "Hareket Mekanikleri"], status: "mid" },
            { title: "Görsel & Ses", items: ["Sprite (2D) & Mesh (3D)", "Animasyon Sistemleri", "Işıklandırma & Gölgeler", "Ses Efektleri (SFX)"], status: "mid" },
            { title: "Tasarım Desenleri", items: ["Singleton", "Observer", "Object Pooling (Performans için)", "State Machine"], status: "advanced" },
            { title: "İleri Seviye Konular", items: ["Shader Graph / HLSL", "Multiplayer (Photon/Mirror)", "Yapay Zeka (NavMesh/Behavior Trees)", "Mobil Optimizasyon"], status: "expert" },
            { title: "Yayınlama & Gelir", items: ["Google Play / App Store", "Steam Yayıncılığı", "Monetization (Reklam/IAP)", "Analytics"], status: "expert" }
        ],
        az: [
            { title: "Təməllər", items: ["Alqoritm Məntiqi", "Riyaziyyat (Vektorlar)", "C# və ya C++", "Git Versiya Nəzarəti"], status: "start" },
            { title: "Oyun Mühərriki Seçimi", items: ["Unity (Mobil/Indie)", "Unreal Engine (AAA)", "Godot", "Redaktor İnterfeysi"], status: "start" },
            { title: "Oyun Dövrü & Fizika", items: ["Game Loop", "Rigidbody & Toqquşmalar", "Giriş (Input) Sistemləri", "Hərəkət Mexanikası"], status: "mid" },
            { title: "Vizual & Səs", items: ["Sprite (2D) & Mesh (3D)", "Animasiya Sistemləri", "İşıqlandırma", "Səs Effektləri"], status: "mid" },
            { title: "Dizayn Nümunələri", items: ["Singleton", "Observer", "Object Pooling", "State Machine"], status: "advanced" },
            { title: "İrəli Səviyyə Mövzular", items: ["Shaderlər", "Çox Oyunçulu (Multiplayer)", "Süni İntellekt (AI)", "Mobil Optimizasiya"], status: "expert" },
            { title: "Yayımlama & Gəlir", items: ["Google Play / App Store", "Steam", "Monetizasiya (Reklam)", "Analitika"], status: "expert" }
        ],
        en: [
            { title: "Foundations", items: ["Programming Logic", "Math (Vectors/Trig)", "C# or C++ Basics", "Git Version Control"], status: "start" },
            { title: "Engine Selection", items: ["Unity (Mobile/Indie)", "Unreal Engine (AAA)", "Godot (Open Source)", "Editor Basics"], status: "start" },
            { title: "Game Loop & Physics", items: ["Update/Start Methods", "Collision Detection", "Input Systems", "Movement Mechanics"], status: "mid" },
            { title: "Graphics & Audio", items: ["Sprites & Meshes", "Animation Controllers", "Lighting & Shadows", "Audio Management"], status: "mid" },
            { title: "Design Patterns", items: ["Singleton", "Observer", "Object Pooling", "Finite State Machines"], status: "advanced" },
            { title: "Advanced Topics", items: ["Shader Programming", "Networking (Multiplayer)", "Game AI (NavMesh)", "Optimization"], status: "expert" },
            { title: "Publishing & Biz", items: ["App Store/Play Store", "Steam Publishing", "Monetization (Ads/IAP)", "Analytics"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // YouTube
            { type: 'youtube', title: 'Brackeys', url: 'https://youtube.com/@Brackeys', desc: 'Unity geliştirmenin efsanesi. Kanal durdu ama arşiv hala altın değerinde.', lang: 'en' },
            { type: 'youtube', title: 'Code Monkey', url: 'https://youtube.com/@CodeMonkeyUnity', desc: 'Temiz kod ve profesyonel Unity mimarisi üzerine harika dersler.', lang: 'en' },
            { type: 'youtube', title: 'Unreal Sensei', url: 'https://youtube.com/@UnrealSensei', desc: 'Unreal Engine 5 ve Blueprints öğrenmek için en iyi kaynaklardan biri.', lang: 'en' },
            { type: 'youtube', title: 'Sercan Altun', url: 'https://youtube.com/@SercanAltun', desc: 'Türkçe Unity ve Hyper-casual oyun geliştirme üzerine pratik içerikler.', lang: 'tr' },

            // Dokümantasyon & Araçlar
            { type: 'doc', title: 'Unity Learn', url: 'https://learn.unity.com', desc: 'Unity\'nin kendi hazırladığı ücretsiz, sertifikalı eğitim platformu.', lang: 'en' },
            { type: 'doc', title: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com', desc: 'Unreal Engine için resmi kullanım kılavuzu.', lang: 'en' },
            { type: 'tool', title: 'Blender', url: 'https://www.blender.org', desc: 'Kendi 3D modellerinizi yapabileceğiniz ücretsiz ve açık kaynak devasa araç.', lang: 'global' },
            { type: 'tool', title: 'itch.io', url: 'https://itch.io', desc: 'Bağımsız (Indie) oyunlarınızı ücretsiz yayınlayıp test edebileceğiniz platform.', lang: 'global' },
            { type: 'roadmap', title: 'Roadmap.sh (Game Dev)', url: 'https://roadmap.sh/game-developer', desc: 'Oyun geliştirici yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Kariyer.net", "Indie Game Grupları"],
            top_skills: ["Unity (C#)", "Hyper-casual", "Optimizasyon", "Shader Graph", "3D Matematik"],
            avg_salary: "Junior: 35k-50k TL | Mid: 60k-90k TL | Senior: 120k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "GameDev Azerbaijan (Community)"],
            top_skills: ["Unity", "C#", "Mobil Oyun", "2D Art", "Animation"],
            avg_salary: "Junior: 800-1200 AZN | Mid: 1800-3000 AZN | Senior: 4500+ AZN"
        },
        GLOBAL: {
            platforms: ["Hitmarker (Oyun Sektörü)", "RemoteGameJobs", "ArtStation"],
            top_skills: ["Unreal Engine (C++)", "Graphics Programming", "Multiplayer", "Console Porting"],
            avg_salary: "Junior: $4k-$6k | Mid: $7k-$11k | Senior: $14k+ (Aylık/Remote)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Unity mi Unreal Engine mi? ",
                az: "Unity yoxsa Unreal Engine?",
                en: "Unity or Unreal Engine?"
            },
            a: {
                tr: "Mobil oyunlar (2D/3D) ve Indie projeler için Unity (C#) endüstri standartıdır. Çok yüksek grafikli PC/Konsol oyunları için Unreal Engine (C++/Blueprints) liderdir.",
                az: "Mobil oyunlar və Indie layihələr üçün Unity (C#) standartdır. Yüksək qrafikalı PC/Konsol oyunları üçün Unreal Engine (C++) liderdir.",
                en: "For Mobile (2D/3D) and Indie projects, Unity (C#) is the standard. For high-fidelity PC/Console games, Unreal Engine (C++/Blueprints) is the leader."
            }
        },
        {
            id: 2,
            q: {
                tr: "Matematik bilmek zorunda mıyım?",
                az: "Riyaziyyat bilmək məcburiyyətindəyəm?",
                en: "Do I have to know Math?"
            },
            a: {
                tr: "Web geliştirmeye göre evet, daha fazla. Vektörler, koordinat sistemleri ve basit trigonometri (açılar, mesafe hesaplama) oyun yapımının kalbidir. Korkmayın, motorlar çoğunu halleder ama mantığı bilmelisiniz.",
                az: "Veb inkişafına nisbətən bəli. Vektorlar, koordinat sistemləri və triqonometriya oyun istehsalının ürəyidir. Qorxmayın, mühərriklər çoxunu həll edir, amma məntiqi bilməlisiniz.",
                en: "Compared to web dev, yes. Vectors, coordinate systems, and basic trigonometry are the heart of game dev. Engines handle the heavy lifting, but you must know the logic."
            }
        },
        {
            id: 3,
            q: {
                tr: "Tek başıma oyun yapabilir miyim?",
                az: "Təkbaşına oyun düzəldə bilərəm?",
                en: "Can I make a game alone?"
            },
            a: {
                tr: "Evet (Indie Developer). Ancak hem kod, hem çizim, hem ses ile uğraşmak zordur. Başlangıçta basit grafikler (Pixel Art) veya hazır varlıklar (Assets) kullanarak başlayabilirsiniz.",
                az: "Bəli (Indie Developer). Lakin həm kod, həm rəsm, həm də səslə məşğul olmaq çətindir. Başlanğıcda sadə qrafiklər və ya hazır varlıqlar (Assets) istifadə edə bilərsiniz.",
                en: "Yes (Indie Developer). But handling code, art, and sound alone is hard. Start with simple graphics (Pixel Art) or use ready-made Assets."
            }
        },
        {
            id: 4,
            q: {
                tr: "Oyunlardan nasıl para kazanılır?",
                az: "Oyunlardan necə pul qazanılır?",
                en: "How do games make money?"
            },
            a: {
                tr: "1. Reklamlar (Hyper-casual). 2. Oyun içi satın alımlar (IAP - Kostüm, elmas vb.). 3. Premium satış (Steam'den 10$'a satmak). Mobil için reklam/IAP en yaygın modeldir.",
                az: "1. Reklamlar. 2. Oyun daxili alışlar (IAP - Kostyum, almaz). 3. Premium satış (Steam-də satmaq). Mobil üçün reklam/IAP ən yayğın modeldir.",
                en: "1. Ads. 2. In-App Purchases (IAP - Skins, gems). 3. Premium sales (Selling on Steam). For mobile, Ads/IAP is the most common model."
            }
        },
        {
            id: 5,
            q: {
                tr: "C++ çok mu zor?",
                az: "C++ çox çətindir?",
                en: "Is C++ too hard?"
            },
            a: {
                tr: "C#, Python veya JavaScript'e göre daha zordur çünkü bellek yönetimini (Memory Management) manuel yapmanız gerekebilir. Ancak Unreal Engine öğrenirken 'Blueprints' (Görsel Kodlama) ile kod yazmadan da başlayabilirsiniz.",
                az: "C# və ya Python-a görə daha çətindir, çünki yaddaş idarəetməsini əllə etməlisiniz. Lakin Unreal Engine-də 'Blueprints' ilə kod yazmadan da başlaya bilərsiniz.",
                en: "It is harder than C# or Python because of manual memory management. However, in Unreal Engine, you can start with 'Blueprints' (Visual Scripting) without writing code."
            }
        },
        {
            id: 6,
            q: {
                tr: "Oyun Tasarımı (Game Design) ile Oyun Programlama aynı mı?",
                az: "Oyun Dizaynı ilə Oyun Proqramlaşdırma eynidir?",
                en: "Is Game Design the same as Game Programming?"
            },
            a: {
                tr: "Hayır. Tasarımcı; oyunun kurallarını, hikayesini ve eğlence faktörünü planlar. Programcı ise bu planı koda döker. Küçük ekiplerde bu işi genelde aynı kişi yapar.",
                az: "Xeyr. Dizayner oyunun qaydalarını, hekayəsini və əyləncə faktorunu planlayır. Proqramçı isə bu planı koda çevirir. Kiçik komandalarda bunu adətən eyni adam edir.",
                en: "No. The Designer plans the rules, story, and fun factor. The Programmer turns that plan into code. In small teams, one person often does both."
            }
        }
    ]
};

contentData['graphics-programming'] = {
    // 1. YOL HARİTASI (ROADMAP)
    roadmap: {
        tr: [
            { title: "Olmazsa Olmazlar", items: ["C++ (İleri Seviye)", "Lineer Cebir (Matrisler/Vektörler)", "Trigonometri", "GPU Mimarisi Mantığı"], status: "start" },
            { title: "Grafik API'sine Giriş", items: ["OpenGL (Öğrenmek için en iyisi)", "Pencere Yönetimi (GLFW/SDL)", "Üçgen Çizdirme (Hello World)", "Buffers (VBO, VAO, EBO)"], status: "start" },
            { title: "Shader Programlama", items: ["GLSL veya HLSL", "Vertex & Fragment Shaders", "Uniforms & Attributes", "Doku (Texture) İşleme"], status: "mid" },
            { title: "Render Pipeline (Boru Hattı)", items: ["Rasterization Mantığı", "Derinlik Testi (Z-Buffer)", "Alpha Blending", "Coordinate Systems"], status: "mid" },
            { title: "Işıklandırma & Gölgeler", items: ["Phong Lighting Model", "PBR (Physically Based Rendering)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Modern & Zorlu API'ler", items: ["Vulkan (Performans Kralı)", "DirectX 12", "Metal (Apple)", "Memory Management"], status: "advanced" },
            { title: "İleri Teknikler", items: ["Ray Tracing (Işın İzleme)", "Compute Shaders", "Particle Systems", "Post-Processing Effects"], status: "expert" },
            { title: "Matematiksel Simülasyon", items: ["Fluid Dynamics (Sıvı)", "Physics Engines", "Voxel Engines", "Procedural Generation"], status: "expert" }
        ],
        az: [
            { title: "Olmazsa Olmazlar", items: ["C++ (İrəli Səviyyə)", "Xətti Cəbr (Matrislər)", "Triqonometriya", "GPU Memarlığı"], status: "start" },
            { title: "Qrafik API Giriş", items: ["OpenGL (Öyrənmək üçün)", "Pəncərə İdarəetməsi", "Üçbucaq Çəkmək", "Buferlər (VBO, VAO)"], status: "start" },
            { title: "Shader Proqramlaşdırma", items: ["GLSL və ya HLSL", "Vertex & Fragment Shaders", "Uniforms", "Tekstura Emalı"], status: "mid" },
            { title: "Render Pipeline", items: ["Rasterization Məntiqi", "Dərinlik Testi (Z-Buffer)", "Alpha Blending", "Koordinat Sistemləri"], status: "mid" },
            { title: "İşıqlandırma & Kölgələr", items: ["Phong Modeli", "PBR (Fiziki Əsaslı)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Müasir API-lər", items: ["Vulkan (Performans)", "DirectX 12", "Metal (Apple)", "Yaddaş İdarəetməsi"], status: "advanced" },
            { title: "İrəli Texnikalar", items: ["Ray Tracing (Şüa İzləmə)", "Compute Shaders", "Zərrəcik Sistemləri", "Post-Processing"], status: "expert" },
            { title: "Riyazi Simulyasiya", items: ["Maye Dinamikası", "Fizika Mühərrikləri", "Voxel Mühərrikləri", "Prosedural Generasiya"], status: "expert" }
        ],
        en: [
            { title: "Prerequisites", items: ["C++ (Advanced)", "Linear Algebra (Matrices/Vectors)", "Trigonometry", "GPU Architecture"], status: "start" },
            { title: "Intro to Graphics API", items: ["OpenGL (Best for learning)", "Windowing (GLFW/SDL)", "Drawing a Triangle", "Buffers (VBO, VAO)"], status: "start" },
            { title: "Shader Programming", items: ["GLSL or HLSL", "Vertex & Fragment Shaders", "Uniforms & Attributes", "Texture Mapping"], status: "mid" },
            { title: "Rendering Pipeline", items: ["Rasterization Logic", "Depth Testing (Z-Buffer)", "Alpha Blending", "Coordinate Systems"], status: "mid" },
            { title: "Lighting & Shadows", items: ["Phong Lighting", "PBR (Physically Based)", "Shadow Mapping", "Normal Maps"], status: "mid" },
            { title: "Modern Low-Level APIs", items: ["Vulkan (High Performance)", "DirectX 12", "Metal (Apple)", "Manual Memory Mgmt"], status: "advanced" },
            { title: "Advanced Techniques", items: ["Ray Tracing", "Compute Shaders", "Particle Systems", "Post-Processing Effects"], status: "expert" },
            { title: "Math & Simulation", items: ["Fluid Dynamics", "Physics Engine Dev", "Voxel Rendering", "Procedural Generation"], status: "expert" }
        ]
    },

    // 2. KAYNAKLAR (RESOURCES)
    resources: {
        items: [
            // Klasikler & Web
            { type: 'doc', title: 'LearnOpenGL.com', url: 'https://learnopengl.com', desc: 'Grafik programlamanın "Kutsal Kitabı". Adım adım her şeyi öğreten efsanevi site.', lang: 'en' },
            { type: 'tool', title: 'Shadertoy', url: 'https://www.shadertoy.com', desc: 'Tarayıcıda shader yazıp test edebileceğiniz, başkalarının kodlarını inceleyebileceğiniz platform.', lang: 'global' },
            { type: 'doc', title: 'Real-Time Rendering (Book)', url: 'https://www.realtimerendering.com', desc: 'Sektörün standart ders kitabı. Teorik bilgi için bir numara.', lang: 'en' },

            // YouTube Kanalları
            { type: 'youtube', title: 'The Cherno', url: 'https://youtube.com/@TheCherno', desc: 'Kendi oyun motorunu (Hazel) yazarken OpenGL ve C++ anlatan harika seri.', lang: 'en' },
            { type: 'youtube', title: 'Acerola', url: 'https://youtube.com/@Acerola_t', desc: 'Grafik efektlerinin (Shaders) matematiğini eğlenceli ve derinlemesine anlatan kanal.', lang: 'en' },
            { type: 'youtube', title: 'Sebastian Lague', url: 'https://youtube.com/@SebastianLague', desc: 'Kodlama maceraları, Ray Tracing ve prosedürel üretim üzerine görsel şölen.', lang: 'en' },
            { type: 'youtube', title: 'Cem Yuksel', url: 'https://youtube.com/@cem_yuksel', desc: 'Utah Üniversitesi profesöründen Türkçe/İngilizce grafik dersleri.', lang: 'tr' },

            // Araçlar
            { type: 'tool', title: 'RenderDoc', url: 'https://renderdoc.org', desc: 'Grafik programcıları için vazgeçilmez "Frame Debugger" aracı.', lang: 'global' },
            { type: 'tool', title: 'Vulkan Tutorial', url: 'https://vulkan-tutorial.com', desc: 'Vulkan öğrenmek isteyen cesur geliştiriciler için başlangıç rehberi.', lang: 'en' },
            { type: 'roadmap', title: 'Roadmap.sh (C++)', url: 'https://roadmap.sh/cpp', desc: 'Bu işin temeli olan C++ için yol haritası.', lang: 'en' }
        ]
    },

    // 3. İŞ İMKANLARI (JOBS & SALARY)
    jobs: {
        TR: {
            platforms: ["LinkedIn", "Teknokent (Savunma Sanayi)", "Oyun Stüdyoları"],
            top_skills: ["C++", "OpenGL/Vulkan", "Linear Algebra", "Simulation", "CUDA"],
            avg_salary: "Junior: 50k-75k TL | Mid: 90k-140k TL | Senior: 200k+ TL"
        },
        AZ: {
            platforms: ["HelloJob.az", "LinkedIn", "Remote (Global)"],
            top_skills: ["C++", "3D Math", "Game Engines (Source Code)", "Rendering"],
            avg_salary: "Junior: 1500-2500 AZN | Mid: 3000-5000 AZN | Senior: 8000+ AZN"
        },
        GLOBAL: {
            platforms: ["NVIDIA Careers", "AMD", "Epic Games", "Pixar"],
            top_skills: ["Graphics Pipeline", "HLSL/GLSL", "GPU Architecture", "Driver Dev"],
            avg_salary: "Junior: $8k-$12k | Mid: $14k-$20k | Senior: $25k+ (Aylık/Remote/US)"
        }
    },

    // 4. SIKÇA SORULAN SORULAR (FAQ)
    faq: [
        {
            id: 1,
            q: {
                tr: "Oyun Geliştirme (Game Dev) ile Grafik Programlama farkı ne?",
                az: "Oyun İnkişafı (Game Dev) ilə Qrafik Proqramlaşdırma fərqi nədir?",
                en: "Difference between Game Dev and Graphics Programming?"
            },
            a: {
                tr: "Game Dev, Unity/Unreal gibi motorları kullanarak oyun yapar. Grafik Programcısı ise o motorların 'Render' kısmını, yani motorun kendisini yazar. Biri arabayı sürer, diğeri motoru tasarlar.",
                az: "Game Dev, Unity/Unreal kimi mühərriklərdən istifadə edərək oyun düzəldir. Qrafik Proqramçı isə o mühərriklərin 'Render' hissəsini, yəni mühərrikin özünü yazır. Biri maşını sürür, digəri motoru yığır.",
                en: "Game Dev uses engines like Unity/Unreal to make games. Graphics Programmer writes the 'Renderer' part of those engines. One drives the car, the other builds the engine."
            }
        },
        {
            id: 2,
            q: {
                tr: "Matematik (Lineer Cebir) gerçekten şart mı?",
                az: "Riyaziyyat (Xətti Cəbr) həqiqətən şərtdir?",
                en: "Is Math (Linear Algebra) really necessary?"
            },
            a: {
                tr: "Kesinlikle. %100. Matris çarpımlarını, Dot/Cross Product'ı ve Vektör uzaylarını anlamadan ekrana bir küp bile çizdiremezsiniz. Bu alanın dili matematiktir.",
                az: "Mütləq. %100. Matris vurmalarını, Dot/Cross Product və Vektor fəzalarını anlamadan ekrana bir kub belə çəkə bilməzsiniz. Bu sahənin dili riyaziyyatdır.",
                en: "Absolutely. 100%. You cannot even draw a cube without understanding Matrix multiplication, Dot/Cross Products, and Vector spaces. Math is the language here."
            }
        },
        {
            id: 3,
            q: {
                tr: "Hangi API ile başlamalıyım? OpenGL mi Vulkan mı?",
                az: "Hansı API ilə başlamalıyam? OpenGL yoxsa Vulkan?",
                en: "Which API to start with? OpenGL or Vulkan?"
            },
            a: {
                tr: "OpenGL ile başlayın. Vulkan çok güçlüdür ama ekrana basit bir üçgen çizdirmek için bile 1000 satır kod yazmanız gerekir. OpenGL mantığı öğretir, Vulkan performansı.",
                az: "OpenGL ilə başlayın. Vulkan çox güclüdür, amma ekrana sadə bir üçbucaq çəkmək üçün belə 1000 sətir kod yazmalısınız. OpenGL məntiqi öyrədir, Vulkan performansı.",
                en: "Start with OpenGL. Vulkan is powerful but requires 1000 lines of code just to draw a triangle. OpenGL teaches the logic, Vulkan teaches performance."
            }
        },
        {
            id: 4,
            q: {
                tr: "Ray Tracing (Işın İzleme) nedir?",
                az: "Ray Tracing (Şüa İzləmə) nədir?",
                en: "What is Ray Tracing?"
            },
            a: {
                tr: "Geleneksel 'Rasterization' (üçgen çizme) yerine, fiziksel ışık ışınlarını ve onların yansımalarını simüle eden, gerçeğe en yakın görüntüyü veren tekniktir.",
                az: "Ənənəvi 'Rasterization' (üçbucaq çəkmə) əvəzinə, fiziki işıq şüalarını və onların yansımalarını simulyasiya edən, reallığa ən yaxın görüntünü verən texnikadır.",
                en: "Unlike traditional 'Rasterization' (drawing triangles), it simulates physical light rays and their bounces to produce the most photorealistic images."
            }
        },
        {
            id: 5,
            q: {
                tr: "Shader nedir? ",
                az: "Shader nədir?",
                en: "What is a Shader?"
            },
            a: {
                tr: "Shader, doğrudan GPU (Ekran Kartı) üzerinde çalışan küçük programcıklardır. Her bir pikselin rengini veya her bir köşenin (vertex) konumunu bunlar belirler.",
                az: "Shader, birbaşa GPU (Video Kart) üzərində işləyən kiçik proqramlardır. Hər bir pikselin rəngini və ya hər bir küncün (vertex) mövqeyini bunlar təyin edir.",
                en: "A Shader is a small program that runs directly on the GPU. They determine the color of every pixel or the position of every vertex."
            }
        }
    ]
};


// 3. GENEL SSS VERİLERİ (Global FAQ Page)
export const globalFaqData = [
    {
        category: { en: 'General Software & Career', tr: 'Genel Yazılım ve Kariyer', az: 'Ümumi Proqramlaşdırma və Karyera' },
        questions: [
            {
                id: 'gs-1',
                q: {
                    tr: 'Sıfırdan yazılıma başlamak istiyorum, nereden başlamalıyım?',
                    az: 'Sıfırdan proqramlaşdırmaya başlamaq istəyirəm, haradan başlamalıyam?',
                    en: 'I want to start coding from scratch, where should I begin?'
                },
                a: {
                    tr: 'Önce algoritma mantığını kavramalısın. "Roadmap.sh" sitesinden kendine bir yol haritası seç. Başlangıç için Python (sözdizimi kolaylığı) veya Web için HTML/CSS/JS önerilir. Ücretsiz kaynak olarak "FreeCodeCamp" ve "BTK Akademi" mükemmeldir.',
                    az: 'Əvvəlcə alqoritm məntiqini anlamalısan. "Roadmap.sh" saytından özünə bir yol xəritəsi seç. Başlanğıc üçün Python (sintaksis asanlığı) və ya Veb üçün HTML/CSS/JS tövsiyə olunur. Pulsuz qaynaq olaraq "FreeCodeCamp" və "BTK Akademi" mükəmməldir.',
                    en: 'First, grasp the logic of algorithms. Choose a roadmap from "Roadmap.sh". Python is recommended for beginners, or HTML/CSS/JS for Web. "FreeCodeCamp" is an excellent free resource.'
                }
            },
            {
                id: 'gs-2',
                q: {
                    tr: 'Hangi bilgisayarı almalıyım? (Donanım Tavsiyesi)',
                    az: 'Hansı kompüteri almalıyam? (Avadanlıq Məsləhəti)',
                    en: 'Which computer should I buy? (Hardware Advice)'
                },
                a: {
                    tr: 'Hafiflik ve pil ömrü önemlidir. En az 16GB RAM ve SSD disk şarttır. Sanal makine (VM) kullanacaksanız işlemci gücü (M1/M2/M3 Mac veya Ryzen 7/Intel i7) kritik önem taşır. Oyun laptopları ağırdır, Ultrabook veya MacBook iş için daha idealdir.',
                    az: 'Yüngüllük və batareya ömrü vacibdir. Ən azı 16GB RAM və SSD disk şərtdir. Virtual maşın (VM) istifadə edəcəksinizsə, prosessor gücü (M1/M2/M3 Mac və ya Ryzen 7/Intel i7) kritik əhəmiyyət daşıyır. Oyun noutbukları ağırdır, Ultrabook və ya MacBook iş üçün daha idealdır.',
                    en: 'Portability and battery life are key. Minimum 16GB RAM and SSD are a must. If using VMs, CPU power (M1/M2/M3 Mac or Ryzen 7/Intel i7) is critical. Gaming laptops are heavy; Ultrabooks or MacBooks are better for work.'
                }
            },
            {
                id: 'gs-3',
                q: {
                    tr: 'Python öğrenmek için en iyi kaynaklar neler?',
                    az: 'Python öyrənmək üçün ən yaxşı qaynaqlar hansılardır?',
                    en: 'What are the best resources to learn Python?'
                },
                a: {
                    tr: 'Türkçe dokümantasyon için "YazBel", videolu eğitim için "BTK Akademi" ve "Yazılım Bilimi" kanalı. İngilizce için Harvard\'ın efsanevi "CS50 Python" kursu ve "Tech With Tim" YouTube kanalı tavsiye edilir.',
                    az: 'Türkcə sənədlər üçün "YazBel", video dərslər üçün "BTK Akademi" və "Yazılım Bilimi" kanalı. İngiliscə üçün Harvardın əfsanəvi "CS50 Python" kursu və "Tech With Tim" YouTube kanalı tövsiyə olunur.',
                    en: 'For Turkish docs "YazBel", for video "BTK Akademi". For English, Harvard\'s legendary "CS50 Python" course and "Tech With Tim" YouTube channel are highly recommended.'
                }
            },
            {
                id: 'gs-4',
                q: {
                    tr: 'Mobil uygulama geliştirmek istiyorum: Flutter mı, React Native mi?',
                    az: 'Mobil tətbiq hazırlamaq istəyirəm: Flutter yoxsa React Native?',
                    en: 'I want to develop mobile apps: Flutter or React Native?'
                },
                a: {
                    tr: 'Eğer Web (JavaScript/React) geçmişin varsa "React Native" ile çok hızlı adapte olursun. Tek kodla yüksek performans ve her iki platforma (iOS/Android) çıktı almak istiyorsan Google\'ın "Flutter" teknolojisi şu an çok revaçta.',
                    az: 'Əgər Veb (JavaScript/React) təcrübən varsa "React Native" ilə çox sürətli uyğunlaşarsan. Tək kodla yüksək performans və hər iki platformaya (iOS/Android) çıxış almaq istəyirsənsə, Google-un "Flutter" texnologiyası hazırda çox populyardır.',
                    en: 'If you have a Web (JS/React) background, you will adapt quickly to "React Native". For single-codebase high performance on both iOS/Android, Google\'s "Flutter" is currently very popular.'
                }
            },
            {
                id: 'gs-5',
                q: {
                    tr: 'Yapay Zeka (AI) işimizi elimizden alacak mı?',
                    az: 'Süni İntellekt (AI) işimizi əlimizdən alacaqmı?',
                    en: 'Will AI take our jobs?'
                },
                a: {
                    tr: 'AI, kod yazmayı "amelelikten" çıkarıp "mimarlığa" dönüştürüyor. AI bir rakipten ziyade "süper zeki bir stajyerdir". Onu kullanan yazılımcı, kullanmayanın yerini alacaktır. Vizyon ve mimari yetenek hala insana özgüdür.',
                    az: 'AI kod yazmağı "hamallıqdan" çıxarıb "memarlığa" çevirir. AI rəqibdən çox "super ağıllı təcrübəçidir". Onu istifadə edən proqramçı, etməyəni əvəz edəcək. Vizyon və memarlıq qabiliyyəti hələ də insana məxsusdur.',
                    en: 'AI transforms coding from "grunt work" to "architecture". AI is a "super-smart intern" rather than a rival. Developers using AI will replace those who don\'t. Vision and architectural skills are still uniquely human.'
                }
            },
            {
                id: 'gs-6',
                q: {
                    tr: 'Cursor, Copilot ve "Vibe Coding" nedir?',
                    az: 'Cursor, Copilot və "Vibe Coding" nədir?',
                    en: 'What are Cursor, Copilot, and "Vibe Coding"?'
                },
                a: {
                    tr: 'Copilot kod öneren asistanınız, Cursor ise kod yazan AI tabanlı editördür. "Vibe Coding", kodu satır satır yazmak yerine, AI\'a ne istediğini tarif ederek hızlıca prototip çıkarma akımıdır.',
                    az: 'Copilot kod təklif edən köməkçiniz, Cursor isə kod yazan AI əsaslı redaktordur. "Vibe Coding", kodu sətir-sətir yazmaq əvəzinə, AI-a nə istədiyini izah edərək sürətli prototip hazırlamaq axınıdır.',
                    en: 'Copilot is your assistant suggesting code, Cursor is an AI-based editor that writes code. "Vibe Coding" is the flow of rapidly prototyping by describing intent to AI instead of writing line by line.'
                }
            },
            {
                id: 'gs-7',
                q: {
                    tr: 'Neden herkes Rust ve Go dillerini konuşuyor?',
                    az: 'Niyə hər kəs Rust və Go dillərindən danışır?',
                    en: 'Why is everyone talking about Rust and Go?'
                },
                a: {
                    tr: 'Rust, bellek güvenliği ve C++ hızı sunduğu için geleceğin sistem dilidir. Go (Golang) ise Google tarafından geliştirilen, basit yapısı ve Cloud/DevOps (Docker/Kubernetes) dünyasının standardı olduğu için popülerdir.',
                    az: 'Rust, yaddaş təhlükəsizliyi və C++ sürəti təklif etdiyi üçün gələcəyin sistem dilidir. Go (Golang) isə Google tərəfindən inkişaf etdirilən, sadə strukturu və Cloud/DevOps standartı olduğu üçün məşhurdur.',
                    en: 'Rust is seen as the future system language offering memory safety with C++ speed. Go (Golang) is popular for its simplicity and being the standard in the Cloud/DevOps (Docker/Kubernetes) world.'
                }
            },
            {
                id: 'gs-8',
                q: {
                    tr: 'Framework ve Library (Kütüphane) farkı nedir?',
                    az: 'Framework və Library (Kitabxana) fərqi nədir?',
                    en: 'What is the difference between Framework and Library?'
                },
                a: {
                    tr: 'Library (örn: React) çanta gibidir, ihtiyacın olunca sen çağırırsın. Framework (örn: Angular) evin iskeleti gibidir, kuralları o koyar ve o seni çağırır. Framework daha kısıtlayıcı ama daha düzenlidir.',
                    az: 'Library (məs: React) çanta kimidir, ehtiyacın olanda sən çağırırsan. Framework (məs: Angular) evin skeleti kimidir, qaydaları o qoyur və o səni çağırır. Framework daha məhdudlaşdırıcı amma daha nizamlıdır.',
                    en: 'A Library (e.g., React) is like a toolbox; you call it when needed. A Framework (e.g., Angular) is like a house skeleton; it sets the rules and calls you. Frameworks are more restrictive but organized.'
                }
            },
            {
                id: 'gs-9',
                q: {
                    tr: 'Freelance (Serbest) yazılımcı olarak nasıl iş bulurum?',
                    az: 'Freelance (Sərbəst) proqramçı kimi necə iş taparam?',
                    en: 'How can I find work as a Freelance developer?'
                },
                a: {
                    tr: 'Upwork, Fiverr ve Bionluk başlangıçtır. Ancak yüksek gelirli işler Networking (çevre) ve güçlü bir GitHub/LinkedIn profili ile gelir. Sadece başvuran değil, aranan kişi olmalısınız.',
                    az: 'Upwork, Fiverr və Bionluk başlanğıcdır. Lakin yüksək gəlirli işlər Networking (çevrə) və güclü bir GitHub/LinkedIn profili ilə gəlir. Sadəcə müraciət edən yox, axtarılan şəxs olmalısınız.',
                    en: 'Upwork, Fiverr, and Bionluk are starting points. However, high-paying jobs come from Networking and a strong GitHub/LinkedIn profile. You should be the sought-after person, not just an applicant.'
                }
            },
            {
                id: 'gs-10',
                q: {
                    tr: 'SDLC (Yazılım Geliştirme Yaşam Döngüsü) nedir?',
                    az: 'SDLC (Proqram Təminatının İnkişaf Dövrü) nədir?',
                    en: 'What is SDLC (Software Development Life Cycle)?'
                },
                a: {
                    tr: 'Yazılımın doğumundan ölümüne kadar geçen süreçtir: Planlama -> Analiz -> Tasarım -> Kodlama -> Test -> Bakım. Bu döngü profesyonel projelerin temelidir.',
                    az: 'Proqramın yaranmasından sonuna qədər olan prosesdir: Planlama -> Analiz -> Dizayn -> Kodlama -> Test -> Baxım. Bu dövr peşəkar layihələrin təməlidir.',
                    en: 'It is the process from the birth to the death of software: Planning -> Analysis -> Design -> Coding -> Testing -> Maintenance. This cycle is the foundation of professional projects.'
                }
            }
        ]
    },
    {
        category: { en: 'Cyber Security', tr: 'Siber Güvenlik', az: 'Kiber Təhlükəsizlik' },
        questions: [
            {
                id: 'cs-1',
                q: {
                    tr: 'Siber Güvenlik için üniversite okumak şart mı?',
                    az: 'Kiber Təhlükəsizlik üçün universitet oxumaq şərtdir?',
                    en: 'Is a university degree required for Cyber Security?'
                },
                a: {
                    tr: 'Diplomasız çalışan çok yetenekli uzmanlar var (Alaylı). Ancak mühendislik formasyonu analitik düşünmeyi öğretir ve özellikle kurumsal firmalarda/yurt dışında diploma hala bir "vize" niteliğindedir. Okumuyorsanız açığı kapatmak için 2 kat çalışmalısınız.',
                    az: 'Diplomsuz işləyən çox istedadlı mütəxəssislər var. Lakin mühəndislik təhsili analitik düşüncəni öyrədir və xüsusilə korporativ şirkətlərdə/xaricdə diplom hələ də "viza" rolunu oynayır. Oxumursunuzsa, boşluğu doldurmaq üçün 2 qat çalışmalısınız.',
                    en: 'There are talented experts without degrees. However, engineering education teaches analytical thinking, and a degree is still a "visa" for corporate firms and working abroad. If not studying, work twice as hard.'
                }
            },
            {
                id: 'cs-2',
                q: {
                    tr: 'Kali Linux için hangi Wifi Adaptörünü almalıyım?',
                    az: 'Kali Linux üçün hansı Wifi Adaptorunu almalıyam?',
                    en: 'Which Wifi Adapter should I buy for Kali Linux?'
                },
                a: {
                    tr: 'Markaya değil, içindeki "Chipset"e bakmalısın. Adaptörün "Monitor Mode" ve "Packet Injection" desteklemesi şarttır. Google\'da "wifi adapters support kali monitoring" diye aratarak güncel chipset listesine (örn: Atheros AR9271) ulaşabilirsin.',
                    az: 'Markaya yox, içindəki "Chipset"ə baxmalısan. Adaptorun "Monitor Mode" və "Packet Injection" dəstəkləməsi şərtdir. Google-da "wifi adapters support kali monitoring" yazaraq aktual chipset siyahısına (məs: Atheros AR9271) baxa bilərsən.',
                    en: 'Focus on the "Chipset", not the brand. The adapter must support "Monitor Mode" and "Packet Injection". Search "wifi adapters support kali monitoring" on Google for the current chipset list.'
                }
            },
            {
                id: 'cs-3',
                q: {
                    tr: 'Web Uygulama Güvenliği (Web Sec) için en iyi kaynaklar?',
                    az: 'Veb Tətbiq Təhlükəsizliyi (Web Sec) üçün ən yaxşı qaynaqlar?',
                    en: 'Best resources for Web Application Security?'
                },
                a: {
                    tr: 'Bu işin incili "PortSwigger Academy"dir (ücretsizdir). Ayrıca "OWASP Top 10" listesini ezbere bilmelisin. Pratik yapmak için "TryHackMe OWASP" odaları ve "HackerOne" raporlarını okumak çok faydalıdır.',
                    az: 'Bu işin əlifbası "PortSwigger Academy"-dir (pulsuzdur). Həmçinin "OWASP Top 10" siyahısını əzbər bilməlisən. Təcrübə üçün "TryHackMe OWASP" otaqları və "HackerOne" hesabatlarını oxumaq çox faydalıdır.',
                    en: 'The bible of this field is "PortSwigger Academy" (free). You must also memorize the "OWASP Top 10". For practice, "TryHackMe OWASP" rooms and reading "HackerOne" reports are very useful.'
                }
            },
            {
                id: 'cs-4',
                q: {
                    tr: 'Network (Ağ) öğrenmeye nereden başlamalıyım?',
                    az: 'Şəbəkə (Network) öyrənməyə haradan başlamalıyam?',
                    en: 'Where should I start learning Networking?'
                },
                a: {
                    tr: 'Hedefin CCNA eğitimi olmalı. YouTube\'da "NetworkChuck" kanalı (çok eğlenceli anlatır) ve Türkçe olarak "Turkcell Geleceği Yazanlar"ın network modülleri başlangıç için harikadır. Network bilmeden hacker olunmaz.',
                    az: 'Hədəfin CCNA təhsili olmalıdır. YouTube-da "NetworkChuck" kanalı (çox əyləncəli izah edir) və Türkcə olaraq "Turkcell Geleceği Yazanlar"ın şəbəkə modulları başlanğıc üçün əladır. Şəbəkə bilmədən haker olunmaz.',
                    en: 'Target CCNA training. "NetworkChuck" on YouTube (very entertaining) and "Turkcell Geleceği Yazanlar" (for Turkish content) are great for basics. You can\'t be a hacker without knowing networking.'
                }
            },
            {
                id: 'cs-5',
                q: {
                    tr: 'Sızma testi (Pentest) pratiklerini yasal olarak nerede yaparım?',
                    az: 'Sızma testi (Pentest) təcrübələrini qanuni olaraq harada edərəm?',
                    en: 'Where can I legally practice Penetration Testing?'
                },
                a: {
                    tr: 'Kendi laboratuvarını kurabilirsin ya da "TryHackMe", "HackTheBox" gibi platformları kullanabilirsin. Gerçek sitelere izinsiz sakın dokunma! Türkçe pratik için "CyberExam" platformuna da göz atabilirsin.',
                    az: 'Öz laboratoriyanı qura bilərsən və ya "TryHackMe", "HackTheBox" kimi platformalardan istifadə edə bilərsən. Həqiqi saytlara icazəsiz qətiyyən toxunma! Türkcə təcrübə üçün "CyberExam" platformasına da baxa bilərsən.',
                    en: 'You can set up your own lab or use platforms like "TryHackMe" and "HackTheBox". Never touch real sites without permission! Check out "CyberExam" for Turkish practice.'
                }
            },
            {
                id: 'cs-6',
                q: {
                    tr: 'Kali Linux mu, Parrot OS mu?',
                    az: 'Kali Linux yoxsa Parrot OS?',
                    en: 'Kali Linux or Parrot OS?'
                },
                a: {
                    tr: 'Tamamen zevk meselesi. Kali endüstri standardıdır ve kaynak boldur. Parrot ise daha hafiftir ve günlük kullanıma daha uygundur. Başlangıç için Kali\'yi sanal makinede (VirtualBox) kurup denemeni öneririz.',
                    az: 'Tamamilə zövq məsələsidir. Kali sənaye standartıdır və qaynaq çoxdur. Parrot isə daha yüngüldür və gündəlik istifadəyə uyğundur. Başlanğıc üçün Kali-ni virtual maşında (VirtualBox) qurub yoxlamağı məsləhət görürük.',
                    en: 'It is entirely a matter of taste. Kali is the industry standard with abundant resources. Parrot is lighter and better for daily use. We recommend installing Kali on a VM (VirtualBox) to start.'
                }
            }
        ]
    }
];

// 4. GLOBAL RESURSLAR (Global Resources Page)
export const globalResourcesData = [
    // 🤖 AI & LLM
    {
        category: { en: 'AI & LLM Tools', tr: 'Yapay Zeka (AI) Araçları', az: 'Süni İntellekt (AI) Alətləri' },
        items: [
            { type: 'tool', title: 'Google NotebookLLM', url: 'https://notebooklm.google.com', desc: 'Upload docs, get summaries & podcasts.', lang: 'global' },
            { type: 'tool', title: 'Cursor Editor', url: 'https://cursor.sh', desc: 'VS Code fork with built-in AI superpowers.', lang: 'en' },
            { type: 'tool', title: 'ChatGPT', url: 'https://chat.openai.com', desc: 'The leading AI assistant.', lang: 'global' },
            { type: 'tool', title: 'Claude', url: 'https://claude.ai', desc: 'Anthropic\'s powerful AI model.', lang: 'global' },
            { type: 'tool', title: 'Perplexity', url: 'https://perplexity.ai', desc: 'AI search engine with citations.', lang: 'global' },
            { type: 'tool', title: 'Hugging Face', url: 'https://huggingface.co', desc: 'The GitHub of AI models & datasets.', lang: 'en' },
            { type: 'tool', title: 'Ollama', url: 'https://ollama.com', desc: 'Run LLMs locally on your machine.', lang: 'en' },
            { type: 'tool', title: 'LangChain', url: 'https://langchain.com', desc: 'Framework for building LLM apps.', lang: 'en' }
        ]
    },
    // 💻 Computer Science
    {
        category: { en: 'Computer Science', tr: 'Bilgisayar Bilimi', az: 'Kompüter Elmləri' },
        items: [
            { type: 'course', title: 'Harvard CS50x', url: 'https://cs50.harvard.edu/x', desc: 'Best intro to CS in the world.', lang: 'en' },
            { type: 'youtube', title: 'Computerphile', url: 'https://www.youtube.com/user/Computerphile', desc: 'Great videos for understanding concepts.', lang: 'en' },
            { type: 'youtube', title: 'Crash Course CS', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrcyKGWx779NwjMGEDp4', desc: 'Fast & fun overview of CS history.', lang: 'en' },
            { type: 'course', title: 'OSSU CS', url: 'https://github.com/ossu/computer-science', desc: 'Complete self-taught CS curriculum.', lang: 'en' }
        ]
    },
    // 🔐 Cryptography
    {
        category: { en: 'Cryptography', tr: 'Kriptografi', az: 'Kriptoqrafiya' },
        items: [
            { type: 'course', title: 'Cryptography (Stanford)', url: 'https://www.coursera.org/learn/crypto', desc: 'Deep dive into crypto fundamentals.', lang: 'en' },
            { type: 'book', title: 'Crypto101', url: 'https://www.crypto101.io', desc: 'Introductory course on cryptography.', lang: 'en' },
            { type: 'tool', title: 'CyberChef', url: 'https://gchq.github.io/CyberChef', desc: 'The Cyber Swiss Army Knife.', lang: 'global' }
        ]
    },
    // 🚩 CTF & Practice
    {
        category: { en: 'CTF & Practice', tr: 'CTF & Hacking Pratik', az: 'CTF & Təcrübə' },
        items: [
            { type: 'tool', title: 'PicoCTF', url: 'https://picoctf.org', desc: 'Best for beginners.', lang: 'en' },
            { type: 'tool', title: 'HackTheBox', url: 'https://hackthebox.com', desc: 'Industry standard for pentesting.', lang: 'en' },
            { type: 'tool', title: 'TryHackMe', url: 'https://tryhackme.com', desc: 'Guided rooms for learning security.', lang: 'en' },
            { type: 'tool', title: 'OverTheWire', url: 'https://overthewire.org', desc: 'Learn Linux & CLI via games (Bandit).', lang: 'en' }
        ]
    },
    // 🕵️ OSINT
    {
        category: { en: 'OSINT', tr: 'Açık Kaynak İstihbaratı', az: 'Açıq Mənbə Kəşfiyyatı' },
        items: [
            { type: 'book', title: 'OSINT Techniques', url: 'https://inteltechniques.com/book1.html', desc: 'By Michael Bazzell.', lang: 'en' },
            { type: 'doc', title: 'Bellingcat', url: 'https://www.bellingcat.com', desc: 'Investigative journalism & techniques.', lang: 'en' },
            { type: 'tool', title: 'OSINT Framework', url: 'https://osintframework.com', desc: 'Collection of OSINT tools.', lang: 'en' },
            { type: 'tool', title: 'Sherlock', url: 'https://github.com/sherlock-project/sherlock', desc: 'Hunt down social media accounts.', lang: 'en' }
        ]
    },
    // ⌨️ Programming
    {
        category: { en: 'Programming', tr: 'Yazılım & Geliştirme', az: 'Proqramlaşdırma' },
        items: [
            { type: 'roadmap', title: 'Roadmap.sh', url: 'https://roadmap.sh', desc: 'Developer roadmaps.', lang: 'en' },
            { type: 'course', title: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', desc: 'Learn to code for free.', lang: 'en' },
            { type: 'book', title: 'Free Prog. Books', url: 'https://github.com/EbookFoundation/free-programming-books', desc: 'Massive collection of free books.', lang: 'global' },
            { type: 'doc', title: 'Learn X in Y Minutes', url: 'https://learnxinyminutes.com', desc: 'Quick reference for languages.', lang: 'en' }
        ]
    },
    // 🐍 Python
    {
        category: { en: 'Python', tr: 'Python Kaynakları', az: 'Python Resursları' },
        items: [
            { type: 'course', title: 'CS50P (Harvard)', url: 'https://cs50.harvard.edu/python', desc: 'Harvard\'s Python dedicated course.', lang: 'en' },
            { type: 'youtube', title: 'Corey Schafer', url: 'https://www.youtube.com/user/schafer5', desc: 'Top tier Python tutorials.', lang: 'en' },
            { type: 'doc', title: 'Real Python', url: 'https://realpython.com', desc: 'High quality articles.', lang: 'en' },
            { type: 'doc', title: 'YazBel', url: 'https://yazbel.com', desc: 'Türkçe Python dokümantasyonu.', lang: 'tr' }
        ]
    },
    // ⚙️ Reverse Engineering
    {
        category: { en: 'Reverse Engineering', tr: 'Tersine Mühendislik', az: 'Tərs Mühəndislik' },
        items: [
            { type: 'book', title: 'RE for Beginners', url: 'https://beginners.re', desc: 'Free classic book.', lang: 'en' },
            { type: 'tool', title: 'Ghidra', url: 'https://ghidra-sre.org', desc: 'Free RE tool by NSA.', lang: 'en' }
        ]
    },
    // 🌐 Web Security
    {
        category: { en: 'Web Security', tr: 'Web Güvenliği', az: 'Veb Təhlükəsizliyi' },
        items: [
            { type: 'course', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', desc: 'Best free web security training.', lang: 'en' },
            { type: 'doc', title: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/', desc: 'Must know security risks.', lang: 'en' },
            { type: 'youtube', title: 'NahamSec', url: 'https://www.youtube.com/@NahamSec', desc: 'Bug Bounty & Web Sec.', lang: 'en' }
        ]
    },
    // 📺 YouTube Channels
    {
        category: { en: 'YouTube Channels', tr: 'YouTube Kanalları', az: 'YouTube Kanalları' },
        items: [
            { type: 'youtube', title: 'Can Değer', url: 'https://www.youtube.com/@CanDeger', desc: 'Siber Güvenlik & Teknoloji.', lang: 'tr' },
            { type: 'youtube', title: 'NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck', desc: 'Hacking & Networking hype.', lang: 'en' },
            { type: 'youtube', title: 'John Hammond', url: 'https://www.youtube.com/@_JohnHammond', desc: 'Malware analysis & CTF.', lang: 'en' },
            { type: 'youtube', title: 'LiveOverflow', url: 'https://www.youtube.com/@LiveOverflow', desc: 'Deep technical hacking.', lang: 'en' },
            { type: 'youtube', title: 'Fireship', url: 'https://www.youtube.com/@Fireship', desc: 'Code in 100 seconds.', lang: 'en' },
            { type: 'youtube', title: 'Prototürk', url: 'https://www.youtube.com/@prototurk', desc: 'Web Geliştirme.', lang: 'tr' }
        ]
    },
    // 🐛 Bug Bounty
    {
        category: { en: 'Bug Bounty', tr: 'Bug Bounty', az: 'Bug Bounty' },
        items: [
            { type: 'doc', title: 'Google Bughunters', url: 'https://bughunters.google.com', desc: 'Google\'s learning materials.', lang: 'en' },
            { type: 'course', title: 'HackerOne CTF', url: 'https://ctf.hacker101.com', desc: 'Practice while learning.', lang: 'en' }
        ]
    },
    // ☁️ Cloud
    {
        category: { en: 'Cloud Computing', tr: 'Bulut Bilişim', az: 'Bulud Hesablamaları' },
        items: [
            { type: 'doc', title: 'Awesome Cloud Sec', url: 'https://github.com/ypris/Awesome-Cloud-Security', desc: 'Everything about cloud security.', lang: 'en' },
            { type: 'course', title: 'AWS Skill Builder', url: 'https://explore.skillbuilder.aws', desc: 'Free AWS training.', lang: 'en' },
            { type: 'course', title: 'Microsoft Learn', url: 'https://learn.microsoft.com', desc: 'Azure fundamentals.', lang: 'en' }
        ]
    },
    // 📝 Cheat Sheets
    {
        category: { en: 'Cheat Sheets', tr: 'Kopya Kağıtları', az: 'Qeydlər (Cheat Sheets)' },
        items: [
            { type: 'tool', title: 'GTFOBins', url: 'https://gtfobins.github.io', desc: 'Linux privesc bypass using binaries.', lang: 'en' },
            { type: 'tool', title: 'LOLBAS', url: 'https://lolbas-project.github.io', desc: 'Windows binaries for pentesting.', lang: 'en' },
            { type: 'tool', title: 'RevShells', url: 'https://www.revshells.com', desc: 'Reverse shell generator.', lang: 'global' },
            { type: 'doc', title: 'PayloadsAllTheThings', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings', desc: 'Attack payloads list.', lang: 'en' }
        ]
    },
    // 🎬 Movies & Series
    {
        category: { en: 'Movies & Series', tr: 'Filmler & Diziler', az: 'Filmlər & Seriallar' },
        items: [
            { type: 'movie', title: 'Mr. Robot', url: '', desc: 'Most realistic hacking series.', lang: 'en' },
            { type: 'movie', title: 'Silicon Valley', url: '', desc: 'Dropout culture & startups.', lang: 'en' },
            { type: 'movie', title: 'Who Am I', url: '', desc: 'Social engineering & Dark Web.', lang: 'de' },
            { type: 'movie', title: 'The Matrix', url: '', desc: 'Simulation theory.', lang: 'en' },
            { type: 'movie', title: 'The Social Network', url: '', desc: 'Founding of Facebook.', lang: 'en' }
        ]
    },
    // 🐙 Useful Repos
    {
        category: { en: 'GitHub Repos', tr: 'Faydalı Repolar', az: 'Faydalı Repolar' },
        items: [
            { type: 'tool', title: 'SecLists', url: 'https://github.com/danielmiessler/SecLists', desc: 'Standard wordlists for testing.', lang: 'en' },
            { type: 'tool', title: 'Public APIs', url: 'https://github.com/public-apis/public-apis', desc: 'Free APIs for projects.', lang: 'en' },
            { type: 'doc', title: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer', desc: 'Learn to design large systems.', lang: 'en' },
            { type: 'doc', title: 'Build Your Own X', url: 'https://github.com/codecrafters-io/build-your-own-x', desc: 'Recreate famous tools from scratch.', lang: 'en' }
        ]
    },
    // 📚 Important Books
    {
        category: { en: 'Must-Read Books', tr: 'Mutlaka Okunmalı', az: 'Mütləq Oxunmalı' },
        items: [
            { type: 'book', title: 'Clean Code', url: '', desc: 'Robert C. Martin.', lang: 'en' },
            { type: 'book', title: 'The Phoenix Project', url: '', desc: 'Understanding DevOps.', lang: 'en' },
            { type: 'book', title: 'Sandworm', url: '', desc: 'Cyberwarfare.', lang: 'en' }
        ]
    }
];
