import "./styles.css";
import { Typography, Stack, Button, useMediaQuery } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contact = () => {
  const isSmallScreen = useMediaQuery("(max-width:650px)");

  const handleEmailClick = () => {
    window.open("mailto:frtsmk1996@gmail.com");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/firat-r/");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/firatruzgar?tab=repositories");
  };

  return (
    <div className="contact-container">
      <div>
        <Typography variant="h4">Contact</Typography>
      </div>
      <div>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          spacing={6}
        >
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <EmailIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleEmailClick}
          >
            Email
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <LinkedInIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              width: "150px",
            }}
            startIcon={
              <GitHubIcon
                sx={{
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              />
            }
            onClick={handleGitHubClick}
          >
            GitHub
          </Button>
        </Stack>
      </div>
    </div>
  );
};
