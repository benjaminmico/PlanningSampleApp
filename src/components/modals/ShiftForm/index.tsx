import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import React, {useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {IShift} from '../../../types/shifts';
import {IStoreState} from '../../../types/store';
import Button from '../../commons/Button';
import styles from './index.styles';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {deleteShift, postShift, putShift} from '../../../store/actions/shifts';

interface IProps {
  shift?: IShift;
  onModalClosed: () => void;
}

export type ShiftInput = {
  user_id: number;
  start_at: Date;
  end_at: Date;
};

/**
 * ShiftForm
 */
const ShiftForm: React.FC<IProps> = ({shift, onModalClosed}) => {
  const {
    users: {users},
  } = useSelector(
    (state: IStoreState) => ({
      users: state.users,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const schema = yup.object().shape({
    user_id: yup.number().required('Vous devez sélectionner un utilisateur'),
    start_at: yup.date().required('Vous devez sélectionner une date de début'),
    end_at: yup
      .date()
      .typeError('La date de fin doit être superieure à la date de début')
      .when(
        'start_at',
        (start_at, start_atSchema) => start_at && start_atSchema.min(start_at),
      ),
  });

  const {
    control,
    getValues,
    formState: {errors},
  } = useForm<ShiftInput>({
    resolver: yupResolver(schema),
  });

  const [showStartAt, setShowStartAt] = useState<boolean>(false);
  const [showEndAt, setShowEndAt] = useState<boolean>(false);

  const dropdownUsers = useMemo(() => {
    return users.map(user => {
      return {label: user.name, value: user.id};
    });
  }, [users]);

  const onPost = () => {
    dispatch(postShift(getValues()));
  };
  const onDelete = () => {
    if (shift?.id) {
      dispatch(deleteShift(shift?.id));
    }
  };
  const onPut = () => {
    if (shift?.id) {
      dispatch(putShift(shift?.id));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        {!!dropdownUsers?.length && (
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, value}}) => {
              return (
                <>
                  <Text style={styles.itemFormLabel}>Utilisateur</Text>
                  <View style={styles.itemFormContainer}>
                    <RNPickerSelect
                      onValueChange={onChange}
                      items={dropdownUsers}
                      placeholder={{
                        label: 'Selectionnez un utilisateur...',
                        value: null,
                        color: 'black',
                      }}
                      value={value}
                    />
                  </View>
                  <Text style={styles.itemErrorLabel}>
                    {errors.user_id?.message}
                  </Text>
                </>
              );
            }}
            name="user_id"
            defaultValue={shift?.user_id}
          />
        )}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <>
                <Text style={styles.itemFormLabel}>Heure de début</Text>
                <TouchableOpacity
                  onPress={() => setShowStartAt(!showStartAt)}
                  style={styles.itemFormContainer}>
                  <Text style={styles.itemDateLabel}>
                    {format(new Date(value), 'HH:mm')}
                  </Text>
                </TouchableOpacity>
                {showStartAt && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode="time"
                    is24Hour={true}
                    locale="fr"
                    display="spinner"
                    onChange={(_event: Event, selectedDate?: Date) => {
                      if (selectedDate) {
                        onChange(new Date(selectedDate));
                      }
                    }}
                  />
                )}
                <Text style={styles.itemErrorLabel}>{errors.start_at}</Text>
              </>
            );
          }}
          name="start_at"
          defaultValue={new Date(shift?.starts_at || Date.now())}
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <>
                <Text style={styles.itemFormLabel}>Heure de fin</Text>
                <TouchableOpacity
                  onPress={() => setShowEndAt(!showEndAt)}
                  style={styles.itemFormContainer}>
                  <Text style={styles.itemDateLabel}>
                    {format(new Date(value), 'HH:mm')}
                  </Text>
                </TouchableOpacity>
                {showEndAt && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode="time"
                    is24Hour={true}
                    locale="fr"
                    display="spinner"
                    onChange={(_event: Event, selectedDate?: Date) => {
                      if (selectedDate) {
                        onChange(new Date(selectedDate));
                      }
                    }}
                  />
                )}
                <Text style={styles.itemErrorLabel}>
                  {errors.end_at?.message}
                </Text>
              </>
            );
          }}
          name="end_at"
          defaultValue={new Date(shift?.starts_at || Date.now())}
        />

        <Button
          buttonStyle={styles.buttonStyle}
          label="Annuler"
          onPress={onModalClosed}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          label="Supprimer"
          onPress={onDelete}
        />
        <Button
          buttonStyle={styles.buttonStyle}
          label={shift?.id ? 'Editer' : 'Envoyer'}
          onPress={shift?.id ? () => onPut() : () => onPost()}
        />
      </View>
    </View>
  );
};

export default ShiftForm;
