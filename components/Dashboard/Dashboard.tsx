import { BsStars } from "react-icons/bs";
import {
  ClipboardList,
  CheckCircle2,
  Clock3,
  Zap,
  Bell,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { GoLightBulb } from "react-icons/go";
import { IoAlertOutline } from "react-icons/io5";
import StatCard from "./StatCard";
import InsightCard from "./Insight";
import TodayTasksSection from "./TodayTasksSection";
const stats = [
  {
    label: "Total Tasks",
    value: "24",
    icon: ClipboardList,
    cardClass: "bg-white",
    iconWrapperClass: "bg-indigo-50",
    iconClass: "text-[var(--color-primary)]",
    labelClass: "text-[var(--color-on-surface-variant)]",
    valueClass: "text-[var(--color-on-surface)]",
  },
  {
    label: "Completed",
    value: "18",
    icon: CheckCircle2,
    cardClass: "bg-white",
    iconWrapperClass: "bg-[var(--color-secondary-container)]/40",
    iconClass: "text-[var(--color-on-surface-variant)]",
    labelClass: "text-[var(--color-on-surface-variant)]",
    valueClass: "text-[var(--color-on-surface-variant)]",
  },
  {
    label: "Pending",
    value: "06",
    icon: Clock3,
    cardClass: "bg-white",
    iconWrapperClass: "bg-orange-50",
    iconClass: "text-[var(--color-tertiary)]",
    labelClass: "text-[var(--color-tertiary)]",
    valueClass: "text-[var(--color-tertiary)]",
  },
  {
    label: "Productivity",
    value: "92%",
    icon: Zap,
    cardClass: "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:shadow-lg hover:shadow-indigo-200",
    iconWrapperClass: "bg-white/20",
    iconClass: "text-white",
    labelClass: "text-white/80",
    valueClass: "text-white",
  },
];

const insights: InsightCard[] = [
  {
    title: "Priority Alert",
    description: "You have 3 high-priority tasks due before 2:00 PM today.",
    icon: <IoAlertOutline size={19}/>,
    status: "high",
  },
  {
    title: "Insight",
    description:
      'Completing the "Brand Strategy" task first will unlock 4 other team dependencies.',
    icon: <GoLightBulb size={19}/>,
    status:"low",
  },
];


const DashboardComponent = () => {
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-ceter items-start gap-3">
                <span className="text-4xl text-[var(--color-on-surface)] font-bold">Good Morning, Vicky</span>
                <div className="flex items-center gap-2  text-[var(--color-secondary)]">
                    <BsStars size={12}/>
                    <span className="text-sm  font-normal">The AI has optimised your schedule, You have a productive day ahead.</span>
                </div>
            </div>
             <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_230px] lg:grid-cols-[1fr_270px]">
                {/* Stats */}
                <div className=" grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((item) => (
                    <StatCard key={item.label} item={item} />
                    ))}
                </div>

                {/* Optimize Card */}
                <aside className="rounded-2xl bg-white p-5 relative
    before:content-['']
    before:absolute
    before:w-90 before:h-90
    before:bg-[var(--gradient-from)]
    before:rounded-full
    before:shadow-[0px_0px_14px_13px_#3525cd3b]
    before:right-0
    before:top-[10%]
    before:-z-[1000]">
                    <div className="mb-5 flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-full bg-[var(--color-primary-container)] text-white shadow-lg shadow-[var(--shadow-glow)]">
                            <Zap size={16} />
                        </div>
                        <h2 className="text-xl font-semibold text-[var(--color-on-surface)]">
                            Optimize your day
                        </h2>
                    </div>

                    <div className="space-y-4">
                    {insights.map((item) => (
                        <InsightCard key={item.title} item={item} />
                    ))}
                    </div>

                    <button className="mt-5 flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/50">
                    Full AI Analysis
                    <ArrowRight size={14} />
                    </button>
                </aside>

            </div>
            <TodayTasksSection/>
        </div>
    )
}

export default DashboardComponent;

