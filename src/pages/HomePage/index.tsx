import React from "react";
import { useNavigate } from "react-router-dom";
import { CenterContainer, HomeContainer, CenterImg, ContentContainer, ContentTitle, ContentDescription, ButtonYellow, ButtonBlue, StrabImg } from "./styles";
import assets from "./assets";
import strings from "./strings";

export interface HomePageProps { }

const HomePage: React.FC<HomePageProps> = (props) => {
    const navigate = useNavigate();
    return (
        <HomeContainer>
            <StrabImg src={assets.strab_branco} />
            <CenterContainer>
                <CenterImg src={assets.people} alt="People" />
                <ContentContainer>
                    <ContentTitle>{strings.title}</ContentTitle>
                    <ContentDescription>{strings.description}</ContentDescription>
                    <ButtonYellow onClick={() => navigate('/new-user')}>{strings.buttonNewUser}</ButtonYellow>
                    <ButtonBlue onClick={() => navigate('/login')}>{strings.buttonLogin}</ButtonBlue>
                </ContentContainer>
            </CenterContainer>
        </HomeContainer >
    )
}

export default HomePage;