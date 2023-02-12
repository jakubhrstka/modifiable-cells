import React, { useState } from "react";

interface ICellProps {
  cell: string;
  idx: number;
  cellsLength: number;
  handleCellsAdd: (idx: number) => void;
  handleCellDelete: (idx: number) => void;
  handleCellsEdit: (newCellValue: string, idx: number) => void;
}

function Cell({
  cell,
  idx,
  cellsLength,
  handleCellsEdit,
  handleCellsAdd,
  handleCellDelete,
}: ICellProps) {
  return (
    <>
      <label className="relative group h-16 w-16 border-2 border-solid border-white rounded-md flex justify-center items-center">
        <input
          value={cell}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleCellsEdit(e.currentTarget.value, idx)
          }
          placeholder="_"
          className="bg-transparent w-14 text-center focus-visible:outline-none"
        ></input>
        {cellsLength > 1 && (
          <div
            onClick={() => handleCellDelete(idx)}
            className="absolute bottom-[-8px] bg-red-800 w-full text-center rounded-md cursor-pointer hidden group-hover:block"
          >
            delete
          </div>
        )}
      </label>
      {(idx < cellsLength - 1 || cellsLength === 1) && (
        <div
          onClick={() => handleCellsAdd(idx)}
          className="h-16 w-4 flex justify-center items-center cursor-pointer hover:bg-slate-700"
        >
          +
        </div>
      )}
    </>
  );
}

export default Cell;
