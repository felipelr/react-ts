import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Card, CardContent, LinearProgress } from "@mui/material";
import strings from "./strings";
import { ErrorText, InputEmail, InputPassword, FormContainer, ButtonLink, ButtonLinkUnderline, ButtonYellow, LoginCenterContainer, LoginContainer, LoginTitle, StrabImg } from "./styles";
import assets from "./assets";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { fetchLogin } from "../../slices/authSlice";
import { useNavigate } from "react-router-dom";

export interface LoginPageProps { }

const LoginPage: React.FC<LoginPageProps> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userType, loading, isAuth, message, token } = useAppSelector(state => state.auth)
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-jwt-token']);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            if (userType === "professional")
                navigate('/professional');
            else
                navigate('/client');
        }
    }, [isAuth])

    useEffect(() => {
        if (token) {
            setCookie('cookie-jwt-token', token, { path: '/' });
        }
    }, [token])

    const handleClickLogin = () => {
        if (email.length > 0 && password.length > 0)
            dispatch(fetchLogin({ email, password }));
    }

    const handleClickNewUser = () => {
        navigate('/new-user')
    }

    return (
        <LoginContainer>
            <StrabImg src={assets.strab_branco} alt="Logo" />
            <LoginCenterContainer>
                <Card>
                    <CardContent>
                        {loading && <LinearProgress color="secondary" />}
                        {message && <ErrorText>{message}</ErrorText>}
                        <LoginTitle>{strings.title}</LoginTitle>
                        <FormContainer>
                            <InputEmail
                                label="Email"
                                name="Email"
                                value={email}
                                onChange={(event => setEmail(old => event.target.value))}
                            />
                            <InputPassword
                                id="LoginPassword"
                                label="Senha"
                                name="Senha"
                                value={password}
                                onChange={(event => setPassword(old => event.target.value))}
                                onKeyUp={(event) => {
                                    if (event.key === 'Enter')
                                        handleClickLogin();
                                }}
                            />
                            <ButtonYellow onClick={handleClickLogin}>{strings.buttonLogin}</ButtonYellow>
                            <ButtonLinkUnderline>{strings.buttonForgotPassword}</ButtonLinkUnderline>
                            <ButtonLink onClick={handleClickNewUser}>{strings.newUser}</ButtonLink>
                        </FormContainer>
                    </CardContent>
                </Card>

            </LoginCenterContainer>

        </LoginContainer>
    )
}

export default LoginPage;