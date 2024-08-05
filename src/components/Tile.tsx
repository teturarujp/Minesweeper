import { useState } from 'react';

type TilePops = {
  value: number,
  onTileClick: Function
}

export const Tile = ({value, onTileClick}: TilePops) => {
  const _value = (value==-1) ? undefined : value;
  const [is_flag, set_is_flag] = useState(false);

  let bg = "";
  if (value==undefined) {
    if (is_flag) bg="bg-blue-300";
    else bg="bg-gray-100";
  }
  else {
    if (value==-1) bg="bg-red-300";
    else bg="bg-gray-500";
  }

  const onClick = (e:any, isRight?:boolean) => {
    e.preventDefault();
    if(isRight){
      console.log("right");
      set_is_flag(!is_flag);
    }else{
      if (!is_flag) onTileClick();
    }
  };

  return (
    <button className={`w-12 h-12 text-2xl font-black text-white rounded ${bg}`}
      onClick={(e)=>onClick(e)}
      onContextMenu={(e)=> onClick(e, true)} >
      {_value}
    </button>
  )
}
