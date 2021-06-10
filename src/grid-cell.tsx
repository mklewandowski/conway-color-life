import React from "react";

import "./grid-cell.css";

interface IProps {
  index: number;
  onSelectCell: () => void;
  isRunning: boolean;
  color: string;
}

export const GridCell: React.FC<IProps> = (props) => {
  const { color, isRunning, onSelectCell} = props;
  return (
    <div className="cell" style={{backgroundColor: color}} onClick={() => !isRunning && onSelectCell()}/>
  );
}
