import sajak from './sajak';
import Sreemangal from './Sreemangal';
import Sundarbans from './Sundarbans';

const fakeData = [...sajak, ...Sreemangal, ...Sundarbans];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;