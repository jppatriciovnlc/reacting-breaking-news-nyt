import react from 'react';
import * as S from './styled';

import { MainNew, StandardNews } from '../../components'

const Home = () => {

    const news = [
        '1',
        '1',
        '1',
        '1',
        '1',
        '2'
    ]


    return(
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderTitle>Reacting Breaking News</S.HeaderTitle>
                <S.HeaderSubTitle>A React Solution Using the X API</S.HeaderSubTitle>
            </S.HeaderContainer>
            <S.BodyContainer>
                <MainNew/>
                <S.NewsContainer>
                    {
                        news.map((n) => {
                            return(
                                <StandardNews />
                            )
                        })
                    }
                </S.NewsContainer>
            </S.BodyContainer>
            
        </S.Container>
    )


}

export default Home;