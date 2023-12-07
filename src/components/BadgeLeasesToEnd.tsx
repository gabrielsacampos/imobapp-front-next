


interface BadgeLeasesProps {
	hasPending: boolean;
}

export function BadgeLeasesToEnd({hasPending} : BadgeLeasesProps ) {
  if (hasPending) {
    return (
      <div className="border border-red-600 text-red-600 bg-red-600/10 rounded-full  w-min hover:bg-red-500 hover:text-white transition">
        <p className="px-2 right-0">Inadimplente</p>
      </div>
    );
  } else {
    return <></>;
  }
}
