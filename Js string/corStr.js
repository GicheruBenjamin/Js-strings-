// charAt()
console.log("Hello".charAt(1)); // "e"

// charCodeAt()
console.log("Hello".charCodeAt(1)); // 101

// concat()
console.log("Hello".concat(" ", "World")); // "Hello World"

// endsWith()
console.log("Hello".endsWith("o")); // true

// fromCharCode()
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// includes()
console.log("Hello".includes("e")); // true

// indexOf()
console.log("Hello".indexOf("e")); // 1

// lastIndexOf()
console.log("Hello".lastIndexOf("l")); // 3

// localeCompare()
console.log("Hello".localeCompare("World")); // -1

// match()
console.log("Hello".match(/e/)); // ["e", index: 1, input: "Hello", groups: undefined]

// normalize()
console.log("Hello".normalize()); // "Hello"

// padEnd()
console.log("Hello".padEnd(10)); // "Hello     "

// padStart()
console.log("Hello".padStart(10)); // "     Hello"

// repeat()
console.log("Hello".repeat(2)); // "HelloHello"

// replace()
console.log("Hello".replace("e", "a")); // "Hallo"

// search()
console.log("Hello".search("e")); // 1

// slice()
console.log("Hello".slice(1, 3)); // "el"

// split()
console.log("Hello".split("")); // ["H", "e", "l", "l", "o"]

// startsWith()
console.log("Hello".startsWith("H")); // true

// substr()
console.log("Hello".substr(1, 3)); // "ell"

// substring()
console.log("Hello".substring(1, 3)); // "el"

// toLocaleLowerCase()
console.log("Hello".toLocaleLowerCase()); // "hello"

// toLocaleUpperCase()
console.log("Hello".toLocaleUpperCase()); // "HELLO"

// toLowerCase()
console.log("Hello".toLowerCase()); // "hello"

// toString()
console.log("Hello".toString()); // "Hello"

// toUpperCase()
console.log("Hello".toUpperCase()); // "HELLO"

// trim()
console.log("  Hello  ".trim()); // "Hello"

// trimEnd()
console.log("  Hello  ".trimEnd()); // "  Hello"

// trimStart()
console.log("  Hello  ".trimStart()); // "Hello  "

// valueOf()
console.log("Hello".valueOf()); // "Hello"