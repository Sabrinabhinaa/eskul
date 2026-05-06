import styled from 'styled-components';

const StyledHero = styled.div`
    margin-bottom: 1rem;

    section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
    }

    h2 {
        color: #4361ee;
        margin-bottom: 1rem;
        font-size: 2.44rem;

        @media (max-width: 768px) {
            font-size: 2rem;
        }

        @media (max-width: 480px) {
            font-size: 1.75rem;
        }
    }

    h3 {
        color: #b5179e;
        margin-bottom: 1rem;
        font-size: 1.59rem;

        @media (max-width: 768px) {
            font-size: 1.4rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }

    p {
        color: #64748b;
        margin-bottom: 1rem;
        font-size: 1.25rem;

        @media (max-width: 768px) {
            font-size: 1.1rem;
        }

        @media (max-width: 480px) {
            font-size: 1rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    .hero__left {
        flex-basis: 40%;
        padding-right: 1rem;
        text-align: left;

        @media (max-width: 768px) {
            flex-basis: 100%;
            padding-right: 0;
            margin-bottom: 1rem;
            text-align: center;
        }
    }

    .hero__right {
        flex-basis: 60%;
        display: flex;
        justify-content: flex-end;

        @media (max-width: 768px) {
            flex-basis: 100%;
            justify-content: center;
        }
    }

    @media screen and (min-width: 768px) {
        section {
            padding: 2rem;
        }
    }

    @media screen and (min-width: 922px) {
        section {
            padding: 3rem;
        }
    }
`;

export default StyledHero;
