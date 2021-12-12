import "./Login.css";
import { useState } from "react";
import authImage1 from "../../assets/auth-image1.png";
import * as AuthenticationApi from "mock-authentication-api";
import authImage2 from "../../assets/auth-image2.png";
import AppButton from "../../components/app-button/AppButton";
import { Input, Divider, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import logo from "../../assets/logo4.svg";

const Login = () => {
  const [user, setUser] = useState({});
  const [current, setCurrent] = useState(1);

  const netWorkLatency = 1000;

  // User store: Could add more users
  const userStore = [
    { id: 1, username: "ebobomaxwwell25@gmail.com", password: "password" },
    { id: 2, username: "test@gmail.com", password: "password" },
  ];
  AuthenticationApi.configure(netWorkLatency, userStore);

  const handleSubmit = async () => {
    if (current === 1) {
      const currUser = userStore.find((u) => u.username === user?.username);
      if (!currUser) {
        return notification.error({
          title: "Error",
          message: "Invalid user",
        });
      }
      setCurrent(2);
    }
    if (current === 2) {
      try {
        const res = await AuthenticationApi.authenticate(
          user?.username,
          user?.password
        );
        notification.success({
          message: "Credentials validated sucessfully",
        });
      } catch (ex) {
        notification.error({
          title: "Error",
          message: ex,
        });
      }
    }
  };

  return (
    <div className="Auth">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="Auth-box">
        <div className="center">
          <p className="Auth-heading">Log in</p>
          <p className="Auth-tex">Access your resource edge account</p>
          <div className="mt20">
            {current === 1 ? (
              <Input
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter email"
                style={{ height: "40px" }}
              />
            ) : (
              <Input.Password
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter Password"
                style={{ height: "40px" }}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            )}
            <div className="mt20 mb50">
              <AppButton disabled={!user?.username} onClick={handleSubmit}>
                Next
              </AppButton>
            </div>
            <Divider />
            <div>
              <p className="Auth-forget">Forgot password?</p>
            </div>
          </div>
        </div>
      </div>
      <img src={authImage1} alt="" className="Auth-image1" />
      <img src={authImage2} alt="" className="Auth-image2" />
    </div>
  );
};

export default Login;
