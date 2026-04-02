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
let fixed = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    content = content.replace(/ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¹/g, '₹');
    content = content.replace(/ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¹/g, '₹');
    content = content.replace(/Ã¢â€šÂ¹/g, '₹');
    content = content.replace(/â‚¹/g, '₹');
    content = content.replace(/text-white/g, 'text-gray-900').replace(/text-gray-200/g, 'text-gray-800').replace(/text-gray-300/g, 'text-gray-700').replace(/text-gray-400/g, 'text-gray-600').replace(/text-slate-200/g, 'text-slate-800').replace(/text-slate-300/g, 'text-slate-700');
    // Also gradient replacement
    content = content.replace(/bg-gray-50/g, 'bg-white').replace(/bg-gray-100/g, 'bg-blue-50/50').replace(/bg-gray-200/g, 'bg-blue-100/50');
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
    }
});
console.log('Fixed files: ' + fixed);
