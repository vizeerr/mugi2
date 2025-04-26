import Image from "next/image";
import React from "react";
import ethblack from "@/assets/ethblack.png";

const StakeLeft = () => {
  return (
    <div className="bg-[#1B1C1E] rounded-[1.5rem] flex flex-col items-center px-8 h-full w-full">
      <div className="bg-primary p-6 rounded-[1.5rem] relative w-[70%]">
        <div className="absolute -top-4 left-0 flex justify-center w-full">
          <div className="bg-[#121215] py-1 px-4 rounded-full">
            <p className="font-bebas text-xs pt-0.5">
              total rewards distributed among top buyers
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-16">
              <Image src={ethblack} alt="ETH Icon" />
            </div>
            <p className="text-[#121215] text-2xl font-mont font-extrabold ml-2">
              00.00
            </p>
          </div>
          <p className="text-[#121215] text-2xl font-bebas">~ 12,345,678 USD</p>
        </div>
      </div>

      <div className="w-full mt-5 h-full mb-8 flex gap-6">
        <div className="bg-[#121215] w-full  h-full space-y-6 rounded-[1.5rem]">
          <div className="flex justify-between">
            <div className="bg-white w-[6rem] py-0.5 text-center rounded-full">
              <p className="font-bebas text-sm text-[#1B1C1E] pt-0.5">
                2 days : 13 hrs
              </p>
            </div>
            <div className="bg-primary w-[6rem] py-0.5 text-center rounded-full">
              <p className="font-bebas text-sm text-[#1B1C1E] pt-0.5">active</p>
            </div>
          </div>

          <div className="px-7 space-y-6 h-full flex flex-col">
            <div className="bg-[#1B1C1E]  border-2 border-primary rounded-3xl h-1/2 w-full" />

            <div className="flex gap-6">
              <div className="space-y-5 w-full">
                <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3">
                  <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                    <p className="font-bebas text-[0.65rem] text-primary">
                      market cap
                    </p>
                  </div>
                  <p className="font-mont text-lg text-[#1B1C1E] font-extrabold">
                    10,000
                  </p>
                </div>

                <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3">
                  <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                    <p className="font-bebas text-[0.65rem] text-primary">
                      pending payout
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-9">
                      <Image src={ethblack} alt="ETH Icon" />
                    </div>
                    <p className="font-mont text-lg text-[#1B1C1E] font-extrabold ml-2">
                      00.000
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Claimable ETH */}
              <div className="bg-primary rounded-[1.2rem] p-3 w-full">
                <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                  <p className="font-bebas text-[0.65rem] text-white">
                    claimable eth
                  </p>
                </div>

                <div className="flex items-center mt-2">
                  <div className="w-9">
                    <Image src={ethblack} alt="ETH Icon" />
                  </div>
                  <p className="font-mont text-lg text-[#1B1C1E] font-extrabold ml-2">
                    00.000 /
                  </p>
                </div>

                <div className="bg-[#121215] p-5 rounded-[1rem] shadow-2xl mt-3">
                  <div className="bg-[#FFFFFF21] w-full rounded-full h-1.5">
                    <div className="bg-white w-[60%] h-full rounded-full"></div>
                  </div>
                </div>

                <div className="bg-primary py-1 px-4 rounded-full mt-4 text-center cursor-pointer hover:opacity-90 transition">
                  <p className="font-bebas text-lg text-[#1A1B1D]">
                    claim rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#121215] w-full  h-full space-y-6 rounded-[1.5rem] flex flex-col">
          <div className="flex justify-between">
            <div className="bg-white w-[6rem] py-0.5 text-center rounded-full">
              <p className="font-bebas text-sm text-[#1B1C1E] pt-0.5">
                2 days : 13 hrs
              </p>
            </div>
            <div className="bg-primary w-[6rem] py-0.5 text-center rounded-full">
              <p className="font-bebas text-sm text-[#1B1C1E] pt-0.5">active</p>
            </div>
          </div>

          <div className="px-7 space-y-6">
            <div className="bg-[#1B1C1E] border-2 border-primary rounded-3xl h-full w-full" />

            <div className="flex gap-6">
              {/* Left column */}
              <div className="space-y-5 w-full">
                {/* Market Cap */}
                <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3">
                  <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                    <p className="font-bebas text-[0.65rem] text-primary">
                      market cap
                    </p>
                  </div>
                  <p className="font-mont text-lg text-[#1B1C1E] font-extrabold">
                    10,000
                  </p>
                </div>

                {/* Pending Payout */}
                <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3">
                  <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                    <p className="font-bebas text-[0.65rem] text-primary">
                      pending payout
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-9">
                      <Image src={ethblack} alt="ETH Icon" />
                    </div>
                    <p className="font-mont text-lg text-[#1B1C1E] font-extrabold ml-2">
                      00.000
                    </p>
                  </div>
                </div>
              </div>

              {/* Right column - Claimable ETH */}
              <div className="bg-primary rounded-[1.2rem] p-3 w-full">
                <div className="bg-[#1B1C1E] w-20 text-center py-0.5 rounded-full">
                  <p className="font-bebas text-[0.65rem] text-white">
                    claimable eth
                  </p>
                </div>

                <div className="flex items-center mt-2">
                  <div className="w-9">
                    <Image src={ethblack} alt="ETH Icon" />
                  </div>
                  <p className="font-mont text-lg text-[#1B1C1E] font-extrabold ml-2">
                    00.000 /
                  </p>
                </div>

                <div className="bg-[#121215] p-5 rounded-[1rem] shadow-2xl mt-3">
                  <div className="bg-[#FFFFFF21] w-full rounded-full h-1.5">
                    <div className="bg-white w-[60%] h-full rounded-full"></div>
                  </div>
                </div>

                <div className="bg-primary py-1 px-4 rounded-full mt-4 text-center cursor-pointer hover:opacity-90 transition">
                  <p className="font-bebas text-lg text-[#1A1B1D]">
                    claim rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-6 text-center">
        <p className="font-mont font-extrabold text-lg bg-primary py-0.5 px-5 rounded-full text-[#1B1C1E]">
          Selling or transferring your tokens will cancel your reward stream.
        </p>
      </div>
    </div>
  );
};

export default StakeLeft;
