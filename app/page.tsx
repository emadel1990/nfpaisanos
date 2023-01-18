import { Hero } from '@components/globals/hero';
import { SingleAuction } from '@components/singleAuction';

import { AppEndpoints } from '@/src/enums/appEnums';
import { getService } from '@services/appService';
import { INFPaisano, IMultipleNFPaisano } from '@interfaces/nfpaisano';

export default async function Home() {
	const ethPrice = await getService(AppEndpoints.ETH_PRICE);
	const popular = await getService(AppEndpoints.POPULAR);
	const auctions: INFPaisano[] = await getService<INFPaisano[]>(AppEndpoints.AUCTIONS);

	return (
		<main>
			<Hero />
			<SingleAuction paisanos={auctions} />
		</main>
	);
}
