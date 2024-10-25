export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Techstack", link: "#techstack" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Rapeepat Promlat or you can call me Owen, I'm a software developer",
    description: "Sawasdee krub, I am",
    className:
      "text-shadow lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "lg:w-full lg:h-full",
    titleClassName: "justify-end",
    img: "/owen2.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I love working with colleagues from around the world",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
    imgClassName: "",
    titleClassName: "text-shadow justify-start textLarge",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "What I do",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "text-shadow justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech guy with passion in art and literature.",
    description: "",
    className: "text-shadow lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-100 w-120 opacity-80",
    titleClassName: "text-shadow justify-start",
    img: "/alphbg2.png",
    spareImg: "/grid.svg",
  },

  {
    id: 5,
    title: "Backend developer and a co-founder in a new born Martech start-up",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "lg:w-full lg:h-full absolute right-0 bottom-0 opacity-55",
    titleClassName:
      "text-shadow justify-center md:justify-start lg:justify-center",
    img: "/code1.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Trendy - Fashion community website",
    des: "Community website for fashion lover. Connect with people that has the same interest",
    img: "/trendyfeed.png",
    iconLists: [
      "/vitejs.svg",
      "/tail.svg",
      "/nodejs-icon.svg",
      "/jwt.svg",
      "/cloudinary-2.svg",
    ],
    link: "https://trendfeed.onrender.com/",
  },
  {
    id: 2,
    title: "Summonere - Contact center training bot",
    des: "Training voice bot for training center.Using RAG technique with GPT4o, speech-to-text and tex-to-speech.",
    img: "/Summonerebot.png",
    iconLists: [
      "/vitejs.svg",
      "/tail.svg",
      "/ts.svg",
      "/fastapi-1.svg",
      "/chatgpt-icon.svg",
      "/ggc.png",
    ],
    link: "https://github.com/OwenKujo/Summonere",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "googlecloud",
    img: "",
    nameImg: "/ggc1.svg",
  },
  {
    id: 2,
    name: "docker.",
    img: "",
    nameImg: "/docker-3.svg",
  },
  {
    id: 3,
    name: "AWS",
    img: "",
    nameImg: "/aws.svg",
  },
  {
    id: 4,
    name: "tesnorflow",
    img: "",
    nameImg: "/tensorflow.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer - Artmosphere",
    desc: "Develop and test a reusable and scalable backend API of Artmosphere website using NestJS, PostgreSQL and Google Cloud.",
    className: "md:col-span-2",
    thumbnail: "/Artmos.jpg",
  },
  {
    id: 2,
    title: "Chief Technology Officer - Cadflow",
    desc: "Co-founder and CTO. Led the technology team, plan the development process and work sprint, validate the business opportunity and feasibility.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/Cadflow.jpg",
  },
  {
    id: 3,
    title: "Innovation Intern - SCG Digital Office",
    desc: "In Summonere project, designed and developed a training web-app service (voice bot) for contact center agent performance",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/SCG.jpg",
  },
  {
    id: 4,
    title: "Chatbot Developer Intern - Amity Solutions",
    desc: "Part of NLQ chatbot project, wrok on few-shots model, data entry. Using SQL and javascrpits",
    className: "md:col-span-2",
    thumbnail: "/amity.jpg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
