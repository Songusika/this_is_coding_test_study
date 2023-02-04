const MIN_KEY_SIZE:number = 3;
const MAX_KEY_SIZE:number = 20;

const MIN_LOCK_SIZE:number = 3;
const MAX_LOCK_SIZE:number = 20;

const HOLE_SHAPE:number = 0;
const POP_SHAPE:number =1;

class UnLocker{
    private key:number[][] = [];
    private lock:number[][] = [];

    constructor(key:number[][], lock:number[][]){
        this.validate(key, lock);
        this.key = key;
        this.lock = lock;
    }

    private validate(key:number[][], lock:number[][]):void{
        this.validateSize(key, MIN_KEY_SIZE, MAX_KEY_SIZE);
        this.validateSize(lock, MIN_LOCK_SIZE, MAX_LOCK_SIZE);
        this.validateSquare(key);
        this.validateSquare(lock);
    }

    private validateSize(array:number[][], min:number, max:number):void{
        if(!(array.length >= min && array.length <= max)){
            throw new Error("옳바른 크기의 길이를 입력해주세요.");
        }
    }

    private validateSquare(array:number[][]):void{
        let len = array.length;

        array.forEach((row:number[])=>{
            if(row.length != len){
                throw new Error("정사각형이 아닙니다.");
            }
        })
    }
}

let q10_t1:UnLocker = new UnLocker([[0,0,0], [1,0,0], [0,1,1]], [[1,1,1,], [1,1,0], [1,0,1]]);