const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./components');
files.push('App.tsx');
files.push('App_old.tsx');
// Note: We don't touch node_modules naturally

let fixed = 0;
files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        // Fix encoding errors
        content = content.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¹/g, '₹');
        content = content.replace(/ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¹/g, '₹');
        content = content.replace(/Ã¢â€šÂ¹/g, '₹');
        content = content.replace(/â‚¹/g, '₹');
        content = content.replace(/ÃƒÂ¢Ã…Â¡Ã¢â‚¬â€œÃƒÂ¯Ã‚Â¸Ã‚Â/g, '⚖️');
        content = content.replace(/Ã¢Å¡â€“Ã¯Â¸Â /g, '⚖️');
        
        // Dark theme text colors to light theme text colors
        content = content.replace(/text-white/g, 'text-gray-900');
        content = content.replace(/text-slate-50\b/g, 'text-gray-900');
        content = content.replace(/text-slate-100\b/g, 'text-gray-800');
        content = content.replace(/text-slate-200\b/g, 'text-gray-800');
        content = content.replace(/text-slate-300\b/g, 'text-gray-700');
        content = content.replace(/text-slate-400\b/g, 'text-gray-600');
        content = content.replace(/text-gray-200\b/g, 'text-gray-800');
        content = content.replace(/text-gray-300\b/g, 'text-gray-700');
        content = content.replace(/text-gray-400\b/g, 'text-gray-600');
        
        // Add light blue gradient to the main backgrounds
        // Replacing generic backgrounds that were made white earlier, to a gradient.
        // It's safer to target the main wrapper classes like 'min-h-screen'.
        content = content.replace(/min-h-screen\s+bg-white/g, 'min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100');
        content = content.replace(/min-h-screen\s+bg-\[#020202\]/g, 'min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100');
        content = content.replace(/bg-\[#050505\]/g, 'bg-white');
        content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-blue-50');
        content = content.replace(/bg-black\b/g, 'bg-white');
        content = content.replace(/bg-slate-900\b/g, 'bg-white');
        content = content.replace(/bg-slate-950\b/g, 'bg-white');
        content = content.replace(/bg-slate-800\b/g, 'bg-blue-50/50');
        
        // Adjust borders 
        content = content.replace(/border-white\/5/g, 'border-gray-200');
        content = content.replace(/border-white\/10/g, 'border-gray-200');
        content = content.replace(/border-white\/20/g, 'border-gray-300');
        
        // Inputs
        content = content.replace(/bg-\[\#0a0a0a\]/g, 'bg-white');
        
        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            fixed++;
        }
    } catch (e) {
        console.error(`Skipping ${file}: ${e.message}`);
    }
});

console.log('Fixed files: ' + fixed);
