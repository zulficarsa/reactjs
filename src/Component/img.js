import React from 'react';
import {Link,NavLink} from 'react-router-dom';
let Img = ()=>{
    

    return(
        <div className="img">
            <h1 className="z1">مكتبة الخوارزمي للعلوم الرياضية</h1>
             <img className="z3" src="./src/Component/1.jpg"/>
            <ul className="z4">
            <NavLink activeClassName="z22" exact to="/">الصفحة الرئيسية</NavLink>
      
            <NavLink activeClassName="z22" to="/pro">الكتب</NavLink>

            </ul>
        </div>
    )
};
export default Img;