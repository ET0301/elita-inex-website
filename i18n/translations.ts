export type Language = 'en' | 'sq' | 'de' | 'hr' | 'mk' | 'no';

export const translations = {
    en: {
        nav: {
            collections: 'Collections',
            archives: 'Archives',
            process: 'Process',
            enquire: 'Enquire',
            studio: 'Studio',
            enquiries: 'Enquiries'
        },
        hero: {
            subtitle: 'BESPOKE SHADING SOLUTIONS',
            title: 'Redefining',
            titleHighlight: 'Architectural',
            titleEnd: 'Light.',
            description: 'Handcrafted awnings and pergola systems engineered for the most distinguished residential and commercial properties.',
            ctaVisit: 'REQUEST STUDIO VISIT',
            ctaCollections: 'THE COLLECTIONS'
        },
        products: {
            title: 'Our Engineering',
            subtitle: 'Refined architectural elements designed for permanence and performance.',
            techSpecs: 'Technical Specs'
        },
        about: {
            quality: 'Quality',
            assured: 'Assured',
            label: 'In-House Manufacturing',
            title: 'Precision Craftsmen',
            titleEnd: 'for the Modern Age.',
            description: 'Every system is manufactured in our state-of-the-art facility, ensuring that the precision of the design is reflected in the durability of the final installation. We use exclusively high-tensile alloys and architectural solar textiles.',
            atelierTitle: 'The Atelier',
            atelierDesc: 'Precision cutting and manual assembly for uncompromising quality standards.',
            smartTitle: 'Smart Control',
            smartDesc: 'Wind-tested mechanics and full smart-home integration as standard.'
        },
        gallery: {
            title: 'Project Archives',
            featured: 'Featured Installation',
            cta: 'The Full Portfolio',
            noResults: 'No models match the selected architectural filter.'
        },
        collections: {
            title: 'The Collections',
            subtitle: 'Precision-engineered systems defining the standard in architectural solar control.',
            model: 'Collection Model',
            configs: 'Configurations',
            automation: 'Automation',
            techData: 'Technical Data Sheet',
            standard: 'Standard Integration'
        },
        footer: {
            desc: 'Bespoke architectural shading for distinguished properties. Design, manufacture, and installation handled entirely in-house.',
            rights: '© 2025 Elita Inex Architectural Group.',
            items: {
                custom: 'Custom Engineering',
                atelier: 'Atelier Fabrication',
                fitting: 'White Glove Fitting'
            }
        },
        quote: {
            title: 'Architectural Enquiry',
            desc: 'Submit your property details to initiate a bespoke design consultation with our studio team.',
            name: 'Full Name',
            email: 'Email Address',
            details: 'Project Details',
            submit: 'Submit Brief'
        },
        process: {
            title: 'The Atelier Process',
            steps: [
                { title: 'Consultation', description: 'Expert advice on-site to determine the ideal structural requirements for your space.' },
                { title: 'Design', description: 'Bespoke 3D modeling to visualize the integration with your existing architecture.' },
                { title: 'Production', description: 'Precision manufacturing in our facility using high-grade aluminum and premium textiles.' },
                { title: 'Installation', description: 'Professional white-glove fitting by our certified in-house technical team.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Retractable Bio-Climatic Pergola', description: 'High-performance aluminum structure with motorized roof systems, offering complete control over sunlight and ventilation.' },
            'zip-screen-premium': { name: 'Precision Zip Screen', description: 'Ultra-durable vertical shading with a specialized side-track system that keeps fabric perfectly taut against high winds.' },
            'glass-sliding-system': { name: 'Structural Glass Enclosure', description: 'Minimalist sliding glass panels providing a panoramic view while shielding your outdoor space from the elements.' },
            'folding-arm-awning': { name: 'Architectural Retractable Awning', description: 'Classic elegance with modern engineering. Strong folding arms and high-grade textiles for premium residential shade.' },
            'led-pergola-blue': { name: 'LED-Integrated Pergola - Blue', description: 'Contemporary pergola system with integrated blue LED strip lighting, creating a futuristic ambiance for evening entertainment.' },
            'led-pergola-green': { name: 'LED-Integrated Pergola - Green', description: 'Stylish pergola featuring vibrant green LED lighting, perfect for creating an inviting outdoor atmosphere.' },
            'led-pergola-gradient': { name: 'LED-Integrated Pergola - Gradient', description: 'Bioclimatic pergola with dual-color LED lighting system, offering gradient transitions for versatile mood setting.' },
            'commercial-glass-enclosure': { name: 'Commercial Glass Enclosure', description: 'Expansive glass-enclosed structure for commercial spaces, featuring dark framing and panoramic views ideal for cafes and restaurants.' },
            'residential-veranda': { name: 'Residential Glass Veranda', description: 'Elegant glass veranda extension for residential properties, seamlessly connecting indoor and outdoor living spaces.' },
            'motorized-pergola-led': { name: 'Motorized Pergola with Integrated Lighting', description: 'Large-scale retractable pergola with extensive integrated LED lighting system, perfect for commercial and event spaces.' },
            'residential-pergola-patio': { name: 'Residential Patio Pergola', description: 'Elegant dark-framed pergola with retractable roof system and integrated lighting, designed for residential outdoor dining and relaxation.' },
            'retractable-sun-shades': { name: 'Retractable Sun Shades', description: 'Modern retractable sun shade system with dark fabric panels, providing superior solar control and architectural elegance.' }
        },
        projectsItems: {
            '1': { title: 'Modern Villa Pergola', category: 'Residential' },
            '2': { title: 'Urban Terrace Solution', category: 'Commercial' },
            '3': { title: 'Bespoke Zip Screen Install', category: 'Privacy' },
            '4': { title: 'Panoramic Glass Enclosure', category: 'Luxury' },
            '5': { title: 'Commercial Plaza Shading', category: 'Hospitality' },
            '6': { title: 'Minimalist Garden Pergola', category: 'Residential' },
            '7': { title: 'Luxury Poolside Pergola', category: 'Luxury' },
            '8': { title: 'Grand Commercial Project', category: 'Commercial' },
            '9': { title: 'Blue LED Architectural Lighting', category: 'Design' },
            '10': { title: 'Green Oasis Illumination', category: 'Garden' },
            '11': { title: 'Gradient Mood System', category: 'Atmosphere' },
            '12': { title: 'Panoramic Commercial Glass', category: 'Commercial' },
            '13': { title: 'Elite Glass Enclosure', category: 'Luxury' },
            '14': { title: 'High-End Patio Pergola', category: 'Residential' },
            '15': { title: 'Structural Sun Shade Facade', category: 'Commercial' },
            '16': { title: 'Bespoke Glass Conservatory', category: 'Residential' }
        },
        testimonialsItems: [
            { quote: "The precision of Elita Inex engineering is unparalleled. They didn't just provide shade; they enhanced the architectural integrity of our villa.", author: "Julian v. H.", role: "Lead Architect", location: "Zurich, Switzerland" },
            { quote: "Working with the atelier was a seamless experience. The integration of the bioclimatic systems into our restaurant terrace has doubled our evening capacity.", author: "Elena Rossi", role: "Proprietor", location: "Milan, Italy" },
            { quote: "A masterclass in minimalist design and functional performance. The zip screens are as beautiful as they are durable against coastal winds.", author: "Marcus Thorne", role: "Estate Director", location: "Monaco" }
        ],
        faqsItems: [
            { question: "What wind speeds are your systems tested for?", answer: "Our systems, particularly the Zip Screen Premium, are wind-tunnel tested to withstand speeds of up to 120km/h, exceeding industry standards for residential and commercial safety." },
            { question: "Can these systems be integrated with smart home technology?", answer: "Yes, all our motorized solutions come standard with Somfy RTS or IO protocols, allowing seamless integration with Control4, Crestron, and Lutron systems." },
            { question: "How long does the bespoke manufacturing process take?", answer: "Typically, from final design approval to white-glove installation, the process spans 6 to 8 weeks, depending on the complexity of the architectural requirements." },
            { question: "Do you offer international installation?", answer: "While we are based in Skopje, our technical teams travel globally for prestigious projects to ensure the Elita Inex standard of installation is maintained." }
        ],
        intro: {
            title: 'ELITA INEX',
            subtitle: 'Architectural Excellence',
            enter: 'Enter Experience'
        },
        newsletter: {
            label: 'Elite Ecosystem',
            title: 'Join the Atelier',
            titleItalic: 'Perspective.',
            desc: 'Receive architectural insights, project reveals, and exclusive design innovations directly from our studio.',
            successTitle: 'Subscription Confirmed',
            successDesc: 'Welcome to the Elita Inex inner circle.',
            placeholder: 'Architectural Registry Email',
            button: 'Register'
        },
        stats: {
            years: 'Years of Excellence',
            global: 'Global Installations',
            components: 'Precision Components',
            craftsmen: 'Studio Craftsmen'
        }
    },
    sq: {
        nav: {
            collections: 'Koleksionet',
            archives: 'Arkiva',
            process: 'Procesi',
            enquire: 'Kërkesë',
            studio: 'Studio',
            enquiries: 'Kërkesat'
        },
        hero: {
            subtitle: 'ZGJIDHJE TË HIJEZIMIT ME POROSI',
            title: 'Duke Ridimensionuar',
            titleHighlight: 'Dritën',
            titleEnd: 'Arkitekturore.',
            description: 'Tendat dhe pergolat e punuara me dorë, të inxhinieruara për pronat më të dalluara rezidenciale dhe komerciale.',
            ctaVisit: 'KËRKO VIZITË NË STUDIO',
            ctaCollections: 'KOLEKSIONET'
        },
        products: {
            title: 'Inxhinieria Jonë',
            subtitle: 'Elemente arkitekturore të rafinuara, të dizajnuara për qëndrueshmëri dhe performancë.',
            techSpecs: 'Specifikat Teknike'
        },
        about: {
            quality: 'Cilësi',
            assured: 'e Garantuar',
            label: 'Prodhim i Brendshëm',
            title: 'Zejtarë të Përpiktë',
            titleEnd: 'për Kohën Moderne.',
            description: 'Çdo sistem prodhohet në fabrikën tonë të teknologjisë së fundit, duke siguruar që saktësia e dizajnit të reflektohet në qëndrueshmërinë e instalimit përfundimtar. Ne përdorim ekskluzivisht lidhje të aluminit me tension të lartë dhe tekstile arkitekturore diellore.',
            atelierTitle: 'Atelieja',
            atelierDesc: 'Prerje precize dhe montim manual për standarde të pakompromis të cilësisë.',
            smartTitle: 'Kontroll i Mençur',
            smartDesc: 'Mekanizmat e testuar ndaj erës dhe integrimi i plotë në shtëpitë e mençura si standard.'
        },
        gallery: {
            title: 'Arkiva e Projekteve',
            featured: 'Instalim i Veçantë',
            cta: 'Portofoli i Plotë',
            noResults: 'Asnjë model nuk përputhet me filtrin e zgjedhur arkitekturor.'
        },
        collections: {
            title: 'Koleksionet',
            subtitle: 'Sisteme të inxhinieruara me saktësi që përcaktojnë standardin në kontrollin diellor arkitekturor.',
            model: 'Modeli i Koleksionit',
            configs: 'Konfigurimet',
            automation: 'Automatizimi',
            techData: 'Fleta e Të Dhënave Teknike',
            standard: 'Integrimi Standard'
        },
        footer: {
            desc: 'Himezim arkitekturor me porosi për prona të dalluara. Dizajni, prodhimi dhe instalimi trajtohen plotësisht nga ne.',
            rights: '© 2025 Grupi Arkitekturor Elita Inex.',
            items: {
                custom: 'Inxhinieri me Porosi',
                atelier: 'Fabrikim në Atelie',
                fitting: 'Montim me Kujdes Maksimal'
            }
        },
        quote: {
            title: 'Kërkesë Arkitekturore',
            desc: 'Dërgoni detajet e pronës tuaj për të filluar një konsultim të personalizuar dizajni me ekipin tonë të studios.',
            name: 'Emri i Plotë',
            email: 'Adresa e Email-it',
            details: 'Detajet e Projektit',
            submit: 'Dërgo Kërkesën'
        },
        process: {
            title: 'Procesi i Ateliesë',
            steps: [
                { title: 'Konsultimi', description: 'Këshillim ekspert në vendngjarje për të përcaktuar kërkesat ideale strukturore për hapësirën tuaj.' },
                { title: 'Dizajni', description: 'Modelim 3D me porosi për të vizualizuar integrimin me arkitekturën tuaj ekzistuese.' },
                { title: 'Prodhimi', description: 'Prodhim preciz në fabrikën tonë duke përdorur alumin të cilësisë së lartë dhe tekstile premium.' },
                { title: 'Instalimi', description: 'Montim profesional nga ekipi ynë teknik i certifikuar brenda shtëpisë.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Pergolë Bio-Klimatike e Tërheqshme', description: 'Strukturë alumini me performancë të lartë me sisteme çatie të motorizuara, duke ofruar kontroll të plotë mbi dritën e diellit dhe ajrosjen.' },
            'zip-screen-premium': { name: 'Perde Zip me Precizion', description: 'Hije vertikale ultra-rezistente me sistem të specializuar anësor që e mban pëlhurën krejtësisht të tendosur ndaj erërave të forta.' },
            'glass-sliding-system': { name: 'Mbyllje me Xham Strukturor', description: 'Panele xhami rrëshqitëse minimaliste që ofrojnë pamje panoramike ndërsa mbrojnë hapësirën tuaj të jashtme nga elementët.' },
            'folding-arm-awning': { name: 'Tendë Arkitekturore e Tërheqshme', description: 'Elegancë klasike me inxhinieri moderne. Krahë të fortë të palosshëm dhe tekstile të klasit të lartë për hije premium rezidenciale.' },
            'led-pergola-blue': { name: 'Pergolë me Integrim LED - Blu', description: 'Sistem bashkëkohor pergole me ndriçim shiritash LED blu të integruar, duke krijuar një ambient futuristik për argëtim në mbrëmje.' },
            'led-pergola-green': { name: 'Pergolë me Integrim LED - Jeshile', description: 'Pergolë elegante me ndriçim LED jeshil të gjallë, e përkryer për krijimin e një atmosfere ftuese në natyrë.' },
            'led-pergola-gradient': { name: 'Pergolë me Integrim LED - Gradient', description: 'Pergolë bioklimatike me sistem ndriçimi LED me dy ngjyra, duke ofruar kalime gradient për cilësime të gjithanshme humori.' },
            'commercial-glass-enclosure': { name: 'Mbyllje Xhami Komerciale', description: 'Strukturë e gjerë e mbyllur me xham për hapësira komerciale, me kornizë të errët dhe pamje panoramike ideale për kafene dhe restorante.' },
            'residential-veranda': { name: 'Verandë Xhami Rezidenciale', description: 'Zgjerim elegant verande xhami për prona rezidenciale, që lidh pa probleme hapësirat e brendshme dhe të jashtme të jetesës.' },
            'motorized-pergola-led': { name: 'Pergolë e Motorizuar me Ndriçim', description: 'Pergolë e madhe e tërheqshme me sistem të gjerë ndriçimi LED të integruar, e përkryer për hapësira komerciale dhe ngjarjesh.' },
            'residential-pergola-patio': { name: 'Pergolë Patio Rezidenciale', description: 'Pergolë elegante me kornizë të errët me sistem çatie të tërheqshme dhe ndriçim të integruar, e projektuar për ngrënie dhe relaksim rezidencial në natyrë.' },
            'retractable-sun-shades': { name: 'Hije Dielli të Tërheqshme', description: 'Sistem modern hijeje dielli të tërheqshme me panele pëlhure të errëta, duke ofruar kontroll superior diellor dhe elegancë arkitekturore.' }
        },
        projectsItems: {
            '1': { title: 'Pergolë Vila Moderne', category: 'Rezidenciale' },
            '2': { title: 'Zgjidhje tarrace urbane', category: 'Komerciale' },
            '3': { title: 'Instalim Perde Zip me Porosi', category: 'Privatësi' },
            '4': { title: 'Mbyllje Xhami Panoramike', category: 'Luks' },
            '5': { title: 'Hijezim Sheshi Tregtar', category: 'Mikpritje' },
            '6': { title: 'Pergolë Kopshti Minimaliste', category: 'Rezidenciale' },
            '7': { title: 'Pergolë Luksoze Pishine', category: 'Luks' },
            '8': { title: 'Projekt Madhështor Tregtar', category: 'Komerciale' },
            '9': { title: 'Ndriçim Arkitekturor LED Blu', category: 'Dizajn' },
            '10': { title: 'Ndriçim Oazi i Gjelbër', category: 'Kopsht' },
            '11': { title: 'Sistem Humori Gradient', category: 'Atmosferë' },
            '12': { title: 'Xham Komercial Panoramik', category: 'Komerciale' },
            '13': { title: 'Mbyllje Xhami Elite', category: 'Luks' },
            '14': { title: 'Pergolë Patio e Klasit të Lartë', category: 'Rezidenciale' },
            '15': { title: 'Fasadë Strukturore Hije', category: 'Komerciale' },
            '16': { title: 'Konservator Xhami me Porosi', category: 'Rezidenciale' }
        },
        testimonialsItems: [
            { quote: "Saktësia e inxhinierisë Elita Inex është e pashoqe. Ata nuk na ofruan thjesht hije; ata përmirësuan integritetin arkitekturor të vilës sonë.", author: "Julian v. H.", role: "Arkitekt Kryesor", location: "Zyrih, Zvicër" },
            { quote: "Puna me atelienë ishte një përvojë e qetë. Integrimi i sistemeve bioklimatike në tarracën e restorantit tonë ka dyfishuar kapacitetin tonë të mbrëmjes.", author: "Elena Rossi", role: "Pronare", location: "Milano, Itali" },
            { quote: "Një klasë mjeshtërore në dizajn minimalist dhe performancë funksionale. Perdet zip janë sa të bukura aq edhe të qëndrueshme ndaj erërave bregdetare.", author: "Marcus Thorne", role: "Drejtor i Pasurive", location: "Monako" }
        ],
        faqsItems: [
            { question: "Për çfarë shpejtësie ere janë të testuara sistemet tuaja?", answer: "Sistemet tona, veçanërisht Zip Screen Premium, janë të testuara në tunel ere për t'i bërë ballë shpejtësive deri në 120 km/h, duke tejkaluar standardet e industrisë për sigurinë rezidenciale dhe komerciale." },
            { question: "A mund të integrohen këto sisteme me teknologjinë e shtëpisë së mençur?", answer: "Po, të gjitha zgjidhjet tona të motorizuara vijnë standard me protokollet Somfy RTS ose IO, duke lejuar integrim të qetë me sistemet Control4, Crestron dhe Lutron." },
            { question: "Sa zgjat procesi i prodhimit me porosi?", answer: "Zakonisht, nga miratimi përfundimtar i dizajnit deri tek instalimi, procesi zgjat 6 deri në 8 javë, në varësi të kompleksitetit të kërkesave arkitekturore." },
            { question: "A ofroni instalim ndërkombëtar?", answer: "Ndërsa jemi me bazë në Shkup, ekipet tona teknike udhëtojnë globalisht për projekte prestigjioze për të siguruar që standardi i instalimit Elita Inex të ruhet." }
        ],
        intro: {
            title: 'ELITA INEX',
            subtitle: 'Përsosmëri Arkitekturore',
            enter: 'Hyni në Eksperiencë'
        },
        newsletter: {
            label: 'Ekosistemi Elitë',
            title: 'Bashkohuni me Perspektivën',
            titleItalic: 'e Ateliesë.',
            desc: 'Merrni njohuri arkitekturore, zbulime projektesh dhe inovacione ekskluzive të dizajnit direkt nga studioja jonë.',
            successTitle: 'Abonimi u Konfirmua',
            successDesc: 'Mirësevini në rrethin e ngushtë të Elita Inex.',
            placeholder: 'Email-i i Regjistrit Arkitekturor',
            button: 'Regjistrohu'
        },
        stats: {
            years: 'Vite Përsosmërie',
            global: 'Instalime Globale',
            components: 'Komponentë Preciz',
            craftsmen: 'Zejtarë të Studios'
        }
    },
    de: {
        nav: {
            collections: 'Kollektionen',
            archives: 'Archiv',
            process: 'Prozess',
            enquire: 'Anfrage',
            studio: 'Atelier',
            enquiries: 'Anfragen'
        },
        hero: {
            subtitle: 'MASSGEFERTIGTE BESCHATTUNGSLÖSUNGEN',
            title: 'Neudefinition',
            titleHighlight: 'des architektonischen',
            titleEnd: 'Lichts.',
            description: 'Handgefertigte Markisen und Pergola-Systeme, entwickelt für die anspruchsvollsten Wohn- und Gewerbeimmobilien.',
            ctaVisit: 'BESUCH IM ATELIER ANFORDERN',
            ctaCollections: 'DIE KOLLEKTIONEN'
        },
        products: {
            title: 'Unsere Technik',
            subtitle: 'Raffinierte architektonische Elemente, entworfen für Beständigkeit und Leistung.',
            techSpecs: 'Technische Daten'
        },
        about: {
            quality: 'Qualität',
            assured: 'Garantiert',
            label: 'Hauseigene Fertigung',
            title: 'Präzisionshandwerk',
            titleEnd: 'für die Moderne.',
            description: 'Jedes System wird in unserer hochmodernen Anlage gefertigt, um sicherzustellen, dass sich die Präzision des Designs in der Langlebigkeit der endgültigen Installation widerspiegelt. Wir verwenden ausschließlich hochfeste Legierungen und architektonische Sonnenschutztextilien.',
            atelierTitle: 'Das Atelier',
            atelierDesc: 'Präzisionszuschnitt und manuelle Montage für kompromisslose Qualitätsstandards.',
            smartTitle: 'Intelligente Steuerung',
            smartDesc: 'Windgetestete Mechanik und volle Smart-Home-Integration als Standard.'
        },
        gallery: {
            title: 'Projektarchiv',
            featured: 'Ausgewählte Installation',
            cta: 'Das gesamte Portfolio',
            noResults: 'Keine Modelle entsprechen dem gewählten Architekturfilter.'
        },
        collections: {
            title: 'Die Kollektionen',
            subtitle: 'Präzisionsgefertigte Systeme, die den Standard im architektonischen Sonnenschutz definieren.',
            model: 'Kollektionsmodell',
            configs: 'Konfigurationen',
            automation: 'Automatisierung',
            techData: 'Technisches Datenblatt',
            standard: 'Standard-Integration'
        },
        footer: {
            desc: 'Maßgeschneiderte architektonische Beschattung für ausgezeichnete Immobilien. Design, Fertigung und Installation komplett aus einer Hand.',
            rights: '© 2025 Elita Inex Architectural Group.',
            items: {
                custom: 'Maßanfertigung',
                atelier: 'Atelierfertigung',
                fitting: 'White-Glove-Montage'
            }
        },
        quote: {
            title: 'Architektonische Anfrage',
            desc: 'Senden Sie Ihre Objektdetails, um eine maßgeschneiderte Designberatung mit unserem Atelier-Team zu beginnen.',
            name: 'Vollständiger Name',
            email: 'E-Mail-Adresse',
            details: 'Projektdetails',
            submit: 'Kurzbeschreibung Senden'
        },
        process: {
            title: 'Der Atelier-Prozess',
            steps: [
                { title: 'Beratung', description: 'Expertenberatung vor Ort zur Ermittlung der idealen strukturellen Anforderungen für Ihren Raum.' },
                { title: 'Design', description: 'Maßgeschneiderte 3D-Modellierung zur Visualisierung der Integration in Ihre bestehende Architektur.' },
                { title: 'Produktion', description: 'Präzisionsfertigung in unserer Anlage unter Verwendung von hochwertigem Aluminium und Premium-Textilien.' },
                { title: 'Installation', description: 'Professionelle White-Glove-Montage durch unser zertifiziertes hauseigenes technisches Team.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Einziehbare Bioklimatische Pergola', description: 'Hochleistungs-Aluminiumstruktur mit motorisierten Dachsystemen für vollständige Kontrolle über Sonnenlicht und Belüftung.' },
            'zip-screen-premium': { name: 'Präzisions-Zip-Screen', description: 'Ultra-robuste vertikale Beschattung mit einem speziellen Seitenschienensystem, das den Stoff auch bei starkem Wind perfekt straff hält.' },
            'glass-sliding-system': { name: 'Strukturelle Glasumhausung', description: 'Minimalistische Glasschiebewände bieten einen Panoramablick und schützen Ihren Außenbereich vor Witterungseinflüssen.' },
            'folding-arm-awning': { name: 'Architektonische Gelenkarmmarkise', description: 'Klassische Eleganz mit moderner Technik. Starke Gelenkarme und hochwertige Textilien für erstklassigen Wohnkomfort.' },
            'led-pergola-blue': { name: 'LED-Integrierte Pergola - Blau', description: 'Zeitgenössisches Pergola-System mit integrierter blauer LED-Streifenbeleuchtung für ein futuristisches Ambiente bei abendlicher Unterhaltung.' },
            'led-pergola-green': { name: 'LED-Integrierte Pergola - Grün', description: 'Stilvolle Pergola mit lebendiger grüner LED-Beleuchtung, perfekt für eine einladende Atmosphäre im Freien.' },
            'led-pergola-gradient': { name: 'LED-Integrierte Pergola - Verlauf', description: 'Bioklimatische Pergola mit zweifarbigem LED-Beleuchtungssystem für vielseitige Stimmungseinstellungen.' },
            'commercial-glass-enclosure': { name: 'Gewerbliche Glasumhausung', description: 'Weitläufige verglaste Struktur für gewerbliche Räume mit dunklem Rahmen und Panoramablick, ideal für Cafés und Restaurants.' },
            'residential-veranda': { name: 'Wohnveranda aus Glas', description: 'Elegante Glasveranda-Erweiterung für Wohnimmobilien, die Innen- und Außenbereiche nahtlos verbindet.' },
            'motorized-pergola-led': { name: 'Motorisierte Pergola mit Beleuchtung', description: 'Großflächige einziehbare Pergola mit umfangreichem integriertem LED-Beleuchtungssystem, perfekt für Gewerbe- und Veranstaltungsräume.' },
            'residential-pergola-patio': { name: 'Wohn-Terrassenpergola', description: 'Elegante dunkel gerahmte Pergola mit einziehbarem Dachsystem und integrierter Beleuchtung, entworfen für Entspannung und Essen im Freien.' },
            'retractable-sun-shades': { name: 'Einziehbare Sonnensegel', description: 'Modernes einziehbares Sonnensegel-System mit dunklen Stoffbahnen für überlegenen Sonnenschutz und architektonische Eleganz.' }
        },
        projectsItems: {
            '1': { title: 'Moderne Villa Pergola', category: 'Wohnen' },
            '2': { title: 'Urbane Terrassenlösung', category: 'Gewerbe' },
            '3': { title: 'Maßgefertigte Zip-Screen Installation', category: 'Privatsphäre' },
            '4': { title: 'Panoramische Glasumhausung', category: 'Luxus' },
            '5': { title: 'Gewerbliche Platzbeschattung', category: 'Gastgewerbe' },
            '6': { title: 'Minimalistische Gartenpergola', category: 'Wohnen' },
            '7': { title: 'Luxuriöse Pool-Pergola', category: 'Luxus' },
            '8': { title: 'Großes Gewerbeprojekt', category: 'Gewerbe' },
            '9': { title: 'Blaue LED-Architekturbeleuchtung', category: 'Design' },
            '10': { title: 'Grüne Oasen-Beleuchtung', category: 'Garten' },
            '11': { title: 'Farbverlauf-Stimmungssystem', category: 'Atmosphäre' },
            '12': { title: 'Panoramisches Gewerbeglas', category: 'Gewerbe' },
            '13': { title: 'Elite Glasumhausung', category: 'Luxus' },
            '14': { title: 'High-End Terrassenpergola', category: 'Wohnen' },
            '15': { title: 'Strukturelle Sonnenschutzfassade', category: 'Gewerbe' },
            '16': { title: 'Maßgefertigter Glas-Wintergarten', category: 'Wohnen' }
        },
        testimonialsItems: [
            { quote: "Die Präzision der Elita Inex Technik ist beispiellos. Sie haben nicht nur Schatten gespendet, sondern die architektonische Integrität unserer Villa verbessert.", author: "Julian v. H.", role: "Leitender Architekt", location: "Zürich, Schweiz" },
            { quote: "Die Zusammenarbeit mit dem Atelier war eine nahtlose Erfahrung. Die Integration der bioklimatischen Systeme in unsere Restaurantterrasse hat unsere Abendkapazität verdoppelt.", author: "Elena Rossi", role: "Inhaberin", location: "Mailand, Italien" },
            { quote: "Eine Meisterklasse in minimalistischem Design und funktionaler Leistung. Die Zip-Screens sind so schön wie sie langlebig gegen Küstenwinde sind.", author: "Marcus Thorne", role: "Gutsdirektor", location: "Monaco" }
        ],
        faqsItems: [
            { question: "Für welche Windgeschwindigkeiten sind Ihre Systeme getestet?", answer: "Unsere Systeme, insbesondere der Zip Screen Premium, sind im Windkanal getestet, um Geschwindigkeiten von bis zu 120 km/h standzuhalten, was die Industriestandards für Sicherheit übertrifft." },
            { question: "Können diese Systeme in Smart-Home-Technologie integriert werden?", answer: "Ja, alle unsere motorisierten Lösungen sind standardmäßig mit Somfy RTS oder IO Protokollen ausgestattet und ermöglichen eine nahtlose Integration in Control4, Crestron und Lutron Systeme." },
            { question: "Wie lange dauert der maßgeschneiderte Fertigungsprozess?", answer: "Typischerweise dauert der Prozess von der endgültigen Designfreigabe bis zur White-Glove-Montage 6 bis 8 Wochen, abhängig von der Komplexität der architektonischen Anforderungen." },
            { question: "Bieten Sie internationale Installationen an?", answer: "Obwohl wir in Skopje ansässig sind, reisen unsere technischen Teams weltweit für prestigeträchtige Projekte, um sicherzustellen, dass der Elita Inex Installationsstandard eingehalten wird." }
        ],
        intro: {
            title: 'ELITA INEX',
            subtitle: 'Architektonische Exzellenz',
            enter: 'Erlebnis Betreten'
        },
        newsletter: {
            label: 'Elite Ökosystem',
            title: 'Treten Sie dem Atelier bei',
            titleItalic: 'Perspektive.',
            desc: 'Erhalten Sie architektonische Einblicke, Projektenthüllungen und exklusive Designinnovationen direkt aus unserem Studio.',
            successTitle: 'Abonnement Bestätigt',
            successDesc: 'Willkommen im inneren Kreis von Elita Inex.',
            placeholder: 'Architektur-Register E-Mail',
            button: 'Registrieren'
        },
        stats: {
            years: 'Jahre der Exzellenz',
            global: 'Globale Installationen',
            components: 'Präzisionskomponenten',
            craftsmen: 'Atelier-Handwerker'
        }
    },
    hr: {
        nav: {
            collections: 'Kolekcije',
            archives: 'Arhiva',
            process: 'Proces',
            enquire: 'Upit',
            studio: 'Studio',
            enquiries: 'Upiti'
        },
        hero: {
            subtitle: 'RJEŠENJA ZA SJENČENJE PO MJERI',
            title: 'Redefiniranje',
            titleHighlight: 'Arhitektonskog',
            titleEnd: 'Svjetla.',
            description: 'Ručno izrađene tende i pergole inženjerski osmišljene za najistaknutije stambene i poslovne objekte.',
            ctaVisit: 'ZATRAŽITE POSJET STUDIJU',
            ctaCollections: 'KOLEKCIJE'
        },
        products: {
            title: 'Naše Inženjerstvo',
            subtitle: 'Profinjeni arhitektonski elementi dizajnirani za trajnost i performanse.',
            techSpecs: 'Tehničke Specifikacije'
        },
        about: {
            quality: 'Kvaliteta',
            assured: 'Zajamčena',
            label: 'Vlastita Proizvodnja',
            title: 'Precizni Obrtnici',
            titleEnd: 'za Moderno Doba.',
            description: 'Svaki sustav se proizvodi u našem najsuvremenijem pogonu, osiguravajući da se preciznost dizajna odražava u trajnosti konačne instalacije. Koristimo isključivo legure visoke vlačne čvrstoće i arhitektonske solarne tekstile.',
            atelierTitle: 'Atelje',
            atelierDesc: 'Precizno rezanje i ručna montaža za beskompromisne standarde kvalitete.',
            smartTitle: 'Pametno Upravljanje',
            smartDesc: 'Mehanika testirana na vjetar i potpuna integracija pametne kuće kao standard.'
        },
        gallery: {
            title: 'Arhiva Projekata',
            featured: 'Istaknuta Instalacija',
            cta: 'Cijeli Portfolio',
            noResults: 'Nema modela koji odgovaraju odabranom arhitektonskom filteru.'
        },
        collections: {
            title: 'Kolekcije',
            subtitle: 'Precizno inženjerski sustavi koji definiraju standard u arhitektonskoj kontroli sunca.',
            model: 'Model Kolekcije',
            configs: 'Konfiguracije',
            automation: 'Automatizacija',
            techData: 'Tehnički List',
            standard: 'Standardna Integracija'
        },
        footer: {
            desc: 'Sjenčanje po mjeri za istaknute objekte. Dizajn, proizvodnja i instalacija u potpunosti se obavljaju unutar kuće.',
            rights: '© 2025 Elita Inex Architectural Group.',
            items: {
                custom: 'Inženjering po Mjeri',
                atelier: 'Izrada u Ateljeu',
                fitting: 'Montaža s Bijelom Rukavicom'
            }
        },
        quote: {
            title: 'Arhitektonski Upit',
            desc: 'Pošaljite detalje o svom objektu kako biste započeli personalizirane konzultacije o dizajnu s našim timom u studiju.',
            name: 'Puno Ime',
            email: 'Email Adresa',
            details: 'Detalji Projekta',
            submit: 'Pošalji Sažetak'
        },
        process: {
            title: 'Proces Ateljea',
            steps: [
                { title: 'Konzultacije', description: 'Stručni savjeti na licu mjesta za utvrđivanje idealnih strukturnih zahtjeva za vaš prostor.' },
                { title: 'Dizajn', description: '3D modeliranje po mjeri za vizualizaciju integracije s vašom postojećom arhitekturom.' },
                { title: 'Proizvodnja', description: 'Precizna proizvodnja u našem pogonu koristeći visokokvalitetni aluminij i vrhunske tekstile.' },
                { title: 'Instalacija', description: 'Profesionalna montaža s bijelom rukavicom od strane našeg certificiranog internog tehničkog tima.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Uvlačiva Bioklimatska Pergola', description: 'Visokoučinkovita aluminijska konstrukcija s motoriziranim krovnim sustavima, koja nudi potpunu kontrolu nad sunčevom svjetlošću i ventilacijom.' },
            'zip-screen-premium': { name: 'Precizni Zip Screen', description: 'Izuzetno izdržljivo okomito sjenčanje sa specijaliziranim bočnim sustavom koji drži tkaninu savršeno napetom protiv jakih vjetrova.' },
            'glass-sliding-system': { name: 'Strukturno Stakleno Zatvaranje', description: 'Minimalistički klizni stakleni paneli koji pružaju panoramski pogled dok štite vaš vanjski prostor od elemenata.' },
            'folding-arm-awning': { name: 'Arhitektonska Tenda s Preklopnim Rukama', description: 'Klasična elegancija s modernim inženjeringom. Snažne preklopne ruke i visokokvalitetni tekstili za vrhunsko stambeno sjenčanje.' },
            'led-pergola-blue': { name: 'Pergola s Integriranim LED - Plava', description: 'Suvremeni sustav pergole s integriranom plavom LED rasvjetom, stvarajući futuristički ambijent za večernju zabavu.' },
            'led-pergola-green': { name: 'Pergola s Integriranim LED - Zelena', description: 'Moderna pergola sa živopisnom zelenom LED rasvjetom, savršena za stvaranje privlačne atmosfere na otvorenom.' },
            'led-pergola-gradient': { name: 'Pergola s Integriranim LED - Gradijent', description: 'Bioklimatska pergola s dvobojnim LED sustavom rasvjete, koja nudi gradijentne prijelaze za svestrano podešavanje raspoloženja.' },
            'commercial-glass-enclosure': { name: 'Komercijalno Stakleno Zatvaranje', description: 'Prostrana staklena konstrukcija za poslovne prostore, s tamnim okvirima i panoramskim pogledom idealnim za kafiće i restorane.' },
            'residential-veranda': { name: 'Stambena Staklena Veranda', description: 'Elegantno proširenje staklene verande za stambene objekte, koje besprijekorno povezuje unutarnje i vanjske životne prostore.' },
            'motorized-pergola-led': { name: 'Motorizirana Pergola s Rasvjetom', description: 'Velika uvlačiva pergola s opsežnim integriranim LED sustavom rasvjete, savršena za komercijalne i event prostore.' },
            'residential-pergola-patio': { name: 'Stambena Terasa Pergola', description: 'Elegantna pergola tamnog okvira s uvlačivim krovnim sustavom i integriranom rasvjetom, dizajnirana za stambeno blagovanje i opuštanje na otvorenom.' },
            'retractable-sun-shades': { name: 'Uvlačiva Sjenila za Sunce', description: 'Moderni sustav uvlačivih sjenila s tamnim panelima tkanine, koji pruža vrhunsku solarnu kontrolu i arhitektonsku eleganciju.' }
        },
        projectsItems: {
            '1': { title: 'Moderna Vila Pergola', category: 'Stambeno' },
            '2': { title: 'Urbano Rješenje za Terasu', category: 'Komercijalno' },
            '3': { title: 'Zip Screen Instalacija po Mjeri', category: 'Privatnost' },
            '4': { title: 'Panoramsko Stakleno Zatvaranje', category: 'Luksuz' },
            '5': { title: 'Sjenčanje Komercijalnog Trga', category: 'Ugostiteljstvo' },
            '6': { title: 'Minimalistička Vrtna Pergola', category: 'Stambeno' },
            '7': { title: 'Luksuzna Pergola uz Bazen', category: 'Luksuz' },
            '8': { title: 'Veliki Komercijalni Projekt', category: 'Komercijalno' },
            '9': { title: 'Plava LED Arhitektonska Rasvjeta', category: 'Dizajn' },
            '10': { title: 'Rasvjeta Zelene Oaze', category: 'Vrt' },
            '11': { title: 'Sustav Gradijentnog Ugođaja', category: 'Atmosfera' },
            '12': { title: 'Panoramsko Komercijalno Staklo', category: 'Komercijalno' },
            '13': { title: 'Elitno Stakleno Zatvaranje', category: 'Luksuz' },
            '14': { title: 'Vrhunska Terasa Pergola', category: 'Stambeno' },
            '15': { title: 'Strukturna Fasada za Sjenčanje', category: 'Komercijalno' },
            '16': { title: 'Stakleni Konzervatorij po Mjeri', category: 'Stambeno' }
        },
        testimonialsItems: [
            { quote: "Preciznost inženjeringa Elita Inex je bez premca. Nisu samo pružili hlad; poboljšali su arhitektonski integritet naše vile.", author: "Julian v. H.", role: "Glavni Arhitekt", location: "Zürich, Švicarska" },
            { quote: "Rad s ateljeom bio je besprijekorno iskustvo. Integracija bioklimatskih sustava na terasu našeg restorana udvostručila je naš večernji kapacitet.", author: "Elena Rossi", role: "Vlasnica", location: "Milano, Italija" },
            { quote: "Majstorska klasa minimalističkog dizajna i funkcionalnih performansi. Zip screenovi su jednako lijepi koliko i izdržljivi protiv obalnih vjetrova.", author: "Marcus Thorne", role: "Direktor Imanja", location: "Monako" }
        ],
        faqsItems: [
            { question: "Za koje brzine vjetra su vaši sustavi testirani?", answer: "Naši sustavi, posebno Zip Screen Premium, testirani su u zračnom tunelu kako bi izdržali brzine do 120 km/h, premašujući industrijske standarde za stambenu i komercijalnu sigurnost." },
            { question: "Mogu li se ovi sustavi integrirati s tehnologijom pametne kuće?", answer: "Da, sva naša motorizirana rješenja dolaze standardno s Somfy RTS ili IO protokolima, omogućujući besprijekornu integraciju s Control4, Crestron i Lutron sustavima." },
            { question: "Koliko traje proces proizvodnje po mjeri?", answer: "Obično, od konačnog odobrenja dizajna do montaže, proces traje 6 do 8 tjedana, ovisno o složenosti arhitektonskih zahtjeva." },
            { question: "Nudite li međunarodnu instalaciju?", answer: "Iako nam je sjedište u Skoplju, naši tehnički timovi putuju globalno za prestižne projekte kako bi osigurali održavanje standarda instalacije Elita Inex." }
        ],
        intro: {
            title: 'ELITA INEX',
            subtitle: 'Arhitektonska Izvrsnost',
            enter: 'Uđite u Iskustvo'
        },
        newsletter: {
            label: 'Elitni Ekosustav',
            title: 'Pridružite se Ateljeu',
            titleItalic: 'Perspektiva.',
            desc: 'Primajte arhitektonske uvide, otkrivanja projekata i ekskluzivne inovacije dizajna izravno iz našeg studija.',
            successTitle: 'Pretplata Potvrđena',
            successDesc: 'Dobrodošli u uži krug Elita Inex.',
            placeholder: 'Email Arhitektonskog Registra',
            button: 'Registriraj se'
        },
        stats: {
            years: 'Godine Izvrsnosti',
            global: 'Globalne Instalacije',
            components: 'Precizne Komponente',
            craftsmen: 'Obrtnici Studija'
        }
    },
    mk: {
        nav: {
            collections: 'Колекции',
            archives: 'Архива',
            process: 'Процес',
            enquire: 'Барање',
            studio: 'Студио',
            enquiries: 'Прашања'
        },
        hero: {
            subtitle: 'РЕШЕНИЈА ЗА ЗАСЕНЧУВАЊЕ ПО МЕРКА',
            title: 'Редефинирање на',
            titleHighlight: 'Архитектонското',
            titleEnd: 'Светло.',
            description: 'Рачно изработени тенди и пергола системи дизајнирани за најистакнатите резиденцијални и комерцијални објекти.',
            ctaVisit: 'ЗАКАЖЕТЕ ПОСЕТА ВО СТУДИО',
            ctaCollections: 'КОЛЕКЦИИТЕ'
        },
        products: {
            title: 'Нашиот Инженеринг',
            subtitle: 'Рафинирани архитектонски елементи дизајнирани за трајност и перформанси.',
            techSpecs: 'Технички Спецификации'
        },
        about: {
            quality: 'Квалитет',
            assured: 'Загарантиран',
            label: 'Сопствено Производство',
            title: 'Прецизни Занаетчии',
            titleEnd: 'за Модерното Време.',
            description: 'Секој систем се произведува во нашиот најсовремен погон, осигурувајќи дека прецизноста на дизајнот се одразува во трајноста на финалната инсталација. Користиме исклучиво легури со висока цврстина и архитектонски соларни текстили.',
            atelierTitle: 'Ателјето',
            atelierDesc: 'Прецизно сечење и рачна монтажа за бескомпромисни стандарди за квалитет.',
            smartTitle: 'Паметна Контрола',
            smartDesc: 'Механика тестирана на ветер и целосна интеграција во паметни домови како стандард.'
        },
        gallery: {
            title: 'Архива на Проекти',
            featured: 'Истакната Инсталација',
            cta: 'Целосно Портфолио',
            noResults: 'Нема модели кои одговараат на избраниот архитектонски филтер.'
        },
        collections: {
            title: 'Колекциите',
            subtitle: 'Прецизно дизајнирани системи кои го дефинираат стандардот во архитектонската соларна контрола.',
            model: 'Модел на Колекција',
            configs: 'Конфигурации',
            automation: 'Автоматизација',
            techData: 'Технички Лист',
            standard: 'Стандардна Интеграција'
        },
        footer: {
            desc: 'Засенчување по мерка за истакнати објекти. Дизајн, производство и инсталација целосно управувани од нас.',
            rights: '© 2025 Елита Инекс Архитектонска Група.',
            items: {
                custom: 'Инженеринг по Мерка',
                atelier: 'Фабрикација во Ателје',
                fitting: 'Монтажа со Бела Ракавица'
            }
        },
        quote: {
            title: 'Архитектонско Барање',
            desc: 'Испратете ги деталите за вашиот имот за да започнете персонализирана консултација за дизајн со нашиот тим во студиото.',
            name: 'Целосно Име',
            email: 'Емаил Адреса',
            details: 'Детали за Проектот',
            submit: 'Испрати Барање'
        },
        process: {
            title: 'Процесот на Ателјето',
            steps: [
                { title: 'Консултација', description: 'Експертски совет на лице место за да се утврдат идеалните структурни барања за вашиот простор.' },
                { title: 'Дизајн', description: '3D моделирање по мерка за визуелизација на интеграцијата со вашата постоечка архитектура.' },
                { title: 'Производство', description: 'Прецизно производство во нашиот погон користејќи висококвалитетен алуминиум и премиум текстили.' },
                { title: 'Инсталација', description: 'Професионална монтажа од нашиот сертифициран интерен технички тим.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Биоклиматска Пергола на Повлекување', description: 'Алуминиумска структура со високи перформанси со моторизирани покривни системи, нудејќи целосна контрола врз сончевата светлина и вентилацијата.' },
            'zip-screen-premium': { name: 'Прецизен Zip Screen', description: 'Ултра-издржливо вертикално засенчување со специјализиран страничен систем што ја држи ткаенината совршено затегната против силни ветрови.' },
            'glass-sliding-system': { name: 'Структурно Стаклено Затворање', description: 'Минималистички лизгачки стаклени панели кои обезбедуваат панорамски поглед додека го штитат вашиот надворешен простор од елементите.' },
            'folding-arm-awning': { name: 'Архитектонска Тенда со Преклопни Раце', description: 'Класична елеганција со модерен инженеринг. Силни преклопни раце и висококвалитетни текстили за премиум резиденцијално засенчување.' },
            'led-pergola-blue': { name: 'Пергола со Интегрирано LED - Сина', description: 'Современ пергола систем со интегрирано сино LED осветлување, создавајќи футуристички амбиент за вечерна забава.' },
            'led-pergola-green': { name: 'Пергола со Интегрирано LED - Зелена', description: 'Стилска пергола со живописно зелено LED осветлување, совршено за создавање привлечна атмосфера на отворено.' },
            'led-pergola-gradient': { name: 'Пергола со Интегрирано LED - Градиент', description: 'Биоклиматска пергола со двобоен LED систем за осветлување, нудејќи градиентни премини за разноврсно подесување на расположението.' },
            'commercial-glass-enclosure': { name: 'Комерцијално Стаклено Затворање', description: 'Пространа стаклена структура за деловни простори, со темни рамки и панорамски поглед идеален за кафулиња и ресторани.' },
            'residential-veranda': { name: 'Резиденцијална Стаклена Веранда', description: 'Елегантно проширување на стаклена веранда за резиденцијални имоти, кое беспрекорно ги поврзува внатрешните и надворешните простори за живеење.' },
            'motorized-pergola-led': { name: 'Моторизирана Пергола со Осветлување', description: 'Голема пергола на повлекување со обемен интегриран LED систем за осветлување, совршена за комерцијални и простори за настани.' },
            'residential-pergola-patio': { name: 'Резиденцијална Патио Пергола', description: 'Елегантна пергола со темна рамка со систем на покрив на повлекување и интегрирано осветлување, дизајнирана за резиденцијално јадење и релаксација на отворено.' },
            'retractable-sun-shades': { name: 'Сенки за Сонце на Повлекување', description: 'Модерен систем на сенки за сонце на повлекување со темни панели од ткаенина, обезбедувајќи супериорна соларна контрола и архитектонска елеганција.' }
        },
        projectsItems: {
            '1': { title: 'Модерна Вила Пергола', category: 'Резиденцијално' },
            '2': { title: 'Урбано Решение за Тераса', category: 'Комерцијално' },
            '3': { title: 'Zip Screen Инсталација по Мерка', category: 'Приватност' },
            '4': { title: 'Панорамско Стаклено Затворање', category: 'Луксур' },
            '5': { title: 'Засенчување на Комерцијален Плоштад', category: 'Угостителство' },
            '6': { title: 'Минималистичка Градинарска Пергола', category: 'Резиденцијално' },
            '7': { title: 'Луксузна Пергола покрај Базен', category: 'Луксур' },
            '8': { title: 'Голем Комерцијален Проект', category: 'Комерцијално' },
            '9': { title: 'Сино LED Архитектонско Осветлување', category: 'Дизајн' },
            '10': { title: 'Осветлување на Зелена Оаза', category: 'Градина' },
            '11': { title: 'Систем за Градиентно Расположение', category: 'Атмосфера' },
            '12': { title: 'Панорамско Комерцијално Стакло', category: 'Комерцијално' },
            '13': { title: 'Елитно Стаклено Затворање', category: 'Луксуз' },
            '14': { title: 'Врвна Патио Пергола', category: 'Резиденцијално' },
            '15': { title: 'Структурна Фасада за Засенчување', category: 'Комерцијално' },
            '16': { title: 'Стаклен Конзерваториум по Мерка', category: 'Резиденцијално' }
        },
        testimonialsItems: [
            { quote: "Прецизноста на инженерингот на Елита Инекс е без конкуренција. Тие не само што обезбедија сенка; тие го подобрија архитектонскиот интегритет на нашата вила.", author: "Јулијан в. Х.", role: "Главен Архитект", location: "Цирих, Швајцарија" },
            { quote: "Работата со ателјето беше беспрекорно искуство. Интеграцијата на биоклиматските системи во нашата ресторанска тераса го удвои нашиот вечерен капацитет.", author: "Елена Роси", role: "Сопственик", location: "Милано, Италија" },
            { quote: "Мајсторска класа во минималистички дизајн и функционални перформанси. Zip screen-овите се исто толку убави колку што се издржливи против крајбрежните ветрови.", author: "Маркус Торн", role: "Директор на Имот", location: "Монако" }
        ],
        faqsItems: [
            { question: "За кои брзини на ветер се тестирани вашите системи?", answer: "Нашите системи, особено Zip Screen Premium, се тестирани во воздушен тунел за да издржат брзини до 120 км/ч, надминувајќи ги индустриските стандарди за безбедност." },
            { question: "Дали овие системи можат да се интегрираат со технологија за паметни домови?", answer: "Да, сите наши моторизирани решенија доаѓат стандардно со Somfy RTS или IO протоколи, овозможувајќи беспрекорна интеграција со Control4, Crestron и Lutron системи." },
            { question: "Колку трае процесот на производство по мерка?", answer: "Обично, од конечното одобрување на дизајнот до инсталацијата, процесот трае 6 до 8 недели, во зависност од сложеноста на архитектонските барања." },
            { question: "Дали нудите меѓународна инсталација?", answer: "Иако сме базирани во Скопје, нашите технички тимови патуваат глобално за престижни проекти за да се осигури дека стандардот на инсталација на Елита Инекс се одржува." }
        ],
        intro: {
            title: 'ЕЛИТА ИНЕКС',
            subtitle: 'Архитектонска Екселенција',
            enter: 'Влезете во Искуството'
        },
        newsletter: {
            label: 'Елитен Екосистем',
            title: 'Придружете се на Ателјето',
            titleItalic: 'Перспектива.',
            desc: 'Добивајте архитектонски увиди, откривање на проекти и ексклузивни иновации во дизајнот директно од нашето студио.',
            successTitle: 'Претплатата е Потврдена',
            successDesc: 'Добредојдовте во внатрешниот круг на Елита Инекс.',
            placeholder: 'Емаил за Архитектонски Регистар',
            button: 'Регистрирај се'
        },
        stats: {
            years: 'Години Екселенција',
            global: 'Глобални Инсталации',
            components: 'Прецизни Компоненти',
            craftsmen: 'Занаетчии во Студиото'
        }
    },
    no: {
        nav: {
            collections: 'Kolleksjoner',
            archives: 'Arkiv',
            process: 'Prosess',
            enquire: 'Forespørsel',
            studio: 'Studio',
            enquiries: 'Henvendelser'
        },
        hero: {
            subtitle: 'SKREDDERSYDDE SKYGGELØSNINGER',
            title: 'Redefinerer',
            titleHighlight: 'Arkitektonisk',
            titleEnd: 'Lys.',
            description: 'Håndlagde markiser og pergola-systemer konstruert for de mest utmerkede bolig- og næringseiendommer.',
            ctaVisit: 'BE OM STUDIOBESØK',
            ctaCollections: 'KOLLEKSJONENE'
        },
        products: {
            title: 'Vår Ingeniørkunst',
            subtitle: 'Raffinerte arkitektoniske elementer designet for varighet og ytelse.',
            techSpecs: 'Tekniske Spesifikasjoner'
        },
        about: {
            quality: 'Kvalitet',
            assured: 'Sikret',
            label: 'Intern Produksjon',
            title: 'Presisjonshåndverk',
            titleEnd: 'for den Moderne Tidsalder.',
            description: 'Hvert system er produsert i vårt toppmoderne anlegg, og sikrer at presisjonen i designet gjenspeiles i holdbarheten til den endelige installasjonen. Vi bruker utelukkende legeringer med høy strekkfasthet og arkitektoniske soltekstiler.',
            atelierTitle: 'Atelieret',
            atelierDesc: 'Presisjonskutting og manuell montering for kompromissløse kvalitetsstandarder.',
            smartTitle: 'Smart Kontroll',
            smartDesc: 'Vindtestet mekanikk og full smarthusintegrasjon som standard.'
        },
        gallery: {
            title: 'Prosjektarkiv',
            featured: 'Utvalgt Installasjon',
            cta: 'Hele Porteføljen',
            noResults: 'Ingen modeller samsvarer med det valgte arkitektoniske filteret.'
        },
        collections: {
            title: 'Kolleksjonene',
            subtitle: 'Presisjonskonstruerte systemer som definerer standarden innen arkitektonisk solkontroll.',
            model: 'Kolleksjonsmodell',
            configs: 'Konfigurasjoner',
            automation: 'Automasjon',
            techData: 'Teknisk Datablad',
            standard: 'Standard Integrasjon'
        },
        footer: {
            desc: 'Skreddersydd arkitektonisk skyggelegging for utmerkede eiendommer. Design, produksjon og installasjon håndtert fullstendig internt.',
            rights: '© 2025 Elita Inex Architectural Group.',
            items: {
                custom: 'Skreddersydd Ingeniørkunst',
                atelier: 'Atelier Fabrikasjon',
                fitting: 'Montering med Hvite Hansker'
            }
        },
        quote: {
            title: 'Arkitektonisk Forespørsel',
            desc: 'Send inn dine eiendomsdetaljer for å starte en personlig designkonsultasjon med vårt studiotilbud.',
            name: 'Fullt Navn',
            email: 'E-postadresse',
            details: 'Prosjektdetaljer',
            submit: 'Send Inn Beskrivelse'
        },
        process: {
            title: 'Atelierprosessen',
            steps: [
                { title: 'Konsultasjon', description: 'Ekspertråd på stedet for å bestemme de ideelle strukturelle kravene for din plass.' },
                { title: 'Design', description: 'Skreddersydd 3D-modellering for å visualisere integrasjonen med din eksisterende arkitektur.' },
                { title: 'Produksjon', description: 'Presisjonsproduksjon i vårt anlegg ved bruk av aluminium av høy kvalitet og førsteklasses tekstiler.' },
                { title: 'Installasjon', description: 'Profesjonell montering av vårt sertifiserte interne tekniske team.' }
            ]
        },
        productsItems: {
            'motorized-pergola': { name: 'Uttrekkbar Bioklimatisk Pergola', description: 'Høyytelses aluminiumsstruktur med motoriserte taksystemer, som gir full kontroll over sollys og ventilasjon.' },
            'zip-screen-premium': { name: 'Presisjons Zip Screen', description: 'Ultra-holdbar vertikal skyggelegging med et spesialisert sidesporsystem som holder stoffet perfekt stramt mot sterk vind.' },
            'glass-sliding-system': { name: 'Strukturell Glassinnglassing', description: 'Minimalistiske skyveglasspaneler som gir panoramautsikt samtidig som de beskytter uterommet ditt mot elementene.' },
            'folding-arm-awning': { name: 'Arkitektonisk Uttrekkbar Markise', description: 'Klassisk eleganse med moderne ingeniørkunst. Sterke foldarmer og førsteklasses tekstiler for premium boligskyggelegging.' },
            'led-pergola-blue': { name: 'LED-Integrert Pergola - Blå', description: 'Samtids pergola-system med integrert blå LED-stripebelysning, som skaper en futuristisk atmosfære for kveldsunderholdning.' },
            'led-pergola-green': { name: 'LED-Integrert Pergola - Grønn', description: 'Stilig pergola med levende grønn LED-belysning, perfekt for å skape en innbydende utendørs atmosfære.' },
            'led-pergola-gradient': { name: 'LED-Integrert Pergola - Gradient', description: 'Bioklimatisk pergola med tofarget LED-belysningssystem, som tilbyr gradientoverganger for allsidig stemningsinnstilling.' },
            'commercial-glass-enclosure': { name: 'Kommersiell Glassinnglassing', description: 'Ekspansiv glassinnglasset struktur for næringslokaler, med mørk innramming og panoramautsikt ideell for kafeer og restauranter.' },
            'residential-veranda': { name: 'Bolig Glassveranda', description: 'Elegant glassveranda-utvidelse for boligeiendommer, som sømløst forbinder innendørs og utendørs oppholdsrom.' },
            'motorized-pergola-led': { name: 'Motorisert Pergola med Belysning', description: 'Stor uttrekkbar pergola med omfattende integrert LED-belysningssystem, perfekt for kommersielle og arrangementslokaler.' },
            'residential-pergola-patio': { name: 'Bolig Uteplass Pergola', description: 'Elegant mørk innrammet pergola med uttrekkbart taksystem og integrert belysning, designet for utendørs servering og avslapning.' },
            'retractable-sun-shades': { name: 'Uttrekkbare Solskjermer', description: 'Moderne uttrekkbart solskjermingssystem med mørke stoffpaneler, som gir overlegen solkontroll og arkitektonisk eleganse.' }
        },
        projectsItems: {
            '1': { title: 'Moderne Villa Pergola', category: 'Bolig' },
            '2': { title: 'Urban Terrasseløsning', category: 'Kommersiell' },
            '3': { title: 'Skreddersydd Zip Screen Installasjon', category: 'Personvern' },
            '4': { title: 'Panoramisk Glassinnglassing', category: 'Luksus' },
            '5': { title: 'Kommersiell Plaza Skyggelegging', category: 'Gjestfrihet' },
            '6': { title: 'Minimalistisk Hagepergola', category: 'Bolig' },
            '7': { title: 'Luksuriøs Bassengpergola', category: 'Luksus' },
            '8': { title: 'Stort Kommersielt Prosjekt', category: 'Kommersiell' },
            '9': { title: 'Blå LED Arkitektonisk Belysning', category: 'Design' },
            '10': { title: 'Grønn Oase Belysning', category: 'Hage' },
            '11': { title: 'Gradient Stemningssystem', category: 'Atmosfære' },
            '12': { title: 'Panoramisk Kommersielt Glass', category: 'Kommersiell' },
            '13': { title: 'Elite Glassinnglassing', category: 'Luksus' },
            '14': { title: 'High-End Uteplass Pergola', category: 'Bolig' },
            '15': { title: 'Strukturell Solskjermingsfasade', category: 'Kommersiell' },
            '16': { title: 'Skreddersydd Glasskonservatorium', category: 'Bolig' }
        },
        testimonialsItems: [
            { quote: "Presisjonen til Elita Inex-teknikken er uten sidestykke. De ga ikke bare skygge; de forbedret den arkitektoniske integriteten til villaen vår.", author: "Julian v. H.", role: "Ledende Arkitekt", location: "Zürich, Sveits" },
            { quote: "Å jobbe med atelieret var en sømløs opplevelse. Integreringen av de bioklimatiske systemene i restaurantterrassen vår har doblet vår kveldskapasitet.", author: "Elena Rossi", role: "Innehaver", location: "Milano, Italia" },
            { quote: "En mesterklasse i minimalistisk design og funksjonell ytelse. Zip-skjermene er like vakre som de er holdbare mot kystvind.", author: "Marcus Thorne", role: "Eiendesdirektør", location: "Monaco" }
        ],
        faqsItems: [
            { question: "Hvilke vindhastigheter er systemene deres testet for?", answer: "Våre systemer, spesielt Zip Screen Premium, er vindtunneltestet for å tåle hastigheter opp til 120 km/t, noe som overgår industristandarder for sikkerhet i boliger og næringsbygg." },
            { question: "Kan disse systemene integreres med smarthusteknologi?", answer: "Ja, alle våre motoriserte løsninger leveres som standard med Somfy RTS eller IO-protokoller, noe som tillater sømløs integrasjon med Control4, Crestron og Lutron-systemer." },
            { question: "Hvor lang tid tar den skreddersydde produksjonsprosessen?", answer: "Vanligvis, fra endelig designgodkjenning til montering, tar prosessen 6 til 8 uker, avhengig av kompleksiteten i de arkitektoniske kravene." },
            { question: "Tilbyr dere internasjonal installasjon?", answer: "Selv om vi er basert i Skopje, reiser våre tekniske team globalt for prestisjetunge prosjekter for å sikre at Elita Inex-installasjonsstandarden opprettholdes." }
        ],
        intro: {
            title: 'ELITA INEX',
            subtitle: 'Arkitektonisk Ekspertise',
            enter: 'Gå inn i Opplevelsen'
        },
        newsletter: {
            label: 'Elite Økosystem',
            title: 'Bli med i Atelieret',
            titleItalic: 'Perspektiv.',
            desc: 'Motta arkitektonisk innsikt, prosjektavsløringer og eksklusive designinnovasjoner direkte fra vårt studio.',
            successTitle: 'Abonnement Bekreftet',
            successDesc: 'Velkommen til den indre sirkelen av Elita Inex.',
            placeholder: 'Arkitektonisk Register E-post',
            button: 'Registrer deg'
        },
        stats: {
            years: 'År med Ekspertise',
            global: 'Globale Installasjoner',
            components: 'Presisjonskomponenter',
            craftsmen: 'Atelierhåndverkere'
        }
    }
};
