import { Hero } from '@components/globals/hero';
import { SingleAuction } from '@components/singleAuction';

import { AppEndpoints } from '@/src/enums/appEnums';
import { getService } from '@services/appService';
import { INFPaisano, IETH_USD } from '@interfaces/nfpaisano';

export default async function Home() {
	const ethPrice: IETH_USD = await getService(AppEndpoints.ETH_USD);
	const auctions: INFPaisano[] = await getService<INFPaisano[]>(AppEndpoints.AUCTIONS);
	const popular: INFPaisano[] = await getService<INFPaisano[]>(AppEndpoints.POPULAR);

	return (
		<main>
			<Hero />
			<SingleAuction
				paisanos={auctions}
				ethPrice={ethPrice}
			/>
		</main>
	);
}
