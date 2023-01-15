import Image from 'next/image';

export const Navbar = () => {
	return (
		<header>
			<Image
				src="/logo.svg"
				alt="logo"
				width={200}
				height={200}
			/>
		</header>
	);
};
