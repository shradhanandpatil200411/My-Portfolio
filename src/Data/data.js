// export const mySkillData = [
//   {
//     iconImg:
//       "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/react-icon.png?updatedAt=1762871383166",
//     name: "React Js",
//     dis: "Powerful JavaScript library for building interactive UIs.",
//     color1: "#2A7B9B",
//     color2: "#3EABD6",
//     color3: "#EDDD53",
//     info: "Redux ",
//     id: 0,
//   },
//   {
//     iconImg:
//       "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/nodeJs-icon.png?updatedAt=1762871383081",
//     name: "Node Js",
//     dis: "JavaScript runtime for building scalable server apps.",
//     color1: "#05692B",
//     color2: "#067534",
//     color3: "#00F566",
//     id: 1,
//   },
//   {
//     iconImg:
//       "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/express-removebg.png?updatedAt=1762871383116",
//     name: "Express Js",
//     dis: "Web framework for Node.js to create RESTful APIs fast.",
//     color1: "#0D0101",
//     color2: "#807979",
//     color3: "#FFFFFF",
//     id: 2,
//   },
//   {
//     iconImg:
//       "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/MongoDB_logo.png?updatedAt=1762871383046",
//     name: "MongoDB",
//     dis: "NoSQL database for flexible and scalable data storage.",
//     color1: "#015E41",
//     color2: "#00AD7C",
//     color3: "#04D99D",
//     id: 3,
//   },
//   {
//     iconImg:
//       "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/next.png?updatedAt=1762871383091",
//     name: "Next Js",
//     dis: "React framework for server-side rendering and static sites.",
//     color1: "#03508F",
//     color2: "#096DB0",
//     color3: "#0094F7",
//     id: 4,
//   },
// ];

export const mySkillData = [
  {
    iconImg:
      "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/react-icon.png?updatedAt=1762871383166",
    name: "React Js",
    dis: "Powerful JavaScript library for building interactive user interfaces with component-based architecture and virtual DOM.",
    color1: "#2A7B9B",
    color2: "#3EABD6",
    color3: "#EDDD53",
    id: 0,
    relatedTech: [
      {
        name: "Redux",
        dis: "State management library for predictable data flow",
        icon: "🔄",
      },
      {
        name: "React Router",
        dis: "Navigation and routing in single-page React apps",
        icon: "🛣️",
      },
      {
        name: "Tailwind CSS",
        dis: "Utility-first CSS framework for rapid custom styling",
        icon: "🎨",
      },
      {
        name: "CSS3",
        dis: "Styles web pages for layout, design, and responsiveness",
        icon: "💅",
      },
      {
        name: "GSAP",
        dis: "Professional-grade animation library for complex UI animations",
        icon: "✨",
      },
      {
        name: "JavaScript (ES6+)",
        dis: "Core scripting language for web interactivity",
        icon: "📜",
      },
    ],
  },
  {
    iconImg:
      "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/nodeJs-icon.png?updatedAt=1762871383081",
    name: "Node Js",
    dis: "JavaScript runtime built on Chrome's V8 engine for building fast and scalable server-side applications.",
    color1: "#05692B",
    color2: "#067534",
    color3: "#00F566",
    id: 1,
    relatedTech: [
      {
        name: "Express.js",
        dis: "Fast, minimalist web framework for building RESTful APIs",
        icon: "⚡",
      },
      {
        name: "NPM",
        dis: "Package manager for Node.js dependencies",
        icon: "📦",
      },
      {
        name: "JWT",
        dis: "Secure token-based authentication",
        icon: "🔐",
      },
      {
        name: "RESTful APIs",
        dis: "Designing scalable API architectures",
        icon: "🔗",
      },
    ],
  },
  {
    iconImg:
      "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/express-removebg.png?updatedAt=1762871383116",
    name: "Express Js",
    dis: "Minimal and flexible Node.js web framework providing robust features for web and mobile applications.",
    color1: "#0D0101",
    color2: "#807979",
    color3: "#FFFFFF",
    id: 2,
    relatedTech: [
      {
        name: "Middleware",
        dis: "Custom and third-party middleware integration",
        icon: "🔄",
      },
      {
        name: "Routing",
        dis: "Advanced routing and request handling",
        icon: "🛤️",
      },
      {
        name: "Error Handling",
        dis: "Centralized error management",
        icon: "🚨",
      },
      {
        name: "Template Engines",
        dis: "Server-side rendering with EJS/Pug",
        icon: "📄",
      },
    ],
  },
  {
    iconImg:
      "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/MongoDB_logo.png?updatedAt=1762871383046",
    name: "MongoDB",
    dis: "NoSQL document database providing high performance, high availability, and flexible JSON-like data storage.",
    color1: "#015E41",
    color2: "#00AD7C",
    color3: "#04D99D",
    id: 3,
    relatedTech: [
      {
        name: "Mongoose",
        dis: "Elegant ODM for MongoDB with schema validation",
        icon: "🦫",
      },
      {
        name: "Aggregation",
        dis: "Complex data processing and analytics pipelines",
        icon: "📊",
      },
      {
        name: "Indexing",
        dis: "Query optimization and performance tuning",
        icon: "⚡",
      },
      {
        name: "Atlas",
        dis: "Cloud database management and deployment",
        icon: "☁️",
      },
    ],
  },
  {
    iconImg:
      "https://ik.imagekit.io/shradhanand/My-Portfolio/icon/next.png?updatedAt=1762871383091",
    name: "Next Js",
    dis: "React framework with server-side rendering, static site generation, and built-in routing for production-ready apps.",
    color1: "#03508F",
    color2: "#096DB0",
    color3: "#0094F7",
    id: 4,
    relatedTech: [
      {
        name: "SSR & SSG",
        dis: "Server-side rendering and static site generation",
        icon: "🚀",
      },
      {
        name: "API Routes",
        dis: "Built-in serverless API endpoints",
        icon: "🔌",
      },
      {
        name: "Image Optimization",
        dis: "Automatic image optimization and lazy loading",
        icon: "🖼️",
      },
      {
        name: "App Router",
        dis: "Modern routing with React Server Components",
        icon: "🧭",
      },
      {
        name: "Vercel Deployment",
        dis: "Seamless deployment and edge functions",
        icon: "🌐",
      },
    ],
  },
];
