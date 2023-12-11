type TabProps = {
  items: string[];
};

export function Tab({ items }: TabProps) {
  return (
    <div className="grid">
      <div className="border w-full mt-5 text-white flex justify-between bg-gray-800 rounded-sm border-white/10">
        {items.map((item) => {
          return (
            <div
              key={item}
              className="w-full m-1 text-center border text-zinc-400 rounded-md border-white/10 hover:cursor-pointer hover:bg-indigo-900 hover:text-zinc-200 hover:border-white/40 transition-colors"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
