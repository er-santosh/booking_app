import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class IsAdminGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user || !user.isAdmin) {
      throw (
        err ||
        new UnauthorizedException(
          "Unauthorised: You don't have access to this resource.",
        )
      );
    }

    return user;
  }
}
