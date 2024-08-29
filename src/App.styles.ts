import { styled } from "styled-components";
import * as Colors from "./Constants/Colors";
import image from "./Assets/bg.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const ContainerImage = styled.div`
    flex-grow: 0;
    background-image: url(${image});
    background-position: center;
    background-size: cover;

    @media screen and (min-width: 768px){
        flex-grow: 10;
    }

    @media screen and (min-width: 1024px){
        flex-grow: 1;
    }
`;

export const ContainerItems = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    gap: 10px;
    flex-grow: 0.4;

    .custom-input_group{
        margin: 20px 0 0 0;
        width: 300px;
    }

    .custom-input{
        background-color: rgba(0, 0, 0, 0);
        color: ${Colors.WhiteColor};
        border: 2px solid ${Colors.WhiteColor};
        
        &::placeholder{
            color: rgba(255, 255, 255, 0.4);
        }

        &:focus{
            box-shadow: none;
            border: 2px solid ${Colors.PrimaryColor};
        }
    }

    .btn-custom{
        background-color: ${Colors.PrimaryColor};
        border: 0;
    }

    #btn-custom{
        background-color: ${Colors.PrimaryColor};
        border: 3px solid ${Colors.PrimaryColor};
        color: ${Colors.WhiteColor};
    }

    @media screen and (min-width: 768px){
        width: 600px;
    }
`;

export const PasswordText = styled.p`
    background-color: ${Colors.GrayColor};
    padding: 10px;
    border-radius: 10px;
    color: ${Colors.WhiteColor};
    font-weight: bold;
`;

export const Text = styled.h2`
    color: ${Colors.WhiteColor};
    font-size: 3rem;
`;