//  把类作为参数类型的泛型类  ?


// 模拟 : 通过代码 链接mysql数据库

//      数据库结构(字段:username,password)  Model(class --> 属性与数据对应)

/*
    定义一个User的类  ,作用就是对应数据库字段
    然后定义一个Mysql class 来模拟数据库
    目的 就是要通过创建user对象 来将数据保存到数据库中
*/

// class User{
//     username:string | undefined;
//     password:string | undefined;
// }


// class MysqlDb {
//     // 实际上包含操作

//     add(user:User):boolean{

//         console.log(user);
        
//         return true;
//     }
// }

// var u = new User();
// u.username = '张三';
// u.password = '123456';

// var Db = new MysqlDb();

// Db.add(u);

// class ArticleCate{
//     title:string | undefined
//     desc : string | undefined
//     status : number | undefined
// }


// class MysqlDb {
//     // 实际上包含操作

//     add(info:ArticleCate):boolean{

//         // 环节 真正的连接数据库, CURD
//         console.log(info);
//         console.log(info.title);
        
        
//         return true;
//     }
// }


// var a = new ArticleCate();
// a.title = '我是一个大事件'
// a.desc = '这件事可重要了!!!'
// a.status = 0

// var Db = new MysqlDb();
// Db.add(a)

// 代码冗余


class MysqlDb<T> {
    add(info:T):boolean{
        console.log(info);
        
        return true
    }
    updated(info:T,id:number):boolean{
        console.log(info);
        console.log(id);
        return true
    }
}


class User{
    username:string | undefined;
    password:string | undefined;
}

var u = new User();
u.username ='张三';
u.password='123456';
var Db = new MysqlDb<User>();

Db.add(u)


class ArticleCate{
    title:string | undefined
    desc : string | undefined
    status : number | undefined

    //构造器
    constructor(params:{
        title:string | undefined,
        desc:string|undefined,
        status?:number | undefined
    }){
        this.title = params.title;
        this.desc = params.desc;
        // this.status = params.status
    }
}


var a = new ArticleCate({
    title:'我是大事件!!',
    desc:'特别特别的大!!!'
});


a.status = 666;


var Dbb = new MysqlDb<ArticleCate>();
Dbb.add(a);
Dbb.updated(a,3);