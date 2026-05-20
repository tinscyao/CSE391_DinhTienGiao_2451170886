function pipe() {
    var fns = arguments;
    return function(x) {
        var result = x;
        for (var i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }
        return result;
    };
}
console.log("=== TEST PIPE ===");
var process = pipe(
    function(x) { return x * 2; },        
    function(x) { return x + 10; },      
    function(x) { return x.toString(); }, 
    function(x) { return "Kết quả: " + x; }
);
console.log(process(5)); 
function memoize(fn) {
    var cache = {}; 
    return function(n) {
        if (cache[n] !== undefined) {
            console.log("Lấy từ cache!");
            return cache[n]; 
        }
        console.log("Đang tính...");
        var result = fn(n);
        cache[n] = result;
        return result;
    };
}
console.log("\n=== TEST MEMOIZE ===");
var expensiveCalc = memoize(function(n) {
    var result = 0;
    for (var i = 0; i < n; i++) {
        result = result + i;
    }
    return result;
});

console.log("Kết quả:", expensiveCalc(1000000)); 
console.log("Kết quả:", expensiveCalc(1000000)); 
console.log("Kết quả:", expensiveCalc(500000));  
function debounce(fn, delay) {
    var timeoutId = null;
    
    return function(arg) {
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(function() {
            fn(arg);
        }, delay);
    };
}
console.log("\n=== TEST DEBOUNCE ===");
var search = debounce(function(query) {
    console.log("Đang tìm kiếm: " + query);
}, 500);
console.log("User đang gõ...");
search("i");      
search("ip");     
search("iph");   
search("ipho");   
search("iphon");  
search("iphone"); 
function retry(fn, maxAttempts, callback) {
    var attempt = 1;
    function tryOnce() {
        console.log("Lần thử " + attempt + "...");       
        try {
            var result = fn();
            console.log("Thành công!");
            callback(null, result); 
        } catch (error) {
            console.log("Lỗi: " + error.message);
            attempt = attempt + 1;
            if (attempt <= maxAttempts) {
                setTimeout(tryOnce, 1000);
            } else {
                callback(new Error("Đã thử " + maxAttempts + " lần nhưng vẫn lỗi!"), null);
            }
        }
    }
    tryOnce();
}
console.log("\n=== TEST RETRY ===");
var callCount = 0;
var fakeApiCall = function() {
    callCount = callCount + 1;
    if (callCount < 3) {
        throw new Error("Mạng lỗi!");
    }
    return { data: "Dữ liệu từ server" };
};
retry(fakeApiCall, 5, function(error, result) {
    if (error) {
        console.log("Thất bại: " + error.message);
    } else {
        console.log("Kết quả:", result);
    }
});
function once(fn) {
    var called = false;
    var result;
    
    return function() {
        if (called === false) {
            called = true;
            result = fn();
        }
        return result;
    };
}

console.log("\n=== TEST ONCE ===");
var initialize = once(function() {
    console.log("Khởi tạo app...");
    return "App đã khởi tạo";
});

console.log(initialize());
console.log(initialize()); 
console.log(initialize());
