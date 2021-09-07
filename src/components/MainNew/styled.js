import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #363535;
    color: #fff;
    min-height: 250px;

    @media(max-width: 800px) {
        flex-direction: column;
    }
`
export const Image = styled.img`
    width: 300px;
    height: 200px;
    object-fit: cover;

    @media(max-width: 800px) {
        margin-top: 10px;
    }
`

export const TextContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    margin-left: 10px;
    max-width: 600px;

    @media(max-width: 800px) {
        padding: 10px;
        margin-left: 0px;
    }
`

export const Title = styled.p`
    font-family: 'Roboto';
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 5px;
    
`

export const Content = styled.p`
    font-family: 'Roboto';
    margin-bottom: 5px;
    text-align: justify;
    font-size: 1.0rem;
    
`

export const Date = styled.p`
    font-family: 'Roboto';
    margin-bottom: 15px;
    font-size: 0.8rem;
`

export const More = styled.a`
    font-family: 'Roboto';
    margin-bottom: 5px;
    font-size: 0.8rem;
    color: #377ad4;
    cursor: pointer;
`