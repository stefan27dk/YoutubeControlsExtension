

bypassYoutubeControls(); // Runs on Enable / Disable Extension


// Observer for path changed
let lastUrl = location.href; 
new MutationObserver(() => 
{
  const url = location.href;
  if (url !== lastUrl) 
  {
    lastUrl = url;
    bypassYoutubeControls(); // Runs on Path Changed "Video Changed"
  }
}).observe(document, {subtree: true, childList: true});



 

 





// ::::::::::::::::::: Working Code ::::::::::::::::::::::::::::::::::::
function bypassYoutubeControls()
{

  chrome.storage.sync.get(['enableExt'], function(result)
    {
        // alert(result.enableExt); 
         if (result.enableExt) 
         {
        //    alert("Running");
              //================================ MouseCLick On Volume ================================================================
             function volumeClick()// Triggered on Volume Clicked
             {
                 // Focus Progress Container
                  document.activeElement.blur();
                  document.getElementsByClassName('video-stream')[0].focus();
             } 
             
             
             
             // Event Listener - Volume Panel
             var volumePanel = document.getElementsByClassName("ytp-volume-panel")[0]; // Get the Volume Panel by className
             volumePanel.addEventListener('click', volumeClick); // Add Event Listener
              
             
             
             
             //================================ Key Presses ================================================================
             document.onkeydown = checkKey;
             
             function checkKey(e)
             {
             
                 e = e || window.event;
             
                 // ---- Left - Arrow -------------------
                 if (e.keyCode == '37') {
                     document.activeElement.blur();
                     document.getElementsByClassName('video-stream')[0].focus();
                 }
             
             
             
                 // ---- Right - Arrow -------------------
                 else if (e.keyCode == '39') {
                     document.activeElement.blur();
                     document.getElementsByClassName('video-stream')[0].focus();
                 }
               
                 };
         } 
                  
         
             //================================ Extension Disabled ================================================================
         else  
         { 
           //it is disabled
         }
    });


}
    
     
  

  

