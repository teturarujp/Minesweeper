import { useState, useEffect } from 'react';
import { Tile } from "./Tile.tsx";

const Board_w = 5;
const Board_h = 5;

export const Board = () => {
  const [board_data, set_board_data] = useState(Array.from(Array(Board_h), () => Array(Board_w)));
  const [mine_data, set_mine_data] = useState(Array.from(Array(Board_h), () => Array(Board_w).fill(false)));
  //const [mark_data, set_mark_data] = useState(array);

  useEffect(() => {
    const setable = [];
    for (let i = 0; i < Board_h; i++) {
      for (let j = 0; j < Board_w; j++) {
        setable.push([i,j]);
      }
    }
    for (let i = 0; i < 10; i++) {
      const mine_point = setable.splice(Math.floor(Math.random() * setable.length), 1)[0];
      const _mine_data = mine_data.slice();
      _mine_data[mine_point[0]][mine_point[1]] = 1;
      set_mine_data(_mine_data);
    }
    const _board_data = board_data.slice();
    for (let i = 0; i < 7; i++) {
      const open_point = setable.splice(Math.floor(Math.random() * setable.length), 1)[0];
      _board_data[open_point[0]][open_point[1]] = mine_count(open_point[0], open_point[1]);
      set_board_data(_board_data);
    }

  }, [])

  function handleClick(i: number, j: number): void {
    const _board_data = board_data.slice();

    if (!mine_data[i][j]) {

      _board_data[i][j] = mine_count(i, j);
      set_board_data(_board_data);
    } else {
      _board_data[i][j] = -1;
      set_board_data(_board_data);
      alert("地雷を突いてしまった！");
    }
  }

  function mine_count(i: number, j: number): number {
    let count = 0;
    for (let di = -1; di < 2; di++) {
      for (let dj = -1; dj < 2; dj++) {
        if (i+di < 0 || j+dj < 0) continue;
        if (i+di >= Board_h || j+dj >= Board_w) continue;
        if (mine_data[i+di][j+dj]) count++;
      }
    }
    return count;
  }

  const board = [];
  for (let i = 0; i < Board_h; i++) {
    for (let j = 0; j < Board_w; j++) {
      board.push(<Tile value={board_data[i][j]} onTileClick={() => handleClick(i, j)} />)
    }
  }

  return (
    <>
      {board}
    </>
  )
}
