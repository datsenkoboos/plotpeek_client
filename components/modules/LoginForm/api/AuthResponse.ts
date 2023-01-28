import User from '~~/stores/api/User';

export default interface AuthResponse {
  user: User;
  accessToken: string;
}
