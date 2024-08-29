import { styled } from "styled-components";
import * as Colors from "./Constants/Colors";
import image from "./Assets/bg.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const ContainerImage = styled.div`
    flex-grow: 1;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
`;

export const ContainerItems = styled.div`
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px;
    gap: 10px;
    flex-grow: 0.4;

    .password-custom{
        font-size: 1.4rem;
    }

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
`;

export const Text = styled.h2`
    color: ${Colors.WhiteColor};
    font-size: 3rem;
`;