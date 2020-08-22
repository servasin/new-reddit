// 1.
function concatString(str1: string, str2: string): string {
  return ''.concat(str1, ' ', str2);
}

console.log(concatString('Hello', 'World'));

//  2.
type MyArrayType =  Array<string | number>

interface IMyObject {
  howIDoIt: string;
  simeArray: Array<string | number>
}

interface IMyHometask {
  howIDoIt: string;
  simeArray: (string| number)[];
  withData: IMyObject[];
}

const MyHometask : IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [
    { 
      howIDoIt: "I Do It Wel", 
      simeArray: ["string one", 23] 
    }
  ],
}
