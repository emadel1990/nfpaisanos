import { Footer } from '@/src/components/Layout/footer';
import { Navbar } from '@/src/components/Layout/navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>
				{/* <Navbar /> */}
				{children}
				<Footer />
			</body>
		</html>
	);
}
