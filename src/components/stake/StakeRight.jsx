import React from "react";
import ethblack from "@/assets/ethblack.png";
import ethwhite from "@/assets/ethwhite.png"
import Image from "next/image";

const StakeRight = () => {
  return (
    <div className="bg-[#1B1C1E] h-full p-10 rounded-[1.5rem] w-full flex flex-col gap-6">
      <div className="flex items-center gap-12 justify-between w-full ">
        <div className="bg-primary py-8 w-full relative rounded-[1.2rem]">
          <div className="bg-[#121215] px-5 py-0.5 rounded-full absolute -top-5 left-5">
            <p className="font-bebas text-lg">reward pool</p>
          </div>
          <div className="flex items-center">
            <div className="w-16">
              <Image src={ethblack} alt="" />
            </div>
            <p className="font-mont font-extrabold text-[#1B1C1E] text-3xl">
              00.0000
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4  w-full ">
          <div className="bg-[#121215] shadow-[12px_12px_30px_0px_#00000059] rounded-3xl flex items-center justify-between py-4 px-6">
            <p className="text-primary text-lg font-bebas">user balance</p>
            <p className="text-2xl font-extrabold font-mont">1,234,567</p>
          </div>
          <div className="bg-[#121215] shadow-[12px_12px_30px_0px_#00000059] rounded-3xl flex items-center justify-between py-4 px-6">
            <p className="text-primary text-lg font-bebas">user balance</p>
            <p className="text-2xl font-extrabold font-mont">1,234,567</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 justify-between ">

        <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3 w-full">
          <div className="bg-[#1B1C1E] text-center py-0.5 px-5 rounded-full">
            <p className="font-bebas text-sm text-primary">
              pending payout
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-9">
              <Image src={ethblack} alt="ETH Icon" />
            </div>
            <p className="font-mont text-2xl text-[#1B1C1E] font-extrabold ml-2">
              00.000
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3 w-full">
          <div className="bg-[#1B1C1E] text-center py-0.5 px-5 rounded-full">
            <p className="font-bebas text-sm text-primary">
              pending payout
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-9">
              <Image src={ethblack} alt="ETH Icon" />
            </div>
            <p className="font-mont text-2xl text-[#1B1C1E] font-extrabold ml-2">
              00.000
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[1rem] flex flex-col gap-2 items-start p-3 w-full">
          <div className="bg-[#1B1C1E] text-center py-0.5 px-5 rounded-full">
            <p className="font-bebas text-sm text-primary">
              pending payout
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-9">
              <Image src={ethblack} alt="ETH Icon" />
            </div>
            <p className="font-mont text-2xl text-[#1B1C1E] font-extrabold ml-2">
              00.000
            </p>
          </div>
        </div>

      </div>

      <div className="bg-[#121215] p-8 rounded-[3rem] h-full ">
        <div className="bg-[#1A1B1D] w-full h-full rounded-[2rem]">
          <div className="flex justify-between">
            <div className="bg-primary w-34 text-center rounded-full py-1.5">
              <p className="font-mont font-extrabold text-sm text-[#1A1B1D]">STAKE</p>
            </div>
            <div className="bg-white w-34 text-center rounded-full py-1.5">
              <p className="font-mont font-extrabold text-sm text-[#1A1B1D]">WITHDRAW</p>
            </div>
          </div>
        
          <p className="font-mont font-extrabold text-lg w-2/4 text-center mx-auto ">Stake your <span className="text-primary">MUGI</span> to start earning <span className="text-primary">ETH</span> rewards</p>

          <div className="mx-auto my-8 w-12 bg-[#FFFFFF3B] h-1 rounded-full"></div>

          <div className="flex gap-3 justify-center w-full">
            <input type="number" placeholder="0" className="bg-white border-0 w-1/2 outline-0 font-mont font-extrabold text-[#1B1C1E] text-xl rounded-full px-5 py-2"/>
            <div className="bg-primary anim py-2 px-5 rounded-[0.8rem]">
              <p className="ont-mont font-extrabold text-[#1B1C1E] text-xl ">MAX</p>
            </div>
          </div>

          <div className="flex items-center justify-center py-12 px-6 gap-6">
            <div className="bg-[#111111] shadow-[6.68px_6.68px_17.81px_0px_#00000059] rounded-[1.2rem] overflow-hidden flex-1/3">
              <p className="bg-primary pt-1.5 pb-0.5 text-center w-full font-bebas text-xs text-[#1B1C1E]">
              expected  earnings : 7 days
              </p>
              <div className="flex items-center justify-center py-4">
                <div className="w-10">
                  <Image src={ethwhite} alt="ETH Icon" />
                </div>
                <p className="font-mont text-xl text-white font-extrabold ml-2">
                  00.000
                </p>
              </div>
            </div>

            <div className="bg-[#111111] shadow-[3.47px_5.79px_7.2px_0px_#00000040] rounded-[1.2rem] relative flex-1/2 ">
              <div className="py-1 px-4 rounded-full bg-primary absolute -top-4 left-4">
                <p className="text-[#1B1C1E] font-bebas text-xs pt-0.5">STAKING AMOUNT</p>
              </div>

              <div className="flex w-full items-center justify-center gap-4 py-7 px-4">
                <div className="bg-[#363940] h-1 rounded-full flex items-center w-full">
                  <div className="bg-primary h-2 rounded-full w-[50%]"></div>
                </div>
                <div className="bg-[#363940] rounded-[0.8rem] px-3 py-2">
                  <p className="text-xs font-mont font-extrabold">79%</p>
                </div>
              </div>
            </div>
          </div>
<div className="w-full flex justify-center">

          <div className="bg-primary rounded-full py-1 px-7">
            <p className="font-bad text-[#1B1C1E] text-3xl">CONFIRM</p>
          </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default StakeRight;
