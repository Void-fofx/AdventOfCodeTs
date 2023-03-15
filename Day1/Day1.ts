import * as fs from 'fs';
const TOP_HOW_MANY: number = 3;

// Read the input file as a string
const input: string = fs.readFileSync("Day1/input.txt", "utf8");

// Create an array that contains each elf's calories as a separate string
const elves: string[] = input.split("\n\n");

// Get rid of '\n' and contain each elf in array
const calories = elves.map(elf => elf.split("\n"))

// Convert each string to a number
const calorieGroups: number[][] = calories.map<number[]>(elf => elf.map(calorie => Number(calorie)))

// Add up the calories
let totals = calorieGroups.map(elf => elf.reduce((a, b) => a + b, 0))

// Sort the totals
totals = totals.sort()

// Part 1: Print the largest calorie count
console.log(`Part 1: ${totals[totals.length - 1]}`)

// Part 2 //

// Get top three highest calorie counts
const finalTally = totals.slice(totals.length - TOP_HOW_MANY, totals.length)

// Get final total
const finalTotal = finalTally.reduce((a, b) => a + b, 0)

// Print the final tally
console.log(`Part 2: ${finalTotal}`)
