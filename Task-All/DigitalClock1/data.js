//  digital clock time

setInterval(function(){
    document.getElementById('digital_clock').innerHTML=new Date().toLocaleTimeString()
},1000)