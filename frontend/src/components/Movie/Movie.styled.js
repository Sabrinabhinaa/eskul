import styled from "styled-components";

const StyledMovie = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 0.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    h3 {
        margin-bottom: 0.25rem;
        font-size: 1.75rem;
        color: #4361ee;
    }

    p {
        color: #64748b;
        font-size: 1rem;
        margin-bottom: 0;
    }

    @media (min-width: 576px) {
        flex-basis: calc(50% - 1rem);
        margin: 0.5rem;
    }

    @media (min-width: 768px) {
        flex-basis: calc(33.33% - 1rem);
        margin: 0.5rem;
    }

    @media (min-width: 992px) {
        flex-basis: calc(25% - 1rem);
        margin: 0.5rem;
        padding: 0.5rem;
    }
`;

export default StyledMovie;
