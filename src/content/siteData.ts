// ============================================
// JAYA SITE DATA — Edit all copy, products, and content here
// ============================================

export const siteData = {
  brand: {
    name: "Jaya",
    tagline: "Salt from the Sacred Valley",
    description: "Ancestral origin meets modern perfection.",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "Shop" },
    { label: "Story", href: "Story" },
    { label: "Wholesale", href: "Wholesale" },
  ],

  hero: {
    headline: "Salt from the Sacred Valley.",
    subheadline: "Harvested by hand from ancient terraces in Maras, Peru. A naturally rich mineral profile that enhances food with a delicate umami finish.",
    cta: {
      primary: { label: "Shop the Collection", href: "Shop" },
      secondary: { label: "Wholesale Inquiries", href: "Wholesale" },
    },
    images: {
      desktop: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&q=80",
      mobile: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=800&q=80",
    },
  },

  proofOfOrigin: {
    headline: "Proof of Origin",
    items: [
      {
        metric: "3,380m",
        label: "Altitude",
        description: "High in the Peruvian Andes, where mineral-rich spring water feeds ancient terraces.",
      },
      {
        metric: "600+",
        label: "Years of Tradition",
        description: "A harvesting method unchanged since pre-Incan times, passed through generations.",
      },
      {
        metric: "100%",
        label: "Sun-Dried",
        description: "Naturally crystallized under the Sacred Valley sun. No industrial processing.",
      },
      {
        metric: "Hand",
        label: "Harvested",
        description: "Collected by local artisans using traditional wooden tools and ancestral techniques.",
      },
    ],
  },

  collection: {
    headline: "The Collection",
    subheadline: "Three expressions of Maras salt, each with its own character.",
    products: [
      {
        id: "fleur-de-sel",
        name: "Fleur de Sel",
        subtitle: "The Delicate Finish",
        price: 34,
        currency: "USD",
        weight: "200g",
        image: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=800&q=80",
        description: "The finest crystals, hand-skimmed from the surface. A whisper of minerals and a satisfying crunch.",
        sensory: {
          texture: "Delicate flakes, light crunch",
          finish: "Clean, bright, subtle sweetness",
          bestUses: "Finishing steaks, chocolate, fresh salads, ripe tomatoes",
        },
        details: [
          "Hand-skimmed from terrace surfaces",
          "Harvested during optimal sun conditions",
          "Naturally white with pink undertones",
        ],
      },
      {
        id: "sel-gris",
        name: "Sel Gris",
        subtitle: "The Mineral Heart",
        price: 28,
        currency: "USD",
        weight: "250g",
        image: "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=800&q=80",
        description: "Harvested from deeper in the ponds. A robust mineral character with earthy undertones.",
        sensory: {
          texture: "Moist, coarse crystals",
          finish: "Earthy, complex, lingering",
          bestUses: "Roasted meats, root vegetables, hearty stews",
        },
        details: [
          "Collected from terrace beds",
          "Natural grey hue from mineral clay",
          "Higher moisture content",
        ],
      },
      {
        id: "pink-maras",
        name: "Pink Maras",
        subtitle: "The Rare Reserve",
        price: 42,
        currency: "USD",
        weight: "150g",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
        description: "Limited harvest from select terraces. A rosy blush and extraordinary mineral depth.",
        sensory: {
          texture: "Fine to medium crystals",
          finish: "Rich umami, subtle iron notes",
          bestUses: "Special occasion dishes, ceviche, artisanal baking",
        },
        details: [
          "Limited seasonal availability",
          "Natural pink coloration",
          "Highest mineral concentration",
        ],
      },
    ],
  },

  terraces: {
    headline: "The Terraces of Maras",
    description: "Over 3,000 salt ponds cascade down the Sacred Valley hillside, fed by a single subterranean spring. This water, filtered through ancient rock for millennia, carries the minerals of the Andes to the surface.",
    image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1600&q=80",
    stats: [
      { value: "3,000+", label: "Salt Ponds" },
      { value: "Pre-Incan", label: "Origin" },
      { value: "Single", label: "Spring Source" },
    ],
  },

  testimonials: [
    {
      quote: "The purest expression of terroir I've encountered in a finishing salt. It transforms simple dishes.",
      author: "Elena Reyes",
      title: "Executive Chef, Maido Lima",
    },
    {
      quote: "We've carried Jaya exclusively for three years. Our customers recognize the difference immediately.",
      author: "Thomas Chen",
      title: "Buyer, Dean & DeLuca",
    },
  ],

  newsletter: {
    headline: "From the Valley",
    description: "Occasional notes on salt, craft, and the Sacred Valley.",
    placeholder: "Your email",
    buttonText: "Subscribe",
  },

  story: {
    hero: {
      headline: "Our Story",
      subheadline: "Where the Andes meet ancient tradition.",
      image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1600&q=80",
    },
    sections: [
      {
        type: "text",
        headline: "The Sacred Valley",
        content: "High in the Peruvian Andes, nestled between Cusco and Machu Picchu, lies the Sacred Valley of the Incas. Here, at 3,380 meters above sea level, a remarkable natural phenomenon has been harnessed for over six centuries: a single subterranean spring, rich with minerals filtered through ancient rock, feeds thousands of salt terraces carved into the mountainside.",
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&q=80",
        caption: "The terraces of Maras at golden hour",
      },
      {
        type: "text",
        headline: "A Living Heritage",
        content: "The Maras salt works predate the Incan empire. Local families have maintained these terraces for generations, using the same methods their ancestors employed. No pumps, no machinery—only gravity, sunlight, and patient hands guide the salt from water to crystal.",
      },
      {
        type: "image",
        image: "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1600&q=80",
        caption: "Morning harvest on the upper terraces",
      },
    ],
    method: {
      headline: "Our Method",
      steps: [
        {
          number: "01",
          title: "The Spring",
          description: "Mineral-rich water emerges from the mountain, beginning its journey across the terraces.",
        },
        {
          number: "02",
          title: "The Flow",
          description: "Water is guided through a network of channels, filling each shallow pond in sequence.",
        },
        {
          number: "03",
          title: "The Sun",
          description: "Under the high-altitude sun, evaporation begins. Crystals form over days, not hours.",
        },
        {
          number: "04",
          title: "The Harvest",
          description: "Artisans carefully collect the salt by hand, sorting by crystal type and quality.",
        },
      ],
    },
  },

  wholesale: {
    hero: {
      headline: "Partner With Us",
      subheadline: "Bring the Sacred Valley to your customers.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    },
    intro: "Jaya partners with select retailers, restaurants, and hospitality brands who share our commitment to provenance, craft, and quality. We offer flexible packaging formats and dedicated support for wholesale accounts.",
    whoItsFor: {
      headline: "Who It's For",
      items: [
        "Fine dining restaurants",
        "Specialty food retailers",
        "Luxury hotels & resorts",
        "Artisanal food brands",
        "Corporate gifting programs",
        "Culinary schools",
      ],
    },
    packaging: {
      headline: "Packaging Formats",
      items: [
        { format: "Retail Jars", sizes: "150g, 200g, 250g" },
        { format: "Bulk Bags", sizes: "1kg, 5kg, 10kg" },
        { format: "Gift Sets", sizes: "Trio collection, Custom" },
        { format: "Private Label", sizes: "Custom minimums apply" },
      ],
    },
    form: {
      headline: "Start a Conversation",
      fields: [
        { name: "company", label: "Company Name", type: "text", required: true },
        { name: "contact", label: "Contact Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "tel", required: false },
        { name: "businessType", label: "Business Type", type: "select", required: true, options: ["Restaurant", "Retailer", "Hotel/Resort", "Food Brand", "Corporate", "Other"] },
        { name: "message", label: "Tell us about your needs", type: "textarea", required: true },
      ],
      buttonText: "Submit Inquiry",
      successMessage: "Thank you. We'll be in touch within 48 hours.",
    },
  },

  footer: {
    tagline: "Ancestral origin meets modern perfection.",
    links: [
      { label: "Privacy Policy", href: "Privacy" },
      { label: "Terms of Service", href: "Terms" },
    ],
    social: [
      { platform: "Instagram", href: "https://instagram.com/jaya_peruviansalt" },
    ],
    copyright: "© 2024 Jaya. All rights reserved.",
  },

  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "January 2024",
      content: `
# Privacy Policy

Last updated: January 2024

## Information We Collect

We collect information you provide directly to us, such as when you create an account, make a purchase, sign up for our newsletter, or contact us.

### Personal Information
- Name and contact information
- Billing and shipping addresses
- Payment information (processed securely by our payment provider)
- Order history

### Automatically Collected Information
- Device and browser information
- IP address
- Cookies and similar technologies

## How We Use Your Information

We use the information we collect to:
- Process and fulfill your orders
- Send you order confirmations and updates
- Respond to your inquiries
- Send promotional communications (with your consent)
- Improve our website and services

## Information Sharing

We do not sell your personal information. We share information only with:
- Service providers who assist in our operations
- As required by law

## Your Rights

You may access, update, or delete your personal information by contacting us at privacy@jayasalt.com.

## Contact Us

For questions about this policy, contact us at privacy@jayasalt.com.
      `,
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "January 2024",
      content: `
# Terms of Service

Last updated: January 2024

## Agreement to Terms

By accessing our website, you agree to these terms of service.

## Products and Pricing

All prices are in USD and subject to change. We reserve the right to limit quantities and refuse orders.

## Shipping and Delivery

We ship to most locations worldwide. Delivery times vary by destination. Risk of loss passes to you upon delivery to the carrier.

## Returns and Refunds

We accept returns of unopened products within 30 days of delivery. Contact support@jayasalt.com to initiate a return.

## Intellectual Property

All content on this site is owned by Jaya and protected by intellectual property laws.

## Limitation of Liability

Jaya shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or services.

## Governing Law

These terms are governed by the laws of Delaware, USA.

## Contact

Questions? Contact us at legal@jayasalt.com.
      `,
    },
  },
};

// Image dimensions guide for replacing placeholder images:
// ============================================
// hero-desktop: 1920x1080 (16:9, landscape, Sacred Valley panorama)
// hero-mobile: 800x1200 (2:3, portrait, vertical crop focusing on terraces)
// product images: 800x800 (1:1, studio shot, white/neutral background)
// story images: 1600x1000 (16:10, editorial, landscape)
// terraces image: 1600x900 (16:9, wide shot of salt ponds)
// wholesale hero: 1600x900 (16:9, artisan/craft focus)