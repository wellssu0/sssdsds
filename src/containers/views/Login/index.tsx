import React from 'react';
import { observer } from 'mobx-react';
import { Form, Input, Button } from 'antd';
import intl from 'react-intl-universal';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './index.scss';
import useRootStore from '@store/useRootStore';

const FormItem = Form.Item;

function Login() {
  const { authStore } = useRootStore();

  if (authStore.authToken) {
    history.go(-1);
  }

  const [loading, setLoading] = React.useState(false);

  async function submit(values: IAuthStore.LoginParams) {
    setLoading(true);
    try {
      await authStore.login(values);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.login}>
      <Form onFinish={submit} className={styles.form}>
        <div className={styles.logoBox}>
          <img src="/src/assets/images/logo.png" alt="" />
        </div>
        <FormItem name="username" hasFeedback rules={[{ required: true }]}>
          <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={intl.get('USERNAME')} />
        </FormItem>
        <FormItem name="password" hasFeedback rules={[{ required: true }]}>
          <Input
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder={intl.get('PASSWORD')}
          />
        </FormItem>
        <FormItem>
          <div className={styles.tips}>
            <span>{intl.get('USERNAME')}: 19999999999</span>
            <span>{intl.get('PASSWORD')}: 123456</span>
          </div>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {intl.get('LOGIN')}
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default observer(Login);
