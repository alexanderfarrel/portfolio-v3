import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [initial, setInitial] = useState(true);
    const [options, setOptions] = useState({ isHidden: false, startCount: false });
    const { isHidden, startCount } = options;
    const [timeoutId, setTimeoutId] = useState(null); // state to store the timeout ID

    useEffect(() => {
        if (startCount) {
            const id = setTimeout(() => {
                if (!open) {
                    setOptions({ isHidden: true, startCount: false });
                }
            }, 3000);
            setTimeoutId(id); // store the timeout ID

            // cleanup function to clear the timeout if startCount changes
            return () => clearTimeout(id);
        }
    }, [startCount, open]);

    useEffect(() => {
        const time = setTimeout(() => {
            setInitial(false);
            setOptions({ isHidden: false, startCount: true });
        }, 9000);

        return () => clearTimeout(time);
    }, []);

    const handleClick = () => {
        if (isHidden) {
            setOptions({ isHidden: false, startCount: false });
            setTimeout(() => {
                setOpen(true);
            }, 100);
        } else {
            if (!open) {
                setOpen(true);
                setOptions({ startCount: false });

                if (timeoutId) {
                    clearTimeout(timeoutId); // clear the timeout if it exists
                }
            } else {
                setOpen(false);
                setOptions({ startCount: true });
            }
        }
    };

    console.log(open)

    const variants = {
        open: {
            clipPath: "circle(150px at 50% 50%)",
            x:0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 220,
                damping: 40,
              },
        },
        close: {
            clipPath: "circle(20px at 50% 50%)",
            x:0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 30,
              },
        }
    }

    const hamburgerVariants ={
        lineFirstOpen: {
            rotate: -45,
            originX: "right",
            y: -0,
            x: -3,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
        lineFirstClose: {
            rotate: 0,
            y: 0,
            originX: "right",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
        lineSecondOpen: {
            scale: 0,
        },
        lineSecondClose: {
            scale: 1,
        },
        lineThirdOpen: {
            rotate: 45,
            originX: "right",
            x: -3,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
        lineThirdClose: {
            rotate: 0,
            y: 0,
            originX: "right",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        },
    }

   

    return (
        <motion.nav className="absolute right-0 top-0 bottom-0 w-24 flex justify-center items-center overflow-hidden" animate={initial ? {x: "100%"} : {x: 0}} initial={{x: "100%"}}>
            <motion.main className="w-full h-full max-h-[18rem] max-w-[3rem] flex justify-center items-center relative rounded-full overflow-hidden scale-0" animate={initial ? {scale: 0} : isHidden ? {scale: 1, x:"100%"} : {scale: 1}}>
            <motion.div className="w-full h-full absolute bg-gray-700/70 blur-xl z-10 scale-0" variants={variants} animate={open ? "open" : "close"}/>
            <div className="w-9 h-9 py-[10px] px-2 flex flex-col justify-between z-10 cursor-pointer" onClick={() => handleClick()} id="hamburger">
                <motion.span variants={hamburgerVariants} animate={open ? "lineFirstOpen" : "lineFirstClose"} className="w-full h-[2px] bg-white"/>
                <motion.span variants={hamburgerVariants} animate={open ? "lineSecondOpen" : "lineSecondClose"} className="w-full h-[2px] bg-white"/>
                <motion.span variants={hamburgerVariants} animate={open ? "lineThirdOpen" : "lineThirdClose"} className="w-full h-[2px] bg-white"/>
            </div>
            </motion.main>
                
                <div id="roundedBlue" className="w-full h-full absolute bg-blue-500 scale-[1.5]" style={{clipPath: "circle(20px at 50% 50%)"}}/>
        </motion.nav>
    )
}