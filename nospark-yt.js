window.chrome.webRequest.onBeforeRequest.addListener(
	blockRequest,
	{
		urls: ["*://www.google.com/external/j.php?*"],
	},
	["blocking"]
);

function blockRequest(page) {
	console.log("Blocked: ", page.url);
	return {
		cancel: true,
	};
}
