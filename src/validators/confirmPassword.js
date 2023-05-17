export function confirmPasswordCheck(p1, p2) {

    let message = {
        text:"",
        status:false
    }
    
    if(p1 === p2){
        message = {
        text:"Your password matches !",
        status:true
        }
    }
    else{
        message.status = false;
        message.text = "Password is not matching..."
    }
    return message;
}