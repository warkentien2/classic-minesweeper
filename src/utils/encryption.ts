import { encrypto, decrypto } from "encrypto-decryptojs";

export const encrypt = (obj: any) => encrypto(obj);
export const decrypt = (hash: string) => decrypto(hash);
