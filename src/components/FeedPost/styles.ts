import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/font';

export default StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDot: {
    marginLeft: 'auto',
  },
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
    color: colors.black,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
    color: colors.black,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  colorSousText: {
    color: colors.grey,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 10,
  },
});
