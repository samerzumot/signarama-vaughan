/**
 * Google Ads Script to create Campaign Image Assets
 * 
 * Instructions:
 * 1. Log into your Google Ads account at ads.google.com
 * 2. Click "Tools and settings" (wrench icon) > "Bulk actions" > "Scripts"
 * 3. Click the blue "+" button to create a new script.
 * 4. Paste this entire code into the editor.
 * 5. Click "Authorize" at the top of the editor if prompted.
 * 6. Click "Preview" to see the changes it will make.
 * 7. Click "Run" to apply the images to your campaigns.
 */

function main() {
    const accountId = AdsApp.currentAccount().getCustomerId();
    Logger.log(`Running script for account: ${accountId}`);

    // Map campaigns to the actual image gallery URLs from the new website
    const imageMapping = {
        "Channel Letters - GTA": [
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-pullman-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-walking-on-a-cloud.jpg",
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-freshii.jpg"
        ],
        "Storefront Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/storefront-signs/storefront-1.png",
            "https://custombusinesssigns.ca/images/gallery/storefront-signs/storefront-4.png",
            "https://custombusinesssigns.ca/images/gallery/storefront-signs/storefront-smoke-bbq.jpg"
        ],
        "Vehicle Wraps - GTA": [
            "https://custombusinesssigns.ca/images/gallery/vehicle-wraps/wrap-plumbing.jpg",
            "https://custombusinesssigns.ca/images/gallery/vehicle-wraps/wrap-hvac.jpg",
            "https://custombusinesssigns.ca/images/gallery/vehicle-wraps/wrap-fleet.jpg"
        ],
        "Illuminated Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-ethan-allen.jpg",
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-norma-reed.jpg"
        ],
        "Pylon Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/pylon-signs/pylon-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/pylon-signs/pylon-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/pylon-signs/pylon-3.jpg"
        ],
        "Office & Indoor Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/indoor-signs/indoor-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/indoor-signs/indoor-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/indoor-signs/indoor-3.jpg"
        ],
        "3D Signs & Lettering - GTA": [
            "https://custombusinesssigns.ca/images/gallery/3d-signs/3d-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/3d-signs/3d-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/3d-signs/3d-3.jpg"
        ],
        "Window Graphics - GTA": [
            "https://custombusinesssigns.ca/images/gallery/window-graphics/window-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/window-graphics/window-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/window-graphics/window-3.jpg"
        ],
        "Construction Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/construction/construction-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/construction/construction-2.jpg",
            "https://custombusinesssigns.ca/images/gallery/construction/construction-3.jpg"
        ],
        "Digital Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/digital/digital-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/digital/digital-2.jpg"
        ],
        "Awning Graphics - GTA": [
            "https://custombusinesssigns.ca/images/gallery/awnings/awning-1.jpg",
            "https://custombusinesssigns.ca/images/gallery/awnings/awning-2.jpg"
        ],
        "LED Backlit Signs - GTA": [
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-avalee.jpg",
            "https://custombusinesssigns.ca/images/gallery/channel-letters/channel-9601.jpg"
        ],
        "Custom Signs - GTA": [
            "https://custombusinesssigns.ca/images/heroes/hero-quantum.jpg",
            "https://custombusinesssigns.ca/images/heroes/storefront-golden-hour.jpg",
            "https://custombusinesssigns.ca/images/heroes/pylon-road.jpg"
        ]
    };

    // Keep track of created assets so we can link them later
    const createdAssetsMap = {};

    Logger.log('Step 1: Creating Image Assets in the Asset Library...');
    // Loop through campaigns and push all unique images as Assets
    for (const campaignName in imageMapping) {
        const images = imageMapping[campaignName];

        for (const url of images) {
            if (!createdAssetsMap[url]) {
                try {
                    Logger.log(`Downloading and creating asset from: ${url}`);
                    const imageBlob = UrlFetchApp.fetch(url).getBlob();

                    // We derive a clean name for the asset
                    const assetName = url.split('/').pop().replace(/[-.]/g, ' ') + ' - ' + campaignName;

                    const newAsset = AdsApp.adAssets().newImageAssetBuilder()
                        .withName(assetName)
                        .withData(imageBlob)
                        .build()
                        .getResult();

                    createdAssetsMap[url] = newAsset;
                    Logger.log(`  -> Successfully created Asset ID: ${newAsset.getId()}`);
                } catch (e) {
                    Logger.log(`  -> Error processing ${url}: ${e}`);
                }
            }
        }
    }

    Logger.log('\nStep 2: Linking Image Assets to Campaigns...');

    // Now loop through active campaigns and apply the assets
    const campaignIterator = AdsApp.campaigns().get();
    while (campaignIterator.hasNext()) {
        const campaign = campaignIterator.next();
        const campaignName = campaign.getName();

        if (imageMapping[campaignName]) {
            Logger.log(`Processing Campaign: ${campaignName}`);
            const imageUrlsForCampaign = imageMapping[campaignName];

            for (const url of imageUrlsForCampaign) {
                const imageAsset = createdAssetsMap[url];
                if (imageAsset) {
                    try {
                        campaign.addExtension(imageAsset);
                        Logger.log(`  -> Linked image asset to ${campaignName}`);
                    } catch (e) {
                        // Ignore if it's already linked or incorrect asset type
                        Logger.log(`  -> Could not link image to ${campaignName}. Needs to be added via UI. ${e}`);
                    }
                }
            }
        }
    }

    Logger.log('\nScript finished processing Image Assets.');
}
