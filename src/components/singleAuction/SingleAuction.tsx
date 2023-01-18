import style from './singleAuction.module.css';

import { ImageWithAuthor } from '../imageWithAuthor/ImageWithAuthor';
import { INFPaisano } from '@interfaces/nfpaisano';
import { MiniCard } from '../globals/miniCard/MiniCard';

export interface SingleAuctionProps {
	paisanos: INFPaisano[];
}

export const SingleAuction = ({ paisanos }: SingleAuctionProps) => {
	console.log(paisanos[3].bidUsers);
	function randomPaisano(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}
	const random: number = Number(randomPaisano(0, paisanos.length - 1).toFixed(0));

	return (
		<section className={style.singleAuction}>
			<ImageWithAuthor paisano={paisanos[random]} />
			<MiniCard paisano={paisanos[random]} />
		</section>
	);
};
