function electronConfiguration(electronNumber){
    var output = "";
    output += "1s";
    if (electronNumber==1){
        output += "<sup>1</sup>";
        return output;
    }
    output +="<sup>2</sup>"
    switch(true) {
        case (electronNumber >= 3):
            output += "2s";
            if (electronNumber == 3){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 4){
                break;
            }
        case (electronNumber >= 5):
            output += "2p";
            if (electronNumber - 10 < 0){
                output += "<sup>" + (electronNumber-4).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 10){
                break;
            }
        case (electronNumber >= 11):
            output += "3s";
            if (electronNumber == 11){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 12){
                break;
            }
        case (electronNumber >= 13):
            output += "3p";
            if (electronNumber - 18 < 0){
                output += "<sup>" + (electronNumber-12).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 18){
                break;
            }
        case (electronNumber >= 19):
            output += "4s";
            if (electronNumber == 19){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 20){
                break;
            }
        case (electronNumber >= 20):
            output += "3d";
            if (electronNumber - 30 < 0){
                output += "<sup>" + (electronNumber-20).toString() + "</sup>";
                break;
            }
            output +="<sup>10</sup>"
            if (electronNumber == 30){
                break;
            }
        case (electronNumber >= 31):
            output += "4p";
            if (electronNumber - 36 < 0){
                output += "<sup>" + (electronNumber-30).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 36){
                break;
            }
        case (electronNumber >= 37):
            output += "5s";
            if (electronNumber == 37){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 38){
                break;
            }
        case (electronNumber >= 39):
            output += "4d";
            if (electronNumber - 48 < 0){
                output += "<sup>" + (electronNumber-38).toString() + "</sup>";
                break;
            }
            output +="<sup>10</sup>"
            if (electronNumber == 48){
                break;
            }
        case (electronNumber >= 49):
            output += "5p";
            if (electronNumber - 54 < 0){
                output += "<sup>" + (electronNumber-48).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 54){
                break;
            }
        case (electronNumber >= 55):
            output += "6s";
            if (electronNumber == 55){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 56){
                break;
            }
        case (electronNumber >= 57):
            output += "4f";
            if (electronNumber - 70 < 0){
                output += "<sup>" + (electronNumber-56).toString() + "</sup>";
                break;
            }
            output +="<sup>14</sup>"
            if (electronNumber == 70){
                break;
            }
        case (electronNumber >= 71):
            output += "5d";
            if (electronNumber - 80 < 0){
                output += "<sup>" + (electronNumber-70).toString() + "</sup>";
                break;
            }
            output +="<sup>10</sup>"
            if (electronNumber == 80){
                break;
            }
        case (electronNumber >= 81):
            output += "6p";
            if (electronNumber - 86 < 0){
                output += "<sup>" + (electronNumber-80).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 86){
                break;
            }
        case (electronNumber >= 87):
            output += "7s";
            if (electronNumber == 87){
                output += "<sup>1</sup>";
                break;
            }
            output +="<sup>2</sup>"
            if (electronNumber == 88){
                break;
            }
        case (electronNumber >= 89):
            output += "5f";
            if (electronNumber - 102 < 0){
                output += "<sup>" + (electronNumber-88).toString() + "</sup>";
                break;
            }
            output +="<sup>14</sup>"
            if (electronNumber == 102){
                break;
            }
        case (electronNumber >= 103):
            output += "6d";
            if (electronNumber - 112 < 0){
                output += "<sup>" + (electronNumber-102).toString() + "</sup>";
                break;
            }
            output +="<sup>10</sup>"
            if (electronNumber == 112){
                break;
            }
        case (electronNumber >= 113):
            output += "7p";
            if (electronNumber - 118 < 0){
                output += "<sup>" + (electronNumber-112).toString() + "</sup>";
                break;
            }
            output +="<sup>6</sup>"
            if (electronNumber == 118){
                break;
            }
    }
    return output;
}