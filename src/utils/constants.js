import twitterIcon from "@icon/twitter.svg";
import leetcodeIcon from "@icon/leetcode.svg";
import hackerRankIcon from "@icon/hackerrank.svg";
import devdottoIcon from "@icon/devdotto.svg";
import githubIcon from "@icon/copilot.svg";
import linkedinIcon from "@icon/linkedin.svg";
import gmailIcon from "@icon/gmail.svg";

export const maxContainerWidth = 1140;

export const profileLinks = {
  coding_profiles: {
    hacker_rank: {
      name: "HackerRank",
      icon: hackerRankIcon,
      href: "https://www.hackerrank.com/profile/jorjis",
    },
    github: {
      name: "GitHub",
      icon: githubIcon,
      href: "https://github.com/jorjishasan",
    },
    leetcode: {
      name: "LeetCode",
      icon: leetcodeIcon,
      href: "https://leetcode.com/u/jorjis/",
    },
  },
  social_links: {
    twitter: {
      name: "Twitter",
      icon: twitterIcon,
      href: "https://x.com/jorjishasan_",
    },
    linkedin: {
      name: "LinkedIn",
      icon: linkedinIcon,
      href: "https://www.linkedin.com/in/jorjishasan/",
    },
    gmail: {
      name: "Gmail",
      icon: gmailIcon,
      href: "mailto:speak.jorjis@gmail.com",
    },
    devdotto: {
      name: "Dev.to",
      icon: devdottoIcon,
      href: "https://dev.to/jorjishasan",
    },
  },
};

export const navItems = [
  { name: "🤌 Hola !", href: "hola" },
  { name: "Projects", href: "projects" },
  { name: "Tools", href: "tools" },
  { name: "Articles", href: "articles" },
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
  coding_profile: {
    tag: "Coding Profile",
    title: "",
    description: "",
  },
};
