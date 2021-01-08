
 


var toggleONOFF = true; //Enable / Disable Extension
var onOFFButton = document.getElementById('on-off-extension'); // Get the On-Off  Button

// Get Extension State Enabled / Disabled
chrome.storage.sync.get(['enableExt'], result => {
    toggleONOFF = result.enableExt;
    onOFFButton.textContent = toggleONOFF ? 'Disable' : 'Enable'; // Change onOFFButton - Text
 
});


// On - OFF Button onClick
onOFFButton.onclick = () => {
    toggleONOFF = !toggleONOFF;
    onOFFButton.textContent = toggleONOFF ? 'Disable' : 'Enable'; // Change onOFFButton - Text
    chrome.storage.sync.set({enableExt : toggleONOFF}); // Set Extension state Enabled / Disabled 
    chrome.tabs.reload(); // Refresh Th Tab - to affect changes
};







 