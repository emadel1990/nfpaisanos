export interface IMultipleNFPaisano {
	paisano: INFPaisano[];
}

export interface INFPaisano {
	id: number;
	instantPrice: string;
	highestBid: string;
	author: string;
	authorAvatar: string;
	type: string;
	stock: number;
	likes: number;
	createdAt: string;
	endsAt: string;
	media: {
		id: number;
		image: string;
		image2x: string;
	};
	attributes: {
		id: number;
		color: string;
		type: string;
	};
	bidUsers: [
		{
			id: number;
			name: string;
			avatar: string;
		}
	];
}

export interface IETH_USD {
	eth: string;
	usd: string;
}
