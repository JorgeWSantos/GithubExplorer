import styled from  'styled-components';

export const Header = styled.header`
    display:flex;
    align-items: center;
    justify-content:space-between;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8a8;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
        margin-left: 24px;

        strong {
            font-size: 36px;
            color: #3d3d4d;
        }

        p {
            font-size: 18px;
            color: #737380;
            margin-top:4px;
        }
    }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {

            //todo que tem o li o precedendo recebe esse estilização
            & + li {
                margin-left: 80px;
            }

            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                color: #6e6e80;
            }
        }
    }
    
`;


export const Issues = styled.div`
    display:flex;
    flex-direction: column;
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
