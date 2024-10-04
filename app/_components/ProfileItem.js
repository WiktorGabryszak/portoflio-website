export default function ProfileItem({ title, icon }) {
	return (
		<div className='flex items-center gap-2 bg-zinc-700/15 border border-zinc-700/25 rounded-full py-1.5 px-2.5 hover:scale-105 transition-transform duration-300 cursor-pointer'>
			{icon}
			<p className='text-base text-zinc-200 font-semibold'>{title}</p>
		</div>
	);
}
