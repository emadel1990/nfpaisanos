import { IEndTime } from '../components/miniCard/currentBid/CurrentBid';
import { IETH_USD, INFPaisano } from '../interfaces/nfpaisano';

export const intervalCounter = (time: IEndTime): IEndTime => {
	if (Number(time.hours) === 0 && Number(time.minutes) === 0 && Number(time.seconds) === 0)
		return { hours: '0', minutes: '0', seconds: '0' };
	const seconds = Number(time.seconds) - 1;
	const minutes = Number(time.minutes);
	const hours = Number(time.hours);
	if (seconds < 0) {
		if (minutes === 0 && hours === 0) return { hours: '0', minutes: '0', seconds: '0' };
		if (minutes === 0) {
			return { hours: String(hours - 1), minutes: '59', seconds: '59' };
		}
		return { hours: String(hours), minutes: String(minutes - 1), seconds: '59' };
	}
	return { hours: String(hours), minutes: String(minutes), seconds: String(seconds) };
};

export const getTime = (paisano: INFPaisano) => {
	const formatDate = paisano.endsAt.slice(0, 10).split('-');
	const date = new Date(Number(formatDate[0]) + 1, Number(formatDate[1]) - 1, Number(formatDate[2]));
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const hours = Math.floor((diff * -1) / (1000 * 60 * 60));
	const minutes = Math.floor(((diff * -1) % (1000 * 3600 * 24)) / (1000 * 3600));
	const seconds = Math.floor(((diff * -1) % (1000 * 3600)) / (1000 * 60));

	return { hours: hours.toString(), minutes: minutes.toString(), seconds: seconds.toString() };
};

export const getPrice = (ethPrice: IETH_USD, paisano: INFPaisano) => {
	const usd = Number(ethPrice.usd.replace(/[^0-9.-]+/g, ''));
	const eth = Number(ethPrice.eth.replace(/[^0-9.-]+/g, ''));
	const paisa = parseFloat(paisano.highestBid.split(' ')[0]);
	return (usd * paisa) / eth;
};
