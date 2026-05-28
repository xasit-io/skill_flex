import clock from "./assests/clock.svg";
import hotel from "./assests/hotel.svg";
import mappin from "./assests/mappin.svg";
import Junior from "./assests/Junior.svg";
import Senior from "./assests/Senior.svg";
import metaimage from "./assests/metaimage.svg";
import DonNorman from "./assests/DonNorman.svg";
import EntryLevel from "./assests/EntryLevel.svg";
import appleimage from "./assests/appleimage.svg";
import designbook from "./assests/designbook.svg";
import motiveimage from "./assests/motiveimage.svg";
import edgeaiimage from "./assests/edgeaiimage.svg";
import MattLeBlanc from "./assests/MattLeBlanc.svg";
import JaneNeilsen from "./assests/JaneNeilsen.svg";
import fundamentals from "./assests/fundamentals.svg";
import Intermediate from "./assests/Intermediate.svg";
import greencheckcircle from "./assests/greencheckcircle.svg";
import designfortherealworld from "./assests/designfortherealworld.svg";

export const companies = [
    { name: "Apple", logo: appleimage, openPositions: 12, },
    { name: "Meta", logo: metaimage, openPositions: 12, },
    { name: "Google", logo: motiveimage, openPositions: 12, },
];

export const popularDesigners = [
    { name: "Don Norman", title: "Founder at NN/g", image: DonNorman },
    { name: "Jane Neilsen", title: "Sr Designer at Meta", image: JaneNeilsen },
    { name: "Matt LeBlanc", title: "Sr Designer at Apple", image: MattLeBlanc },
];

export const workDayData = [
    { time: "09 00 am - 09 30 am", title: "Morning Check-In", icon: clock, },
    { time: "09 30 am - 12 00 pm", title: "Heads-Down Design Work", icon: clock, },
    { time: "12 00 pm - 01 00 pm", title: "Collaboration meeting", icon: clock, },
    { time: "01 00 pm - 02 00 pm", title: "Lunch", icon: clock, },
    { time: "02 00 pm - 03 00 pm", title: "User Research session", icon: clock, },
    { time: "03 00 pm - 04 30 pm", title: "Deep Work", icon: clock, },
    { time: "04 30 pm - 05 00 pm", title: "Wind up tasks", icon: clock, },
];

export const topCompanies = [
    { name: "Apple", img: appleimage, position: 12 },
    { name: "Meta", img: metaimage, position: 14 },
    { name: "Motive", img: motiveimage, position: 16 },
    { name: "Edge AI", img: edgeaiimage, position: 18 },
];


export const dropdownData = [
    { options: ["Full-time", "Part-time", "Contract"], placeholder: "Full-time" },
    { options: ["New York", "Los Angeles", "Remote"], placeholder: "Onsite" },
    { options: ["Apple", "Google", "Microsoft"], placeholder: "Company" },
    { options: ["Newly Posted", "4 days", "6 days"], placeholder: "Date Posted" },
];


export const courses = [
    {
        id: 2, title: "UX Design Fundamentals", image: fundamentals, type: "Course", duration: "2 hours",
        description: "This book will open your eyes to how embedded design is in our everyday lives. By Don Norman.",
        tags: ["Graphic Designing", "Design Thinking", "Photoshop"], checked: true,
        lessons: [
            { title: "Lesson 1: Basics of UX Design", duration: "45 min" },
            { title: "Lesson 2: UX Design Key Components", duration: "45 min" }
        ]
    }
];

export const moreBooks = [
    {
        id: 3, title: "Design for the real world", image: designfortherealworld, type: "Book",
        description: "This book will open your eyes to how embedded design is in our everyday lives. By Don Norman.",
        tags: ["Graphic Designing", "Design Thinking", "Photoshop"], checked: false, tagIcon: greencheckcircle
    }
];


export const books = [
    {
        id: 1, title: "Design of Everyday Things", image: designbook, type: "Book", readTime: "6 hours read", checked: true,
        description: "This book will open your eyes to how embedded design is in our everyday lives. By Don Norman.",
        tags: ["Graphic Designing", "Design Thinking", "Photoshop"],
    },
];

export const salaryData = [
    { icon: EntryLevel, level: "Entry Level", experience: "(0-2 years)", percentage: "25%", salary: "$60k", },
    { icon: Junior, level: "Junior", experience: "(2-4 years)", percentage: "35%", salary: "$80k", },
    { icon: Intermediate, level: "Intermediate", experience: "(0-2 years)", percentage: "50%", salary: "$100k", },
    { icon: Senior, level: "Senior", experience: "(0-2 years)", percentage: "75%", salary: "$150k", },
];


export const careerPaths = [
    { title: "Product Manager", salary: "$140k", description: "Oversees product development from concept to launch, ensuring business goals are met.", },
    { title: "AI Engineer", salary: "$150k", description: "Designs and develops AI solutions to optimize processes and create intelligent applications.", },
    { salary: "$120k", title: "Cybersecurity Specialist", description: "Protects systems and data from cyber threats and ensures regulatory compliance.", },
];

export const sections = [
    { id: 1, title: "😎 Learn Advanced Skills", description: "Understanding the fundamentals of product design to build a strong foundation in any subject." },
    { id: 2, title: "📃 Create your CV", description: "Understanding the fundamentals of product design to build a strong foundation in any subject." }
];

export const hotJobs = [
    { title: "Data Analyst", salary: "💰 $95k", description: "Analyzes data to provide actionable insights for business decisions.", },
    { title: "Frontend Developer", salary: "💰 $110k", description: "Builds responsive and dynamic web applications using modern frontend frameworks.", },
    { title: "User Experience Designer", salary: "💰 $128k", description: "A product designer creates new product concepts focused on functionality and user experience.", },
];

export const jobsData = [
    { title: "UI/UX", salary: 128000, description: "A product designer creates new product concepts focused on functionality and user", openings: 15 },
    { title: "Product Asst.", salary: 110000, description: "Responsible for building responsive and interactive web interfaces.", openings: 10 },
    { title: "Architect", salary: 120000, description: "Works on server-side logic, database management, and APIs.", openings: 8 },
    { title: "Frontend Dev", salary: 140000, description: "Builds responsive interfaces using modern frameworks and best practices.", openings: 12 },
    { title: "Backend Dev", salary: 135000, description: "Develops and maintains server-side logic and database systems.", openings: 9 },
    { title: "Fullstack Dev", salary: 150000, description: "Handles both frontend and backend development tasks for applications.", openings: 7 },
    { title: "Data Analyst", salary: 115000, description: "Analyzes and interprets complex data to help make business decisions.", openings: 6 },
    { title: "ML Engineer", salary: 160000, description: "Designs and implements ML models for various applications.", openings: 5 },
];

export const jobCards = [
    { id: 1, salary: "128k", bg: "bg-[#373737]/80", title: "Web Designer", right: "-right-[20px]", bottom: "-bottom-[70px]", description: "A product designer creates new product concepts focused on functionality and user." },
    { id: 2, salary: "140k", bg: "bg-[#056754]/80", title: "Frontend Developer", right: "-right-[50px]", bottom: "-bottom-[50px]", description: "Builds responsive interfaces using modern frameworks and best practices." },
    { id: 3, salary: "110k", bg: "bg-[#373737]/80", title: "UI/UX Designer", right: "-right-[40px]", bottom: "bottom-[125px]", description: "Designs intuitive user experiences and visually appealing interfaces." },
    { id: 4, salary: "135k", bg: "bg-[#1a1a1a]/80", title: "Backend Developer", right: "-right-[20px]", bottom: "-bottom-[70px]", description: "Develops server-side logic and maintains database systems." },
    { id: 5, salary: "150k", bg: "bg-[#005f73]/80", title: "Fullstack Developer", right: "-right-[50px]", bottom: "-bottom-[50px]", description: "Handles both frontend and backend tasks to build complete applications." },
    { id: 6, salary: "115k", bg: "bg-[#9b2226]/80", title: "Data Analyst", right: "-right-[40px]", bottom: "bottom-[125px]", description: "Analyzes complex datasets to provide actionable insights." },
    { id: 7, salary: "160k", bg: "bg-[#3a86ff]/80", title: "Machine Learning Engineer", right: "-right-[30px]", bottom: "-bottom-[50px]", description: "Designs and implements machine learning models for applications." },
];

export const roles = [
    { id: "product-designer", title: "Product Designer", salary: "$128k", vibe: "80%", cardBg: "#FFECCB", boxBg: "#F6E5C3", cardBg1: "#FFF5E1", skills: ["Figma", "Photoshop", "HTML", "Design Thinking"], description: "A product designer creates new product concepts focused on functionality and user experience.", },
    { id: "data-analyst", title: "Data Analyst", salary: "$128k", vibe: "80%", cardBg: "#FFD7EF", boxBg: "#F6D0E5", cardBg1: "#FFDFF2", skills: ["Excel", "SQL", "Python", "Data Visualization"], description: "A data analyst carefully examines numbers and various types of information to assist businesses in making effective decisions.", },
    { id: "product-associate", title: "Product Associate", salary: "$128k", vibe: "80%", cardBg: "#E1F2D9", boxBg: "#D9EAD0", cardBg1: "#E7F5E1", skills: ["Figma", "Photoshop", "HTML", "Design Thinking"], description: "A product associate helps implement product strategies and supports product managers in executing tasks.", },
];

export const jobs = [
    {
        id: 1, title: "User Experience Designer", company: "Apple Inc.", location: "Chicago, IL", salary: "$95k", period: "a year", tags: ["Part-time", "Remote"], posted: "Posted 7 days ago", skills: ["Figma", "Photoshop", "HTML", "Design Thinking"], companyIcon: hotel, locationIcon: mappin,
        p1: "Design intuitive and meaningful user experiences by understanding user behavior, needs, and business goals. Collaborate with product managers, developers, and researchers to create wireframes, prototypes, and user flows that improve usability, accessibility, and overall satisfaction across web and mobile digital products.",
        p2: "This role focuses on user-centered design, usability testing, and iterative improvements while maintaining consistency, accessibility standards, and strong interaction patterns across all experiences.",
        responsibilities: ["Conduct user research, interviews, surveys, and usability testing to uncover user pain points and design opportunities.", "Create wireframes, user flows, prototypes, and interaction designs aligned with product requirements and user expectations.", "Collaborate closely with developers to ensure accurate implementation of design solutions across platforms.", "Apply UX principles, accessibility guidelines, and usability best practices throughout the design process.", "Iterate designs based on feedback, analytics insights, and usability testing results.", "Maintain and contribute to design systems ensuring visual and interaction consistency.", "Present design concepts clearly to stakeholders and cross-functional teams.", "Balance user needs, technical constraints, and business objectives effectively."]
    },
    {
        id: 2, title: "Frontend Developer", company: "Google", location: "New York, NY", salary: "$120k", period: "a year", tags: ["Full-time", "On-site"], posted: "Posted 2 days ago", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"], companyIcon: hotel, locationIcon: mappin,
        p1: "Build responsive, high-performance user interfaces using modern frontend technologies. Collaborate with designers and backend engineers to translate UI designs into scalable, accessible, and maintainable web applications that deliver seamless user experiences across devices and browsers.",
        p2: "This role requires strong attention to detail, performance optimization, and writing clean, reusable frontend code aligned with best practices.",
        responsibilities: ["Develop responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks.", "Collaborate with designers to accurately translate UI and UX designs into functional components.", "Optimize applications for performance, accessibility, and cross-browser compatibility.", "Integrate frontend applications with backend APIs and services efficiently.", "Write clean, maintainable, and reusable code following industry best practices.", "Debug, test, and resolve frontend issues across different devices and browsers.", "Participate in code reviews to ensure code quality and consistency.", "Stay updated with emerging frontend technologies and development trends."]
    },
    {
        id: 3, title: "React Developer", company: "Meta", location: "Remote", salary: "$110k", period: "a year", tags: ["Full-time", "Remote"], posted: "Posted 1 day ago", skills: ["React", "JavaScript", "Hooks", "Context API", "REST APIs"], companyIcon: hotel, locationIcon: mappin,
        p1: "Develop dynamic, scalable web applications using React and modern JavaScript. Work closely with designers and backend teams to build reusable components, manage application state, and deliver fast, reliable, and user-friendly interfaces for production environments.",
        p2: "The role focuses on component-driven development, performance optimization, and clean architecture using modern React patterns.",
        responsibilities: ["Build reusable and scalable React components using functional components and hooks.", "Manage application state efficiently using Context API or state management libraries.", "Integrate RESTful APIs and handle asynchronous data flows effectively.", "Optimize React applications for performance and responsiveness.", "Collaborate with designers to implement pixel-perfect UI components.", "Write clean, testable, and maintainable JavaScript code.", "Debug and resolve UI bugs and performance bottlenecks.", "Stay updated with the latest React features and ecosystem tools."]
    },
    {
        id: 4, title: "UI Designer", company: "Dribbble", location: "San Francisco, CA", salary: "$90k", period: "a year", tags: ["Contract", "Remote"], posted: "Posted 5 days ago", skills: ["Figma", "UI Design", "Design Systems", "Typography", "Color Theory"], companyIcon: hotel, locationIcon: mappin,
        p1: "Create visually appealing and consistent user interfaces that enhance usability and brand identity. Collaborate with UX designers and developers to design layouts, components, and visual systems that provide intuitive and engaging digital experiences across platforms.",
        p2: "This role emphasizes visual design, typography, color systems, and maintaining design consistency across all interfaces.",
        responsibilities: ["Design visually consistent and engaging user interfaces for web and mobile products.", "Create UI components, layouts, and design systems aligned with brand guidelines.", "Collaborate with UX designers to translate wireframes into polished visual designs.", "Ensure visual accessibility and readability across different screen sizes.", "Maintain and update UI libraries and design systems.", "Prepare design assets and specifications for developer handoff.", "Iterate designs based on feedback and usability insights.", "Stay updated with UI trends, tools, and visual design best practices."]
    },
    {
        id: 5, title: "Backend Developer", company: "Amazon", location: "Seattle, WA", salary: "$130k", period: "a year", tags: ["Full-time", "Hybrid"], posted: "Posted 3 days ago", skills: ["Node.js", "Express", "Databases", "REST APIs", "Authentication"], companyIcon: hotel, locationIcon: mappin,
        p1: "Design, build, and maintain scalable backend systems and APIs that power modern applications. Work closely with frontend developers to ensure reliable data flow, secure authentication, and efficient server-side logic supporting high-traffic production systems.",
        p2: "This role focuses on performance, security, and building maintainable backend architectures.",
        responsibilities: ["Develop scalable RESTful APIs using Node.js and backend frameworks.", "Design and manage databases ensuring data integrity and performance.", "Implement authentication, authorization, and security best practices.", "Optimize server-side logic for performance and scalability.", "Collaborate with frontend teams to integrate APIs effectively.", "Write clean, maintainable, and well-documented backend code.", "Monitor, debug, and resolve backend system issues.", "Participate in architectural discussions and backend design decisions."]
    },
    {
        id: 6, title: "Full Stack Engineer", company: "Netflix", location: "Los Angeles, CA", salary: "$140k", period: "a year", tags: ["Full-time", "On-site"], posted: "Posted today", skills: ["React", "Node.js", "Databases", "APIs", "System Design"], companyIcon: hotel, locationIcon: mappin,
        p1: "Build and maintain complete web applications by working across frontend and backend systems. Collaborate with cross-functional teams to design scalable architectures, implement features end-to-end, and ensure performance, reliability, and seamless user experiences across complex production environments.",
        p2: "This role combines frontend interfaces with backend logic, focusing on system design, scalability, and clean integration between services.",
        responsibilities: ["Develop end-to-end features using modern frontend and backend technologies.", "Design scalable application architectures and data flows across systems.", "Collaborate with product managers to translate requirements into technical solutions.", "Build and integrate RESTful APIs and backend services efficiently.", "Ensure application performance, reliability, and security best practices.", "Write clean, maintainable, and well-documented code across the stack.", "Debug and resolve issues across frontend, backend, and database layers.", "Participate in code reviews and technical design discussions."]
    },
    {
        id: 7, title: "Junior Frontend Developer", company: "Startup Inc.", location: "Remote", salary: "$70k", period: "a year", tags: ["Junior", "Remote"], posted: "Posted 6 days ago", skills: ["HTML", "CSS", "JavaScript", "Basic React", "Git"], companyIcon: hotel, locationIcon: mappin,
        p1: "Support the development of user-facing features by implementing responsive layouts and interactive components. Work under senior developers to learn best practices, improve coding skills, and contribute to real-world frontend projects in a collaborative team environment.",
        p2: "This role is ideal for developers starting their careers and building strong foundations in frontend technologies.",
        responsibilities: ["Implement UI components using HTML, CSS, and basic JavaScript.", "Assist in building responsive layouts compatible with multiple devices.", "Collaborate with senior developers to understand project requirements.", "Fix UI bugs and improve visual consistency across pages.", "Use Git for version control and collaborative development.", "Follow coding standards and frontend best practices.", "Learn and apply basic React concepts in real projects.", "Continuously improve skills through feedback and hands-on experience."]
    },
    {
        id: 8, title: "Product Designer", company: "Figma", location: "San Francisco, CA", salary: "$115k", period: "a year", tags: ["Full-time", "Hybrid"], posted: "Posted 4 days ago", skills: ["Figma", "UX Research", "Wireframing", "Prototyping", "Product Thinking"], companyIcon: hotel, locationIcon: mappin,
        p1: "Drive product experiences from concept to launch by combining user research, design thinking, and business goals. Work closely with product managers and engineers to design intuitive workflows, prototypes, and interfaces that solve real user problems.",
        p2: "This role focuses on product strategy, user impact, and iterative design improvements.",
        responsibilities: ["Conduct user research to understand product needs and opportunities.", "Create wireframes, prototypes, and high-fidelity product designs.", "Collaborate with product managers to align design with business goals.", "Work closely with engineers to ensure feasible and accurate implementation.", "Test and iterate designs based on user feedback and analytics.", "Maintain consistency across product features and platforms.", "Communicate design decisions clearly to stakeholders.", "Contribute to long-term product vision and roadmap discussions."]
    },
    {
        id: 9, title: "Software Engineer", company: "Microsoft", location: "Redmond, WA", salary: "$125k", period: "a year", tags: ["Full-time", "On-site"], posted: "Posted 2 days ago", skills: ["Data Structures", "Algorithms", "System Design", "JavaScript", "APIs"], companyIcon: hotel, locationIcon: mappin,
        p1: "Develop robust and scalable software solutions by applying strong problem-solving skills and engineering principles. Work with cross-functional teams to design, build, and maintain systems that meet performance, reliability, and scalability requirements.",
        p2: "This role emphasizes clean code, system design, and efficient algorithms.",
        responsibilities: ["Design and develop scalable software solutions using modern programming languages.", "Apply data structures and algorithms to solve complex technical problems.", "Collaborate with teams to define system architecture and design decisions.", "Write clean, efficient, and maintainable production-quality code.", "Develop and integrate APIs and backend services.", "Debug, test, and optimize applications for performance.", "Participate in code reviews and technical discussions.", "Continuously improve software quality and engineering practices."]
    },
    {
        id: 10, title: "UI/UX Designer", company: "Adobe", location: "Remote", salary: "$105k", period: "a year", tags: ["Full-time", "Remote"], posted: "Posted 1 week ago", skills: ["Figma", "UX Design", "UI Design", "User Research", "Prototyping"], companyIcon: hotel, locationIcon: mappin,
        p1: "Design engaging and intuitive digital experiences by combining UX research and UI design principles. Collaborate with cross-functional teams to deliver visually appealing interfaces that meet user needs, accessibility standards, and business objectives across Adobe products.",
        p2: "This role balances user research insights with strong visual and interaction design skills.",
        responsibilities: ["Conduct user research and translate insights into design solutions.", "Design wireframes, prototypes, and polished UI interfaces.", "Collaborate with developers to ensure design accuracy.", "Apply accessibility and usability standards consistently.", "Iterate designs based on feedback and usability testing.", "Maintain visual consistency across products and features.", "Present design concepts to stakeholders clearly.", "Contribute to design systems and UI guidelines."]
    },
    {
        id: 11, title: "Mobile App Developer", company: "Uber", location: "San Francisco, CA", salary: "$118k", period: "a year", tags: ["Full-time", "Hybrid"], posted: "Posted 3 days ago", skills: ["React Native", "Flutter", "Mobile UI", "APIs", "App Performance"], companyIcon: hotel, locationIcon: mappin,
        p1: "Develop high-quality mobile applications for iOS and Android platforms. Work closely with designers and backend teams to deliver fast, reliable, and user-friendly mobile experiences that meet performance and scalability requirements.",
        p2: "This role focuses on mobile UI, performance optimization, and cross-platform development.",
        responsibilities: ["Build and maintain mobile applications using React Native or Flutter.", "Collaborate with designers to implement intuitive mobile interfaces.", "Integrate mobile apps with backend APIs and services.", "Optimize application performance and responsiveness.", "Debug and resolve mobile-specific issues across devices.", "Ensure app stability, security, and scalability.", "Participate in testing and app release processes.", "Stay updated with mobile development trends and tools."]
    },
    {
        id: 12, title: "Machine Learning Engineer", company: "OpenAI", location: "Remote", salary: "$150k", period: "a year", tags: ["Full-time", "Remote"], posted: "Posted today", skills: ["Python", "Machine Learning", "Deep Learning", "Data Analysis", "TensorFlow"], companyIcon: hotel, locationIcon: mappin,
        p1: "Design, build, and deploy machine learning models that solve real-world problems at scale. Collaborate with researchers and engineers to develop data-driven solutions, improve model performance, and integrate intelligent systems into production environments.",
        p2: "This role focuses on model development, experimentation, and scalable deployment.",
        responsibilities: ["Develop and train machine learning models using Python and ML frameworks.", "Analyze large datasets to extract meaningful insights.", "Optimize model performance and accuracy through experimentation.", "Deploy machine learning models into production systems.", "Collaborate with engineering teams on model integration.", "Monitor models and retrain them using new data.", "Document experiments, results, and model behavior clearly.", "Stay updated with advances in machine learning and AI research."]
    }
];

export const fieldName = [
    { name: "AI Engineer" },
    { name: "Data Analyst" },
    { name: "NLP Engineer" },
    { name: "Statistician" },
    { name: "Data Engineer" },
    { name: "MLOps Engineer" },
    { name: "Data Scientist" },
    { name: "Big Data Engineer" },
    { name: "Analytics Engineer" },
    { name: "AI Product Engineer" },
    { name: "Data Science Intern" },
    { name: "Quantitative Analyst" },
    { name: "AI Research Engineer" },
    { name: "Deep Learning Engineer" },
    { name: "Research Scientist (AI)" },
    { name: "Computer Vision Engineer" },
    { name: "Machine Learning Engineer" },
    { name: "Business Intelligence Analyst" },
    { name: "Predictive Analytics Specialist" },
    { name: "Applied Machine Learning Engineer" },
];