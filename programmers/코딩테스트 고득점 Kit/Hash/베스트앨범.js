function solution(genres, plays) {
	let ans = [];
	let obj = {};

	genres.forEach((elem, idx) => {
		obj[elem] = (obj[elem] || 0) + plays[idx];
	});

	let playedGenre = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

	playedGenre.forEach((elem) => {
		let song = [];
		genres.forEach((genre, idx) => {
			if (elem === genre) {
				song.push([idx, plays[idx]]);
			}
		});
		song.sort((a, b) => {
			if (a[0] === b[0]) {
				return a[0] - b[0];
			} else {
				return b[1] - a[1];
			}
		});

		for (let i = 0; i < 2; i++) {
			if (song.length === 1) {
				ans.push(song[i][0]);
				break;
			}
			ans.push(song[i][0]);
		}
	});
	return ans;
}
