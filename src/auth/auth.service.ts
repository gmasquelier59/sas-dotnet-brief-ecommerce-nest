import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getByUsername(username);
    if (user?.Password !== pass) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
