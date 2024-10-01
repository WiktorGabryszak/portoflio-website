import ContainerBorder from "./ContainerBorder";
import ContainerHeader from "./ContainerHeader";
import ProjectsSlider from "./ProjectsSlider";

function ProjectsContainer({ setIsProjects }) {
	return (
		<ContainerBorder>
			<ContainerHeader title='Projects' desc='Some procjuect i work on' />
			<ProjectsSlider />
			<ProjectsSlider />
			<ProjectsSlider />
			<div className='mx-auto justify-center items-center max-w-[50vh] p-0 group mb-6'>
				<div className='flex items-center justify-center gap-2'>
					<button
						className='flex items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-background hover:bg-accent/90 h-10 px-4 py-2 w-1/2 gap-1'
						onClick={() => setIsProjects(projects => !projects)}>
						See my projects
					</button>
				</div>
			</div>
		</ContainerBorder>
	);
}

export default ProjectsContainer;
