import { Types } from 'mongoose';

const isValidId = (id: string) => {
  const check = Types.ObjectId.isValid(id);

  if (!check) {
    return { type: 422, message: 'Invalid mongo id' };
  }

  return { type: null, message: '' };
};

export default isValidId;