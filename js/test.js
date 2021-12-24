


// 変数発生

$("#MSCI_AWCI").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) {
            YENUSD = xRandomNormal(95.43,14.09); 
            rate = xRandomNormal(0.0597,0.1845);
            profit = asset * rate;
            asset = asset + profit + saving * YENUSD;
            const value = Math.round(asset/YENUSD);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result
    myChart.data.labels = relabel     
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})

$("#Deposit").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) {
            asset = asset + saving ;
            const value = Math.round(asset);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result 
    myChart.data.labels = relabel     
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})
    //     console.clear();
//     localStorage.clear();
//     let sum = 0;
//     for (let k=1; k<=100; k++){
//         let asset = 0;
//         let profit;
//         let saving = 12*$("#monthly_saving").val();
//         let term = 65-$("#age").val();
//         let result = []
//         for (let i = 1; i <= term; i++) {
//             asset = asset + saving ;
//             const value = Math.round(asset);
//             result.push(value);
//         }
//     const key = "預金"+k+"回目";
//     localStorage.setItem(key, result);
//     sum += result[term-1]
//     }
//     console.log(sum/100)
//     $("h2").html("平均資産総額 "+Math.round(sum/100)+"万円");
//     if(Math.round(sum/100) >= 2000){
//         alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
//     }
// })

$("#TOPIX").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) { 
            rate = xRandomNormal(0.0404,0.2161);
            profit = asset * rate;
            asset = asset + profit + saving;
            const value = Math.round(asset);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result
    myChart.data.labels = relabel      
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})
    //     console.clear();
//     localStorage.clear();
//     let sum = 0;
//     for (let k=1; k<=100; k++){
//         let asset = 0;
//         let profit;
//         let saving = 12*$("#monthly_saving").val();
//         let term = 65-$("#age").val();
//         let result = []
//         for (let i = 1; i <= term; i++) { 
//             rate = xRandomNormal(0.0404,0.2161);
//             profit = asset * rate;
//             asset = asset + profit + saving;
//             const value = Math.round(asset);
//             result.push(value);
//         }
//     const key = "日本株式"+k+"回目";
//     localStorage.setItem(key, result);
//     sum += result[term-1]
//     }
//     console.log(sum/100)
//     $("h2").html("平均資産総額 "+Math.round(sum/100)+"万円");
//     if(Math.round(sum/100) >= 2000){
//         alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
//     }
// })

$("#MSCI_EM").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) {
            YENUSD = xRandomNormal(95.43,14.09); 
            rate = xRandomNormal(0.1365,0.2872);
            profit = asset * rate;
            asset = asset + profit + saving * YENUSD;
            const value = Math.round(asset/YENUSD);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result
    myChart.data.labels = relabel      
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})
//     console.clear();
//     localStorage.clear();
//     let sum = 0;
//     for (let k=1; k<=100; k++){
//         let asset = 0;
//         let profit;
//         let saving = 12*$("#monthly_saving").val();
//         let term = 65-$("#age").val();
//         let result = []
//         for (let i = 1; i <= term; i++) {
//             YENUSD = xRandomNormal(95.43,14.09); 
//             rate = xRandomNormal(0.1365,0.2872);
//             profit = asset * rate;
//             asset = asset + profit + saving * YENUSD;
//             const value = Math.round(asset/YENUSD);
//             result.push(value);
//         }
//     const key = "新興国株式"+k+"回目";
//     localStorage.setItem(key, result);
//     sum += result[term-1]
//     }
//     console.log(sum/100)
//     $("h2").html("平均資産総額 "+Math.round(sum/100)+"万円");
//     if(Math.round(sum/100) >= 2000){
//         alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
//     }    
// })
    
$("#MSCI_Developed").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) {
            YENUSD = xRandomNormal(95.43,14.09); 
            rate = xRandomNormal(0.0580,0.1792);
            profit = asset * rate;
            asset = asset + profit + saving * YENUSD;
            const value = Math.round(asset/YENUSD);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result 
    myChart.data.labels = relabel     
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})
    //     console.clear();
//     localStorage.clear();
//     let sum = 0;
//     for (let k=1; k<=100; k++){
//         let asset = 0;
//         let profit;
//         let saving = 12*$("#monthly_saving").val();
//         let term = 65-$("#age").val();
//         let result = []
//         for (let i = 1; i <= term; i++) {
//             YENUSD = xRandomNormal(95.43,14.09); 
//             rate = xRandomNormal(0.0580,0.1792);
//             profit = asset * rate;
//             asset = asset + profit + saving * YENUSD;
//             const value = Math.round(asset/YENUSD);
//             result.push(value);
//         }
//     const key = "先進国株式"+k+"回目";
//     localStorage.setItem(key, result);
//     sum += result[term-1]
//     }
//     console.log(sum/100)
//     $("h2").html("平均資産総額 "+Math.round(sum/100)+"万円");
//     if(Math.round(sum/100) >= 2000){
//         alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！")
//     }
// })

$("#USBOND").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        for (let i = 1; i <= term; i++) {
            YENUSD = xRandomNormal(95.43,14.09); 
            rate = xRandomNormal(0.0204,0.060);
            profit = asset * rate;
            asset = asset + profit + saving * YENUSD;
            const value = Math.round(asset/YENUSD);
            result.push(value);
            relabel.push(i);
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result
    myChart.data.labels = relabel      
    }
    console.log(sum/100)
    myChart.update()
    $("h5").html("100回試行平均 "+Math.round(sum/100)+"万円");
})
    //     console.clear();
//     localStorage.clear();
//     let sum = 0;
//     for (let k=1; k<=100; k++){
//         let asset = 0;
//         let profit;
//         let saving = 12*$("#monthly_saving").val();
//         let term = 65-$("#age").val();
//         let result = []
//         for (let i = 1; i <= term; i++) {
//             YENUSD = xRandomNormal(95.43,14.09); 
//             rate = xRandomNormal(0.0204,0.060);
//             profit = asset * rate;
//             asset = asset + profit + saving * YENUSD;
//             const value = Math.round(asset/YENUSD);
//             result.push(value);
//         }
//     const key = "米国中長期債"+k+"回目";
//     localStorage.setItem(key, result);
//     sum += result[term-1]
//     }
//     console.log(sum/100)
//     $("h2").html("平均資産総額 "+Math.round(sum/100)+"万円");
//     if(Math.round(sum/100) >= 2000){
//         alert("おめでとうございます！老後資産2000万円以上の形成に成功しました！");
//     }
// })

// button tag
// $("#aa").on("click",function(){
//     const omikuji = Math.floor(xRandomNormal(0,1)*6)
// if(omikuji === 0){
//     $("h2").html("大吉");
//     $("h2").css("color","red");
//     console.log("大吉");
//     alert("おめでとう！")
// }else if(omikuji === 1){
//     $("h2").html("中吉");
//     console.log("中吉")
// }else if(omikuji === 2){
//     $("h2").html("小吉");
//     console.log("小吉")
// }else if(omikuji === 3){
//     $("h2").html("吉");
//     console.log("吉")
// }else if(omikuji === 4){
//     $("h2").html("凶");
//     console.log("凶")
// }else if(omikuji === 5){
//     $("h2").html("大凶");
//     console.log("大凶")
// }
//     // alert(111)
// })

// // ここからコードを書きます🤗
// // alert(111);
// console.log("はじめてのジャバスクリプト")

// // Syntax errorは打ち間違いの場合に生じる
// console.log(23+5)
// console.log(2000-1800)
// console.log(18+5)

// const test = "aaaa";
// const morita = "MORITA"
// const num = 1;

// console.log(test)
// console.log(num)

// if(test === "aaaa"){
//     console.log("箱の名前はaaaaです")
// }else{
//     console.log("これはaaaaではありません")
// }

// if(morita === "MORITA"){
//     console.log("箱の中身はモリタです")
// }else{
//     console.log("これはモリタではありません")
// }

// const point = 90;
// if(point >= 80){
//     console.log("素晴らしい！おめでとう！")
// }else{
//     console.log("もっと頑張りましょう")
// }

// const random = Math.floor(Math.random()*5)
// console.log(random,"ランダムな数字")



// // button tag
// $("#aa").on("click",function(){
//     const omikuji = Math.floor(Math.random()*6)
// if(omikuji === 0){
//     $("h2").html("大吉");
//     $("h2").css("color","red");
//     console.log("大吉");
//     alert("おめでとう！")
// }else if(omikuji === 1){
//     $("h2").html("中吉");
//     console.log("中吉")
// }else if(omikuji === 2){
//     $("h2").html("小吉");
//     console.log("小吉")
// }else if(omikuji === 3){
//     $("h2").html("吉");
//     console.log("吉")
// }else if(omikuji === 4){
//     $("h2").html("凶");
//     console.log("凶")
// }else if(omikuji === 5){
//     $("h2").html("大凶");
//     console.log("大凶")
// }
//     // alert(111)
// })