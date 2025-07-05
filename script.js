let ism=prompt("Ism kiriting")
let harf=prompt("Harif kiriting")
if(ism.toLowerCase().includes(harf.toLowerCase())){
    alert(`${ism} ismda ${harf} harf mavjud`)
}else{
    alert(`${ism} ismda ${harf} harf mavjud emas`)
}