import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.underline.bold.yellow.yellow("\n\tWELCOME TO ALEEZE STUDENT GRADE CHECKER USING SWITCH CASE CONDITION...!"));
let student = await inquirer.prompt({
    name: "name",
    message: "Enter student name....."
});
let marksInput = await inquirer.prompt({
    name: "marks",
    message: "Enter student marks....."
});
let marks = parseInt(marksInput.marks); // Convert the input to an integer
switch (true) {
    case (marks > 80 && marks <= 100):
        console.log(chalk.underline.cyan(`${student.name} has secured an A grade.....`));
        break;
    case (marks > 60 && marks <= 80):
        console.log(chalk.underline.green(`${student.name} has secured a B grade.....`));
        break;
    case (marks > 40 && marks <= 60):
        console.log(chalk.underline.magenta(`${student.name} has secured a C grade.....`));
        break;
    case (marks >= 0 && marks <= 40):
        console.log(chalk.underline.red(`${student.name} has secured a D grade.....`));
        break;
    default:
        console.log(chalk.underline.red(`Invalid marks entered.....`));
        break;
}
console.log("-".repeat(50));
