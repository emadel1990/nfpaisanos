import { Poppins } from '@next/font/google';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

const poppins = Poppins({
	weight: '700',
	style: 'normal',
	subsets: ['latin']
});

export const CustomSlider = () => {
	const valueLabelFormat = (value: number) => {
		return `${value.toFixed(2)} ETH`;
	};

	const PrettoSlider = styled(Slider)({
		color: '#3772ff',
		height: 8,
		'& .MuiSlider-rail': {
			color: '#353945'
		},
		'& .MuiSlider-track': {
			border: 'none'
		},
		'& .MuiSlider-thumb': {
			height: 24,
			width: 24,
			backgroundColor: '#3772ff',
			border: '4px solid #fff',
			'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
				boxShadow: 'inherit'
			},
			'&:before': {
				display: 'none'
			}
		},
		'& .MuiSlider-valueLabel': {
			className: `${poppins.className}`,
			color: '#23262F',
			fontWeight: 700,
			lineHeight: 1.2,
			fontSize: 12,
			background: 'unset',
			padding: 0,
			width: 75,
			height: 27,
			/* borderRadius: '50% 50% 50% 0', */
			borderRadius: '10px',
			backgroundColor: '#FCFCFD',
			transformOrigin: 'bottom left',
			transform: 'translate(-10%, -100%)  scale(0)',
			'&:before': { display: 'none' },
			'&:after': {
				content: '""',
				position: 'absolute',
				top: '100%',
				left: '45%',
				borderRadius: '10%',
				transform: 'translate(0%, -50%) rotate(45deg)',
				width: 8,
				height: 8,
				backgroundColor: '#FCFCFD'
			},
			'&.MuiSlider-valueLabelOpen': {
				transform: 'translate(-10%, -100%)  scale(1.2)'
			},
			'& > *': {
				transform: 'rotate(0deg)'
			}
		}
	});

	return (
		<PrettoSlider
			className={`${poppins.className}`}
			valueLabelDisplay="auto"
			aria-label="pretto slider"
			defaultValue={5}
			getAriaValueText={valueLabelFormat}
			valueLabelFormat={valueLabelFormat}
			min={0.01}
			max={10}
			step={0.01}
		/>
	);
};
