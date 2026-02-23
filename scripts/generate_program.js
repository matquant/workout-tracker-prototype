import fs from 'fs';
import path from 'path';

const inputFile = path.join(__dirname, '../workout_plan.txt');
const outputFile = path.join(__dirname, '../src/programs/program-v1.ts');

const content = fs.readFileSync(inputFile, 'utf-8');
const lines = content.split('\n');

let currentWeek = 0;
let currentDay = null;
let currentDayNumber = 0;
let days = [];

function parseExercise(line) {
    // Clean bullet and create object
    const cleanLine = line.replace(/^\*\s*/, '').trim();
    const parts = cleanLine.split(': ');
    const name = parts[0].trim();
    const details = parts.slice(1).join(': ').trim();

    // Parse Sets/Reps
    const setsMatch = details.match(/(\d+)\s*sets?\s*x\s*([^\s]+)\s*reps/i);
    const sets = setsMatch ? parseInt(setsMatch[1]) : 1;
    const reps = setsMatch ? setsMatch[2] : "?";

    // Parse RPE
    const rpeMatch = details.match(/RPE\s*([\d\.-]+)/i);
    const suggestedRpe = rpeMatch ? parseFloat(rpeMatch[1]) : undefined;

    // Default Rest
    let restSeconds = 90;
    if (name.match(/Squat|Deadlift/i)) restSeconds = 180;
    else if (name.match(/Bench|Press|Row|Pull-Up/i)) restSeconds = 120;
    else if (name.match(/Curl|Raise|Extension/i)) restSeconds = 60;

    const setList = [];
    for (let i = 0; i < sets; i++) {
        setList.push({
            key: `set_${i + 1}`,
            type: 'working',
            reps: reps,
            suggestedRpe: suggestedRpe,
            restSeconds: restSeconds
        });
    }

    return {
        key: name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
        name: name,
        note: details,
        sets: setList
    };
}

for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('## Week')) {
        const weekMatch = trimmed.match(/\d+/);
        currentWeek = weekMatch ? parseInt(weekMatch[0]) : 0;
        currentDayNumber = 0;
    } else if (trimmed.startsWith('**Day')) {
        if (currentDay) {
            days.push(currentDay);
        }
        currentDayNumber++;
        const nameMatch = trimmed.match(/\((.*?)\)/);
        const dayName = nameMatch ? nameMatch[1] : `Day ${currentDayNumber}`;
        
        currentDay = {
            key: `wk${currentWeek}_day${currentDayNumber}`,
            week: currentWeek,
            dayNumber: currentDayNumber,
            name: dayName,
            exercises: []
        };
    } else if (trimmed.startsWith('*')) {
        if (currentDay) {
            const exercise = parseExercise(trimmed);
            const existing = currentDay.exercises.find(e => e.name === exercise.name);
            
            if (existing) {
                // Append sets to existing exercise
                const startIdx = existing.sets.length;
                exercise.sets.forEach((s, idx) => {
                    s.key = `set_${startIdx + idx + 1}`;
                    existing.sets.push(s);
                });
            } else {
                currentDay.exercises.push(exercise);
            }
        }
    }
}
// Push last day
if (currentDay) days.push(currentDay);

const programData = {
    version: "v1",
    name: "12-Week Powerbuilding",
    weeks: 12,
    days: days
};

const fileContent = `import { ProgramSchema } from '../types/program';

export const programV1: ProgramSchema = ${JSON.stringify(programData, null, 2)};
`;

fs.writeFileSync(outputFile, fileContent);
console.log('Generated program-v1.ts with ' + days.length + ' days.');
