import Alpine from "alpinejs";
import "./style.css";

window.Alpine = Alpine;

Alpine.data("merch", () => ({
  goods: [],
  currentView: "input", // Tambahkan state untuk view

  addItem() {
    this.goods = [...this.goods, { name: "", price: "" }];
  },

  deleteItem() {
    if (this.goods.length <= 1) return;
    this.goods.pop();
  },

  generate() {
    localStorage.setItem("goods", JSON.stringify(this.goods));
    this.currentView = "result"; // Ganti view, bukan redirect
  },

  haveItemsLocalStorage() {
    const stored = localStorage.getItem("goods");
    this.goods = stored ? JSON.parse(stored) : [{ name: "", price: "" }];
  },

  init() {
    this.haveItemsLocalStorage();
  },
}));

Alpine.data("calculation", () => ({
  items: (() => {
    const storedGoods = localStorage.getItem("goods");
    if (storedGoods) {
      try {
        return JSON.parse(storedGoods).map((item) => ({
          ...item,
          price: Number(item.price) || 0,
          quantity: "",
        }));
      } catch (e) {
        console.error("Error parsing stored goods:", e);
        return [];
      }
    }
    return [];
  })(),
  showResult: false,
  newItems: [],
  total: 0,
  customerMoney: "",
  change: 0,
  calculate() {
    this.showResult = true;
    this.newItems = [...this.items]; // Salin langsung karena sudah number
    this.total = this.newItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  },
  calculateChange() {
    this.change = this.customerMoney - this.total;
  },
  formattedChange() {
    if (this.change >= 0) {
      return "Rp " + this.change.toLocaleString("id-ID");
    } else {
      const shortage = -this.change;
      return "Uang kurang: Rp " + shortage.toLocaleString("id-ID");
    }
  },
}));

Alpine.start();
