export interface AuthResponse extends User {
  token: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  storageUsed: string;
  storageLimit: string;
  backupTime: string;
}
