import React from "react";

//Para ver o tamanho da tela para aplicar o css no determinado tamanho
const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);
  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);
  return match;
};

export default useMedia;
