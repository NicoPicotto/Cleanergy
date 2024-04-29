import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import { useAuth } from "../../Context/Context";
import { query, where, getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase";

const PowerBi = () => {
  const { userUid } = useAuth();

  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const getDatos = async () => {
      const docs = [];
      const q = query(
        collection(firestore, "clientes"),
        where("idcliente", "==", userUid)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDatos(docs);
    };
    getDatos();
  }, []);

  return (
    <Stack marginBlock='3em'>
      {datos && (
        <iframe
          title='Report Section'
          width='100%'
          height='636'
          src={datos[0].powerBiApp}
          frameborder='0'
          allowFullScreen={true}
        ></iframe>
      )}
    </Stack>
  );
};

export default PowerBi;
