import inquirer from "inquirer";
let table = await inquirer.prompt({
    name: "num",
    type: "number",
    message: "Which table do you want?"
});
console.log('**** This is your', table.num, 'Table ****');
for (let i = 1; i <= 10; i++) {
    console.log(`${table.num} x ${i} = ${table.num * i}`);
}
