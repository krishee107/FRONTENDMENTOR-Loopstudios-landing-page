const open_btn = document.getElementById('menu_hamburguesa_open');
const close_btn = document.getElementById('menu_hamburguesa_close');
const menu = document.getElementById("header_menu")

open_btn.onclick = () =>{
    /* Añadimos la clase active */
    menu.classList.add("active")  
}

close_btn.onclick = () =>{
    /* Añadimos la clase active */
    menu.classList.remove("active")   
}