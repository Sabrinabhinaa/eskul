import styled from 'styled-components';

const StyledMovies = styled.div`
    margin: 1rem;

    section {
        margin: 5rem 0;
        text-align: center;
    }

    h2 {
        color: #4361ee;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    @media (min-width: 576px) {
        .movie {
            flex-basis: calc(50% - 1rem);
            margin: 0.5rem;
        }
    }

    @media (min-width: 768px) {
        .movie {
            flex-basis: calc(33.33% - 1rem);
            margin: 0.5rem;
        }
    }

    @media (min-width: 992px) {
        .container {
            max-width: 1200px;
            margin: 3rem auto;
        }

        .movie {
            flex-basis: calc(25% - 1rem);
            padding: 1rem;
        }
    }
`;

export default StyledMovies;
