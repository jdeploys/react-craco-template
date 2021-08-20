import React from 'react';
import { PageHeader, Steps } from 'antd';
import { UiContainer } from '@/container/ui';
import HideContentSwitch from '@/component/switch/HideContentSwitch';

const { Step } = Steps;

const AboutPage = () => {
  const { hideContent } = UiContainer.useContainer();

  return (
    <div>
      <PageHeader title="About Page" subTitle={<HideContentSwitch />} />
      {!hideContent && (
        <div className="m-20">
          <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
