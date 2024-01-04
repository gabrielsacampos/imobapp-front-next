type ButtonProps = {
  lable: string;
  loader?: JSX.Element;
};

export function Button({ lable, loader }: ButtonProps) {
  return (
    <button className="bg-zinc-800 hover:bg-zinc-900 hover:outline hover:border-white/20 text-white font-bold py-2 px-4 rounded-md mx-2 text-xs h-8">
      {lable}
    </button>
  );
}
