import {IUser} from './../types/users';
import rest from '../utils/rest';
import {API_PREFIX} from './../utils/urls';

/** Get users */
const getUsers = async (): Promise<
  | {
      data: IUser[] | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${API_PREFIX()}/users`,
    });

    return {data: res.data, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default getUsers;
