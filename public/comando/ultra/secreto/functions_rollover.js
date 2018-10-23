// ---------------------------------------------------------------------------
// Rollover de opciones de un menú
//
// By Vidal Rodríguez (VARB 2006 - vr72@yahoo.com)
// ---------------------------------------------------------------------------

// Para usar ver:
//   /comunes/funciones/gui/rollover/ejemplo/ejemplo.phtml

// --------------
function OnMouseEventOnMenu(iId, strMenuName, strTextColor, strBgColor, strLinkStyleClass,
                            bUseTopImage, bUseBottomImage, strLeftImage,
                            strRightImage, strTopImage, strBottomImage)
{
  // Cambiar las imágenes
  eval("document." + strMenuName + "_left_"  + iId + ".src = strLeftImage");
  eval("document." + strMenuName + "_right_" + iId + ".src = strRightImage");
  if (bUseTopImage)
    //eval("document." + strMenuName + "_top_" + iId + ".src = strTopImage");
    document.getElementById(strMenuName + "_imgtopcell_" + iId).style.backgroundImage = "url(" + strTopImage + ")";
  if (bUseBottomImage)
    //eval("document." + strMenuName + "_top_" + iId + ".src = strBottomImage");
    document.getElementById(strMenuName + "_imgbottomcell_" + iId).style.backgroundImage = "url(" + strBottomImage + ")";
  // Cambiar la celda del texto
  document.getElementById(strMenuName + "_textcell_" + iId).style.color           = strTextColor;
  document.getElementById(strMenuName + "_textcell_" + iId).style.backgroundColor = strBgColor;
  document.getElementById(strMenuName + "_link_"     + iId).className             = strLinkStyleClass;
}

// --------------
function NavigateTo(strLink)
{
  //alert('Va a ir a ' + strLink);
  //return false;

  location.replace(strLink);
  location.href = strLink; // Por si acaso no está la función replace
}

// --------------
function NavigateThroughLink(strLink)
{
  oLink = document.getElementById(strLink);
  if (oLink.click)
    oLink.click();
}

// --------------
function Get_LoadedImage(strImage)
{
  img = new Image;
  img.src = strImage;

  return img;
}

// --------------
function PreloadImages(strLeftImage, strRightImage, strTopImage, strBottomImage, strImageSuffix, strImageExt)
{
  var d = document;
  if (d.images)
  {
    if (!d.PreImgs)
      d.PreImgs = new Array();

    iImg = d.PreImgs.length;

    // Preload the left images
    d.PreImgs[iImg++] = Get_LoadedImage(strLeftImage + strImageExt);
    d.PreImgs[iImg++] = Get_LoadedImage(strLeftImage + strImageSuffix + strImageExt);
    // Preload the right images
    d.PreImgs[iImg++] = Get_LoadedImage(strRightImage + strImageExt);
    d.PreImgs[iImg++] = Get_LoadedImage(strRightImage + strImageSuffix + strImageExt);
    // Preload the top images
    if (strTopImage != "")
    {
      d.PreImgs[iImg++] = Get_LoadedImage(strTopImage + strImageExt);
      d.PreImgs[iImg++] = Get_LoadedImage(strTopImage + strImageSuffix + strImageExt);
    }
    // Preload the bottom images
    if (strBottomImage != "")
    {
      d.PreImgs[iImg++] = Get_LoadedImage(strBottomImage + strImageExt);
      d.PreImgs[iImg++] = Get_LoadedImage(strBottomImage + strImageSuffix + strImageExt);
    }
  }
}

document.PreloadImagesSet = 1;
