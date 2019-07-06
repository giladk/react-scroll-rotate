import  { ScrollRotate  }   from '../../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faCat } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper, ExampleCodePre, ExampleDemoWrapper,
} from '../styles';


export function DefaultConfigs(props) {
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            Default configs <ScrollRotate method={"perc"} loops={6} animationDuration={0.3} ><FontAwesomeIcon icon={faCog} /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo>
        <ExampleContent>
            <p>By default, without any prop, ScrollRotate will rotate based on Scroll top 1px=1deg</p>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate>\n  <span>Rotate me</span>\n</ScrollRotate>`}
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper >
                    <ScrollRotate><FontAwesomeIcon icon={faCat} size="2x" color={"#861abb"}/></ScrollRotate>
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}