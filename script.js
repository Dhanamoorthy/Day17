setTimeout(()=>{
    document.getElementById("count down").innerHTML=10;
    setTimeout(()=>{
        document.getElementById("count down").innerHTML=9;
        setTimeout(()=>{
            document.getElementById("count down").innerHTML=8;
            setTimeout(()=>{
                document.getElementById("count down").innerHTML=7;
                setTimeout(()=>{
                    document.getElementById("count down").innerHTML=6;
                    setTimeout(()=>{
                        document.getElementById("count down").innerHTML=5;
                        setTimeout(() => {
                            document.getElementById("count down").innerHTML=4;
                            setTimeout(()=>{
                                document.getElementById("count down").innerHTML=3;
                                setTimeout(() => {
                                    document.getElementById("count down").innerHTML=2;
                                    setTimeout(()=>{
                                        document.getElementById("count down").innerHTML=1;
                                        setTimeout(()=>{
                                            document.getElementById("count down").innerHTML="Happy Independence Day"
                                        },1000)
                                    },1000)
                                },1000);
                            },1000)
                        },1000);
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000);
},1000);