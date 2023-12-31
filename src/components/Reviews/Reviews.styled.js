import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1300px;

    margin-left: auto;
    margin-right: auto;

    @media (min-width: 425px) {
        padding-left: 15px;
        padding-right: 15px;
    }

    @media (min-width: 768px) {
        padding-left: 0;
        padding-right: 0;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const List = styled.ul`
    list-style: none;

    padding: 0;
`;

export const Item = styled.li`
    margin-bottom: 15px;
`;

export const Author = styled.h3`
    background-color: #f1f1f1;
    border-bottom: 1px solid #212529;
    border: 1px solid #212529;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    margin: 0;
    padding: 8px 16px;

`;

export const Text = styled.p`
    border-left: 1px solid #212529;
    border-right: 1px solid #212529;
    border-bottom: 1px solid #212529;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    margin: 0;

    padding: 5px;
    font-size: 12px;

    @media (min-width: 425px) {
        padding: 16px;
        font-size: 15px;
    }
`;

