import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Portal} from 'react-native-paper';
import {IShift} from '../../../types/shifts';
import ShiftItem from '../../cards/ShiftItem';
import Button from '../../commons/Button';
import ShiftForm from '../../modals/ShiftForm';
import styles from './index.styles';

interface IProps {
  title: string;
  shifts: IShift[] | undefined;
}

/**
 * CalendarView
 */
const CalendarView: React.FC<IProps> = ({title, shifts}) => {
  const [modal, setModal] = useState<boolean>(false);
  const [currentShift, setCurrentShift] = useState<IShift | undefined>(
    undefined,
  );

  const onAddShiftPress = () => {
    setCurrentShift(undefined);
    setModal(!modal);
  };

  const onShiftPress = (shift: IShift) => {
    setCurrentShift(shift);
    setModal(!modal);
  };

  /** Render item image */
  const renderItem = ({item}: {item: IShift}) => {
    return (
      <View style={styles.separator}>
        <ShiftItem shift={item} onShiftPress={() => onShiftPress(item)} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Button onPress={onAddShiftPress} label="Ajouter" />
      <Text style={styles.title}>{title}</Text>
      {modal && (
        <Portal>
          <ShiftForm
            onModalClosed={() => setModal(false)}
            shift={currentShift}
          />
        </Portal>
      )}
      <FlatList data={shifts} renderItem={renderItem} />
    </View>
  );
};

export default CalendarView;
