export const ProductSkeleton = () => {
	return (
		<div className="bg-neutral-200 animate-pulse rounded-lg w-full h-[400px] pt-10 px-4 flex flex-col justify-between">
			<div className="header">
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[40px] block mb-10" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[10px] block mb-2" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[10px] block mb-2" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[10px] block mb-2" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[10px] block mb-2" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[10px] block mb-2" />
			</div>
			<div className="footer">
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[25px] block mb-4" />
				<div className="bg-neutral-300 animate-pulse rounded-lg w-full h-[50px] block mb-4" />
			</div>
		</div>
	)
}