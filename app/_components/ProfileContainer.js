import ContainerBorder from "./ContainerBorder";
import ContainerGrid from "./ContainerGrid";
import ContainerHeader from "./ContainerHeader";
import ProfileItem from "./ProfileItem";
import Slider from "./Slider";

function ProfileContainer({ children }) {
	return (
		<ContainerGrid>
			<ContainerBorder>
				<div className='p-6 pt-0 mt-5'>
					<div className='flex flex-row items-center'>
						<img src='/peta.jpg' width={100} height={100} className='rounded-2xl' />
						<div className='flex flex-col ml-4 gap-y-1'>
							<div className='flex mb-auto items-center justify-center py-1 px-2 bg-background rounded-2xl text-md gap-1 w-fit'>
								<span className='text-md font-semibold text-gray-400'>Available to Work</span>
							</div>
							<h1 className='text-2xl font-bold text-accent px-2'>Wikor Gabryszak</h1>
							<div className='text-md text-gray-400 font-semibold px-2'>
								<div className='flex items-center gap-1'>
									<p>I&apos;m a</p>
									<span className='text-accent font-black ml-1'>(Here Animation)</span>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-wrap gap-2 rounded-2xl py-5 max-w-[50vh]'>
						<ProfileItem title='English & Polish' icon='' />
						<ProfileItem title='Poland' icon='' />
						<ProfileItem title='Sci-Fi Fan' icon='' />
						<ProfileItem title='Freelancer' icon='' />
						<ProfileItem title='Freelancer' icon='' />
						<ProfileItem title='Freelancer' icon='' />
					</div>
					<div className='flex items-center gap-2'>
						<button className='inline-flex items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-background hover:bg-accent/90 h-10 px-4 py-2 w-full gap-1'>
							Contact Me
						</button>
						<button className='inline-flex items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-borderColor text-foreground hover:bg-background/90 h-10 px-4 py-2 w-full gap-1'>
							GitHub
						</button>

						<button className='inline-flex items-center justify-center rounded-lg text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-400 text-background hover:bg-green-400/90 h-10 px-4 py-2 w-full gap-1'>
							Linkedin
						</button>
					</div>
				</div>
			</ContainerBorder>
			{children}
		</ContainerGrid>
	);
}

export default ProfileContainer;
