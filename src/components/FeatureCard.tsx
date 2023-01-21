import { useState } from "react";

type voteCreditOptions = 0 | 1 | 2;
interface Props {
  title: string;
  desc: string;
  type: string;
  iconName: string;
  votes: number;
}

export default function FeatureCard({
  title,
  desc,
  iconName,
  type,
  votes,
}: Props) {
  const [voted, setVoted] = useState<boolean>(false);
  // useState<{ no: boolean; yes: boolean }>({
  //   no: false,
  //   yes: false,
  // });
  const [voteCredit, setVoteCredit] = useState<{
    no: voteCreditOptions;
    yes: voteCreditOptions;
  }>({
    no: 1,
    yes: 1,
  });
  const [canVote, setCanVote] = useState<{ no: boolean; yes: boolean }>({
    no: true,
    yes: true,
  });
  const [voteCount, setVoteCount] = useState<number>(votes);

  const handleUpVote = () => {
    if (!voted) {
      console.log("first");

      setVoteCount((prev) => prev + 1);
      setVoteCredit((prev) => ({ no: 2, yes: 0 }));
      setCanVote((prev) => ({ yes: false, no: true }));
      setVoted(true);
    } else {
      console.log("chnage");
      if (voteCredit.yes === 2) {
        setVoteCredit((prev) => ({ no: 1, yes: 1 }));
        setVoteCount((prev) => prev + 1);
      } else if (voteCredit.yes === 1) {
        setVoteCredit((prev) => ({ no: 2, yes: 0 }));
        setVoteCount((prev) => prev + 1);
      } else if (voteCredit.yes === 0) {
        setCanVote((prev) => ({ yes: false, no: true }));
      }
    }
  };

  const handleDownVote = () => {
    if (!voted) {
      setVoteCount((prev) => prev - 1);
      setVoteCredit((prev) => ({ yes: 2, no: 0 }));
      setCanVote((prev) => ({ yes: true, no: false }));
      setVoted(true);
    } else {
      if (voteCredit.no === 2) {
        setVoteCredit((prev) => ({ yes: 1, no: 1 }));
        setVoteCount((prev) => prev - 1);
      } else if (voteCredit.no === 1) {
        setVoteCredit((prev) => ({ yes: 2, no: 0 }));
        setVoteCount((prev) => prev - 1);
      } else if (voteCredit.no === 0) {
        setCanVote((prev) => ({ yes: true, no: false }));
      }
    }
  };
  console.log(voted, canVote, voteCredit);

  return (
    <>
      <div className="relative block rounded-xl border border-slate-800 px-8 pt-3 pb-8 shadow-xl max-w-[400px] overflow-hidden">
        <span className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
          4.3
        </span>

        <div className=" text-gray-500 sm:pr-4">
          <span className="material-icons text-4xl">{iconName}</span>

          <h3 className="mt-4 text-xl font-bold ">{title}</h3>

          <p className="mt-2 text-sm">{desc}</p>

          <div className="flex justify-between mt-9 ">
            <div>
              <span className="material-icons-outlined uppercase border rounded-xl py-3 px-4 text-app-color-400">
                {type}
              </span>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                className="material-icons cursor-pointer text-red-500 disabled:text-opacity-20"
                onClick={handleDownVote}
                disabled={!canVote.no ? true : false}
              >
                remove
              </button>
              <span
                className={` ${
                  voteCount > 0
                    ? "text-green-600"
                    : voteCount == 0
                    ? ""
                    : "text-red-600"
                }`}
              >
                {voteCount}
              </span>
              <button
                type="button"
                className={`text-green-500 material-icons cursor-pointer disabled:text-opacity-20
                }`}
                onClick={handleUpVote}
                disabled={!canVote.yes ? true : false}
              >
                add
              </button>
            </div>

            <div className="badge badge-success text-xs absolute right-1/2 transform translate-x-1/2 -bottom-7 transition-all duration-200">
              Already voted!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
