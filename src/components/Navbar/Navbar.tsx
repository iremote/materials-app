import React from 'react';
import {AppBar, Box, Button, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import {styled} from '@mui/material/styles';

export interface NavbarProps {
}

const links = ['Import', 'Edit', 'Help'];

const Navbar: React.FC<NavbarProps> = () => {
	const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<AppBar position={'fixed'} color={'primary'} elevation={0}>
			<Toolbar disableGutters>
				<LogoIcon/>
				<LogoText variant={'h6'}>MAT</LogoText>
				<Box sx={{flexGrow: 1, display: {xs: 'none', sm: 'flex'}}}>
					{links.map((page) => (
						<Button
							variant={'text'}
							color={'inherit'}
							key={page}
							onClick={handleCloseNavMenu}
							sx={{my: 0, display: 'block'}}
						>
							{page}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

// Styles

const LogoIcon = styled(SwitchAccessShortcutAddIcon)(({theme}) => ({
	display: 'none',
	margin: theme.spacing(0, 2),
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

const LogoText = styled(Typography)(({theme}) => ({
	display: 'none',
	cursor: 'default',
	marginRight: theme.spacing(2),
	fontWeight: 700,
	color: 'inherit',
	textDecoration: 'none',
	[theme.breakpoints.up('md')]: {
		display: 'block',
	},
}));
