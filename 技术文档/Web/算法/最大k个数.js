const minHeap = (a, i ,k ) => {
	let minIndex = i;
	let minLeft = 2 * i + 1;
	let minRight = 2 * i + 2;
	if (minLeft < k && a[minLeft] < a[minIndex]) {
		minIndex = minLeft;
	}
	if (minRight < k  && a[minRight] < a[minIndex]) {
		minIndex = minRight;
	}
	if (minIndex != i) {
		let t = a[i];
		a[i] = a[minIndex];
		a[minIndex] = t;
		minHeap(a, minIndex, k);
	}
}
const buildMinHead = (a, k) => {
	for (let i = k; i > 0; i--) {
		minHeap(a, i - 1 , k);
	}
};

const c = [2,0,1,6, 2, 3, 4];
buildMinHead(c, 3);
for (let i = 3 ; i < c.length; i++) {
	if (c[i] < c[0]) {
		continue;
	} else {
		c[0] = c[i];
		minHeap(c, 0 , 3);
	}
}
console.log(c);