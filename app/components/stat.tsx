const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center gap-2 sm:items-start">
    <p className="text-[0.6875rem] text-cool-blue dark:text-white sm:text-[0.8125rem]">
      {label}
    </p>
    <p className="font-bold uppercase text-charcoal dark:text-white sm:text-[1.375rem]">
      {value}
    </p>
  </div>
)

export default Stat
