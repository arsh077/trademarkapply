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

let fixed = 0;
files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        // The garbage text for RS
        content = content.replace(/ÃƒÆ’Ã‚Â¢₹/g, '₹');
        content = content.replace(/ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢/g, '→');
        content = content.replace(/ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢/g, '→');
        content = content.replace(/Ã¢Å“â€œ/g, '✓');
        content = content.replace(/ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢Ãƒâ€šÃ‚Â°/g, '💰');
        content = content.replace(/ÃƒÂ°Ã…Â¸Ã¢â‚¬Å“Ã¢â‚¬Â¦/g, '📅');
        content = content.replace(/ÃƒÂ°Ã…Â¸Ã‚Â Ã¢â‚¬ÂºÃƒÂ¯Ã‚Â¸Ã‚Â/g, '🏛️');
        content = content.replace(/ÃƒÂ¢Ã…Â¡Ã¢â‚¬â€œÃƒÂ¯Ã‚Â¸Ã‚Â/g, '⚖️');
        content = content.replace(/ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¹/g, '₹');
        content = content.replace(/Ã¢â€šÂ¹/g, '₹');
        
        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            fixed++;
        }
    } catch (e) { }
});
console.log('Fixed garbage: ' + fixed);
