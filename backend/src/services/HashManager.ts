import * as bcrypt from 'bcryptjs';

export class HashManager {

  static async createHash(password: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);

    return result;
  }

  static async compareHashToPass(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
