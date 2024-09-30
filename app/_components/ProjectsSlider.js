function ProjectsSlider() {
	return (
		<div className='mx-auto justify-center items-center max-w-[50vh] p-0 group mb-4'>
			<div className='scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
				<ul className='flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap services-slider hover:[animation-play-state:paused]'>
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
					<img src='/peta.jpg' className='rounded-xl w-full max-w-4xl h-24' />
				</ul>
			</div>
		</div>
	);
}

export default ProjectsSlider;
