import React from 'react';

function Modal({ link }) {
  return (
      <iframe
        className="videoif"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${link}?si=bblT9k0Wp6vk-n0U`}
        title="Reprodutor de vídeo do YouTube"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder='0'
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
  );
}

export default Modal;

// function Modal(link) {
//   const linkInicial="YwE6Mf1UViY"
//   return (
//     <iframe
//       class="videoif"
//       width="560"
//       height="315"
//       src={`https://www.youtube.com/embed/${linkInicial}?si=bblT9k0Wp6vk-n0U`}
//       title="Reprodutor de vídeo do YouTube"
//       frameborder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//       referrerpolicy="strict-origin-when-cross-origin"
//       allowfullscreen
//     ></iframe>
//   );
// }
// export default Modal;
