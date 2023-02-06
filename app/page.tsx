import { Hero } from '@components/globals/hero';
import { SingleAuction } from '@components/singleAuction';
import { Filters } from '@components/filters';

import { AppEndpoints } from '@/src/enums/appEnums';
import { getService } from '@services/appService';
import { INFPaisano, IETH_USD } from '@interfaces/nfpaisano';
import { App } from '@/src/App';

export default async function Home() {
	const ethPrice: IETH_USD = await getService(AppEndpoints.ETH_USD);
	const auctions: INFPaisano[] = await getService<INFPaisano[]>(AppEndpoints.AUCTIONS);
	const popular: INFPaisano[] = await getService<INFPaisano[]>(AppEndpoints.POPULAR);

	return (
		<main>
			<App
				auctions={auctions}
				ethPrice={ethPrice}
				popular={popular}
			/>
		</main>
	);
}
