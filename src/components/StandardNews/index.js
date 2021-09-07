import * as S from './styled';


const StandardNews = (props) => {

    const title = props.item.abstract ? props.item.headline.main : '';

    const content = props.item.lead_paragraph ? props.item.lead_paragraph : '';
    const url = props.item.web_url ? props.item.web_url : '';
    let img = ''

    if(props.item){        
        img = `https://www.nytimes.com/${props.item.multimedia[0].url}`
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

export default StandardNews;