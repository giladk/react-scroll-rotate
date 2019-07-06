import  { ScrollRotate  }   from '../../src';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp, faMoon } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper,
    ExampleCodePre, ExampleDemoWrapper, ExampleDemoButtonWrapper
} from '../styles';
import  ScrollPanel  from '../components/ScrollPanel';


export function AnimationDuration(props) {
    let [loops,setLoops] = useState(1);
    let [duration,setDuration] = useState(0.1);
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            Animation duration <ScrollRotate method={"perc"} loops={7} to={180} animationDuration={0.5} ><FontAwesomeIcon icon={faHourglass}  /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo style={{minHeight:'60vh'}}>
        <ExampleContent>
            <p>Use 'animationDuration' props to set animation duration by Seconds<br/>Defaults: 0.1</p>
            <div>
                <span>Loops: </span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={loops}
                       onBlur={(e)=>{setLoops(parseFloat(e.target.value))}}  />
                <span>Duration:</span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={duration}
                       onBlur={(e)=>{setDuration(parseFloat(e.target.value))}}  />
                
                
            </div>
            <ScrollPanel target={"animation-demo"} />
            <br/>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate animationDuration={0.3}>\n`+
                `   <span>0.3s Animation duration</span\n`+
                `</ScrollRotate>`
                }
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper style={{width:'80px',alignItems:'flex-end'}}>
              
                <span>By px:</span><br/>
                <span>{(duration).toFixed(2)} d</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate  target={'animation-demo'} animationDuration={duration}><FontAwesomeIcon icon={faMoon} color={'#ff8f00'}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>By Loops:</span><br/>
                <span>0 d</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate  target={'animation-demo'} method={"perc"} loops={loops} animationDuration={0}><FontAwesomeIcon icon={faMoon} color={'#36a1ff'}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{(duration).toFixed(2)} d</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate target={'animation-demo'} method={"perc"}  loops={loops} animationDuration={duration} ><FontAwesomeIcon icon={faMoon}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{(duration+0.2).toFixed(2)} d</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate target={'animation-demo'} method={"perc"}  loops={loops} animationDuration={duration+0.2} ><FontAwesomeIcon icon={faMoon} color={"#861abb"} size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{(duration+0.4).toFixed(2)} d</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate target={'animation-demo'} method={"perc"}  loops={loops} animationDuration={duration+0.4} ><FontAwesomeIcon icon={faMoon}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
             
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}