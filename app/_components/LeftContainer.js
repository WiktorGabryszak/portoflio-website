import { FaHandHolding } from "react-icons/fa";
import ContainerBorder from "./ContainerBorder";
import ContainerGrid from "./ContainerGrid";
import ProjectsContainer from "./ProjectsContainer";
import ProfileContainer from "./ProfileContainer";

function LeftContainer() {
	return (
		<ContainerGrid>
			<ProfileContainer />
			<ContainerBorder>
				<div className='p-6 pt-0'>
					<div className='flex flex-col justify-center items-center container mx-auto'>
						<h3 className='text-2xl font-sans font-bold my-2'>Let&apos;s work together</h3>
						<p className='text-md font-sans font-semibold text-gray-400'>Lets bring you ideas to </p>
						<div className='flex flex-col items-center gap-2 mt-5 w-full'>
							<button className='inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-background hover:bg-primary/90 h-10 px-4 py-2 w-full gap-1 mt-5'>
								Get In Touch
							</button>
						</div>
					</div>
				</div>
			</ContainerBorder>
			<ContainerBorder>
				<div className='flex-col space-y-1.5 p-6 flex items-center justify-center mx-auto'>
					<div className='p-4 rounded-full bg-card group border border-secondary'>
						<FaHandHolding className='w-8 h-8 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300' />
					</div>
				</div>
				<div className='p-6 pt-0'>
					<div className='flex flex-col justify-center items-center container mx-auto'>
						<h3 className='text-2xl font-sans font-bold my-2'>Let&apos;s work together</h3>
						<p className='text-md font-sans font-semibold text-gray-400'>Lets bring you ideas to </p>
						<div className='flex flex-col items-center gap-2 mt-5 w-full'>
							<button className='inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-background hover:bg-primary/90 h-10 px-4 py-2 w-full gap-1 mt-3'>
								Get In Touch
							</button>
						</div>
					</div>
				</div>
			</ContainerBorder>
		</ContainerGrid>
	);
}

export default LeftContainer;
