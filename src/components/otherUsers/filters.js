import React from'react'
import {useSelector, useDispatch} from 'react-redux'

 const filters=(props)=>{
    console.log(props)
// const dispatch=useDispatch()
    let maleOnly= this.props.users.filter((user) => {
        return user.gender === "male";
     });
let femaleOnly= this.props.users.filter((user) => {
       return user.gender === "female";
    });
let nonBinaryOnly= this.props.users.filter((user) => {
     return user.gender === "x";
  });
let maleAndFemale = this.props.users.filter((user) => {
 return user.gender !== "x";
});
let nonBinaryAndFemale = this.props.users.filter((user) => {
return user.gender !== "male";
});  
let nonBinaryAndMale = this.props.users.filter((user) => {
return user.gender !== "female";
}); 


let heteroOnly= this.props.users.filter((user) => {
return user.sexualOrientation === "heterosexual";
}); 
let homoOnly= this.props.users.filter((user) => {
return user.sexualOrientation === "homosexual";
});
let biOnly= this.props.users.filter((user) => {
return user.sexualOrientation === "bisexual";
});


let heteroMale= maleOnly.filter(user=>{
return user.sexualOrientation === "heterosexual"
})
let heteroFemale = femaleOnly.filter(user=>{
return user.sexualOrientation === "heterosexual"
})
let heteroNonBinary= nonBinaryOnly.filter(user=>{
return user.sexualOrientation === "heterosexual"
})

let homoMale= maleOnly.filter(user=>{
return user.sexualOrientation === "homosexual"
})
let homoFemale = femaleOnly.filter(user=>{
return user.sexualOrientation === "homosexual"
})
let homoNonBinary= nonBinaryOnly.filter(user=>{
return user.sexualOrientation === "homosexual"
})


let biMale= maleOnly.filter(user=>{
return user.sexualOrientation === "bisexual"
})
let biFemale = femaleOnly.filter(user=>{
return user.sexualOrientation === "bisexual"
})
let biNonBinary= nonBinaryOnly.filter(user=>{
return user.sexualOrientation === "bisexual"
})
return(
  console.log()
)
  
 }
 export default filters