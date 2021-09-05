import { useEffect, useState } from "react";
import styled from "styled-components";

import Photo from "./components/Photo";
import Modal from "./components/Modal";
import { photoApi } from "./utils/api";

function App() {
   const [loading, setLoading] = useState(true);
   const [list, setList] = useState([]);
   const [selectedItem, setSelectedItem] = useState(false);

   useEffect(() => {
      getPhotoList();
   }, []);

   async function getPhotoList() {
      try {
         const { data } = await photoApi.getList();
         setLoading(false);
         setList(data);
      } catch (error) {
         console.error(error);
      }
   }
   return (
      <div className="App">
         {loading ? (
            <LoadingSpan>Loading...</LoadingSpan>
         ) : (
            <Container>
               {list.map((item, i) => (
                  <Photo key={i} setModal={(url) => setSelectedItem(url)} {...item} />
               ))}
            </Container>
         )}
         {selectedItem && <Modal img={selectedItem} closing={() => setSelectedItem(false)} />}
      </div>
   );
}

export default App;

const LoadingSpan = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 90vh;
   font-size: 3em;
`;

const Container = styled.div`
   height: 98vh;
   overflow: auto;
`;
