



function countCode(str) {
    var wordCount = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'c' && str[i + 1] === 'o' && str[i + 3] === 'e') {
            wordCount++;
        }
    }
    console.log("code was said " + wordCount + " times");
}

countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");
