import React from "react";

function SkillsCard({ onAnimation, id, name, iconImg }) {
  return (
    <>
      <div
        className='w-40 h-40  cursor-pointer rounded-4xl  text-center  border-2 items-center flex flex-col justify-center '
        onClick={() => onAnimation(id)}>
        <div>
          <img
            className='w-24 h-24 cursor-pointer'
            src={iconImg}
            alt='icon-img'
          />
          <h1 className='text-xl '>{name}</h1>
        </div>
      </div>
    </>
  );
}

export default SkillsCard;
