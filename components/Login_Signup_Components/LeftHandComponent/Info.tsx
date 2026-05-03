import appLogo from "@/public/images/app_logo.png"
import backdrop from "@/public/images/backdrop.png"
import { BsStars } from "react-icons/bs";
import Image from "next/image";

type InfoField = {
    title: string,
    subtitle: string,
    description: string,
    insight: string,
}


const Info = ({title, subtitle, description, insight}:InfoField) => {
    return(
        <div className="max-w-xs flex flex-col items-start justify-center gap-3">
            <div className="flex items-center justify-start gap-1">
                <Image src={appLogo} alt="App Logo" className="size-4"/>
                <span className="text-[#4F46E5] font-bold text-md dark:text-[#C3C0FF]">Cognitive Sanctuary</span>
            </div>
            <div className="flex flex-col">
                <h2 className="text-black font-bold text-3xl dark:text-[#fff]">{title}</h2>
                <h2 className="text-[#4F46E5] font-bold text-3xl dark:bg-gradient-to-r dark:from-[#C7C4D8] dark:to-[#4F46E5] bg-clip-text text-transparent">{subtitle}</h2>
            </div>
            <p className="text-[#64748B] font-normal text-xs dark:text-[#C7C4D8]">{description}</p>
            <div className="relative mt-4 w-[280px] h-[280px]">

            {/* Background layer */}
            <div className="bg-[#e1e2f7] w-full h-full rounded-xl rotate-2 absolute top-0 left-0 dark:bg-[#3525CD]/20" />

            {/* Image layer */}
            <div
                style={{ backgroundImage: "url('/images/backdrop.png')" }}
                className="w-full h-full inset-0 bg-cover bg-center absolute  rounded-2xl -rotate-3 flex items-end justify-center p-4 overflow-hidden"
            >
                
                {/* Insight Card */}
                <div className="flex items-center gap-2 bg-[#eff1f3cc] px-3 py-2 rounded-xl shadow-md dark:bg-[#1D2023]">
                
                {/* Icon */}
                <div className="w-6 h-6 rounded-lg bg-[#1D00A5] flex items-center justify-center bg-linear-to-br from-[#C3C0FF] to-[#4F46E5]">
                    <BsStars color="white" size={12} />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                    <h6 className="text-[#4F46E5] text-[9px] font-semibold uppercase dark:text-[#C3C0FF]">
                    Daily Insight
                    </h6>
                    <p className="text-[10px] text-black dark:text-[#E0E3E5]">
                    {insight}
                    </p>
                </div>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Info;