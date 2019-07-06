import  { ScrollRotate  }   from '../../src';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import {  faDragon } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    AnimationDurationNote,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper,
    ExampleCodePre, ExampleDemoWrapper, ExampleDemoButtonWrapper 
} from '../styles';
import  ScrollPanel  from '../components/ScrollPanel';


export function Throttle(props) {
    let [loops,setLoops] = useState(1);
    let [throttle,setThrottle] = useState(0.1);
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            Throttle <ScrollRotate method={"perc"} loops={7} to={180} animationDuration={0.5} ><FontAwesomeIcon icon={faClock}  /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo style={{minHeight:'70vh'}}>
        <ExampleContent>
            <p>Use 'throttle' prop to invoke the update once in X seconds<br/>
                Defaults: null<br/>
                *Throttle is not used by default<br/>
                *When you use 'throttle' prop you probably want to also add 'animationDuration' prop with +- same value
            </p>
            <div>
                <span>Throttle: </span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={throttle}
                       onBlur={(e)=>{setThrottle(parseFloat(e.target.value))}}  />
                <span>Loops:</span>
                <input style={{width:'50px'}} type="number" defaultValue={loops}
                       onBlur={(e)=>{setLoops(parseFloat(e.target.value))}}  />
            </div>
            <ScrollPanel target={"throttle-demo"} />
            <br/>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate throttle={0.1}>\n`+
                `   <span>I will rotate every 0.1s</span\n`+
                `</ScrollRotate>`
                }
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper style={{width:'80px',alignItems:'flex-end',flexDirection:'col'}}>
                <span style={{color:'#36a1ff'}}>* = With animation duration</span><br/>
                <span>By px:</span><br/>
                <span>{(throttle).toFixed(2)} th'</span>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate  target={'throttle-demo'} throttle={throttle} ><FontAwesomeIcon icon={faDragon} color={'#861abb'}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate  target={'throttle-demo'} throttle={throttle} animationDuration={throttle} ><FontAwesomeIcon icon={faDragon} color={'#861abb'}  size="2x"/></ScrollRotate>
                    <AnimationDurationNote>*</AnimationDurationNote>
                </ExampleDemoButtonWrapper>
                <span>Loops:</span><br/>
                <span>{(throttle).toFixed(2)} th'</span>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={loops} throttle={throttle} target={'throttle-demo'}><FontAwesomeIcon icon={faDragon}  size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                <ScrollRotate method={"perc"} loops={loops} throttle={throttle} animationDuration={throttle} target={'throttle-demo'}><FontAwesomeIcon icon={faDragon}  size="2x"/></ScrollRotate>
                    <AnimationDurationNote>*</AnimationDurationNote>
                </ExampleDemoButtonWrapper>
                <span>{(throttle + 0.4).toFixed(2)} th'</span>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={loops} throttle={throttle+0.4}  target={'throttle-demo'} ><FontAwesomeIcon icon={faDragon} color={'green'} size="2x"/></ScrollRotate>
                </ExampleDemoButtonWrapper>
                <ExampleDemoButtonWrapper>
                    <ScrollRotate method={"perc"} loops={loops} throttle={throttle+0.4} animationDuration={throttle+0.4} target={'throttle-demo'} ><FontAwesomeIcon icon={faDragon} color={'green'}  size="2x"/></ScrollRotate>
                    <AnimationDurationNote>*</AnimationDurationNote>
                </ExampleDemoButtonWrapper>
              
            </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}