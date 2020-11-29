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
`;
