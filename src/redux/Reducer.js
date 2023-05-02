import userProfilePicture from '../assets/bird.jpg';

const initialState = {
    name:'',
    profilePicture:'',
    posts:'',
    followers:'',
    following:'',
}

const setAllUserDetails = (state = initialState, action) => {
    if(action.type === 'SET_USER_DETAILS'){
        return {
            ...state,
            name:"Rapper VERY",
            profilePicture: userProfilePicture,
            posts:200,
            followers:7000,
            following:10
        }
    }
    else{
        return state;
    }
}

export default setAllUserDetails;