import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
			<RootNavigator />
		</NavigationContainer>
	);
};

export default Navigation;
