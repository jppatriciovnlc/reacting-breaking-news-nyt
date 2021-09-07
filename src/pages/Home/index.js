import { useState, useEffect } from 'react';
import * as S from './styled';
import { GetArticles } from '../../services';
import { MainNew, StandardNews } from '../../components';

import { useSelector, useDispatch } from 'react-redux';
import { setMainNew, setNews } from '../../redux/modules/nytInfo';



/*
let auxMinNew = articles[0]
            dispatch(setMainNew(auxMinNew))
            let auxNews = articles.slice(1)
            dispatch(setNews(auxNews))             
            console.log(mainNew)
            console.log(news)

*/

const Home = () => {

    const dispatch = useDispatch(); 
    const { mainNew, news } = useSelector((state) => state.nytInfo);

    let articles;

    useEffect(() => {        
        GetArticles()
            .then((res) => {
                articles = res;                
                let auxMainNew = articles[0]                
                dispatch(setMainNew(auxMainNew))
                let auxNews = articles.slice(1)
                dispatch(setNews(auxNews))
            })
    },[])


    return(
        <S.Container>
            <S.HeaderContainer>
                <S.HeaderTitle>Reacting Breaking News</S.HeaderTitle>
                <S.HeaderSubTitle>A React Solution Using the New York Times API</S.HeaderSubTitle>
            </S.HeaderContainer>
            <S.BodyContainer>
                <MainNew />
                <S.NewsContainer>
                    {
                        news.map((item) => {
                            return(
                                <StandardNews item={item} key={item._id}/>
                            )
                        })
                    }
                </S.NewsContainer>
            </S.BodyContainer>
            
        </S.Container>
    )


}

export default Home;