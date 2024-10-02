import { FaReact } from "react-icons/fa";
import Container from "./_components/Container";
import ContainerHeader from "./_components/ContainerHeader";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import ContainerBorder from "./_components/ContainerBorder";

export default function Home() {
	return (
		<>
			<div className='flex flex-col h-full justify-start relative gap-5'>
				<ContainerBorder>
					<ContainerHeader title='My Stacks' desc='Lorem lorem lorem lorum' />
					<div className='grid grid-cols-2 grid-rows-2 gap-2 px-5 pb-8 w-[50vh]'>
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
				<ContainerBorder>
					<ContainerHeader title='Projects' desc='Discrover what ve been doing lately' />
					<div className='scroller relative z-20 w-[50vh] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
						<ul className='flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap services-slider hover:[animation-play-state:paused]'>
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
							<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-24' />
						</ul>
					</div>
					<button>View My Projects</button>
				</ContainerBorder>
			</div>
		</>
	);
}
