const qrimg = document.querySelector("#qrimg")
const inputbox = document.querySelector("#inputbox")
const generatebtn = document.querySelector("#generatebtn")

generatebtn.onclick = () => {
    let inputvalue = inputbox.value
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`
    let imgsize=(inputvalue)? qrimg.style = `height:200px;width:200px`: qrimg.style = `height:0px;width:0px`
}