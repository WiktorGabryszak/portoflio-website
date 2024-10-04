import { FaDownload, FaEnvelope, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import ContainerBorder from "./ContainerBorder";
import { IoLogoWhatsapp } from "react-icons/io";
import ContainerHeader from "./ContainerHeader";
import { FaUserTie } from "react-icons/fa";

function ContactComponent() {
	return (
		<ContainerBorder>
			<ContainerHeader
				title='Get In Touch'
				desc='Lets get in toch to create something amazing'
				icon={<FaUserTie className='w-5 h-5 text-emerald-400' />}
			/>
			{/* <div className='flex flex-col gap-2 px-6 py-4'> */}
			{/* <div className='flex-col px-8 py-4 flex items-center justify-center mx-auto'>
					<div className='p-6 rounded-full bg-card group bg-zinc-800/50'>
						<FaVoicemail className='w-8 h-8 text-emerald-400 group-hover:scale-105 transition-all duration-300' />
					</div>
				</div> */}

			<div className='flex flex-col justify-center items-center container mx-auto px-6'>
				{/* <h2 className='text-3xl font-bold text-zinc-200'>Let&apos;s work together</h2>
					<p className='text-md font-semibold text-zinc-400'>Lets bring you ideas to </p> */}

				<div className='flex flex-col items-center gap-3 w-full mb-10'>
					<button className='inline-flex items-center justify-center rounded-2xl text-xl font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-3.5 w-full gap-2 border-zinc-800/50 border'>
						<FaEnvelope className='w-6 h-6 text-emerald-400' />
						<span>Email Me</span>
					</button>
					<button className='inline-flex items-center justify-center rounded-2xl text-xl font-semibold ring-offset-zinc-800/50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-800/25 text-zinc-400 hover:bg-zinc-800/50 px-2 py-3.5 w-full gap-2 border-zinc-800/50 border'>
						<IoLogoWhatsapp className='w-6 h-6 text-emerald-400' />
						<span>Whats app Me</span>
					</button>
				</div>
			</div>
			{/* </div> */}
		</ContainerBorder>
	);
}

export default ContactComponent;
