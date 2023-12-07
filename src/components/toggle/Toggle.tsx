export default function Toggle({
  label,
  value,
  callback,
}: {
  label: string;
  value: string;
  callback: (e: any) => void;
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value={value}
        name={value}
        className="sr-only peer"
        onChange={callback}
      />
      <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:absolute after:top-[4px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
      <span className="ms-2 text-sm font-medium ">{label}</span>
    </label>
  );
}
