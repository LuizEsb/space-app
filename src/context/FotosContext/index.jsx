import { createContext, useState } from "react";

import fotosGaleria from "../../fotos.json";

export const FotosContext = createContext();

export const FotosProvider = ({ children }) => {
  const [fotos, setFotos] = useState(fotosGaleria);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotos(
      fotos.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !fotoDaGaleria.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FotosContext.Provider
      value={{ fotos, setFotos, fotoSelecionada, setFotoSelecionada, aoAlternarFavorito }}
    >
      {children}
    </FotosContext.Provider>
  );
};
