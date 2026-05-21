import {
  Circle,
  Pause,
  Timer,
  MoreHorizontal,
} from "lucide-react";
import { IoTimerOutline } from "react-icons/io5";

type TaskPriority = "Urgent" | "Marketing" | "Medium" | "Dev";

type TaskItem = {
  id: number;
  title: string;
  time: string;
  badges: TaskPriority[];
  avatars?: string[];
  count?: number;
};

type HighlightItem = {
  id: number;
  title: string;
  time: string;
};

const priorityClassMap: Record<TaskPriority, string> = {
  Urgent: "bg-[var(--color-tertiary)]/10 text-[var(--color-tertiary)]",
  Marketing: "bg-[var(--color-primary-container)]/5 text-[var(--color-primary-container)]",
  Medium: "bg-[var(--color-surface-high)] text-[var(--color-secondary)]",
  Dev: "bg-[var(--color-primary-container)]/5 text-[var(--color-primary-container)]",
};

const todayTasks: TaskItem[] = [
  {
    id: 1,
    title: "Finalize Brand Strategy Deck",
    time: "10:00 AM",
    badges: ["Urgent", "Marketing"],
    avatars: [
      "https://i.pravatar.cc/40?img=11",
      "https://i.pravatar.cc/40?img=12",
    ],
  },
  {
    id: 2,
    title: "Q1 Performance Analytics Review",
    time: "01:30 PM",
    badges: ["Medium"],
    avatars: ["https://i.pravatar.cc/40?img=14"],
  },
  {
    id: 3,
    title: "Sync with Engineering Team",
    time: "04:00 PM",
    badges: ["Dev"],
    count: 4,
  },
];

const upcomingHighlights: HighlightItem[] = [
  {
    id: 1,
    title: "Design Critique",
    time: "Tomorrow at 10:00 AM",
  },
  {
    id: 2,
    title: "Coffee with Alex",
    time: "Wednesday at 3:00 PM",
  },
];

export default function TodayTasksSection() {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_230px] xl:grid-cols-[1fr_260px]">
      <div className="rounded-2xl bg-transparent p-5">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-[var(--color-on-surface)]">
              Today's Tasks
            </h2>
            <p className="mt-1 text-xs text-[var(--color-secondary)]">
              March 24, 2024
            </p>
          </div>

          <button className="text-xs font-semibold rounded-full p-2 text-[var(--color-primary)] hover:bg-[var(--color-primary-container)]/10 cursor-pointer">
            View All
          </button>
        </div>

        <div className="space-y-3">
          {todayTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      <ActiveSessionCard />
    </section>
  );
}

function TaskCard({ task }: { task: TaskItem }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-[var(--color-surface-low)]/50 p-4 transition hover:bg-[var(--color-neutral)] hover:shadow-md hover:shadow-[var(--shadow-glow)]">
      <div className="flex min-w-0 items-center gap-4">
        <button
          className="flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-primary-container)]/30 hover:border-[var(--color-primary-container)] cursor-pointer"
          aria-label="Mark task complete"
        >
        </button>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-[var(--color-on-surface)]">
            {task.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1 text-[11px] text-[var(--color-secondary)]">
              <IoTimerOutline size={12}/>
              {task.time}
            </span>

            {task.badges.map((badge) => (
              <TaskBadge key={badge} label={badge} />
            ))}
          </div>
        </div>
      </div>

      <TaskAssignees avatars={task.avatars} count={task.count} />
    </div>
  );
}

function TaskBadge({ label }: { label: TaskPriority }) {
  return (
    <span
      className={[
        "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide",
        priorityClassMap[label],
      ].join(" ")}
    >
      {label}
    </span>
  );
}

function TaskAssignees({
  avatars,
  count,
}: {
  avatars?: string[];
  count?: number;
}) {
  if (count) {
    return (
      <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600">
        +{count}
      </div>
    );
  }

  if (!avatars?.length) {
    return (
      <button className="text-[var(--color-secondary)]">
        <MoreHorizontal size={18} />
      </button>
    );
  }

  return (
    <div className="flex shrink-0 -space-x-2">
      {avatars.map((avatar) => (
        <img
          key={avatar}
          src={avatar}
          alt="Assignee"
          className="size-7 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>
  );
}

function ActiveSessionCard() {
  return (
    <aside className="rounded-2xl bg-[var(--color-surface-high)] p-5">
      <h2 className="mb-5 text-lg font-semibold text-[var(--color-on-surface)]">
        Active Session
      </h2>

      <FocusTimer />

      <div className="mt-5">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[var(--color-secondary)]/50">
          Upcoming Highlights
        </p>

        <div className="space-y-4">
          {upcomingHighlights.map((item) => (
            <HighlightItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function FocusTimer() {
  return (
    <div className="rounded-xl bg-white p-5 text-center">

      <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
        Focus Timer
      </p>

      <h3 className="mt-2 text-4xl font-extrabold text-[var(--color-on-surface)]">
        24:58
      </h3>

      <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-on-surface)] px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90">
        <Pause size={12} />
        Pause Focus
      </button>
    </div>
  );
}

function HighlightItemCard({ item }: { item: HighlightItem }) {
  return (
    <div className="border-l-2 border-[var(--color-primary)] pl-3">
      <h3 className="text-sm font-bold text-[var(--color-on-surface)]">
        {item.title}
      </h3>
      <p className="mt-1 text-xs text-[var(--color-secondary)]">
        {item.time}
      </p>
    </div>
  );
}