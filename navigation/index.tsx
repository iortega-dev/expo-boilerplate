import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = (): JSX.Element => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

const Navigation = (): JSX.Element => {
	return (
		<NavigationContainer>
			<SafeAreaView style={styles.safeArea}>
				<RootNavigator />
			</SafeAreaView>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
});

export default Navigation;
