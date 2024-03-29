'use client';

import style from './filterInput.module.css';
import { Poppins } from '@next/font/google';
import { FormControl, InputAdornment, OutlinedInput, IconButton } from '@mui/material';

const poppins = Poppins({
	weight: '400',
	style: 'normal',
	subsets: ['latin']
});

export interface IFilterInputProps {
	placeholder: string;
	icon: JSX.Element;
	position?: 'start' | 'end';
	formControlStyle?: any;
	outlinedInputStyle?: any;
	inputPropsStyle?: any;
	disabled?: boolean;
	multiline?: boolean;
}

export const FilterInput = ({
	placeholder,
	icon,
	position,
	formControlStyle,
	outlinedInputStyle,
	inputPropsStyle,
	disabled,
	multiline
}: IFilterInputProps) => {
	return (
		<FormControl
			className={formControlStyle || ''}
			variant="outlined">
			<OutlinedInput
				multiline={multiline ? multiline : false}
				disabled={disabled}
				className={outlinedInputStyle || ''}
				placeholder={placeholder}
				inputProps={{
					className: inputPropsStyle || ''
				}}
				maxRows={multiline ? 4 : 1}
				endAdornment={
					<InputAdornment position={position ? position : 'end'}>
						<IconButton sx={{ marginRight: -1.7 }}>{icon}</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};
