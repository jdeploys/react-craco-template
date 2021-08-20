import { createContainer } from 'unstated-next';
import { useState } from 'react';

// store 예제
const useUiContainer = () => {
  // 컴포넌트를 가로지르는 공통으로 사용되는 변수 선언
  const [hideContent, setHideContent] = useState(false);

  return { hideContent, setHideContent };
};

export const UiContainer = createContainer(useUiContainer);
