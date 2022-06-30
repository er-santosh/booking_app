import { ValidMongoId } from 'src/utils/ValidMongoId';

interface TokenPayload {
  userId: ValidMongoId['id'];
  userType: boolean;
}

export default TokenPayload;
