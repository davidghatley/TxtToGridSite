import { readFile, readFileSync } from 'fs';

const content = readFileSync('./content.txt', 'utf8');

console.log(content);

// Section by h1
var textBySection = content.split('\n# ');
textBySection.shift();

// for (var i = 0; i < textBySection.length; i++) {
//     subSection = textBySection.
// }
// Section by h2
// for (var i = 0; i < textBySection.length; i++) {
//     var h2Sections = textBySection[i].split('\n## ');
//     var h1Section = h2Sections.shift();
    
//     var h1SectionSplit = h1Section.split('\n')
//     var h1Title = h1SectionSplit.shift()
//     textBySection[i] = [h1Title, h1SectionSplit, h2Sections];
// }

console.log(textBySection);