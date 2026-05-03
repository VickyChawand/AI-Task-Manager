import { ReactNode } from "react";


type FormInputProps = {
  label: string;
  sublabel?: string;
  type?:string;
  firstIcon?: ReactNode;
  secondIcon?: ReactNode;
};

const FormInput = ({label, sublabel, type, firstIcon, secondIcon}:any) => {
    return(
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-[11px] font-semibold text-[#505F76] uppercase dark:text-[#C7C4D8]">{label}</span>
                <span className="text-[11px] font-semibold text-[#3525CD] uppercase dark:text-[#C3C0FF]">{sublabel}</span>
            </div>
            <div className="md:w-full flex justify-start items-center p-2 gap-2 bg-[#F2F4F6] rounded-lg dark:bg-[#33353A] dark:border-[#494555]/30 dark:border-1 dark:border-solid">
                {
                    firstIcon && 
                    <div className="flex justify-center items-center size-3 text-[#777587] dark:text-[#918F9A]">
                        {firstIcon}
                    </div>
                }
                <input type={type} className="border-none outline-none bg-transparent text-[#777587] w-full dark:text-[#918F9A]"/>
                {
                    secondIcon &&
                    <div className="flex justify-center items-center size-3 text-[#777587] dark:text-[#918F9A]">
                        {secondIcon}
                    </div>
                }
            </div>
        </div>
    )
  }

export default FormInput;