import  { ScrollRotate  }   from '../../src';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faHippo } from '@fortawesome/free-solid-svg-icons'
import { CenterContainer, ExampleSection, ExampleTitle,
    ExampleContentAndDemo, ExampleContent, ExampleCodeWrapper,
    ExampleCodePre, ExampleDemoWrapper
} from '../styles';
import  ScrollPanel  from '../components/ScrollPanel';


export function Target(props) {
    let [loops,setLoops] = useState(1);
    return (
        <ExampleSection>
        <CenterContainer flex="col">
        <ExampleTitle>
            Target <ScrollRotate method={"perc"} loops={6} animationDuration={0.3} ><FontAwesomeIcon icon={faHashtag} /></ScrollRotate>
        </ExampleTitle>
        <ExampleContentAndDemo>
        <ExampleContent>
            <p>Select target to control the ScrollRotateonent.</p>
            <div>
                <span>Loops: </span>
                <input style={{width:'50px',marginRight:'16px'}} type="number" defaultValue={loops}
                       onBlur={(e)=>{setLoops(parseInt(e.target.value))}}  />    
            </div>
            <ScrollPanel target={"target-demo"} />
            <br/>
            <ExampleCodeWrapper>
                <ExampleCodePre>
                {`import  { ScrollRotate } from 'react-scroll-rotate';\n\n<ScrollRotate target={"target-element-id"}>\n`+
                `   <span>I will response to #target-element-id scroll</span>\n`+
                `</ScrollRotate>`
                }
                </ExampleCodePre>
            </ExampleCodeWrapper>
        </ExampleContent>
        <ExampleDemoWrapper style={{width:'60px',alignItems:'flex-end'}}>
                <span>{loops} loop</span>
                <ScrollRotate  target={'target-demo'} method={"perc"} loops={loops} >
                    <FontAwesomeIcon icon={faHippo} size="2x" color={"#861abb"}/>
                </ScrollRotate>
                <span>{loops+1} loops</span>
                    <ScrollRotate  target={'target-demo'}  method={"perc"} loops={loops+1} >
                        <FontAwesomeIcon icon={faHippo} size="2x"color={"#ff8f00"} />
                    </ScrollRotate>
                    <span>{loops+2} loops</span>
                    <ScrollRotate  target={'target-demo'} method={"perc"} loops={loops+2} >
                        <FontAwesomeIcon icon={faHippo} size="2x" color={"#00ada6"}/>
                    </ScrollRotate>
        </ExampleDemoWrapper>
        </ExampleContentAndDemo>
        </CenterContainer>
            
            
        </ExampleSection>
)}