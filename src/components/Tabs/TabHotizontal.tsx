import * as Tabs from "@radix-ui/react-tabs";

export type TabsProps = {
  lables: string[];
};

export function HorizontalTab({ lables }: TabsProps) {
  return (
    <>
      {lables.map((lable) => {
        return (
          <Tabs.Root
            key={lable}
            className="border-b-2 rounded-sm w-16 text-xs text-gray-400 opacity-60 mt-1 hover:border-indigo-500 hover:text-indigo-500 cursor-pointer"
          >
            <Tabs.List>
              <Tabs.Trigger value={`tab-${lable}`}>{lable}</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value={lable} />
          </Tabs.Root>
        );
      })}
    </>
  );
}
