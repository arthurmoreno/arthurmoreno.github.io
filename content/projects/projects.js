import imgExample from "../../src/images/example.png"
import imgGatsby from "../../src/images/Petro-Draconic-Menu_background.jpg"

const projects = [
  {
    id: "aeon-arc",
    title: "Aeon Arc",
    genre: "Interactive Fiction",
    engine: "Gatsby / React",
    thumbnail: imgExample,
    description:
      "A compact interactive vignette exploring cyclical timelines and branching narrators.",
  },
  {
    id: "loom-tapestry",
    title: "Loom Tapestry",
    genre: "Puzzle / Art",
    engine: "Gatsby / Canvas",
    thumbnail: imgGatsby,
    description: "A tactile puzzle that weaves visuals and sound into emergent patterns.",
  },
  {
    id: "obsidian-brief",
    title: "Obsidian Brief",
    genre: "Visual Novel",
    engine: "Unity (WebGL)",
    thumbnail: imgExample,
    description: "A noir micro-novel with branching choices and minimalist visuals.",
  },
  {
    id: "atlas-flip",
    title: "Atlas Flip",
    genre: "Portfolio / Demo",
    engine: "Custom WebGL",
    thumbnail: imgGatsby,
    description: "A portfolio piece demonstrating layered parallax and interactive page states.",
  },
]

export default projects
