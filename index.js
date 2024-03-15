class RingBuffer {
	constructor(size) {
		this.buffer = new Array(size);
		this.read = 0;
		this.write = 0;
	}

	nQ(item) {
		let b = this.buffer;
		let r = this.read;
		let w = this.write;

		b[w] = item;

		w++;

		if (w >= b.length) {
			w = 0;
		}

		console.log(b);
		console.log(`READ: ${r}`);
		console.log(`WRITE: ${w}`);
	}

	dQ() {
		let b = this.buffer;
		let r = this.read;
		let w = this.write;
		let tries = b.length;

		const item = b[r];

		while (!item) {
			r++;
			if (r >= b.length) {
				r = 0;
			}
			tries--;
			if (tries === 0 || (r === w && b[w] === null)) {
				console.log('The buffer is empty');
				return null;
			}
		}

		b[r] = null;
		r++;

		if (r >= b.length) {
			r = 0;
		}

		console.log('DQed: ' + item);
		console.log(b);
		console.log(`READ: ${r}`);
		console.log(`WRITE: ${w}`);

		return item;
	}
}

const b = new RingBuffer(5);

b.nQ(0);
b.nQ(1);
b.nQ(2);
b.nQ(3);
b.nQ(4);
b.nQ(5);

b.dQ();

b.nQ(6);
b.nQ(7);

b.dQ();
b.dQ();
b.nQ(1);

b.dQ();
b.dQ();
b.dQ();
