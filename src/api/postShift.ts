import {ShiftInput} from '../components/modals/ShiftForm';
import {IShift} from '../types/shifts';
import rest from '../utils/rest';
import {API_PREFIX} from '../utils/urls';

/** Post shift */
const postShift = async (
  body: ShiftInput,
): Promise<
  | {
      data: IShift | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'POST',
      url: `${API_PREFIX()}/shifts`,
      data: body,
    });

    return {data: res.data, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default postShift;
