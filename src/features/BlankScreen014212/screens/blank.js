import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Switch_2: true, CheckBox_3: true, Switch_6: true, TextInput_7: "" }

  render = () => (
    <View>
      <Switch
        style={styles.Switch_2}
        value={this.state.Switch_2}
        onValueChange={nextChecked => this.setState({ Switch_2: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <Text>Sample text content</Text>
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {},
  View_1: {},
  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {},
  Text_4: {},
  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {},
  Text_4: {},
  Image_5: {},
  View_1: {},
  Switch_2: { alignSelf: "flex-start" },
  CheckBox_3: {},
  Text_4: {},
  Switch_6: { alignSelf: "flex-start" },
  TextInput_7: {}
})
