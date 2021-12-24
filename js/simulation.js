


// RealtimeDB 設定

// const firebaseConfig = {
//     apiKey: "AIzaSyAicGA_NSigVTMrYlF2Ox_fhVLs1s7V8rc",
//     authDomain: "js03-nakamura.firebaseapp.com",
//     projectId: "js03-nakamura",
//     storageBucket: "js03-nakamura.appspot.com",
//     messagingSenderId: "191200816809",
//     appId: "1:191200816809:web:11d4c1a3617f201d64c3b8"
//     };
    
    
//         // Initialize Firebase
//         const app = initializeApp(firebaseConfig);
    
//     // 追加２
    
//     const db  = getDatabase(app); //RealtimeDBに接続
//     const dbRef = ref(db,"Asset management"); //RealtimeDB内の"chat"を使う


// 変数発生

$("#MSCI_AWCI").on("click",function(){
    console.clear();
    localStorage.clear();
    let sum = 0;
    let result_total = {};
    // const AWCI_ref = ref(db,"AWCI result");
    for (let k=1; k<=100; k++){
        let asset = 0;
        let profit;
        let saving = 12*$("#monthly_saving").val();
        let term = 65-$("#age").val();
        let result = []
        let relabel = []
        let result_object = {}
        for (let i = 1; i <= term; i++) {
            YENUSD = xRandomNormal(95.43,14.09); 
            rate = xRandomNormal(0.0597,0.1845);
            profit = asset * rate;
            asset = asset + profit + saving * YENUSD;
            const value = Math.round(asset/YENUSD);
            result.push(value);
            relabel.push(i);
            result_object[i] = value
            $("h2").html("退職資産総額 "+Math.round(value)+"万円");
        }
    const key = k+"回目";
    const am_result = result.map(Number)
    result_total[key] = result_object
    // const newPostRef = push(AWCI_ref);
    // set(newPostRef,result_object)
    console.log(am_result)
    localStorage.setItem(key, result);
    sum += result[term-1]
    myChart.data.datasets[0].data = am_result
    myChart.data.labels = relabel     
    }
    console.log(sum/100)
    console.log(JSON.stringify(result_total),null,'\t');
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
