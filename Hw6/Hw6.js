
let inputStr = prompt("0 ден 99 гедейынгы санды еңгызтңыз:");
        if (inputStr <100 &&inputStr >=0) {
            if(inputStr.length == 1){
                alert("Бірінші сан:" + inputStr)
            }else
            alert("Бірінші сан:" + inputStr[0] + "\nЕкінші сан:" + inputStr[1]);
        }
        else {
            alert("Қате еңгізіңізіңіз!")
        }