export const enterFromRight = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        overFlowX: "hidden",
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            delay: 0.1,
            // stiffness:100
        },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            // stiffness:120
        },
    },
};

export const enterFromLeft = {
    hidden: {
        opacity: 0,
        x: "-100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1,
            delay: 0.3,
            // stiffness:100
        },
    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            // stiffness:120
        },
    },
};

export const logoGoToTop = {
    hidden: {
        y: "-100vw",
    },
    visible: {
        y: 0,
        transition: {
            type: "tween",
            duration: 0.5,
            delay: 0.3,
            stiffness: 80,
        },
    },
    exit: {
        opacity: 0,
        y: "100vw",
    },
};

export const alertDance = {
    hidden: {
        scale: "95%",
    },
    visible: {
        scale: "100%",
        transition: {
            type: "tween",
            duration: 0.2,
            repeat: Infinity,
        },
    },
};
export const blinking = {
    hidden: {
        opacity: 0.5,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            repeat: Infinity,
        },
    },
};

