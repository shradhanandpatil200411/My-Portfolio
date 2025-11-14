function SkillsCard({ onAnimation, id, name, iconImg, index }) {
  return (
    <>
      <div
        className='w-40 h-40 cursor-pointer rounded-4xl  text-center  items-center flex flex-col justify-center '
        style={
          index == id
            ? {
                backdropFilter: "blur(24px)",
                webkitBackdropFilter: "blur(5px)",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }
            : { backgroundColor: "transparent" }
        }
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
