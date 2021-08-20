import React from 'react';
import { Col, Row, Switch } from 'antd';
import { UiContainer } from '@/container/ui';

const HideContentSwitch = () => {
  const { hideContent, setHideContent } = UiContainer.useContainer();

  return (
    <Row gutter={12} align="middle">
      <Col>Hide Content</Col>
      <Col>
        <Switch
          title="Hide Content"
          onChange={(checked) => {
            setHideContent(!!checked);
          }}
          checked={hideContent}
        />
      </Col>
    </Row>
  );
};

export default HideContentSwitch;
