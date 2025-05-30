import Alpine from "alpinejs";
import "./style.css";

window.Alpine = Alpine;
//Code yang kita buat
Alpine.store("merch", {
  goods: [],
  addItem() {
    this.goods = [...this.goods, { name: "", price: "" }];
  },
  deleteItem() {
    if (this.goods.length <= 1) {
      return;
    }

    this.goods.pop();
  },
  generate() {
    localStorage.setItem("goods", JSON.stringify(this.goods));

    window.location.href = "result.html";
  },

  haveItemsLocalStorage() {
    const stored = localStorage.getItem("goods");

    this.goods = stored ? JSON.parse(stored) : [{ name: "", price: "" }];
  },
});

Alpine.start();
