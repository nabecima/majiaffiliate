import "../sass/style.scss";

const date = new Date();
const small = document.querySelector(".p-rule__copyright small");
small.innerHTML = `Copyright &copy; ${date.getFullYear()} All rights reserved.`;
