import { extendTheme, NativeBaseProvider } from 'native-base';

import { Provider } from 'react-redux';
import Navigation from './navigation';
import { store } from './store/store';

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
};

// extend the theme
export const theme = extendTheme({ config });

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<NativeBaseProvider theme={theme}>
				<Navigation />
			</NativeBaseProvider>
		</Provider>
	);
};

export default App;
