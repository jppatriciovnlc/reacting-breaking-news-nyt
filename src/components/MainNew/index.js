import * as S from './styled';
import { useSelector } from 'react-redux';

const MainNew = () => {    
    const { mainNew } = useSelector((state) => state.nytInfo);     

    const title = mainNew ? mainNew.headline.main : '';
    const content = mainNew ? mainNew.lead_paragraph : '';
    const url = mainNew ? mainNew.web_url : '';
    let img = ''

    if(mainNew){        
        img = `https://www.nytimes.com/${mainNew.multimedia[0].url}`
    }
    

    return(
        <S.Container>
            <S.Image src={img}/>
            <S.TextContainer>
                <S.Title>{title}</S.Title>
                <S.Date>25 01 2021</S.Date>
                <S.Content>
                    {content}
                </S.Content>
                <S.More href={url}>Click To Read more</S.More>
            </S.TextContainer>
        </S.Container>
    )
}

export default MainNew;