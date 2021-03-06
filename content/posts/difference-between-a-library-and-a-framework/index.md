---
title: The Difference between a Library and a Framework
slug: difference-between-a-library-and-a-framework
excerpt: A library and a Framework are both reusable code written to solve problems. To know the difference between a Library and a Framework, we have to first understand what they are individually.
author: Temitope Ayodele
date: 2020-11-30
# hero: ./images/hero.jpg
---

A library and a Framework are both reusable code written to solve problems. To know the difference between a Library and a Framework, we have to first understand what they are individually.
So,

**What is a Library?**
A Library is a collection of reusable functions that can be used in our code when we need it. Most programming languages have their standard library, but you can choose to write your own custom library that will be useful to you, especially to ensure that your code is DRY (Don't Repeat Yourself). For instance, you see that there is a particular function you will need consistently in your code, you can choose to write a general function where you can pass in the necessary parameters. That can be seen as a library. Example of a Library is jQuery.

**What is a Framework?**
A Framework is usually a collection of libraries that work together to serve a greater purpose. It tells the developer what they need. It is like an structure you plug your code into. Example of a Framework is VueJS.

Both frameworks and libraries are code written by someone else that is used to help solve common problems.

## **Difference between a Library and a Framework**

The key difference between a Library and a Framework is the "Inversion of Control" (IoC). With a Library, you are in charge, which means you can choose where and when you want to insert/use the library, and what aspect of the library you want to include (you plug your library into your code). Meanwhile, with a Framework, the framework is in charge, not you, which means a framework tells you where to put a specific part of your code (you plug your code into a framework) A framework dictates how we develop our applications, whereas a library is like an API that we can call when you need to.

Consider a library as the physical library we go to. Whenever you need a book, you go to the shelve to take it. You can choose any book you need that is relevant to your work, at anytime, which means you are in charge.
Consider a Framework as a foundation of a building. You build your house on that foundation. So, if you are going to use a particular framework, you start with that framework, and allow the framework determine where you put specific aspect of your code, which means the framework is in charge.

You can also look at a Framework as a culture of a particular town you to live in, the way of life and patterns that have to be followed. Meanwhile, a library is a place you visit when you want to. You can choose to go to any country you find attractive and useful, get whatever you need and go back home because you do not live there. So, the Framework determines how exactly you write your code, while the library can just be added at any specific aspect of the code where you find the library useful.

On the idea of being opinionated, Frameworks are more opinionated, as it mandates you to put specific files in specific places/locations within a project. A Framework can start/initialize itself. Meanwhile, Libraries are rarely opinionated, as it rarely mandates you on where to put your files or not. You have to manually initialize your application yourself when using a library, as the library cannot start your app for you.
Also note that different frameworks are opinionated at different degrees. For instance, I consider AngularJS a highly opinionated framework, and VueJS a less-opinionated framework.

Finally, you can only call what belongs to a Framework within that Framework, whereas, a Library can be called out of context. You can use a library anywhere you deem fit in your code, but you can only use whatever belongs to a Framework in that same framework. It is much easier to replace a Library than it is to replace a Framework.
