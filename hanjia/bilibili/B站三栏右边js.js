/*三栏右边图JS */
var btns = document.getElementsByClassName("btn");
var as = document.getElementsByClassName("a");
var imgs = document.getElementsByClassName("img");
var spans1 = document.getElementsByClassName("span");
var index1=0;
var srcArr = ["./图片/第一层top图1.webp","./图片/第一层top图2.webp","./图片/第一层top图3.webp",
                  "./图片/第一层bottom图1.webp","./图片/第一层bottom图2.webp","./图片/第一层bottom图3.webp",
                  "./图片/第二层top图1.webp","./图片/第二层top图2.webp","./图片/第二层top图3.webp",
                  "./图片/第二层bottom图1.webp","./图片/第二层bottom图2.webp","./图片/第二层bottom图3.webp",
                  "./图片/第三层top图1.webp","./图片/第三层top图2.webp","./图片/第三层top图3.webp",
                  "./图片/第三层bottom图1.webp","./图片/第三层bottom图2.webp","./图片/第三层bottom图3.webp"] ;
var hrefArr = [  "https://www.bilibili.com/video/BV1jU4y1s7kt?spm_id_from=333.851.b_7265636f6d6d656e64.1",
                "https://www.bilibili.com/video/BV1Th411k7ke?spm_id_from=333.851.b_7265636f6d6d656e64.2",
                "https://www.bilibili.com/video/BV1MV411q7Rm?spm_id_from=333.851.b_7265636f6d6d656e64.3",
                "https://www.bilibili.com/video/BV1Qy4y1h7t3?spm_id_from=333.851.b_7265636f6d6d656e64.4",
                "https://www.bilibili.com/video/BV1gy4y1e7Vn?spm_id_from=333.851.b_7265636f6d6d656e64.5",
                "https://www.bilibili.com/video/BV1oN411X7TK?spm_id_from=333.851.b_7265636f6d6d656e64.6",
                "https://www.bilibili.com/video/BV1Ay4y1H7vx?spm_id_from=333.851.b_7265636f6d6d656e64.1",
                "https://www.bilibili.com/video/BV1fp4y1p73V?spm_id_from=333.851.b_7265636f6d6d656e64.2",
                "https://www.bilibili.com/video/BV1TN41197iZ?spm_id_from=333.851.b_7265636f6d6d656e64.3",
                "https://www.bilibili.com/video/BV1BN411X7Gy?spm_id_from=333.851.b_7265636f6d6d656e64.4",
                "https://www.bilibili.com/video/BV1Mi4y1T772?spm_id_from=333.851.b_7265636f6d6d656e64.5",
                "https://www.bilibili.com/video/BV1fX4y157b4?spm_id_from=333.851.b_7265636f6d6d656e64.6",
                "https://www.bilibili.com/video/BV1RA411M7wV?spm_id_from=333.851.b_7265636f6d6d656e64.1",
                "https://www.bilibili.com/video/BV1rK4y1S7GP?spm_id_from=333.851.b_7265636f6d6d656e64.2",
                "https://www.bilibili.com/video/BV1Ap4y1H7tP?spm_id_from=333.851.b_7265636f6d6d656e64.3",
                "https://www.bilibili.com/video/BV1HK4y1H7Z9?spm_id_from=333.851.b_7265636f6d6d656e64.4",
                "https://www.bilibili.com/video/BV1KK4y1J7A4?spm_id_from=333.851.b_7265636f6d6d656e64.5",
                "https://www.bilibili.com/video/BV1ov411a7Zk?spm_id_from=333.851.b_7265636f6d6d656e64.6"];
var textArr = [ "当它们重叠在一起 - oooooohmygosh",
                "【明日方舟/手书】Satellite【博士中心",
                "【猴哥】「哎唷哇，猴哥居然被猴制裁了！」全AP、超剧毒提摩一秒三箭！瞬间秒满血！｜ 世界最强猴王 兰林汉",
                "烦！！！死！！！了！！！！！！！！！！！！！！！！！！【ABbbb君】",
                "【原神】仙剑奇侠传！",
                "把利威尔的声线换成姜文会是什么效果",
                "赛博东方酒保（试做版）",
                "「平成/Riders/令和」Project ：Inheritance",
                "【明日方舟/鉴赏】果子哥带你正直夕",
                "【偶像梦幻祭2/meme】天城燐音-HIP",
                "【Re0】再见，以及关于未来——20集解析",
                "当年的刷枪是真是假？解密CF刷枪的发展历程（上）",
                "超燃踩点！展示自制的中国56个民族服饰！",
                "𝐔𝐫𝐮𝐤 𝐍𝐞𝐯𝐞𝐫 𝐃𝐢𝐞  乌鲁克永存  【Fate/Grand Order丨MAD】",
                "「原神」胡桃入手前，你需要准备好的几件事",
                "CF30人生化之移形换影 超无限连杀 玉龙解说穿越火线",
                "【超级小桀/马里奥制造1】你说这尴尬不？",
                "洛 斯 里 克 运 动 会 2021 "];
btns[0].onclick = function(){
    index1 = index1 -6;
    if(index1<0){
        index1 = 12
    }
    console.log(index1);
    for(var i = 0;i<6;i++){
        as[i].href = hrefArr[index1+i];
        imgs[i].src = srcArr[index1+i];
        spans1[i].innerHTML = textArr[index1+i];

    }
}
btns[1].onclick = function(){
    index1 = index1 +6;
    if(index1>=18){
        index1 = 0
    }
    console.log(index1);
    for(var i = 0;i<6;i++){
        as[i].href = hrefArr[index1+i];
        imgs[i].src = srcArr[index1+i];
        spans1[i].innerHTML = textArr[index1+i];

    }
}