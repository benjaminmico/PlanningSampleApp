import {IShift} from '../types/shifts';
import rest from '../utils/rest';
import {API_PREFIX} from '../utils/urls';

/** Delete shift */
const deleteShift = async (
  id: number,
): Promise<
  | {
      success: boolean;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    await rest({
      method: 'POST',
      url: `${API_PREFIX()}/shifts/${id}`,
    });

    return {success: true, error: false};
  } catch (e) {
    return {success: false, error: JSON.stringify(e)};
  }
};

export default deleteShift;
