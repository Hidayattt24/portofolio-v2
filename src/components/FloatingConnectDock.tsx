"use client";

import { cn } from "@/lib/utils";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const socialItems = [
  {
    name: "Email",
    icon: <Mail className="w-5 h-5 text-red-500" />,
    href: "mailto:hidayatnurhakim2412@gmail.com",
    color: "hover:bg-red-50",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5 text-blue-600" />,
    href: "https://linkedin.com/in/hidayatnurhakim",
    color: "hover:bg-blue-50",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5 text-gray-800" />,
    href: "https://github.com/hidayatnurhakim",
    color: "hover:bg-gray-50",
  },
  {
    name: "Resume",
    icon: <FileText className="w-5 h-5 text-orange-600" />,
    href: "/resume.pdf",
    color: "hover:bg-orange-50",
  },
];

export const FloatingConnectDock = () => {
  return (
    <>
      <FloatingConnectDockDesktop />
      <FloatingConnectDockMobile />
    </>
  );
};

const FloatingConnectDockMobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("mailto:")) {
      window.open(href, "_blank");
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="social-nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2 items-end"
          >
            {socialItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (socialItems.length - 1 - idx) * 0.05 }}
              >
                <button
                  onClick={() => handleClick(item.href)}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors",
                    item.color
                  )}
                >
                  {item.icon}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#A3D977] shadow-lg hover:bg-[#8BC34A] transition-colors"
      >
        <Mail className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};

const FloatingConnectDockDesktop = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex h-16 items-center gap-4 rounded-full bg-white/90 backdrop-blur-sm px-6 shadow-xl border border-white/20"
    >
      <div className="flex items-center mr-2">
        <span className="text-sm font-medium text-gray-700 mr-4">
          Let's Connect
        </span>
        <div className="h-6 w-[1px] bg-gray-200" />
      </div>

      {socialItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.name} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  name,
  icon,
  href,
  color,
}: {
  mouseX: MotionValue;
  name: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-100, 0, 100], [40, 50, 40]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [40, 50, 40]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (href.startsWith("mailto:")) {
      window.open(href, "_blank");
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <button onClick={handleClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex items-center justify-center rounded-full transition-colors",
          color
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md bg-gray-800 px-2 py-1 text-xs text-white whitespace-nowrap"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        {icon}
      </motion.div>
    </button>
  );
}
