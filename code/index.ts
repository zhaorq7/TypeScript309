import getData from './modules/db';
/*
    装饰器 : 是一种特殊类型的声明 , 他能够被附加到类的声明,方法, 属性,参数上 , 可以修改类的行为

    通俗的讲 , 装饰器就是 一个方法 , 可以将行为注入到 类的声明,方法, 属性,参数上

    常见的装饰器 : 类装饰器 , 属性装饰器 , 方法装饰器 , 参数装饰器

    写法 : 普通(无法传参) , 装饰器工厂(可传参)

    非常大的成就 , es7 标准特性之一
*/

//类装饰器

// function logClass(params:any){
//     console.log(params); // 当前的类

//     params.prototype.apiUrl = 'http://www.bukaedu.com'
//     params.prototype.run  = function(){
//         console.log('我run了');
        
//     }
    
// }


// @logClass
// class HttpClient {
//     constructor(){}
//     getData(){}
// }

// var http:any = new HttpClient();

// http.run();
// console.log(http.apiUrl);


// function logClass(target:any){
//     console.log(target);
    
//     return class extends target {
//         apiUrl:any = '我是改后的数据'

//         getData(){
//             this.apiUrl = this.apiUrl + "-------"
//             console.log(this.apiUrl);
            
//         }
//     }
// }




// @logClass
// class HttpClient{
//     public apiUrl:string | undefined

//     constructor(){
//         this.apiUrl = '我是构造器里面的apiUrl'
//     }

//     getData(){
//         console.log(this.apiUrl);
        
//     }
// }

// var http = new HttpClient();

// http.getData();

//属性装饰器  , 传入两个参数 
// 1. 对于静态成员来说   类的构造函数 会被传入 , 对于 实例 , 类的原型 传入
// 2.  成员的名字


// function logClass(params:string){
//     return function(target:any){
       
//     }
// }

// function logProperty(params:string){
//     return function(target:any,attr:any){
//         console.log(attr,'---');
//         console.log(target,'===');

//         //变量属性名 就这么用
//         target[attr] = params
//     }
// }

// // @logClass
// class HttpClient {
    

//     @logProperty('我是参数')
//     public url:any | undefined

//     constructor(){}

//     getData(){
//         console.log(this.url);
//     }
// }

// var http = new HttpClient();
// http.getData();

// 方法装饰器 

// 参数: 

//1. 对于静态成员  构造函数 , 对于实例    原型对象
//2. 成员的名字
//3. 成员的属性描述符


// function get(params:string){
//     return function(target:any,methodName:any,desc:any){
//         console.log(target,'1');
//         console.log(methodName,'2');
//         console.log(desc,'3');
        
//         // target.apiUrl = 'http://www.baidi.com'

//         // target.run= function(){
//         //     console.log('runrurnurn');
            
//         // }

//         //保存当前方法

//         var oMethod = desc.value

//         desc.value = function (...args:any[]){
//             args = args.map((val)=>{
//                 return String(val)
//             })
//             // js高级
//             oMethod.apply(this,args)
//         }

//     }
// }


// class HttpClient {
    

//     public url:any | undefined

//     constructor(){}

//     @get('我是一条信息')
//     getData(...args:any[]){
//         // console.log(this.url);

//         console.log(args);
//         console.log('我是getData里面的方法');
        
        

//     }
// }

// var http:any = new HttpClient();
// // http.getData();

// // http.run()

// // console.log(http.apiUrl);

// http.getData(123,'xxxx');

//参数装饰器
//当函数被调用 , 涉及到传参 
// 参数: 1.  对于静态成员  构造函数 , 对于实例    原型对象 2. 方法的名字 3. 在参数列表中的索引

function logParams (params:any){
    return function(target:any,methodName:any,paramsIndex:any){
        target.apiurl = 'xxxxxx'
    }
}

class HttpClient{
    public url:any |undefined
    constructor(){}

    getData(@logParams('我是一整个装饰器的参数') uid:any){
            console.log(uid);
            
    }
}

var http = new HttpClient();

http.getData('12345678');
console.log(http.apiurl);


// 执行顺序 

// 属性 > 方法 >  方法参数 > class

//如果有多个同样的装饰器 , 会先执行 后面的

//案例


function logClass1(params:string){
    return function(target:any){
      console.log('类装饰器1')
    }
}

function logClass2(params:string){
    return function(target:any){
      console.log('类装饰器2')
    }
}

function logAttribute1(params?:string){
    return function(target:any,attrName:any){
      console.log('属性装饰器1')
    }
}

function logAttribute2(params?:string){
    return function(target:any,attrName:any){
      console.log('属性装饰器2')
    }
}

function logMethod1(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法装饰器1')
    }
}
function logMethod2(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法装饰器2')
    }
}



function logParams1(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法参数装饰器1')
    }
}

function logParams2(params?:string){
    return function(target:any,attrName:any,desc:any){
      console.log('方法参数装饰器2')
    }
}



@logClass1('http://www.itying.com/api')
@logClass2('xxxx')
class HttpClient{
    @logAttribute1()
    @logAttribute2()
    public apiUrl:string | undefined;
    constructor(){
    }

    @logMethod1()
    @logMethod2()
    getData(){
        return true;
    }

    setData(@logParams1() attr1:any,@logParams2() attr2:any,){

    }
}

var http:any=new HttpClient();