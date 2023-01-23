import { IETH_USD, INFPaisano } from '@interfaces/nfpaisano';
import style from './miniCard.module.css';
import Image from 'next/image';
import eth from '@assets/eth.svg';
import { CurrentBid } from './currentBid/CurrentBid';
import { DM_Sans } from '@next/font/google';

const dm_sans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export interface MiniCardProps {
	paisano: INFPaisano;
	ethPrice: IETH_USD;
}

export const MiniCard = ({ paisano, ethPrice }: MiniCardProps) => {
	return (
		<div className={style.miniCardContainer}>
			<div className={style.miniCard}>
				<div className={style.divAvatarCreator_1}>
					<span className={style.authorAvatar}>
						<Image
							src={paisano.authorAvatar}
							alt="paisano-avatar"
							height={40}
							width={40}
							priority
						/>
					</span>
					<span className={style.creatorSpan}>
						<p className={style.creatorP}>Creator</p>
						<p className={style.authorP}>{paisano.author}</p>
					</span>
				</div>
				<div className={style.divAvatarCreator_2}>
					<span className={style.authorAvatar}>
						<Image
							src={eth}
							alt="ETH-logo"
							height={40}
							width={40}
						/>
					</span>
					<span className={style.creatorSpan}>
						<p className={style.creatorP}>Instant price</p>
						<p className={style.authorP}>{`${paisano.instantPrice}`}</p>
					</span>
				</div>
			</div>
			<CurrentBid
				paisano={paisano}
				ethPrice={ethPrice}
			/>
			<button className={`${style.placeBidBtn} - ${dm_sans.className}`}>Place a bid</button>
			<button className={`${style.viewBtn} - ${dm_sans.className}`}>View item</button>
		</div>
	);
};
