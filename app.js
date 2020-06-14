// // // // // //CHAPTER 1

// // // // // //Question_1
alert("Greetings")
////Question_2
alert("Error! Please enter a valid Password")
////Question_3
alert("Welcome to js Land..\nHappy Coding!");
////Question_4
alert("Welcome to js Land...")
alert("Happy Coding!")
////Question_5
alert("Hello... I canrun JS through my web browser's console")

// // // // // //CHAPTER 2

//QUESTION 1
var username;
//QUESTION 2
var myname = "Ayesha Khalid";
//QUESTION_3
var message;
var message ="Hello World";
alert("message")
//QUESTION_4
var std=["Jhone Doe","15 year old","Cerfied mobile Application and development"]
alert(std[0])
alert(std[1])
alert(std[2])
UESTION_5
var x="pizza";
for(var i=5; i>0; i--)
{
    for(var j=0; j<i;j++)
    {
        document.write(x[j])
    }
    document.write("<br>")  
}


 //QUESTION_6
 var email="email@email.com"
 alert("my email address is "+email);
 //QUESTION_7
 var book="A smarter way to learn JavaScript"
 alert("I am trying to learn from the Book "+book);
 //QUESTION_8
 document.write("Yah! I can write HTML content through JavaScript")
 //QUESTION_9
 alert("                   ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

 // // //CHAPTER 2
 //QUESTION_1
 var age=15
 alert("I am "+age+" year old")
 //QUESTION_2
alert("You have visited this site 14 times")
 //QUESTION_3
 var birthyear=prompt("Enter your birth year")
 document.write("My birth year is "+ birthyear +"<br>"+"Data type of my declared variable is number")
 //QUESTION_4
 var name=prompt("Enter your name")
 var product=prompt("Enter your product")
 var quantity=prompt("Enter your Quantity")
 document.write(name+" ordered "+quantity+" "+product+" on XYZ Clothing store")

 //CHAPTER 4
 //QUESTION_1
 var var1=1;
 var var2=2;
 var var3=3;
 alert(var1+var2+var3)
 //QUESTION_2
 var a!,a1,ali,aA,A_a //legal
 var !a,1a,a3s,#,%li; //illegal
 //QUESTION_3
 document.write("<h1> Rules for naming JS variables </h1>")    
 document.write("Variable names can only contain $ and _. for exaxmple: $my_1stVariable")
 document.write("<br> Variables must begin with a letter, $ or_. For example $name, _name or name <br>Variable names are case sensitive<br>Variable names should not be JS keyword")

//CHAPTER 5
//QUESTION_1
var a=+prompt("enter 1st number")
 var b=+prompt("enter 2st number")
 var c=a+b;
 document.write("Sum of "+a+" and "+b+" is  "+c)
//QUESTION_2
 var a=+prompt("enter 1st number")
 var c=prompt("choose any operator from - + * %")
 var b=+prompt("enter 2st number")
 if(c==="+")
 {
 document.write("Sum of "+a+" and "+b+" is  "+(a+b))
 }
 else if(c==="-")
 {
     document.write("Subtraction of "+a+" and "+b+" is  "+(a-b))
     }
 else if(c==="*")
 {
     document.write("Multiplication of "+a+" and "+b+" is  "+(a*b))
 }
 else if(c==="%")
 {
     document.write("Mod of "+a+" and "+b+" is  "+(a%b))
      }
    
//QUESTION_3
var a=prompt("cost of ont movie ticket is 600pkr","how many tickets do you want")
 var c=a*600;
 document.write("total cost to buy "+(+a)+" tickets to a movie is "+c+" PKR")
//QUESTION_4
 var a=+prompt("Enter a number to display a table")
 for(var i=1;i<=10;i++)
 {
     document.write(a+" x "+i+" = "+a*i+"<br>")
 }

//CHAPTER 9-11
//QUESTION_1
 var city=prompt("Enter the name of city")
 if(city==="karachi")
 {
     alert("Welcome to city of lights")
 }
//QUESTION_2
 var gender=prompt("Enter Your Gender")
 gender=gender.toLowerCase();
 if(gender==="male")
 {
     alert("Good Morning Sir")
 }
 else if(gender==="female")
 {
     alert("Good Morning Ma'am")
 }
 else
 {
     alert("Warning! try again")
 }
//QUESTION_3
 var color=prompt("Please enter the color of road traffic signals")
 color=color.toLowerCase();
 if(color==="red")
 {alert("Must Stop")}
 else if(color==="yellow")
 {alert("Ready to Move")}
 else
 {alert("Move now")}
//QUESTION_4
 var fuel=prompt("Enter Your Remaining fuel in liter")
 if(fuel<0.25)
 {alert("Please refill the fuel in your car")}
 else{alert("fuel is enough for car")}
//QUESTION_5
  var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
 User Input & Conditional Statement | JAVASCRIPT
 Page 2 of 4
 B. var b = 82;
  if (++b === 83){
 alert("given condition for variable b is true");
 }
 c. var c = 12;
 if (c++ === 13){
 alert("condition 1 is true");
 }
 if (c === 13){
 alert("condition 2 is true");
 }
 if (++c < 14){
 alert("condition 3 is true");
 }
 if(c === 14){
 alert("condition 4 is true");
 }
 d. var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){
 alert("The cost equals");
 }
 e. if (true){
 alert("True");
 }
 if (false){
 alert("False");
 }
 User Input & Conditional Statement | JAVASCRIPT
 Page 3 of 4
 f. if("car" < "cat"){
 alert("car is smaller than cat");
 }
//QUESTION_6
 var math=+prompt("Enter Your Marks in Maths")
 var phy=+prompt("Enter Your Marks in Physics")
 var comp=+prompt("Enter Your Marks in Computer")
 var marks=math+phy+comp;
 var per=(marks/300) *100;
 document.write("Total marks: 300"+"<br>Marks obtained: "+marks+" <br>Percentage "+per)
 if(per>=80)
 { document.write("<br>Grade: A-one <br>Remarks: Excellent")}
 else if(per>=70)
 { document.write("<br>Grade: A <br>Remarks: Good")}
 else if(per>=60)
 { document.write("<br>Grade: B <br>Remarks: You need to improve")}
 else if(per<60)
 { document.write("<br>Grade: Fail <br>Remarks: Sorry")}
//QUESTION_7
 var secret=prompt("Enter a number from 1-10");
 if(secret==4)
 {alert("Bingo! Correct answer")}
  else if(secret==3 ||secret==5)
 {alert("Close enough to the correct answer");}
 else
 {     alert("Please Try again! you guess a wrong number ")
     }
    
//CHAPTER 12-13
    
// //QUESTION_2
var a=prompt("Enter two integer and i will display which number is larger","Eneter 1st number");
var b=prompt("Enter 2nd integer");
if(a<b)
{alert(b+" is largest")}
else{alert(a+" is largest")}
//QUESTION_3
 var a=prompt("Enter 1ST integer");
 if(a<0)
 {alert(a+" is negative")}
 else if(a>0)
 {alert(a+" is positive")}
 else
 {alert("zero")}
//QUESTION_3
1var a=prompt("Enter an alphabet i will tell you it is vowel or consonant ")
1if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u")
1{alert("vowel true")}
1else
1{alert("consonant false")}
QUESTION_4
 var a=prompt("Enter A PASSWORD ","Please enter a password")
 var b=prompt("Enter again")
 if(a==b){alert("Correct! The password you entered matches the original password")}
 else{alert("Incorrect password")}
//QUESTION_5
 var greeting;
 var hour = 13;
 if (hour < 18) 
     {alert("Good DAY")}
 else
 {alert("Good evening")}

//CHAPTER 14-15
//QUESTION_1
var student=[];
//QUESTION_2
var names=["ali","sana","sara"]
//QUESTION_3
var a=["SSC", "HSC", "BCS","BS", "BCOM", "MS","M. Phil", "PhD"]
document.write("Qualification <br><br>")
 for (var i=0;i<=7;i++)
 {document.write(+i+" "+a[i]+"<br>")}
