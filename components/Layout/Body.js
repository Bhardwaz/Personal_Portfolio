import React, { useEffect, useRef } from 'react';
import Plane from "../../assests/Body/plane.gif"
import Clouds from "../../assests/Body/clouds.png"

const Body = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1, // Trigger when 50% of the target is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
      console.log(targetRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Do something when the target is visible
        console.log('Target is visible!');
      }
    });
  };
  return(
    <div ref={targetRef} className='w-full mt-10 relative'>
       <img className='mx-auto w-[90%]' src={Clouds} alt="clouds" />
       <img className='absolute top-1/4 left-1/3 w-[18%]' src={Plane} alt='plane' />
       <h1 className='font-[Sacramento] absolute text-white left-[38%] top-2/3 text-6xl'>Sumit Bhardwaj</h1>
       <h1 className='absolute text-white left-[38%] top-3/3 text-3xl'> I am a <span> Frontend Developer </span> </h1>
    </div> 
  )
};

export default Body;
