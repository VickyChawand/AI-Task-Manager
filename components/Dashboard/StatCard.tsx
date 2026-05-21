
type StatCardItem = {
  label: string;
  value: string;
  icon: React.ElementType;
  cardClass: string;
  iconWrapperClass: string;
  iconClass: string;
  labelClass: string;
  valueClass: string;
};


function StatCard({ item }: { item: StatCardItem }) {
  const Icon = item.icon;

  return (
    <div
      className={[
        "rounded-2xl p-4 transition hover:shadow-md h-[150px]",
        item.cardClass,
      ].join(" ")}
    >
      <div
        className={[
          "mb-4 flex size-8 items-center justify-center rounded-md",
          item.iconWrapperClass,
        ].join(" ")}
      >
        <Icon size={16} className={item.iconClass} />
      </div>

      <p
        className={[
          "text-[11px] font-semibold uppercase tracking-wide",
          item.labelClass,
        ].join(" ")}
      >
        {item.label}
      </p>

      <h3
        className={[
          "mt-1 text-2xl font-bold leading-none",
          item.valueClass,
        ].join(" ")}
      >
        {item.value}
      </h3>
    </div>
  );
}

export default StatCard;