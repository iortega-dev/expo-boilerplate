import {
	Box,
	Center,
	extendTheme,
	Heading,
	HStack,
	Link,
	NativeBaseProvider,
	Text,
	VStack,
} from 'native-base';

const MyComponent = (): JSX.Element => (
	<Center px={4} flex={1}>
		<VStack space={5} alignItems="center">
			<Heading size="lg">Welcome to NativeBase</Heading>
			<HStack space={2} alignItems="center">
				<Text>Edit</Text>
				<Box
					_web={{
						_text: {
							fontFamily: 'monospace',
							fontSize: 'sm',
						},
					}}
					px={2}
					py={1}
					bg="blueGray.200"
				>
					App.js
				</Box>
				<Text>and save to reload.</Text>
			</HStack>
			<Link href="https://docs.nativebase.io" isExternal>
				<Text color="primary.500" underline fontSize={'xl'}>
					Learn NativeBase
				</Text>
			</Link>
		</VStack>
	</Center>
);

// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
};

// extend the theme
export const theme = extendTheme({ config });

const App = (): JSX.Element => {
	return (
		<NativeBaseProvider theme={theme}>
			<MyComponent />
		</NativeBaseProvider>
	);
};

export default App;
