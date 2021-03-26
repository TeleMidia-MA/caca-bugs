var lastIndex = 19; function test0(){var flag = false; var flagI = false;  flagI = false;  var age = document.getElementById("txtage").value;if (age == "") { flag = true; flagI = true;} var age = Number(document.getElementById("txtage").value);if (isNaN(age) || !Number.isInteger(age)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("age");if(flag){ resultadoInvalido(0); }else{ reactToAnswer(correct0(age) != wrong0(age),0,"age: " +age ); } }
     function correct0(age){
        return age >= 18;
      }
      function wrong0(age){
        return age > 18;
      }
     function test1(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(1); }else{ reactToAnswer(correct1( a, b) != wrong1( a, b),1,"a: "+a+"; "+"b: " +b ); } }
      function correct1(a, b){
       return a+b
      }
      function wrong1(a, b){
        if (a == b) return a;
        else return a+b;
      }
      function test2(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(2); }else{ reactToAnswer(correct2( a, b) != wrong2( a, b),2,"a: "+a+"; "+"b: " +b ); } }
       function correct2(a, b){
        if( a > b){
          return a;        
        }
          return b;
      }
      function wrong2(a, b){
        if(a > b){
          return a;
        }
        if(b > a){
          return b;
        }
        return 0;
      }
      function test3(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(3); }else{ reactToAnswer(correct3( a, b) != wrong3( a, b),3,"a: "+a+"; "+"b: " +b ); } }
       function correct3(a, b){
        return (a < b  && a) || b;
       }
       function wrong3(a, b){
        return (a < b && a) || (a>b && b);
       }
      function test4(){var flag = false; var flagI = false;  flagI = false;  var carlos = document.getElementById("txtcarlos").value;if (carlos == "") { flag = true; flagI = true;} var carlos = Number(document.getElementById("txtcarlos").value);if (isNaN(carlos) || !Number.isInteger(carlos)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("carlos"); flagI = false;  var pedro = document.getElementById("txtpedro").value;if (pedro == "") { flag = true; flagI = true;} var pedro = Number(document.getElementById("txtpedro").value);if (isNaN(pedro) || !Number.isInteger(pedro)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("pedro"); flagI = false;  var welton = document.getElementById("txtwelton").value;if (welton == "") { flag = true; flagI = true;} var welton = Number(document.getElementById("txtwelton").value);if (isNaN(welton) || !Number.isInteger(welton)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("welton");if(flag){ resultadoInvalido(4); }else{ reactToAnswer(correct4( carlos,  pedro, welton) != wrong4( carlos,  pedro, welton),4,"carlos: "+carlos+"; "+"pedro: "+pedro+"; "+"welton: " +welton ); } }
        function correct4(carlos, pedro, welton){
          var cont = 0;
            if (pedro < carlos) {
            cont++;
          }
          if (welton < carlos) {
            cont++;
         }
         return cont;
       }
       function wrong4(carlos, pedro, welton){
        if (pedro < carlos) {
          if (welton < carlos){
            return 2;
          }
          return 1;
        }
        return 0;
       }
      function test5(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c"); flagI = false;  var d = document.getElementById("txtd").value;if (d == "") { flag = true; flagI = true;} var d = Number(document.getElementById("txtd").value);if (isNaN(d) || !Number.isInteger(d)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("d"); flagI = false;  var e = document.getElementById("txte").value;if (e == "") { flag = true; flagI = true;} var e = Number(document.getElementById("txte").value);if (isNaN(e) || !Number.isInteger(e)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("e");if(flag){ resultadoInvalido(5); }else{ reactToAnswer(correct5( a,  b,  c,  d, e) != wrong5( a,  b,  c,  d, e),5,"a: "+a+"; "+"b: "+b+"; "+"c: "+c+"; "+"d: "+d+"; "+"e: " +e ); } }
        function correct5(a, b, c, d, e){
          return a==b || a==c || a==d || a==e || b == c || b==d || b==e || c==d || c==e || d==e;
        }
        function wrong5(a, b, c, d, e){
          return a==b || a==c || a==d || a==e || c==d || c==e || d==e;     
        }   
      function test6(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(6); }else{ reactToAnswer(correct6( a,  b, c) != wrong6( a,  b, c),6,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
        function correct6(a, b, c){
          return a+b>c && a+c>b && b+c>a;
        }
        function wrong6(a, b, c){
          return a+b>c;
        }
      function test7(){var flag = false; var flagI = false;  flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var h = document.getElementById("txth").value;if (h == "") { flag = true; flagI = true;} var h = Number(document.getElementById("txth").value);if (isNaN(h) || !Number.isInteger(h)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("h");if(flag){ resultadoInvalido(7); }else{ reactToAnswer(correct7( b, h) != wrong7( b, h),7,"b: "+b+"; "+"h: " +h ); } }
        function correct7(b, h){
          return b*h/2;
        }
        function wrong7(b, h){
          if(b>h){
            return b/2*h/2;
          }else{
            return b*h/2;
          }
        }
      function test8(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(8); }else{ reactToAnswer(correct8( a,  b, c) != wrong8( a,  b, c),8,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
        function correct8(a, b, c){
          var maior = a;
          if(b > maior){
            maior = b;
          }
          if(c > maior){
            maior = c;
          } return maior;
        }
        function wrong8(a, b, c){
          if (a>b && a>c){
            return a;
          }else if(b>a && b>c){
            return b;
          }else{
            return c;
          }
        }
      function test9(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(9); }else{ reactToAnswer(correct9( a, b) != wrong9( a, b),9,"a: "+a+"; "+"b: " +b ); } }
        function correct9(a,b){
          return a+b >=32 || (a>=16 && b>=16);
        }
        function wrong9(a,b){
          return a+b >= 32 && a>=16 && b>=16;
        }
      function test10(){var flag = false; var flagI = false;  flagI = false;  var channel = document.getElementById("txtchannel").value;if (channel == "") { flag = true; flagI = true;} var channel = Number(document.getElementById("txtchannel").value);if (isNaN(channel) || !Number.isInteger(channel)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("channel");if(flag){ resultadoInvalido(10); }else{ reactToAnswer(correct10(channel) != wrong10(channel),10,"channel: " +channel ); } }
        function correct10(channel){
          flag = channel>1 && channel<1000;
          flag = flag && channel%11 == 0
          return flag;
        }
        function wrong10(channel){
          flag = channel>1 && channel<1000;
          flag = channel%11 == 0
          return flag;
        }
      function test11(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(11); }else{ reactToAnswer(correct11( a,  b, c) != wrong11( a,  b, c),11,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
        function correct11(a, b, c){
          count = 0;
          if(a%2 == 0){
            count++;
          }
          if(b%2 == 0){
            count++;
          }
          if(c%2 == 0){
            count++;
          }
          return count;
        }
         function wrong11(a, b, c){
          count = 0;
          if(a%2 == 0){
            count++;
          }else if(b % 2 == 0){
            count++;
          }else if(c % 2 == 0){
            count++;
          }
          return count;
         }
      function test12(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b");if(flag){ resultadoInvalido(12); }else{ reactToAnswer(correct12( a, b) != wrong12( a, b),12,"a: "+a+"; "+"b: " +b ); } }
        function correct12(a, b){
          if(a%2 == 1 || b%2 == 1) return 1;
            return 0;
        }
        function wrong12(a, b){
          if((a+b)%2 == 0){
            return 0;
          }else{
            return 1;
          }
        }      
        function test13(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true; flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a) || !Number.isInteger(a)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true; flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b) || !Number.isInteger(b)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true; flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c) || !Number.isInteger(c)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(13); }else{ reactToAnswer(correct13( a,  b, c) != wrong13( a,  b, c),13,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
         function correct13(a, b, c){
          if(a == 0){
            if(b == 0 && c==0){
              return true;
            }
            return false;
          }
          return (b/a == c/b);
        }
        function wrong13(a, b, c){
          return (b/a == c/b);
        }
        function test14(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value; flagI = false;  var b = document.getElementById("txtb").value; flagI = false;  var c = document.getElementById("txtc").value;if(flag){ resultadoInvalido(14); }else{ reactToAnswer(correct14( a,  b, c) != wrong14( a,  b, c),14,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
         function correct14(a, b, c){
          count = 0;
          if(a == "cosmos") count++;
          if(b == "cosmos") count++;
          if(c == "cosmos") count++;
          return count;
         }
         function wrong14(a, b, c){
          if (a == "cosmos"){
            if (b == "cosmos"){
              if (c == "cosmos"){
                return 3;
              }else{
                return 2;
              }
            }else if(c == "cosmos"){
               return 2;
            }else{
              return 1;
            }
          }else{
            if (b == "cosmos"){
              return 1;
            }else if (c == "cosmos"){
              return 1;
            }else{
              return 0;
            }
          }
          return 0;
         }
     //questão 16 
        function test15(){var flag = false; var flagI = false;  flagI = false;  var a = document.getElementById("txta").value;if (a == "") { flag = true;  flagI = true;} var a = Number(document.getElementById("txta").value);if (isNaN(a)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("a"); flagI = false;  var b = document.getElementById("txtb").value;if (b == "") { flag = true;  flagI = true;} var b = Number(document.getElementById("txtb").value);if (isNaN(b)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("b"); flagI = false;  var c = document.getElementById("txtc").value;if (c == "") { flag = true;  flagI = true;} var c = Number(document.getElementById("txtc").value);if (isNaN(c)) { flag = true;  flagI = true;} if(flagI == true) entradaInvalida("c");if(flag){ resultadoInvalido(15); }else{ reactToAnswer(correct15( a,  b, c) != wrong15( a,  b, c),15,"a: "+a+"; "+"b: "+b+"; "+"c: " +c ); } }
          function correct15(a, b, c){
            //delta = 0;
            delta = (b*b)-4*a*c;
            if (delta<0){
              return null;
            }
            x = (-b-Math.sqrt(delta))/(2*a);
            return x;
          }
          function wrong15(a, b, c){
            //delta = 0;
            delta = (b*b)-4*a*c;
            if (delta<0){
              return null;
            }
            x = (-b-Math.sqrt(delta))/2*a;
            return x;
          }
     //questão 17
        function test16(){var flag = false; var flagI = false;  flagI = false;  var valor = document.getElementById("txtvalor").value;if (valor == "") { flag = true; flagI = true;} var valor = Number(document.getElementById("txtvalor").value);if (isNaN(valor) || !Number.isInteger(valor)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("valor");if(flag){ resultadoInvalido(16); }else{ reactToAnswer(correct16(valor) != wrong16(valor),16,"valor: " +valor ); } }
         function correct16(valor){
          if ((valor - valor*0.10) * 10 <= 20000){
            return 1;
          } else 
            return 0;
         }  
         function wrong16(valor){
          if ((valor + valor*0.10) * 10 >= 20000){
            return 1;
          } else 
            return 0;
         }
        function test17(){var flag = false; var flagI = false;  flagI = false;  var n = document.getElementById("txtn").value;if (n == "") { flag = true; flagI = true;} var n = Number(document.getElementById("txtn").value);if (isNaN(n) || !Number.isInteger(n)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("n");if(flag){ resultadoInvalido(17); }else{ reactToAnswer(correct17(n) != wrong17(n),17,"n: " +n ); } }
         function correct17(A,B,C,D){
          if ((B>C && D>A && C+D > A+B && C >= 0 && D >= 0) && ( A % 2 ==0)){
            return("valores aceitos");
          }
          else return("valores nao aceitos");
         }
         function wrong17(A,B,C,D){
          if ((B >C && D > A && C+D > A+B && C >= 0 && D >= 0) || ( A % 2 ==0)){
            return("valores aceitos");
          }
          else return("valores nao aceitos");
         }
        function test18(){var flag = false; var flagI = false;  flagI = false;  var n1 = document.getElementById("txtn1").value;if (n1 == "") { flag = true; flagI = true;} var n1 = Number(document.getElementById("txtn1").value);if (isNaN(n1) || !Number.isInteger(n1)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("n1"); flagI = false;  var n2 = document.getElementById("txtn2").value;if (n2 == "") { flag = true; flagI = true;} var n2 = Number(document.getElementById("txtn2").value);if (isNaN(n2) || !Number.isInteger(n2)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("n2");if(flag){ resultadoInvalido(18); }else{ reactToAnswer(correct18( n1, n2) != wrong18( n1, n2),18,"n1: "+n1+"; "+"n2: " +n2 ); } }
         function correct18(n1,n2){
          if(((n1*1 + n2*3)/4) >= 7) {
            return("Aprovado");}

          else return("Reprovado");
         }
         function wrong18(n1,n2){
          if(((n1*1 + n2*3)/4) > 7) {
            return("Aprovado");}

          else return("Reprovado");
         }
        function test19(){var flag = false; var flagI = false;  flagI = false;  var ano = document.getElementById("txtano").value;if (ano == "") { flag = true; flagI = true;} var ano = Number(document.getElementById("txtano").value);if (isNaN(ano) || !Number.isInteger(ano)) { flag = true; flagI = true;} if(flagI == true) entradaInvalida("ano");if(flag){ resultadoInvalido(19); }else{ reactToAnswer(correct19(ano) != wrong19(ano),19,"ano: " +ano ); } }
         function correct19(ano){
           if ((ano%4==0  && ano%100!=0) ||  (ano%400==0)){
           return 1
           }
           else
             return 0
           }
     
          function wrong19(ano){
             if((ano%4==0 ||  ano%100 != 0)  && (ano%400==0)){
               return 1
             }
             else
               return 0
          }