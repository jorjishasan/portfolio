const baseYoutubeEmbed = (videoId) => `<iframe 
  width="1280" 
  height="720" 
  src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&enablejsapi=1"
  title="Project Demo" 
  frameborder="0" 
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>`;

export const projectData = [
  // First create the base embed structure

  // {
  //   name: "Fastkeys.dev",
  //   description: "Description of project 1",
  //   links: {
  //     github: "https://github.com/yourusername/project1",
  //     live: "https://yourproject1.com",
  //     youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //   },
  //   embed: baseYoutubeEmbed("vFW_TxKLyrE"),
  //   tags: ["React", "Next.js", "Tailwind CSS"],
  // },
  {
    name: "Algoview.app",
    description: "Description of project 1",
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://yourproject1.com",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    embed: baseYoutubeEmbed("vFW_TxKLyrE"),
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Cornflix.app",
    description: "Description of project 1",
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://yourproject1.com",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    embed: baseYoutubeEmbed("vFW_TxKLyrE"),
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "zestybite.app",
    description: "Description of project 1",
    links: {
      github: "https://github.com/yourusername/project1",
      live: "https://yourproject1.com",
      youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    embed: baseYoutubeEmbed("vFW_TxKLyrE"),
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
];
