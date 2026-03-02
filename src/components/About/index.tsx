import { Typography } from "@mui/material";
import "./styles.css";

export const About = () => {
  return (
    <div className="about-container ">
      <div>
        <Typography variant="h4">About Me</Typography>
      </div>
      <div className="about-info">
        <Typography variant="body1">
          My journey into software development began after graduating in
          Aviation Management, where I developed strong analytical thinking,
          discipline, and adaptability. Although my academic background was
          different, my long-standing interest in technology led me to
          transition into frontend development a decision that quickly became a
          professional commitment rather than a hobby. Today, I build modern web
          applications using React and Next.js, focusing on scalable
          architecture, reusable components, and performance optimization. I
          enjoy solving real-world problems through clean, maintainable code and
          continuously improving both technically and personally. Outside of
          development, I value activities like hiking and music, which help me
          maintain focus, creativity, and balance qualities I also bring into my
          work.
        </Typography>
      </div>
    </div>
  );
};
