function createCart() {
    var items = [];
    var discountPercent = 0;
    var discountFixed = 0;
    return {
        addItem: function(product, quantity) {
            if (quantity === undefined) {
                quantity = 1;
            }
            var existingItem = null;
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === product.id) {
                    existingItem = items[i];
                    break;
                }
            }
            if (existingItem !== null) {
                existingItem.quantity = existingItem.quantity + quantity;
            } else {
                items.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity
                });
            }
        },
        removeItem: function(productId) {
            var newItems = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].id !== productId) {
                    newItems.push(items[i]);
                }
            }
            items = newItems;
        },
        updateQuantity: function(productId, newQuantity) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].id === productId) {
                    if (newQuantity <= 0) {
                        this.removeItem(productId);
                    } else {
                        items[i].quantity = newQuantity;
                    }
                    break;
                }
            }
        },
        getTotal: function() {
            var subtotal = 0;
            for (var i = 0; i < items.length; i++) {
                subtotal = subtotal + (items[i].price * items[i].quantity);
            }
            var discount = (subtotal * discountPercent / 100) + discountFixed;
            
            return subtotal - discount;
        },
        applyDiscount: function(code) {
            discountPercent = 0;
            discountFixed = 0;
            
            if (code === "SALE10") {
                discountPercent = 10;
                console.log("Áp dụng mã SALE10: Giảm 10%");
            } else if (code === "SALE20") {
                discountPercent = 20;
                console.log("Áp dụng mã SALE20: Giảm 20%");
            } else if (code === "FREESHIP") {
                discountFixed = 30000;
                console.log("Áp dụng mã FREESHIP: Giảm 30.000đ");
            } else {
                console.log("Mã giảm giá không hợp lệ!");
            }
        },
        printCart: function() {
            console.log("");
            console.log("========== GIỎ HÀNG ==========");
            console.log("STT | Sản phẩm      | SL | Đơn giá      | Thành tiền");
            console.log("----------------------------------------------------");
            
            var subtotal = 0;
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var itemTotal = item.price * item.quantity;
                subtotal = subtotal + itemTotal;
                
                console.log(
                    (i + 1) + "   | " + 
                    item.name + " | " + 
                    item.quantity + "  | " + 
                    item.price.toLocaleString() + "đ | " + 
                    itemTotal.toLocaleString() + "đ"
                );
            }
            
            console.log("----------------------------------------------------");
            
            var finalTotal = this.getTotal();
            
            if (discountPercent > 0 || discountFixed > 0) {
                var discountAmount = subtotal - finalTotal;
                console.log("Tạm tính: " + subtotal.toLocaleString() + "đ");
                console.log("Giảm giá: -" + discountAmount.toLocaleString() + "đ");
            }
            
            console.log("TỔNG CỘNG: " + finalTotal.toLocaleString() + "đ");
            console.log("==============================");
            console.log("");
        },
        getItemCount: function() {
            var count = 0;
            for (var i = 0; i < items.length; i++) {
                count = count + items[i].quantity;
            }
            return count;
        },
        clearCart: function() {
            items = [];
            discountPercent = 0;
            discountFixed = 0;
            console.log("Đã xóa toàn bộ giỏ hàng!");
        }
    };
}
const cart = createCart();

console.log("=== THÊM SẢN PHẨM ===");
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);

console.log("Giỏ hàng sau khi thêm:");
cart.printCart();

console.log("=== ÁP DỤNG MÃ GIẢM GIÁ ===");
cart.applyDiscount("SALE10");
cart.printCart();

console.log("=== THÔNG TIN GIỎ HÀNG ===");
console.log("Số SP:", cart.getItemCount()); 

console.log("\n=== XÓA SẢN PHẨM ===");
cart.removeItem(3);
console.log("Sau xóa AirPods Pro:", cart.getItemCount()); 

cart.printCart();

console.log("=== CẬP NHẬT SỐ LƯỢNG ===");
cart.updateQuantity(1, 3);
console.log("Sau cập nhật iPhone 16 thành 3:");
cart.printCart();

console.log("=== XÓA TOÀN BỘ GIỎ ===");
cart.clearCart();
console.log("Số SP sau khi xóa:", cart.getItemCount()); 
