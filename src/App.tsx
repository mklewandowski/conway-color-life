import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { GridCell } from "./GridCell";

import "./App.css";

const rows = 50;
const cols = 50;
interface Cell {
  state: number,
  age: number;
}
const initialDeadCell: Cell = {state: 0, age: 0};
const initialAliveCell: Cell = {state: 1, age: 0};

const speeds: number[] = [500, 250, 100];

interface ColorTheme {
  name: string,
  colors: string[]
}

const colorThemes: ColorTheme[] = [
  { name: "Purple-Yellow",
    colors: ["#8400ab", "#bb009d", "#e50089", "#ff0073", "#ff355b", "#ff6543", "#ff8e2a", "#ffb407", "#ffd900", "#fcfb2d",
    "#ffd900", "#ffb407", "#ff8e2a", "#ff6543", "#ff355b", "#ff0073", "#e50089", "#bb009d", "#8400ab"]
  },
  { name: "Green-Red",
    colors: ["#00ff00", "#6fed00", "#98db00", "#b6c700", "#cdb200", "#df9b00", "#ee8200", "#f86600", "#fe4400", "#ff0000",
      "#fe4400", "#f86600", "#ee8200", "#df9b00", "#cdb200", "#b6c700", "#98db00", "#6fed00", "#00ff00"]
  },
  { name: "Orange-Blue",
    colors: ["#ff7e00", "#ff5e1c", "#ff2e33", "#ff004a", "#ff0064", "#ff0081", "#f100a0", "#cf00c1", "#9900e2", "#0000ff",
      "#9900e2", "#cf00c1", "#f100a0", "#ff0081", "#ff0064", "#ff004a", "#ff2e33", "#ff5e1c", "#00ff00"]
  },
  { name: "Rainbow",
    colors: ["#ff0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#ff0000"]
  },
  { name: "Pinks",
    colors: ["#fa6e6e", "#ff6374", "#ff587c", "#ff4b86", "#ff3d92", "#ff2da0", "#ff1ab0", "#ff02c1", "#ff00d4", "#ff00e8",
      "#ff00d4", "#ff02c1", "#ff1ab0", "#ff2da0", "#ff3d92", "#ff4b86", "#ff587c", "#ff6374", "#fa6e6e"]
  },
];

interface Shape {
  name: string,
}

const shapes: Shape[] = [
  { name: "U" },
  { name: "Big Mug" },
  { name: "Double U" },
  { name: "Glider" },
  { name: "R-Pentomino" },
];

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(1);
  const [generation, setGeneration] = useState(0);
  const [gridCells, setGridCells] = useState(Array.from({length: rows * cols}, (v, i) => initialDeadCell));

  const toggleCell = (index: number) => {
    const newGridCells = [...gridCells];
    newGridCells[index] = newGridCells[index].state === 0 ? initialAliveCell : initialDeadCell;
    setGridCells(newGridCells);
  }

  const clearGrid = () => {
    const newGridCells = Array.from({length: rows * cols}, (v, i) => initialDeadCell);
    setGridCells(newGridCells);
    setGeneration(0);
  }

  const setShape = (shape: string) => {
    const newGridCells = Array.from({length: rows * cols}, (v, i) => initialDeadCell);
    const middle = rows * cols * .5 - rows * .5;
    if (shape === "R-Pentomino") {
      newGridCells[middle - 1] = {state: 1, age: 0};
      newGridCells[middle] = {state: 1, age: 0};
      newGridCells[middle - rows] = {state: 1, age: 0};
      newGridCells[middle - rows + 1] = {state: 1, age: 0};
      newGridCells[middle + rows] = {state: 1, age: 0};
    } else if (shape === "U") {
      newGridCells[middle - 1] = {state: 1, age: 0};
      newGridCells[middle] = {state: 1, age: 0};
      newGridCells[middle + 1] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows * 2] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows * 2] = {state: 1, age: 0};
    } else if (shape === "Big Mug") {
      newGridCells[middle - 5] = {state: 1, age: 0};
      newGridCells[middle - 2] = {state: 1, age: 0};
      newGridCells[middle - 1] = {state: 1, age: 0};
      newGridCells[middle] = {state: 1, age: 0};
      newGridCells[middle + 1] = {state: 1, age: 0};
      newGridCells[middle + 2] = {state: 1, age: 0};
      newGridCells[middle + 5] = {state: 1, age: 0};

      newGridCells[middle - 5 + rows] = {state: 1, age: 0};
      newGridCells[middle - 4 + rows] = {state: 1, age: 0};
      newGridCells[middle - 3 + rows] = {state: 1, age: 0};
      newGridCells[middle - 2 + rows] = {state: 1, age: 0};
      newGridCells[middle - 1 + rows] = {state: 1, age: 0};
      newGridCells[middle + rows] = {state: 1, age: 0};
      newGridCells[middle + 1 + rows] = {state: 1, age: 0};
      newGridCells[middle + 2 + rows] = {state: 1, age: 0};
      newGridCells[middle + 3 + rows] = {state: 1, age: 0};
      newGridCells[middle + 4 + rows] = {state: 1, age: 0};
      newGridCells[middle + 5 + rows] = {state: 1, age: 0};

      newGridCells[middle - 2 + rows * 2] = {state: 1, age: 0};
      newGridCells[middle - 1 + rows * 2] = {state: 1, age: 0};
      newGridCells[middle + rows * 2] = {state: 1, age: 0};
      newGridCells[middle + 1 + rows * 2] = {state: 1, age: 0};
      newGridCells[middle + 2 + rows * 2] = {state: 1, age: 0};

      newGridCells[middle - 5 - rows] = {state: 1, age: 0};
      newGridCells[middle - 4 - rows] = {state: 1, age: 0};
      newGridCells[middle - 3 - rows] = {state: 1, age: 0};
      newGridCells[middle - 2 - rows] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows] = {state: 1, age: 0};
      newGridCells[middle - rows] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows] = {state: 1, age: 0};
      newGridCells[middle + 2 - rows] = {state: 1, age: 0};
      newGridCells[middle + 3 - rows] = {state: 1, age: 0};
      newGridCells[middle + 4 - rows] = {state: 1, age: 0};
      newGridCells[middle + 5 - rows] = {state: 1, age: 0};

      newGridCells[middle + 2 - rows * 2] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows * 2] = {state: 1, age: 0};
      newGridCells[middle - rows * 2] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows * 2] = {state: 1, age: 0};
      newGridCells[middle - 2 - rows * 2] = {state: 1, age: 0};
    } else if (shape === "Double U") {
      newGridCells[middle - 1 - 2] = {state: 1, age: 0};
      newGridCells[middle - 2] = {state: 1, age: 0};
      newGridCells[middle + 1 - 2] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows - 2] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows * 2 - 2] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows - 2] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows * 2 - 2] = {state: 1, age: 0};

      newGridCells[middle - 1 + 3] = {state: 1, age: 0};
      newGridCells[middle + 3] = {state: 1, age: 0};
      newGridCells[middle + 1 + 3] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows + 3] = {state: 1, age: 0};
      newGridCells[middle - 1 - rows * 2 + 3] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows + 3] = {state: 1, age: 0};
      newGridCells[middle + 1 - rows * 2 + 3] = {state: 1, age: 0};
    } else if (shape === "Glider") {
      newGridCells[middle] = {state: 1, age: 0};
      newGridCells[middle + rows + 1] = {state: 1, age: 0};
      newGridCells[middle + rows + 2] = {state: 1, age: 0};
      newGridCells[middle + rows * 2] = {state: 1, age: 0};
      newGridCells[middle + rows * 2 + 1] = {state: 1, age: 0};
    }
    setGridCells(newGridCells);
  }

  const generationUpdate = () => {
    const newGridCells: Cell[] = [];
    const arrayLength = gridCells.length;
    for (let cell = 0; cell < arrayLength; cell++) {
      let adjacentAlive = 0;
      // prev
      adjacentAlive = adjacentAlive + (cell === 0 ? gridCells[rows * cols - 1].state : gridCells[cell - 1].state);
      // next
      adjacentAlive = adjacentAlive + (cell === (rows * cols - 1) ? gridCells[0].state : gridCells[cell + 1].state);
      // row below
      adjacentAlive = adjacentAlive + ((cell - cols - 1) < 0 ? gridCells[arrayLength + (cell - cols - 1)].state : gridCells[cell - cols - 1].state);
      adjacentAlive = adjacentAlive + ((cell - cols) < 0 ? gridCells[arrayLength + (cell - cols)].state : gridCells[cell - cols].state);
      adjacentAlive = adjacentAlive + ((cell - cols + 1) < 0 ? gridCells[arrayLength + (cell - cols + 1)].state : gridCells[cell - cols + 1].state);
      // row above
      adjacentAlive = adjacentAlive + ((cell + cols - 1) >= arrayLength ? gridCells[(cell + cols - 1) - arrayLength].state : gridCells[cell + cols - 1].state);
      adjacentAlive = adjacentAlive + ((cell + cols) >= arrayLength ? gridCells[(cell + cols) - arrayLength].state : gridCells[cell + cols].state);
      adjacentAlive = adjacentAlive + ((cell + cols + 1) >= arrayLength ? gridCells[(cell + cols + 1) - arrayLength].state : gridCells[cell + cols + 1].state);

      const isAlive = gridCells[cell].state === 1;
      if (adjacentAlive === 3 || (adjacentAlive === 2 && isAlive)) {
        const age = gridCells[cell].age + 1;
        newGridCells.push({age: isAlive ? age % colorThemes[currentColor].colors.length : 0, state: 1})
      } else {
        newGridCells.push(initialDeadCell);
      }
    }
    setGridCells(newGridCells);
    setGeneration(generation + 1);
  }

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = window.setInterval(() => {
        generationUpdate();
      }, speeds[currentSpeed]);
    }
    return () => { // Return callback to run on unmount.
      window.clearInterval(timer);
    };
  }, [isRunning, generationUpdate]); // Pass in empty array to run useEffect only on mount.

  const handleChange = (event: any) => {
    setCurrentSpeed(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
        <div className="themes">
          Choose Color Theme
          { colorThemes.map((theme, i) =>
              <button key={`theme-${i}`} onClick={() => setCurrentColor(i)}>{theme.name}</button>
          )}
        </div>

        <div className="grid">
          { gridCells.map((cell, i) =>
            <GridCell
              key={`cell-${i}`}
              index={i}
              toggleCell={() => toggleCell(i)}
              isRunning={isRunning}
              color={cell.state === 0 ? "aliceblue" : colorThemes[currentColor].colors[cell.age]}
            />
          )}
        </div>

        <div className="shapes">
          Add Shape
          { shapes.map((shape, i) =>
              <button key={`shape-${i}`} onClick={() => setShape(shape.name)}>{shape.name}</button>
          )}
        </div>

      </div>

      <div className="generation">Current Generation: {generation}</div>
      <div className="control-buttons">
        <button disabled={isRunning} onClick={() => setIsRunning(true)}>Start</button>
        <button disabled={!isRunning} onClick={() => setIsRunning(false)}>Stop</button>
        <button disabled={isRunning} onClick={() => clearGrid()}>Clear</button>
        <div className="slider-container">
          <input type="range" min="0" max="2" value={currentSpeed} className="slider" id="myRange" onChange={handleChange} />
          <div>
            <span className="speed">Slow</span>
            <span className="speed">Med</span>
            <span className="speed">Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
