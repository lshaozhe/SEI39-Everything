# Bootstrap

> Framework to build responsive, mobile-first websites.

You can find the Bootstrap's documentation [here](https://getbootstrap.com/docs/5.0/getting-started/introduction/).

There are 2 components to Boostrap - `css` and `js`.

The `css` component, which contains all the styles, is to be placed in the `<header>` tag.

The `js` component, which contains different effects and animations, is to be placed at the end of your `html` file before the closing `</body>` tag.

If you do not need the effects, you can include only the `css` components.

```html
<!-- css component to be placed in the <header> tag -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- js component to be placed at the end of your `html` file before the closing </body> tag -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

Your eventual `html` file will look something like this:
```html
<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<title>Boostrap</title>
	<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>
	<link rel='stylesheet' type='text/css' href='./style.css'>
</head>
<body>
	<!-- all other html markup will be before all JS scripts -->
	<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js' integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM' crossorigin='anonymous'></script>
</body>
</html>
```

# How it works?

After you have placed the above link and script, all you need to do is to apply the respective **classes** stated in the documentaion to achieve the same result. All these classes have their own respective css `property` and `value` declared.

Classes such as `container`, `container-fluid`, `fixed-top`, `fix-bottom` etc.

# CDN (Content Delivery Network) link vs downloading/installing through `npm` (node package manager)?

**Downloading**

When you download the package to a specifed folder in your local machine, you can continue working on your web app's stylings even without access to the internet as long as you have linked it correctly in your web app to where you have saved the package on your local machine.

But when your app is deployed to a server on the internet, the downloaded package will have to be deployed together.

**Installing through NPM**

Similar to downloading but instead of downloading to a specified folder in your local machine, it will be downloaded and installed into your web app. Also, you can continue to use it offline as well.

`npm` is a package manager for `js` which you will use to install different libraries into your `js` applications. Different languages and OS uses different package manager. `brew` in `macOS`, `apt` in `ubuntu` and `pip` in `python`.

You will be using `npm` more in the subsequent units.

When your app is ready to be deployed, you will compile a "build" where all installed packages along with your code base will be compiled together.

**CDN Link**

The files are downloaded on the fly whenever your app runs. Therefore, you will need access to the internet before you can access the package and continue your development.

The same applies for users of your app. They will need access to the internet, else in this particular case with Boostrap, the classes in your markup will not work.

What we are doing above uses this method.

# What about other CSS Frameworks like Materialise/Skeleton?

They are all pretty much similar just with different stylings and effects between them. Choose one and go ahead with it. The application for these frameworks into your web app are pretty much similar.

# Let's start

We will go through the following in Bootstrap to give you a rough idea how `css` framework works:

- Breakpoints (understanding this is crucial in making your web app mobile responsive)
- Containers (application of breakpoints)
- Grid system (application of breakpoints)
- Carousel
- Modals

# What are `-webkit`, `-moz`, `-o` and `-ms`?

These are called **prefixes**.

According to MDN (see [this](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) for more info):

> Browser vendors sometimes add prefixes to experimental or nonstandard CSS properties and JavaScript APIs, so developers can experiment with new ideas while—in theory—preventing their experiments from being relied upon and then breaking web developers' code during the standardization process. Developers should wait to include the unprefixed property until browser behavior is standardized.

Which prefix do I apply for the different browsers?
- `-webkit` for Chrome and Safari
- `-moz` for Firefox
- `-o` for Opera
- `-ms` for Internet Explorer

Depending on the requirements for browser support for web apps, you may have to use these different prefixes.

If you have to use these prefixes, it is good practice to specify vendor prefixes first followed by non vendor prefixes. for eg,

```css
.my-css-class {
	-moz-css-property: css-value;
	-ms-css-property: css-value;
	-o-css-property: css-value;
	-webkit-css-property: css-value;
	css-property: css-value;
}
```
