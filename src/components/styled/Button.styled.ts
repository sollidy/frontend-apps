import styled from "styled-components";

export const Button = styled.button<{ bg?: string, color?: string }>`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({ bg }) => bg || ' #fff'};
    color: ${({ color }) => color || ' #333'};
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`