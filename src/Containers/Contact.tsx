import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

// import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
// import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

const Contact = () => {
  const [items, setItems] = useState([])
  const [note, setNote] = useState()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = items
      notesCpy.push(note)
      setItems(notesCpy)

      setNote('')
    }
  }

  const removeAll = () => {
    setItems([])
  }

  const deleteItem = (ind: any) => {
    return setItems(
      items.filter((item, i) => {
        return i !== ind
      }),
    )
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
      <View style={styles.main}>
        <Text style={Fonts.textLarge}>Add Your Items</Text>
      </View>
      <View style={styles.inputfield}>
        <View style={styles.input}>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Add Items....."
            placeholderTextColor="black"
            style={[Fonts.textRegular, styles.area]}
            // keyboardAppearance={false}
          />
          <Ionicons name="pencil" size={30} />
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign
              name="plussquare"
              size={42}
              style={styles.img}
              onPress={addNote}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itembtn}>
        <TouchableOpacity>
          {items.map((note, ind, index) => (
            <View style={styles.viewarea}>
              <Text key={index} style={styles.space}>
                {note}
              </Text>
              <View style={{ width: '20%', justifyContent: 'center' }}>
                <Ionicons
                  name="trash-bin"
                  size={30}
                  style={styles.bin}
                  onPress={() => deleteItem(ind)}
                />
              </View>
            </View>
          ))}
        </TouchableOpacity>
      </View>
      <View style={styles.touch}>
        <TouchableOpacity
          style={[Common.button.rounded, Gutters.regularBMargin]}
          onPress={() => onChangeTheme({ darkMode: null })}
        >
          <Text style={Fonts.textRegular} onPress={removeAll}>
            Clear List
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  input: {
    flexDirection: 'row',
    width: '50%',
  },
  inputfield: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  img: {
    color: 'red',
  },
  main: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 50,
  },
  touch: { paddingVertical: '50%' },
  area: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    width: '80%',
  },
  itembtn: {
    borderRadius: 8,
    width: '70%',
  },
  textt: {
    margin: 15,
    borderRadius: 20,
    padding: 10,
    fontSize: 22,
    elevation: 2,
    backgroundColor: 'white',
  },
  bin: {
    color: 'green',
    paddingVertical: 16,
    borderRadius: 20,
    padding: 10,
    fontSize: 22,
    backgroundColor: 'white',
  },
  main1: {
    width: '20%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  space: {
    margin: 15,
    borderRadius: 20,
    padding: 10,
    fontSize: 22,
    elevation: 2,
    backgroundColor: 'white',
    width: '75%',
  },
  viewarea: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
})
