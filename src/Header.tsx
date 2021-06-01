import React, { useState } from "react";

import "./Header.css";

export const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header className="header">
      CONWAY COLOR LIFE
      <div className="description">
        Conway Color Life is an example of a cellular automaton, a collection of cells that change over time based on a set of simple rules. Click cells to turn them alive, and then press the Start button to see what happens.
        {!expanded && <div className="expand" onClick={() => setExpanded(true)}>Learn More<i className="fas fa-angle-down icon" /></div>}
        {expanded &&
          <div className="more-content">
            <div>Cells are either alive or dead. At each generation a cell is marked as alive or dead based on the following rules:</div>
            <ul>
              <li>A living cell with less than 2 neighbors dies</li>
              <li>A living cell with 2 or 3 neighbors lives</li>
              <li>A living cell with more than 3 neighbors dies</li>
              <li>A dead cell with 3 living neighbors becomes alive</li>
            </ul>
            <div>With each generation that a cell survives, the cell ages. Cells change color as they age based on the selected color theme.</div>
            <div className="expand" onClick={() => setExpanded(false)}>Less<i className="fas fa-angle-up icon" /></div>
          </div>
        }
      </div>
    </header>
  );
}