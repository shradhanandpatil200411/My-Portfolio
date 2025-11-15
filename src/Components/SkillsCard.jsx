import { mySkillData } from "../Data/data";

function SkillsCard({ paraRef, index, isDetails, setIsDetails }) {
  return (
    <>
      <div
        ref={paraRef}
        className='text-white w-10/12 h-11/12 rounded-2xl p-5 backdrop-blur-3xl bg-white/20 '
        style={{
          boxShadow: `5px 10px 20px ${mySkillData[index].color2} `,
        }}>
        <div>
          <div className='flex justify-evenly'>
            <div
              className={`cursor-pointer font-semibold`}
              style={
                isDetails
                  ? { color: "white" }
                  : { color: `${mySkillData[index].color3}` }
              }
              onClick={() => setIsDetails(false)}>
              Overview
            </div>
            <div
              className='cursor-pointer font-semibold'
              style={
                isDetails
                  ? { color: `${mySkillData[index].color3}` }
                  : { color: "white" }
              }
              onClick={() => {
                setIsDetails(true);
              }}>
              Details
            </div>
          </div>
          {isDetails ? (
            <div className='mt-5'>
              {mySkillData[index].relatedTech.map((data, index) => (
                <ul key={index}>
                  <li className='text-sm my-1'>
                    <span className='font-semibold'>{data.name}</span> :{" "}
                    <span>{data.dis}</span>{" "}
                  </li>
                </ul>
              ))}
            </div>
          ) : (
            <div className='mt-2'>
              <div className='flex items-center gap-5'>
                <img
                  className='w-20 h-20'
                  src={mySkillData[index].iconImg}
                  alt='icon-img'
                />
                <h1 className='text-xl'>V {mySkillData[index].version}</h1>
              </div>

              <p className='mt-2'>{mySkillData[index].dis}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SkillsCard;
