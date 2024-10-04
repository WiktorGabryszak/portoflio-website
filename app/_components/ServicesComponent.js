import { FaReact } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { HiArrowRight } from "react-icons/hi2";
import ContainerHeader from "./ContainerHeader";
import ContainerBorder from "./ContainerBorder";

function ServicesComponent() {
	return (
		<ContainerBorder>
			<ContainerHeader
				title='Services'
				desc='all servces that i provide'
				icon={<GrServices className='w-5 h-5 text-emerald-400' />}
			/>
			<div className='flex flex-col gap-4 relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)] pb-12 px-6'>
				<ul className='flex min-w-full shrink-0 w-max gap-2 flex-nowrap'>
					<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
						<div className='flex gap-3 items-center'>
							<div className='bg-zinc-700/35 rounded-xl p-2'>
								<FaReact className='w-7 h-7 text-zinc-400' />
							</div>
							<p className='text-lg text-zinc-200/90 font-medium'>Web Development</p>
						</div>
						<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
					</div>
					<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
						<div className='flex gap-3 items-center'>
							<div className='bg-zinc-700/35 rounded-xl p-2'>
								<FaReact className='w-7 h-7 text-zinc-400' />
							</div>
							<p className='text-lg text-zinc-200/90 font-medium'>Mobile App Development</p>
						</div>
						<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
					</div>
					<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
						<div className='flex gap-3 items-center'>
							<div className='bg-zinc-700/35 rounded-xl p-2'>
								<FaReact className='w-7 h-7 text-zinc-400' />
							</div>
							<p className='text-lg text-zinc-200/90 font-medium'>Seo</p>
						</div>
						<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
					</div>
				</ul>
				<ul className='flex min-w-full shrink-0 w-max gap-2 flex-nowrap'>
					<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
						<div className='flex gap-3 items-center'>
							<div className='bg-zinc-700/35 rounded-xl p-2'>
								<FaReact className='w-7 h-7 text-zinc-400' />
							</div>
							<p className='text-lg text-zinc-200/90 font-medium'>SEO</p>
						</div>
						<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
					</div>
					<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-1.5 pl-1.5 pr-3 group cursor-pointer'>
						<div className='flex gap-3 items-center'>
							<div className='bg-zinc-700/35 rounded-xl p-2'>
								<FaReact className='w-7 h-7 text-zinc-400' />
							</div>
							<p className='text-lg text-zinc-200/90 font-medium'>Mobile App Development</p>
						</div>
						<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
					</div>
				</ul>
				<button className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-3 bg-purple-800 w-48 rounded-xl text-zinc-200'>
					View My Projects
				</button>
			</div>
		</ContainerBorder>
	);
}

export default ServicesComponent;
