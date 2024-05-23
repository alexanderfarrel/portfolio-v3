import { useEffect, useState } from "react"
import {delay, motion} from "framer-motion"


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const [initial,setInitial ] = useState(true)
    const [dumping, setDumping] = useState(10)
    useEffect(() => {
        setTimeout(() => {
            setInitial(false)
        }, 9000)
        setTimeout(() => {
            setDumping(30)
        }, 9500)
    },[])

    const variants = {
        initial: {
            clipPath: "circle(20px at 50% 50%)",
            x:50
        },
        open: {
            clipPath: "circle(150px at 50% 50%)",
            x:0,
            transition: {
                type: "spring",
                stiffness: 220,
                damping: 40,
              },
        },
        close: {
            clipPath: "circle(20px at 50% 50%)",
            x:0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: dumping,
              },
        },
    }

    const hamburgerVariants ={
        lineFirstOpen: {
            rotate: -45,
            originX: "right",
            y: -3,
            x: -4,
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
            x: -4,
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
        <motion.nav className="absolute right-0 top-0 bottom-0 w-20 flex justify-center items-center">
            <div className="w-full h-full max-h-[18rem] max-w-[3.5rem] flex justify-center items-center relative rounded-full overflow-hidden">
            <motion.div className="w-full h-full absolute bg-gray-700/70 blur-xl z-10" variants={variants} animate={initial ? "initial" : open ? "open" : "close"}/>
            <div className="w-6 h-4 flex flex-col justify-between z-10 cursor-pointer" onClick={() => setOpen(!open)} id="hamburger">
                <motion.span variants={hamburgerVariants} animate={open ? "lineFirstOpen" : "lineFirstClose"} className="w-full h-[2px] bg-white"/>
                <motion.span variants={hamburgerVariants} animate={open ? "lineSecondOpen" : "lineSecondClose"} className="w-full h-[2px] bg-white"/>
                <motion.span variants={hamburgerVariants} animate={open ? "lineThirdOpen" : "lineThirdClose"} className="w-full h-[2px] bg-white"/>
            </div>
            </div>
        </motion.nav>
    )
}