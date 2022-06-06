import { Center, Heading, HStack, Link, Text, VStack } from 'native-base';
import { StyleSheet } from 'react-native';

const HomeScreen = (): JSX.Element => (
	<Center px={4} flex={1}>
		<VStack space={5} alignItems="center">
			<Heading size="xl">
				<Text style={styles.header}>Welcome to NativeBase</Text>
			</Heading>
			<HStack space={2} alignItems="center">
				<Text>Home - HomeScreen.tsx.</Text>
			</HStack>
			<Link href="https://docs.nativebase.io" isExternal>
				<Text color="primary.500" underline fontSize={'xl'}>
					Learn NativeBase
				</Text>
			</Link>
		</VStack>
	</Center>
);

const styles = StyleSheet.create({
	header: {
		fontFamily: 'GreatVibes-Regular',
	},
});

export default HomeScreen;
