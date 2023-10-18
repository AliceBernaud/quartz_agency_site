import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["mySidenav", "openBtn", "closeBtn"];
  connect() {
    this.sidenav = this.element;

  }

  openNav() {

    console.log("hello")
    this.sidenav.classList.add("active");
  }

  closeNav(){

    this.sidenav.classList.remove("active");
  }
}
