/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import Comment from '../Comment/';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import {IPost} from '../../types/models';
import colors from '../../theme/colors';
import VideoPlayer from '../VideoPlayer';
interface IfeedPost {
  post: IPost;
}

const FeedPost = ({post}: IfeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(true);

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => !existingValue);
  };

  const toggleIsLiked = () => {
    setIsLiked(existingValue => !existingValue);
  };

  let content = null;
  if (post.video) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <VideoPlayer uri={post.video} />
      </DoublePressable>
    );
  } else if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleIsLiked}>
        <Image source={{uri: post.image}} style={styles.image} />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleIsLiked} />;
  }

  return (
    <View style={styles.post}>
      {/*header*/}
      <View style={styles.header}>
        {/* image avatar*/}
        <Image source={{uri: post.user.image}} style={styles.userAvatar} />
        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDot}
        />
      </View>
      {/*CONTENT*/}
      {/* <DoublePressable onDoublePress={toggleIsLiked}>{content}</DoublePressable> */}
      {content}
      {/*FOOTER*/}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleIsLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons name="chatbubble-outline" size={24} style={styles.icon} />
          <Feather name="send" size={24} style={styles.icon} />
          <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
        </View>
        {/*LIKES*/}
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>Laurent</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>
        {/*POST DESCRIPTION*/}
        <Text
          style={styles.postDescription}
          numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {post.description}
        </Text>
        <Text onPress={toggleDescriptionExpanded}>
          {isDescriptionExpanded ? 'Less' : 'more'}
        </Text>
        {/*COMMENT*/}
        <Text style={styles.colorSousText}>
          View all {post.nofComments} comments
        </Text>
        {/* map.post.comments */}
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Posted date */}
        <Text style={styles.colorSousText}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
