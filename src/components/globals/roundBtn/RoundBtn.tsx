import style from './roundBtn.module.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const RoundedBtn = ({ back }: { back: boolean }) => {
	return (
		<div>
			<button className={style.roundBtn}>{back ? <ArrowBackIcon /> : <ArrowForwardIcon />}</button>
		</div>
	);
};
