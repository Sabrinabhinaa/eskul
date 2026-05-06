import styled from "styled-components";

const StyledAddMovie = styled.div`
    margin-bottom: 1rem;

    img {
        max-width: 100%;
        height: auto;
        border-radius: 25px;
    }

    h2 {
        font-size: 2.44rem;
        color: #06d6a0;
        margin-bottom: 1rem;
    }

    label {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 768px) {
            flex-direction: column;
            text-align: center;
        }
    }

    .formLeft {
        flex: 1;
        margin-right: 2rem;
        text-align: center;

        @media (max-width: 768px) {
            margin-right: 0;
            margin-bottom: 1rem;
        }
    }

    .formRight {
        flex: 1;
        text-align: left;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    .formGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
    }

    .formInput {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
`;

export default StyledAddMovie;
