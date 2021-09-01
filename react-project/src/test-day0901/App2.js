// Redux, Material-UI 학습

import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Material-UI
import { Button, TextField, makeStyles } from "@material-ui/core";

const useType = makeStyles((theme) => ({
   margin: {
      margin: theme.spacing(2),
   },
}));

export function App() {
   const [loading, setLoading] = useState(true);
   const classes = useType();

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 2000);
   });

   return (
      <Container>
         <TextField id="" label="글제목" name="guestTitle" />
         <TextField id="" label="글쓴이" name="guestName" />
         <Button variant="contained" color="primary">
            BUTTON1
         </Button>
         <Button variant="contained">BUTTON2</Button>
         <Button variant="contained" color="secondary" className={classes.margin}>
            BUTTON3
         </Button>
         <Button variant="contained" color={loading ? "default" : "primary"}>
            BUTTON4
         </Button>
      </Container>
   );
}

export default App;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   > *:not(:last-child) {
      /* margin-bottom: 20px; */
   }
`;
