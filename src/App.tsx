import style from './app.module.css';
import { INFPaisano, IETH_USD } from './interfaces/nfpaisano';
import { Hero } from '@components/globals/hero';
import { SingleAuction } from '@components/singleAuction';
import { Filters } from '@components/filters';

export interface ISingleAuctionProps {
	auctions: INFPaisano[];
	ethPrice: IETH_USD;
	popular: INFPaisano[];
}

export const App = ({ auctions, ethPrice, popular }: ISingleAuctionProps) => {
	return (
		<div className={style.app}>
			<Hero />
			<SingleAuction
				paisanos={auctions}
				ethPrice={ethPrice}
			/>
			<Filters />
		</div>
	);
};
