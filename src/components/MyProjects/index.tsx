import "./styles.css";
import {
  Typography,
  Card,
  CardMedia,
  Link,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import RandomUserImg from "../../assets/random-user.png";
import RecipeAppImg from "../../assets/recipe-app.png";
import SpendMoneyAppImg from "../../assets/spend-money-app.png";
import TicTacToeImg from "../../assets/tic-tac-toe.png";
import WeatherAppImg from "../../assets/weather-app.png";
import RandomQuoteImg from "../../assets/random-quote-machine.png";
import QuizAppImg from "../../assets/quiz-app.png";
import WordGameImg from "../../assets/word-game.png";

interface ProjectReact {
  name: string;
  url: string;
  githubUrl: string;
  img: string;
}
const initialProject: ProjectReact[] = [
  {
    name: "Word Game React",
    url: "https://word-game-three-wine.vercel.app/",
    githubUrl: "https://github.com/FiratSomek/Word-game",
    img: WordGameImg,
  },
  {
    name: "Quiz App React",
    url: "https://quiz-app-fs.vercel.app/",
    githubUrl: "https://github.com/FiratSomek/Quiz-app",
    img: QuizAppImg,
  },
  {
    name: "Recipe React",
    url: "https://recipe-app-phi-sage.vercel.app/",
    githubUrl: "https://github.com/FiratSomek/Recipe-App",
    img: RecipeAppImg,
  },
  {
    name: "Spend Money React",
    url: "https://spend-money-app-orpin.vercel.app/",
    githubUrl: "https://github.com/FiratSomek/spend-money-app",
    img: SpendMoneyAppImg,
  },
];

export const MyProjects = () => {
  const [projects, setProjects] = useState<ProjectReact[]>(initialProject);
  return (
    <div className="project-container">
      <div>
        <Typography variant="h4">Projects</Typography>
      </div>
      <div className="card-body-1">
        {projects.map((project) => (
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "20px",
              width: "200px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link
              href={project.url}
              underline="none"
              color="inherit"
              target="_blank"
            >
              <CardMedia
                component="img"
                alt={project.name}
                image={project.img}
                title={project.name}
                sx={{ height: 150 }}
              />
              <CardContent>
                <Typography variant="body2" component="div">
                  {project.name}
                </Typography>
              </CardContent>
            </Link>
            <CardActions>
              <Button
                variant="outlined"
                href={project.githubUrl}
                target="_blank"
                color="inherit"
              >
                Show Code
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
