declare module encryptoDecryptojs {
  interface Cryptor {
    encrypto: (obj: any) => string;
    decrypto: (hash: string) => any;
  }
}
