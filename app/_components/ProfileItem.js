export default function ProfileItem({ title, icon }) {
	return (
		<div className='flex items-center gap-1 bg-zinc-700/15 border border-zinc-700/25 rounded-full py-2 px-4 hover:scale-105 transition-transform duration-300 cursor-pointer'>
			{icon}
			<p className='text-sm text-zinc-200 font-semibold'>{title}</p>
		</div>
	);
}
