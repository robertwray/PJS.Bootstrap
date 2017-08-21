# PJS.Bootstrap
Orchard CMS Theme


### Compatibility
* Requires Orchard 1.7 or higher


### Installation
* Package available for download in the [Orchard Gallery](http://gallery.orchardproject.net/List/Themes/Orchard.Theme.PJS.Bootstrap)
* Demo available [here](http://themes.philipsenechal.com)

(please note that when using the option switcher panel and changing the swatch or refreshing the page, the navbar may render with a top-margin. Simply click a link on the navbar and it should correct itself. The issue does not occur in production, only when using the option switcher panel on the demo site)


### Usage
Includes Admin panel selectable options for:
* Centered or Fluid Layout
* Fixed Top Navigation or Floating Navigation
* Primary or Inverse Navigation Bar Color
* Navigation Bar Search Field
* Sticky or Normal Footer
* Select a [Bootswatch Theme](http://bootswatch.com/2/) or Default Bootstrap Style
* Select from different Blog Layouts


### Included dependencies
* Twitter Bootstrap 3.0.3
* Font Awesome 4.0.3
* Custom shapes for Open Authentication, NGravatar, Latest Twitter, Zen Gallery, oForms, Vandelay Tag Cloud, and Add This Content Sharing modules
* **[Bootswatch 3.x templates](http://bootswatch.com/2/)** for easy theme changes


### Using the Open Authentication module
1. Install the [Open Authentication](http://gallery.orchardproject.net/List/Modules/Orchard.Module.NGM.OpenAuthentication) module
2. From the Admin Settings area for Open Authentication, add a new provider
3. Use the following settings along with your key/secret pair for each to enable with the included styling

Facebook:
* Display Name: Facebook
* Technical Name: facebook
* Identifier: https://graph.facebook.com/oauth/authorize

Twitter:
* Display Name: Twitter
* Technical Name: twitter
* Identifier: https://api.twitter.com/oauth/authorize

Google:
* Display Name: Google
* Technical Name: google
* Identifier: https://www.googleapis.com/auth/plus.login


### Using NGravatar for Comments
1. The theme is configured out of the box to use Gravatar images for Comments. To disable them, comment out or remove the shape inclusion for Gravatar in Views/Parts/Comment.cshtml


### Using the Latest Twitter module
1. Install the [LatestTwitter](http://gallery.orchardproject.net/List/Modules/Orchard.Module.LatestTwitter/1.2.1) module
2. Add a Latest Twitter widget to one of the content zones and configure the settings for your Twitter account


### Using the Zen Gallery module
1. Install the [Zen Gallery](http://gallery.orchardproject.net/List/Modules/Orchard.Module.Nwazet.ZenGallery) module
2. Create a new Gallery from the Admin New Content area
3. Upload images to the resulting Media folder that is created
4. Edit the uploaded images. The Caption and Alternate Text fields for each image are used to display text using the prettyPhoto lightbox plugin


### Using the oForms module
1. Install the [oForms](http://gallery.orchardproject.net/List/Modules/Orchard.Module.oforms) module
2. Create a new form from the oForms Admin area for a dedicated page or a new widget form from the Widgets Admin area to place a form widget in a layer zone
3. The custom shape has been used to align the Captcha field next to the input


### Using the Vandelay Tag Cloud module
1. Install the [Vandelay Industries](http://gallery.orchardproject.net/List/Modules/Orchard.Module.Vandelay.Industries) module
2. Enable the Tag Cloud feature
3. Create a new Tag Cloud widget from the Widgets Admin area


### Using the Add This Content Sharing module
1. Install the [Content Sharing](http://gallery.orchardproject.net/List/Modules/Orchard.Module.Szmyd.Orchard.Modules.Sharing) module
2. From the Admin Settings area for General, add your AddThis service account email
3. From the Admin Content Definition area, add the "Share Bar" part to the Content Types you would like to display the Add This Share Bar on. I typically add it to Page and BlogPost
4. NOTE: There are settings in Placement.info removing the Share Bar part on the home page and placing it properly in the on the BlogPost part. Adjust as necessary for your website


### Credits
* Thanks to [Nicholas Mayne](https://github.com/Jetski5822/ngravatar) for the NGravatar module code
* Thanks to [Advanced REI](https://github.com/advancedrei) for code simplification and Resharper-powered refactoring
* Thanks to all users who have submitted issues and pull requests


### Bugs
Please submit issues via Github.
