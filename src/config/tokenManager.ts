import { globalKey } from './env';

interface Token {
  access_token: string;
}

/**
 * 토큰 정보를 string 으로 변환
 * @param tokenInfo
 */
const convertTokenInfo = (tokenInfo: Token) => JSON.stringify(tokenInfo);

/**
 * string 토큰 정보를 Token Object 로 변환
 * @param tokenInfoStr
 */
const parseTokenInfo = (tokenInfoStr: string) => JSON.parse(tokenInfoStr);

/**
 * 토큰 저장, localStorage에 저장
 * @param tokenInfo
 */
const setToken = (tokenInfo: Token) => {
  const token = convertTokenInfo(tokenInfo);
  localStorage.setItem(globalKey.TOKEN, token);
};

/**
 * 로컬 스토리지에 저장된 token 을 반환 하는 함수
 */
const getToken = (): Token | null => {
  const localToken = localStorage.getItem(globalKey.TOKEN);
  if (localToken) {
    try {
      return parseTokenInfo(localToken) as Token;
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
      return null;
    }
  }
  return null;
};

/**
 * 토큰 삭제
 */
const clearToken = () => {
  localStorage.removeItem(globalKey.TOKEN);
};

/**
 * 직접 사용은 지양하고 (global 영역에서 config 단에서만 직접사용)
 * userContainer 를 통해서 사용 할 것
 */
export const tokenManager = {
  convertTokenInfo,
  parseTokenInfo,
  setToken,
  getToken,
  clearToken,
};
