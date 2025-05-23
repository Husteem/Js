    // var name1 = "musa"


    // let name2 = "garba"

    // console.log(name1)
    // console.log(name2)

    // // alert(name1)
    // // alert(name2)


    // var smth = true
    // const name3 = 3.14

    // aq = {"car": "toyota", "model": "corolla", "year": 2020}

    // var name1 ="idirisu"

    // console.log(name1)

    // var name5

    // document.write(name1)   

    // age = 20
    // console.log(age)

    // console.log("your name is " , name1 ," and your age is " , age)


    // console.log(typeof(name1))
    // console.log(typeof(age))
    // console.log(typeof(name3))
    // console.log(typeof(smth))
    // console.log(typeof(aq))
    // console.log(typeof(name5))

    var num1 = 10
    var num2 = 20

    console.log(10,3)
    console.log(10-3)
    console.log(10*3)        
    console.log(10/3)    
    console.log(10%3)
    console.log(10**3)


    console.log(num1 == num2)
    console.log(num1 != num2)
    console.log(num1 > num2)
    console.log(num1 < num2)
    console.log(num1 >= num2)
    console.log(num1 <= num2)
    console.log(num1 === num2)
    console.log(num1 !== num2)
    console.log(num1 == "10")
    console.log(num1 === "10")
    console.log(num1 != "10")

    
    // for (let i = 1; i<=12; i++){
    //     console.log(i)
    // }

    let num =3
    for (let i = 1; i * num <=30; i++){
        
        console.log( num, "*"  ,i ,"=" ,i * 3)
        if (i == 5){
            break
        }
        // console.log( num, "*"  ,i, "=", i * num)

    }


    name1 = prompt("Enter your name") 
     console.log(name1)
    age = prompt("Enter your age")

    if (age >= 18){
    }
    else if (age >= 13 && age < 18){
        console.log("You are a teenager")
    }
    else{
        console.log("You are a minor")
    } 


    // ACCOUNT BALANCE CHECKER
    AccName = prompt("Enter your account name")
    AccBallance = prompt("Enter your account balance")
    AccPin = prompt("Enter your account pin")   
    
    if (AccPin == 1234){
        console.log ("Welcome to your Husteem exchaNGe") 
    
    

    AccBallance = 1000
    AccWithdraw = prompt("Enter the amount you want to withdraw")

    if (AccWithdraw > AccBallance){
            console.log("Insufficient funds, please Top up your account")
        }
    
         else if (AccWithdraw <= AccBallance){
            console.log("Please wait while we process your transaction")
        }
        else {
            console.log("Transaction failed - please try again")
        }
    }
        else if (AccPin != 1234){
            console.log("Incorrect pin")
        }


        