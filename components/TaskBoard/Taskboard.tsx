import { ReactNode, useState } from "react";
import { IoIosList } from "react-icons/io";
import { TbLayoutKanban } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

const Priority = [
    {id:1, label:"High"},
    {id:2, label:"Medium"},
    {id:3, label:"Low"},
]

const Tags = [
    {id:1, label:"Design"},
    {id:2, label:"Implementation"},
    {id:3, label:"Documentation"},
]

const SortOrder = [
    {id:1, label:"Newest First"},
    {id:2, label:"Pending"},
    {id:3, label:"Closed"},
]

type DropDownType = {
    icon: ReactNode,
    label: string,
    options: Array<any>,
}

const DropDown = ({icon, label, options}: DropDownType) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    const toggleDropDown = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (data : string) => {
        setValue(data);
        setIsOpen(false);   
    }

    return(
        <div className="flex justify-center">
            <div className="relative inline-block">
                {/* Dropdown button */}
                <button className="inline-flex justify-center items-center gap-1 bg-[var(--color-surface-low)] hover:bg-[var(--color-surface-high)] cursor-pointer rounded-md text-[var(--color-on-surface)] font-normal text-base"
                onClick={toggleDropDown}>
                    {icon}
                    {label}
                    <IoIosArrowDown/>
                </button>

                {/* Dropdown Menu */}
                {
                    isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {options.map((option : any) => (
                                    <div key={option.id} onClick={() => handleSelect(option.label)} className="block px-4 py-2 text-sm text-black hover:bg-grey-100">
                                        {option.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                )}
            </div>
        </div>
    )
}
const TaskBoard = () => {
    return(
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl text-[var(--color-on-surface)] font-semibold">Task Ecosystem</h2>
                    <p className="text-xs text-[var(--color-secondary)] font-semibold">You have <span className="text-[var(--color-primary)]">12 focus items</span> for today.</p>
                </div>
                <div className="bg-[var(--color-surface-low)] rounded-full py-1 px-2 flex justify-between items-center gap-5">
                    <button className="bg-[#fff] rounded-full text-md text-[var(--color-primary)] shadow-md px-5 py-1 gap-2 flex justify-center items-center"> <IoIosList/> List</button>
                    <button className="text-md text-[var(--color-secondary)] px-5 py-1 gap-2 flex justify-center items-center"><TbLayoutKanban/> Kanban</button>
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div></div>
            </div>
        </div>
    )
}

export default TaskBoard;