import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface IVideoPlayer {
  uri: string;
  onDoublePress?: () => void;
}

const VideoPlayer = ({uri, onDoublePress}: IVideoPlayer) => {
  const [muted, setMuted] = React.useState(true);
  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        muted={muted}
      />
      <Pressable onPress={() => setMuted(!muted)}>
        <View style={styles.volumeIcon}>
          <Ionicons
            name={muted ? 'volume-mute' : 'volume-medium'}
            size={30}
            color={colors.white}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  volumeIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.black,
    opacity: 0.5,
    color: colors.white,
    position: 'absolute',
    width: 40,
    height: 40,
    bottom: 10,
    right: 10,
  },
});

export default VideoPlayer;
