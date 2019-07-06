import  { ScrollRotate  }   from '../../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGithub , faNpm } from '@fortawesome/free-brands-svg-icons'
import { CenterContainer, ExampleSection, WhatTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper, 
    ExampleCodePre, ExampleDemoWrapper, LinksWrapper, LinkWrapper, LinkText
} from '../styles';


export function What(props) {
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <WhatTitle>
            <div>
            What  <ScrollRotate method={"perc"} loops={6} animationDuration={0.3} >?</ScrollRotate>
            </div>
            <div>
            <LinksWrapper>    
                        <LinkWrapper href="https://github.com/giladk/react-scroll-rotate">
                            <FontAwesomeIcon icon={faGithub} size="1x" width="16" />
                            <LinkText>src</LinkText>
                        </LinkWrapper>
                        <LinkWrapper href="https://www.npmjs.com/package/react-scroll-rotate" style={{color:'#f32400'}}>
                            <FontAwesomeIcon icon={faNpm} size="1x"   width="16"/>
                            <LinkText>react-scroll-rotate</LinkText>
                        </LinkWrapper>
            </LinksWrapper> 
            </div>
        </WhatTitle>
        <ExampleContentAndDemo>
        <ExampleContent>
            <p>react-scroll-rotate is a very simple react ScrollRotateonent that rotate children based on scroll poistion.</p>
            <p>So for example, this "What?" title will look like this:</p>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<Title> // Styled ScrollRotateonent for example\n  What <ScrollRotate>?</ScrollRotate>\n</Title>`}
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper>
                    <ScrollRotate method={"perc"}><FontAwesomeIcon icon={faStar} size="2x" color={"#36a1ff"}/></ScrollRotate>
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
          
        </ExampleSection>
)}