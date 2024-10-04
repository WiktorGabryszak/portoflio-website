import { FaDownload, FaFolder, FaQuoteRight, FaReact, FaVoicemail } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { HiArrowRight } from "react-icons/hi2";
import ContainerBorder from "./_components/ContainerBorder";
import ContainerHeader from "./_components/ContainerHeader";
import ProfileItem from "./_components/ProfileItem";
import StacksComponent from "./_components/StacksComponent";
import ProjectsComponent from "./_components/ProjectsComponent";
import ServicesComponent from "./_components/ServicesComponent";
import ProfileComponent from "./_components/ProfileComponent";
import ContactComponent from "./_components/ContactComponent";
import Footer from "./_components/Footer";

export default function Home() {
	return (
		<>
			<div className='flex flex-col md:flex-row gap-5'>
				<div className='flex flex-col h-full justify-start relative gap-5 lg:w-[50vh] w-[350px]'>
					<StacksComponent />
					<ProjectsComponent />
					<ServicesComponent />
				</div>
				<div className='flex flex-col h-full justify-start relative gap-5 lg:w-[70vh] w-[350px]'>
					<ProfileComponent />
					<ContactComponent />
					<Footer />
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
