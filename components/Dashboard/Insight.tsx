type InsightCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: string;
};


function InsightCard({ item }: { item: InsightCard }) {

  const bgStyle = item.status === "high" ? "bg-[var(--gradient-from)]/5 border-l-3 border-solid border-[var(--gradient-from)]" :" bg-[var(--color-secondary-container)]/20";
  const iconStyle = item.status === "high" ? "text-[var(--gradient-from)]" : "text-[var(--color-on-surface-variant)]";
  const titleStyle = item.status === "high" ? "text-[var(--gradient-from)]" : "text-[var(--color-on-surface)]";

  return (
    <div className={["flex justify-start items-start gap-3 rounded-2xl p-4", bgStyle].join(' ')}>
      <div className={["mt-1 flex  shrink-0 items-center justify-center rounded-full bg-trasparent", iconStyle].join(' ')}>
        {item.icon}
      </div>

      <div>
        <h3 className={["text-md font-bold", titleStyle].join(' ')}>{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-[var(--color-on-surface-variant)]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default InsightCard;