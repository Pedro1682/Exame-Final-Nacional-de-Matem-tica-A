let ggbParameters = {
    id:"ggb",
    p00ease: false,
    width: 300, 
    height: 300, 
    borderColor: null,
    showMenuBar: false, 
    showAlgebraInput: false, 
    showResetIcon: false, 
    enableLabelDrags: false, 
    enableShiftDragZoom: true, 
    enableRightClick: true,
    captureThreshold: null,
    showToolBarHelp: false,
    errorDialogsActive: true,
    useBrowserForJS: false,
    material_id: "s7mjzc5e",
    appletOnLoad:(api)=>ggbConstr.replaceAll("\n","").split(";").forEach((x)=>api.evalCommand(x))
  }; 
  let applet = new GGBApplet(ggbParameters, true);
  
  
  window.onload = function () {
  
  };
  
  function evalInput(strInput) {
    ggb.evalCommand(strInput);
    return false;
  }
  
  
  
  