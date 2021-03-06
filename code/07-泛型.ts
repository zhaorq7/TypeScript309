//泛型定义

// Array<number>

// fn(str:string):string
// fn(str:any):any  --> fn('abc'){ return 666}

// 软件工程中  我们不仅需要创建良好的api , 也要考虑重用性
// 组件不仅能支持当前的数据类型 , 同时也能支持未知的数据类型 , 提高灵活性
// java  c#  
// 泛型就是解决 了类   函数   接口  的复用性 , 以及对不特定数据类型的支持

// <T>  具体指什么类型 , 调用的时候传入来决定




//泛型函数

function getData<T>(value:T):T{
    return value
}


getData<number>(666);
getData<string>('123');
// getData<number>('123');     x


function getData2<T>(value:T,value2:T):any{
    var sum:T = value = value2;
    return '我们得到的数据是: '+ sum;
}

console.log(getData2(99,33));



//泛型类


class MinClas<T> {
    public list:T[] = [];

    add(value:T):void{
        this.list.push(value);
    }


    min():T{
        var minNum = this.list[0];
        for(var i = 0 ; i < this.list.length ; i++){
            //this.list[i]
            if(this.list[i] < minNum){
                minNum = this.list[i]
            }
        }

        return minNum;
    }
}


var m1 = new MinClas<number>();
m1.add(1);
m1.add(17);
m1.add(91);

console.log(m1.min());



var m2 = new MinClas<string>();
// ascii    字典
m2.add("c");
m2.add("a");
m2.add("v");

console.log(m2.min());



//泛型接口


interface ConfigFn<T>{
    (value:T):T;
}
function getData3<T>(value:T):T{
    return value
}


var myGetData:ConfigFn<string> = getData3;

console.log(myGetData('abc'))


//  把类作为参数类型的泛型类  ?
