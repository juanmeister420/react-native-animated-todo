import React, { useCallback, useState } from 'react'
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue,
  View,
  Button
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'
import { Image, TouchableOpacity } from 'react-native'
import useTheme from './theme-context'

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])
  const {changeColor} = useTheme ()  
  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>
        <Avatar
          source={require('../assets/profile-image.png')}
          size="xl"
          borderRadius={100}
          mb={6}
          borderColor="secondary.500"
          borderWidth={3}
        />
        <Heading mb={4} size="xl">
          Maciej Monkiewicz
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Zadania
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          O aplikacji
        </MenuButton>
      </VStack>
      <Center>
        <View style={{ flexDirection:"row", justifyContent: "space-between", width: 150}}>
          {/* Orange */}
          <Button
            style={{ height: 30, width: 30, borderRadius: 30, borderWidth: 2, borderColor: '#fff', backgroundColor: "#FF7F50" }}
            onPress={() => changeColor('orange')}
          />
          {/* Blue */}
          <Button
            style={{ height: 30, width: 30, borderRadius: 30, borderWidth: 2, borderColor: '#fff', backgroundColor: "#5352ED" }}
            onPress={() => changeColor('blue')}
          />
          {/*  Yellow */}
          <Button
            style={{ height: 30, width: 30, borderRadius: 30, borderWidth: 2, borderColor: '#fff', backgroundColor: "#FFEEB4" }}
            onPress={() => changeColor('yellow')}
          />
          {/* Purple */}
          <Button
            style={{ height: 30, width: 30, borderRadius: 30, borderWidth: 2, borderColor: '#fff', backgroundColor: "#CCB4FF" }}
            onPress={() => changeColor('purple')}
          />
        </View>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar
