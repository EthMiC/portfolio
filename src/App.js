import './App.css';
import ContentTab from "./components/ContentTab";
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="links">
        <Router>
          <Link to="https://www.ethmic.icu" target="_blank"><img src={"/portfolio/link_images/web.svg"}></img></Link>
          <Link to="https://github.com/EthMiC" target="_blank"><img src={"/portfolio/link_images/github.svg"}></img></Link>
          <Link to="https://ethmic.itch.io" target="_blank"><img src={"/portfolio/link_images/itchio.svg"}></img></Link>
          <div onClick={()=>{
            navigator.clipboard.writeText("amannegesse@gmail.com");
            alert("Email has been added to your clipboard.");
            }}>
              <img src={"/portfolio/link_images/mail.svg"}></img>
          </div>
        </Router>
      </div>
      <div className="introduction">
        <h1 className="title">Hi, I'm Aman</h1>
        <p className="description">I'm a Generalist Game developer and a full stack developer</p>
      </div>
      <h2 className="project-title">Projects</h2>
      <div className="projects">
        {ContentTab("Raytracing Engine", "/portfolio/thumbnails/a.png", "A path finding algorithm that runs on the cpu", ["JavaScript"], "https://ethmic.github.io/RayTracing/", "https://github.com/EthMiC/RayTracing")}
        {ContentTab("Cubemarching Algorithm", "/portfolio/thumbnails/b.png", "A cubemarching algorithm made in the godot game engine", ["GameDev", "Godot", "GDscript"], "", "https://github.com/EthMiC/CubeMarchingGame")}
        {ContentTab("A* pathfinding", "/portfolio/thumbnails/c.png", "An A* pathfinding implementation done using JavaScript", ["GameDev", "JavaScript"], "https://ethmic.github.io/Astar/", "https://github.com/EthMiC/Astar")}
        {/* {ContentTab("Double064", "/portfolio/thumbnails/a.png", "An online coding game about a robotic spy", ["JavaScript", "TypeScript", "Nextjs", "reactjs"])} */}
        {ContentTab("Deep Dark Colonial", "/portfolio/thumbnails/d.png", "A survival game where u have to protect ur base from enemy attacks", ["GameDev", "Godot", "GDscript"], "https://ethmic.itch.io/deep-dark-colonial")}
        {ContentTab("Trafic meyham", "/portfolio/thumbnails/e.png", "A fast paced game where u play as a traffic light manager", ["GameDev", "Unity"], "https://ethmic.itch.io/traffic-meyhem")}
        {ContentTab("Survivatory", "/portfolio/thumbnails/f.png", "A claustrophobic action game where ur life is tied to ur attack", ["GameDev", "Unity"], "https://ethmic.itch.io/survivatory")}
        {ContentTab("RunAway", "/portfolio/thumbnails/g.png", "A time highscore survival game", ["GameDev", "Unity"], "https://ethmic.itch.io/runaway")}
        {ContentTab("midGround City", "/portfolio/thumbnails/h.png", "A town builder game", ["GameDev", "Unity"], "https://cheesehead-games.itch.io/midground-city")}
      </div>
    </div>
  );
}

export default App;