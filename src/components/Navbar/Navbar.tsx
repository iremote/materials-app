import React from 'react';
import {AppBar, Box, Button, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import {styled} from '@mui/material/styles';

export interface NavbarProps {
}

const links = ['Menu1', 'Menu2', 'Menu3'];

const Navbar: React.FC<NavbarProps> = () => {
	const [, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<AppBar position={'fixed'} color={'primary'} elevation={0}>
			<Toolbar disableGutters>
				<LogoIcon/>
				<LogoText variant={'h6'}>MAT3</LogoText>
				{/* for now, use the same menu for all sizes */}
				<Box sx={{flexGrow: 1, display: {xs: 'flex', sm: 'flex'}}}>
					{links.map((page) => (
						<MenuButton variant={'text'} key={page} onClick={handleCloseNavMenu}>
							{page}
						</MenuButton>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

// Styles

const LogoIcon = styled(DeviceHubIcon)(({theme}) => ({
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

const MenuButton = styled(Button)(() => ({
	color: 'inherit',
}));
