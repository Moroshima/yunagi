import React, { useState } from "react";
import { useHover } from "../utils";
import { CheckIcon, CopyIcon } from "@primer/octicons-react";

const Pre = ({ children, raw, ...props }: any) => {
  const [copy, setCopy] = useState(false);
  const [ref, value] = useHover();

  /* 代码块失去 hover 情况下立刻将按钮状态复位 */
  if (copy === true && value === false) {
    setCopy(false);
  }

  return (
    <div className="code-block-wrapper" ref={ref}>
      {/* 代码块复制按钮 */}
      {copy ? (
        <button className="copy-to-clipboard copy-button-clicked">
          <CheckIcon size={16} />
        </button>
      ) : (
        <button
          className="copy-to-clipboard"
          onClick={() => {
            navigator.clipboard.writeText(raw).then(
              () => {
                setCopy(true);
                setTimeout(() => {
                  if (copy) setCopy(false);
                }, 2000);
              },
              () => {
                console.log("copy failed!");
                alert("copy failed!");
              }
            );
          }}
        >
          <CopyIcon size={16} />
        </button>
      )}
      <pre {...props}>{children}</pre>
    </div>
  );
};

export default Pre;
