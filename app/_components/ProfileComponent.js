import { FaDownload } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import ContainerBorder from "./ContainerBorder";
import ProfileItem from "./ProfileItem";

function ProfileComponent() {
	return (
		<ContainerBorder>
			<div className='p-6 pt-0 mt-5 flex flex-col gap-6'>
				<div className='flex items-center gap-4'>
					<img src='/peta.jpg' width={150} height={150} className='rounded-2xl' />
					<div className='flex flex-col ml-4 gap-y-3'>
						<div className='flex mb-auto items-center justify-center py-2 px-4 bg-zinc-800/50 rounded-full border border-zinc-800 text-md gap-1 w-fit'>
							<span className='text-md font-semibold text-gray-400'>Available to Work</span>
						</div>
						<h1 className='text-3xl font-bold text-zinc-200 px-2'>Wikor Gabryszak</h1>
						<div className='text-lg text-gray-400 font-semibold px-2'>
							<div className='flex items-center gap-1'>
								<p>I&apos;m a</p>
								<span className='text-accent font-black ml-1'>(Here Animation)</span>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-wrap gap-2 rounded-2xl py-5 px-5 w-full bg-zinc-800/25 border border-zinc-800/50'>
					<ProfileItem title='English & Polish' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
					<ProfileItem title='Poland' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
					<ProfileItem title='Sci-Fi Fan' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
					<ProfileItem title='Music Addict' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
					<ProfileItem title='Book Enjoyer' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
					<ProfileItem title='Gamer' icon={<IoLocationSharp className='w-5 h-5 text-emerald-400' />} />
				</div>

				<button className='inline-flex items-center justify-center rounded-2xl text-base font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-4 w-full gap-2 border-zinc-800/50 border'>
					<FaDownload className='w-5 h-5 text-emerald-400' />
					<span className='text-'>Download a Resume</span>
				</button>
			</div>
		</ContainerBorder>
	);
}

export default ProfileComponent;
