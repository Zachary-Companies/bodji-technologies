import { Chapter, Solution, FAQItem } from './types';

export const solutions: Solution[] = [
  {
    id: 'beacon',
    name: 'Beacon',
    tag: 'Bodji Beacon',
    tagline: 'Make your business AI-readable and action-ready.',
    description: 'We represent your business in structured formats (MCP, JSON Schema, and action descriptions) that AI engines can securely identify, digest, cite, and directly transact with.',
    benefits: [
      'Model Context Protocol (MCP) structured endpoint integration',
      'Unified, verified real-time schema data feeds (hours, pricing, service availability)',
      'Controlled transactions allowing direct booking & scheduling by AI assistants',
      'Integration compatibility with ChatGPT, Claude, Gemini, and custom agents'
    ],
    colorTheme: 'sage'
  },
  {
    id: 'scout',
    name: 'Scout',
    tag: 'Bodji Scout',
    tagline: 'Locate and organize your best market opportunities.',
    description: 'An AI-powered exploration agent that crawls raw sector landscapes to identify, score, filter, and alert you of major business possibilities tailored to your exact profile.',
    benefits: [
      'Tailored matching engine evaluating 50+ business metrics simultaneously',
      'Continuous, background-running market crawler and opportunity alerts',
      'Comprehensive competitive positioning reports compiled on autopilot',
      'Direct CRM push channels for structured workflows and outreach speed'
    ],
    colorTheme: 'rust'
  },
  {
    id: 'consulting',
    name: 'Consulting',
    tag: 'Bodji consulting',
    tagline: 'Measure time loss and improve workflows safely.',
    description: 'Our expert team maps out your messy operations, measures precisely where friction or bottlenecks waste precious team hours, and builds sandboxed AI wrappers to automate them safely.',
    benefits: [
      'Friction audits mapping sequential employee-level click and search tasks',
      'Empirical time-loss metrics proving hard ROI before deploying tech',
      'Custom human-in-the-loop AI interfaces engineered to guard precision',
      'Secure, localized corporate workspace boundaries preventing data leaks'
    ],
    colorTheme: 'taupe'
  }
];

export const chapters: Chapter[] = [
  {
    id: 1,
    chapterNum: '01',
    title: "It's 1998 again.",
    subtitle: 'A historical cycle is repeating itself. The warning signs are exact.',
    content: [
      {
        type: 'paragraph',
        text: 'In 1998, most local and mid-market business owners thought they didn\'t need a website. The traditional yellow phone book was still working perfectly. Customers still walked in. Word of mouth was king. The internet was widely dismissed as a "fad, mostly for tech startups and massive corporations."'
      },
      {
        type: 'paragraph',
        text: 'By 2005, everything had shifted. Every business absolutely required Web 1.0 architecture to exist in the consumer consciousness. The pioneering business owners who built clean, indexable websites early got found first, capturing dominant digital real estate. The ones who dismissed it spent the next decade paying double, fighting upwards to catch up with their competitors.'
      },
      {
        type: 'quote',
        text: '"If your business doesn\'t exist online, you do not exist." – This became the absolute rule of the Google Era.'
      },
      {
        type: 'paragraph',
        text: 'Today, we are standing on the exact same shoreline. Only this time, it\'s not the physical web we\'re indexing. We are standing on the edge of the Agentic Internet.'
      }
    ]
  },
  {
    id: 2,
    chapterNum: '02',
    title: 'How customers find you.',
    subtitle: 'The landscape of discovery is shifting away from standard web directories.',
    content: [
      {
        type: 'paragraph',
        text: 'Today, customers look up "Sarah\'s Coffee Roasters" on Yelp, scan for "best coffee Portland, OR" on Google search, or open Google Maps. They sift through results, check reviews, copy a phone number, select a link, and manually click around to complete their task.'
      },
      {
        type: 'paragraph',
        text: 'Tomorrow, they won\'t do any of that. They will summon their AI assistant—whether that\'s Siri with Apple Intelligence, Gemini Live, Claude, or ChatGPT—and speak one sentence:'
      },
      {
        type: 'quote',
        text: '"Book me a table at a quiet Italian restaurant nearby that has gluten-free pasta and an open slot tonight at 7:30 PM, then calendar it."'
      },
      {
        type: 'paragraph',
        text: 'Or even: "Find me a licensed local commercial HVAC consultant who specializes in dental workspace airflow, compile a table comparing three of them, and send an email requesting quotes for our office layout."'
      },
      {
        type: 'paragraph',
        text: 'Observe this fundamental shift: The human is no longer searching pages. The AI agent is searching for them. This is a completely new kind of buyer.'
      }
    ]
  },
  {
    id: 3,
    chapterNum: '03',
    title: 'What AI sees today.',
    subtitle: 'Scratch beneath the surface of how modern LLMs understand your brand.',
    content: [
      {
        type: 'paragraph',
        text: 'When ChatGPT, Claude, or Copilot attempts to discover your business, it does not read your beautiful hero screens, hover menus, or parallax images. In real-time search-grounding mode, it runs an automated raw scrape of search indicators.'
      },
      {
        type: 'paragraph',
        text: 'What does it get? A disorganized soup of fractured HTML fragments, third-party blog mentions from 2021, messy Yelp pages with conflicting hours, automated directories, and out-of-date social profiles.'
      },
      {
        type: 'paragraph',
        text: 'LLMs are forced to play detective. They guess your operational details, try to infer your current pricing, or rely on outdated training parameters. If they encounter any ambiguity, they err on the side of caution: they direct your customer to a competitor whose data is clean, structured, and instantly readable.'
      }
    ]
  },
  {
    id: 4,
    chapterNum: '04',
    title: "The shelf you can't see.",
    subtitle: 'Why traditional websites are rendering businesses invisible to automated agents.',
    content: [
      {
        type: 'paragraph',
        text: 'A business website is built for human retinas. It has animations, large high-resolution images, and visual components designed to convert human clicks. But to an AI, this layout represents structural friction.'
      },
      {
        type: 'paragraph',
        text: 'Imagine your business is on a shelf. But it\'s a shelf inside a Pitch-Black warehouse. AI engines search using laser-guided scanners. If your competitors\' products have laser-readable barcodes, and your business details are written in beautiful calligraphy on a scroll, the scanner will completely skip you.'
      },
      {
        type: 'paragraph',
        text: 'By failing to publish structured, machine-ready access points, you have placed your business on a shelf that automated agents cannot see.'
      }
    ]
  },
  {
    id: 5,
    chapterNum: '05',
    title: 'GEO: the new SEO.',
    subtitle: 'Learn the rules of Generative Engine Optimization.',
    content: [
      {
        type: 'paragraph',
        text: 'Traditionally, Search Engine Optimization (SEO) was about stuffing keywords, building backlink profiles, optimizing meta descriptions, and trying to score a spot on the first page of Google Links.'
      },
      {
        type: 'paragraph',
        text: 'Generative Engine Optimization (GEO) is the successor. It is the strategy of ensuring your business is correctly compiled, represented, cited, and recommended inside LLM synthesizer models.'
      },
      {
        type: 'bullet_list',
        items: [
          'High Citation Alignment: Ensuring matching name, address, and endpoint definitions across 100+ public indexes.',
          'Structured Semantic Feeds: Giving AI engine scrapers unambiguous metadata about what your business offers.',
          'Action-Protocol Availability: Having standard machine endpoints ready to welcome transaction callbacks.',
          'Frictionless Summarization: Crafting readable, structured summaries that a model can easily compress and recite in conversational results.'
        ]
      }
    ]
  },
  {
    id: 6,
    chapterNum: '06',
    title: 'What is MCP, really?',
    subtitle: 'The technological standard governing the future of business interactions.',
    content: [
      {
        type: 'paragraph',
        text: 'Model Context Protocol (MCP) is an open-source standard pioneered by Anthropic and adopted widely. It acts similar to an open API, but it is tailor-designed for large language models to use dynamically.'
      },
      {
        type: 'paragraph',
        text: 'Instead of complex coding frameworks for every unique tool, MCP allows an AI assistant to connect to a standardized protocol endpoint that exposes safe, read-write tools.'
      },
      {
        type: 'paragraph',
        text: 'Example: Through an MCP endpoint, Claude can directly inquire: "What are your available appointments next Tuesday?" and then submit: "Post booking request for Will (will@example.com) at 2:00 PM." No human interaction required, fully structured, completely safe.'
      }
    ]
  },
  {
    id: 7,
    chapterNum: '07',
    title: 'The cost of doing nothing.',
    subtitle: 'The price tag of digital friction is paid in silent customer loss.',
    content: [
      {
        type: 'bullet_list',
        items: [
          'Every time a customer asks an AI assistant for a recommendation in your category and it picks a competitor instead of you, because that competitor is readable and you\'re not. That\'s a customer you\'ll never know you lost.',
          'Every time the AI quotes wrong hours from a stale Yelp listing and your customer shows up to a closed door, they don\'t blame the AI. They blame you.',
          'Every time someone says "book me a slot with your competitor" instead of "book me a slot with you," you\'re paying for that visibility gap in revenue you\'ll never count.',
          'Every month you wait, more of your competitors will get this right, and you\'ll be the one paying double to catch up later, exactly like late SEO adopters did.'
        ]
      }
    ]
  },
  {
    id: 8,
    chapterNum: '08',
    title: 'Are you ready?',
    subtitle: 'The immediate fix to secure your spot on the agentic computer screen.',
    content: [
      {
        type: 'paragraph',
        text: 'If most of your answers to this checklist were "no" or "not sure," that\'s normal. Almost every business is in the exact same spot right now.'
      },
      {
        type: 'paragraph',
        text: 'The good news is the fix doesn\'t require you to write a single line of code, hire an expensive developer team, throw away your existing website, or handle complicated server infrastructure.'
      },
      {
        type: 'box_cta',
        ctaTitle: 'That fix is exactly what Bodji Beacon does.',
        ctaDesc: 'We turn your business into an AI-readable profile and a controlled action layer, so AI assistants can find you, recommend you, and book with you, while you stay in charge of everything.',
        ctaButtonText: 'Schedule a meeting'
      }
    ]
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'mcp-endpoint',
    question: "What's an MCP endpoint?",
    answer: 'An Model Context Protocol (MCP) endpoint is a secure API bridge designed for AI agents. It exposes your verified business information (services, hours, active availability) and handles secure transaction parameters in a standard format that models like Claude and GPT can read and engage directly without screen-scraping.'
  },
  {
    id: 'diff-seo',
    question: 'How is this different from SEO?',
    answer: 'Search Engine Optimization (SEO) formats your website for Google\'s search engine crawlers so a link can show up in a list for humans to click. Generative Engine Optimization (GEO) maps your data directly into structured schemas (like JSON/LLM context) so that AI assistants can synthesize answers, quote details as direct facts, and invoke secure actions (like booking a meeting) on the fly.'
  },
  {
    id: 'website-change',
    question: 'Do I need to change my existing website?',
    answer: 'No. You keep your current website. We mount Bodji Beacon as an invisible, highly structured companion layer alongside your domain. When search engines, scrape vectors, or AI agents run background lookups, they find our clean schema file, while human visitors continue to see your beautiful, brand-perfect human landing page.'
  },
  {
    id: 'setup-time',
    question: 'How long does setup take?',
    answer: 'A standard Bodji Beacon registration and custom profile generation is typically modeled, tested, and published to index aggregators within 3 to 5 business days. Once live, AI engines start referencing your clean schema during real-time web checks almost immediately.'
  },
  {
    id: 'happens-wait',
    question: 'What happens if I wait?',
    answer: 'The first wave of AI-readable profiles are already locking down search trust. If you delay, search engines rely on scraping messy or conflicting public sources to guess details about your business. This leads to citation confusion, dropouts in conversational recommendations, and ultimately routes prospective customers directly to competitor brands that have fully structured profiles.'
  }
];
