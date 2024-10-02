"use client";
import { useState } from "react";
import ProjectsContainer from "./ProjectsContainer";

function ControlledContainer() {
	const [isProjects, setIsProjects] = useState(false);
	return (
		<>
			<div className={`grid grid-cols-1 gap-4 h-fit ${!isProjects ? "lg:w-[70vh]" : "lg:w-[130vh]"} `}>
				<ProjectsContainer setIsProjects={setIsProjects} />
			</div>
			<div className={`grid-cols-1 gap-4 h-fit ${isProjects ? "hidden" : "grid"} md:w-[60vh]`}>
				<ProjectsContainer />
			</div>
		</>
	);
}

export default ControlledContainer;
