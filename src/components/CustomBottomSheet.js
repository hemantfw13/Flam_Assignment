import React from "react";
import { useEffect, useRef, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import "./CustomBottomSheet.css"

const CustomBottonSheet = () => {
  const [open, setOpen] = useState(true);
  const focusRef = useRef();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <p>
      
      <button onClick={() => setOpen(open => !open)} ref={focusRef}>
        {open ? "Close" : "Open"}
      </button>
      <BottomSheet
        open={open}
        onDismiss={() => setOpen(false)}
        blocking={false}
        snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
       
      >
        <div  className="bottomSheetDiv">
        <h1>I am Hemant Ahire</h1>
        <h3>Full Stack Web Developer</h3>


        </div>
      </BottomSheet>
    </p>
  );
};

export default CustomBottonSheet;
