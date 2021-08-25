import {format, parseISO} from 'date-fns';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {shallowEqual, useSelector} from 'react-redux';
import {IShift} from '../../../types/shifts';
import {IStoreState} from '../../../types/store';
import {IUser} from '../../../types/users';
import styles from './index.styles';

interface IProps {
  shift: IShift;
  onShiftPress: () => void;
}

/**
 * ShiftItem
 */
const ShiftItem: React.FC<IProps> = ({shift, onShiftPress}) => {
  const {
    users: {users},
  } = useSelector(
    (state: IStoreState) => ({
      users: state.users,
    }),
    shallowEqual,
  );

  return (
    <TouchableOpacity onPress={onShiftPress} style={styles.container}>
      <View style={styles.leftContainer}>
        <Text>{format(parseISO(shift.starts_at), 'HH:mm')}</Text>
        <View style={styles.lineSeparator} />
        <Text>{format(parseISO(shift.ends_at), 'HH:mm')}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text>
          {users.find((user: IUser) => user.id === shift.user_id)?.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShiftItem;
