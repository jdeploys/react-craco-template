import React from 'react';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/ko_KR';
import { AuthContainer } from '@/container/auth';
import { UiContainer } from '@/container/ui';
import { BaseRouter } from './router';

function App() {
  return (
    <AuthContainer.Provider>
      <ConfigProvider locale={locale}>
        <UiContainer.Provider>
          <BaseRouter />
        </UiContainer.Provider>
      </ConfigProvider>
    </AuthContainer.Provider>
  );
}

export default App;
