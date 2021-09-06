import axios from "axios";

// Search Api
export const getData = async () => {
   const selectUrl = "http://localhost:4000/data";
   const response = await axios.get(selectUrl);
   return response.data;
};

// Save Api
export async function saveData(saveData) {
   // Update Api
   if (saveData.data.bno !== "" && saveData.data.bno !== null) {
      const updateUrl = "http://localhost:4000/data/" + saveData.data.id;
      const response = await axios.put(updateUrl, {
         bno: saveData.data.bno,
         bname: saveData.data.bname,
         btitle: saveData.data.btitle,
         bwdate: new Date().toLocaleDateString("ko-KR"),
      });
      return response;
   }
   // Insert Api  saveData.data.no,
   else {
      const insertUrl = "http://localhost:4000/data";
      const response = await axios.post(insertUrl, {
         id: saveData.lastId + 1,
         bno: saveData.lastId + 1,
         bname: saveData.data.bname,
         btitle: saveData.data.btitle,
         bwdate: new Date().toLocaleDateString("ko-KR"),
      });
      return response;
   }
}

// delete Api
export async function removeData(id) {
   const removeUrl = "http://localhost:4000/data/" + id;
   const response = await axios.delete(removeUrl);
   return response;
}
