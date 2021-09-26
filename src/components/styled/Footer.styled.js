import styled from "styled-components";

export const StyledFooter = styled.footer`

    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 80px 0 10px;

    ul {
        list-style-type: none;
    }
    ul li {
        margin-bottom: 20px;

    }
    p {
        text-align: center;
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }
    }
`