import { FaLaptopCode } from "react-icons/fa";
import ContainerBorder from "./ContainerBorder";
import ContainerHeader from "./ContainerHeader";

function ProjectsComponent() {
	return (
		<ContainerBorder>
			<ContainerHeader
				title='Projects'
				desc='Discrover what ve been doing lately'
				icon={<FaLaptopCode className='w-5 h-5 text-emerald-400' />}
			/>
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
	);
}

export default ProjectsComponent;
