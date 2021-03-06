---
title: Faster loading webpages with webP images
slug: faster-loading-webpages-with-webp-images
excerpt: Have you ever wondered why your website takes forever to load? It is probably because you are using too large images.
author: Temitope Ayodele
date: 2020-12-12
---


Have you ever wondered why your website takes forever to load? It is probably because you are using too large images. The common image types are PNG, JPG, SVG, and GIF. It is time to embrace the modern image formats! Examples are: 
JPEG 2000, JPEG XR and WebP. This article will focus on webP image formats.

## WHAT IS WEBP?

WebP is a powerful image compression technology developed by Google in 2010. It focuses on using advanced optimization techniques to reduce file size and it supports transparency and even animation. WebP formats can help compress your images to become up to two-times smaller than JPG images, and this definitely makes the images load faster and hence leading to better website performance. Take a look at this image.

![png image](https://i.postimg.cc/sXcHWXpv/flowers.png)

>This png image has a size of 482.1KB,
The jpeg format has a size of 55.4KB
When converted to webP, the size became 43KB and the quality was still maintained


## HOW TO USE WEBP
**Firstly, you have to convert your images to webP formats.**

Any common file format can be converted to WebP and still maintain their original quality (lossless compression). There are several online image formatters available all over the internet (such as [this](https://convertio.co/jpeg-webp/) and [this](https://image.online-convert.com/convert-to-webp) ).
However, as awesome as this is, webP is not supported on all browsers. Checkout the support for webP [here](https://caniuse.com/?search=webp).

This is not a big issue as we can still use this format without breaking our images on unsupported browsers by using fallbacks! 

### Using webP with Fallbacks

HTML has two image media element (*img* and *picture*)

With the picture element you can to load zero to many **source** elements and one **img** element. How does this work? The browser will consider each of the image URL in the `source` elements and pick the best match among them. If neither of them is supported by the browser, or if the browser does not even support the picture element at all, it then selects the image in the `img` tag.

If the browser does not support webP image formats, the JPG image is loaded.


To avoid the clumsiness, (as this seems like too many lines of code in my opinion, lol) you can create a component for this. Using ReactJS,

```jsx
const ImageWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  );
};
```

So, whenever you want to add an image in your code, you can easily import the *ImageWithFallback* component and use as an image tag. Keep your code tidy :)

```jsx
<ImageWithFallback
  src="/images/my-image.webp"
  fallback="/images/my-image.png"
  alt="My beautiful portrait"
/>
```

In conclusion, your website speed is a very important factor, and using webP image formats can help you achieve faster loading images with equal good qualities.