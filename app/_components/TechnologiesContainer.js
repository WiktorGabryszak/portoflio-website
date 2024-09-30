import ContainerBorder from "./ContainerBorder";
import ContainerHeader from "./ContainerHeader";

function TechnologiesContainer() {
	return (
		<ContainerBorder>
			<ContainerHeader title='My Technologies' desc='My kdsmdmsds dmsmdsmd sdmsmdmds' />
			<div className='p-6 pt-0'>
				<div className='grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2'>
					<button className='relative flex flex-row items-center gap-2 py-2 px-2 rounded-2xl bg-background hover:bg-background/70 cursor-pointer transition group'>
						<div className='flex flex-row items-center gap-1 bg-containerBg p-2 rounded-xl border border-green-400/50'></div>
						<span className='text-md text-gray-400 font-semibold'>React</span>
					</button>
					<button className='relative flex flex-row items-center gap-2 py-2 px-2 rounded-2xl bg-background hover:bg-background/70 cursor-pointer transition group'>
						<div className='flex flex-row items-center gap-1 bg-containerBg p-2 rounded-xl border border-green-400/50'></div>
						<span className='text-md text-gray-400 font-semibold'>React</span>
					</button>
					<button className='relative flex flex-row items-center gap-2 py-2 px-2 rounded-2xl bg-background hover:bg-background/70 cursor-pointer transition group'>
						<div className='flex flex-row items-center gap-1 bg-containerBg p-2 rounded-xl border border-green-400/50'></div>
						<span className='text-md text-gray-400 font-semibold'>React</span>
					</button>
					<button className='relative flex flex-row items-center gap-2 py-2 px-2 rounded-2xl bg-background hover:bg-background/70 cursor-pointer transition group'>
						<div className='flex flex-row items-center gap-1 bg-containerBg p-2 rounded-xl border border-green-400/50'></div>
						<span className='text-md text-gray-400 font-semibold'>React</span>
					</button>
					<button className='relative flex flex-row items-center gap-2 py-2 px-2 rounded-2xl bg-background hover:bg-background/70 cursor-pointer transition group'>
						<div className='flex flex-row items-center gap-1 bg-containerBg p-2 rounded-xl border border-green-400/50'></div>
						<span className='text-md text-gray-400 font-semibold'>React</span>
						<img
							src='peta.jpg'
							className='w-7 h-7 text-primary opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 ml-auto transition'
						/>
					</button>
				</div>
			</div>
		</ContainerBorder>
	);
}

export default TechnologiesContainer;
