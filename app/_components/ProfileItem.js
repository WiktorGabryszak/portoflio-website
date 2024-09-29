export default function ProfileItem({ title, icon }) {
	return (
		<div className='flex items-center gap-1 bg-background rounded-xl py-2 px-4 hover:scale-105 transition-transform duration-300'>
			{icon}
			<p className='text-sm text-gray-400 font-semibold'>{title}</p>
		</div>
	);
}
