import {IShift} from '../types/shifts';
import rest from '../utils/rest';
import {API_PREFIX} from '../utils/urls';

/** Put shift */
const putShift = async (
  id: number,
): Promise<
  | {
      data: IShift | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'PUT',
      url: `${API_PREFIX()}/shifts/${id}`,
    });

    return {data: res.data, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default putShift;
