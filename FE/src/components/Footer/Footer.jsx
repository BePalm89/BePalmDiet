import "./Footer.css";

const Footer = () => {
  const FOOTER_LINKS = [
    {
      icon: "/icons/github.png",
      socialNetwork: "github",
      url: "https://github.com/BePalm89",
    },
    {
      icon: "/icons/linkedin.png",
      socialNetwork: "linkedin",
      url: "https://www.linkedin.com/in/claudia-palmerini-b01a99136/",
    },
    {
      icon: "/icons/portfolio.png",
      socialNetwork: "portfolio",
      url: "https://bepalm-portfolio.netlify.app/",
    },
  ];
  return (
    <footer className="footer">
      <ul>
        {FOOTER_LINKS.map((link) => (
          <li key={link.socialNetwork}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={link.socialNetwork} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
