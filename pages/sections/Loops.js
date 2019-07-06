import  { ScrollRotate  }   from '../../src';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper,
    ExampleCodePre, ExampleDemoWrapper, ExampleDemoButtonWrapper, ExampleDemoButton
} from '../styles';


export function Loops(props) {
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            Loops <ScrollRotate method={"perc"} loops={6} animationDuration={0.3} ><FontAwesomeIcon icon={faRedo} /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo style={{minHeight:'40vh'}}>
        <ExampleContent>
            <p>Use 'method' prop with 'perc' value to rotate based of scroll percantges</p>
            <p>
                Use 'loops' prop to define how many rotations ScrollRotateonent will do during the scroll<br/>
                Defualt is 1
            </p>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate method={"perc"}>\n`+
                `   <span>One loop</span\n`+
                `</ScrollRotate>\n`+
                `<ScrollRotate method={"perc"} loops={3}>\n`+
                `   <span>Three loops</span>\n`+
                `</ScrollRotate>`
                }
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={1}><ExampleDemoButton>1</ExampleDemoButton></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={2}><ExampleDemoButton>2</ExampleDemoButton></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={3}><ExampleDemoButton>3</ExampleDemoButton></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={4}><ExampleDemoButton>4</ExampleDemoButton></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={5}><ExampleDemoButton>5</ExampleDemoButton></ScrollRotate>
                </ExampleDemoButtonWrapper>
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}