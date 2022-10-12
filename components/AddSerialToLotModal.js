import styles from "../styles/AddSerialToLotModal.module.css"
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const  AddSerialToLotModal = ({ show, onClose, children, title, lot }) => {
        const [isBrowser, setIsBrowser] = useState(false);
      
        useEffect(() => {
          setIsBrowser(true);
        }, []);
      
        const handleCloseClick = (e) => {
          e.preventDefault();
          onClose();
        };
      
        const modalContent = show ? (
          <StyledModalOverlay>
            <StyledModal className={styles.modal}>
              <StyledModalHeader>
                <a href="#" onClick={handleCloseClick}>
                  x
                </a>
              </StyledModalHeader>
              {title && <StyledModalTitle>{title}</StyledModalTitle> }
              <StyledModalBody>{children}</StyledModalBody>
              <h1>{lot}</h1>
              <input></input>
              <button>Submit</button>
            </StyledModal>
          </StyledModalOverlay>
        ) : null;
      
        if (isBrowser) {
          return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
          );
        } else {
          return null;
        }
      };
      
      const StyledModalBody = styled.div`
        padding-top: 10px;
      `;
      
      const StyledModalHeader = styled.div`
        display: flex;
        justify-content: flex-end;
        font-size: 25px;
      `;
      
      const StyledModal = styled.div`
        width: 500px;
        height: 600px;
        border-radius: 15px;
        padding: 15px;
      `;
      const StyledModalOverlay = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
      `;
  
  export default AddSerialToLotModal;
  


