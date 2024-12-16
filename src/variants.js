export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 1
      },
    },
};

export const slideFromOffset = (direction) => {
    return {
        hidden: { 
            x: direction === "left"? '-100vw' : direction === "right"? '100vw' : 0,
            y: direction === "down"? '-100vh' : direction === "top"? '100vh' : 0,
            opacity: 0
        },
        visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.5} }
    }   
};

export const slide = (direction, value, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === "up"? value : direction === "down"? -value : 0,
            x: direction === "left"? value : direction === "right"? -value : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: delay,
                // type: "spring"
                // ease: "easeOut"
            }
        }
    }
}
  
export const fadeIn = (scaleStart, duration,  delay, ease) => {
    return {
        hidden: { opacity: 0, scale: scaleStart },
        visible: { opacity: 1, scale: 1, transition: { duration: duration, delay: delay, type: "spring", damping: 50, stiffness: 200, ease: ease} }
    }
};

export const fadeOut = {
hidden: { opacity: 1, scale: 1 },
visible: { opacity: 0, scale: 0, transition: { duration: 1 } },
};
  
export const bounce = {
hidden: { opacity: 0, y: -50 },
visible: { opacity: 1,y: 0, transition: { duration: 1, delay: 0.5, type: 'spring', stiffness: 300, damping: 30, ease: "easeIn" } },
};


export const pageVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
};


export const imgVariation = {
    hidden: {opacity: 0, scale: 0.5,  x: "100vw"},
    visible: {opacity: 1, scale: 1, x: 0, transition: {
        default: {
            duration: 1,
            ease: "easeOut"
        },
        // rotate: {
        //     duration: 1.5,
        //     delay: 1,
        //     ease: "easeInOut"
        // },
        scale: {
            duration: 0.5,
            delay: 1,
            ease: "easeInOut"
        }
        
    },
    
    }
}



export const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Staggering child animations by 0.2 seconds
      },
    },
  };
  
  export const childVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Slide up effect
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  
  
  