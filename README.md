![alt text](https://github.com/Brandon225/snippet_converter/blob/master/img/logo.png "reimagin8d")

# Snippets - A text editor snippet converter

This app allows developers to easily migrate their snippets when moving to a new text editor.

----------

## Formatting

### Atom
*Atom snippets should be formatted using CoffeeScript.*

There is a text file in your ~/.atom directory called snippets.cson that contains all your custom snippets that are loaded when you launch Atom. You can also easily open up that file by selecting the Atom > Snippets menu.

>**Example**

>```'.source.js':```
>&nbsp;&nbsp;&nbsp;&nbsp;```'console.log':```
>&nbsp;&nbsp;&nbsp;&nbsp;```'prefix': 'log'```
>&nbsp;&nbsp;&nbsp;&nbsp;```'body': 'console.log($1);$2'```

[more info](http://flight-manual.atom.io/using-atom/sections/snippets/)

### Brackets
*This is formatting information for the Brackets https://github.com/jrowny/brackets-snippets Snippets extension.*

In Brackets each .json file corresponds to a set of snippets. You can use whatever names you would like, but it makes sense to follow Jonathan’s lead and name your files based on the category of snippet used. If you open up one of the files you can see it is a JSON-structured array of objects.

>**Example**

>```[```
> ```{```
>&nbsp;&nbsp;&nbsp;&nbsp;```"name":"Log to the Console",```
>&nbsp;&nbsp;&nbsp;&nbsp;```"trigger":"log",```
>&nbsp;&nbsp;&nbsp;&nbsp;```"usage":"source.js",```
>&nbsp;&nbsp;&nbsp;&nbsp;```"description":"Log to the Console",```
>&nbsp;&nbsp;&nbsp;&nbsp;```"template":"\nconsole.log('$1: ', $2);\n"```
>```}```
>```]```

[more info](http://blog.brackets.io/2012/12/19/snippets-brackets-extension/?lang=en)

### Sublime Text
To create a new snippet, select Tools | New Snippet…. Sublime Text will present you with an skeleton for a new snippet.

Snippets can be stored under any package’s folder, but to keep it simple while you’re learning, you can save them to your Packages/User folder.

>**Example**

>```<snippet>```
>&nbsp;&nbsp;&nbsp;&nbsp;```<content><![CDATA[console.log('$1: ', $2)]]></content>```
>&nbsp;&nbsp;&nbsp;&nbsp;```<tabTrigger>log</tabTrigger>```
>&nbsp;&nbsp;&nbsp;&nbsp;```<scope>source.js</scope>```
>&nbsp;&nbsp;&nbsp;&nbsp;```<description>Log to the Console</description>```
>```</snippet>```

[more info](http://sublimetext.info/docs/en/extensibility/snippets.html)

### Visual Studio Code
*Snippets are defined in a JSON format and stored in a per user (languageId).json file. For example, Markdown snippets go in a markdown.json file.*

You can define your own snippets for specific languages. To open up a snippet file for editing, open User Snippets under File > Preferences (Code > Preferences on Mac) and select the language for which the snippets should appear.

>**Example**

> ```{```
> &nbsp;&nbsp;&nbsp;&nbsp;```"Console Log": {```
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```"prefix": "log",```
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```"body": [```
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```"console.log('$1: ', $2)"```
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ```],```
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;```"description": "Log to console"```
>&nbsp;&nbsp;&nbsp;&nbsp; ```}```
>```}```

[more info](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
