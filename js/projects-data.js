const projectsData = [
  {
    id: 1, title: "Habit Tracking App", category: "Mobile App",
    image: "images/Projects/project data/project 1/Habitly app.png",
    description: "A clean and engaging mobile app UI designed to help users build and track healthy daily habits. The interface features intuitive progress tracking, motivational visuals, and a calm colour palette to encourage consistent daily use.",
    detailImage1: "images/Projects/project data/project 1/Habitly app d 1.png",
    detailImage2: "images/Projects/project data/project 1/Habitly app d 2.png"
  },
  {
    id: 2, title: "Creative Studio Logo", category: "Brand Design",
    image: "images/Projects/project data/project 2/creative design-01.jpg",
    description: "A modern geometric logo design for a creative design studio, featuring bold typography and abstract shapes that communicate creativity, energy, and professionalism.",
    detailImage1: "images/Projects/project data/project 2/pres2.jpg",
    detailImage2: "images/Projects/project data/project 2/pres4.jpg"
  },
  {
    id: 3, title: "Formal & Casual Fashion", category: "Logo Design",
    image: "images/Projects/project data/project 3/9.jpg",
    description: "An elegant logo and brand identity for a fashion brand bridging formal and casual wear, featuring refined serif typography and a sophisticated visual identity system.",
    detailImage1: "images/Projects/project data/project 3/1.jpg",
    detailImage2: "images/Projects/project data/project 3/2.jpg"
  },
  {
    id: 4, title: "Book Cover Collection", category: "Print Design",
    image: "images/Projects/project data/project 4/3 cover book.jpg",
    description: "A collection of three book cover designs showcasing versatile layout, typography, and illustration skills across different genres and storytelling styles.",
    detailImage1: "images/Projects/project data/project 4/1 book cover.jpg",
    detailImage2: "images/Projects/project data/project 4/2.jpg"
  },
  {
    id: 5, title: "Lighting Company Site", category: "Web Design",
    image: "images/Projects/project data/project 5/Neutral Beige Screen Creator Facebook Cover (1).png",
    description: "A sleek and modern website design for a lighting company, featuring a dark aesthetic that lets products shine with clean navigation and elegant UI to highlight the full product range.",
    detailImage1: "images/Projects/project data/project 5/Screenshot 2026-01-22 160028.png",
    detailImage2: "images/Projects/project data/project 5/Screenshot 2026-01-22 160648.png"
  },
  {
    id: 6, title: "Curly Hair Beauty Salon", category: "Brand Design",
    image: "images/Projects/project data/project 6/final pres-01.jpg",
    description: "A vibrant and playful logo design for a curly hair beauty salon, featuring a stylised hair illustration with warm, welcoming colours to attract and delight the target audience.",
    detailImage1: "images/Projects/project data/project 6/final pres-03.jpg",
    detailImage2: "images/Projects/project data/project 6/final pres-04.jpg"
  },
  {
    id: 7, title: "Mr. Prawn Restaurant", category: "Branding",
    image: "images/Projects/project data/project 7/1.jpg",
    description: "A warm and rustic brand identity for a seafood restaurant, featuring engraved wood-style typography and natural material textures that evoke quality, authenticity, and great food.",
    detailImage1: "images/Projects/project data/project 7/2.jpg",
    detailImage2: "images/Projects/project data/project 7/3.jpg"
  },
  {
    id: 8, title: "Kasr El No5ba Palace", category: "Web Design",
    image: "images/Projects/project data/project 8/1.jpg",
    description: "A luxury hotel website design featuring an elegant gold and beige colour palette that communicates exclusivity, cultural heritage, and premium Egyptian hospitality experience.",
    detailImage1: "images/Projects/project data/project 8/5.jpg",
    detailImage2: "images/Projects/project data/project 8/6.jpg"
  },
  {
    id: 9, title: "Let's Celebrate Flyer", category: "Event Design",
    image: "images/Projects/project data/project 9/1 flower-01.jpg",
    description: "A festive and eye-catching event flyer design with vibrant colours and decorative typography, perfectly crafted for celebrating milestones and special occasions.",
    detailImage1: "images/Projects/project data/project 9/2.jpg",
    detailImage2: "images/Projects/project data/project 9/5.jpg"
  },
  {
    id: 10, title: "Wedding Invitation", category: "Stationery",
    image: "images/Projects/project data/project 10/invitation1.jpg",
    description: "An elegant and timeless wedding invitation design featuring classic layout, delicate ring motifs, and refined typography — crafted to set the tone for a beautiful celebration.",
    detailImage1: "images/Projects/project data/project 10/cover.jpg",
    detailImage2: "images/Projects/project data/project 10/2.jpg"
  },
  {
    id: 11, title: "Arabic Palace Branding", category: "Branding",
    image: "images/Projects/قصر النخبة mockup4.jpg",
    description: "A bilingual luxury branding project combining Arabic calligraphy with a sophisticated gold and cream palette, designed to appeal to an upscale audience seeking elegance and prestige.",
    detailImage1: "images/Projects/قصر النخبة mockup4.jpg",
    detailImage2: "images/Projects/Kasr el no5ba.jpg"
  },
  {
    id: 12, title: "Play Therapy Services", category: "Brand Design",
    image: "images/Projects/project data/project 12/8.jpg",
    description: "A warm and professional brand identity for a play therapy and wellness service centre, carefully balancing approachability with clinical trust and sensitivity toward families.",
    detailImage1: "images/Projects/project data/project 12/logo Mockup 3 .jpg",
    detailImage2: "images/Projects/project data/project 12/logo Mockup 7.jpg"
  },
  {
    id: 13, title: "Bright Eye Expo", category: "Logo Design",
    image: "images/Projects/project data/project 13/letterhead-02.png",
    description: "A bold and modern logo design for Bright Eye Expo, featuring a clean white eye symbol set on a deep teal background for a strong, memorable, and professional visual identity.",
    detailImage1: "images/Projects/project data/project 13/letterhead-17.png",
    detailImage2: "images/Projects/project data/project 13/letterhead-18.png"
  },
  {
    id: 14, title: "Wa Kahwah Coffee Shop", category: "Branding",
    image: "images/Projects/project data/project 14/12.jpg",
    description: "A complete branding package for an Arabic coffee shop including logo design, menu, branded cups, and business cards — all unified in an elegant dark and gold theme.",
    detailImage1: "images/Projects/project data/project 14/Logo Mockup.jpg",
    detailImage2: "images/Projects/project data/project 14/Logo Mockup4.jpg"
  },
  {
    id: 15, title: "Coffee Shop Logo", category: "Logo Design",
    image: "images/Projects/project data/project 15/12.jpg",
    description: "A warm and inviting coffee shop logo concept featuring a steaming cup with Arabic calligraphy, stylised coffee bean details, and earthy tones that evoke warmth and comfort.",
    detailImage1: "images/Projects/project data/project 15/Cup logo.jpg",
    detailImage2: "images/Projects/project data/project 15/Logo Mockup3.jpg"
  },
  {
    id: 16, title: "Wed Cafe Packaging", category: "Branding",
    image: "images/Projects/project data/project 16/logo final 2-01.png",
    description: "A comprehensive café branding project for Wed Cafe including packaging design, menu boards, signage, and cups — all unified with a signature orange and brown brand palette.",
    detailImage1: "images/Projects/project data/project 16/logo5.jpg",
    detailImage2: "images/Projects/project data/project 16/pres2.jpg"
  },
  {
    id: 17, title: "St Mary & Demiana Church", category: "Brand Design",
    image: "images/Projects/project data/project 17/logo T.shirt.jpg",
    description: "A respectful and dignified church logo featuring a fleur-de-lis symbol in forest green, applied thoughtfully to apparel and printed materials for St Mary & St Demiana Church.",
    detailImage1: "images/Projects/project data/project 17/logo pres 5.jpg",
    detailImage2: "images/Projects/project data/project 17/logo pres2 .jpg"
  },
  {
    id: 18, title: "Mr. Prawn 3D Branding", category: "3D Logo",
    image: "images/Projects/2.jpg",
    description: "A striking 3D logo mockup for Mr. Prawn restaurant featuring gold metallic lettering and a decorative shrimp motif on a natural stone background for a premium feel.",
    detailImage1: "images/Projects/2.jpg",
    detailImage2: "images/Projects/Mr Prawns.jpg"
  },
  {
    id: 19, title: "KASR EL NOKHBA", category: "Branding",
    image: "images/Projects/KASR EL NOKHBA Branding.jpg",
    description: "A full luxury hotel branding suite for KASR EL NOKHBA showcasing a complete visual identity system applied consistently across digital and print brand touchpoints.",
    detailImage1: "images/Projects/KASR EL NOKHBA Branding.jpg",
    detailImage2: "images/Projects/Kasr el no5ba.jpg"
  },
  {
    id: 20, title: "World Bunny Character", category: "Illustration",
    image: "images/Projects/world bunny illustration.png",
    description: "A colourful and imaginative children's character illustration for the World Bunny brand, featuring a charming scenic landscape with playful pink bunny characters and a whimsical cottage.",
    detailImage1: "images/Projects/world bunny illustration.png",
    detailImage2: "images/Projects/world bunny illustration.png"
  },
  {
    id: 21, title: "Task Manager Interface", category: "Mobile App",
    image: "images/Projects/task manager app.jpg",
    description: "A clean and functional mobile app UI for a task manager, featuring a purple-to-teal gradient with intuitive screens covering login, task management, user profile, and contact.",
    detailImage1: "images/Projects/task manager app.jpg",
    detailImage2: "images/Projects/habit app1.png"
  },
  {
    id: 22, title: "Wed Cafe Complete System", category: "Branding",
    image: "images/latest works/project 3.jpg",
    description: "The complete Wed Cafe brand system demonstrating visual consistency across all brand touchpoints — packaging, menus, branded cups, stationery, and signage.",
    detailImage1: "images/latest works/project 3.jpg",
    detailImage2: "images/latest works/project 3.jpg"
  },
  {
    id: 23, title: "Beauty Salon Illustration", category: "Illustration",
    image: "images/Projects/1.jpg",
    description: "A fun and stylised illustration for a women's beauty salon, depicting hair styling, colouring, and beauty treatments through lively character-driven visuals in a modern setting.",
    detailImage1: "images/Projects/1.jpg",
    detailImage2: "images/Projects/curly hair logo 22.jpg"
  },
  {
    id: 24, title: "MELSYA Beauty Device", category: "Product Design",
    image: "images/Projects/Melsya.jpg",
    description: "A futuristic product flyer for the MELSYA brand featuring a sleek medical beauty device with dramatic turquoise lighting on a deep purple background for powerful visual impact.",
    detailImage1: "images/Projects/Melsya.jpg",
    detailImage2: "images/Projects/Melsya.jpg"
  },
  {
    id: 25, title: "Language of Love Platform", category: "Web Design",
    image: "images/Projects/language of love website1.png",
    description: "A responsive website design for a language exchange platform that connects people through shared cultural learning, mutual discovery, and meaningful human connection.",
    detailImage1: "images/Projects/language of love website1.png",
    detailImage2: "images/Projects/language of love website1.png"
  },
  {
    id: 26, title: "The Framed Podcast", category: "Social Media",
    image: "images/Projects/the framed interior design podcast instagram posts.png",
    description: "A curated series of Instagram post designs for The Framed Interior Design Podcast, featuring a cohesive dark and sophisticated visual style to attract design-savvy audiences.",
    detailImage1: "images/Projects/the framed interior design podcast instagram posts.png",
    detailImage2: "images/Projects/the framed interior design podcast 1.png"
  },
  {
    id: 27, title: "Interior Design Podcast", category: "Social Media",
    image: "images/Projects/the framed interior design podcast 2.png",
    description: "A visual identity content series for The Framed Podcast's social media presence, combining interior design themes with editorial typography and a refined dark colour palette.",
    detailImage1: "images/Projects/the framed interior design podcast 2.png",
    detailImage2: "images/Projects/the framed interior design podcast 3.png"
  },
  {
    id: 28, title: "Podcast Visual Series", category: "Social Media",
    image: "images/Projects/the framed interior design podcast 3.png",
    description: "A curated series of social media visuals for The Framed Interior Design Podcast maintaining strong brand consistency and clear visual hierarchy across all platform content.",
    detailImage1: "images/Projects/the framed interior design podcast 3.png",
    detailImage2: "images/Projects/the framed interior design podcast instagram posts.png"
  },
  {
    id: 29, title: "Instagram Posts Set 1", category: "Social Media",
    image: "images/Projects/social media 1intagram posts.png",
    description: "A first set of branded Instagram posts with a consistent colour palette and structured layout system designed to elevate brand awareness and social media engagement.",
    detailImage1: "images/Projects/social media 1intagram posts.png",
    detailImage2: "images/Projects/social media 2 intagram posts.png"
  },
  {
    id: 30, title: "Podcast Brand Identity", category: "Social Media",
    image: "images/Projects/the framed interior design podcast 1.png",
    description: "The core visual identity applied to The Framed Podcast's social channels, combining architecture-inspired imagery with editorial typography and a refined monochrome palette.",
    detailImage1: "images/Projects/the framed interior design podcast 1.png",
    detailImage2: "images/Projects/the framed interior design podcast 2.png"
  },
  {
    id: 31, title: "Logo Collection", category: "Logo Design",
    image: "images/Projects/logos.png",
    description: "A diverse portfolio of logo designs demonstrating versatility and craft across multiple industries including hospitality, wellness, fashion, and community organisations.",
    detailImage1: "images/Projects/logos.png",
    detailImage2: "images/Projects/creative designs logo.jpg"
  },
  {
    id: 32, title: "Sheila McCarthy Centre", category: "Branding",
    image: "images/Projects/Sheila McCarthy Child & Parent Centre offer services for families-Branding.jpg",
    description: "A comprehensive branding project for Sheila McCarthy Child & Parent Centre, communicating warmth, trust, and professional care for families through a considered and cohesive visual identity.",
    detailImage1: "images/Projects/Sheila McCarthy Child & Parent Centre offer services for families-Branding.jpg",
    detailImage2: "images/Projects/therapy.jpg"
  },
  {
    id: 33, title: "Instagram Posts Set 3", category: "Social Media",
    image: "images/Projects/social media 3 intagram posts.png",
    description: "A cohesive third set of Instagram post designs maintaining a unified visual language and professional grid layout for a polished, consistently branded social media feed.",
    detailImage1: "images/Projects/social media 3 intagram posts.png",
    detailImage2: "images/Projects/social media 4 intagram posts.png"
  },
  {
    id: 34, title: "Instagram Posts Set 2", category: "Social Media",
    image: "images/Projects/social media 2 intagram posts.png",
    description: "A second series of branded Instagram posts with consistent typography, colour usage, and layout designed for strong visual identity and maximum audience engagement.",
    detailImage1: "images/Projects/social media 2 intagram posts.png",
    detailImage2: "images/Projects/social media 1intagram posts.png"
  },
  {
    id: 35, title: "Mr. Prawn Instagram", category: "Social Media",
    image: "images/Projects/social media 4 intagram posts.png",
    description: "A series of Instagram posts for Mr. Prawn restaurant, combining bold brand graphics with playful copywriting and a strong visual identity for impactful social media presence.",
    detailImage1: "images/Projects/social media 4 intagram posts.png",
    detailImage2: "images/Projects/social media 3 intagram posts.png"
  },
  {
    id: 36, title: "Book Cover Collection", category: "Print Design",
    image: "images/Projects/book cover all.jpg",
    description: "An extended collection of book cover designs demonstrating range in typography, illustration style, and genre-appropriate visual storytelling across a diverse set of titles.",
    detailImage1: "images/Projects/book cover all.jpg",
    detailImage2: "images/Projects/3 cover book.jpg"
  },
  {
    id: 37, title: "Formal & Casual Lookbook", category: "Brand Design",
    image: "images/Projects/formal & casual presentation.png",
    description: "A brand presentation and editorial lookbook for the Formal & Casual fashion line, showcasing the complete visual identity applied in a clean and contemporary format.",
    detailImage1: "images/Projects/formal & casual presentation.png",
    detailImage2: "images/Projects/formal & casual logo2.png"
  },
  {
    id: 38, title: "Catalogue Printing", category: "Print Design",
    image: "images/Projects/Catalogue printing.jpg",
    description: "A professionally designed print catalogue featuring clean editorial layout, structured typographic hierarchy, and polished visual design for product or service presentation.",
    detailImage1: "images/Projects/Catalogue printing.jpg",
    detailImage2: "images/Projects/Catalogue printing.jpg"
  }
];

// Auto-link project tiles to their detail pages on projects.html
(function () {
  document.querySelectorAll('.project-tile').forEach(function (tile) {
    var tileClass = Array.from(tile.classList).find(function (c) { return /^tile-\d+$/.test(c); });
    if (tileClass) {
      var id = tileClass.replace('tile-', '');
      tile.href = 'project-detail.html?id=' + id;
    }
  });
})();
