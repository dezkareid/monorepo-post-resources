const cache = new Set();

function stringToHash(string) {             
    let hash = 0;
    if (string.length == 0) return hash;     
    for (let i = 0; i < string.length; i++) { 
        const char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
    return hash; 
} 

function createNameClass(rules) {
    return `class-${stringToHash(rules)}`;
}

function createStyle(className, rules) {
    return `.${className}{${rules}}`;
}

function insertStyle(style) {
    const styleTag = document.createElement('style');
    styleTag.textContent = style;
    document.head.append(styleTag);
}

export default function jss(...args) {
    const [[rules]] = args;
    const className = createNameClass(rules);
    if (!cache.has(className)) {
        const style = createStyle(className, rules);
        insertStyle(style);
        cache.add(className);
    }
    return className;
}
