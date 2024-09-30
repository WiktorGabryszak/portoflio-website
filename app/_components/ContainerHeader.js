function ContainerHeader({ title, desc, icon }) {
	return (
		<div className='flex flex-col space-y-1.5 p-6'>
			<h3 className='text-2xl font-semibold leading-none tracking-tight flex items-center gap-1'>
				{icon}
				<span>{title}</span>
			</h3>
			<p className='text-sm text-gray-400/75'>{desc}</p>
		</div>
	);
}

export default ContainerHeader;
