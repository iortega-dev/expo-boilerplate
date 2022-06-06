import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources(): boolean {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync(): Promise<void> {
			try {
				// Keep the splash screen visible while we fetch resources
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...Ionicons.font,
					'GreatVibes-Regular': require('../assets/fonts/GreatVibes-Regular.ttf'),
				});
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
