import clsx from 'clsx'

const Card = ({ info, logo, side }) => {
  const { name, number, month, year, cvc } = info

  return (
    <div
      className={clsx(
        `w-[285px] h-[156px] lg:w-[447px] lg:h-[245px] px-5 py-4  lg:px-8 lg:py-6  bg-cover rounded-md lg:rounded-xl overflow-hidden flex flex-col justify-between relative shadow-xl`,
        side === 'front'
          ? "bg-[url('/bg-card-front.png')] self-start -translate-y-16 z-10 lg:translate-y-0"
          : "bg-[url('/bg-card-back.png')] self-end "
      )}
    >
      {side === 'front' && (
        <>
          <img src={logo} alt="" className="w-14 lg:w-20" />
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={number}
              placeholder="0000 0000 0000 0000"
              className="text-lg lg:text-[28px] tracking-widest bg-transparent text-white placeholder:text-white pointer-events-none w-full"
            ></input>
            <div className="flex justify-between">
              <input
                type="text"
                value={name}
                placeholder="JANE APPLESEED"
                className="text-[10px] lg:text-base uppercase tracking-wide bg-transparent text-white placeholder:text-white pointer-events-none"
              ></input>
              <div className="flex gap-0.5 w-fit lg:gap-1">
                <input
                  type="text"
                  value={month}
                  placeholder="00"
                  className="text-[10px] lg:text-base uppercase tracking-wide bg-transparent text-white placeholder:text-white pointer-events-none w-4 lg:w-8 text-right"
                ></input>
                <div className="text-white text-[10px] lg:text-base w-fit">
                  /
                </div>
                <input
                  type="text"
                  value={year}
                  placeholder="00"
                  className="text-[10px] lg:text-base uppercase tracking-wide bg-transparent text-white placeholder:text-white pointer-events-none w-4 lg:w-8"
                ></input>
              </div>
            </div>
          </div>
        </>
      )}
      {side === 'back' && (
        <input
          type="text"
          value={cvc}
          placeholder="000"
          className="text-xs lg:text-lg uppercase tracking-wide bg-transparent text-white placeholder:text-white pointer-events-none absolute top-16 left-56 lg:left-[350px] lg:top-[102px] p-1 w-8 lg:w-12"
        ></input>
      )}
    </div>
  )
}
export default Card
