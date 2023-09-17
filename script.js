const fibonacciSequence = (n) => { // n is the number of Fibonacci numbers that will be generated

	let a = 1; // the first member of the Fibonacci sequence
	let b = 1; // the second member of the Fibonacci sequence

	for (let i = 1; i <= n; i++) { // tgeneration of the first n Fibonacci numbers
		console.log(a); // will output the current value of a to the console
		const fib = a + b; // the next member of the Fibonacci sequence
		a = b;
		b = fib;
	}
};

const desiredLength = 10;
fibonacciSequence(desiredLength);