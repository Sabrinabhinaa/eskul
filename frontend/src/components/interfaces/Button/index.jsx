import styled, { css } from "styled-components";


// color object for button variant




// Create Button component
const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #4361ee;
    cursor: pointer;

    // akses props variant
    background-color: ${({ variant, theme }) => theme.colors[variant] || theme.colors.primary};

    // PROPS full
    ${(props) => props.full && css`
        display: block;
        width: 100%;
    `}

    // PROPS size
    
`;


// Export Button
export default Button;