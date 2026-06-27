// Bilingual content for the portfolio (Source of Truth: ../../../content/*.md)
// Keep TH and EN structurally identical. Tech names stay in English in both.

export type Lang = 'th' | 'en';

export interface NavContent {
  brand: string;
  about: string;
  expertise: string;
  journey: string;
  projects: string;
  contact: string;
}

export interface HeroContent {
  overline: string;
  status: string;
  titleLines: string[];
  tagline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExpertiseContent {
  overline: string;
  heading: string;
  intro: string;
  groups: SkillGroup[];
}

export interface AiContent {
  overline: string;
  heading: string;
  body: string;
  points: string[];
  tools: string[];
}

export interface TimelineItem {
  time: string;
  role: string;
  org: string;
  desc: string;
  current?: boolean;
}

export interface JourneyContent {
  overline: string;
  heading: string;
  items: TimelineItem[];
}

export interface ProjectItem {
  name: string;
  category: string;
  desc: string;
  highlights: string;
  tech: string[];
  image: string;
}

export interface ProjectsContent {
  overline: string;
  heading: string;
  highlightsLabel: string;
  items: ProjectItem[];
}

export interface ContactContent {
  overline: string;
  heading: string;
  intro: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  githubLabel: string;
  ctaEmail: string;
}

export interface FooterContent {
  tagline: string;
  rights: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  expertise: ExpertiseContent;
  ai: AiContent;
  journey: JourneyContent;
  projects: ProjectsContent;
  contact: ContactContent;
  footer: FooterContent;
}

// Language-neutral facts
export const CONTACT_INFO = {
  fullName: { th: 'ธนวัฒน์ ไชยเจริญ', en: 'Tanawat Chaijaroen' },
  email: 'tanawat.chaijaroenice@gmail.com',
  phone: '+66 99 639 5692',
  phoneHref: 'tel:+66996395692',
  github: 'https://github.com/tanawatchaijaroenice',
  githubHandle: '@tanawatchaijaroenice',
  location: { th: 'นนทบุรี, ประเทศไทย', en: 'Nonthaburi, Thailand' },
} as const;

export const CONTENT: Record<Lang, SiteContent> = {
  th: {
    nav: {
      brand: 'TC',
      about: 'เกี่ยวกับ',
      expertise: 'ทักษะ',
      journey: 'เส้นทาง',
      projects: 'ผลงาน',
      contact: 'ติดต่อ',
    },
    hero: {
      overline: 'FRONT-END DEVELOPER · ANGULAR',
      status: 'เปิดรับโอกาสใหม่',
      titleLines: ['ธนวัฒน์', 'ไชยเจริญ'],
      tagline:
        'Front-End Developer ที่แก้ปัญหาถึงต้นเหตุ — วิเคราะห์ก่อนลงมือ เปลี่ยน business logic ที่ซับซ้อนให้เป็น UI ที่เชื่อถือได้และดูแลต่อง่าย',
      ctaPrimary: 'ดูผลงาน',
      ctaSecondary: 'ติดต่อผม',
    },
    expertise: {
      overline: '02 / ทักษะ',
      heading: 'ทักษะ & ความเชี่ยวชาญ',
      intro:
        'เชี่ยวชาญ Angular และพัฒนาคู่กับ React/Next.js พร้อมความสามารถฝั่ง Backend ด้วย Node.js/Prisma และเพิ่มความเร็วในการทำงานด้วยระบบ AI Agent อย่างเป็นระบบ',
      groups: [
        {
          title: 'Frontend (Core)',
          items: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'NgRx', 'Reactive Forms', 'SCSS', 'Tailwind CSS'],
        },
        {
          title: 'React Ecosystem',
          items: ['React', 'Next.js', 'App Router', 'Server Components'],
        },
        {
          title: 'Backend & Data',
          items: ['Node.js (พื้นฐาน)', 'Prisma', 'REST API (พื้นฐาน)', 'SQL (พื้นฐาน)'],
        },
        {
          title: 'AI & Tooling',
          items: ['Claude', 'Gemini', 'Codex', 'Git', 'Git Workflow'],
        },
      ],
    },
    ai: {
      overline: '03 / AI-AUGMENTED ENGINEERING',
      heading: 'ทำงานร่วมกับ AI อย่างเป็นระบบ',
      body:
        'ผมใช้ AI เป็นเครื่องมือวิศวกรรม ไม่ใช่แค่ถาม-ตอบ — วางระบบให้ AI ทำงานได้แม่นยำ แล้วตรวจสอบผลด้วยหลักการหา root cause เดียวกับที่ใช้ debug จึงได้ทั้งความเร็วและคุณภาพ',
      points: [
        'เร่งงาน & scaffold โค้ด',
        'Debug หา root cause',
        'ออกแบบ & ปรึกษา architecture',
        'Prompt engineering & ใช้ agent เป็นระบบ',
        'สร้าง reusable skills + knowledge base',
        'วาง action plan ให้ AI ลงมือได้แม่นยำ',
      ],
      tools: ['Claude / Claude Code', 'Antigravity', 'Codex'],
    },
    journey: {
      overline: '04 / เส้นทาง',
      heading: 'เส้นทางการทำงาน',
      items: [
        {
          time: '2022 — ปัจจุบัน',
          role: 'Front-End Developer',
          org: 'บริษัทพัฒนาซอฟต์แวร์ (Software House)',
          desc:
            'ดูแล UI ทั้งหมดของฟีเจอร์ที่รับผิดชอบ — UI logic, ฟอร์ม และ state management พัฒนาระบบจัดการโรงแรม (PMS) ด้วย Angular และเว็บ business/e-commerce ด้วย Next.js และ React พร้อม mentor junior 1 คน',
          current: true,
        },
        {
          time: '2022',
          role: 'ปริญญาตรี เทคโนโลยีสารสนเทศ',
          org: 'มหาวิทยาลัยราชภัฏเชียงราย',
          desc: 'จบการศึกษาระดับปริญญาตรี สาขาเทคโนโลยีสารสนเทศ',
        },
        {
          time: 'ก่อนหน้า',
          role: 'ปวส. เทคโนโลยีสารสนเทศ',
          org: 'วิทยาลัยอาชีวศึกษาเชียงราย',
          desc: 'ประกาศนียบัตรวิชาชีพชั้นสูง สาขาเทคโนโลยีสารสนเทศ',
        },
      ],
    },
    projects: {
      overline: '05 / ผลงาน',
      heading: 'ผลงานที่เลือกมา',
      highlightsLabel: 'จุดเด่น',
      items: [
        {
          name: 'Hotel Management System (PMS)',
          category: 'Angular · งานบริษัท',
          desc:
            'ระบบบริหารโรงแรมสำหรับงานประจำวัน — ระบบจอง, cashier, ออกใบกำกับภาษี และจัดการ package/voucher',
          highlights:
            'ออกแบบ logic การคำนวณ tax/VAT/service และค่าห้อง (rate, ABF, weekend, holiday) ที่ผูกกับข้อมูลจาก API และจัดการ state ของฟอร์มที่ซับซ้อน',
          tech: ['Angular', 'RxJS', 'Signals', 'TypeScript', 'SCSS'],
          image: 'images/project-pms.png',
        },
        {
          name: 'Water Park Ticket E-commerce',
          category: 'React · งานบริษัท',
          desc:
            'เว็บขายตั๋วสวนน้ำ — เลือก package, เพิ่มลงตะกร้า, ชำระเงินผ่าน 2C2P แล้วแสดงสถานะสำเร็จให้ผู้ใช้',
          highlights:
            'จัดการตะกร้าด้วย session storage และเชื่อมต่อ payment gateway 2C2P ภายใต้แรงกดดันด้านเวลา',
          tech: ['React', 'TypeScript', '2C2P'],
          image: 'images/project-ecommerce.png',
        },
        {
          name: 'Business / Corporate Websites',
          category: 'Next.js · งานบริษัท',
          desc:
            'เว็บเชิงธุรกิจ 2 ตัว — นำเสนอห้องพัก/ห้องสัมมนา และบริการ/ผลิตภัณฑ์ของบริษัท',
          highlights: 'เน้นการแสดงผลที่สวยงาม responsive และโหลดเร็วด้วย SSR/SSG',
          tech: ['Next.js', 'TypeScript'],
          image: 'images/project-corporate.png',
        },
        {
          name: 'LifeOS — Personal Productivity App',
          category: 'Next.js · โปรเจคส่วนตัว',
          desc:
            'แอปจัดการชีวิตส่วนตัว — ติดตาม routine และจัดการค่าใช้จ่าย พัฒนาร่วมกับ AI ตั้งแต่ต้นจนจบ',
          highlights: 'ฝึกพัฒนาแบบ AI-driven และทดลอง Next.js กับโปรเจคจริง',
          tech: ['Next.js', 'AI'],
          image: 'images/project-lifeos.png',
        },
      ],
    },
    contact: {
      overline: '06 / ติดต่อ',
      heading: 'มาคุยกันได้เลย',
      intro: 'สนใจร่วมงาน หรืออยากพูดคุยเรื่องโปรเจค? ติดต่อผมได้ตามช่องทางด้านล่าง',
      emailLabel: 'อีเมล',
      phoneLabel: 'โทรศัพท์',
      locationLabel: 'ที่อยู่',
      githubLabel: 'GitHub',
      ctaEmail: 'ส่งอีเมลหาผม',
    },
    footer: {
      tagline: 'Front-End Developer · Angular',
      rights: 'สงวนลิขสิทธิ์',
    },
  },
  en: {
    nav: {
      brand: 'TC',
      about: 'About',
      expertise: 'Skills',
      journey: 'Journey',
      projects: 'Work',
      contact: 'Contact',
    },
    hero: {
      overline: 'FRONT-END DEVELOPER · ANGULAR',
      status: 'Open to new opportunities',
      titleLines: ['Tanawat', 'Chaijaroen'],
      tagline:
        'A front-end developer who fixes the cause, not just the symptom — analyze first, then build, turning complex business logic into reliable, maintainable UI.',
      ctaPrimary: 'View my work',
      ctaSecondary: 'Get in touch',
    },
    expertise: {
      overline: '02 / SKILLS',
      heading: 'Skills & Expertise',
      intro:
        'Angular-focused, developing alongside React/Next.js, with back-end capabilities using Node.js/Prisma, and leveraging AI Agents systematically to boost workflow velocity.',
      groups: [
        {
          title: 'Frontend (Core)',
          items: ['Angular', 'TypeScript', 'RxJS', 'Signals', 'NgRx', 'Reactive Forms', 'SCSS', 'Tailwind CSS'],
        },
        {
          title: 'React Ecosystem',
          items: ['React', 'Next.js', 'App Router', 'Server Components'],
        },
        {
          title: 'Backend & Data',
          items: ['Node.js (basic)', 'Prisma', 'REST API (basic)', 'SQL (basic)'],
        },
        {
          title: 'AI & Tooling',
          items: ['Claude', 'Gemini', 'Codex', 'Git', 'Git Workflow'],
        },
      ],
    },
    ai: {
      overline: '03 / AI-AUGMENTED ENGINEERING',
      heading: 'Engineering with AI, systematically',
      body:
        'I treat AI as an engineering tool, not just Q&A — building the scaffolding that makes AI output accurate, then verifying results with the same root-cause discipline I use for debugging. Speed and quality, together.',
      points: [
        'Accelerate & scaffold code',
        'Root-cause debugging',
        'Architecture consulting',
        'Prompt engineering & agent workflows',
        'Reusable skills + knowledge bases',
        'Structured action plans for reliable AI execution',
      ],
      tools: ['Claude / Claude Code', 'Antigravity', 'Codex'],
    },
    journey: {
      overline: '04 / JOURNEY',
      heading: 'The path so far',
      items: [
        {
          time: '2022 — Present',
          role: 'Front-End Developer',
          org: 'Software House',
          desc:
            'Own the entire UI of assigned features — UI logic, forms, and state management. Build a hotel PMS in Angular and business/e-commerce sites in Next.js and React, while mentoring one junior developer.',
          current: true,
        },
        {
          time: '2022',
          role: 'B.Sc. Information Technology',
          org: 'Chiang Rai Rajabhat University',
          desc: 'Bachelor’s degree in Information Technology.',
        },
        {
          time: 'Earlier',
          role: 'Vocational Diploma in IT',
          org: 'Chiang Rai Vocational College',
          desc: 'Higher Vocational Certificate in Information Technology.',
        },
      ],
    },
    projects: {
      overline: '05 / WORK',
      heading: 'Selected work',
      highlightsLabel: 'Highlights',
      items: [
        {
          name: 'Hotel Management System (PMS)',
          category: 'Angular · Company project',
          desc:
            'A property management system for daily hotel operations — bookings, cashier, tax invoices, and package/voucher management.',
          highlights:
            'Designed the tax/VAT/service and room-charge calculation logic (rate, ABF, weekend, holiday) bound to API data, plus complex form state management.',
          tech: ['Angular', 'RxJS', 'Signals', 'TypeScript', 'SCSS'],
          image: 'images/project-pms.png',
        },
        {
          name: 'Water Park Ticket E-commerce',
          category: 'React · Company project',
          desc:
            'A water-park ticketing site — choose a package, add to cart, pay via 2C2P, then show the user a success status.',
          highlights:
            'Managed the cart with session storage and integrated the 2C2P payment gateway under tight, same-day deadlines.',
          tech: ['React', 'TypeScript', '2C2P'],
          image: 'images/project-ecommerce.png',
        },
        {
          name: 'Business / Corporate Websites',
          category: 'Next.js · Company project',
          desc:
            'Two business-facing websites — presenting rooms/seminar venues and the company’s services and products.',
          highlights: 'Focused on polished, responsive presentation and fast loads with SSR/SSG.',
          tech: ['Next.js', 'TypeScript'],
          image: 'images/project-corporate.png',
        },
        {
          name: 'LifeOS — Personal Productivity App',
          category: 'Next.js · Side project',
          desc:
            'A personal “life OS” — track daily routines and manage expenses, built end-to-end with AI assistance.',
          highlights: 'A hands-on way to practice AI-driven development and Next.js on a real project.',
          tech: ['Next.js', 'AI'],
          image: 'images/project-lifeos.png',
        },
      ],
    },
    contact: {
      overline: '06 / CONTACT',
      heading: "Let's talk",
      intro:
        'Looking to collaborate or just want to chat about a project? Reach me through any of the channels below.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      githubLabel: 'GitHub',
      ctaEmail: 'Email me',
    },
    footer: {
      tagline: 'Front-End Developer · Angular',
      rights: 'All rights reserved.',
    },
  },
};
