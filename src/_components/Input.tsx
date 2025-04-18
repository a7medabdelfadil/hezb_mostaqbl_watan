import React, { useState } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  name?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, name, type = "text" }) => {
  const [hasValue, setHasValue] = useState(false);
  const isArabic = /[\u0600-\u06FF]/.test(label); // Check if Arabic

  return (
    <StyledWrapper $isArabic={isArabic}>
      <div className="form-control">
        <input
          type={type}
          name={name}
          onChange={(e) => setHasValue(e.target.value.trim() !== "")}
          className={hasValue ? "filled" : ""}
        />
        <label>
          {isArabic ? (
            <span>{label}</span>
          ) : (
            label.split("").map((char, i) => (
              <span key={i} style={{ transitionDelay: `${i * 50}ms` }}>
                {char}
              </span>
            ))
          )}
        </label>
      </div>
    </StyledWrapper>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
const StyledWrapper = styled.div<{ $isArabic: boolean }>`
  .form-control {
    position: relative;
    margin: 20px 0 40px;
    width: 100%;
    unicode-bidi: isolate;
    text-align: right; 
  }

  .form-control input,
  .form-control textarea {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #515151 solid;
    display: block;
    width: 100%;
    padding: 15px 0;
    font-size: 18px;
    color: #000;
    text-align: right; 
  }

  .form-control input:focus {
    outline: 0;
    border-bottom-color: #207ceb;
  }

  .form-control label {
    position: absolute;
    top: 15px;
     ${(props) => (props.$isArabic ? "right" : "left")}: 0;

    pointer-events: none;
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #999;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  /* 👉 Focused OR Not Empty */
  .form-control input:focus + label span,
  .form-control input.filled + label span {
    color: #207ceb;
    transform: translateY(-30px);
  }
`;

export default Input;
