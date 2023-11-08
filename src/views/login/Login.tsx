import React, { useRef } from "react";
import loginSvg from "@/assets/image/login.svg";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";

type FieldType = {
  username?: string;
  password?: string;
};

const Login: React.FC = () => {
  const eleRef = useRef(null);

  const onFinish = (value: FieldType) => {
    console.log(value);
  };

  return (
    <div className="login_page">
      <div className="container">
        <div className="page_left">
          <h1>VITE REACT APP</h1>
          <div className="sign_in">
            <h2>uIswiper @1.0.0</h2>
            <Form onFinish={onFinish} autoComplete="off">
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: "请输入登录账号！" }]}
              >
                <Input
                  size="large"
                  placeholder="输入账户"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: "请输入登录密码!" }]}
              >
                <Input.Password
                  size="large"
                  placeholder="输入密码"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  size="large"
                  type="primary"
                  htmlType="submit"
                  className="login_btn"
                >
                  登 录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        <div className="page_right">
          <img ref={eleRef} src={loginSvg} alt="封面" />
        </div>
      </div>
    </div>
  );
};

export default Login;
