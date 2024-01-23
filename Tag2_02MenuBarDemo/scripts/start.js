window.onload = init;

function init() {
    let menu;
    let menuItem;

    let menuBar = new MenuBar("#navi");

    menu = new Menu("Datei");

    menuItem = new MenuItem("Laden", ()=>alert("Laden"));
    menu.addMenuItem(menuItem);
    menuItem = new MenuItem("Speichern", ()=>alert("Speichern"));
    menu.addMenuItem(menuItem);

    menuBar.addMenu(menu);

    menu = new Menu("Bearbeiten");

    menuBar.addMenu(menu);

}
