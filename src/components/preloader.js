import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';
import logo from '../assets/images/preload.svg';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
        <div className="loader">
          <span style={{ "--i": 1 }}>L</span>
          <span style={{ "--i": 2 }}>o</span>
          <span style={{ "--i": 3 }}>a</span>
          <span style={{ "--i": 4 }}>d</span>
          <span style={{ "--i": 5 }}>i</span>
          <span style={{ "--i": 6 }}>n</span>
          <span style={{ "--i": 7 }}>g</span>
          <span style={{ "--i": 8 }}>.</span>
          <span style={{ "--i": 9 }}>.</span>
          <span style={{ "--i": 10 }}>.</span>
        </div>
      {/* <LinearProgressWithLabel value={progress} /> */}
      </div>
    </Box>
  );
}
