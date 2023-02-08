export default function ({
  SQsize,
  BRsize,
  fSize,
}: {
  SQsize: number;
  BRsize: number;
  fSize: number;
}) {
  const loaderSize = `w-[${SQsize}px] h-[${SQsize}px]`;
  const loaderBrSize = `border-${BRsize} `;
  const loaderMrSize = `-mb-${BRsize} -mr-${BRsize}`;
  const fontSize = `text-[${fSize}px]`;
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col">
          <div className="flex">
            <div
              className={`${
                loaderSize + loaderBrSize + loaderMrSize
              } flex justify-center items-center `}
            >
              <div className={`${fontSize} font-bold`}></div>
            </div>
            <div
              className={`${
                loaderSize + " " + loaderBrSize + " " + loaderMrSize
              } flex justify-center items-center c_move`}
            >
              <div className={`${fontSize} font-bold`}>C</div>
            </div>
            <div
              className={`${
                loaderSize + " " + loaderBrSize + " " + loaderMrSize
              } flex justify-center items-center `}
            >
              <div className={`${fontSize} font-bold`}>A</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
