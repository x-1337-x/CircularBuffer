class КольцевойБуфер {
	constructor(размер) {
		this.буфер = new Array(размер);
		this.чтение = 0;
		this.запись = 0;
	}

	вОч(ед) {
		let б = this.буфер;
		let ч = this.чтение;
		let з = this.запись;

		б[з] = ед;

		з++;

		if (з >= б.length) {
			w = 0;
		}

		console.log(б);
		console.log(`ЧТЕНИЕ: ${ч}`);
		console.log(`ЗАПИСЬ: ${з}`);
	}

	изОч() {
		let б = this.буфер;
		let ч = this.чтение;
		let з = this.запись;
		let попытки = б.length;

		const ед = б[ч];

		while (!ед) {
			ч++;
			if (ч >= б.length) {
				ч = 0;
			}
			попытки--;
			if (попытки === 0 || (ч === з && б[з] === null)) {
				console.log('Буфер пуст');
				return null;
			}
		}

		б[ч] = null;
		ч++;

		if (ч >= б.length) {
			ч = 0;
		}

		console.log('Из очереди: ' + ед);
		console.log(б);
		console.log(`ЧТЕНИЕ: ${ч}`);
		console.log(`ЗАПИСЬ: ${з}`);

		return ед;
	}
}

const б = new КольцевойБуфер(5);

б.вОч(0);
б.вОч(1);
б.вОч(2);
б.вОч(3);
б.вОч(4);
б.вОч(5);

б.изОч();

б.вОч(6);
б.вОч(7);

б.изОч();
б.изОч();
б.вОч(1);

б.изОч();
б.изОч();
б.изОч();
