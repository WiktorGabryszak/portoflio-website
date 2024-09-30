import ContainerBorder from "./ContainerBorder";
import ContainerGrid from "./ContainerGrid";
import ContainerHeader from "./ContainerHeader";
import ProfileContainer from "./ProfileContainer";
import ProjectsSlider from "./ProjectsSlider";
import ServicesContainer from "./ServicesContainer";
import Slider from "./Slider";

export default function Container() {
	return (
		<>
			<ContainerGrid>
				<div className='border shadow-sm rounded-xl border-borderColor bg-containerBG'>
					<ContainerHeader title='Projects' desc='Some procjuect i work on' />
					<ProjectsSlider />
					<ProjectsSlider />
				</div>
			</ContainerGrid>

			<div className='grid grid-cols-1 gap-4 2xl:h-fit'>
				<ServicesContainer />
				<ProfileContainer />
				<div className='grid grid-cols-2 gap-4'>
					<ContainerBorder>
						<div className='flex flex-col items-center justify-center gap-1 p-4 md:p-6'>
							<p className='font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800'>
								2
							</p>
							<div className='flex items-center justify-center gap-1 bg-background py-0.5 px-1 md:px-3 md:py-1.5 rounded-xl w-full'>
								<span class='text-sm text-gray-400 font-semibold'>Projects</span>
							</div>
						</div>
					</ContainerBorder>
					<ContainerBorder>
						<div className='flex flex-col items-center justify-center gap-1 p-4 md:p-6'>
							<p className='font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800'>
								2
							</p>
							<div className='flex items-center justify-center gap-1 bg-background py-0.5 px-1 md:px-3 md:py-1.5 rounded-xl w-full'>
								<span class='text-sm text-gray-400 font-semibold'>Projects</span>
							</div>
						</div>
					</ContainerBorder>
				</div>
				<ContainerBorder>
					<div className='p-6 pt-0'>
						<div className='flex flex-col justify-center items-center container mx-auto p-4'>
							<h3 className='text-2xl font-sans font-bold my-2'>Let&apos;s work together</h3>
							<p></p>
							<button className='inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-background hover:bg-primary/90 h-10 px-4 py-2 w-full gap-1 mt-5'>
								Get In Touch
							</button>
						</div>
					</div>
				</ContainerBorder>
			</div>
		</>
	);
}
