export const emailValidator = (email)=>{
    let message = { 
        text:"",
        status:true,
    }
    
    const checkAtTheRate = ()=> /@/.test(email)
    const regex = /^[A-za-z0-9]{3,}@[A-Za-z0-9]{3,}[.][A-Za-z.0-9]{2,9}$/
    if(regex.test(email)){
        message.text ="Email Id is correct";
        message.status = true;
    }
    else if (!checkAtTheRate())    
        
         {
        message.text = "Email Id must contain @"
        message.status =false
    }
    else{
        message.text ="Email Id is invalid"
        message.status =false
    }
    return message;
    
    }
    

