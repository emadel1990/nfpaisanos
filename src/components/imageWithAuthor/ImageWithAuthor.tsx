import style from './imageWithAuthor.module.css';
import Image from 'next/image';
import { INFPaisano } from '@/src/interfaces/nfpaisano';
import { DM_Sans } from '@next/font/google';

const dm_sans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export const ImageWithAuthor = ({ paisano }: { paisano: INFPaisano }) => {
	return (
		<article className={style.singleAuction_article}>
			<Image
				src={paisano?.media?.image2x}
				alt={paisano?.author}
				width={100}
				height={100}
				className={style.singleAuction_image}
			/>
			<div className={style.author}>
				{/* <h1 className={style.singleAuction_title}>{`${paisano.author.split(' ')[0]} `}</h1>
				<div className={style.title_2}>
					<h1>{`${paisano.author.split(' ').slice(1).join(' ')}`}</h1>
					<h4 className={style.copyright}>&#174;</h4>
				</div> */}
				<h1 className={`${style.sincleAuction_title} ${dm_sans.className}`}>{`Marco`}</h1>
				<div className={style.title_2}>
					<h1 className={dm_sans.className}>{`carrillo`}</h1>
					<h4 className={style.copyright}>&#174;</h4>
				</div>
			</div>
		</article>
	);
};
