function btnn(){
    var str1 = document.getElementById("text1");
    const combinedString = str1.value;
    const words = combinedString.split(',');
    // var str2 = document.getElementById("text2").value;
    if (words[0].length !== words[1].length) {
        return 0;
     }
     let distCount = 0;
     for (let i = 0; i < words[0].length; i++) {
        if (words[0][i] !== words[1][i]) {
           distCount++;
        };
     };
    document.getElementById("answer").innerHTML = distCount
    //or we can use the below code to display
    /* const finalOutput = document.getElementById("answer")
        finalOutput.value = count
        finalOutput.disabled = true */
    }