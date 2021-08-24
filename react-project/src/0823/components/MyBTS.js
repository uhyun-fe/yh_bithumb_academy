
import React from 'react'

class MyBTS extends React.Component{
    state = { 
        idols: [ 'bts방탄', 'blackpink', 'wanaone' ] ,
        images:[ '/images/bts.png', '/images/blackpink.png',   '/images/wanaone.png'   ]
    }

    render(){
        let arr = this.state.idols;
        let str = [];
        for(let i=0; i<arr.length; i++){ 
            str.push(<b key={i} style={{fontSize:'20pt'}}> {arr[i]}&nbsp;</b>); 
        }

        let dol = this.state.images.map((item, i)=> {
            return <img key={i} src={item} width='150' height='100'></img>
        });

        return(
            <div>
                <h1>MyBTS.js</h1>
                {str} <p></p>
                {dol}
            </div>
        );
    }
}//class END

export default  MyBTS ;

