import style from './hero.module.css';

export const Hero = () => {
	return (
		<div className={style.hero}>
			<p className={style.subTitle}>CREATE, EXPLORE, & SELL DIGITAL ART NFTS.</p>
			<h1 className={style.title}>The new creative economy.</h1>
			<button className={style.btnExplore}>Explore</button>
		</div>
	);
};
