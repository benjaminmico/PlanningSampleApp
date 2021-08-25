import {IShift} from '../types/shifts';
import rest from '../utils/rest';
import {API_PREFIX} from '../utils/urls';

/** Listing shifts */
const listingShifts = async (): Promise<
  | {
      data: IShift[] | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${API_PREFIX()}/shifts`,
    });

    return {data: res.data, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default listingShifts;
