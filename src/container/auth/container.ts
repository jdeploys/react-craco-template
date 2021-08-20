import { createContainer } from 'unstated-next';
import { useEffect, useState } from 'react';
import { tokenManager } from '@/config/tokenManager';
import { RoutePath } from '@/component/router/types';

const useAuthContainer = () => {
  // state
  const [isSignIn, setIsSignIn] = useState(!!tokenManager.getToken());

  const fetchUser = async () => {
    const token = tokenManager.getToken();
    if (token) {
      // TODO: token 으로 사용자 정보 호출
      setIsSignIn(true);
    }
  };

  const signOut = async () => {
    setIsSignIn(false);
    tokenManager.clearToken();
  };

  useEffect(() => {
    if (isSignIn) {
      fetchUser().catch(async () => {
        await signOut();
        window.location.href = RoutePath.Root;
      });
    }
  }, [isSignIn]);

  const signIn = async (username: string, password: string) => {
    tokenManager.setToken({
      access_token: 'fake_access_token'
    });
    setIsSignIn(true);
  };

  return {
    isSignIn,
    signIn,
    signOut,
  };
};

export const AuthContainer = createContainer(useAuthContainer);
