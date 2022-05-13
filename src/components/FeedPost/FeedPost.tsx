/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import Comment from '../Comment/';
import {IPost} from '../../types/models';

// const post = {
//   id: '1',
//   createdAt: '19 December 2021',
//   image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
//   user: {
//     image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
//     username: 'vadimnotjustdev',
//   },
//   nofComments: 11,
//   nofLikes: 33,
//   comments: [
//     {
//       id: '1',
//       comment: 'Hello there',
//       user: {
//         username: 'vadimnotjustdev',
//       },
//     },
//     {
//       id: '2',
//       comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
//       user: {
//         username: 'vadimnotjustdev',
//       },
//     },
//   ],

interface IfeedPost {
  post: IPost;
}

const FeedPost = ({post}: IfeedPost) => {
  const [isLiked, setIsLiked] = useState(false);
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
      <Image source={{uri: post.image}} style={styles.image} />
      {/*FOOTER*/}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
          />
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
        <Text style={styles.postDescription}>
          <Text style={styles.bold}>{post.user.username}</Text>
          {post.description}
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
