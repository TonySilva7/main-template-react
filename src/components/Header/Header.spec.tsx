import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '.';
import { theme } from '../../styles/theme';

export const renderTheme = (children: ReactNode) => {
	return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

test('Header renders correctly', () => {
	const { debug } = renderTheme(<Header />);
	// debug();
	const headingHome = screen.getByRole('heading', { name: 'Header' }).parentElement;
	expect(headingHome).toBeInTheDocument();
	expect(headingHome).toHaveStyle({
		backgroundColor: theme.colors.info,
	});

	// const { container } = renderTheme(<Header />);
	// expect(container).toMatchSnapshot();
});
