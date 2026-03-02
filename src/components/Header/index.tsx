import { Link, Button, Typography, useMediaQuery } from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./styles.css";

interface HeaderProps {
  onAboutClick: () => void;
  onSkillsClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export const Header = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}: HeaderProps) => {
  const isSmallScreen = useMediaQuery("(max-width:500px)");

  return (
    <div className="header-container">
      <div className="header-title">
        <LaptopIcon className="laptop-icon" />
        <Typography variant="subtitle2">FIRATRUZGARDEV</Typography>
      </div>
      <div>
        <nav>
          <Link
            className="link"
            underline="hover"
            margin={isSmallScreen ? "0 5px" : "0 10px"}
            color="inherit"
            onClick={onAboutClick}
          >
            About Me
          </Link>
          <Link
            className="link"
            underline="hover"
            margin={isSmallScreen ? "0 5px" : "0 10px"}
            color="inherit"
            onClick={onSkillsClick}
          >
            Skills
          </Link>
          <Link
            className="link"
            underline="hover"
            margin={isSmallScreen ? "0 5px" : "0 10px"}
            color="inherit"
            onClick={onProjectsClick}
          >
            Projects
          </Link>
        </nav>
      </div>
      <div>
        {isSmallScreen ? (
          <ContactMailIcon
            onClick={onContactClick}
            sx={{
              width: "50px",
              height: "50px",
              padding: "5px",
              cursor: "pointer",
            }}
          />
        ) : (
          <Button
            className="contact-btn"
            variant="outlined"
            color="inherit"
            onClick={onContactClick}
          >
            Contact Me
          </Button>
        )}
      </div>
    </div>
  );
};
