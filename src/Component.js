import React from "react";
import throttle from "lodash/throttle";
import PropTypes from 'prop-types';

const wrapperStyles = {
    display: 'inline-block',
    position: 'relative'
}

export class ScrollRotate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientHeight:0,
            scrollTop:0,
            topPercentage:0,
            scrollOnce:false,
            getOnce:false
        }
        this.handleFunc = null;
    }

    getStartValues() {
      const { target } = this.props;
      if (target){
        // document.getElementById(props.target)
        // TODO
      }else {
        const clientHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const topPercentage = scrollTop / (  document.documentElement.offsetHeight - clientHeight ) * 100;
        this.setState({clientHeight,scrollTop,topPercentage});
      }
      this.setState({getOnce:true});
    }

    updateValues(e) {
      const { target } = this.props;
      const se = target ? e.srcElement : e.srcElement.scrollingElement;
      const { clientHeight , scrollTop } = se;
      const topPercentage = scrollTop / (  (target ? se.scrollHeight : se.offsetHeight) - clientHeight ) * 100;
      this.setState({clientHeight,scrollTop,topPercentage,scrollOnce:true});
    }

    setScrollHandle(){
      let handleScrollThrottle = throttle((e) => {
        this.updateValues(e);
      }, this.props.throttle ? 1000 * this.props.throttle : 0, {leading:false});

      let handleScroll = (e) => {
        this.updateValues(e);
      };

      const { target } = this.props;
      let handle = this.props.throttle ? handleScrollThrottle : handleScroll;
      let targetElement = target ? document.getElementById(target) : window;
      if (targetElement !== null){
        targetElement.addEventListener('scroll', handle);
        return () => {
            targetElement.removeEventListener('scroll', handle);
        };
      }
      return () => {};
    }

    getAnimationStyles() {
        const {scrollOnce} = this.state;
        const {animationDuration} = this.props;
        return  { 
            transform: `rotate(${this.getDeg()}deg)`,
            transition: !scrollOnce ? '' : `transform ${(animationDuration || animationDuration===0) ? animationDuration : '0.1'}s`,
        }
    }

    getDeg() {
        const { method } = this.props;
        const from = this.props.from || 0;
        const to = this.props.to || 360;
        if (method === 'perc'){
          const { topPercentage : perc} = this.state;
          const loops = this.props.loops || 1;
          const currentLoop = parseInt( loops*perc/100)+ ( perc !== 100 ? 1 : Number.isInteger(loops) ? 0 : 1);
          return ((perc / 100) - (1/loops*(currentLoop-1))) * (to-from) * loops + from + (360*(currentLoop-1)*(from>to?-1:1));
        } else {
          const { scrollTop } = this.state;
          const currentLoop = parseInt(scrollTop/(to-from));
          return (( scrollTop - (currentLoop*(to-from)) ) *(from>to?-1:1) + (from + (360*currentLoop)));
        }
      }

    componentDidMount() {
        this.getStartValues();
        this.removeHandleFunc = this.setScrollHandle();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.throttle !== this.props.throttle){
            this.removeHandleFunc();
            this.removeHandleFunc = this.setScrollHandle();
        }
    }

    componentWillUnmount() {
        this.removeHandleFunc();
    }


    render(){
        const {getOnce} = this.state;
        const rotateStyles = this.getAnimationStyles();
        return <div style={{position:'relative',display: 'inline-block',...this.props.style}}>
                {getOnce && <div style={{...wrapperStyles,...rotateStyles}}>
                    {this.props.children}
                </div>
            }
        </div>
    }
}
  
ScrollRotate.propTypes = {
    target: PropTypes.string,
    throttle: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    method: PropTypes.string,
    loops: PropTypes.number,
    animationDuration: PropTypes.number
}

ScrollRotate.defaultProps = {
    target: null,
    throttle: null,
    from: 0,
    to: 360,
    method: 'px',
    loops: 1,
    animationDuration :0.1
}
