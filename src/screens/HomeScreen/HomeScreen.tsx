/* eslint-disable react/react-in-jsx-scope */
import {FlatList, ScrollView, ViewabilityConfig, ViewToken} from 'react-native';
import FeedPost from '../../components/FeedPost/';
import posts from '../../assets/data/posts.json';
import {useRef, useState} from 'react';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        const {index} = viewableItems[0];
        setActivePostId(index | 0);
      }
    },
  );

  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 20, paddingTop: 20}}
      data={posts}
      renderItem={({item}) => (
        <FeedPost isVisible={activePostId ==(item.id)} post={item} />
      )}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default HomeScreen;
