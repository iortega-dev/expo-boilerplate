import { extendTheme, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';

import Navigation from './navigation';

import { store } from './store/store';

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
};

// extend the theme
export const theme = extendTheme({ config });

type ElementOrNull = JSX.Element | null;

const App = (): ElementOrNull => {
	const appIsReady = useCachedResources();

	if (!appIsReady) {
		return null;
	}

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NativeBaseProvider theme={theme}>
					<Navigation />
				</NativeBaseProvider>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
