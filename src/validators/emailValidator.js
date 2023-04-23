const emailValidator = (email)=>{
    let message ={
        text:"",
        status:false
    }
    const checkAtTheRate =()=> /@/.test(email)
    const regex = /^[A-za-z]{3,}@[A-Za-z]{3,}[.][A-Za-z.]{2,9}$/ 
    if(regex.test(email)){
        message.status = true
    }
    else{
        
        message.text ="Email Id is invalid"
        if(!checkAtTheRate()) message.text ="Email Id must contain @"

        message.status ="false"
       
    }
    return message
}

console.log(emailValidator('piyush.gov.co.in'))