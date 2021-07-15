import { UserDataBaseDTO } from '../dto/UserDTO';

export class UserDatabase {
  private static TABLE_NAME = '../../users.json';
  //NOTE: put private static to call     const userDataBase: UserDataBaseDTO[] = await require(UserDatabase.TABLE_NAME);

  public async getUserByEmail(email: string): Promise<UserDataBaseDTO | null> {
    const userDataBase: UserDataBaseDTO[] =
      await require(UserDatabase.TABLE_NAME);

    //NOTE: change map for filter
    const user = userDataBase.map((user: UserDataBaseDTO) => {
      if (user.email === email) return user;
    });

    return user[0] ?? null;
  }

}
