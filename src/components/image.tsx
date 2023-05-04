import React, { useState } from "react";
import { XIcon } from "@primer/octicons-react";

const Image = (props: any) => {
  console.log(props);
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div
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
      </div>
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
    </div>
  );
};

export default Image;
