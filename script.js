
// 1. length of string;
function length(){
    var text= String(document.getElementById("num1").value);
    document.getElementById("demo").value=text.length;
   }
   // 2. String toUpperCase();
function toUpperCase(){
    var text=String(document.getElementById("num1").value);
document.getElementById("demo").value = 
text.toUpperCase();
}

// 3. String toLowerCase();
function toLowerCase(){
    var text=String(document.getElementById("num1").value);
    document.getElementById("demo").value = 
text.toLowerCase();
}


 // 4. trim string;
 function trim(){
    var text1= String(document.getElementById("num1").value);
    var text2= text1.trim();
document.getElementById("demo").value="Length text1 = " + text1.length + 
"<br>Length text2 = " + text2.length;
   }

   // 5. trimStrat string;
function trimStart(){
    var text1= String(document.getElementById("num1").value);
    var text2= text1.trimStart();
document.getElementById("demo").value="Length text1 = " + text1.length + 
"<br>Length text2 = " + text2.length;
   }
   
// 6. trimEnd string;
function trimEnd(){
    var text1= String(document.getElementById("num1").value);
    var text2= text1.trimEnd();
document.getElementById("demo").value="Length text1 = " + text1.length + 
"<br>Length text2 = " + text2.length;
   }

   // 7. Split() String;
function split(){
    var text= String(document.getElementById("num1").value);
  document.getElementById("demo").value=text.split("");
   }

    // 8. charAt() String;
function charAt(){
    var text= String(document.getElementById("num2").value);
var text1=String(document.getElementById("num3").value);
var a=text.charAt(text1);
  document.getElementById("demo1").value=a;
   }
    // 9. CharcodeAt() String;
function charCodeAt(){
    var text= String(document.getElementById("num2").value);
var text1=String(document.getElementById("num3").value);
var a=text.charCodeAt(text1);
  document.getElementById("demo1").value=a;
   }
// 10. concat of string;
function concat(){
    var text= String(document.getElementById("num2").value);
    var text1= String(document.getElementById("num3").value);
    var a=text.concat(text1);
    document.getElementById("demo1").value=a;
   }
// 11. String slice();
function slice(){
    var text=String(document.getElementById("num4").value);
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=text.slice(a,b);
    document.getElementById("demo2").value = c;
   
}
// 12. String subString();
function substring(){
    var text=String(document.getElementById("num4").value);
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=text.substring(a,b);
    document.getElementById("demo2").value = c;
   
}
// 13. String subStr();
function substr(){
    var text=String(document.getElementById("num4").value);
    var a=Number(document.getElementById("n1").value);
    var b=Number(document.getElementById("n2").value);
    var c=text.substr(a,b);
    document.getElementById("demo2").value = c;
   
}

// 14. String replace();
function replace(){
    var text=String(document.getElementById("num5").value);
    var a=String(document.getElementById("a1").value);
    var b=String(document.getElementById("a2").value);
    var c=text.replace(a,b);
    document.getElementById("demo3").value = c;
   
}
// 15. String replaceAll();
function replaceAll(){
    var text=String(document.getElementById("num5").value);
    var a=String(document.getElementById("a1").value);
    var b=String(document.getElementById("a2").value);
    var c=text.replaceAll(a,b);
    document.getElementById("demo3").value = c;
   
}

 
// 16. String padStart();
function padStart(){
    var text=String(document.getElementById("num5").value);
    var a=String(document.getElementById("a1").value);
    var b=String(document.getElementById("a2").value);
    var c=text.padStart(a,b);
    document.getElementById("demo3").value = c;
   
}
// 17. String padEnd();
function padEnd(){
    var text=String(document.getElementById("num5").value);
    var a=String(document.getElementById("a1").value);
    var b=String(document.getElementById("a2").value);
    var c=text.padEnd(a,b);
    document.getElementById("demo3").value = c;
   
}

   // 18. match of string;
function match(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.match(text1);
    document.getElementById("demo4").value=a.length+" "+a;
   }
      // 19. matchall of string;
function matchAll(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.matchAll(text1);
    document.getElementById("demo4").value=Array.from(a);
   }
   // 20. includes of string;
function includes(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.includes(text1);
    document.getElementById("demo4").value=a;
   }

    // 21. search of string;
function search(){
    var text=String(document.getElementById("num6").value);
   var text1=String(document.getElementById("num7").value);
  document.getElementById("demo4").value=text.search(text1);
}


// 22. startsWith of string;
function startsWith(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.startsWith(text1);
    document.getElementById("demo4").value=a;
   }
   // 23. endsWith of string;
function endsWith(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.endsWith(text1);
    document.getElementById("demo4").value=a;
   }

   // 24. indexOf string;
function indexOf(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.indexOf(text1);
    document.getElementById("demo4").value=a;
   }

   // 25. lastindexof string;
function lastIndexOf(){
    var text= String(document.getElementById("num6").value);
    var text1= String(document.getElementById("num7").value);
    const a=text.lastIndexOf(text1);
    document.getElementById("demo4").value=a;
   }

  //reset the function
function reset(){
    document.getElementById("num1").value=null;
    document.getElementById("num2").value=null;
    document.getElementById("num3").value=null;
    document.getElementById("num4").value=null;
    document.getElementById("num5").value=null;
    document.getElementById("num6").value=null;
    document.getElementById("num7").value=null;
    document.getElementById("n1").value=null;
    document.getElementById("n2").value=null;
    document.getElementById("a1").value=null;
    document.getElementById("a2").value=null;
    document.getElementById("demo").value=null;
    document.getElementById("demo1").value=null;
    document.getElementById("demo2").value=null;
    document.getElementById("demo3").value=null;
    document.getElementById("demo4").value=null;
    
}