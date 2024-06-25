import React, { useEffect, useState } from "react";
import { Stack, Heading, Divider } from "@chakra-ui/react";
import { query, getDocs, collection } from "firebase/firestore";
import { firestore } from "../../firebase";

const EmbedsAdmin = () => {
   const [datos, setDatos] = useState(null);

   useEffect(() => {
      const getDatos = async () => {
         const docs = [];
         const q = query(collection(firestore, "clientes"));
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
         {datos &&
            datos.map((datos, index) => (
               <Stack key={index}>
                  <Heading mb={5} fontWeight='bold' fontFamily='fonts.open'>
                     {datos.nombre}
                  </Heading>
                  <iframe
                     title={`Report Section ${index}`}
                     width='100%'
                     height='500'
                     src={datos.powerBiApp}
                     frameBorder='0'
                     allowFullScreen={true}
                  ></iframe>
                  <Divider marginBottom='2em' marginTop='2em' />
               </Stack>
            ))}
      </Stack>
   );
};

export default EmbedsAdmin;
