import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'

import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
// import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'

const ExampleCon = ({ navigation }) => {
  // const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View>
        <Brand />
      </View>
      <View
        style={{
          paddingVertical: 10,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <Text style={Fonts.textLarge}>Find Your Choice </Text>
      </View>
      <View />
      <View style={{ paddingVertical: 50 }}>
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: null })}
        >
          <Text
            style={Fonts.textRegular}
            onPress={() => navigation.navigate('Profile')}
          >
            Proceed
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ExampleCon
