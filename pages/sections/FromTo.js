import  { ScrollRotate  }   from '../../src';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper,
    ExampleCodePre, ExampleDemoWrapper, ExampleDemoButtonWrapper
} from '../styles';
import  ScrollPanel  from '../components/ScrollPanel';


export function FromTo(props) {
    let [loops,setLoops] = useState(1);
    let [from,setFrom] = useState(90);
    let [to,setTo] = useState(270);
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            From - To <ScrollRotate method={"perc"} loops={7} to={180} animationDuration={0.5} ><FontAwesomeIcon icon={faArrowUp}  /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo style={{minHeight:'40vh'}}>
        <ExampleContent>
            <p>Use 'from' and 'To' props to adjust the range of the circle<br/>Defaults: 0 - 360</p>
            <div>
                <span>Loops: </span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={loops}
                       onBlur={(e)=>{setLoops(parseFloat(e.target.value))}}  />
                <span>From:</span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={from}
                       onBlur={(e)=>{setFrom(parseInt(e.target.value))}}  />
                <span>To:</span>
                <input style={{width:'50px'}} type="number" defaultValue={to}
                       onBlur={(e)=>{setTo(parseInt(e.target.value))}}  />
                
            </div>
            <ScrollPanel target={"from-to-demo"} />
            <br/>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate from={90} to={270}>\n`+
                `   <span>From 90 to 270 Deg</span\n`+
                `</ScrollRotate>`
                }
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper style={{width:'60px',alignItems:'flex-end'}}>
              
                <span>By px</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate from={from} to={to} target={'from-to-demo'} animationDuration={0.3}><FontAwesomeIcon icon={faArrowUp} color={'#36a1ff'}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{loops} loop</span>
                <ExampleDemoButtonWrapper>
                <ScrollRotate method={"perc"} loops={loops} from={from} to={to} target={'from-to-demo'}><FontAwesomeIcon icon={faArrowUp}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{loops + 1} loops</span>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={loops+1} from={from} to={to} target={'from-to-demo'} animationDuration={0.3}><FontAwesomeIcon color={'#36a1ff'}  icon={faArrowUp}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <span>{loops + 2} loops</span>
                <ExampleDemoButtonWrapper>
                    
                    <ScrollRotate method={"perc"} loops={loops+2} from={from} to={to} target={'from-to-demo'} animationDuration={0.5}><FontAwesomeIcon icon={faArrowUp}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}