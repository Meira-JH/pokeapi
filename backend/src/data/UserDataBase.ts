import { UserDataBaseDTO } from '../dto/UserDTO';

export class UserDatabase {
  private static TABLE_NAME = '../../users.json';
  private static USER_DATABASE = require(UserDatabase.TABLE_NAME);

  public async getUserByEmail(email: string): Promise<UserDataBaseDTO | null> {
    const userDataBase: UserDataBaseDTO[] = await UserDatabase.USER_DATABASE;

    const user = userDataBase.find(
      (user: UserDataBaseDTO) => user.email === email
    );

    return user ?? null;
  }
}
