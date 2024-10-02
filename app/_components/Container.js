import ControlledContainer from "./ControlledContainer";
import ProfileContainer from "./ProfileContainer";
import ProjectsContainer from "./ProjectsContainer";
import TechnologiesContainer from "./TechnologiesContainer";

export default function Container() {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col md:flex-row gap-4 lg:w-[130vh]'>
				<ControlledContainer />
			</div>
			<div>
				<TechnologiesContainer />
			</div>
		</div>
	);
}
