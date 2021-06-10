import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { GridCell } from "./grid-cell";
import { Cell, initialDeadCell, initialAliveCell, colorThemes, shapes, getGridFromShape } from "./utils";

import "./app.css";

const rows = 50;
const cols = 50;
const speeds: number[] = [500, 250, 100];

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
    const newGridCells = getGridFromShape(shape, rows, cols);
    setGridCells(newGridCells);
  }

  useEffect(() => {
    const generationUpdate = () => {
      const newGridCells: Cell[] = [];
      const arrayLength = gridCells.length;
      for (let cell = 0; cell < arrayLength; cell++) {
        let adjacentAlive = 0;
        // check the 8 adjacent squares
        adjacentAlive = adjacentAlive + (cell === 0 ? gridCells[rows * cols - 1].state : gridCells[cell - 1].state);
        adjacentAlive = adjacentAlive + (cell === (rows * cols - 1) ? gridCells[0].state : gridCells[cell + 1].state);
        adjacentAlive = adjacentAlive + ((cell - cols - 1) < 0 ? gridCells[arrayLength + (cell - cols - 1)].state : gridCells[cell - cols - 1].state);
        adjacentAlive = adjacentAlive + ((cell - cols) < 0 ? gridCells[arrayLength + (cell - cols)].state : gridCells[cell - cols].state);
        adjacentAlive = adjacentAlive + ((cell - cols + 1) < 0 ? gridCells[arrayLength + (cell - cols + 1)].state : gridCells[cell - cols + 1].state);
        adjacentAlive = adjacentAlive + ((cell + cols - 1) >= arrayLength ? gridCells[(cell + cols - 1) - arrayLength].state : gridCells[cell + cols - 1].state);
        adjacentAlive = adjacentAlive + ((cell + cols) >= arrayLength ? gridCells[(cell + cols) - arrayLength].state : gridCells[cell + cols].state);
        adjacentAlive = adjacentAlive + ((cell + cols + 1) >= arrayLength ? gridCells[(cell + cols + 1) - arrayLength].state : gridCells[cell + cols + 1].state);

        // determine new state and age
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

    let timer: any;
    if (isRunning) {
      timer = window.setInterval(() => {
        generationUpdate();
      }, speeds[currentSpeed]);
    }
    return () => {
      window.clearInterval(timer);
    };
  }, [isRunning, currentSpeed, currentColor, generation, gridCells]);

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
              onSelectCell={() => toggleCell(i)}
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
