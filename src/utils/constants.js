import twitterIcon from "@icon/twitter.svg";
import githubIcon from "@icon/github.svg";
import linkedinIcon from "@icon/linkedin.svg";
import gmailIcon from "@icon/gmail.svg";
import devdottoIcon from "@icon/devdotto.svg";
export const maxContainerWidth = 1140;
export const socialLinks = [
  {
    name: "Twitter",
    icon: twitterIcon,
    href: "https://twitter.com/yourusername",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Gmail",
    icon: gmailIcon,
    href: "mailto:yourusername@gmail.com",
  },
  {
    name: "Dev.to",
    icon: devdottoIcon,
    href: "https://dev.to/yourusername",
  },
];

export const navItems = [
  { name: "Hi", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Tools", href: "/tools" },
];

export const notifications = [
  {
    name: "Ideation & Planning",
    description: "Sync plan with project.",
    icon: "🗞️",
    color: "#8AC6FF", // Light Blue
  },
  {
    name: "UI/UX Design",
    description: "40% upheld",
    icon: "🧠",
    color: "#FFD78A", // Light Peach
  },
  {
    name: "Full-Stack Dev",
    description: "MERN, Perfect Stack Match.",
    icon: "💸",
    color: "#93E5D7", // Soft Mint
  },
  {
    name: "Cloud Solutions",
    description: "AWS, GCP, Vercel.",
    icon: "☁️",
    color: "#FF9EAE", // Soft Pink
  },
  {
    name: "Testing & QA",
    description: "Jest to Test.",
    icon: "🧪",
    color: "#B4E4FF", // Soft Sky Blue
  },
  {
    name: "MVP Implemented",
    description: "Idea to Product.",
    icon: "💼",
    color: "#FFD1DA", // Pastel Pink
  },
  {
    name: "SEO Victory",
    description: "SEO, SEO, SEO.",
    icon: "✌🏾",
    color: "#E7FFAC", // Light Lime
  },
  {
    name: "Analytics Insight",
    description: "Analytics built-in.",
    icon: "📈",
    color: "#FFF6BD", // Soft Yellow
  },
];

export const sectionIntros = {
  projects: {
    tag: "Projects",
    title: "Landscape of Work",
    description:
      "These are a few of my Web2 projects, among many more to come. I love to grab real-world problems and create logical instructions for solving them through code. ",
  },
  articles: {
    tag: "Blogs",
    title: "20+ Articles",
    description:
      "These are a few of my Web2 projects, among many more to come. I love to grab real-world problems and create logical instructions for solving them through code. ",
  },
  tools: {
    tag: "Tools & Tech",
    title: "Start, Ship, Shape",
    description: `These are the tools and tech that power my development process every day. For cloud solutions, I usually turn to GCP or AWS, depending on what fits best for the task at hand. Let’s do a free consult  for you.`,
  },
};
