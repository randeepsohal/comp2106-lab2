/**
 * Created by rande on 9/15/2016.
 */
var userChoice;
userChoice = prompt("Choose: rock, paper, scissors");
var computerChoice;
computerChoice = Math.random();
console.log(computerChoice);
if (computerChoice < 0.34)
{
    computerChoice = "rock";
}
else if(computerChoice <0.67)
{
    computerChoice = "paper";
}
else
{
    computerChoice = "scissors";
}
console.log("Computer choice" + computerChoice);
console.log("User choice" + userChoice);

var compare = function(userChoice, computerChoice)
{
    if (userChoice === computerChoice)
    {
        return "This result is a tie!";
    }
    else if (userChoice === "rock")
    {
        if (computerChoice === "scissors")
        {
            return "rock wins";
        }
        else
        {
            return "scissors wins";
        }
    }
    else if (userChoice === "paper")
    {
        if (computerChoice === "scissors")
        {
            return "scissors wins";
        }
        else
        {
            return "paper wins";
        }
    }
    else if (userChoice === "scissors")
    {
        if (computerChoice === "rock")
        {
            return "rock wins";
        }
        else
        {
            return "paper wins";
        }
    }
};
console.log(compare(userChoice, computerChoice));