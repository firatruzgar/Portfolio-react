import "./styles.css";
import { Typography } from "@mui/material";
import ProfileImg from "../../assets/pp.jpg";

export const Introduce = () => {
  return (
    <div className="introduce-container">
      <div className="int-img">
        <img src={ProfileImg} alt="#" />
      </div>
      <div className="int-info">
        <Typography variant="h4">Hi there, I'm Fırat</Typography>
        <Typography variant="body2">
          Frontend Developer specializing in React, Next.js, and TypeScript with
          hands-on production experience in fast-paced startup environments.
          Contributed to scalable UI architecture, REST API integrations, and
          reusable component systems at PickYourPour. Focused on performance,
          clean code, and delivering intuitive user experiences.
        </Typography>
        <br />
      </div>
    </div>
  );
};
