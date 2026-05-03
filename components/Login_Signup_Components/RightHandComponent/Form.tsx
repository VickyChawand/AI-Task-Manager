import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiHide } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Divider } from "@mui/material";
import { IoPerson } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import FormInput from "@/components/Helpers/FormInput";

type FormProps = {
    type: string,
    title?: string,
    subTitle?: string,
    buttonLabel?: string,
    optionalTitle?: string,
    optionalButtonTitle?: string,
}

const LogInField = () => {
    return(
        <>
            <FormInput label="Email Address" type="text" firstIcon={<MdEmail />}/>
            <FormInput label="Password" sublabel="Forgot password?" type="password" firstIcon={<FaLock/>} secondIcon={<BiHide />}/>
        </>
    )
}

const SignUpFields = () => {
    return(
        <>
            <FormInput label="Full Name" type="text" firstIcon={<IoPerson />}/>
            <FormInput label="Work Email" type="email" firstIcon={<MdEmail/>}/>
            <FormInput label="Password" type="password" firstIcon={<FaLock/>} secondIcon={<BiHide/>}/>
        </>
    )
}

const Form = ({type, title, subTitle, buttonLabel, optionalTitle, optionalButtonTitle,}:FormProps) => {
    return(
        <div className="w-full max-w-sm flex flex-col justify-center items-center p-8 bg-white rounded-2xl gap-5 shadow-[0px_32px_64px_-12px_#3525cd29] dark:bg-[#1D2023]/70 dark:border-solid dark:border-1 dark:border-[#FFF]/10 dark:shadow-none">
            <div className="w-full flex flex-col items-start justify-center gap-1">
                <p className="text-black font-bold text-2xl dark:text-[#E0E3E5]">{title}</p>
                <span className="text-[#505F76] text-sm font-normal dark:text-[#C7C4D8]">{subTitle}</span>
            </div>
            <div className="w-full flex flex-col gap-4 justify-center items-center">

                {/* LogInFields */}
                {type === "Login" && <LogInField/>}

                {/* SignUpFields */}
                {type === "Signup" && <SignUpFields/>}

                <button className="w-full flex justify-center items-center px-8 py-3 text-white font-400 text-md bg-gradient-to-r from-[#3525CD] from-0% to-[#4F46E5] to-100% rounded-full gap-2 dark:bg-gradient-r from-[#C3C0FF] to-[#4F46E5]">
                    <p className="text-sm font-normal dark:text-[#0F0069]">{buttonLabel}</p>
                    <IoIosArrowRoundForward size={20}/>
                </button>

            </div>
            
            <Divider><span className="text-[#777587] text-[10px] tracking-wide font-semibold uppercase dark:text-[#918F9A]">or continue with</span></Divider>


            <button className="w-full flex justify-center items-center gap-2 p-2 border-solid border-1 border-[rgba(199, 196, 216, 0.2)] bg-[#fff] rounded-full dark:bg-[#1D2023] dark:border-[#494555]/20">
                <FaGoogle color="#D0E1FB"/>
                <span className="text-[#D0E1FB] dark:text-[#E0E3E5]">Google</span>
            </button>

            <div className="w-full flex justify-center items-center">
                <span className="text-[#505F76] text-xs font-normal dark:text-[#C7C4D8]">{optionalTitle} <span className="text-[#3525CD] font-semibold dark:text-[#C3C0FF]">{optionalButtonTitle}</span></span>
            </div>
        </div>
    )
}

export default Form;