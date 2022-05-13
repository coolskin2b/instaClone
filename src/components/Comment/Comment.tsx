import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import fonts from '../../theme/font';
import colors from '../../theme/colors';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}
const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>
        {comment.comment}
      </Text>
      <AntDesign name="hearto" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  commentText: {
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 10,
    color: colors.black,
  },
});
export default Comment;
