import { atom } from 'recoil';

const isAuthenticated = atom({
  key: 'isAuthenticated',
  default: false,
});

const spotifyRefreshToken = atom({
  key: 'spotifyRefreshToken',
});

const spotifyTokenResponse = atom({
  key: 'spotifyTokenResponse',
});

export { isAuthenticated, spotifyRefreshToken, spotifyTokenResponse };
