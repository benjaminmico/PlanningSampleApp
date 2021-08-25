import {format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Route, TabView} from 'react-native-tab-view';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import CalendarView from '../../components/calendar/CalendarView';
import TabBarItem from '../../components/tabBar/TabBarItem';
import {getShifts} from '../../store/actions/shifts';
import {getUsers} from '../../store/actions/users';
import {IShift} from '../../types/shifts';
import {IStoreState} from '../../types/store';
import styles from './index.styles';

/**
 * HomeScreen displays TabView as Header.
 * Filter some dates between : 2021-02-04 && 2021-02-10 to display existing shifts
 */
const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState<number>(0);

  const [shiftsToDisplay, setShiftsToDisplay] = useState<IShift[] | null>(null);

  const {
    shifts: {shifts},
  } = useSelector(
    (state: IStoreState) => ({
      shifts: state.shifts,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getShifts());
  }, [dispatch]);

  useEffect(() => {
    setShiftsToDisplay(
      shifts.filter(
        (shift: IShift) =>
          shift.starts_at > '2021-02-04' && shift.ends_at < '2021-02-10',
      ),
    );
  }, [shifts]);

  const routes: {key: string; title: string}[] = [
    {key: 'monday', title: 'Lun'},
    {key: 'tuesday', title: 'Mar'},
    {key: 'wednesday', title: 'Mer'},
    {key: 'thursday', title: 'Jeu'},
    {key: 'friday', title: 'Ven'},
    {key: 'saturday', title: 'Sam'},
    {key: 'sunday', title: 'Dim'},
  ];

  const renderScene = ({
    route,
    _jumpTo,
  }: {
    route: Route;
    _jumpTo: (key: string, title: string) => void;
  }): React.ReactNode => {
    return (
      <CalendarView
        title={route.title || ''}
        shifts={shiftsToDisplay?.filter(
          (shift: IShift) =>
            format(new Date(shift.starts_at), 'eeee').toLowerCase() ===
            route.key,
        )}
      />
    );
  };

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map(
      (_route: Route, i: number) => i,
    );

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route: Route, i: number) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: number) =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TabBarItem
              onTabPressed={() => setIndex(i)}
              opacity={opacity}
              title={route.title}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
