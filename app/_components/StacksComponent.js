import { FaReact } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { PiStackSimpleFill } from "react-icons/pi";
import ContainerHeader from "./ContainerHeader";
import ContainerBorder from "./ContainerBorder";

function StacksComponent() {
	return (
		<ContainerBorder>
			<ContainerHeader
				title='My Stacks'
				desc='Lorem lorem lorem lorum'
				icon={<PiStackSimpleFill className='w-5 h-5 text-emerald-400' />}
			/>
			<div className='grid grid-cols-2 grid-rows-2 gap-2 px-5 pb-8'>
				<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
					<div className='flex gap-3 items-center'>
						<div className='bg-zinc-700/35 rounded-xl p-2'>
							<FaReact className='w-7 h-7 text-zinc-400' />
						</div>
						<p className='text-lg text-zinc-200/90 font-medium'>React</p>
					</div>
					<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
				</div>
				<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
					<div className='flex gap-3 items-center'>
						<div className='bg-zinc-700/35 rounded-xl p-2'>
							<FaReact className='w-7 h-7 text-zinc-400' />
						</div>
						<p className='text-lg text-zinc-200/90 font-medium'>React</p>
					</div>
					<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
				</div>
				<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
					<div className='flex gap-3 items-center'>
						<div className='bg-zinc-700/35 rounded-xl p-2'>
							<FaReact className='w-7 h-7 text-zinc-400' />
						</div>
						<p className='text-lg text-zinc-200/90 font-medium'>React</p>
					</div>
					<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
				</div>
				<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
					<div className='flex gap-3 items-center'>
						<div className='bg-zinc-700/35 rounded-xl p-2'>
							<FaReact className='w-7 h-7 text-zinc-400' />
						</div>
						<p className='text-lg text-zinc-200/90 font-medium'>React</p>
					</div>
					<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
				</div>
			</div>
		</ContainerBorder>
	);
}

export default StacksComponent;
