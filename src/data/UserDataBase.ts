import { UserDataBaseDTO, UserDTO } from '../dto/UserDTO';

export class UserDatabase {
  private static TABLE_NAME = '../users.json';

  public async getUserByEmail(email: string): Promise<UserDataBaseDTO> {
    const userDataBase: UserDataBaseDTO[] =
      await require(UserDatabase.TABLE_NAME);

    const user = userDataBase.map((user: UserDataBaseDTO) => {
      if (user.email === email) return user;
    });

    return user[0] || { id: '', email: '', password: '', role: '' };
  }

  public async getUserById(id: string): Promise<any> {
    const userDataBase: UserDataBaseDTO[] = require(UserDatabase.TABLE_NAME);

    return userDataBase.map((user: UserDataBaseDTO) => {
      user.id === id && user;
    });
  }
}
