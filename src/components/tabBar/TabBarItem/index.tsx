import React from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import styles from './index.styles';

interface IProps {
  /* On tab pressed */
  onTabPressed: () => void;
  /* Tab's title */
  title?: string;
  /* Opacity depending on focused or not  */
  opacity: number;
}

/**
 * TabItem
 */
const TabBarItem: React.FC<IProps> = ({onTabPressed, title, opacity}) => {
  return (
    <TouchableOpacity style={styles.tabBarItem} onPress={() => onTabPressed()}>
      <Animated.Text style={{opacity}}>
        {title?.toUpperCase() || ''}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TabBarItem;
