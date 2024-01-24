window.onload = init;

function init() {
    
    let menu;
    let menuItem;
    
    let menuBar = new MenuBar("#MyMenuBar");

    menu = new Menu("Datei");
    
    menuItem = new MenuItem("Speichern", (e)=>alert("Speichern"));
    menu.addMenuItem(menuItem);
    
    menuItem = new MenuItem("Laden", (e)=>alert("Laden"));
    menu.addMenuItem(menuItem);

    menuItem = new MenuItem("Beenden", (e)=>alert("Beenden"));
    menu.addMenuItem(menuItem);
    
    menuBar.addMenu(menu);

    
    menu = new Menu("Bearbeiten");

    menuItem = new MenuItem("Suchen", (e)=>alert("Suchen"));
    menu.addMenuItem(menuItem);
    
    menuItem = new MenuItem("Ersetzen", (e)=>alert("Ersetzen"));
    menu.addMenuItem(menuItem);

    menuBar.addMenu(menu);

    menu = new Menu("Hilfe");

    menuItem = new MenuItem("Online", (e)=>alert("Online"));
    menu.addMenuItem(menuItem);
    
    menuItem = new MenuItem("Telefonjoker", (e)=>alert("Telefonjoker"));
    menu.addMenuItem(menuItem);

    menuBar.addMenu(menu);
}