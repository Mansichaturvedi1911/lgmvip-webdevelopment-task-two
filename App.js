import React from "react";
import "./App.css";
 import Cards from "./Components/Card";
 <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.css"></link>
function App() {
    const [isDateLoaded, setIsDateLoaded] = React.useState(false);
    const [userData, setUserData] = React.useState([]);
    const [isButtonClick, setisButtonClick] = React.useState(false);
    const handleClick = () => {
        setisButtonClick(true);
        fetch("https://reqres.in/api/users?page=1").then((response) => response.json())
            .then((res) => {
                setUserData(res.data); setInterval(() => { setIsDateLoaded(true); },
                    4000);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return(
    <>
        <section className="full">
            <nav className="navbar navbar-expand-lg navbar-light glassnav">
            <div className="container-fluid">
                <span className="icon">I-EDUCARE  </span>
                
                <i class="fas fa-bell"></i>
                <span className="but">
                    
                    <button className="Btn" onClick={handleClick}>GET USERS</button>
                    
                </span>
            </div>
                     </nav>
            <div className="container">
                <div className="row justify-content-center ">
                    {isButtonClick ? (isDateLoaded ? (<Cards userData={userData} />) : (<div className="col-4 mt-5">
                        <h5 className="h4"> wait </h5> <span className="loader">
                            <img className="loader" alt="" src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-4.jpg"/></span></div>)):
                        (<div className="col-6 col-sm-8 text"> <b></b> </div>)}
                </div>
            </div>
        </section>
         </>);
}
export default App;