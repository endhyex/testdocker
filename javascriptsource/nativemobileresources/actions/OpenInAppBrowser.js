import InAppBrowser from 'react-native-inappbrowser-reborn';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @param {string} url - This field is required.
 * @param {string} toolbarColor - An optional custom background color for the browser toolbar. For example: 'red' or '#6200EE'.
 * @param {"NativeMobileResources.InAppBrowserDismissButtonStyle.done"|"NativeMobileResources.InAppBrowserDismissButtonStyle.close"|"NativeMobileResources.InAppBrowserDismissButtonStyle.cancel"} iosDismissButtonStyle - iOS only setting. The text that should be used for the button that closes the in app browser. Set to empty to use default value 'close'.
 * @param {boolean} androidShowTitle - Android only setting. Set to true to show the title of the web page in the toolbar.
 * @returns {Promise.<void>}
 */
async function OpenInAppBrowser(url, toolbarColor, iosDismissButtonStyle, androidShowTitle) {
    // BEGIN USER CODE
    // Documentation https://github.com/proyecto26/react-native-inappbrowser
    if (!url) {
        return Promise.reject(new Error("Input parameter 'Url' is required"));
    }
    const options = {
        toolbarColor,
        preferredBarTintColor: toolbarColor,
        dismissButtonStyle: iosDismissButtonStyle,
        showTitle: androidShowTitle
    };
    await InAppBrowser.open(url, options);
    return Promise.resolve();
    // END USER CODE
}

export { OpenInAppBrowser };
