const txtareaNode=document.querySelector(".txtarea")
const capsNode=document.querySelector(".fa-circle")
const rr2c1Node=document.querySelector(".rr2c1")
let capsFlag=true
let nmFlag=true
let f="'"
const n=/[0-9]/

function caps(){
    if(capsFlag==true){
        capsNode.style.color="#fff" 
        capsFlag=false      
    }
    else{
        capsNode.style.color="black"
        capsFlag=true
    }
}
function nm(){
    if(nmFlag==true){
        rr2c1Node.style.color="#fff" 
        nmFlag=false      
    }
    else{
        rr2c1Node.style.color="black"
        nmFlag=true
    }
}
function fun(d){
    if(rr2c1Node.style.color=="rgb(255, 255, 255)"){
            if(d.match(n)){
                txtareaNode.value=txtareaNode.value+d
            }
    }
    else{

        if(capsNode.style.color=="rgb(255, 255, 255)"){
            txtareaNode.value=txtareaNode.value+d.toUpperCase()
        }
        else{
            txtareaNode.value=txtareaNode.value+d.toLowerCase()
        }
    }
}

function del(){
    txtareaNode.value=""
}
function bckspc(){
    txtareaNode.value=txtareaNode.value.slice(0,txtareaNode.value.length-1)
}
