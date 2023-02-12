import { useState } from "react";

import Cell from "../Cell/Cell";

function Cells() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const handleCellsAdd = (idx: number) => {
    setCells((prevCells) => {
      const beforeInsertArr = prevCells.slice(0, idx + 1);
      const afterInsertArr = prevCells.slice(idx + 1);

      const newArr = beforeInsertArr.concat("").concat(afterInsertArr);

      return newArr;
    });
  };

  const handleCellDelete = (idx: number) => {
    setCells((prevCells) => {
      const beforeInsertArr = prevCells.slice(0, idx);
      const afterInsertArr = prevCells.slice(idx + 1);

      const newArr = beforeInsertArr.concat(afterInsertArr);

      return newArr;
    });
  };

  const handleCellsEdit = (newCellValue: string, idx: number) => {
    setCells((prevCells) =>
      prevCells.map((cell, cellIdx) => (cellIdx === idx ? newCellValue : cell))
    );
  };

  return (
    <div className="flex">
      {cells.map((cell, idx) => (
        <Cell
          key={idx}
          cell={cell}
          idx={idx}
          cellsLength={cells.length}
          handleCellsAdd={handleCellsAdd}
          handleCellsEdit={handleCellsEdit}
          handleCellDelete={handleCellDelete}
        />
      ))}
    </div>
  );
}

export default Cells;
