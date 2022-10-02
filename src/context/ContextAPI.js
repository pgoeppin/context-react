import React from "react";
import axios from "axios";

export const ContextApi = React.createContext({});

const ApiProvider = (props) => {
  /* definir los hooks useState */
  const [picList, setPicList] = React.useState([]);
  const [favPicList, setFavPicList] = React.useState([]);
  /* obtener la info del json */
  React.useEffect(() => {
    const getPictures = async () => {
      try {
        const endpoint = "./fotos.json";
        const response = await axios.get(endpoint);
        setPicList(response.data.photos);
      } catch (error) {
        console.log(error);
      }
    };
    getPictures();
  }, []);
  /* funcion que cambia el estado "liked" de cada objeto */
  const likePhoto = (id) => {
    const favPics = picList.map((element) => {
      if (element.id === id) {
        return { ...element, liked: !element.liked };
      }
      return element;
    });
    setPicList(favPics);
    /* para elegir las fotos con like */
    setFavPicList(
      favPics.filter((element) => {
        if (element.liked === true) {
          return element;
        }
      })
    );
  };
  return (
    <ContextApi.Provider
      value={{ picList, setPicList, likePhoto, setFavPicList, favPicList }}
    >
      {props.children}
    </ContextApi.Provider>
  );
};
export default ApiProvider;
