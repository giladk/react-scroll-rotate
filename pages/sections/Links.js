import  { ScrollRotate  }   from '../../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMagic,faKiwiBird} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { LinksWrapper,  CenterContainer, LinkWrapper, LinkText  } from '../styles';

export function Links(props) {
    return (
        <LinksWrapper>
                    <CenterContainer >
                        <LinkWrapper>
                            <FontAwesomeIcon icon={faGithub} width="16"  />
                            <LinkText>src</LinkText>
                        </LinkWrapper>
                        <LinkWrapper>
                            <FontAwesomeIcon icon={faGithub} width="16"  />
                            <LinkText>react-scroll-rotate</LinkText>
                        </LinkWrapper>
                    </CenterContainer>
        </LinksWrapper>     
)}
  
//  default Banner;