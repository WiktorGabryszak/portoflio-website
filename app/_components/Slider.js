function Slider() {
	return (
		<div className='mx-auto justify-center items-center max-w-[50vh] p-0 group mb-4'>
			<div className='scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]'>
				<ul className='flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap services-slider hover:[animation-play-state:paused]'>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Web Development</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Seo</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Web Design</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Website Redesign</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Responsive Web Design</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>Performance Optimization</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
					<li className='relative flex items-center gap-2 px-5 py-2 rounded-xl bg-background hover:bg-opacity-50 cursor-pointer transition group'>
						<h3 className='text-green-400 text-md font-black'>State Management</h3>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Slider;
