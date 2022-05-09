import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/font';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{color: colors.primary, fontSize: font.sizes.xxl}}>
        Hello Worlddddddddddd
        <AntDesign name="stepforward" size={20} color={colors.primary} />
      </Text>
    </View>
  );
};

export default App;
