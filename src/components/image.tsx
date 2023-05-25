import React, { useState } from "react";
import { FileMediaIcon, XIcon } from "@primer/octicons-react";

function Image(props: any) {
  const [modal, setModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {loaded ? null : (
        <div className="image-placeholder">
          <FileMediaIcon size={48} />
        </div>
      )}
      <span
        className="image-wrapper"
        onClick={() => {
          setModal(true);
        }}
        style={{ display: loaded ? "block" : "none" }}
      >
        <img
          className="image"
          src={props.src.replace("./assets", "/images")}
          alt={props.alt}
          onLoad={() => setLoaded(true)}
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
