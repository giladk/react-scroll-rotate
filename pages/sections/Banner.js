import  { ScrollRotate  }   from '../../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMagic,faKiwiBird} from '@fortawesome/free-solid-svg-icons'
import { BannerWrapper, CenterContainer, Title, NpmInstallWrapper, BannerIconPositionOne,
    BannerIconOne, BannerIconPositionTwo, BannerIconPositionThree  } from '../styles';

export function Banner(props) {
    return (
        <BannerWrapper>
                    <CenterContainer flex="col">
                        <Title>react-scroll-rotate</Title>
                        <NpmInstallWrapper>npm install --save react-scroll-rotate</NpmInstallWrapper>
                    </CenterContainer>
                    <BannerIconPositionOne>
                        <ScrollRotate method={"perc"}>
                    <BannerIconOne >
                    <FontAwesomeIcon icon={faCoffee} width="16"  />
                    </BannerIconOne>
                    </ScrollRotate>
                    </BannerIconPositionOne>

                    <BannerIconPositionTwo>
                        <ScrollRotate method={"perc"} loops={2} animationDuration={0.3}>
                    <BannerIconOne style={{ color:'#662188'}}>
                    <FontAwesomeIcon icon={faMagic} width="20" />
                    </BannerIconOne>
                    </ScrollRotate>
                    </BannerIconPositionTwo>
                    <BannerIconPositionThree>
                        <ScrollRotate>
                    <BannerIconOne style={{ color:'#4c0b00'}}>
                    <FontAwesomeIcon icon={faKiwiBird} size="lg" />
                    </BannerIconOne>
                    </ScrollRotate>
                    </BannerIconPositionThree>
        </BannerWrapper>     
)}
  
//  default Banner;