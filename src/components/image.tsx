import React, { useState } from "react";
import { XIcon } from "@primer/octicons-react";

function Image(props: any) {
  const [modal, setModal] = useState(false);
  return (
    <>
      <span
        className="image-wrapper"
        onClick={() => {
          setModal(true);
        }}
      >
        <img
          className="image"
          src={props.src.replace("./assets", "/images")}
          alt={props.alt}
        />
      </span>
      {modal ? (
        <section className="image-modal">
          <button
            className="image-modal-close"
            onClick={() => {
              setModal(false);
            }}
          >
            <XIcon size={24} />
          </button>
          <img
            className="image-zoom"
            src={props.src.replace("./assets", "/images")}
            alt={props.alt}
          />
        </section>
      ) : null}
    </>
  );
}

export default Image;
