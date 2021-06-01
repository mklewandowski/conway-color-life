import React from "react";

import "./GridCell.css";

interface IProps {
  index: number;
  toggleCell: () => void;
  isRunning: boolean;
  color: string;
}

export const GridCell: React.FC<IProps> = (props) => {
  const { color, isRunning, toggleCell} = props;
  return (
    <div className="cell" style={{backgroundColor: color}} onClick={() => !isRunning && toggleCell()}/>
  );
}