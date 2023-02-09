'use client';

import { useEffect, useState } from 'react';
import { useMediaQueries } from '@hooks/useMediaQueries';
import style from './imageWithAuthor.module.css';
import Image from 'next/image';
import { IETH_USD, INFPaisano } from '@/src/interfaces/nfpaisano';
import { DM_Sans } from '@next/font/google';
import { MiniCard } from '@/src/components/miniCard/MiniCard';

const dm_sans = DM_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export interface ImageWithAuthorProps {
	paisano: INFPaisano;
	ethPrice: IETH_USD;
}

export const ImageWithAuthor = ({ paisano, ethPrice }: ImageWithAuthorProps) => {
	const [title, setTitle] = useState<string>(`Marco`);
	const [subTitle, setSubTitle] = useState<string>(`carrillo`);

	const matches = useMediaQueries('(min-width: 750px)');

	useEffect(() => {
		console.log(paisano);
		if (!matches) {
			setTitle((prev: string) => (prev = `Marco`));
			setSubTitle((prev: string) => (prev = `carrillo`));
		} else {
			setTitle((prev: string) => (prev = `the creator`));
			setSubTitle((prev: string) => (prev = `network`));
		}
	}, [matches]);

	return (
		<article className={style.singleAuction_article}>
			<Image
				src={paisano?.media?.image2x}
				alt={'image'}
				width={1000}
				height={1000}
				priority
				quality={100}
				className={style.singleAuction_image}
			/>
			<div className={style.author}>
				<h1 className={`${style.sincleAuction_title} ${dm_sans.className}`}>{title}</h1>
				<div className={style.title_2}>
					<h1 className={dm_sans.className}>{subTitle}</h1>
					<h4 className={style.copyright}>&#174;</h4>
				</div>
				<MiniCard
					paisano={paisano}
					ethPrice={ethPrice}
				/>
			</div>
		</article>
	);
};
