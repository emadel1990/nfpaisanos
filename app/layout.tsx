import { Footer } from '@/src/components/Layout/footer';
import { Navbar } from '@/src/components/Layout/navbar';
import './globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={poppins.className}>
			<head />
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
