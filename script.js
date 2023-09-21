const fibonacciSequence = (n) => { // n is the number of Fibonacci numbers that will be generated
	let a = 1; // first term of the Fibonacci sequence
	let b = 1; // second term of the Fibonacci sequence

	console.log(a);
	console.log(b);

	for (let i = 3; i <= n; i++) { // generate other Fibonacci numbers
		const fib = a + b; // next term of the Fibonacci sequence
		console.log(fib);
		a = b;
		b = fib;
	}
};

const desiredLength = 10;
fibonacciSequence(desiredLength);
