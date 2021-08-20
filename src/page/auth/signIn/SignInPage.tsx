import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { AuthContainer } from '@/container/auth';
import { RoutePath } from '@/component/router/types';
import './style.scss';
import { globalEnv } from '@/config/env';

interface FormData {
  id: string;
  password: string;
}

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = AuthContainer.useContainer();
  const history = useHistory();

  const onFinish = (formData: FormData) => {
    if (isLoading) {
      return;
    }
    setIsLoading(() => true);
    signIn(formData.id, formData.password)
      .then(() => {
        setIsLoading(false);
        history.push(RoutePath.Home);
      })
      .catch((e) => {
        message.error(`Unhandle exception. (error : ${e})`);
        setIsLoading(false);
      });
  };

  return (
    <Row className="sign-in-page">
      <Col xs={0} md={16} className="sign-in-page__bg">
        <Row
          className="sign-in-page-side sign-in-page-side__left"
          align="middle"
          justify="center"
        >
          <div className="sign-in-page__bg-image" />
          <div className="sign-in-page__bg-license">
            Illustration by
            <a href="https://icons8.com/illustrations/author/5dd5075701d03600114d621f">
              {' '}
              Bogdan Magenta{' '}
            </a>
            from <a href="https://icons8.com/illustrations">Ouch!</a>
          </div>
        </Row>
      </Col>
      <Col xs={24} md={8}>
        <Row className="sign-in-page-side" align="middle" justify="center">
          <Col span={24}>
            <div className="sign-in-page-side__sub-title">{globalEnv.APP_NAME}</div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item name="id" rules={[{ required: true, message: 'required.' }]}>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Enter e-mail address"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'required.' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Enter password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  loading={isLoading}
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignInPage;
