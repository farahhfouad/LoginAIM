import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Logo from '../aim_final_logo.png';



function Login() {
    const [username, setusername] = useState<string>();
    const [password, setPass] = useState<string>();


    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === "user") {

            setusername(e.target.value);
        }
        else {

            setPass(e.target.value);
        }

    }



    const login = (event: React.FormEvent) => {
        event.preventDefault();
        const element = document.getElementById("checkbox") as HTMLInputElement;
        console.log(`Username: ${username} Password: ${password} Remember Me? ${element.checked}`);
        let thrown: boolean = false;
        fetch('http://localhost:8000/getUser', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {

            if (res.status === 200) {
                console.log("SUCCESS" + JSON.stringify(res));
                alert("Login Succesful ");
            }
            if (res.status === 400) {

                alert("Incorrect Password");
            }

            if (res.status === 500) {
                console.log("error?");
                thrown = true;
                alert("Incorrect Username");
            }
        }).catch(error => {

            console.log(error + "error")

        });


    }
    const { Title } = Typography;
    return (


        <Row align="middle" className="row" >
            <Col lg={12} sm={24} md={24} xs={24}  >

                <img src={Logo} alt="Logo" className="logo" />

            </Col >

            <Col lg={12} sm={24} md={24} xs={24} className="divider"
            >
                <Title id="title" level={2}>Welcome Back!</Title>

                <Form onSubmitCapture={login} className="form" labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal">
                    <Form.Item justify-content="center" align-items="middle"

                        name="username"

                        rules={[{ required: true, message: 'Username Cannot be Empty' }]} className='user'
                    >

                        <Input name="user" value={username} onChange={onChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" id='uservalue' />
                    </Form.Item>

                    <Form.Item

                        name="password"
                        rules={[{ required: true, message: 'Password Cannot be Empty!' }]}
                    >

                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password" value={password} onChange={onChange} id="pass" />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox id="checkbox" >Remember Me</Checkbox>
                    </Form.Item>


                    <Form.Item >
                        <Button type="primary" htmlType="submit" shape="round" size="large" className="button" >
                            Sign In
        </Button>


                    </Form.Item>
                </Form>
            </Col>
        </Row >


        // </div>

    )

}

export default Login;