import { resDetailLink } from "./constants";
import { useState, useEffect } from "react";

const useRestuarantDetail = (resId) => {
  const [rsDtl, setRsDtl] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi(){
    const data = await fetch(resDetailLink + resId);
    const json = await data.json();
    
    setRsDtl(json.data.cards);
  }

  return rsDtl;
};

export default useRestuarantDetail;
