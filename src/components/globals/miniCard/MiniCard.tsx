import { INFPaisano } from '@interfaces/nfpaisano';
import style from './miniCard.module.css';
import Image from 'next/image';
import eth from '@assets/eth.svg';

export const MiniCard = ({ paisano }: { paisano: INFPaisano }) => {
	return (
		<div className={style.miniCard}>
			<div className={style.divAvatarCreator_1}>
				<span className={style.authorAvatar}>
					<Image
						src={paisano.authorAvatar}
						alt="paisano-avatar"
						height={34}
						width={34}
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
						height={34}
						width={34}
					/>
				</span>
				<span className={style.creatorSpan}>
					<p className={style.creatorP}>Instant price</p>
					<p className={style.authorP}>{`${paisano.instantPrice}`}</p>
				</span>
			</div>
		</div>
	);
};
