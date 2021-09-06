import * as S from './styled';
import image from '../../assets/001.jpg'

const MainNew = () => {

    return(
        <S.Container>
            <S.Image src={image}/>
            <S.TextContainer>
                <S.Title>Lorem ipsum dolor</S.Title>
                <S.Date>25 01 2021</S.Date>
                <S.Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat erat, ullamcorper quis lorem vel, facilisis pretium erat. Phasellus scelerisque vestibulum ante eu varius. Nullam a purus lorem. Mauris sit amet erat at metus consectetur pretium. Duis tristique nunc laoreet massa dapibus, a volutpat eros molestie. Phasellus non ultricies massa, quis cursus turpis. Nulla sed risus quam. Mauris sollicitudin, neque ac efficitur semper, ligula sapien gravida tortor, at posuere nisi arcu vitae quam. Nulla erat nunc, tempor at aliquam vel, aliquam non sapien. Nam interdum scelerisque vestibulum. Curabitur facilisis porttitor orci ultrices vehicula. Curabitur vulputate fermentum ex, gravida malesuada elit pulvinar nec. Nullam in est magna. Proin venenatis velit justo, non rhoncus metus ultrices vel. Quisque sollicitudin tortor quis semper venenatis. 
                </S.Content>
                <S.More>Click To Read more</S.More>
            </S.TextContainer>
        </S.Container>
    )
}

export default MainNew;