const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jorjis Hasan",
    url: "https://jorjishasan.com",
    sameAs: [
      "https://github.com/jorjishasan",
      "https://linkedin.com/in/jorjishasan",
      "https://twitter.com/jorjishasan",
    ],
    jobTitle: "Full-Stack MERN Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "MERN Stack Development",
      "React.js",
      "Next.js",
      "Redux",
      "UI/UX Design",
      "Frontend Development",
      "Full-Stack Development",
    ],
    image: "https://jorjishasan.com/profile-image.jpg",
    description:
      "Expert MERN Stack Developer specializing in React, Next.js, Redux, and UI/UX Design.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
