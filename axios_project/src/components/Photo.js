import React from "react";
import styled from "styled-components";

const Photo = ({ id, albumId, thumbnailUrl, url, title, setModal }) => {
   return (
      <Item onClick={() => setModal(url)}>
         <img src={thumbnailUrl} />
         <ul>
            <li>
               <span>ID</span> {id}
            </li>
            <li>
               <span>Album ID</span> {albumId}
            </li>
            <li>
               <span>Title</span> {title}
            </li>
         </ul>
      </Item>
   );
};

export default Photo;

const Item = styled.div`
   display: flex;
   align-items: center;
   position: relative;
   margin-bottom: 15px;
   padding: 20px;
   border-radius: 10px;
   box-shadow: 0 5px 5px 5px #ccc;
   cursor: pointer;
   img {
      width: 150px;
      height: 150px;
   }
   ul {
      list-style-type: none;
      li {
         line-height: 2;
         span {
            display: inline-block;
            width: 100px;
            font-weight: bold;
            font-size: 1.1em;
         }
      }
   }
   &:hover {
      top: -3px;
      background: #f2f2f2;
   }
`;
