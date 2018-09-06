function electronConfiguration(electronNumber){
    if (electronNumber >=105){
        return "Electron Configuration exists, but has not been measured";
    }
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
            //Strange Exception to the rule
            if (electronNumber == 57){
                output += "5d<sup>1</sup>";
                break;
            }
            //Strange Exception to the rule
            if(electronNumber == 58){
                output += "4f<sup>1</sup>5d<sup>1</sup>";
                break;
            }
            if(electronNumber == 58){
                output += "4f<sup>1</sup>5d<sup>1</sup>";
                break;
            }
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
            //Strange Exception to the rule
            if(electronNumber == 78){
                output += "6s<sup>1</sup>4f<sup>14</sup>5d<sup>9</sup>";
                break;
            }
            //Strange Exception to the rule
            if(electronNumber == 79){
                output += "6s<sup>1</sup>4f<sup>14</sup>5d<sup>10</sup>";
                break;
            }
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
            //Strange Exception to the Rule
            if (electronNumber == 89){
                output += "6d<sup>1</sup>";
                break;
            }
            //Strange Exception to the Rule
            if (electronNumber == 90){
                output += "6d<sup>2</sup>";
                break;
            }
            //Strange Exception to the Rule
            if (electronNumber == 91){
                output += "5f<sup>2</sup>6d<sup>1</sup>";
                break;
            }
            //Strange Exception to the Rule
            if (electronNumber == 92){
                output += "5f<sup>3</sup>6d<sup>1</sup>";
                break;
            }
            //Strange Exception to the Rule
            if (electronNumber == 93){
                output += "5f<sup>4</sup>6d<sup>1</sup>";
                break;
            }
            if (electronNumber == 93){
                output += "5f<sup>7</sup>6d<sup>1</sup>";
                break;
            }
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
        // }
        //     output +="<sup>10</sup>"
        //     if (electronNumber == 112){
        //         break;
        //     }
        // case (electronNumber >= 113):
        //     output += "7p";
        //     if (electronNumber - 118 < 0){
        //         output += "<sup>" + (electronNumber-112).toString() + "</sup>";
        //         break;
        //     }
        //     output +="<sup>6</sup>"
        //     if (electronNumber == 118){
        //         break;
        //     }
    }
    return output;
}

function nobelGasConfiguration(electronNumber){
    // let ElementelectronConfig = electronConfiguration(electronNumber);
    switch(true) {
        case (electronNumber <=2):
            return electronConfiguration(electronNumber);
        case (electronNumber <=10):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>", "[He] ");
        case (electronNumber <=18):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>", "[Ne] ");
        case (electronNumber <=20):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>", "[Ar] ");
        case (electronNumber <=30):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>", "[Ar] ") + "4s<sup>2</sup> ";
        case (electronNumber <=36):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>", "[Ar] 3d<sup>10</sup>4s<sup>2</sup>");
        case (electronNumber <=20):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>", "[Ar] ");
        case (electronNumber <=30):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>", "[Ar] ") + "4s<sup>2</sup> ";
        case (electronNumber <=36):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>", "[Ar] 3d<sup>10</sup>4s<sup>2</sup>");
        ///
        case (electronNumber <=38):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>", "[Kr] ");
        case (electronNumber <=48):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>", "[Kr] ") + "5s<sup>2</sup> ";
        case (electronNumber <=54):
            return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>4d<sup>10</sup>", "[Kr] 4d<sup>10</sup>5s<sup>2</sup>");
        case (electronConfiguration<=55):
            return null;
        // case (electronNumber <=56):
        //     return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>4d<sup>10</sup>5p<sup>6</sup>", "[Xe] ");
        //     case (electronNumber <=56):
        //     return electronConfiguration(electronNumber).replace("1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup>5s<sup>2</sup>4d<sup>10</sup>5p<sup>6</sup>", "[Xe] ");
    }
}