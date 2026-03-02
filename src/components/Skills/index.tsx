import "./styles.css";
import { Typography, List, ListItem } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import HandymanIcon from "@mui/icons-material/Handyman";

export const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill-title">
        <Typography variant="h3">Skills</Typography>
      </div>
      <div className="skill-info">
        <div>
          <List>
            <ListItem>JavaScript (ES6+)</ListItem>
            <ListItem>HTML5</ListItem>
            <ListItem>CSS3</ListItem>
            <ListItem>React</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>Redux</ListItem>
            <ListItem>Context API</ListItem>
            <ListItem>REST APIs</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Tailwind</ListItem>
            <ListItem>Agile/Scrum</ListItem>
            <ListItem>Material UI</ListItem>
            <ListItem>Performance Optimization</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};
