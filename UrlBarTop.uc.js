// ==UserScript==
// @name            UrlBarTop
// @author          leo
// @include         *
// @startup         UC.UrlBarTop.exec(win);
// @onlyonce
// ==/UserScript==


UC.UrlBarTop = {
    exec :function(win){
        if (win.location.href !== _uc.BROWSERCHROME)
            return;
        const { AppConstants, CustomizableUI, document, Services } = win
        const sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);

        console.log("UBT init");
        
        const css_ucjs = Services.io.newURI( "data:text/css;charset=utf-8," + encodeURIComponent(`
            #titlebar {
                -moz-box-ordinal-group: 2 !important;
            }
            #PersonalToolbar{
                -moz-box-ordinal-group: 3 !important;
            }
        `), null, null );
        
        sss.loadAndRegisterSheet(css_ucjs, sss.USER_SHEET);

        if(document != null){
            var ControlButtonBox = document.querySelector("#TabsToolbar .titlebar-buttonbox-container");
            document.getElementById("nav-bar").appendChild(ControlButtonBox);
            document.getElementById("TabsToolbar").removeChild(ControlButtonBox);
        }
    }
}
