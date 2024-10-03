import { FaDownload, FaQuora, FaQuoteRight, FaReact, FaVoicemail } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import ContainerBorder from "./_components/ContainerBorder";
import ContainerHeader from "./_components/ContainerHeader";
import ProfileItem from "./_components/ProfileItem";

export default function Home() {
	return (
		<>
			<div className='flex flex-col md:flex-row gap-5'>
				<div className='flex flex-col h-full justify-start relative gap-5 lg:w-[50vh] w-[350px]'>
					<ContainerBorder>
						<ContainerHeader title='My Stacks' desc='Lorem lorem lorem lorum' />
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
					<ContainerBorder>
						<ContainerHeader title='Projects' desc='Discrover what ve been doing lately' />
						<div className='scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_90%,transparent)] pb-12 px-6'>
							<ul className='flex min-w-full shrink-0 gap-2 w-max flex-nowrap'>
								<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-[100px]' />
								<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-[100px]' />
								<img src='/app1.png' className='rounded-xl w-1/2 max-w-4xl h-[100px]' />
							</ul>
							<button className='absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-3 bg-purple-800 w-48 rounded-xl text-zinc-200'>
								View My Projects
							</button>
						</div>
					</ContainerBorder>
					<ContainerBorder>
						<ContainerHeader title='services' desc='all servces that i provide' />
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
				</div>
				<div className='flex flex-col h-full justify-start relative gap-5 lg:w-[70vh] w-[350px]'>
					<ContainerBorder>
						<div className='p-6 pt-0 mt-5 flex flex-col gap-6'>
							<div className='flex items-center gap-4'>
								<img src='/peta.jpg' width={150} height={150} className='rounded-2xl' />
								<div className='flex flex-col ml-4 gap-y-3'>
									<div className='flex mb-auto items-center justify-center py-2 px-4 bg-zinc-800/50 rounded-full border border-zinc-800 text-md gap-1 w-fit'>
										<span className='text-md font-semibold text-gray-400'>Available to Work</span>
									</div>
									<h1 className='text-3xl font-bold text-zinc-200 px-2'>Wikor Gabryszak</h1>
									<div className='text-lg text-gray-400 font-semibold px-2'>
										<div className='flex items-center gap-1'>
											<p>I&apos;m a</p>
											<span className='text-accent font-black ml-1'>(Here Animation)</span>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-wrap gap-2 rounded-2xl py-5 px-5 w-full bg-zinc-800/25 border border-zinc-800/50'>
								<ProfileItem title='English & Polish' icon='' />
								<ProfileItem title='Poland' icon='' />
								<ProfileItem title='Sci-Fi Fan' icon='' />
								<ProfileItem title='Freelancer' icon='' />
								<ProfileItem title='Freelancer' icon='' />
								<ProfileItem title='Freelancer' icon='' />
							</div>

							<button className='inline-flex items-center justify-center rounded-2xl text-base font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-4 w-full gap-2 border-zinc-800/50 border'>
								<FaDownload />
								<span>Download a Resume</span>
							</button>
						</div>
					</ContainerBorder>
					<ContainerBorder>
						<div className='flex flex-col gap-2 px-6 py-4'>
							<div className='flex-col px-8 py-4 flex items-center justify-center mx-auto'>
								<div className='p-6 rounded-full bg-card group bg-zinc-800/50'>
									<FaVoicemail className='w-8 h-8 text-zinc-200 group-hover:scale-105 transition-all duration-300' />
								</div>
							</div>
							<div className='flex flex-col justify-center items-center container mx-auto'>
								<h2 className='text-4xl font-sans font-bold text-zinc-200'>Let&apos;s work together</h2>
								<p className='text-md font-sans font-semibold text-gray-400'>Lets bring you ideas to </p>
								<div className='flex flex-col items-center gap-3 mt-5 w-full mb-7'>
									<button className='inline-flex items-center justify-center rounded-2xl text-lg font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-4 w-full gap-2 border-zinc-800/50 border'>
										<FaDownload />
										<span>Email Me</span>
									</button>
									<button className='inline-flex items-center justify-center rounded-2xl text-lg font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-4 w-full gap-2 border-zinc-800/50 border'>
										<FaDownload />
										<span>Whats app Me</span>
									</button>
								</div>
							</div>
						</div>
					</ContainerBorder>
				</div>
				<div className='flex flex-col h-full justify-start relative gap-5 lg:w-[78vh] w-[350px]'>
					<ContainerBorder>
						<ContainerHeader title='My quotes' desc='That giev me power to work' />
						<div className='flex flex-col gap-2 items-start px-5 pb-4'>
							<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-3 pl-4 pr-4 group cursor-pointer w-[70vh]'>
								<div className='flex gap-3 items-center'>
									<div className='bg-zinc-700/35 rounded-xl p-2'>
										<FaQuoteRight className='w-7 h-7 text-zinc-400' />
									</div>
									<p className='text-lg text-zinc-200/90 font-medium'>React</p>
								</div>
								<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
							</div>
							<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-3 pl-4 pr-4 group cursor-pointer w-[70vh] self-end'>
								<div className='flex gap-3 items-center'>
									<div className='bg-zinc-700/35 rounded-xl p-2'>
										<FaReact className='w-7 h-7 text-zinc-400' />
									</div>
									<p className='text-lg text-zinc-200/90 font-medium'>React</p>
								</div>
								<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
							</div>
							<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-3 pl-4 pr-4 group cursor-pointer w-[70vh]'>
								<div className='flex gap-3 items-center'>
									<div className='bg-zinc-700/35 rounded-xl p-2'>
										<FaReact className='w-7 h-7 text-zinc-400' />
									</div>
									<p className='text-lg text-zinc-200/90 font-medium'>React</p>
								</div>
								<HiArrowRight className='w-4 h-4 text-zinc-400 group group-hover:-rotate-45 opacity-0 group-hover:opacity-100 transition' />
							</div>
							<div className='border border-zinc-800/50 bg-zinc-800/40 flex items-center rounded-2xl justify-between gap-4 py-3 pl-4 pr-4 group cursor-pointer w-[70vh] self-end'>
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
					<div className='flex items-center gap-5'>
						<ContainerBorder>
							<ContainerHeader title='Social Links' desc='here;s social accoutn where you can' />
							<div className='grid grid-cols-1 grid-rows-4 gap-2 px-5 pb-8'>
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
							<ContainerHeader title='Social Links' desc='here;s social accoutn where you can' />
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
					</div>
				</div>
			</div>
		</>
	);
}
