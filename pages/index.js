

import {PageContainer  } from './styles';
import  { Banner, What, DefaultConfigs, Loops, Target, FromTo, Throttle, AnimationDuration } from "./sections/index";

function Home() {
    return <PageContainer>
                <Banner/>
                <What />
                <DefaultConfigs />
                <Loops />
                <Target/>
                <FromTo />
                <Throttle />
                <AnimationDuration />
        </PageContainer>
  }
  
  export default Home;