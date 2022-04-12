import React, {useState} from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return(
    <div>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </div>
  )
}


//Create Component GuestPage
function GuestPage(props) {
  return(
    <div>
      <h1>Please Sign</h1>
      <button onClick={props.login}>Login</button>
    </div>
  )
}


function ConditionRenderin() {
  //init State
  const [isLogin, setIslogin] = useState(false)

  console.log("isLogin", isLogin);

  return (
    // Code Inside div

    <div>{/* conditional logic rendering */}
      {
        isLogin ? 
          <PrivatePage logout={() => setIslogin(false)} /> 
        : 
          <GuestPage login={() => setIslogin(true)} />
      }


      {/* {isLogin ? 
      
      <>
        <p>Selamat datang</p>
      </>      
      : 
      <>
        <button>Register</button>
        <button>Login</button>
      </>
       } */}
    
    
    </div>
  );
}

export default ConditionRenderin;
