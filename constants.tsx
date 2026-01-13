
import { Product, Project } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'motorized-pergola',
    name: 'Retractable Bio-Climatic Pergola',
    description: 'High-performance aluminum structure with motorized roof systems, offering complete control over sunlight and ventilation.',
    useCases: ['Luxury Terraces', 'Commercial Patios', 'Residential Gardens'],
    options: {
      sizes: ['Custom up to 7m width', 'Infinite modularity'],
      colors: ['Anthracite', 'Silver', 'Bronze'],
      fabrics: ['PVC Blackout', 'Soltis Performance'],
      mechanisms: ['Somfy RTS', 'Smart Home Integration']
    },
    image: '/products/Motorized-Pergola.jpg'
  },
  {
    id: 'zip-screen-premium',
    name: 'Precision Zip Screen',
    description: 'Ultra-durable vertical shading with a specialized side-track system that keeps fabric perfectly taut against high winds.',
    useCases: ['Window Shading', 'Balcony Privacy', 'Wind Protection'],
    options: {
      sizes: ['Widths up to 6m'],
      colors: ['Grey', 'Sand', 'White'],
      fabrics: ['Micro-perforated Mesh', 'Crystal Clear PVC'],
      mechanisms: ['Remote Controlled', 'Sun/Wind Sensors']
    },
    image: '/products/Hovedbilde (stor pergola med LED).jpg'
  },
  {
    id: 'glass-sliding-system',
    name: 'Structural Glass Enclosure',
    description: 'Minimalist sliding glass panels providing a panoramic view while shielding your outdoor space from the elements.',
    useCases: ['Verandas', 'Winter Gardens', 'Restaurant Enclosures'],
    options: {
      sizes: ['Height up to 3m'],
      colors: ['Black', 'Champagne', 'Brushed Aluminum'],
      fabrics: ['10mm Tempered Glass', 'UV Filtered'],
      mechanisms: ['Soft-close Sliders', 'Folding Track']
    },
    image: '/products/Blue LED.jpg'
  },
  {
    id: 'folding-arm-awning',
    name: 'Architectural Retractable Awning',
    description: 'Classic elegance with modern engineering. Strong folding arms and high-grade textiles for premium residential shade.',
    useCases: ['Patios', 'Balconies', 'Storefronts'],
    options: {
      sizes: ['Projection up to 4.5m'],
      colors: ['Full RAL Palette'],
      fabrics: ['Acrylic Canvas', 'Waterproof Polyester'],
      mechanisms: ['Manual Crank', 'Motorized']
    },
    image: '/products/Sun Shade.jpg'
  },
  {
    id: 'led-pergola-blue',
    name: 'LED-Integrated Pergola - Blue',
    description: 'Contemporary pergola system with integrated blue LED strip lighting, creating a futuristic ambiance for evening entertainment.',
    useCases: ['Modern Patios', 'Night Entertainment', 'Residential Outdoor Spaces'],
    options: {
      sizes: ['Modular sections', 'Custom dimensions'],
      colors: ['Anthracite', 'Dark Grey'],
      fabrics: ['LED Strip Integration', 'Weatherproof Housing'],
      mechanisms: ['Smart Controls', 'Dimmable LEDs']
    },
    image: '/products/IMG_4568.jpg'
  },
  {
    id: 'led-pergola-green',
    name: 'LED-Integrated Pergola - Green',
    description: 'Stylish pergola featuring vibrant green LED lighting, perfect for creating an inviting outdoor atmosphere.',
    useCases: ['Garden Spaces', 'Outdoor Dining', 'Contemporary Terraces'],
    options: {
      sizes: ['Custom configurations', 'Multiple sections'],
      colors: ['Anthracite', 'White'],
      fabrics: ['Recessed LED Strips', 'Adjustable Brightness'],
      mechanisms: ['Remote Control', 'App Integration']
    },
    image: '/products/IMG_4569.jpg'
  },
  {
    id: 'led-pergola-gradient',
    name: 'LED-Integrated Pergola - Gradient',
    description: 'Bioclimatic pergola with dual-color LED lighting system, offering gradient transitions for versatile mood setting.',
    useCases: ['Entertainment Areas', 'Luxury Terraces', 'Modern Residences'],
    options: {
      sizes: ['Adjustable louvers', 'Infinite modularity'],
      colors: ['Anthracite'],
      fabrics: ['Dual LED Channels', 'RGB Capability'],
      mechanisms: ['Smart Home Compatible', 'Automated Controls']
    },
    image: '/products/Gradient LED.jpg'
  },
  {
    id: 'commercial-glass-enclosure',
    name: 'Commercial Glass Enclosure',
    description: 'Expansive glass-enclosed structure for commercial spaces, featuring dark framing and panoramic views ideal for cafes and restaurants.',
    useCases: ['Restaurant Extensions', 'Cafe Patios', 'Commercial Dining'],
    options: {
      sizes: ['Custom dimensions', 'Full facade integration'],
      colors: ['Dark Grey', 'Black'],
      fabrics: ['Tempered Glass', 'Double Glazing'],
      mechanisms: ['Sliding Panels', 'Fixed Installations']
    },
    image: '/products/Commercial Glass.jpg'
  },
  {
    id: 'residential-veranda',
    name: 'Residential Glass Veranda',
    description: 'Elegant glass veranda extension for residential properties, seamlessly connecting indoor and outdoor living spaces.',
    useCases: ['Home Extensions', 'Sunrooms', 'Residential Terraces'],
    options: {
      sizes: ['Custom fit', 'Height up to 3m'],
      colors: ['Dark Grey', 'Champagne'],
      fabrics: ['Premium Glass', 'UV Protection'],
      mechanisms: ['Sliding Systems', 'Folding Doors']
    },
    image: '/products/Glass Conservatory.jpg'
  },
  {
    id: 'motorized-pergola-led',
    name: 'Motorized Pergola with Integrated Lighting',
    description: 'Large-scale retractable pergola with extensive integrated LED lighting system, perfect for commercial and event spaces.',
    useCases: ['Event Spaces', 'Commercial Parking', 'Large Terraces'],
    options: {
      sizes: ['Extensive coverage', 'Multiple panel systems'],
      colors: ['Anthracite'],
      fabrics: ['Dense LED Arrays', 'Retractable Fabric'],
      mechanisms: ['Motorized Operation', 'Smart Controls']
    },
    image: '/products/LED Pergola.jpg'
  },
  {
    id: 'residential-pergola-patio',
    name: 'Residential Patio Pergola',
    description: 'Elegant dark-framed pergola with retractable roof system and integrated lighting, designed for residential outdoor dining and relaxation.',
    useCases: ['Backyard Dining', 'Residential Patios', 'Garden Spaces'],
    options: {
      sizes: ['Custom dimensions', 'Retractable roof'],
      colors: ['Dark Grey', 'Black'],
      fabrics: ['Retractable Panels', 'Integrated LEDs'],
      mechanisms: ['Manual or Motorized', 'Weather Sensors']
    },
    image: '/products/Residential Pergola.jpg'
  },
  {
    id: 'retractable-sun-shades',
    name: 'Retractable Sun Shades',
    description: 'Modern retractable sun shade system with dark fabric panels, providing superior solar control and architectural elegance.',
    useCases: ['Facade Shading', 'Window Protection', 'Architectural Design'],
    options: {
      sizes: ['Full facade coverage', 'Custom widths'],
      colors: ['Dark Grey', 'Anthracite'],
      fabrics: ['Performance Textiles', 'Solar Reflective'],
      mechanisms: ['Motorized Roller', 'Automated Controls']
    },
    image: '/products/Sun Shade.jpg'
  }
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'Modern Villa Pergola', category: 'Residential', image: '/products/IMG_4571.jpg' },
  { id: '2', title: 'Urban Terrace Solution', category: 'Commercial', image: '/products/IMG_4570.jpg' },
  { id: '3', title: 'Bespoke Zip Screen Install', category: 'Privacy', image: '/products/IMG_4569.jpg' },
  { id: '4', title: 'Panoramic Glass Enclosure', category: 'Luxury', image: '/products/IMG_4568.jpg' },
  { id: '5', title: 'Commercial Plaza Shading', category: 'Hospitality', image: '/products/IMG_4567.jpg' },
  { id: '6', title: 'Minimalist Garden Pergola', category: 'Residential', image: '/products/IMG_4566.jpg' },
  { id: '7', title: 'Luxury Poolside Pergola', category: 'Luxury', image: '/products/IMG_4565.jpg' },
  { id: '8', title: 'Grand Commercial Project', category: 'Commercial', image: '/products/Hovedbilde (stor pergola med LED).jpg' },
  { id: '9', title: 'Blue LED Architectural Lighting', category: 'Design', image: '/products/Blue LED.jpg' },
  { id: '10', title: 'Green Oasis Illumination', category: 'Garden', image: '/products/Green LED.jpg' },
  { id: '11', title: 'Gradient Mood System', category: 'Atmosphere', image: '/products/Gradient LED.jpg' },
  { id: '12', title: 'Panoramic Commercial Glass', category: 'Commercial', image: '/products/Commercial Glass.jpg' },
  { id: '13', title: 'Elite Glass Enclosure', category: 'Luxury', image: '/products/Glass Enclosure.jpg' },
  { id: '14', title: 'High-End Patio Pergola', category: 'Residential', image: '/products/Residential Pergola.jpg' },
  { id: '15', title: 'Structural Sun Shade Facade', category: 'Commercial', image: '/products/Sun Shade.jpg' },
  { id: '16', title: 'Bespoke Glass Conservatory', category: 'Residential', image: '/products/Glass Conservatory.jpg' }
];

export const PROCESS_STEPS = [
  { title: 'Consultation', description: 'Expert advice on-site to determine the ideal structural requirements for your space.' },
  { title: 'Design', description: 'Bespoke 3D modeling to visualize the integration with your existing architecture.' },
  { title: 'Production', description: 'Precision manufacturing in our facility using high-grade aluminum and premium textiles.' },
  { title: 'Installation', description: 'Professional white-glove fitting by our certified in-house technical team.' }
];

export const STATS = [
  { label: 'Years of Excellence', value: 15, suffix: '+' },
  { label: 'Global Installations', value: 1200, suffix: '+' },
  { label: 'Precision Components', value: 50, suffix: 'k' },
  { label: 'Studio Craftsmen', value: 85, suffix: '' }
];

export const TESTIMONIALS = [
  {
    quote: "The precision of Elita Inex engineering is unparalleled. They didn't just provide shade; they enhanced the architectural integrity of our villa.",
    author: "Julian v. H.",
    role: "Lead Architect",
    location: "Zurich, Switzerland"
  },
  {
    quote: "Working with the atelier was a seamless experience. The integration of the bioclimatic systems into our restaurant terrace has doubled our evening capacity.",
    author: "Elena Rossi",
    role: "Proprietor",
    location: "Milan, Italy"
  },
  {
    quote: "A masterclass in minimalist design and functional performance. The zip screens are as beautiful as they are durable against coastal winds.",
    author: "Marcus Thorne",
    role: "Estate Director",
    location: "Monaco"
  }
];

export const FAQS = [
  {
    question: "What wind speeds are your systems tested for?",
    answer: "Our systems, particularly the Zip Screen Premium, are wind-tunnel tested to withstand speeds of up to 120km/h, exceeding industry standards for residential and commercial safety."
  },
  {
    question: "Can these systems be integrated with smart home technology?",
    answer: "Yes, all our motorized solutions come standard with Somfy RTS or IO protocols, allowing seamless integration with Control4, Crestron, and Lutron systems."
  },
  {
    question: "How long does the bespoke manufacturing process take?",
    answer: "Typically, from final design approval to white-glove installation, the process spans 6 to 8 weeks, depending on the complexity of the architectural requirements."
  },
  {
    question: "Do you offer international installation?",
    answer: "While we are based in Skopje, our technical teams travel globally for prestigious projects to ensure the Elita Inex standard of installation is maintained."
  }
];
