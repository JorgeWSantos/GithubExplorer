import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    line-height: 56px;
    margin-top: 80px;
    max-width: 450px;
`;

export const Form = styled.form`
    margin-top : 40px;
    max-width: 714px;
    display:flex;

    input{
        flex: 1;
        height: 70.8px;
        padding: 0 24px;
        border:0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder{
            color: #a8a8b3;
        }
    }

    button{
        width: 210px;
        height: 70.8px;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        color: #fff;
        border: 0;
        font-weight: bold;
        transition: background-color 1.2s;

        &:hover{
            background: ${shade(0.2, '#04D361')}
        }
    }
`;


export const Repositories = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 714px;
    margin-top: 80px;


    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 15px;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: 0.2s;
        
        &:hover{
            transform: translate(10px);
            /* font: 16px Roboto, sans-serif; */
        }

        & + a {
            margin-top: 16px;
        }


        img{
            max-width: 83px;
            max-height: 83px;
            border-radius: 50%;
        }

        div{
            margin: 0 16px;
            flex: 1;
            margin-left: 20px;

            strong{
                font-size: 20px;
                color: #3D3D4D;
            }

            p{
                font-size:18px;
                color: #A8A8B3;
            }
        }

        svg {
            margin-left: auto;
            color: #C9C9D4;
        }
    }
    
`;
