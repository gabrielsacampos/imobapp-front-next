

export function CardSkeleton(){
    return(
        <div role="status" className="flex h-32 w-44 animate-pulse rounded-lg bg-gray-100">
  <div className="w-full mt-2 ">
    <div className="h-1/3">
      <div className="flex flex-col items-center gap-2">
        <div className="mx-5 h-4 w-32 rounded-full bg-zinc-200"></div>
        <div className="mx-5 h-4 w-24 rounded-full bg-zinc-200"></div>
      </div>
    </div>

    <div className="h-2/3  flex items-center justify-center">
      <div className="w-[150px] h-[50px] bg-zinc-200 rounded-full"></div>
    </div>
  </div>
</div>

    )
}
