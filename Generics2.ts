// function filterarray<t>(array: t[], condition: (item: t) => boolean): t[] {
//     return array.filter((item) => condition(item))
// }

// const Numarray :number[] = [1,2,3,4,5,6,7,8,9]

// const even = filterarray <number> (Numarray,(num)=>num%2===0)
// const odd = filterarray <number> (Numarray,(num)=>num%2!=0)



// console.log(even);
// console.log(odd);


// interface interfruits {
//     name: string,
//     isGood: boolean
// }


// const fruits: interfruits[] = [
//     { name: 'apple', isGood: true },
//     { name: 'orange', isGood: true },
//     { name: 'Avodaco', isGood: false },
//     { name: 'kiwi', isGood: true },
//     { name: 'tomato', isGood: false }
// ]


// const goodfruits: interfruits[] = filterarray<interfruits>(fruits, (fruit) => fruit.isGood === false)
// console.log(goodfruits.map((fruit: interfruits): string => fruit.name));
// ------------------------------------------------------------------------------------------


//Generic Classes



class count<T> {
    private content: T;


    constructor(initContent: T) { this.content = initContent };

    displayContent(): void {
        console.log(this.content);

    }
    setContent(content: T) {
        this.content = content
    }

}


const sam = new count<string>('sam');
sam.displayContent()
sam.setContent('shree')
sam.displayContent()


const num = new count<number>(12)
num.displayContent()
num.setContent(999)
num.displayContent()


const bul = new count<boolean>(true)
bul.displayContent()
bul.setContent(false)
bul.displayContent()
