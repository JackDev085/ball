import React from 'react';

function Modal({ link }) {
  return (
      <iframe
        className="videoif"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${link}?si=bblT9k0Wp6vk-n0U`}
        title="Reprodutor de vídeo do YouTube"
        frameBorder='0'
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
  );
}

export default Modal;
