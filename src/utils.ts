
export interface Cell {
  state: number,
  age: number;
}
export const initialDeadCell: Cell = {state: 0, age: 0};
export const initialAliveCell: Cell = {state: 1, age: 0};

export interface ColorTheme {
  name: string,
  colors: string[]
}

export const colorThemes: ColorTheme[] = [
  { name: "Purple-Yellow",
    colors: ["#8400ab", "#bb009d", "#e50089", "#ff0073", "#ff355b", "#ff6543", "#ff8e2a", "#ffb407", "#ffd900", "#fcfb2d",
    "#ffd900", "#ffb407", "#ff8e2a", "#ff6543", "#ff355b", "#ff0073", "#e50089", "#bb009d", "#8400ab"]
  },
  { name: "Orange-Blue",
    colors: ["#ff7e00", "#ff5e1c", "#ff2e33", "#ff004a", "#ff0064", "#ff0081", "#f100a0", "#cf00c1", "#9900e2", "#0000ff",
      "#9900e2", "#cf00c1", "#f100a0", "#ff0081", "#ff0064", "#ff004a", "#ff2e33", "#ff5e1c", "#ff7e00"]
  },
  { name: "Sky-Rose",
  colors: ["#00b5e2", "#19adee", "#4ba2f5", "#7795f4", "#a084ea", "#c270d6", "#dd59b9", "#ef4294", "#f5326b", "#ef3340",
    "#f5326b", "#ef4294", "#dd59b9", "#c270d6", "#a084ea", "#7795f4", "#4ba2f5", "#19adee", "#00b5e2"]
  },
  { name: "Indigo-Fuchsia",
    colors: ["#7200fe", "#8a00fb", "#9e00f8", "#b000f4", "#c000f1", "#cf00ee", "#dc00ea", "#e900e7", "#f400e4", "#ff00e1",
      "#f400e4", "#e900e7", "#dc00ea", "#cf00ee", "#c000f1", "#b000f4", "#9e00f8", "#8a00fb", "#7200fe"]
  },
  { name: "Magenta-Lime",
    colors: ["#a31746", "#b62a40", "#c73f39", "#d35530", "#dd6c24", "#e28315", "#e39b00", "#dfb400", "#d8cc02", "#cbe426",
      "#d8cc02", "#dfb400", "#e39b00", "#e28315", "#dd6c24", "#d35530", "#c73f39", "#b62a40", "#a31746"]
  },
  { name: "Green-Red",
    colors: ["#00ff00", "#6fed00", "#98db00", "#b6c700", "#cdb200", "#df9b00", "#ee8200", "#f86600", "#fe4400", "#ff0000",
      "#fe4400", "#f86600", "#ee8200", "#df9b00", "#cdb200", "#b6c700", "#98db00", "#6fed00", "#00ff00"]
  },
  { name: "Confetti",
    colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee", "#4b0082", "#0000ff", "#008000", "#ffff00", "#ffa500", "#ff0000"]
  },
  { name: "Valentine",
    colors: ["#fa6e6e", "#ff6374", "#ff587c", "#ff4b86", "#ff3d92", "#ff2da0", "#ff1ab0", "#ff02c1", "#ff00d4", "#ff00e8",
      "#ff00d4", "#ff02c1", "#ff1ab0", "#ff2da0", "#ff3d92", "#ff4b86", "#ff587c", "#ff6374", "#fa6e6e"]
  },
];

export interface Shape {
  name: string,
}

export const shapes: Shape[] = [
  { name: "Big Mug" },
  { name: "Snake" },
  { name: "Bucket" },
  { name: "Double Bucket" },
  { name: "Hexa-Bucket" },
  { name: "Glider" },
  { name: "Dragons" },
  { name: "R-Pentomino" },
];


export const getGridFromShape = (shape: string, rows: number, cols: number) => {
  const newGridCells = Array.from({length: rows * cols}, (v, i) => initialDeadCell);
  const middle = rows * cols * .5 - rows * .5;
  if (shape === "R-Pentomino") {
    newGridCells[middle - 1] = {state: 1, age: 0};
    newGridCells[middle] = {state: 1, age: 0};
    newGridCells[middle - rows] = {state: 1, age: 0};
    newGridCells[middle - rows + 1] = {state: 1, age: 0};
    newGridCells[middle + rows] = {state: 1, age: 0};
  } else if (shape === "Snake") {
    newGridCells[middle - 1] = {state: 1, age: 0};
    newGridCells[middle] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows] = {state: 1, age: 0};
    newGridCells[middle + rows] = {state: 1, age: 0};
    newGridCells[middle - rows * 2- 1] = {state: 1, age: 0};
    newGridCells[middle - rows * 2] = {state: 1, age: 0};
    newGridCells[middle + rows * 2 - 1] = {state: 1, age: 0};
    newGridCells[middle + rows * 2] = {state: 1, age: 0};
    newGridCells[middle - rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 1 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle - rows * 4 - 1] = {state: 1, age: 0};
    newGridCells[middle - rows * 4] = {state: 1, age: 0};
    newGridCells[middle + rows * 4 - 1] = {state: 1, age: 0};
    newGridCells[middle + rows * 4] = {state: 1, age: 0};
  } else if (shape === "Bucket") {
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
  } else if (shape === "Double Bucket") {
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
  } else if (shape === "Hexa-Bucket") {
    newGridCells[middle - 1 - 2] = {state: 1, age: 0};
    newGridCells[middle - 2] = {state: 1, age: 0};
    newGridCells[middle + 1 - 2] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows - 2] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 - 2] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows - 2] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 - 2] = {state: 1, age: 0};

    newGridCells[middle - 1 - 8] = {state: 1, age: 0};
    newGridCells[middle - 8] = {state: 1, age: 0};
    newGridCells[middle + 1 - 8] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows - 8] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 - 8] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows - 8] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 - 8] = {state: 1, age: 0};

    newGridCells[middle - 1 - 13] = {state: 1, age: 0};
    newGridCells[middle - 13] = {state: 1, age: 0};
    newGridCells[middle + 1 - 13] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows - 13] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 - 13] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows - 13] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 - 13] = {state: 1, age: 0};

    newGridCells[middle - 1 + 3] = {state: 1, age: 0};
    newGridCells[middle + 3] = {state: 1, age: 0};
    newGridCells[middle + 1 + 3] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows + 3] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 + 3] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows + 3] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 + 3] = {state: 1, age: 0};

    newGridCells[middle - 1 + 9] = {state: 1, age: 0};
    newGridCells[middle + 9] = {state: 1, age: 0};
    newGridCells[middle + 1 + 9] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows + 9] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 + 9] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows + 9] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 + 9] = {state: 1, age: 0};

    newGridCells[middle - 1 + 14] = {state: 1, age: 0};
    newGridCells[middle + 14] = {state: 1, age: 0};
    newGridCells[middle + 1 + 14] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows + 14] = {state: 1, age: 0};
    newGridCells[middle - 1 - rows * 2 + 14] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows + 14] = {state: 1, age: 0};
    newGridCells[middle + 1 - rows * 2 + 14] = {state: 1, age: 0};
  } else if (shape === "Dragons") {
    newGridCells[middle - 2] = {state: 1, age: 0};
    newGridCells[middle - 3] = {state: 1, age: 0};
    newGridCells[middle + 2] = {state: 1, age: 0};
    newGridCells[middle + 3] = {state: 1, age: 0};
    newGridCells[middle - 2 + rows] = {state: 1, age: 0};
    newGridCells[middle + 2 + rows] = {state: 1, age: 0};
    newGridCells[middle - 7 + rows] = {state: 1, age: 0};
    newGridCells[middle + 7 + rows] = {state: 1, age: 0};
    newGridCells[middle - 2 + rows * 2] = {state: 1, age: 0};
    newGridCells[middle + 2 + rows * 2] = {state: 1, age: 0};
    newGridCells[middle - 2 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle + 2 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 6 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle + 6 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 7 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle + 7 + rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 2 + rows * 4] = {state: 1, age: 0};
    newGridCells[middle + 2 + rows * 4] = {state: 1, age: 0};
    newGridCells[middle - 5 + rows * 4] = {state: 1, age: 0};
    newGridCells[middle + 5 + rows * 4] = {state: 1, age: 0};
    newGridCells[middle - 3 + rows * 5] = {state: 1, age: 0};
    newGridCells[middle + 3 + rows * 5] = {state: 1, age: 0};
    newGridCells[middle - 3 - rows] = {state: 1, age: 0};
    newGridCells[middle + 3 - rows] = {state: 1, age: 0};
    newGridCells[middle - 5 - rows] = {state: 1, age: 0};
    newGridCells[middle + 5 - rows] = {state: 1, age: 0};
    newGridCells[middle - 4 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle + 4 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle - 5 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle + 5 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle - 6 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle + 6 - rows * 2] = {state: 1, age: 0};
    newGridCells[middle - 5 - rows * 3] = {state: 1, age: 0};
    newGridCells[middle + 5 - rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 2 - rows * 3] = {state: 1, age: 0};
    newGridCells[middle + 2 - rows * 3] = {state: 1, age: 0};
    newGridCells[middle - 2 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle + 2 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle - 3 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle + 3 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle - 4 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle + 4 - rows * 4] = {state: 1, age: 0};
    newGridCells[middle - 3 - rows * 5] = {state: 1, age: 0};
    newGridCells[middle + 3 - rows * 5] = {state: 1, age: 0};

  } else if (shape === "Glider") {
    newGridCells[middle] = {state: 1, age: 0};
    newGridCells[middle + rows + 1] = {state: 1, age: 0};
    newGridCells[middle + rows + 2] = {state: 1, age: 0};
    newGridCells[middle + rows * 2] = {state: 1, age: 0};
    newGridCells[middle + rows * 2 + 1] = {state: 1, age: 0};
  }
  return newGridCells;
}